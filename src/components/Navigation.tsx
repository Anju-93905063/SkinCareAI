"use client";

import Link from "next/link";

interface PropType {
  className?: string;
}

export default function Navigation({ className }: PropType) {
  const user = null;

  return (
    <nav className={`w-full flex justify-end items-center gap-4 px-10 py-4 ${className ?? ""}`}>
      {user ? (
        <>
          <Link href="/">
            <span className="text-gray-800 font-medium hover:text-emerald-600 transition">Home</span>
          </Link>
          <Link href="/dashboard">
            <span className="text-gray-800 font-medium hover:text-emerald-600 transition">Dashboard</span>
          </Link>
        </>
      ) : (
        <>
          <Link href="/auth/login">
            <span className="px-5 py-2 border border-emerald-500 text-emerald-500 font-medium rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300">
              Login
            </span>
          </Link>
          <Link href="/auth/register">
            <span className="px-5 py-2 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-all duration-300">
              Register
            </span>
          </Link>
        </>
      )}
    </nav>
  );
}
