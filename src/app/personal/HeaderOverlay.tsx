// src/components/HeaderOverlay.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react'; 

const NAV_LINKS = [
  { href: "/collections/all", label: "Orgs" },
  { href: "/collections", label: "Sports" },
  { href: "/pages/contact-us", label: "Vid Editor" },
  { href: "https://charlottefolk.co/pages/charlotte-folk-holiday-pop-up-2025", label: "Contact" },
];

// Define the scroll threshold (how far down before the header changes)
const SCROLL_THRESHOLD = 50; 

export const HeaderOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // --- SCROLL EFFECT LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      // Set the state based on whether the scroll position exceeds the threshold
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // ---------------------------

  // Determine the primary color (text/icons) based on the scroll state
  const textColor = isScrolled ? 'text-gray-800' : 'text-white';

  return (
    // Fixed position and dynamic background/shadow
    <header className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-none'}`}>
        <div className={`relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:bg-white before:z-0 before:transition-height before:duration-300 before:ease-in-out ${
                    isScrolled ? 'before:h-full' : 'before:h-0'
                }`}>
            <div className={`flex justify-between items-center h-25 px-4 lg:px-30 max-w-8sxl mx-auto relative z-10 border-b ${isScrolled ? 'border-gray-100' : 'border-white'}`}>                
                {/* === LEFT: Mobile Menu Toggle / Desktop Nav === */}
                <div className={`flex items-center space-x-4 ${textColor}`}>
                    {/* 1. Mobile Menu Toggle: Visible on SM and MD, hidden on LG and up */}
                    <button 
                        className="lg:hidden p-2" // Correct: Visible up to MD, hidden at LG
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-controls="mobile-menu-drawer"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    
                    {/* 2. Desktop Navigation Menu: Hidden on SM and MD, visible on LG and up */}
                    <nav id="desktop-menu" className="hidden lg:block" aria-label="Main Navigation">
                        <ul className="flex font-main font-medium space-x-6 lg:space-x-8 text-sm uppercase tracking-wide font-medium">
                            {/* Re-add the Home link */}
                            {NAV_LINKS.map(link => (
                                <li key={link.href}>
                                    <a 
                                        href={link.href} 
                                        className=" relative transition group" 
                                    >
                                        {link.label}
                                        <span className={`
                                            absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full 
                                            // The underline must be dark when scrolled/white background, and white when transparent
                                            ${isScrolled ? 'bg-gray-800' : 'bg-white'}
                                        `}></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* === CENTER: Logo === */}
                <a 
                href="/" 
                className="absolute left-1/2 transform -translate-x-1/2 h-10 md:h-10 "
                aria-label="Charlotte Folk Home"
                >
                <span className={`text-3xl font-title font-black uppercase tracking-normal transition-colors duration-300 ${textColor}`}>
                    Jeremiah Manalang
                </span>
                </a>

                {/* === RIGHT: Action Icons (Login, Search, Cart) === */}
                <div className={`flex items-center space-x-4 ${textColor}`}>
                    <a 
                        href="/" 
                        title="Go Back to Homepage" 
                        className="hidden sm:flex items-center space-x-1 text-sm font-main font-medium uppercase relative group transition-colors duration-300"
                    >
                        <span>RESUME</span>
                        <span className={`
                            absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full 
                            // The underline must be dark when scrolled/white background, and white when transparent
                            ${isScrolled ? 'bg-gray-800' : 'bg-white'}
                        `}></span>
                    </a>
                </div>
            </div>
        </div> 
      
      {/* --- Mobile Menu Drawer (Always opaque white text/icons for contrast) --- */}
      <div 
        id="mobile-menu-drawer"
        className={`fixed top-0 left-0 h-full w-full bg-black/50 transition-opacity duration-300 z-40 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        onClick={closeMenu}
      >
          <div 
              className={`absolute top-0 left-0 h-full w-64 bg-white text-gray-800 shadow-xl transition-transform duration-300 ease-in-out ${
                  isOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()} 
          >
              <button 
                  className="absolute top-6 left-6 p-2" 
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
              >
                  <X size={24} />
              </button>
              
              <ul className="flex flex-col space-y-4 pt-24 px-6 text-lg font-main-200 uppercase">
                  {NAV_LINKS.map(link => (
                      <li key={link.href}>
                          <a 
                              href={link.href} 
                              // Added: relative, group, and fixed hover to contrast with the white background
                              className="relative transition group hover:text-gray-900 block py-2"
                              onClick={closeMenu}
                          >
                              {link.label}
                              {/* Re-introduced Underline Span */}
                              <span className="absolute left-0 bottom-0 h-0.5 bg-gray-900 w-0 transition-all duration-300 group-hover:w-full"></span>
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
    </header>
  );
};