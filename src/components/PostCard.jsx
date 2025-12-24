// src/components/PostCard.jsx
"use client";

import React from "react";
import { TbArrowBigUp, TbArrowBigDown, TbMessageCircle, TbShare3 } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import { BsStarFill, BsGiftFill } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const PostCard = ({ post }) => {
  // If no post data is provided, don't render anything
  if (!post) return null;

  const { subreddit, author, time, title, content, upvotes, comments, image, type } = post;

  return (
    // Main Card: Rounded, dark bg, border that gets lighter on hover
    <div className="rounded-md hover:bg-[#0E1113] cursor-pointer transition-all duration:300">
      
      {/* --- HEADER Section --- */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-1 text-xs text-[#D7DADC]">
          {/* Community Icon Placeholder */}
          <FaRedditAlien className="h-5 w-5 rounded-full bg-gray-700 p-0.5 text-white" />
          
          {/* Subreddit Name */}
          <span className="font-bold hover:underline">{subreddit}</span>
          <span className="text-gray-500">•</span>
          
          {/* Posted by & Time */}
          <span className="text-gray-500">Posted by {author} {time}</span>
          
          {/* "Popular on Reddit" Star Icon */}
          <BsStarFill className="ml-1 text-yellow-500" />
        </div>
        
        <div className="flex items-center gap-2">
          {/* Join Button */}
          <button className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white hover:bg-blue-500">
            Join
          </button>
          {/* Menu Dots */}
          <button className="rounded-full p-1 text-gray-400 hover:bg-[#272729]">
            <IoIosMore className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* --- TITLE Section --- */}
      <h2 className="px-4 py-2 text-lg font-semibold text-[#D7DADC]">{title}</h2>

      {/* --- CONTENT Section (Image or Text) --- */}
      <div className="px-4 py-2">
        {type === "image" && image ? (
          // Image Container with relative positioning for overlays
          <div className="relative flex justify-center bg-black rounded-md overflow-hidden">
            {/* The Post Image */}
            <img
              src={image}
              alt={title}
              className="max-h-[500px] w-full object-contain"
            />
            
            {/* Carousel Arrow (Right) */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 cursor-pointer">
              <FiChevronRight className="h-6 w-6" />
            </div>

            {/* Carousel Pagination Dots (Bottom) */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        ) : (
          // Fallback for text posts
          <p className="text-sm text-[#D7DADC]">{content}</p>
        )}
      </div>

      {/* --- FOOTER Section (Actions) --- */}
      <div className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#D7DADC]">
        
        {/* 1. Vote Buttons Container */}
        <div className="flex items-center rounded-full bg-[#272729] p-1">
          <button className="rounded-full p-1 hover:bg-[#343536] hover:text-orange-500">
            <TbArrowBigUp className="h-6 w-6" />
          </button>
          <span className="px-2">{upvotes}</span>
          <button className="rounded-full p-1 hover:bg-[#343536] hover:text-blue-500">
            <TbArrowBigDown className="h-6 w-6" />
          </button>
        </div>

        {/* 2. Comments Button */}
        <button className="flex items-center gap-2 rounded-full bg-[#272729] px-3 py-2 hover:bg-[#343536]">
          <TbMessageCircle className="h-6 w-6" /> {/* <--- Changed here */}
          <span>{comments}</span>
        </button>

        {/* 3. Award Button */}
        <button className="flex items-center gap-2 rounded-full bg-[#272729] px-3 py-2 hover:bg-[#343536]">
          <BsGiftFill className="h-5 w-5 text-yellow-500" />
        </button>

        {/* 4. Share Button */}
        <button className="flex items-center gap-2 rounded-full bg-[#272729] px-3 py-2 hover:bg-[#343536]">
          <TbShare3 className="h-6 w-6" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;