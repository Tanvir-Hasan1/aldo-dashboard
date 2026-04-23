"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import Header from "@/components/layout/Header";
import {
  Users,
  CreditCard,
  DollarSign,
  UserCheck,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
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
    value: "85,240",
    change: "+12.4%",
    isPositive: true,
    icon: Users,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    name: "Active Subscriptions",
    value: "12,430",
    change: "+5.2%",
    isPositive: true,
    icon: CreditCard,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    name: "Monthly Revenue",
    value: "$142,500",
    change: "+18.2%",
    isPositive: true,
    icon: DollarSign,
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    name: "Trial Users",
    value: "3,120",
    change: "-2.1%",
    isPositive: false,
    icon: UserCheck,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 5200 },
  { name: "Mar", revenue: 4800 },
  { name: "Apr", revenue: 6100 },
  { name: "May", revenue: 5800 },
  { name: "Jun", revenue: 7200 },
  { name: "Jul", revenue: 8100 },
  { name: "Aug", revenue: 7500 },
  { name: "Sep", revenue: 8500 },
  { name: "Oct", revenue: 7800 },
  { name: "Nov", revenue: 8200 },
  { name: "Dec", revenue: 9500 },
];

const userData = [
  { name: "Active Subscriptions", value: 68 },
  { name: "Trial Users", value: 32 },
];

const COLORS = ["var(--color-primary)", "#4F46E5"];

export default function AdminDashboard() {
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      console.log("User data:", user);
    }
  }, [user]);

  return (
    <div className="flex-1 pb-10">
      <title>Admin Dashboard | Aldo</title>
      <Header title="Admin Dashboard" subtitle="Platform Overview" />

      <main className="p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
                <div className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                  stat.isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                }`}>
                  {stat.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Revenue Growth Bar Chart */}
          <div className="lg:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Revenue Growth</h3>
              <div className="flex items-center gap-3">
                 <div className="flex rounded-lg bg-gray-50 p-1 dark:bg-gray-800">
                  <button className="rounded-md px-3 py-1 text-xs font-semibold text-gray-500 transition-all hover:text-gray-900">Weekly</button>
                  <button className="rounded-md bg-white px-3 py-1 text-xs font-bold text-[var(--color-primary)] shadow-sm dark:bg-gray-700">Monthly</button>
                </div>
                <select className="rounded-lg border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-bold outline-none dark:border-gray-800 dark:bg-gray-800">
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData} barSize={32}>
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="revenue" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Growth Donut Chart */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-bold mb-8 text-gray-900 dark:text-white">User Growth</h3>
            <div className="relative w-full">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={userData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {userData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">12.3k</span>
                <span className="text-xs font-bold text-gray-400">TOTAL</span>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {userData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                    <span className="text-xs font-bold text-gray-500">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-gray-900 dark:text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
