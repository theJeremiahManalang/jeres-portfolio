// src/app/page.tsx
'use client'; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Assuming you use the Next.js Image component
import { Mail, Phone, MapPin, Sun, Moon } from 'lucide-react';

// Corrected relative imports based on your structure
import { userData } from '../lib/data'; 
import { BentoGrid } from './components/BentoGrid'; 
import { ThemeToggleProps } from '../lib/types'; 

// --- Shared/Utility Components ---

const VerifiedIcon: React.FC = () => (
  <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" aria-label="Verified user">
    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0"></path>
  </svg>
);

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => (
  <button
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      darkMode ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
    }`}
    aria-label="Toggle theme"
    onClick={() => setDarkMode(!darkMode)}
  >
    <div
      className={`absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
        darkMode ? 'translate-x-5' : 'translate-x-0'
      }`}
    >
      {darkMode ? (
        <Moon className="h-3 w-3 text-blue-600" />
      ) : (
        <Sun className="h-3 w-3 text-gray-500" />
      )}
    </div>
  </button>
);

// --- Main Application Component ---

const ProfilePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // CRITICAL FIX: Only set theme class after component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeClass = darkMode ? 'dark' : '';
  const rootClasses = `${themeClass} min-h-screen font-sans antialiased text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 transition-colors duration-300`;

  // Hydration Fix: Return null until mounted to avoid SSR mismatch
  if (!mounted) {
    return null; 
  }

  return (
    <div className={rootClasses}>
      
      {/* Global font style only */}
      <style jsx global>{`
        .font-sans {
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        }
      `}</style>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <section className="mb-6">
          <div className="flex items-start gap-4 md:gap-6">
            
            {/* PROFILE IMAGE: Replace '/profile.jpg' with your actual image path */}
            <div className="flex-shrink-0">
                <Image
                    src="/profile.jpg" // CHANGE THIS PATH
                    alt={`${userData.name}'s profile picture`}
                    className="rounded-xl object-cover"
                    width={160}
                    height={160}
                    style={{ width: '10rem', height: '10rem' }} // Ensures consistency with w-40 h-40
                />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold truncate">{userData.name}</h1>
                    <VerifiedIcon />
                  </div>
                  <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 mt-1">{userData.title}</p>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{userData.location}</span>
                  </p>
                </div>
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
              
              <div className="flex gap-3 mt-6">
                <a 
                  href="https://calendly.com/bryllim/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex h-9 items-center rounded-xl bg-blue-600 px-4 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 gap-1 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" /> Schedule a Call
                </a>
                <a 
                  href="mailto:bryllim@gmail.com" 
                  className="inline-flex h-9 items-center rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:-translate-y-0.5 gap-1 whitespace-nowrap text-gray-700 dark:text-gray-300 shadow-sm dark:shadow-none"
                >
                  <Mail className="w-4 h-4" /> Send Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The corrected BentoGrid component usage */}
        <BentoGrid />
      </main>
    </div>
  );
};

export default ProfilePage;