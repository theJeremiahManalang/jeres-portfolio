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
  shortdescription: string;
  description: string;
  url: string; // link of github
  domain: string; 
  imageProject?: string[] | string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string; 
  description?: string[] | string;
  imageCert?: string[] | string;
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
  socialmedialink: SocialMediaLink[];
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

export interface SocialMediaLink {
  name?: string; // email, linkedin, github
  link?: string;
}

// -------------------------------- Personal Page ----------------------------
// src/types.ts
export interface MainPage {
  main: BackgroundItem[];
  sports: SportsItem[];
  organizations: string;
  videoEditing: string;
}

export interface BackgroundItem {
  images: string[];
}

export interface SportsItem {
  year: string;
  title: string;
  description: string;
  //icon?: string;
  color?: string;
}
