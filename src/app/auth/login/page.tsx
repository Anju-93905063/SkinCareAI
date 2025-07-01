"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    setError("");
    console.log("Logging in with", email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-semibold mb-8 text-center text-emerald-700">
        Login
      </h1>

      {error && (
        <p className="mb-6 text-center text-red-600 font-medium">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
