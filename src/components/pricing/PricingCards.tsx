"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";
import Link from "next/link";

// NOTE: Replace below with the databse call to fetch plans
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Up to 5 scheduled posts per month",
      "Twitter integration",
      "Basic analytics",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
    icon: null,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious content creators",
    features: [
      "Unlimited scheduled posts",
      "Twitter, LinkedIn & Instagram",
      "Advanced analytics & insights",
      "AI content suggestions",
      "Priority support",
      "Team collaboration",
    ],
    cta: "Start Pro Trial",
    popular: true,
    icon: <Star className="w-5 h-5" />,
  },
  {
    name: "Premium",
    price: "$49",
    period: "/month",
    description: "For agencies and power users",
    features: [
      "Everything in Pro",
      "White-label solution",
      "Custom branding",
      "Advanced automation",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
    icon: <Zap className="w-5 h-5" />,
  },
];

export default function PricingCards() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to supercharge your social media presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center p-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {plan.icon}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/pricing" className="block">
                  <Button
                    className={`w-full py-3 rounded-xl font-medium ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            All plans include 14-day free trial • No credit card required
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
            <span>✓ Data export</span>
            <span>✓ 99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
