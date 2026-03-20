"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Shield,
  Pencil,
  ChevronDown,
  Save,
  RotateCcw
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex-1 pb-10 bg-[#F8F9FA] dark:bg-black">
      <title>Settings | Aldo</title>
      <Header
        title="Settings"
        subtitle="Manage platform configuration and legal information."
      />

      <main className="p-8 max-w-4xl mx-auto space-y-6">
        {/* General Settings Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 mt-12 relative">
          
          {/* Avatar floating at top center */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-sm dark:border-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-6">General Settings</h3>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Platform Name</label>
              <input 
                type="text" 
                defaultValue="Horizon SaaS" 
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm font-medium text-gray-900 outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Support Email</label>
              <input 
                type="text" 
                defaultValue="support@horizon-saas.com" 
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm font-medium text-gray-900 outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Default Language</label>
              <div className="relative">
                <select 
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm font-medium text-gray-900 outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  defaultValue="en-US"
                >
                  <option value="en-US">English (United States)</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="it">Italiano</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Pages Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Legal Pages</h3>
          
          <div className="space-y-4">
            {/* Terms & Conditions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-gray-100 p-4 transition-all hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Terms & Conditions</h4>
                  <p className="text-xs font-medium text-gray-400 mt-0.5">Last updated: Oct 12, 2023</p>
                </div>
              </div>
              <Link 
                href="/dashboard/settings/legal-editor?tab=terms"
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-xs font-bold text-gray-700 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Link>
            </div>

            {/* Privacy Policy */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-gray-100 p-4 transition-all hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Privacy Policy</h4>
                  <p className="text-xs font-medium text-gray-400 mt-0.5">Last updated: Nov 05, 2023</p>
                </div>
              </div>
              <Link 
                href="/dashboard/settings/legal-editor?tab=privacy"
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-xs font-bold text-gray-700 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Link>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-gray-500 transition-all hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            Discard Changes
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#FF8C42] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#FF8C42]/20 transition-all hover:bg-[#F27E33] active:scale-95">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
