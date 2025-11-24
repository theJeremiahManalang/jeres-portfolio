// src/components/ImageCarousel.tsx
"use client"; 

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  autoSlideInterval?: number;
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  if (totalImages === 0) {
    return (
      <div className="h-screen bg-gray-900 text-white flex items-center justify-center text-xl font-mono">
        FATAL ERROR: No images loaded. Check profile.ts.
      </div>
    );
  }

  // Auto-sliding logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages);
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [totalImages, autoSlideInterval]);

  // Manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Manual navigation by clicking the image
  const handleImageClick = () => {
    goToNext();
  };

  return (
    // Sets the component to fill the viewport height
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Current Image Display */}
      <img
        // Only show the image at the current index
        src={images[currentIndex]}
        alt={`Sporting achievement photo ${currentIndex + 1}`}
        className="h-full w-full object-cover cursor-pointer transition-opacity duration-1000"
        onClick={handleImageClick}
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Navigation Buttons */}
      <button 
        onClick={goToPrev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-red-600/50 text-white rounded-full 
                   hover:bg-red-600 transition z-10"
        aria-label="Previous Image"
      >
        <ChevronLeft size={30} />
      </button>

      <button 
        onClick={goToNext} 
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-red-600/50 text-white rounded-full 
                   hover:bg-red-600 transition z-10"
        aria-label="Next Image"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
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

export default ImageCarousel;