// src/app/components/Footer.tsx
import React from 'react';
// Assuming userData is available in a lib/data file as per your page.tsx
import { userData } from '../../lib/data'; 
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, // Added Facebook
  Instagram, // Added Instagram
  Link // Fallback icon (renamed ExternalLink to Link for brevity)
} from 'lucide-react';
// Note: You may need to install the lucide-react package if you haven't already:
// npm install lucide-react or yarn add lucide-react

// --- Utility Functions ---

/**
 * Maps the social media name string to the corresponding Lucide React icon component.
 * @param name The name of the social media platform (e.g., "Github", "Linkedin").
 * @returns The React component for the icon.
 */
const getSocialIcon = (name?: string): React.FC<React.SVGProps<SVGSVGElement>> => {
  const standardizedName = name?.toLowerCase();
  switch (standardizedName) {
    case 'linkedin': 
      return Linkedin;
    case 'github': 
      return Github;
    case 'facebook': 
      return Facebook;
    case 'instagram': 
      return Instagram;
    // Twitter is not in your data but kept for completeness
    case 'twitter': 
      return Twitter; 
    default: 
      return Link; // Link is a good generic fallback icon
  }
};

// --- Footer Component ---

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Ensure userData.socialmedialink exists and is an array before mapping
  const socialLinks = userData.socialmedialink || [];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 mt-12 py-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Social Links mapped from userData */}
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((item, index) => {
            // Get the icon component dynamically
            const Icon = getSocialIcon(item.name);
            
            return (
              <a
                key={index} // Using index is acceptable for static arrays like this
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${userData.name}'s ${item.name}`}
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>

        {/* Copyright and Signature */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {currentYear} {userData.name}. All rights reserved.
        </p>

    
      </div>
    </footer>
  );
};