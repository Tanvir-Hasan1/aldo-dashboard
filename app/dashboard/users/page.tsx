"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  Eye,
  Pencil,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  CircleStop,
  Trash2,
} from "lucide-react";

const stats = [
  { name: "Total Users", value: "12,842", change: "+12%", color: "text-blue-500" },
  { name: "Active Users", value: "11,150", change: "+8.4%", color: "text-green-500" },
  { name: "Suspended Users", value: "34", change: "-2%", color: "text-red-500" },
];

const users = [
  {
    name: "Marco Rossi",
    email: "marco@trattoria.it",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop",
    restaurant: "La Trattoria Milano",
    location: "Milan, Italy",
    plan: "1 YEAR",
    status: "ACTIVE",
    joinDate: "Mar 12, 2026",
  },
  {
    name: "Elena Gilbert",
    email: "elena@mysticgrill.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop",
    restaurant: "The Mystic Grill",
    location: "special status",
    plan: "1 MONTH",
    status: "TRIAL",
    joinDate: "Feb 04, 2026",
  },
  {
    name: "Gordon Ramses",
    email: "kitchen@nightmares.uk",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop",
    restaurant: "Hell's Kitchen",
    location: "Salento",
    plan: "1 MONTH",
    status: "SUSPENDED",
    joinDate: "Feb 22, 2026",
  },
  {
    name: "Yuki Tanaka",
    email: "yuki@sushizen.jp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop",
    restaurant: "Sushi Zen",
    location: "Marches",
    plan: "1 YEAR",
    status: "EXPIRED",
    joinDate: "Jan 15, 2026",
  },
];

export default function UsersManagement() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  return (
    <div className="flex-1 pb-10">
      <title>Users Management | Aldo</title>
      <Header title="Users Management" subtitle="Manage restaurant owners and user accounts across the platform." />

      <main className="p-8 space-y-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <p className="text-sm font-semibold text-gray-400 mb-2">{stat.name}</p>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                <span className={`text-sm font-bold flex items-center gap-1 mb-1 ${
                  stat.change.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}>
                  {stat.change.startsWith("+") ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search users, restaurants..."
              className="block w-full rounded-full border border-gray-100 bg-white py-3 pl-12 pr-4 text-sm shadow-sm outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/10 dark:border-gray-800 dark:bg-gray-900"
            />
          </div>
          <button className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 active:scale-95 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </button>
        </div>

        {/* Users Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-50 bg-gray-50/50 text-xs font-bold uppercase tracking-wider text-gray-500 dark:border-gray-800 dark:bg-gray-800/50">
                <tr>
                  <th className="px-6 py-4">User Name</th>
                  <th className="px-6 py-4">Restaurant</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Plan</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Join Date</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {users.map((user) => (
                  <tr key={user.email} className="group transition-all hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-100 dark:border-gray-700">
                          <Image src={user.avatar} alt={user.name} fill sizes="40px" className="object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">{user.name}</p>
                          <p className="text-xs text-gray-400">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 font-semibold text-gray-600 dark:text-gray-400">{user.restaurant}</td>
                    <td className="px-6 py-5 text-gray-500">{user.location}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold text-[#FF8C42] dark:bg-orange-900/10">
                        {user.plan}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${
                          user.status === "ACTIVE" ? "bg-green-500" : 
                          user.status === "TRIAL" ? "bg-orange-400" :
                          user.status === "SUSPENDED" ? "bg-red-500" : "bg-gray-400"
                        }`}></div>
                        <span className={`text-[10px] font-bold ${
                          user.status === "ACTIVE" ? "text-green-600" : 
                          user.status === "TRIAL" ? "text-orange-500" :
                          user.status === "SUSPENDED" ? "text-red-600" : "text-gray-500"
                        }`}>{user.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-500">{user.joinDate}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <div className="relative">
                          <button 
                            onClick={() => setOpenMenuId(openMenuId === user.email ? null : user.email)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </button>
                          
                          {openMenuId === user.email && (
                            <>
                              <div 
                                className="fixed inset-0 z-10" 
                                onClick={() => setOpenMenuId(null)}
                              ></div>
                              <div className="absolute right-0 top-full z-20 mt-1 w-48 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
                                  <CircleStop className="h-4 w-4 text-gray-400" />
                                  Suspend Account
                                </button>
                                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-600 transition-all hover:bg-red-50 dark:hover:bg-red-900/10">
                                  <Trash2 className="h-4 w-4" />
                                  Delete User
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-50 px-6 py-6 md:flex-row dark:border-gray-800">
            <p className="text-xs font-bold text-gray-400">
              Showing <span className="text-gray-900 dark:text-white">1 to 10</span> of 1,284 users
            </p>
            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF8C42] text-xs font-bold text-white shadow-lg shadow-[#FF8C42]/20">1</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">2</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">3</button>
              <span className="text-gray-400 text-xs font-bold">...</span>
              <button className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">128</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
