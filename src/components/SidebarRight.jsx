"use client";

import React from "react";
// Using generic icons for the community logos
import { FaRedditAlien } from "react-icons/fa";
import { BsController } from "react-icons/bs"; // For gaming icons like PS4/NBA
import { SiApple } from "react-icons/si"; // For Apple
import { IoMaleFemale } from "react-icons/io5"; // Generic for AskMen/Women

// --- HELPER COMPONENT: Community Item ---
const CommunityItem = ({ icon, name, members }) => {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-[#272729]">
      {/* Icon Container */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1A1B] text-xl text-white overflow-hidden">
        {icon}
      </div>
      
      {/* Text Info */}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[#D7DADC]">{name}</span>
        <span className="text-xs text-gray-500">{members} members</span>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const SidebarRight = () => {
  return (
    // Fixed container on the right, hidden on smaller screens
    <aside className="hidden w-80 min-w-[300px] flex-col justify-between py-2 pl-4 pr-4 lg:flex sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto thin-scrollbar">
      
      {/* 1. POPULAR COMMUNITIES SECTION */}
      <div className="rounded-md border border-[#000000] bg-[#000000] p-4">
        <h2 className="mb-4 text-xs font-bold text-gray-500">POPULAR COMMUNITIES</h2>
        
        <div className="space-y-1">
          <CommunityItem 
            icon={<FaRedditAlien className="text-white" />} 
            name="r/AskMen" 
            members="7,110,838" 
          />
          <CommunityItem 
            icon={<IoMaleFemale className="text-pink-500" />} 
            name="r/AskWomen" 
            members="5,594,618" 
          />
          <CommunityItem 
            icon={<BsController className="text-blue-500" />} 
            name="r/PS4" 
            members="5,510,888" 
          />
          <CommunityItem 
            icon={<SiApple className="text-white" />} 
            name="r/apple" 
            members="6,296,270" 
          />
          <CommunityItem 
            icon={<FaRedditAlien className="text-orange-500" />} 
            name="r/NBA2k" 
            members="743,008" 
          />
        </div>

        {/* "See more" Button */}
        <button className="mt-4 text-xs font-bold text-gray-300 hover:underline">
          See more
        </button>
      </div>

      {/* 2. FOOTER LINKS SECTION (Sticky at bottom of sidebar content) */}
      <div className="rounded-md bg-[#0E1113] p-4 text-xs text-gray-500">
            <div className="flex flex-wrap gap-x-2 gap-y-1">
            <a href="#" className="hover:underline">Reddit Rules</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">User Agreement</a>
            <a href="#" className="hover:underline">Accessibility</a>
            </div>
        
            <div className="mt-4 border-t border-[#343536] pt-4">
            Reddit, Inc. © 2025. All rights reserved.
            </div>
      </div>

    </aside>
  );
};

export default SidebarRight;