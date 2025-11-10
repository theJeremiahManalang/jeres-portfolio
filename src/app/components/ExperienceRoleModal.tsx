import React from 'react';
import { X } from 'lucide-react';
import { ExperienceItem } from '@/lib/types'; 

interface ExperienceRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: ExperienceItem | null; 
}

export const ExperienceRoleModal: React.FC<ExperienceRoleModalProps> = ({ isOpen, onClose, role }) => {
    
  // If not open or no data, render nothing
  if (!isOpen || !role) return null;
  
  // Ensure description is an array for reliable mapping
  const description = Array.isArray(role.description) 
    ? role.description 
    : (typeof role.description === 'string' ? [role.description] : null);

  return (
    // Full screen overlay
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg mx-4 p-6 md:p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 p-2 rounded-full text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{role.title}</h2>
        <div className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex justify-between items-center">
          <span>{role.company}</span>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800">
            {role.year}
          </span>
        </div>
        
        <hr className="border-gray-200 dark:border-gray-700 mb-4" />

        {/* Description/Details */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Responsibilities:</h3>
          {description && (
            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-600 dark:text-gray-400 text-sm">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};