// src/app/page.tsx
"use client";

import Navigation from "@/components/Navigation";
import WorkSection from "@/components/Works";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-emerald-50 text-center overflow-hidden">
      
      {/* ——— Header with Animated Top Heading + Navigation ——— */}
      <header className="w-full max-w-screen-xl mx-auto px-6 pt-12 pb-6">
       

        {/* Navigation Bar */}
        <Navigation />
      </header>

      <main className="relative flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto px-6 py-16 sm:py-24 gap-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800 max-w-4xl">
          Your AI-Powered Skin Health Companion..
        </h1>

        {/* CTA Button */}
        <Link
          href="/dashboard"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-lg"
        >
          Test Your Skin
        </Link>
      </main>

      {/* Work Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto w-full">
        <WorkSection />
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-8 text-sm text-gray-500">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Skin.AI All rights reserved.
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="/privacy" className="hover:text-gray-700 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-700 transition">
              Terms of Service
            </a>
            <a
              href="mailto:gannabathulahimanjali@gmail.com"
              className="hover:text-gray-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
