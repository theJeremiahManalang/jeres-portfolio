// src/app/components/BentoCard.tsx
import React from 'react';
import { Briefcase, Code, Compass, Award, RefreshCcw } from 'lucide-react';
import { BentoCardProps } from '../../lib/types';

const getIcon = (name: string) => {
  switch (name) {
    case 'Briefcase': return Briefcase;
    case 'Code': return Code;
    case 'Compass': return Compass;
    case 'Award': return Award;
    case 'RefreshCcw': return RefreshCcw;
    default: return null;
  }
};

export const BentoCard: React.FC<BentoCardProps> = ({ title, iconName, children, className = "" }) => {
  const Icon = iconName ? getIcon(iconName) : null;
  return (
    <div className={`p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 hover:shadow-lg relative ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-3">
          {Icon && <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
};