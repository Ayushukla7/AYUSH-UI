import React from 'react';
import { SquiggleDoodle } from '../ui/DesignDoodles';

export default function SkillsSlide() {
  return (
    <div className="dark-deck-slide rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 relative select-none">
      {/* Header on Dark Slide */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 sm:pb-4 gap-3 relative z-10">
        <div className="relative inline-block">
          <h2 className="title-impact text-4xl sm:text-6xl md:text-7xl font-black leading-none">
            SKILLS & TOOLS
          </h2>
          <span className="handwriting-overlay absolute -bottom-2 sm:-bottom-3 right-0 text-2xl sm:text-4xl md:text-5xl -rotate-3 whitespace-nowrap">
            Ayush
          </span>
        </div>

        <span className="text-[11px] sm:text-xs font-mono text-[#ffaa00] bg-[#ffaa00]/10 px-2.5 py-1 rounded border border-[#ffaa00]/20 font-medium">
          Core Competencies
        </span>
      </div>

      <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 h-5 text-[#ffaa00]" />
      </div>

      {/* Crumpled Paper Card with High Contrast Dark Typography */}
      <div className="crumpled-paper-card rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl relative border border-white/30 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left: Designing Skills with Bold Dark Heading */}
          <div>
            <h3 className="font-impact text-3xl sm:text-4xl md:text-5xl text-[#000000] font-black tracking-wider mb-3 sm:mb-4 uppercase leading-none border-b-2 border-black/15 pb-2">
              Designing Skills
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-base font-bold text-[#0c0e12]">
              <li className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black flex-shrink-0" />
                <span>UI/UX Design & Wireframing</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black flex-shrink-0" />
                <span>Social Media Multi-Slide Carousels</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black flex-shrink-0" />
                <span>SaaS Dashboard UI & Architecture</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black flex-shrink-0" />
                <span>Merchandise & Apparel Graphics</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black flex-shrink-0" />
                <span>Event Key Visuals & Brand Identity</span>
              </li>
            </ul>
          </div>

          {/* Right: Softwares with Bold Dark Heading */}
          <div className="md:border-l-2 md:border-black/15 md:pl-8 pt-4 md:pt-0 border-t-2 md:border-t-0 border-black/15">
            <h3 className="font-impact text-3xl sm:text-4xl md:text-5xl text-[#000000] font-black tracking-wider mb-3 sm:mb-4 uppercase leading-none border-b-2 border-black/15 pb-2">
              Softwares
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {/* Figma */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/10 border border-black/20 shadow-sm hover:bg-black/15 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#2c1524] text-[#f24e1e] font-bold font-mono text-sm flex items-center justify-center shadow">
                  Figma
                </div>
                <span className="text-xs font-bold text-black mt-2 font-mono">Figma</span>
              </div>

              {/* Photoshop */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/10 border border-black/20 shadow-sm hover:bg-black/15 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#001e36] text-[#31a8ff] font-bold font-mono text-sm flex items-center justify-center shadow">
                  Ps
                </div>
                <span className="text-xs font-bold text-black mt-2 font-mono">Photoshop</span>
              </div>

              {/* Illustrator */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/10 border border-black/20 shadow-sm hover:bg-black/15 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#331c00] text-[#ff9a00] font-bold font-mono text-sm flex items-center justify-center shadow">
                  Ai
                </div>
                <span className="text-xs font-bold text-black mt-2 font-mono">Illustrator</span>
              </div>

              {/* Premiere Pro */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/10 border border-black/20 shadow-sm hover:bg-black/15 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#18002e] text-[#9999ff] font-bold font-mono text-sm flex items-center justify-center shadow">
                  Pr
                </div>
                <span className="text-xs font-bold text-black mt-2 font-mono">Premiere</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
        <span>Designing Skills & Industry Softwares</span>
        <span className="text-[#ffaa00] font-bold">06 / 07</span>
      </div>
    </div>
  );
}
