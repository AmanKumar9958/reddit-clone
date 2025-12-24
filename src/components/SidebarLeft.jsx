"use client";

import React from "react";
// ... keep your existing icon imports ...
import {
    HiOutlineHome,
    HiOutlineArrowTrendingUp,
    HiOutlineViewBoards,
    HiOutlineMegaphone,
    HiOutlineCodeBracketSquare,
    HiOutlineUserCircle,
    HiOutlineQuestionMarkCircle,
    HiOutlineBookOpen,
    HiOutlineBriefcase,
    HiOutlineMicrophone,
    HiOutlineUserGroup,
    HiOutlineRocketLaunch,
    HiOutlineLanguage,
    HiOutlineShieldCheck,
    HiOutlineDocumentText,
} from "react-icons/hi2";
import { BsReddit } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import { useSidebar } from "@/context/SidebarContext"; // Import hook

// ... keep your helper components (SidebarLink, SidebarHeader, CommunityLink) ...
const SidebarLink = ({ icon, text, isActive }) => {
    return (
        <a
        href="#"
        className={`flex items-center gap-4 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            isActive
            ? "bg-[#2A3236] text-white"
            : "text-[#D7DADC] hover:bg-[#181C1F] hover:text-white"
        }`}
        >
            <span className="text-2xl">{icon}</span>
            <span>{text}</span>
        </a>
    );
};

const SidebarHeader = ({ text }) => {
    return (
        <div className="flex cursor-pointer items-center justify-between rounded-md px-4 py-2 text-xs font-bold text-gray-500 transition-colors hover:bg-[#272729]">
            <span>{text}</span>
            <IoMdArrowDropdown className="text-lg" />
        </div>
    );
};

const CommunityLink = ({ text }) => {
    return (
        <a
        href="#"
        className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-[#D7DADC] transition-colors hover:bg-[#272729] hover:text-white"
        >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">
                <BsReddit className="text-white" />
            </div>
            <span className="truncate">{text}</span>
        </a>
    );
};


const SidebarLeft = () => {
    const { isOpen, closeSidebar } = useSidebar();

    return (
        <>
            {/* MOBILE OVERLAY (Dark background when menu is open) */}
            {isOpen && (
                <div 
                    onClick={closeSidebar}
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                />
            )}

            {/* MAIN SIDEBAR */}
            <aside 
                className={`
                    custom-scrollbar 
                    border-r border-[#343536] bg-[#0E1113] py-4 
                    
                    /* Desktop Styles (unchanged) */
                    md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:block md:w-64 md:z-0
                    
                    /* Mobile Styles (Dynamic) */
                    fixed top-0 left-0 h-full w-[280px] z-50 transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}
            >
                {/* Close Button for Mobile (Optional, adds clarity) */}
                <div className="md:hidden px-4 mb-4 flex justify-between items-center">
                    <span className="font-bold text-lg">Menu</span>
                    <button onClick={closeSidebar} className="text-gray-400 text-sm">Close</button>
                </div>

                <div className="space-y-1 px-3 overflow-y-auto h-full pb-20">
                    {/* ... PASTE ALL YOUR EXISTING LINKS HERE ... */}
                     <SidebarLink icon={<HiOutlineHome />} text="Home" isActive={true} />
                     <SidebarLink icon={<HiOutlineArrowTrendingUp />} text="Popular" />
                     {/* ... (rest of your links) ... */}
                     <div className="space-y-0.5 pb-4">
                        <SidebarLink icon={<HiOutlineBookOpen />} text="Reddit Rules" />
                        <SidebarLink icon={<HiOutlineShieldCheck />} text="Privacy Policy" />
                        <SidebarLink icon={<HiOutlineDocumentText />} text="User Agreement" />
                        <SidebarLink icon={<HiOutlineUserCircle />} text="Accessibility" />
                     </div>
                </div>
            </aside>
        </>
    );
};

export default SidebarLeft;