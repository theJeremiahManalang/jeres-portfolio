import React from 'react';
import { Briefcase, X, GraduationCap, Zap, Image as ImageIcon } from 'lucide-react';
import { ExperienceItem } from '@/lib/types'; 


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

    // --- Icon Inference Logic (based on title) ---
    const getIcon = () => {
        const titleLower = role.title.toLowerCase();
        // Prioritize GraduationCap for education keywords
        if (titleLower.includes('university') || titleLower.includes('college') || titleLower.includes('bs') || titleLower.includes('degree')) {
            return GraduationCap;
        }
        // Use Zap for achievements
        if (titleLower.includes('milestone') || titleLower.includes('achievement')) {
            return Zap;
        }
        return Briefcase; // Default for job/internship
    };

    const IconComponent = getIcon();

    return (
        // Full screen overlay (semi-transparent white overlay for a clean, light effect)
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/70 dark:bg-gray-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
        >
            {/* Modal Content Card - Small width for minimalist look */}
            <div 
                className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 transition-all transform duration-300"
                onClick={(e) => e.stopPropagation()} 
            >

                {/* --- Header Section: Title, Company, Year (Combined) --- */}
                <div className="p-3 pb-2 md:p-8 md:pb-4 sticky top-0 bg-white dark:bg-gray-900 z-10">
                
                    {/* Row 1: Icon, Title, Close Button */}
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                            {/* Subtle Icon - w-6 h-6 */}
                            <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300 flex-shrink-0" />

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                                {role.title}
                            </h2>
                        </div>
                        
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="p-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Row 2: Company/School and Year (Aligned) */}
                    <div className="flex flex-row items-center gap-3 text-sm">
                        {/* SPACING FIX: This invisible div matches the w-6 h-6 icon size */}
                        <div className="w-6 h-6 flex-shrink-0 invisible"></div> 
                        
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {role.company}
                        </span>
                        
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                            {role.year}
                        </span>
                    </div>
                    
                    {/* Separator Line AFTER header content (for visual division) */}
                    <div className="border-b border-1 border-gray-200 dark:border-gray-700 mt-4"></div>
                </div>
                {/* --- End Header Section --- */}
                
                {/* Content Body */}
                <div className="px-6 md:px-8 pb-6 md:pb-8">

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
                    
                    {/* --- Certificate Image Section --- */}
                    {role.imageUrl && (
                        <>
                            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6"></div>
                            
                            <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                <ImageIcon className="w-4 h-4 text-gray-500"/>Certificate of Completion
                            </h3>

                            <div className="relative w-full h-auto bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 shadow-inner">
                                <img 
                                    src={role.imageUrl} 
                                    alt={`Certificate for ${role.title} from ${role.company}`}
                                    className="w-full h-auto object-cover"
                                    onError={(e) => { 
                                        e.currentTarget.onerror = null; 
                                        e.currentTarget.src = "https://placehold.co/400x300/e5e7eb/4b5563?text=Certificate+Image+Unavailable"; 
                                    }}
                                />
                            </div>
                        </>
                    )}
                    {/* --- End Certificate Image Section --- */}

                </div>
            </div>
        </div>
    );
};