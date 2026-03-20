"use client";

import React from "react";
import Header from "@/components/layout/Header";
import {
  Users,
  CreditCard,
  Wallet,
  Activity,
  TrendingUp,
  TrendingDown,
  Download
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const stats = [
  {
    name: "Total Users",
    value: "12,480",
    change: "+12%",
    isPositive: true,
    icon: Users,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    name: "Active Subscriptions",
    value: "8,920",
    change: "+5%",
    isPositive: true,
    icon: CreditCard,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    name: "Monthly Revenue",
    value: "$142,500",
    change: "+18%",
    isPositive: true,
    icon: Wallet,
    iconColor: "text-white",
    bgColor: "bg-white/20",
    customClass: "bg-gradient-to-br from-[#B3802C] to-[#8C6219] text-white border-0",
    customTextColor: "text-white",
    customLabelColor: "text-white/80",
    customChangeClass: "bg-white/20 text-white",
  },
  {
    name: "Trial Conversion",
    value: "14.2%",
    change: "-2%",
    isPositive: false,
    icon: Activity,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

const userGrowthData = [
  { name: "Jan", users: 4000 },
  { name: "Feb", users: 6000 },
  { name: "Mar", users: 5500 },
  { name: "Apr", users: 9000 },
  { name: "May", users: 12000 },
  { name: "Jun", users: 8000 },
  { name: "Jul", users: 15000 },
];

const revenueData = [
  { name: "MON", revenue: 50 },
  { name: "TUE", revenue: 80 },
  { name: "WED", revenue: 60, active: true },
  { name: "THU", revenue: 100 },
  { name: "FRI", revenue: 70 },
  { name: "SAT", revenue: 40 },
  { name: "SUN", revenue: 45 },
];

const subscriptionStatusData = [
  { name: "Active", value: 6120, color: "#FF8C42" },
  { name: "Trial", value: 1850, color: "#1F2937" },
  { name: "Cancelled", value: 950, color: "#D1D5DB" }, // lighter gray/gold
];

const billingCycleData = [
  { name: "Monthly", value: 75, color: "#FF8C42" },
  { name: "Yearly", value: 25, color: "#1F2937" },
];

export default function AnalyticsPage() {
  return (
    <div className="flex-1 pb-10">
      <title>Platform Analytics | Aldo</title>
      <Header
        title="Platform Analytics"
        subtitle="Monitor platform growth, revenue performance, and subscription trends for your restaurant network."
      />

      <main className="p-8 space-y-8">
        {/* Actions Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
          <div className="flex rounded-full bg-white p-1 shadow-sm border border-gray-100 dark:border-gray-800 dark:bg-gray-900">
            <button className="rounded-full bg-[#FF8C42] px-4 py-2 text-xs font-bold text-white shadow-sm">
              7 Days
            </button>
            <button className="rounded-full px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all">
              30 Days
            </button>
            <button className="rounded-full px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all">
              90 Days
            </button>
          </div>
          <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
            <Download className="h-4 w-4" />
            Export Data
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className={`rounded-2xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${
                stat.customClass ? stat.customClass : "bg-white"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
                <div
                  className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                    stat.customChangeClass
                      ? stat.customChangeClass
                      : stat.isPositive
                      ? "bg-green-50 text-green-600 dark:bg-green-900/20"
                      : "bg-red-50 text-red-600 dark:bg-red-900/20"
                  }`}
                >
                  {stat.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
              <p
                className={`text-sm font-medium ${
                  stat.customLabelColor ? stat.customLabelColor : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {stat.name}
              </p>
              <h3
                className={`text-2xl font-bold tracking-tight mt-1 ${
                  stat.customTextColor ? stat.customTextColor : "text-gray-900 dark:text-white"
                }`}
              >
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Charts Section 1 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* User Growth Line Chart */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">User Growth</h3>
              <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-bold text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                Monthly
              </span>
            </div>
            <div className="w-full">
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={userGrowthData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF8C42" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#FF8C42" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => (value >= 1000 ? `${value / 1000}k` : value)}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#FF8C42"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorUsers)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Growth Bar Chart */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Revenue Growth</h3>
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-[#FF8C42]"></div>
                <div className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
            <div className="w-full">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={revenueData} barSize={40}>
                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar dataKey="revenue" radius={[8, 8, 8, 8]}>
                    {revenueData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.active ? "#FF8C42" : "#F1F5F9"}
                        className="dark:fill-gray-800 dark:active:fill-[#FF8C42]"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts Section 2 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Subscription Status Chart */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Subscription Status</h3>
              <span className="text-xs font-medium italic text-gray-400">Update every 1h</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="relative w-48 h-48">
                <ResponsiveContainer width="100%" height={192}>
                  <PieChart>
                    <Pie
                      data={subscriptionStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={85}
                      paddingAngle={0}
                      dataKey="value"
                      stroke="none"
                    >
                      {subscriptionStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">8,920</span>
                  <span className="text-[10px] font-bold text-gray-400">TOTAL</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                {subscriptionStatusData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {item.value.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Billing Cycle Chart */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Billing Cycle</h3>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-8">
                <ResponsiveContainer width="100%" height={192}>
                  <PieChart>
                    <Pie
                      data={billingCycleData}
                      cx="50%"
                      cy="50%"
                      outerRadius={85}
                      dataKey="value"
                      stroke="none"
                    >
                      {billingCycleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full space-y-3">
                {billingCycleData.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
