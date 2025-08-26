"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Settings,
  Users,
  Image,
  Zap,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Schedule Posts",
    icon: Calendar,
    href: "/schedule",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Content Library",
    icon: Image,
    href: "/content",
  },
  {
    title: "Audience",
    icon: Users,
    href: "/audience",
  },
  {
    title: "Automation",
    icon: Zap,
    href: "/automation",
  },
];

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardSidebar({
  isOpen,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 
        backdrop-blur-xl bg-black/30 border-r border-white/10
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        flex flex-col
      `}
      >
        <div className="flex-1 px-4 py-6 space-y-2">
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                    transition-colors duration-200 group
                    ${
                      isActive
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <item.icon
                    className={`w-5 h-5 ${isActive ? "text-indigo-300" : "text-gray-400 group-hover:text-white"}`}
                  />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="px-4 py-6 border-t border-white/10">
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>
      </aside>
    </>
  );
}
