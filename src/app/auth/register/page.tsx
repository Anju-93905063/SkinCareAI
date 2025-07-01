"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    // TODO: Add your registration logic here (API call, validation, etc.)
    alert(`Registered successfully!\nName: ${firstName} ${lastName}\nEmail: ${email}`);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow bg-white">
      <h1 className="text-2xl font-semibold mb-6 text-black">Register</h1>
      {error && <p className="mb-4 text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-1 font-medium text-black">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded placeholder-black text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1 font-medium text-black">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded placeholder-black text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded placeholder-black text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-black">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded placeholder-black text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1 font-medium text-black">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded placeholder-black text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
