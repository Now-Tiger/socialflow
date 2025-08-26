"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">
              New: AI-powered content suggestions
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Content scheduling that moves your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              influence forward
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Schedule posts across Twitter, LinkedIn, and Instagram with
            AI-powered insights. Grow your audience while you focus on creating
            amazing content.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/auth">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-medium"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-white-800 text-white px-8 py-4 rounded-xl text-lg font-medium"
          >
            <Play className="w-5 h-5 mr-2" />
            See how it works
          </Button>
        </div>

        {/* Product Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-1 shadow-2xl">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
              {/* Mock Dashboard */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Content Calendar</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                        T
                      </div>
                      <span className="text-gray-300 text-sm">
                        Twitter • Scheduled for 2:00 PM
                      </span>
                    </div>
                    <p className="text-white text-sm">
                      Just launched our new feature! 🚀 What do you think about
                      AI-powered content suggestions? #SocialMedia #AI
                    </p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
                        L
                      </div>
                      <span className="text-gray-300 text-sm">
                        LinkedIn • Scheduled for 9:00 AM
                      </span>
                    </div>
                    <p className="text-white text-sm">
                      The future of social media management is here. How AI is
                      transforming content strategy...
                    </p>
                  </div>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      I
                    </div>
                    <span className="text-gray-300 text-sm">
                      Instagram • Draft
                    </span>
                  </div>
                  <p className="text-white text-sm">
                    Behind the scenes of building SocialFlow ✨ [Image: Team
                    working]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-400 mb-8">
            Trusted by creators and influencers worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-gray-500 font-semibold">Creator Economy</div>
            <div className="text-gray-500 font-semibold">Influencer Hub</div>
            <div className="text-gray-500 font-semibold">Social Growth</div>
            <div className="text-gray-500 font-semibold">Content Creators</div>
          </div>
        </div>
      </div>
    </section>
  );
}
