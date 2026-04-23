"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen bg-[var(--color-background)] dark:bg-[#0A0A0A]">
      <title>Success | Aldo Dashboard</title>
      <div className="flex w-full flex-col lg:flex-row items-center justify-center">
        <div className="w-full max-w-[440px] rounded-2xl border border-gray-200 bg-white p-12 shadow-sm text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <Check className="h-10 w-10 text-[var(--color-primary)]" strokeWidth={3} />
            </div>
          </div>

          <h1 className="mb-3 text-2xl font-bold text-gray-900">Password Changed!</h1>
          <p className="mb-10 text-sm text-gray-500 leading-relaxed px-4">
            Return to the login page to enter your account with your new password
          </p>

          <Link
            href="/auth"
            className="block w-full rounded-xl bg-[var(--color-primary)] py-3.5 text-base font-bold text-white transition-all hover:bg-[var(--color-primary)]/90 active:scale-[0.98]"
          >
            Back To Login
          </Link>
        </div>
        <h1 className="mb-3 text-2xl font-bold text-gray-900">Password Changed!</h1>
        <p className="mb-10 text-sm text-gray-500 leading-relaxed px-4">
          Return to the login page to enter your account with your new password
        </p>

        <Link
          href="/auth"
          className="block w-full rounded-xl bg-[var(--color-primary)] py-3.5 text-base font-bold text-white transition-all hover:bg-[var(--color-primary)]/90 active:scale-[0.98]"
        >
          Back To Login
        </Link>
      </div>
    </div>
  );
}
