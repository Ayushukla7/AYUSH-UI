import React from 'react';
import { personalInfo } from '../../data/projectsData';
import { SquiggleDoodle, PenToolBadge, SoftwareBadges } from '../ui/DesignDoodles';

export default function IntroSlide() {
  return (
    <div className="dark-deck-slide rounded-2xl p-6 sm:p-10 md:p-12 min-h-[480px] sm:min-h-[540px] flex flex-col justify-between relative overflow-hidden select-none">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 border-b border-white/10 pb-3 sm:pb-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold tracking-wider uppercase">{personalInfo.name}</span>
          <span className="text-slate-500">•</span>
          <span className="text-[#ffaa00] font-medium">{personalInfo.role}</span>
        </div>
        <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for UI/UX & Design Roles
        </span>
      </div>

      {/* Decorative Doodles */}
      <div className="absolute top-12 right-8 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 sm:w-16 h-6 text-[#ffaa00]" />
      </div>
      <div className="absolute bottom-8 left-8 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 sm:w-16 h-6 text-[#ffaa00]" />
      </div>

      {/* Main Grid: Headline & Bio on Left + Photo on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-6 sm:py-8 relative z-10">
        {/* Left Column: Intro & Headline */}
        <div className="md:col-span-7 space-y-4 text-center md:text-left order-2 md:order-1">
          <div className="relative inline-block mb-2">
            <h1 className="title-impact text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none">
              HELLO I'AM
            </h1>
            {/* Handwritten Script Overlay */}
            <span className="handwriting-overlay absolute -bottom-3 sm:-bottom-4 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 text-3xl sm:text-5xl md:text-6xl -rotate-3 whitespace-nowrap">
              {personalInfo.name}
            </span>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-xl mx-auto md:mx-0 pt-2 font-normal">
            My name is <strong className="text-white font-bold">{personalInfo.name}</strong>. A UI/UX & Graphic Designer dedicated to crafting intuitive SaaS product interfaces, web platforms, brand apparel, and viral social carousels.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            Turning complex systems into clean, bold, and high-converting visual experiences.
          </p>

          {/* Professional Software Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
            <SoftwareBadges />
          </div>

          {/* Direct Clickable Contact & Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-2 rounded-xl bg-[#ffaa00] text-black font-mono font-bold text-xs hover:bg-[#ffb733] transition-all shadow-lg hover:scale-105"
            >
              ✉ {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/10 text-white font-mono text-xs hover:bg-white/20 border border-white/10 transition-all hover:scale-105"
            >
              LinkedIn ↗
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/10 text-white font-mono text-xs hover:bg-white/20 border border-white/10 transition-all hover:scale-105"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/10 text-white font-mono text-xs hover:bg-white/20 border border-white/10 transition-all hover:scale-105"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Right Column: Ayush's Real Photo */}
        <div className="md:col-span-5 flex items-center justify-center relative order-1 md:order-2">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72">
            {/* White Border Glow Outline */}
            <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-white via-white/90 to-white/60 shadow-2xl overflow-hidden">
              <img 
                src="/assets/ayush_profile.png" 
                alt="Ayush Shukla"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Pen Tool Badge Floating */}
            <div className="absolute -bottom-2 -left-2">
              <PenToolBadge className="w-11 h-11 rotate-12" />
            </div>

            {/* Accent Role Tag */}
            <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-[#ffaa00] text-black font-mono font-bold text-xs shadow-lg">
              UI/UX & Graphics
            </div>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-white/10 relative z-10">
        <span>Portfolio Homepage • Ayush Shukla</span>
        <span className="text-[#ffaa00] font-bold">Featured Works 2025–2026</span>
      </div>
    </div>
  );
}
