"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type ReportData = {
  diseaseName: string;
  symptoms: string;
  precautions: string[];
  foodSuggestions: string[];
};

function OutputPageContent() {
  const searchParams = useSearchParams();

  const [reportData, setReportData] = useState<ReportData>({
    diseaseName: "",
    symptoms: "",
    precautions: [],
    foodSuggestions: [],
  });

  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());

    const safeJsonParse = (str: string) => {
      try {
        return JSON.parse(str);
      } catch {
        return [];
      }
    };

    setReportData({
      diseaseName: query["Disease Name"] || "",
      symptoms: query["Symptoms"] || "",
      precautions: query["precautions"]
        ? safeJsonParse(query["precautions"])
        : [],
      foodSuggestions: query["food suggestions"]
        ? safeJsonParse(query["food suggestions"])
        : [],
    });
  }, [searchParams]);

  // Print handler
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable, #printable * {
            visibility: visible;
          }
          #printable {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            margin: 0;
            box-shadow: none;
            background: white;
          }
          /* Hide print button in print */
          #printButton {
            display: none;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-emerald-700 mb-8 drop-shadow-md">
          Disease Report
        </h1>

        {/* Printable area */}
        <div
          id="printable"
          className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 space-y-8"
        >
          {/* Disease Name */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-emerald-300 pb-1">
              Disease Name
            </h2>
            <p className="text-lg text-gray-800">{reportData.diseaseName || "N/A"}</p>
          </section>

          {/* Symptoms */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-emerald-300 pb-1">
              Symptoms
            </h2>
            <p className="text-lg text-gray-800 whitespace-pre-wrap">
              {reportData.symptoms || "N/A"}
            </p>
          </section>

          {/* Precautions */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-emerald-300 pb-1">
              Precautions
            </h2>
            {reportData.precautions.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {reportData.precautions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No precautions available.</p>
            )}
          </section>

          {/* Food Suggestions */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b-2 border-emerald-300 pb-1">
              Food Suggestions
            </h2>
            {reportData.foodSuggestions.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {reportData.foodSuggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No food suggestions available.</p>
            )}
          </section>
        </div>

        {/* Print Button */}
        <button
          id="printButton"
          onClick={handlePrint}
          className="mt-10 px-8 py-3 rounded-full bg-emerald-600 text-white text-lg font-semibold hover:bg-emerald-700 transition-shadow shadow-lg"
        >
          Print Report
        </button>
      </div>
    </>
  );
}

export default function OutputPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <OutputPageContent />
    </Suspense>
  );
}
