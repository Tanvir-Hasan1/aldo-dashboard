"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Link from "next/link";
import {
  ChevronRight,
  Paperclip,
  Reply,
  Bold,
  Italic,
  Link as LinkIcon,
  List,
  Image as ImageIcon,
  User,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function TicketProfilePage({ params }: { params: { id: string } }) {
  // Use id 8429 to match the mockup styling and data
  
  return (
    <div className="flex-1 pb-10 bg-[var(--color-background)] dark:bg-black">
      <title>Ticket #8429 | Aldo</title>
      <Header />

      <main className="p-8 max-w-[1400px] mx-auto space-y-6">
        {/* Ticket Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-4 dark:text-gray-500">
              <Link href="/dashboard/support" className="hover:text-gray-900 dark:hover:text-white transition-all">Tickets</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-gray-900 dark:text-white">Ticket #8429</span>
            </div>
            <h1 className="text-[32px] font-black text-[#1F2937] dark:text-white tracking-[-0.02em]">Order not received</h1>
            <p className="text-sm font-semibold text-gray-400 mt-2">Submitted 2 hours ago by Alex Rivera</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-[var(--color-primary-light)] px-4 py-2 text-sm font-bold text-[var(--color-primary)] dark:bg-orange-900/20">
              High Priority
            </span>
            <span className="rounded-xl bg-[#ECFDF5] border border-[#D1FAE5] px-4 py-2 text-sm font-bold text-[#059669] dark:bg-emerald-900/20 dark:border-emerald-800/30">
              Open
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Original Message Card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F4F6] text-gray-400 dark:bg-gray-800">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">Alex Rivera</h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 mt-1">10:24 AM</span>
              </div>
              
              <div className="space-y-4 text-[15px] font-medium leading-relaxed text-[#6B7280] dark:text-gray-300">
                <p>
                  Hi support team, I placed an order (#1234) from "The Golden Griddle" about an hour ago. The app says it was delivered 15 minutes ago, but I haven't received anything at my door.
                </p>
                <p>
                  I checked with my neighbors and nobody has seen the driver. Could you please look into this or process a refund? I'm quite hungry!
                </p>
              </div>

              {/* Attachment */}
              <div className="mt-8 flex items-center justify-between rounded-xl bg-[#F9FAFB] p-4 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <Paperclip className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-semibold text-[#4B5563] dark:text-gray-300">
                    screenshot_order_status.png <span className="text-gray-400 font-medium ml-1">(1.2 MB)</span>
                  </span>
                </div>
                <button className="text-sm font-bold text-[var(--color-primary)] hover:underline">Download</button>
              </div>
            </div>

            {/* Reply Card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3 mb-6">
                <Reply className="h-5 w-5 text-[#6B7280] scale-x-[-1]" />
                <h3 className="text-lg font-bold text-[#1F2937] dark:text-white">Send a Reply</h3>
              </div>

              <div className="rounded-xl border border-gray-100 overflow-hidden dark:border-gray-700">
                {/* Formatting Toolbar */}
                <div className="flex items-center gap-4 border-b border-gray-100 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800/50">
                  <button className="text-gray-400 hover:text-[#1F2937] dark:hover:text-white transition-colors"><Bold className="h-4 w-4" /></button>
                  <button className="text-gray-400 hover:text-[#1F2937] dark:hover:text-white transition-colors"><Italic className="h-4 w-4" /></button>
                  <button className="text-gray-400 hover:text-[#1F2937] dark:hover:text-white transition-colors"><LinkIcon className="h-4 w-4" /></button>
                  <button className="text-gray-400 hover:text-[#1F2937] dark:hover:text-white transition-colors"><List className="h-4 w-4" /></button>
                  <div className="w-px h-4 bg-gray-200 mx-1 dark:bg-gray-600"></div>
                  <button className="text-gray-400 hover:text-[#1F2937] dark:hover:text-white transition-colors"><ImageIcon className="h-4 w-4" /></button>
                </div>
                {/* Textarea */}
                <textarea 
                  className="w-full min-h-[180px] resize-y p-5 text-sm font-medium outline-none text-[#1F2937] bg-white placeholder:text-gray-300 dark:bg-gray-900 dark:text-gray-100"
                  placeholder="Type your response to Alex..."
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer h-4 w-4 appearance-none rounded border border-gray-200 bg-white checked:border-[var(--color-primary)] checked:bg-[var(--color-primary)] focus:ring-0 dark:border-gray-600 dark:bg-gray-800 text-[var(--color-text-input)]" />
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400 group-hover:text-gray-700 transition-colors">
                    Post as internal note <span className="font-medium text-gray-400 ml-1">(hidden from customer)</span>
                  </span>
                </label>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none rounded-lg border border-gray-100 bg-white px-6 py-2.5 text-sm font-bold text-[#4B5563] shadow-sm transition-all hover:bg-gray-50 hover:border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                    Mark as Resolved
                  </button>
                  <button className="flex-1 sm:flex-none rounded-lg bg-[var(--color-primary)] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[var(--color-primary)]/20 transition-all hover:bg-[var(--color-primary-hover)] active:scale-95">
                    Send Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area - Customer Details */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 sticky top-24">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-8">CUSTOMER DETAILS</h3>
              
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-50 dark:border-gray-800/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] dark:bg-orange-900/20">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">Alex Rivera</h4>
                  <p className="text-xs font-semibold text-gray-400 mt-0.5">Customer since Jan 2023</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center text-[#9CA3AF]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-[#4B5563] dark:text-gray-300">alex.rivera@example.com</span>
                </div>
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center text-[#9CA3AF]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-[#4B5563] dark:text-gray-300">+1 (555) 012-3456</span>
                </div>
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center text-[#9CA3AF]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-[#4B5563] dark:text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
