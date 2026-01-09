import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { useSidebar } from '@/context/SidebarContext';

const ToggleSidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <button
            type="button"
            onClick={toggleSidebar}
            className="rounded-full bg-[#1A1A1B] p-2 text-white shadow transition-colors hover:bg-[#272729]"
            aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
            aria-pressed={isOpen}
        >
            <HiMenu className="h-6 w-6" />
        </button>
    );
};

export default ToggleSidebar;