import React from "react";
import Link from "next/link";
import { LayoutDashboard, LogOut, Settings, Users, PieChart } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#F8F9FA]">
      {/* Sidebar Placeholder */}
      <aside className="w-64 border-r border-gray-200 bg-white p-6">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#FF8C42]"></div>
          <span className="text-xl font-bold">Aldo</span>
        </div>
        
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 rounded-lg bg-[#FF8C42]/10 px-4 py-2.5 text-sm font-semibold text-[#FF8C42]">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Users className="h-5 w-5" />
            Users
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <PieChart className="h-5 w-5" />
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Settings className="h-5 w-5" />
            Settings
          </a>
        </nav>

        <div className="mt-auto pt-10">
          <Link href="/auth" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50">
            <LogOut className="h-5 w-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-10">
        <header className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <div className="text-sm">
              <p className="font-semibold">Tanvir Hasan</p>
              <p className="text-gray-500 text-xs">Admin</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Stat {i}</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
              <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                <div className="h-full w-2/3 rounded-full bg-[#FF8C42]"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gray-100"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Activity item {i}</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400">Details</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
