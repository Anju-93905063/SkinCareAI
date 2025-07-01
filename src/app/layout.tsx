import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/utils/Providers";
import { geistSans, geistMono } from "../fonts";

export const metadata: Metadata = {
  title: "SkinAI – Your AI-Powered Dermatology Assistant",
  description:
    "SkinAI helps you analyze skin issues from images using AI and get insights instantly.",
  keywords: [
    "AI Dermatology",
    "Skin Analysis",
    "AI Skin Assistant",
    "Remote Skin Diagnosis",
    "Skin Disease Detection",
    "SkinAI",
  ],
  authors: [{ name: "Gannabathula Himanjali", url: "https://github.com/Anju-93905063" }],
  category: "Health with Technology",
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html> 
      <head>
      </head>
     <body className="bg-gray-50 text-black antialiased w-screen min-h-screen overflow-x-hidden">
        <Providers>
          <div className="max-w-7xl mx-auto px-4">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
