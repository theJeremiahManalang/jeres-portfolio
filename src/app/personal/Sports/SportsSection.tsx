"use client";
import React, { useMemo, useState, useEffect } from 'react';
import { mainPage } from '@/lib/profile'; 
import { Trophy, Zap, Users, Shield, Clock, LucideIcon } from 'lucide-react';
import { SportsItem } from '@/lib/types';

const ICON_MAP: { [key: string]: LucideIcon } = {
    "University Graduation (Projected)": Trophy,
    "Elected Student Leader": Users,
    "National Regional Athlete": Zap,
    "High School Team Captain": Shield,
    "Initiation into Competitive Sports": Clock,
};

// Processed event data including the React icon element
interface ProcessedTimelineEvent extends SportsItem {
    icon: React.ReactElement; 
}
// --- END STUBBED DATA AND TYPES ---


export const SportsTimeline: React.FC = () => {
    
    // Process the raw data to include the necessary icon element
    const processedEvents: ProcessedTimelineEvent[] = useMemo(() => {
        return mainPage.sports.map(event => {
            const IconComponent = ICON_MAP[event.title];
            const icon = IconComponent 
                ? <IconComponent className="w-5 h-5 text-white" /> 
                : <Clock className="w-5 h-5 text-white" />; // Default icon

            return {
                ...event,
                icon,
            };
        });
    }, []); 

    // Find the latest year (assuming data is sorted descending, which it is)
    const latestEvent = processedEvents[0];

    // State to track the currently selected event, defaults to the latest
    const [selectedEvent, setSelectedEvent] = useState<ProcessedTimelineEvent>(latestEvent);
    
    // Find the icon for the currently selected event detail pane
    const SelectedIconComponent = ICON_MAP[selectedEvent.title];
    const DetailIcon = SelectedIconComponent 
        ? <SelectedIconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" /> 
        : <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" />;

    return (
        <section id="sports-timeline" className="py-16 md:py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 drop-shadow-lg">
                    My Athletic & Leadership Journey
                </h2>

                {/* --- 1. Horizontal Timeline Navigation --- */}
                <div className="relative flex justify-between items-center w-full mb-12 py-4">
                    
                    {/* Horizontal Line Connector */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 z-0"></div>

                    {processedEvents.map((event, index) => {
                        const isSelected = event.year === selectedEvent.year;
                        const isFirst = index === 0;

                        return (
                            <div 
                                key={event.year} 
                                className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 z-10 
                                            ${isSelected ? 'scale-110' : 'hover:scale-105'}`}
                                onClick={() => setSelectedEvent(event)}
                            >
                                {/* Year Indicator / Button */}
                                <div className={`flex justify-center items-center w-14 h-14 rounded-full font-bold text-lg ring-4 
                                                 ${event.color} transition-all duration-300 shadow-xl
                                                 ${isSelected ? 'ring-offset-4 ring-offset-gray-900 ring-blue-400' : 'ring-gray-700'}`}>
                                    {event.year}
                                </div>
                                
                                {/* Label for the current selection (only visible when selected) */}
                                {isSelected && (
                                    <span className="absolute -bottom-8 text-sm font-medium text-blue-400 whitespace-nowrap animate-pulse">
                                        Current Focus
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
                {/* --- End Horizontal Timeline Navigation --- */}


                {/* --- 2. Event Detail Display Area --- */}
                <div className="mt-20 lg:mt-24 p-8 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 mx-auto max-w-4xl transition-all duration-500">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg ${selectedEvent.color} shadow-lg`}>
                            {DetailIcon}
                        </div>
                        <h3 className="text-3xl font-bold text-white">
                            {selectedEvent.title}
                        </h3>
                    </div>
                    
                    <p className="text-sm font-semibold text-gray-400 mb-4">
                        Year: {selectedEvent.year}
                    </p>
                    
                    <div className="border-t border-gray-700 pt-4">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {selectedEvent.description}
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    );
};