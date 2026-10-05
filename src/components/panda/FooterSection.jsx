import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function FooterSection() {
  return (
    <footer className="border-t border-white/5 bg-[#020205] py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span className="font-unbounded text-white font-bold">{personalInfo.name}</span>
          <span>•</span>
          <span>UI/UX & Graphic Designer</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors font-bold text-white">
            Resume 📄
          </a>
          <span>•</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            LinkedIn
          </a>
          <span>•</span>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            GitHub
          </a>
          <span>•</span>
          <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
