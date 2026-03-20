import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] dark:bg-black">
      <Sidebar />
      <div className="flex w-full flex-col pl-20 transition-all md:pl-72">
        {children}
      </div>
    </div>
  );
}
