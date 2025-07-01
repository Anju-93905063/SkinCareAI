import { GenerateInformation } from "@/utils/gemini";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const disease = formData.get("disease")?.toString().trim() || "skin cancer";

    const generatedText = await GenerateInformation(disease);

    return NextResponse.json(
      {
        message: "Data extracted successfully",
        predictions: generatedText,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}


