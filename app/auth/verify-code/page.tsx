"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function VerifyCodePage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input
    if (value !== "" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("Verifying OTP:", code);
    if (code.length === 4) {
      router.push("/auth/reset-password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] px-4">
      <title>Verify Code | Aldo Dashboard</title>
      <div className="w-full max-w-[440px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Verify Code</h1>
          <p className="text-sm text-gray-500 max-w-[280px] mx-auto leading-relaxed">
            We Sent OTP code to your email <br />
            <span className="font-semibold text-gray-700">Superflyservice@gmail.com</span> Enter the code below to verify
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-center gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="h-14 w-14 rounded-xl border border-gray-200 text-center text-xl font-bold transition-all focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 outline-none"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#FF8C42] py-3.5 text-base font-bold text-white transition-all hover:bg-[#FF8C42]/90 active:scale-[0.98]"
          >
            Next
          </button>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500">
              Don't receive OTP?{" "}
              <button type="button" className="font-medium text-[#FF8C42] hover:underline">
                Resend again
              </button>
            </p>
            <Link
              href="/auth"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
