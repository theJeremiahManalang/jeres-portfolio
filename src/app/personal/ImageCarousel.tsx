// src/components/ImageCarousel.tsx
"use client"; 

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeaderOverlay } from './HeaderOverlay'; 
import { TextOverlay } from './TextOverlay';

interface CarouselProps {
  images: string[];
  autoSlideInterval?: number;
}

export const ImageCarousel: React.FC<CarouselProps> = ({ images, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  if (totalImages === 0) {
    return (
      <div className="h-screen bg-gray-900 text-white flex items-center justify-center text-xl font-mono">
        FATAL ERROR: No images loaded. Check profile.ts.
      </div>
    );
  }

  // Auto-sliding logic...
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages);
    }, autoSlideInterval);
    return () => clearInterval(timer);
  }, [totalImages, autoSlideInterval]);

  // Manual navigation functions...
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };
  const handleImageClick = () => {
    goToNext();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* 1. RENDER THE SEPARATE HEADER COMPONENT HERE */}
      <HeaderOverlay /> 

      {/* Current Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Sporting achievement photo ${currentIndex + 1}`}
        className="h-full w-full object-cover cursor-pointer transition-opacity duration-1000"
        onClick={handleImageClick}
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Central Text Overlay */}
      <TextOverlay />

      {/* Navigation Buttons (rest of the component remains the same) */}
      <button 
        onClick={goToPrev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-blue-600/50 text-white rounded-full hover:bg-blue-600 transition z-20" 
        aria-label="Previous Image"
      >
        <ChevronLeft size={30} />
      </button>
      
      <button 
        onClick={goToNext} 
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-blue-600/50 text-white rounded-full hover:bg-blue-600 transition z-20" 
        aria-label="Next Image"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-red-500 w-6' : 'bg-gray-400/70'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

