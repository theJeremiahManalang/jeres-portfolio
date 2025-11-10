// src/lib/types.ts

// The original content was correctly defining these types,
// but we'll put them in a dedicated 'types.ts' file inside 'lib'

export interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  isCurrent?: boolean;
  description?: string | string[];
  imageCert?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  url: string;
  domain: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  url: string;
}

export interface UserData {
  name: string;
  title: string;
  location: string;
  about: string;
  motto: string;
  financialMotto: string;
  beyondCoding: string;
  experience: ExperienceItem[];
  techStack: {
    frontend: string[];
    backend: string[];
    devtools: string[];
    aiml: string[];
    microcontrollers: string[];
  };
  projects: ProjectItem[];
  certifications: CertificationItem[];
}

export interface BentoCardProps {
  title?: string;
  iconName?: string;
  children: React.ReactNode;
  className?: string;
}

export interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}