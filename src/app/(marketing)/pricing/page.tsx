import React from "react";
import Navbar from "@/components/landing/Navbar";
import PricingCards from "@/components/pricing/PricingCards";

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PricingCards />
    </div>
  );
}
