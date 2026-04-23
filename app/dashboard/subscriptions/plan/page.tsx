"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import {
  CheckCircle2,
  Calendar,
  Pencil,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const features = [
  "Unlimited invoice scanning",
  "Advanced AI insights",
  "Revenue and cost analytics",
  "Performance reports",
  "Supplier price alerts",
];

const couponsData = [
  { code: "SAVE20", discount: "20%", usage: "15 / 100", expiry: "Mar 31, 2026", status: "Active" },
  { code: "LAUNCH50", discount: "$50.00", usage: "88 / 200", expiry: "Mar 15, 2026", status: "Active" },
  { code: "WINTER10", discount: "10%", usage: "50 / 50", expiry: "Jan 10, 2026", status: "Expired" },
  { code: "PARTNERVIP", discount: "100%", usage: "2 / 10", expiry: "No Expiry", status: "Paused" },
];

export default function SubscriptionPlans() {
  const [isPlanVisible, setIsPlanVisible] = useState(true);

  return (
    <div className="flex-1 pb-10">
      <title>Subscription Plans | Aldo</title>
      <Header title="Active Subscription Plans" />

      <main className="p-8 space-y-8 max-w-7xl mx-auto xl:mx-0 xl:max-w-none">
        {/* Pro Plan Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col xl:flex-row gap-8 lg:gap-12">
            
            {/* Plan Details & Features */}
            <div className="flex-1 space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-3">
                  <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] dark:bg-orange-900/20">
                    Best Plan
                  </span>
                  <h2 className="text-4xl font-black tracking-tight text-[#1E253A] dark:text-white">Pro Plan</h2>
                </div>
                <div className="lg:text-right">
                  <div className="flex items-baseline lg:justify-end gap-1 text-[#1E253A] dark:text-white">
                    <span className="text-3xl font-black">$29</span>
                    <span className="text-sm font-bold text-gray-500">/ month</span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-[var(--color-primary)]">or €290 / year (save 20%)</p>
                </div>
              </div>

              {/* Trial Status Banne */}
              <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                <ShieldCheck className="h-5 w-5 text-[var(--color-primary)]" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Trial Status: <span className="font-bold text-gray-900 dark:text-white">7 days free trial active for new users</span>
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)]" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Actions Sidebar */}
            <div className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-6 xl:w-80 dark:bg-gray-800/50">
              <h3 className="mb-2 text-xs font-black uppercase tracking-wider text-gray-900 dark:text-gray-100">Internal Actions</h3>
              
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                <Pencil className="h-4 w-4" />
                Edit Price
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                <Calendar className="h-4 w-4" />
                Edit Annual Price
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                <ShieldCheck className="h-4 w-4" />
                Change Trial Period
              </button>

              <div className="mt-2 flex items-center justify-between rounded-xl bg-orange-50/50 p-4 transition-all dark:bg-orange-900/10">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Plan Visibility</span>
                <button 
                  onClick={() => setIsPlanVisible(!isPlanVisible)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isPlanVisible ? 'bg-[var(--color-primary)]' : 'bg-gray-300 dark:bg-gray-600'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isPlanVisible ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Create Coupon */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1 rounded-full bg-[var(--color-primary)]"></div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Create Coupon</h2>
            </div>
            
            <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Coupon Code</label>
                  <input type="text" placeholder="E.G. SAVE20" className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3.5 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 dark:border-gray-800 dark:bg-gray-800 dark: uppercase text-[var(--color-text-input)]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Discount Type</label>
                    <select className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3.5 text-sm font-medium text-gray-700 outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200">
                      <option>Percentage (%)</option>
                      <option>Fixed Amount ($)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Value</label>
                    <input type="text" placeholder="20" className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3.5 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 dark:border-gray-800 dark:bg-gray-800 dark: text-[var(--color-text-input)]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Expiration Date</label>
                  <div className="relative">
                    <input type="date" className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3.5 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 dark:border-gray-800 dark:bg-gray-800 dark: text-[var(--color-text-input)]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Usage Limit</label>
                  <input type="number" placeholder="100" className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3.5 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 dark:border-gray-800 dark:bg-gray-800 dark: text-[var(--color-text-input)]" />
                </div>

                <button type="button" className="w-full rounded-xl bg-[var(--color-primary)] p-4 text-sm font-black text-white shadow-md shadow-[var(--color-primary)]/20 transition hover:bg-[#e07b3a] active:scale-95 mt-4">
                  Create Coupon Code
                </button>
              </form>
            </div>
          </div>

          {/* Coupon Management */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1 rounded-full bg-[var(--color-primary)]"></div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Coupon Management</h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 h-full max-h-[580px] flex flex-col">
              <div className="overflow-x-auto flex-1 p-2">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs font-black uppercase tracking-wider text-[#1E253A] dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">
                    <tr>
                      <th className="px-6 py-6 pb-4">Coupon Code</th>
                      <th className="px-6 py-6 pb-4">Discount</th>
                      <th className="px-6 py-6 pb-4">Usage Count</th>
                      <th className="px-6 py-6 pb-4">Expiration Date</th>
                      <th className="px-6 py-6 pb-4">Status</th>
                      <th className="px-6 py-6 pb-4 text-center"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                    {couponsData.map((coupon, idx) => (
                      <tr key={idx} className="group transition-all hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                        <td className="px-6 py-5">
                          <span className={`inline-flex rounded-lg px-3 py-1.5 text-xs font-black tracking-widest text-white ${coupon.status === 'Expired' ? 'bg-gray-400 dark:bg-gray-600' : 'bg-[#2A2B3D] dark:bg-gray-800'}`}>
                            {coupon.code}
                          </span>
                        </td>
                        <td className="px-6 py-5 font-bold text-[#1E253A] dark:text-white">{coupon.discount}</td>
                        <td className="px-6 py-5 font-medium text-[#7D8A9E] dark:text-gray-400">
                          {coupon.usage.split(' / ')[0]} / <span className="font-bold">{coupon.usage.split(' / ')[1]}</span>
                        </td>
                        <td className="px-6 py-5 font-bold text-[#7D8A9E] dark:text-gray-400">{coupon.expiry}</td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-black ${
                            coupon.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 line-through-none" :
                            coupon.status === "Expired" ? "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400" :
                            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-500"
                          }`}>
                            {coupon.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button className="h-8 w-8 inline-flex items-center justify-center rounded-lg text-gray-400 opacity-0 group-hover:opacity-100 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white transition">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Minimal Pagination inside Card */}
              <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800/50">
                <span className="text-xs font-bold text-[#7D8A9E] dark:text-gray-400">Showing 4 of 24 coupons</span>
                <div className="flex items-center gap-2">
                  <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-[#1E253A] hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                    Previous
                  </button>
                  <button className="flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-[#e07b3a]">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
