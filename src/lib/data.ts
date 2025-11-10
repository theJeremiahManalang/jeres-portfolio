// src/lib/data.ts
import { UserData } from './types';

export const userData: UserData = {
  name: "Jeremiah L. Manalang",
  title: "Computer Engineer",
  location: "Metro Manila, Philippines",
  about: "I'm Jeremiah L. Manalang, a recent Computer Engineering graduate from Adamson University, passionate about mastering DevOps and modern Software Development. My experience includes developing a customer-facing web application at Aboitiz Foods Group and contributing to a 3D visualization tool using Unity and C# at Schneider Electric Philippines. I’ve actively pursued system architecture challenges, like developing the Keynergy IoT data pipeline using Python and Firebase. I'm dedicated to learning how to architect and automate resilient systems, and I actively seek out challenges that push the boundaries of current technology, backed by a proven track record of technical project execution and leadership.",
  motto: "I'll see you in the top because at the bottom is too crowded, but we never lock down on anybody unless we're willing to help them up.",
  financialMotto: "Stay small enough, long enough. You'll be big enough, soon enough",
  beyondCoding: "When not writing code, I enjoy playing sports, such as basketball, volleyball, and chess. I also enjoy being part of organizations where I was awarded as the Rank 9 St. Vincent de Paul Student Leadership Award.",
  experience: [
    //{ title: "Principal AI Engineer", company: "Standard Chartered", year: "2025", isCurrent: true },
    { 
      title: "BS Computer Engineering", 
      company: "Adamson University", 
      year: "2025", 
      description: [
        "Rank 9 St. Vincent de Paul Student Leadership Awardee",
        "Student Leadership Awardee - CpE Department",
        "Chairperson for Sports and Recreation - Adamson University Student Government (AUSG) 2024-2025",
        "Executive President - Adamson University Computer Engineering Society (ACOES) 2023-2024",
        "3rd-Runner Up in Breadboarding Competition - Institute of Computer Engineers of the Philippines (ICpEP) 2024",
        "Executive Vice President in Internal Affairs - Adamson University Engineering Student Council (AdU-ESC) 2022-2023",
        "4th-Runner Up in Breadboarding Competition - Institute of Computer Engineers of the Philippines (ICpEP) 2023",
        "Multimedia Video Editing Head - Adamson University Engineering Student Council (AdU-ESC) 2021-2023",
      ], 
      imageCert: "/gradpic-manalang.jpg", 
    },
    { 
      title: "Software Developer Intern", 
      company: "Aboitiz Foods", 
      year: "2025", 
      description: [
        "Developed a customer-facing web application utilizing the jQuery framework to streamline payment request processing and improve overall user efficiency.",
        "Established a data pipeline with Google Sheets for real-time data persistence and connected the app with automated Google Drive integration for secure multi-file uploads.",
      ], 
      imageCert: "/aboitiz-foods-cert-manalang.png",  
    },
    { 
      title: "Digital Transformation Intern", 
      company: "Schneider Electric", 
      year: "2023", 
      description: [
        "Developed the User Interface (UI) for a 3D truck container filler using Unity and C#, enabling operators to visualize and optimize container box positioning.",
        "Contributed to the development and integration of core system functionalities, directly enhancing the overall logistics efficiency and operational flow.",
      ], 
      imageCert: "/schneider-electric-cert-manalang.png", 
    },
    { 
      title: "Hello World! 👋🏻", 
      company: "Wrote my first line of code", 
      year: "2013", 
      description: [
        "Hello World! :)"
      ], 
      imageCert: "#"  
    },
  ],
  techStack: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"],
    backend: ["PHP", "Python", "MySQL", "SQLite", "Firebase", "C#/.NET", "Laravel", ".NET Core/ASP.NET Core"],
    devtools: ["Git", "Github", "Visual Studio", "VS Code", "Pycharm", "Jupyter Notebook", "Arduino IDE", "Thonny IDE", "Google Colab", "Notion", "Discord", "MS Teams"],
    aiml: ["TensorFlow", "PyTorch", "Roboflow", "n8n", "YOLOv8"],
    microcontrollers: ["Arduino UNO", "Arduino NANO", "Arduno Micro", "ESP32", "Raspberry Pi Pico/Pico W", "PIC18"],
  },
  projects: [
    { name: "Keynergy", description: "Energy harvesting mechanical keyboard", url: "#", domain: "https://youtu.be/6ZsAPNvZQUU" },
    { name: "MPL PH S16 AI-Predictor", description: "Predict the finals champion for MPL S16", url: "#", domain: "base-404.com" },
    { name: "DIIN.PH", description: "AI-powered wardrobe assistant", url: "https://diin.ph", domain: "diin.ph" },
    { name: "DYNAMIS Workout Tracker", description: "AI-powered workout tracker", url: "https://dynamis-app.online", domain: "dynamis-app.online" },
  ],
  certifications: [
    { name: "St. Vincent de Paul Student Leadership Award", issuer: "AdU - Office of Student Affairs", url: "#" },
    { name: "Student Leadership Award", issuer: "AdU - CpE Department", url: "#" },
  ]
};