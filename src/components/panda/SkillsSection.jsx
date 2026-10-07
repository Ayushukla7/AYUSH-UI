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
                <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
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

          {/* 2. Tools with Official Brand Colors */}
          <div className="purple-glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-unbounded font-bold text-sm text-white">DESIGN TOOLS</span>
                <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map((tool, idx) => {
                  let badgeClass = "bg-purple-950/40 border-purple-800/30 text-slate-200";
                  let dotColor = null;

                  if (tool === 'Figma') {
                    badgeClass = "bg-[#0c081a] border-[#F24E1E]/40 text-purple-200 hover:border-[#F24E1E]";
                    dotColor = (
                      <span className="w-2 h-2 rounded-full bg-[#F24E1E] inline-block mr-1" />
                    );
                  } else if (tool === 'Adobe Photoshop') {
                    badgeClass = "bg-[#001E36]/80 border-[#31A8FF]/40 text-[#31A8FF] hover:border-[#31A8FF]";
                    dotColor = (
                      <span className="w-2 h-2 rounded-full bg-[#31A8FF] inline-block mr-1" />
                    );
                  } else if (tool === 'Adobe Illustrator') {
                    badgeClass = "bg-[#330000]/80 border-[#FF9A00]/40 text-[#FF9A00] hover:border-[#FF9A00]";
                    dotColor = (
                      <span className="w-2 h-2 rounded-full bg-[#FF9A00] inline-block mr-1" />
                    );
                  } else if (tool === 'Adobe After Effects') {
                    badgeClass = "bg-[#1F004D]/80 border-[#9999FF]/40 text-[#9999FF] hover:border-[#9999FF]";
                    dotColor = (
                      <span className="w-2 h-2 rounded-full bg-[#9999FF] inline-block mr-1" />
                    );
                  } else if (tool === 'Canva') {
                    badgeClass = "bg-[#002433]/80 border-[#00C4CC]/40 text-[#00C4CC] hover:border-[#00C4CC]";
                    dotColor = (
                      <span className="w-2 h-2 rounded-full bg-[#00C4CC] inline-block mr-1" />
                    );
                  }

                  return (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full border text-xs font-mono transition-all flex items-center ${badgeClass}`}
                    >
                      {dotColor}
                      <span>{tool}</span>
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-purple-400">
              Figma • Adobe PS • AI • AE • Canva
            </div>
          </div>

          {/* 3. Frontend */}
          <div className="purple-glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-unbounded font-bold text-sm text-white">FRONTEND STACK</span>
                <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.frontend.map((item, idx) => {
                  let badgeStyle = "bg-purple-950/40 border-purple-800/30 text-slate-200";
                  let dot = null;

                  if (item === 'React.js') {
                    badgeStyle = "bg-[#00212b]/80 border-[#61DAFB]/40 text-[#61DAFB] hover:border-[#61DAFB]";
                    dot = <span className="w-2 h-2 rounded-full bg-[#61DAFB] inline-block mr-1 animate-pulse" />;
                  } else if (item === 'Tailwind CSS') {
                    badgeStyle = "bg-[#001c24]/80 border-[#38BDF8]/40 text-[#38BDF8] hover:border-[#38BDF8]";
                    dot = <span className="w-2 h-2 rounded-full bg-[#38BDF8] inline-block mr-1" />;
                  } else if (item === 'Framer Motion') {
                    badgeStyle = "bg-[#2b001a]/80 border-[#FF0055]/40 text-[#FF0055] hover:border-[#FF0055]";
                    dot = <span className="w-2 h-2 rounded-full bg-[#FF0055] inline-block mr-1" />;
                  }

                  return (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full border text-xs font-mono transition-all flex items-center ${badgeStyle}`}
                    >
                      {dot}
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-purple-400">
              React.js • Tailwind • Vite • Motion
            </div>
          </div>

          {/* 4. Creative */}
          <div className="purple-glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-unbounded font-bold text-sm text-white">CREATIVE & BRAND</span>
                <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
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
              Brand Identity • Carousels • Merch
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
