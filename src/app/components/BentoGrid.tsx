// src/app/components/BentoGrid.tsx
import React from 'react';
import { Link } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { userData } from '../../lib/data';



const ExperienceCard: React.FC = () => (
  <BentoCard title="Experience" iconName="Briefcase" className="md:row-span-2 flex flex-col">
    <div className="relative space-y-4 mt-1 flex-1">
      <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-gray-200 dark:bg-gray-700"></div>
      {userData.experience.map((role, index) => (
        <div key={index} className="relative pl-6 group/role">
          <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
            role.isCurrent
              ? 'border-blue-500 bg-blue-500'
              : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 group-hover/role:bg-blue-500'
          }`}></div>
          <div className="space-y-1">
            <h3 className={`text-sm font-semibold transition-colors ${role.isCurrent ? 'text-blue-500' : 'text-gray-900 dark:text-white group-hover/role:text-blue-500'}`}>
              {role.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-400">{role.company}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${role.isCurrent ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>
                {role.year}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </BentoCard>
);

const TechStackCard: React.FC = () => (
  <BentoCard title="Tech Stack" iconName="Code" className="md:col-span-4">
    
    <div className="space-y-4">
      {Object.entries(userData.techStack).map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-sm font-semibold mb-2 capitalize text-gray-700 dark:text-gray-300">{category.replace(/([A-Z])/g, ' $1')}</h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map(skill => (
              <span key={skill} className="px-2 py-0.5 text-xs rounded-md bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </BentoCard>
);

const ProjectsCard: React.FC = () => (
  <BentoCard title="Recent Projects" iconName="RefreshCcw" className="md:col-span-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-1">
      {userData.projects.map(project => (
        <a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 group flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center gap-1.5">
              {project.name} <Link className="w-3 h-3 text-gray-400 dark:text-gray-600 group-hover:text-blue-500"/>
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{project.description}</p>
          </div>
          <p className="text-[10px] text-gray-500 font-mono bg-gray-200/50 dark:bg-gray-700/50 px-2 py-0.5 rounded-md inline-block mt-2 self-start">
            {project.domain}
          </p>
        </a>
      ))}
    </div>
  </BentoCard>
);

const CertificationsCard: React.FC = () => (
  <BentoCard title="Recent Certifications" iconName="Award" className="md:col-span-2">
    <div className="space-y-2 mt-2">
      {userData.certifications.map((cert, index) => (
        <a
          key={index}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-transparent hover:border-blue-300 dark:hover:border-blue-700"
        >
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
          <p className="text-[11px] text-gray-600 dark:text-gray-400">{cert.issuer}</p>
        </a>
      ))}
    </div>
  </BentoCard>
);

export const BentoGrid: React.FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
    
    <BentoCard title="About" iconName="Compass" className="md:col-span-4">
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{userData.about}</p>
    </BentoCard>

    <div className="col-span-1 md:col-span-2 md:row-span-1">
      <ExperienceCard />
    </div>

    <BentoCard title="Beyond Coding" iconName="RefreshCcw" className="md:col-span-2">
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 flex-1">{userData.beyondCoding}</p>
      <a
        href="/beyond-coding-details" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full py-1.5 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md"
      >
        Learn More
      </a>
    </BentoCard>

    <TechStackCard />

    <ProjectsCard />

    <CertificationsCard />

  </section>
);