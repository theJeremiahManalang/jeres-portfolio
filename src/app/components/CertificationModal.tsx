import React from 'react';
import { Award, Link, X, Image as ImageIcon } from 'lucide-react'; 
import { CertificationItem } from '@/lib/types'; 



interface CertificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    cert: CertificationItem | null; 
}

export const CertificationModal: React.FC<CertificationModalProps> = ({ isOpen, onClose, cert }) => {
    
    if (!isOpen || !cert) return null;

    // Safely normalize description to an array
    const description = Array.isArray(cert.description) 
        ? cert.description 
        : (typeof cert.description === 'string' ? [cert.description] : []);

    // --- REMOVED URL/Link logic here ---

    // Image Logic: Normalize image URLs into a clean array (handles string or array)
    const rawImages = cert.imageCert || []; 
    const imageUrls = Array.isArray(rawImages) 
        ? rawImages.filter(url => url && url !== '#') 
        : (typeof rawImages === 'string' && rawImages !== '#') ? [rawImages] : [];

    const hasImage = imageUrls.length > 0;
    // --- REMOVED hasLink ---
    const hasYear = !!cert.year;

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
                <div className="p-3 pb-2 md:p-8 md:pb-4 sticky top-0 bg-white dark:bg-gray-900 z-10 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <Award className="w-6 h-6 text-blue-500 flex-shrink-0" />
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{cert.name}</h2>
                        </div>
                        <button 
                            onClick={onClose} 
                            className="p-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0" 
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex flex-row items-center gap-3 text-sm mt-1">
                        <div className="w-6 h-6 flex-shrink-0 invisible"></div> 
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{cert.issuer}</span>
                        {/* Render year only if it exists */}
                        {hasYear && (
                            <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                {cert.year}
                            </span>
                        )}
                    </div>
                </div>
                
                {/* Content Body */}
                <div className="px-6 md:px-8 pb-4 md:pb-8">

                    {/* Details Section */}
                    <div className="space-y-4 pt-4">
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

                    {/* Image Section: Displays one or more images if available */}
                    {hasImage && (
                        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                            <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                <ImageIcon className="w-4 h-4 text-gray-500"/>
                                Certificate Media{imageUrls.length > 1 ? ` (${imageUrls.length} images)` : ''}
                            </h3>
                            
                            <div className="space-y-6"> 
                                {imageUrls.map((imageUrl, index) => (
                                    <div key={index} className="relative w-full h-auto bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700">
                                        <img 
                                            src={imageUrl} 
                                            alt={`Certificate image ${index + 1} for ${cert.name}`}
                                            className="w-full h-auto object-cover"
                                            // Fallback for missing/broken image URL
                                            onError={(e) => { 
                                                e.currentTarget.onerror = null; 
                                                e.currentTarget.src = `https://placehold.co/400x300/e5e7eb/4b5563?text=Image+${index + 1}+Unavailable`; 
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* --- REMOVED Link Section entirely --- */}
                    
                    {/* Fallback for completely empty optional data (no image or description) */}
                    {description.length === 0 && !hasImage && (
                           <p className="mt-4 text-gray-500 dark:text-gray-400 italic text-sm">No detailed information or media available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};