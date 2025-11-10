// src/app/components/TechStackModal.tsx
import React from 'react';
import { X, Code } from 'lucide-react';
import { userData } from '../../lib/data';

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getCategoryDisplayName = (key: string): string => {
  // Use a map for specific replacements, otherwise apply default formatting
  const replacements: { [key: string]: string } = {
    'aiml': 'AI, Machine Learning & Automation',
    'devtools': 'Developer Tools', // Example for better readability
    'microcontrollers': 'Microcontrollers & IoT', // Example for better readability
  };

  if (replacements[key]) {
    return replacements[key];
  }
  
  // Apply default formatting (capitalization and space insertion)
  // This is your original logic: category.replace(/([A-Z])/g, ' $1')
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
};

export const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4"
      onClick={onClose} // Close modal when clicking the backdrop
    >
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-900 shadow-2xl p-6 transition-all transform duration-300"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header (No change) */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-gray-500 dark:text-white" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
          </div>
          
          {/* Close Button (No change) */}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6">
          {Object.entries(userData.techStack).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-base font-bold mb-3 capitalize text-gray-800 dark:text-gray-200">
                {/* FIX: Use the new helper function for display name */}
                {getCategoryDisplayName(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-2 py-0.5 text-xs rounded-md bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};