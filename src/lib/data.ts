// src/lib/data.ts
import { UserData } from './types';

export const userData: UserData = {
  name: "Bryl Lim",
  title: "Software Engineer / Content Creator",
  location: "Metro Manila, Philippines",
  about: "I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on projects including building modern web applications, mobile apps, search engine optimization, digital marketing, and making code tutorials. Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows and deliver cutting-edge technology.",
  beyondCoding: "When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture. I share my knowledge through content creation and community building.",
  experience: [
    { title: "Principal AI Engineer", company: "Standard Chartered", year: "2025", isCurrent: true },
    { title: "AI Ops Engineer", company: "Centre of Excellence for GenAI, Cambridge", year: "2025" },
    { title: "Senior Full-Stack Developer", company: "Core Technology, Cambridge", year: "2024" },
    { title: "Software Engineering Lead", company: "PocketDevs", year: "2022" },
    { title: "Lead Application Developer", company: "Bluewind Asia", year: "2021" },
    { title: "Software Engineer", company: "GCM", year: "2020" },
    { title: "BS Information Technology", company: "University of San Carlos", year: "2019" },
    { title: "Hello World! 👋🏻", company: "Wrote my first line of code", year: "2015" },
  ],
  techStack: {
    frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
    devOps: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  projects: [
    { name: "CodeCred", description: "Online certifications for programmers", url: "https://codecred.dev", domain: "codecred.dev" },
    { name: "BASE404", description: "Online coding bootcamp", url: "https://base-404.com", domain: "base-404.com" },
    { name: "DIIN.PH", description: "AI-powered wardrobe assistant", url: "https://diin.ph", domain: "diin.ph" },
    { name: "DYNAMIS Workout Tracker", description: "AI-powered workout tracker", url: "https://dynamis-app.online", domain: "dynamis-app.online" },
  ],
  certifications: [
    { name: "Huawei Developer Expert", issuer: "Huawei", url: "#" },
    { name: "Certified Kubernetes Administrator", issuer: "CNCF", url: "#" },
  ]
};