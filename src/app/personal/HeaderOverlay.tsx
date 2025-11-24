// src/components/HeaderOverlay.tsx
import React from 'react';

export const HeaderOverlay: React.FC = () => {
  return (
    // Position the header absolutely at the top and give it a high z-index
    <header className="absolute top-0 left-0 w-full p-8 z-20">
      <nav className="flex justify-between items-center text-white">
        
        <a 
          href="/" // Assuming this links back to the main page root
          className="text-xl font-bold tracking-wider px-3 py-1 border border-white rounded-md hover:bg-white/10 transition duration-300"
          aria-label="Go back to the main page"
        >
          Back
        </a>
        
        <ul className="flex space-x-8 text-lg">
          <li><a href="#sports" className="hover:text-red-400 transition">Sports</a></li>
          <li><a href="#organizations" className="hover:text-red-400 transition">Organizations</a></li>
          <li><a href="#video-editing" className="hover:text-red-400 transition">Video Editing</a></li>
          <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
