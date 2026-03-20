"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import { useSearchParams } from "next/navigation";
import {
  Clock,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Save
} from "lucide-react";

export default function LegalEditorPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams?.get("tab") === "privacy" ? "privacy" : "terms";
  const [activeTab, setActiveTab] = useState(initialTab);

  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (activeTab === "terms") {
      setContent(`# Terms of Service\n\n## 1. Acceptance of Terms\nBy accessing and using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.`);
    } else {
      setContent(`# Privacy Policy\n\n## 1. Information Collection\nWe collect personal information that you provide to us directly, such as when you create an account.`);
    }
  }, [activeTab]);

  const handleFormat = (prefix: string, suffix: string = "") => {
    if (!textareaRef.current) return;
    
    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;
    const selectedText = content.substring(start, end);
    
    // Line formatting for headings and lists
    if (!suffix && prefix.endsWith(" ")) {
      // Find the start of the current line
      const lineStart = content.lastIndexOf('\n', start - 1) + 1;
      const newContent = content.substring(0, lineStart) + prefix + content.substring(lineStart);
      setContent(newContent);
      
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          textareaRef.current.setSelectionRange(end + prefix.length, end + prefix.length);
        }
      }, 0);
      return;
    }

    // Inline formatting for Bold, Italic, Underline
    const newText = prefix + selectedText + suffix;
    const newContent = content.substring(0, start) + newText + content.substring(end);
    
    setContent(newContent);
    
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        if (start === end) {
          textareaRef.current.setSelectionRange(start + prefix.length, start + prefix.length);
        } else {
          textareaRef.current.setSelectionRange(start, start + newText.length);
        }
      }
    }, 0);
  };

  return (
    <div className="flex-1 min-h-screen bg-white dark:bg-black">
      <title>Legal Content Editor | Aldo</title>
      <Header />

      <main className="p-8 max-w-[1200px] mx-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white">Legal Content Editor</h1>
            <p className="text-sm font-medium text-gray-500 mt-1">Last updated: January 15, 2025 at 2:30 PM</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              Auto-save enabled
            </div>
            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 border border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-800/20">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-500">Draft saved</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-100 mb-8 dark:border-gray-800 overflow-x-auto">
          <button 
            onClick={() => setActiveTab("terms")}
            className={`pb-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
              activeTab === "terms" 
                ? "border-[#059669] text-[#059669] dark:border-emerald-500 dark:text-emerald-400" 
                : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            Terms of Service
          </button>
          <button 
            onClick={() => setActiveTab("privacy")}
            className={`pb-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
              activeTab === "privacy" 
                ? "border-[#059669] text-[#059669] dark:border-emerald-500 dark:text-emerald-400" 
                : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            Privacy Policy
          </button>
        </div>

        {/* Editor Wrapper */}
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm dark:border-gray-700 dark:bg-gray-900">
          {/* Editor Toolbar */}
          <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-3 bg-white dark:border-gray-700 dark:bg-gray-800 flex-wrap">
            <button onClick={() => handleFormat("**", "**")} className="text-gray-500 hover:text-gray-900 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><Bold className="h-4 w-4" /></button>
            <button onClick={() => handleFormat("*", "*")} className="text-gray-500 hover:text-gray-900 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><Italic className="h-4 w-4" /></button>
            <button onClick={() => handleFormat("<u>", "</u>")} className="text-gray-500 hover:text-gray-900 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><UnderlineIcon className="h-4 w-4" /></button>
            
            <div className="w-px h-5 bg-gray-200 mx-2 dark:bg-gray-600"></div>
            
            <button onClick={() => handleFormat("# ")} className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">H1</button>
            <button onClick={() => handleFormat("## ")} className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">H2</button>
            <button onClick={() => handleFormat("### ")} className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">H3</button>

            <div className="w-px h-5 bg-gray-200 mx-2 dark:bg-gray-600"></div>

            <button onClick={() => handleFormat("- ")} className="text-gray-500 hover:text-gray-900 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><List className="h-4 w-4" /></button>
            <button onClick={() => handleFormat("1. ")} className="text-gray-500 hover:text-gray-900 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><ListOrdered className="h-4 w-4" /></button>
          </div>

          {/* Text Area Content */}
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[500px] resize-y p-8 text-sm outline-none text-gray-700 leading-7 bg-white dark:bg-gray-900 dark:text-gray-200"
            style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto" }}
          />
        </div>

        {/* Action Bottom */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#FF8C42] px-8 py-3 text-sm font-bold text-white shadow-md shadow-[#FF8C42]/20 transition-all hover:bg-[#F27E33] active:scale-95">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
