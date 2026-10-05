import React from 'react';
import { resumeData } from '../../data/projectsData';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#05050c]/60">
      {/* Background Aura */}
      <div className="blob-animate bottom-10 left-1/3 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest block font-bold">
            04. CORE COMPETENCIES
          </span>
          <h2 className="font-unbounded font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Skills</span> & Tools
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto pt-1">
            Industry design software, interaction frameworks, and frontend development tooling.
          </p>
        </div>

        {/* 4 Pillars Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. UI/UX */}
          <div className="purple-glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-unbounded font-bold text-sm text-white">UI/UX DESIGN</span>
                <span className="text-base">📐</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.uiUx.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/30 text-xs font-mono text-slate-200 hover:border-purple-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-purple-400">
              User Flows & Wireframes
            </div>
          </div>

          {/* 2. Tools */}
          <div className="purple-glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-unbounded font-bold text-sm text-white">DESIGN TOOLS</span>
                <span className="text-base">🎨</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/30 text-xs font-mono text-slate-200 hover:border-purple-400 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-purple-400">
              Figma • Adobe PS • AI • AE
            </div>
          </div>

          {/* 3. Frontend */}
          <div className="purple-glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-unbounded font-bold text-sm text-white">FRONTEND STACK</span>
                <span className="text-base">⚡</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.frontend.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/30 text-xs font-mono text-slate-200 hover:border-purple-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-purple-400">
              React.js • Tailwind • Vite
            </div>
          </div>

          {/* 4. Creative */}
          <div className="purple-glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-unbounded font-bold text-sm text-white">CREATIVE & BRAND</span>
                <span className="text-base">✨</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.creative.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/30 text-xs font-mono text-slate-200 hover:border-purple-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-purple-400">
              Brand Identity • Carousels
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
