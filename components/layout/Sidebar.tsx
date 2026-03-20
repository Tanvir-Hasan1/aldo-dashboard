"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart2,
  LifeBuoy,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users Management", href: "/dashboard/users", icon: Users },
  { name: "Subscriptions", href: "/dashboard/subscriptions", icon: CreditCard },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
  { name: "Support", href: "/dashboard/support", icon: LifeBuoy },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-20 flex-col overflow-y-auto border-r border-[#E5E7EB] bg-[#FAF5F2]/50 backdrop-blur-xl transition-all dark:bg-black/50 md:w-72">
      <div className="flex h-full flex-col px-4 py-6">
        {/* Logo */}
        <div className="mb-10 flex items-center justify-center gap-3 px-2 md:justify-start">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
             <Image
              src="/logo.png"
              alt="Logo"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <span className="hidden text-xl font-bold tracking-tight text-gray-900 dark:text-white md:block">
            Risto <span className="text-[#FF8C42]">AI</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-center gap-3 rounded-xl p-3 text-sm font-semibold transition-all md:justify-start md:px-4 md:py-3.5 ${
                  isActive
                    ? "bg-[#FF8C42] text-white shadow-lg shadow-[#FF8C42]/30"
                    : "text-gray-500 hover:bg-white hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 shrink-0 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  }`}
                />
                <span className="hidden md:block">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="mt-auto border-t border-gray-100 pt-6 dark:border-gray-800">
          <Link
            href="/auth"
            className="group flex items-center justify-center gap-3 rounded-xl p-3 text-sm font-semibold text-gray-500 transition-all hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-900/10 md:justify-start md:px-4 md:py-3.5"
          >
            <LogOut className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-red-600" />
            <span className="hidden md:block">Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
