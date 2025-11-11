import React from 'react';
import { Award, Link, X, Monitor, Image as ImageIcon } from 'lucide-react'; 
import { ProjectItem } from '@/lib/types';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectItem | null; 
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    
    if (!isOpen || !project) return null;

    // Safely normalize description to an array
    const description = Array.isArray(project.description) 
        ? project.description 
        : (typeof project.description === 'string' ? [project.description] : []);

    // Safely extract the hostname for link text (e.g., github.com)
    let linkText = null;
    if (project.url && project.url !== '#') {
        try {
            linkText = new URL(project.url).hostname;
        } catch (e) {
            linkText = project.url;
        }
    }

    // Image Logic: Normalize image URLs into a clean array
    const rawImages = project.imageProject || [];
    const imageUrls = Array.isArray(rawImages) 
        ? rawImages.filter(url => url && url !== '#') 
        : (typeof rawImages === 'string' && rawImages !== '#') ? [rawImages] : [];

    const hasImage = imageUrls.length > 0;
    const hasLink = linkText && project.url !== '#';

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/70 dark:bg-gray-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800 transition-all transform duration-300"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Header Section */}
                <div className="p-3 pb-2 md:p-8 md:pb-4 sticky top-0 bg-white dark:bg-gray-900 z-10 ">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <Monitor className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{project.name}</h2>
                        </div>
                        <button 
                            onClick={onClose} 
                            className="p-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0" 
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    {/* Separator Line AFTER header content */}
                    <div className="border-b border-1 border-gray-200 dark:border-gray-700 mt-4"></div>

                </div>
                
                {/* Content Body: Reorganized for Description -> Media -> Link */}
                <div className="px-6 md:px-8 pb-4 md:pb-8 ">
                    <div className="">
                        <h3 className="text-md font-bold text-gray-800 dark:text-gray-200">Details:</h3>
                        
                        {description.length > 0 ? (
                            <ul className="list-none space-y-2 pl-0 text-gray-600 dark:text-gray-400 text-sm">
                                {description.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="flex-1">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400 italic text-sm">No detailed description available.</p>
                        )}
                    </div>
                    
                    {/* Image Section: Placed after description, separated by a line */}
                    {hasImage && (
                        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                            <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                <ImageIcon className="w-4 h-4 text-gray-500"/>Screenshots / Media{imageUrls.length > 1 ? ` (${imageUrls.length} images)` : ''}
                            </h3>
                            
                            <div className="space-y-6"> 
                                {imageUrls.map((imageUrl, index) => (
                                    <div key={index} className="relative w-full h-auto bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700">
                                        <img 
                                            src={imageUrl} 
                                            alt={`Project image ${index + 1} for ${project.name}`}
                                            className="w-full h-auto object-cover"
                                            onError={(e) => { 
                                                // Fallback placeholder image if URL fails
                                                e.currentTarget.onerror = null; 
                                                e.currentTarget.src = `https://placehold.co/400x300/e5e7eb/4b5563?text=Image+${index + 1}+Unavailable`; 
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Link Section: Moved to the very bottom, always separated by a line */}
                    {hasLink && (
                        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4"> 
                            <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-3">External Link:</h3>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                            >
                                <Link className="w-4 h-4"/>View Source / Demo ({linkText})
                            </a>
                        </div>
                    )}
                    
                    {/* Fallback for completely empty optional data */}
                    {!(hasImage || hasLink || description.length > 0) && (
                           <p className="mt-4 text-gray-500 dark:text-gray-400 italic text-sm">No detailed information, external link, or project media available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};