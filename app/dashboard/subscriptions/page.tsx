"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Image from "next/image";
import {
  Users,
  Hourglass,
  Calendar,
  Wallet,
  Download,
  Search,
  SlidersHorizontal,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const stats = [
  { name: "Active Subscriptions", value: "1,284", change: "+12%", color: "text-green-500", icon: Users },
  { name: "Trial Users", value: "456", change: "+5%", color: "text-green-500", icon: Hourglass },
  { name: "Monthly Revenue (MRR)", value: "$42,500", change: "+8%", color: "text-green-500", icon: Calendar },
  { name: "Annual Revenue", value: "$510,000", change: "+15%", color: "text-green-500", icon: Wallet },
];

const revenueData = [
  { name: "JAN", revenue: 20000 },
  { name: "FEB", revenue: 25000 },
  { name: "MAR", revenue: 28000 },
  { name: "APR", revenue: 32000 },
  { name: "MAY", revenue: 38000 },
  { name: "JUN", revenue: 42500 },
];

const subscriptions = [
  {
    name: "John Doe",
    restaurant: "The Golden Grill",
    email: "john@goldengrill.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop",
    plan: "Pro Plan",
    billingCycle: "YEARLY",
    status: "Active",
    startDate: "Jan 12, 2025",
    nextBilling: "Jan 12, 2026",
  },
  {
    name: "Sarah Miller",
    restaurant: "Miller's Bistro",
    email: "sarah@millers.io",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop",
    plan: "Pro Plan",
    billingCycle: "MONTHLY",
    status: "Trial",
    startDate: "May 28, 2026",
    nextBilling: "Jun 28, 2026",
    showExtendBtn: true,
  },
  {
    name: "Tom Collins",
    restaurant: "The Corner Cafe",
    email: "tom@corner.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop",
    plan: "Pro Plan",
    billingCycle: "MONTHLY",
    status: "Cancelled",
    startDate: "Feb 05, 2026",
    nextBilling: "-",
  },
  {
    name: "Amy Reed",
    restaurant: "Reed's Steakhouse",
    email: "amy@reeds.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop",
    plan: "Pro Plan",
    billingCycle: "YEARLY",
    status: "Expired",
    startDate: "Feb 10, 2026",
    nextBilling: "Feb 10, 2027",
  },
];

export default function SubscriptionsManagement() {
  return (
    <div className="flex-1 pb-10">
      <title>Subscriptions Management | Aldo</title>
      <Header title="Subscriptions Management" subtitle="Manage restaurant subscriptions and track platform revenue." />

      <div className="px-8 pt-8 flex sm:justify-end gap-3">
          <button className="flex flex-1 sm:flex-none justify-center items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            <Download className="h-4 w-4" />
            Export Data
          </button>
          <Link href="/dashboard/subscriptions/plan" className="flex flex-1 sm:flex-none justify-center items-center gap-2 rounded-full bg-[#FF8C42] px-4 py-2 text-sm font-bold text-white shadow-md transition-all hover:bg-[#e07b3a] active:scale-95">
            Our Subscriptions Plan
          </Link>
        </div>

      <main className="p-8 space-y-8">

        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF8C42] dark:bg-orange-900/10">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className={`flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-600 dark:bg-green-900/10`}>
                  {stat.change}
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-500 mb-1">{stat.name}</p>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Monthly Subscription Revenue</h3>
              <p className="text-sm text-gray-400">Revenue growth across all subscription tiers.</p>
            </div>
            <select className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-bold text-gray-700 outline-none dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300">
              <option>Last 6 months</option>
              <option>Last 12 months</option>
            </select>
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData} barSize={60}>
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  fontSize={10} 
                  fontWeight={700}
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={10}
                />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="revenue" radius={[8, 8, 0, 0]}>
                  {revenueData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index === revenueData.length - 1 ? "#FF8C42" : "#FFCDB2"} 
                      />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Table & Filters Section */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 pb-2">
          
          {/* Filters Bar */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between p-6 gap-6 xl:gap-0 border-b border-gray-50 dark:border-gray-800">
            <div className="relative w-full xl:w-96">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-4.5 w-4.5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, restaurant or email..."
                className="block w-full rounded-full border-none bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#FF8C42]/20 dark:bg-gray-800 dark:text-white"
              />
            </div>
            
            <div className="flex items-center gap-1 overflow-x-auto pb-2 xl:pb-0 scrollbar-hide">
              <button className="whitespace-nowrap rounded-full border border-orange-100 bg-white px-5 py-2 text-sm font-bold text-[#FF8C42] shadow-sm dark:border-orange-900/30 dark:bg-orange-900/10">All</button>
              <button className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">Active</button>
              <button className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">Trial</button>
              <button className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">Cancelled</button>
              <button className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">Expired</button>
            </div>

            <button className="flex items-center w-max justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <SlidersHorizontal className="h-4 w-4" />
              Advanced Filters
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-xs font-bold tracking-wider text-gray-900 dark:bg-gray-900 dark:text-white border-b border-gray-50 dark:border-gray-800">
                <tr>
                  <th className="px-6 py-5">User & Restaurant</th>
                  <th className="px-6 py-5">Plan Name</th>
                  <th className="px-6 py-5">Billing Cycle</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Start Date</th>
                  <th className="px-6 py-5">Next Billing</th>
                  <th className="px-6 py-5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {subscriptions.map((sub, idx) => (
                  <tr key={idx} className="group hover:bg-gray-50/30 transition-colors dark:hover:bg-gray-800/30">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
                          <Image src={sub.avatar} alt={sub.name} fill sizes="40px" className="object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">{sub.name}</p>
                          <p className="text-xs text-gray-500">{sub.restaurant} • <br className="hidden md:block"/> {sub.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300">{sub.plan}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        {sub.billingCycle}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center justify-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
                        sub.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-500" :
                        sub.status === "Trial" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-500" :
                        sub.status === "Cancelled" ? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-500"
                      }`}>
                        <div className={`h-1.5 w-1.5 rounded-full ${
                          sub.status === "Active" ? "bg-green-500" :
                          sub.status === "Trial" ? "bg-blue-500" :
                          sub.status === "Cancelled" ? "bg-gray-400" :
                          "bg-red-500"
                        }`}></div>
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-500">
                      {sub.startDate.split(",")[0]}<br className="hidden md:block"/>{sub.startDate.split(",")[1]}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-500">
                      {sub.nextBilling !== "-" ? (
                        <>{sub.nextBilling.split(",")[0]}<br className="hidden md:block"/>{sub.nextBilling.split(",")[1]}</>
                      ) : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-3 pr-2">
                        {sub.showExtendBtn && (
                          <button className="hidden sm:block rounded bg-orange-50 px-3 py-1 text-[11px] font-bold text-[#FF8C42] hover:bg-orange-100 dark:bg-orange-900/20">
                            Extend Trial
                          </button>
                        )}
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row mt-2">
            <p className="text-xs font-semibold text-gray-400">
              Showing <span className="font-bold text-gray-900 dark:text-white">1 to 4</span> of <span className="font-bold text-gray-900 dark:text-white">1,284</span> entries
            </p>
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF8C42] text-xs font-bold text-white shadow-md shadow-[#FF8C42]/20">1</button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">2</button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">3</button>
              <span className="text-gray-400 text-xs font-bold">...</span>
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">128</button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
