"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, BarChart3, User } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 backdrop-blur-xl bg-white/5 border-r border-white/10 p-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white">SocialFlow</span>
      </div>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            pathname === "/dashboard"
              ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          Dashboard
        </Link>
        <Link
          href="/schedule"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            pathname === "/schedule"
              ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          <Calendar className="w-5 h-5" />
          Schedule Posts
        </Link>
        <Link
          href="/profile"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            pathname === "/profile"
              ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          <User className="w-5 h-5" />
          Profile
        </Link>
      </nav>
    </div>
  );
}
