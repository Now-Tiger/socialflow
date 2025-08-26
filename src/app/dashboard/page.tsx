"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Plus,
  Twitter,
  Linkedin,
  Instagram,
  Image,
  Video,
  Smile,
  BarChart2,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

const analyticsData = [
  { name: "Jan", followers: 400, engagement: 240 },
  { name: "Feb", followers: 300, engagement: 139 },
  { name: "Mar", followers: 200, engagement: 980 },
  { name: "Apr", followers: 278, engagement: 390 },
  { name: "May", followers: 189, engagement: 480 },
  { name: "Jun", followers: 239, engagement: 380 },
  { name: "Jul", followers: 349, engagement: 430 },
];

const upcomingPosts = [
  {
    platform: "twitter",
    content: "Just launched a new feature on SocialFlow! What do you think? 🚀",
    time: "Today, 4:00 PM",
  },
  {
    platform: "linkedin",
    content:
      "The future of social media management is here. Read our latest blog post on AI-driven content strategy...",
    time: "Tomorrow, 9:00 AM",
  },
  {
    platform: "instagram",
    content: "A behind-the-scenes look at the SocialFlow team hard at work! ✨",
    time: "Oct 28, 1:30 PM",
  },
];

const dummyUser = {
  id: "1",
  full_name: "John Doe",
  email: "john@example.com",
  avatar_url: "https://i.pravatar.cc/150?img=3",
};

export default function Dashboard() {
  const [user] = useState(dummyUser);

  return (
    <div className="p-4 md:p-8 space-y-8 text-white">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {user?.full_name?.split(" ")[0] || "User"}!
          </h1>
          <p className="text-gray-400">
            {"Here's your content command center."}
          </p>
        </div>
        <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-opacity flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Schedule a Post
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Create Post Widget */}
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
            <CardHeader className="flex flex-row items-center gap-4 p-4 border-b border-white/10">
              <Avatar>
                <AvatarImage src={user?.avatar_url} />
                <AvatarFallback>
                  {user?.full_name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="What's on your mind? Start creating your next post..."
                  className="bg-transparent border-0 text-white placeholder:text-gray-400 text-lg p-0 focus-visible:ring-0"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-white">
                  <Image className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Video className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Post to:</span>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-white/10 rounded-full text-white hover:bg-indigo-500">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/10 rounded-full text-white hover:bg-indigo-500">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/10 rounded-full text-white hover:bg-indigo-500">
                    <Instagram className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Overview */}
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart2 /> Analytics Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  followers: { label: "Followers", color: "#82ca9d" },
                  engagement: { label: "Engagement", color: "#8884d8" },
                }}
                className="h-[300px] w-full"
              >
                <LineChart data={analyticsData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255, 255, 255, 0.1)"
                  />
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis stroke="#8884d8" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="engagement"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="followers"
                    stroke="#82ca9d"
                    strokeWidth={2}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Side Column */}
        <div className="space-y-8">
          {/* Upcoming Posts */}
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Calendar /> Upcoming Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {upcomingPosts.map((post, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                  >
                    <div className="p-2 bg-indigo-500/20 rounded-full mt-1">
                      {post.platform === "twitter" && (
                        <Twitter className="w-4 h-4 text-indigo-300" />
                      )}
                      {post.platform === "linkedin" && (
                        <Linkedin className="w-4 h-4 text-indigo-300" />
                      )}
                      {post.platform === "instagram" && (
                        <Instagram className="w-4 h-4 text-indigo-300" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-200 leading-snug">
                        {post.content}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{post.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp /> Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-full">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300">Follower Growth</span>
                </div>
                <span className="font-bold text-green-400">+12.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-full">
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-gray-300">Total Engagement</span>
                </div>
                <span className="font-bold">2.4K</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
