// src/app/page.tsx
import React from 'react';
import ImageCarousel from './ImageCarousel';
import { mainPage } from '@/lib/profile'; 

// Function to safely extract the array of image paths
const getSportsImages = (): string[] => {
  // Check if the 'sports' array exists and is not empty
  if (mainPage.sports && mainPage.sports.length > 0) {
    // We assume the images are in the first SportsItem object, 
    // and we flatten them into a single string array.
    return mainPage.sports.flatMap(item => item.images);
  }
  return [];
};

const HomePage: React.FC = () => {
  const sportsImages = getSportsImages();

  return (
    <>
      <div className="min-h-screen">
        
        {/* The Image Carousel Section */}
        <section id="hero-carousel" className="w-full">
          {/* Pass the flat array of 31 image URL strings */}
          <ImageCarousel 
            images={sportsImages} 
            autoSlideInterval={3000} // 3 seconds
          />
        </section>
        
        {/* --- Content Below the Carousel --- */}
        {/*
        <section id="content" className="p-10 bg-gray-100 min-h-[50vh]">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Sports & Leadership Showcase</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            This section visually represents my involvement in sports and student organizations, 
            using the images defined in `profile.ts`.
          </p>
        </section>
        */}

      </div>
    </>
  );
};

export default HomePage;