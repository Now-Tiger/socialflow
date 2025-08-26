"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar,
  Bell,
  Search,
  Settings,
  User as UserIcon,
  LogOut,
  CreditCard,
  HelpCircle,
  Plus,
} from "lucide-react";
// import { User } from "@/entities/User"; // 🔴 Commented out DB layer

// ✅ Dummy user object for testing UI
const dummyUser = {
  id: "1",
  full_name: "John Doe",
  email: "john@example.com",
  avatar_url: "https://i.pravatar.cc/150?img=3", // placeholder avatar
};

export default function DashboardNavbar() {
  const [user, setUser] = useState(dummyUser); // ✅ initialize with dummy user
  const router = useRouter();

  useEffect(() => {
    // 🔴 Temporarily disabling DB call
    // const loadUser = async () => {
    //   try {
    //     const currentUser = await User.me();
    //     setUser(currentUser);
    //   } catch (error) {
    //     console.error("Error loading user:", error);
    //   }
    // };
    // loadUser();
  }, []);

  const handleLogout = async () => {
    // 🔴 Temporarily disabling DB call
    // try {
    //   await User.logout();
    //   router.push("/");
    // } catch (error) {
    //   console.error("Logout error:", error);
    // }

    router.push("/"); // just navigate home for now
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              SocialFlow
            </span>
          </Link>

          {/* Center - Quick Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/schedule">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-64"
              />
            </div>
          </div>

          {/* Right - User Menu */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-white/10 relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
                3
              </span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-white/10"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user?.avatar_url} />
                    <AvatarFallback className="bg-indigo-500 text-white">
                      {user?.full_name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-white hidden sm:block">
                    {user?.full_name?.split(" ")[0] || "User"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-900/95 backdrop-blur-xl border-white/10 text-white"
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <Link href="/profile">
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                    <UserIcon className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                </Link>
                <Link href="/settings">
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                </Link>
                <Link href="/pricing">
                  <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="hover:bg-red-500/20 focus:bg-red-500/20 text-red-400"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
