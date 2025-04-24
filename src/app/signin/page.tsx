"use client";

import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Link from "next/link";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Berhasil masuk! Mohon tunggu...");
      // TODO: Redirect ke halaman utama jika ingin
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow">
        <h1 className="text-3xl font-extrabold mb-2 text-center text-gray-800 tracking-tight">Sign In to Streem</h1>
        <p className="text-center text-gray-500 mb-6">Masuk menggunakan email dan password akun kamu.</p>
        <div className="flex justify-center mb-6">
          {/* Ganti dengan gambar/logo kamu jika perlu */}
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7.5C19.25 7.75 18.5 7.875 17.75 7.9C18.5 7.4 19.05 6.7 19.3 5.85C18.55 6.3 17.75 6.6 16.9 6.75C16.2 5.95 15.15 5.5 14 5.5C11.75 5.5 10 7.25 10 9.5C10 9.8 10.05 10.1 10.1 10.4C7.05 10.25 4.35 8.85 2.5 6.8C2.15 7.35 1.95 7.95 1.95 8.6C1.95 9.85 2.65 10.95 3.7 11.6C3 11.6 2.35 11.4 1.8 11.1V11.15C1.8 13.05 3.15 14.6 4.95 14.95C4.6 15.05 4.2 15.1 3.8 15.1C3.5 15.1 3.25 15.1 2.95 15.05C3.5 16.55 5 17.6 6.75 17.65C5.4 18.6 3.7 19.15 1.85 19.15C1.5 19.15 1.15 19.15 0.8 19.1C2.6 20.1 4.7 20.7 6.95 20.7C14 20.7 18.2 15.2 18.2 10.1C18.2 9.9 18.2 9.7 18.2 9.5C18.95 9 19.6 8.35 20 7.5Z" fill="#22c55e"/>
          </svg>
        </div>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 bg-gray-50 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 text-gray-800"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-300 bg-gray-50 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 text-gray-800"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-blue-600 text-sm focus:outline-none"
              onClick={() => setShowPassword(v => !v)}
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded font-semibold mt-2 hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        {message && (
          <div className="mt-3 text-center text-red-600 font-medium">{message}</div>
        )}
        <div className="mt-6 text-center text-gray-400">
          Belum punya akun?{' '}
          <Link href="/signup" className="text-blue-600 underline font-semibold">
            Daftar di sini
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
