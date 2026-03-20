"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { useSearchParams } from "next/navigation";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import {
  Clock,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List as ListIcon,
  ListOrdered,
  Save
} from "lucide-react";

export default function LegalEditorPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams?.get("tab") === "privacy" ? "privacy" : "terms";
  const [activeTab, setActiveTab] = useState(initialTab);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: '',
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) return;
    
    if (activeTab === "terms") {
      editor.commands.setContent(`<h1>Terms of Service</h1><h2>1. Acceptance of Terms</h2><p>By accessing and using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>`);
    } else {
      editor.commands.setContent(`<h1>Privacy Policy</h1><h2>1. Information Collection</h2><p>We collect personal information that you provide to us directly, such as when you create an account.</p>`);
    }
  }, [activeTab, editor]);

  if (!editor) {
    return null;
  }

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
            <button 
              onClick={() => editor.chain().focus().toggleBold().run()} 
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={`text-gray-500 hover:text-gray-900 transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${editor.isActive('bold') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : ''}`}
            >
              <Bold className="h-4 w-4" />
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleItalic().run()} 
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className={`text-gray-500 hover:text-gray-900 transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${editor.isActive('italic') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : ''}`}
            >
              <Italic className="h-4 w-4" />
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleUnderline().run()} 
              disabled={!editor.can().chain().focus().toggleUnderline().run()}
              className={`text-gray-500 hover:text-gray-900 transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${editor.isActive('underline') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : ''}`}
            >
              <UnderlineIcon className="h-4 w-4" />
            </button>
            
            <div className="w-px h-5 bg-gray-200 mx-2 dark:bg-gray-600"></div>
            
            <button 
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
              className={`text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : ''}`}
            >
              H1
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
              className={`text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : ''}`}
            >
              H2
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} 
              className={`text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : ''}`}
            >
              H3
            </button>

            <div className="w-px h-5 bg-gray-200 mx-2 dark:bg-gray-600"></div>

            <button 
              onClick={() => editor.chain().focus().toggleBulletList().run()} 
              className={`text-gray-500 hover:text-gray-900 transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${editor.isActive('bulletList') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : ''}`}
            >
              <ListIcon className="h-4 w-4" />
            </button>
            <button 
              onClick={() => editor.chain().focus().toggleOrderedList().run()} 
              className={`text-gray-500 hover:text-gray-900 transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${editor.isActive('orderedList') ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : ''}`}
            >
              <ListOrdered className="h-4 w-4" />
            </button>
          </div>

          {/* Editor Content Box */}
          <div className="bg-white dark:bg-gray-900">
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* Action Bottom */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#FF8C42] px-8 py-3 text-sm font-bold text-white shadow-md shadow-[#FF8C42]/20 transition-all hover:bg-[#F27E33] active:scale-95">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </main>

      {/* Tailwind Typography replacement for ProseMirror */}
      <style dangerouslySetInnerHTML={{__html: `
        .ProseMirror {
          outline: none;
          min-height: 500px;
          padding: 2rem;
          color: #374151;
          line-height: 1.75;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .dark .ProseMirror {
          color: #D1D5DB;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #9CA3AF;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror h1 {
          font-size: 2.25rem;
          font-weight: 800;
          margin-top: 0;
          margin-bottom: 1rem;
          color: #111827;
        }
        .dark .ProseMirror h1 {
          color: #FFFFFF;
        }
        .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #1F2937;
        }
        .dark .ProseMirror h2 {
          color: #F3F4F6;
        }
        .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          color: #374151;
        }
        .dark .ProseMirror h3 {
          color: #E5E7EB;
        }
        .ProseMirror p {
          margin-top: 0;
          margin-bottom: 1rem;
        }
        .ProseMirror ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .ProseMirror ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .ProseMirror li p {
          margin-bottom: 0.25rem;
          margin-top: 0.25rem;
        }
      `}} />
    </div>
  );
}
