"use client";

import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Subtle dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      {/* Content */}
      <Navbar />
      <Hero />
    </div>
  );
}
