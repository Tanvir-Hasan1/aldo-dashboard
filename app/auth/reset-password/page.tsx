"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle password reset logic
    console.log("Setting new password...");
    router.push("/auth/success");
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] dark:bg-[#0A0A0A]">
      <title>Reset Password | Aldo Dashboard</title>
      <div className="flex w-full flex-col lg:flex-row items-center justify-center px-4">
        <div className="w-full max-w-[440px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-gray-900">Set new password</h1>
            <p className="text-sm text-gray-500">Set a new password and continue your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                Set Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Type a strong password"
                  className="block w-full rounded-xl border border-gray-200 py-3 px-4 text-sm transition-all focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 outline-none pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirm-password"
                className="text-sm font-semibold text-gray-700"
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Re-type password"
                  className="block w-full rounded-xl border border-gray-200 py-3 px-4 text-sm transition-all focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 outline-none pr-10"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#FF8C42] py-3.5 text-base font-bold text-white transition-all hover:bg-[#FF8C42]/90 active:scale-[0.98]"
            >
              Continue
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
