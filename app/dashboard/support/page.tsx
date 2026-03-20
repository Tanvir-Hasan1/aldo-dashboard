"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  ClipboardList
} from "lucide-react";

const stats = [
  {
    name: "ACTIVE TICKETS",
    value: "42",
    icon: ClipboardList,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    name: "TICKETS RESOLVED",
    value: "1,284",
    icon: CheckCircle2,
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
  },
];

const tickets = [
  {
    id: "JD",
    name: "John Doe",
    restaurant: "The Golden Grill",
    issue: "Unable to update menu pricing in dashboa...",
    status: "Open",
    date: "Oct 24, 2023",
  },
  {
    id: "MS",
    name: "Maria Santos",
    restaurant: "Pasta Palace",
    issue: "Payment integration failure for online orders",
    status: "Open",
    date: "Oct 23, 2023",
  },
  {
    id: "RK",
    name: "Robert King",
    restaurant: "Sushi Zen",
    issue: "Printer connectivity issue on POS terminal",
    status: "Resolved",
    date: "Oct 21, 2023",
  },
  {
    id: "AL",
    name: "Anita Lee",
    restaurant: "Burger Town",
    issue: "Refund request for cancelled order #10293",
    status: "Resolved",
    date: "Oct 20, 2023",
  },
];

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("Open");

  return (
    <div className="flex-1 pb-10">
      <title>Support | Aldo</title>
      <Header
        title="Support"
        subtitle="Manage support requests from users."
      />

      <main className="p-8 space-y-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex items-center gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                <p className="text-xs font-bold text-gray-500 mt-1">{stat.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex rounded-lg bg-white p-1 border border-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            {["Open", "Resolved", "All Tickets"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-6 py-2 text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-[#FF8C42] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search support requests..."
              className="block w-full rounded-full border border-gray-100 bg-white py-2.5 pl-11 pr-4 text-sm shadow-sm outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] dark:border-gray-800 dark:bg-gray-900"
            />
          </div>
        </div>

        {/* Tickets Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-50 bg-white text-xs font-bold uppercase tracking-wider text-gray-500 dark:border-gray-800 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-5">USER NAME</th>
                  <th className="px-6 py-5">RESTAURANT</th>
                  <th className="px-6 py-5">ISSUE/SUBJECT</th>
                  <th className="px-6 py-5">STATUS</th>
                  <th className="px-6 py-5">DATE</th>
                  <th className="px-6 py-5 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {tickets.map((ticket) => (
                  <tr key={ticket.name} className="group transition-all hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                          {ticket.id}
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">{ticket.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-500">{ticket.restaurant}</td>
                    <td className="px-6 py-4 text-gray-500">{ticket.issue}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          ticket.status === "Open"
                            ? "bg-orange-50 text-[#FF8C42] dark:bg-orange-900/20"
                            : "bg-green-50 text-green-600 dark:bg-green-900/20"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-500">{ticket.date}</td>
                    <td className="px-6 py-4 text-right">
                      <Link 
                        href={`/dashboard/support/${ticket.id === "JD" ? "8429" : ticket.id}`}
                        className="inline-block rounded-lg border border-[#FF8C42] px-4 py-1.5 text-xs font-bold text-[#FF8C42] transition-all hover:bg-[#FF8C42] hover:text-white"
                      >
                        View Ticket
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-50 px-6 py-4 dark:border-gray-800">
            <p className="text-xs font-bold text-gray-400">
              Showing <span className="text-gray-900 dark:text-white">1-4</span> of 128 tickets
            </p>
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
