import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      
      {/* 1. Iconic Background Editorial Display Word "PORTFOLIO" matching Reference Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-editorial font-black text-[18vw] sm:text-[20vw] tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-purple-500/40 to-purple-900/5 opacity-60 leading-none filter drop-shadow-[0_10px_40px_rgba(168,85,247,0.25)]">
          PORTFOLIO
        </span>
      </div>

      {/* 2. Ambient Purple Aura Glow behind Portrait */}
      <div className="blob-animate top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main 3-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[580px]">
          
          {/* Left Column: Greeting, Massive Name & Core Value Proposition */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-mono text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>UI/UX & PRODUCT DESIGNER</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl text-white tracking-[-0.04em] leading-[0.92]">
              Ayush <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-200">
                Shukla
              </span>
            </h1>

            <p className="text-sm sm:text-[15px] text-slate-300 max-w-sm mx-auto lg:mx-0 leading-relaxed font-sans">
              Crafting high-converting digital platforms, scalable SaaS design systems, and visual brand storytelling that connects with users.
            </p>

            <div className="pt-1 flex flex-wrap justify-center lg:justify-start gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/30 text-purple-300">
                ✦ 10+ Shipped Interfaces
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Roles</span>
              </span>
            </div>
          </div>

          {/* Center Column: Cutout Portrait with Ambient Purple Backlight Aura */}
          <div className="lg:col-span-4 flex items-center justify-center relative order-2 py-6 lg:py-0">
            {/* Glowing Backlight Disc */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-700 via-purple-600/50 to-indigo-600/30 blur-[55px] opacity-75 pointer-events-none" />

            {/* Ayush's Profile Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 z-10 group">
              <div className="w-full h-full rounded-full p-2 bg-gradient-to-b from-purple-400/40 via-purple-600/20 to-transparent backdrop-blur-sm shadow-2xl shadow-purple-950/80">
                <img
                  src="/assets/ayush_profile.png"
                  alt="Ayush Shukla"
                  className="w-full h-full object-cover rounded-full filter drop-shadow-[0_15px_35px_rgba(168,85,247,0.4)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Status Pill Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0a0a14]/90 border border-purple-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-display font-semibold text-white whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>UI/UX & Graphic Designer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Roles, Focus Areas & Engineering Background */}
          <div className="lg:col-span-4 space-y-3 text-center lg:text-left order-3 lg:pl-6">
            <span className="text-purple-400 font-mono text-xs uppercase tracking-widest font-semibold block">
              DISCIPLINE & CRAFT
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-tight">
              Interface Systems
            </h2>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-purple-400 tracking-[-0.03em] leading-tight">
              & Visual Media
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto lg:mx-0 leading-relaxed font-sans pt-1">
              Combining user empathy and atomic design tokens in Figma with clean implementation in React, Tailwind CSS, and Framer Motion.
            </p>

            {/* Quick Specialization Tags */}
            <div className="pt-3 flex flex-wrap justify-center lg:justify-start gap-2">
              {["SaaS Dashboards", "Figma Design Tokens", "Apparel & Brand Identity", "Social Storytelling"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-mono text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Social Icons & Direct Resume Button */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Social Profiles with Official Brand Vector Marks */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#0d0d18] border border-white/10 hover:border-[#0A66C2] text-slate-300 hover:text-[#0A66C2] hover:bg-[#001D3D]/60 flex items-center justify-center transition-all shadow-lg hover:scale-110 hover:shadow-[#0A66C2]/30"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.94 0-1.7.76-1.7 1.7 0 .93.76 1.7 1.7 1.7.94 0 1.7-.77 1.7-1.7 0-.94-.76-1.7-1.7-1.7z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#0d0d18] border border-white/10 hover:border-purple-400 text-slate-300 hover:text-white hover:bg-purple-600/20 flex items-center justify-center transition-all shadow-lg hover:scale-110 hover:shadow-purple-950/50"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#0d0d18] border border-white/10 hover:border-[#E1306C] text-slate-300 hover:text-[#E1306C] hover:bg-[#2E0818]/60 flex items-center justify-center transition-all shadow-lg hover:scale-110 hover:shadow-[#E1306C]/30"
              title="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 rounded-full bg-[#0d0d18] border border-white/10 hover:border-[#EA4335] text-slate-300 hover:text-[#EA4335] hover:bg-[#EA4335]/10 flex items-center justify-center transition-all shadow-lg hover:scale-110 hover:shadow-[#EA4335]/30"
              title="Send Direct Email"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          {/* Right Direct Resume Link Button */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-display font-bold text-xs sm:text-sm shadow-xl shadow-purple-900/50 hover:shadow-purple-600/70 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span>View Official Resume</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
