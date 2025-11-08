// src/app/components/TechStackModal.tsx
import React from 'react';
import { X, Code } from 'lucide-react';
import { userData } from '../../lib/data';

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
      onClick={onClose} // Close modal when clicking the backdrop
    >
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-900 shadow-2xl p-6 transition-all transform duration-300"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Full Tech Stack</h2>
          </div>
          
          {/* Close Button */}
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
                {category.replace(/([A-Z])/g, ' $1')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 border border-blue-300 dark:bg-blue-900/40 dark:border-blue-700 text-blue-800 dark:text-blue-300 transition-colors shadow-sm"
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