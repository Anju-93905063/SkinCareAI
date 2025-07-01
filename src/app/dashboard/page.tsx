"use client";

import { Button } from "@nextui-org/react";
import { Image as ImageIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ImageResponse } from "@/store/User";
import Image from "next/image";

export default function Page() {
  const setResponse = useSetRecoilState(ImageResponse);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    setLoading(true);
    const file = inputRef.current?.files?.[0];
    if (!file) {
      alert("No file selected");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("disease", "skin cancer diseases");

    try {
      const res = await fetch("/api/image", { method: "POST", body: formData });
      const data: { message: string; predictions?: string } = await res.json();
      if (!data.predictions) {
        alert("Server returned no predictions");
        return;
      }

      const raw = data.predictions;
      const start = raw.indexOf("{");
      const end = raw.lastIndexOf("}");
      if (start === -1 || end === -1) {
        throw new Error("Failed to locate JSON in predictions");
      }
      const jsonString = raw.slice(start, end + 1);
      const jsonResult: {
        diseaseName: string;
        symptoms: string;
        precautions: string[];
        foodSuggestions: string[];
      } = JSON.parse(jsonString);

      setResponse(jsonResult);

      const params = new URLSearchParams();
      params.set("Disease Name", jsonResult.diseaseName);
      params.set("Symptoms", jsonResult.symptoms);
      params.set("precautions", JSON.stringify(jsonResult.precautions));
      params.set("food suggestions", JSON.stringify(jsonResult.foodSuggestions));

      location.href = `/output?${params.toString()}`;
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(`Try Again: ${err.message}`);
      } else {
        alert("Try Again: Unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = () => {
    const file = inputRef.current?.files?.[0];
    if (file) {
      setFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setFileName("");
      setPreviewUrl(null);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-blue-50 to-emerald-50 px-4">
      <div className="min-w-[40vw] min-h-[80vh] border border-emerald-200 bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <div className="w-full h-[60%] flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-4 bg-gray-50">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Selected Preview"
              width={400}
              height={400}
              className="rounded-xl object-contain max-h-full max-w-full transition-all"
              unoptimized
            />
          ) : (
            <>
              <ImageIcon size={64} strokeWidth={1} className="text-gray-400 mb-4" />
              <p className="text-gray-500">Upload your skin image for testing</p>
            </>
          )}
        </div>

        {fileName && (
          <div className="mt-4 text-center text-gray-600 text-sm">{fileName}</div>
        )}

        <div className="mt-6 flex justify-center gap-4 w-full px-4">
          <label
            htmlFor="fileInput"
            className="flex-1 max-w-[200px] text-center cursor-pointer bg-emerald-500 text-white font-semibold py-2 rounded-full shadow-md hover:bg-emerald-600 transition"
          >
            Choose Image
            <input
              ref={inputRef}
              onChange={handleFileChange}
              type="file"
              accept="image/png, image/jpeg"
              id="fileInput"
              className="hidden"
            />
          </label>
          <Button
            className="flex-1 max-w-[200px] rounded-full py-2 text-white bg-blue-600 hover:bg-blue-700 transition font-semibold shadow"
            onPress={handleSubmit}
            isDisabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>

        <p className="mt-8 text-gray-700 text-sm text-center max-w-md">
          Upload a clear image of the affected skin area to get AI-powered analysis and suggestions.
        </p>
      </div>
    </div>
  );
}
