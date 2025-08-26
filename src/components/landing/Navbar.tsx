"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-black/30 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">SocialFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/auth">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-white/5"
            >
              Login
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-lg">
              Get started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}
