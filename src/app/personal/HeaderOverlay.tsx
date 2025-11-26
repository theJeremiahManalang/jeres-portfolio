// src/components/HeaderOverlay.tsx
"use client"; // REQUIRED for useState and handling clicks

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for menu toggle

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#sports", label: "Sports" },
  { href: "#organizations", label: "Organizations" },
  { href: "#video-editing", label: "Video Editing" },
  { href: "#contact", label: "Contact" },
];

export const HeaderOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  return (
    // Ensure header z-index is high
    <header className="absolute top-0 left-0 w-full p-6 z-30"> 
      <nav className="flex justify-between items-center text-white">
        
        {/* Left Side: Back Button */}
        <a 
          href="/" 
          className="text-xl font-bold tracking-wider px-3 py-1 border border-white rounded-md hover:bg-white/10 transition duration-300 z-40"
          aria-label="Go back to the main page"
        >
          Back
        </a>
        
        {/* Right Side: Desktop Menu (Visible on medium screens and up) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Mobile Hamburger Icon (Visible on small screens) */}
        <button 
          className="md:hidden z-40 p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* --- Mobile Dropdown Menu (Activated by Hamburger) --- */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-black/30 backdrop-blur-sm shadow-xl transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        // Add padding to avoid overlaying the top navigation bar/icon
        onClick={() => setIsOpen(false)} 
      >
        <ul className="flex flex-col space-y-8 pt-24 items-center text-2xl font-semibold">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="text-white hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Optional: Darken background when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </header>
  );
};

