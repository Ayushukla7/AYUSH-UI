import React from 'react';
import { personalInfo } from '../../data/projectsData';
import { SquiggleDoodle, PenToolBadge, SoftwareBadges } from '../ui/DesignDoodles';

export default function CoverSlide() {
  return (
    <div className="dark-deck-slide rounded-2xl p-6 sm:p-10 md:p-12 min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex flex-col justify-between relative select-none">
      {/* Top Meta Line */}
      <div className="flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 border-b border-white/10 pb-3 sm:pb-4 gap-2 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-wider uppercase">{personalInfo.name}</span>
          <span className="text-slate-500">•</span>
          <span className="text-[#ffaa00] font-medium">{personalInfo.role}</span>
        </div>
        <span className="text-slate-400 font-mono">PORTFOLIO DECK</span>
      </div>

      {/* Floating Badges */}
      <div className="absolute top-16 right-8 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 sm:w-16 h-6 text-[#ffaa00]" />
      </div>
      <div className="absolute bottom-16 left-6 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 sm:w-16 h-6 text-[#ffaa00]" />
      </div>
      <div className="absolute top-24 left-8 hidden md:block pointer-events-none">
        <PenToolBadge className="w-9 h-9 -rotate-12" />
      </div>

      {/* Main Center Title */}
      <div className="my-auto py-6 sm:py-8 relative z-10 text-center flex flex-col items-center justify-center w-full px-2">
        <span className="text-[11px] sm:text-xs md:text-sm font-mono tracking-widest text-slate-300 uppercase mb-1 sm:mb-2">
          UI/UX & GRAPHIC DESIGNER
        </span>

        <div className="relative inline-block w-full max-w-full">
          <h1 className="title-impact text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-black tracking-wider leading-[0.88] break-words">
            PORTFOLIO
          </h1>
          
          {/* Handwritten Yellow Script Overlay */}
          <span className="handwriting-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl -rotate-6 whitespace-nowrap pointer-events-none">
            UI/UX & Graphic Design
          </span>
        </div>

        {/* Software Icons Row */}
        <div className="mt-5 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
          <SoftwareBadges />
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 sm:pt-4 border-t border-white/10 relative z-10">
        <span>Selected Works 2025–2026</span>
        <span className="text-[#ffaa00] font-bold">01 / 07</span>
      </div>
    </div>
  );
}
