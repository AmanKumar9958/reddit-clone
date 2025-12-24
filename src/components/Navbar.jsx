"use client";

import React from "react";
import { FaReddit } from "react-icons/fa";
import { IoSearchOutline, IoQrCodeOutline } from "react-icons/io5";
import { HiDotsHorizontal, HiMenu } from "react-icons/hi";
import { GoIssueOpened } from "react-icons/go";
// Import the hook
import { useSidebar } from "@/context/SidebarContext";

const Navbar = () => {
  // Get the toggle function
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-[#343536] bg-[#0E1113] px-4">
      
      {/* MOBILE VIEW */}
      <div className="flex h-full w-full items-center justify-between md:hidden">
        <div className="flex items-center gap-3">
          {/* Add onClick here */}
          <button onClick={toggleSidebar} className="text-white hover:bg-gray-800 rounded p-1">
            <HiMenu className="h-7 w-7" />
          </button>
          <FaReddit className="h-8 w-8 text-[#FF4500]" />
        </div>
        
        {/* ... Rest of mobile view code ... */}
        <div className="flex items-center gap-4 text-white">
             <button className="rounded-full bg-[#1A1A1B] p-2">
                <IoSearchOutline className="h-6 w-6" />
             </button>
             <button>
                <HiDotsHorizontal className="h-6 w-6" />
             </button>
        </div>
      </div>

      {/* DESKTOP VIEW (Keep your existing code here) */}
      <div className="hidden h-full w-full items-center justify-center md:flex relative">
         {/* ... Your existing desktop code ... */}
          {/* Logo */}
        <div className="absolute left-0 top-0 h-full flex items-center gap-2 cursor-pointer">
          <FaReddit className="h-8 w-8 text-[#FF4500]" />
          <span className="text-2xl font-extrabold text-white tracking-tight">
            reddit
          </span>
        </div>

        {/* Center Search */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl flex justify-center">
          <div className="flex h-10 w-full items-center rounded-full border border-[#343536] bg-[#1A1A1B] px-4 transition-all hover:border-gray-500 hover:bg-[#1A1A1B] focus-within:border-white focus-within:bg-[#1A1A1B]">
            <IoSearchOutline className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Find anything"
              className="ml-2 flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
            />
          </div>
        </div>

        {/* Right Buttons */}
        <div className="absolute right-0 top-0 h-full flex items-center gap-2 sm:gap-4">
          <button className="hidden items-center gap-2 rounded-full bg-[#272729] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#343536] lg:flex">
            <IoQrCodeOutline className="h-5 w-5" />
            Get App
          </button>

          <button className="rounded-full bg-[#D93A00] px-6 py-1.5 text-sm font-bold text-white transition-colors hover:bg-[#bd3300] whitespace-nowrap">
            Log In
          </button>

          <button className="rounded-full p-2 text-white hover:bg-[#272729]">
            <HiDotsHorizontal className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;