import React, { useState, useEffect } from 'react';

// The array of roles to cycle through.
const PHRASES = ['Full Stack Developer', 'Student Leader', 'Sports Enthusiast', 'Video Editor'];

// Blinking cursor CSS animation
const cursorStyle = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .cursor-blink {
    animation: blink 0.7s infinite;
  }
`;

export const TextOverlay: React.FC = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = PHRASES[phraseIndex];
        let timeout: NodeJS.Timeout;

        if (isDeleting) {
            // --- DELETING PHASE ---
            if (displayedText === '') {
                // Done deleting, switch to next phrase
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
                return;
            }
            // Delete one character
            timeout = setTimeout(() => {
                setDisplayedText(prev => prev.slice(0, -1));
            }, 50); // Fast delete
        } else {
            // --- TYPING PHASE ---
            if (displayedText === currentPhrase) {
                // Done typing, pause before deleting
                timeout = setTimeout(() => setIsDeleting(true), 1500); // Pause for 1.5s
                return;
            }
            // Type one character
            timeout = setTimeout(() => {
                setDisplayedText(prev => currentPhrase.substring(0, prev.length + 1));
            }, 100); // Normal typing speed
        }

        return () => clearTimeout(timeout); // Cleanup function for the timeout
    }, [displayedText, isDeleting, phraseIndex]);

    return (
        // Add the CSS for the blinking cursor directly here
        <>
            <style>{cursorStyle}</style>
            
            <div className="absolute bottom-26 lg:left-24 left-16 flex flex-col items-start text-white text-left z-10 p-6 max-w-xl lg:max-w-3xl md:max-w-2xl">
                
                <div className="flex flex-col mb-4"> 
                    <h1 className="text-5xl lg:text-6xl md:text-5xl font-extrabold tracking-tight mb-1 drop-shadow-lg">
                        HI, I'M <span className="text-blue-600">JEREMIAH</span>
                    </h1>
                </div>

                {/* THE TYPING ANIMATION IMPLEMENTATION */}
                <h2 className="text-3xl lg:text-4xl md:text-3xl font-semibold mb-3 drop-shadow-lg h-10 min-w-40">
                    {displayedText}
                    {/* Blinking cursor */}
                    <span className="cursor-blink ml-1">|</span>
                </h2>

                {/* Added a solid background/backdrop for readability in the corner */}
                <p className="text-lg lg:text-2xl md:text-lg font-light drop-shadow-md bg-black/50 p-4 rounded-lg">
                    I'm an undergraduate student majoring in BS Computer Engineering at Adamson University. Other than academics, I am deeply passionate about sports, student leadership, and video editing.
                </p>
            </div>
        </>
    );
};