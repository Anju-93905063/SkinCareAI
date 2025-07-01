import { Geist, Geist_Mono,Kaisei_Opti } from "next/font/google";

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
// src/fonts.ts

export const kaiseiOpti = Kaisei_Opti({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaisei-opti",
});

