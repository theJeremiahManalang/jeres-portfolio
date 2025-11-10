import React from 'react';
import { Briefcase, X, GraduationCap, Zap } from 'lucide-react';
import { ExperienceItem } from '@/lib/types'; 

interface EnhancedExperienceItem extends ExperienceItem {
    type?: 'job' | 'education' | 'achievement';
}
interface ExperienceRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: ExperienceItem | null; 
}

export const ExperienceRoleModal: React.FC<ExperienceRoleModalProps> = ({ isOpen, onClose, role }) => {
    
  if (!isOpen || !role) return null;

  const description = Array.isArray(role.description) 
    ? role.description 
    : (typeof role.description === 'string' ? [role.description] : []);

  // --- Icon Inference Logic (Simple & Minimalist, based on title only) ---
  // Since 'type' is removed, we infer the icon based on keywords in the title.
  const getIcon = () => {
    const titleLower = role.title.toLowerCase();
    if (titleLower.includes('university') || titleLower.includes('college') || titleLower.includes('bs')) {
      return GraduationCap;
    }
    if (titleLower.includes('hello world') || titleLower.includes('milestone') || titleLower.includes('achievement')) {
      return Zap;
    }
    return Briefcase; // Default for job/internship
  };

  const IconComponent = getIcon();

  return (
    // Full screen overlay (semi-transparent white overlay for a clean, light effect)
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Modal Content Card - Extremely clean, centered layout, minimal shadow */}
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-900 shadow-2xl p-6 transition-all transform duration-300"
        onClick={(e) => e.stopPropagation()} 
      >

        {/* Header Section (Icon, Title, Close Button) */}
        
          
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
            <div className="flex items-center gap-2">
              {/* Subtle Icon */}
              <IconComponent className="w-5 h-5 text-gray-500 dark:text-white" />

              {/* Title - Increased size for prominence */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {role.title}
              </h2>
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
          
          {/* Separator Line */}
          
       
        
        {/* Content Body */}
        <div className="px-6 md:px-8 pt-0 pb-6 md:pb-8">

          {/* Company and Year Section - Separate line, clean spacing */}
          <div className="flex items-center justify-between text-sm mb-6 mt-2">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {role.company}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {role.year}
            </span>
          </div>

          {/* Separator Line */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-6"></div>


          {/* Description/Details */}
          <div className="space-y-4">
            {/* Section Title - Bold and clear */}
            <h3 className="text-md font-bold text-gray-800 dark:text-gray-200">
              Key Achievements & Responsibilities:
            </h3>
            
            {description.length > 0 ? (
              <ul className="list-none space-y-2 pl-0 text-gray-600 dark:text-gray-400 text-sm">
                {description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    {/* Simple bullet point */}
                    <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 italic text-sm">No detailed description available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};