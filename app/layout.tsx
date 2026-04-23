import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { theme } from "@/lib/theme";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Aldo Dashboard",
    default: "Aldo Dashboard",
  },
  description: "Administrative dashboard for the Aldo platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col"
        style={{
          "--color-primary": theme.colors.primary,
          "--color-primary-hover": theme.colors.primaryHover,
          "--color-primary-light": theme.colors.primaryLight,
          "--color-background": theme.colors.background,
          "--color-text-input": theme.colors.textInput,
        } as React.CSSProperties}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
