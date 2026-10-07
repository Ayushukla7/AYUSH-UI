import React from 'react';
import { personalInfo, resumeData } from '../../data/projectsData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="blob-animate top-1/2 -left-20 -translate-y-1/2 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching reference */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest block font-bold">
            01. ABOUT ME
          </span>
          <h2 className="font-unbounded font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">
              Creativity
            </span> <br />
            Is My Passion
          </h2>
        </div>

        {/* 2-Column Grid: Left Text & Metrics + Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Fast Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="purple-glass-card p-6 sm:p-8 rounded-3xl space-y-4">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                I'm <strong className="text-white font-bold">{personalInfo.name}</strong>, a <strong className="text-purple-300">UI/UX & Graphic Designer</strong> dedicated to transforming complex workflows into visually engaging, responsive digital platforms, SaaS dashboards, apparel branding, and social stories.
              </p>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                With experience across <strong className="text-slate-200">3+ design-focused roles</strong> and <strong className="text-slate-200">10+ high-fidelity interface projects</strong>, I combine design thinking in Figma with frontend execution in React & Tailwind CSS.
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
                  📍 Noida / Delhi NCR, India
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  🎓 ABES Engineering College (CSE)
                </span>
              </div>
            </div>

            {/* 4 Metric Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="purple-glass-card p-4 rounded-2xl text-center space-y-1">
                <span className="font-unbounded font-black text-2xl sm:text-3xl text-white block">3+</span>
                <span className="text-[11px] font-mono text-purple-300/80 uppercase">Design Roles</span>
              </div>
              <div className="purple-glass-card p-4 rounded-2xl text-center space-y-1">
                <span className="font-unbounded font-black text-2xl sm:text-3xl text-purple-400 block">10+</span>
                <span className="text-[11px] font-mono text-purple-300/80 uppercase">UI/UX Projects</span>
              </div>
              <div className="purple-glass-card p-4 rounded-2xl text-center space-y-1">
                <span className="font-unbounded font-black text-2xl sm:text-3xl text-white block">40+</span>
                <span className="text-[11px] font-mono text-purple-300/80 uppercase">Visual Assets</span>
              </div>
              <div className="purple-glass-card p-4 rounded-2xl text-center space-y-1">
                <span className="font-unbounded font-black text-2xl sm:text-3xl text-emerald-400 block">1.5K+</span>
                <span className="text-[11px] font-mono text-purple-300/80 uppercase">Audience Reach</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-unbounded font-bold text-xs shadow-lg shadow-purple-900/40 hover:scale-105 transition-all"
              >
                <span>View Full Resume</span>
                <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-unbounded text-xs transition-all hover:scale-105"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card with Glowing Aura */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Background Purple Blob */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              <div className="purple-glass-card p-6 sm:p-8 rounded-3xl relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-unbounded font-bold text-white text-sm">Design Philosophy</h4>
                      <span className="text-[11px] text-purple-300 font-mono">Form Meets Function</span>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-0.5">✦</span>
                    <p><strong className="text-white">User-Centric Architecture:</strong> Wireframes, design systems, and flows built with Figma components.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-0.5">✦</span>
                    <p><strong className="text-white">Visual Impact:</strong> Creative social carousels, event key visuals, and apparel merchandise.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-0.5">✦</span>
                    <p><strong className="text-white">Production Ready:</strong> Clean code delivery in React, Vite, Tailwind CSS, and Framer Motion.</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Ayush Shukla</span>
                  <span className="text-purple-400 font-bold">Designer & Developer</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
