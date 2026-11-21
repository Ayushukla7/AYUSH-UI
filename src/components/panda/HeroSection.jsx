import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-between pt-24 sm:pt-32 pb-10 sm:pb-14 overflow-hidden graph-paper-bg">
      
      {/* Top Meta Subtitles (Exact Behance Cover Top Row) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full pt-4 sm:pt-6 flex items-center justify-between text-[#111111]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 bg-[#FF1E27]" />
          <span className="font-extended font-bold text-xs sm:text-sm tracking-[0.22em] uppercase">
            DESIGNER / ILLUSTRATOR
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#666666] hidden sm:inline">
            EDITION //
          </span>
          <span className="font-extended font-black text-xs sm:text-sm tracking-[0.25em]">
            2026
          </span>
        </div>
      </div>

      {/* Main Centerpiece: "PORT [AVATAR] LIO" (Exact Behance Recreation) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto py-8 sm:py-16 flex flex-col items-center justify-center text-center select-none">
        
        {/* Well-Organized Editorial Hindi + English Identity Seal */}
        <div className="mb-7 sm:mb-12 flex flex-col items-center">
          <div className="relative inline-flex items-center gap-3 sm:gap-5 px-5 py-2.5 sm:px-7 sm:py-3 bg-white border-2 border-[#111111] shadow-brutal hover:border-[#FF1E27] hover:shadow-brutal-red transition-all group">
            
            {/* 4 Brutalist Corner Registration Marks */}
            <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#FF1E27]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#FF1E27]" />
            <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#FF1E27]" />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#FF1E27]" />

            {/* Live Indicator */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E27] animate-pulse" />
              <span className="font-mono text-[10px] text-[#888888] font-bold tracking-widest uppercase hidden sm:inline">
                ID //
              </span>
            </div>

            {/* Prominent Hindi Name in Editorial Devanagari */}
            <span className="font-hindi text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal leading-none tracking-wide pt-1">
              आयुष शुक्ला
            </span>

            {/* Vertical Brutalist Divider */}
            <span className="h-6 sm:h-7 w-[2px] bg-[#111111]/25 flex-shrink-0" />

            {/* English Title & Role */}
            <div className="text-left flex flex-col justify-center">
              <span className="font-extended font-black text-xs sm:text-sm tracking-wider uppercase text-[#111111] group-hover:text-[#FF1E27] transition-colors leading-tight">
                AYUSH SHUKLA
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#666666] font-bold tracking-wider uppercase">
                UI/UX & GRAPHIC DESIGNER
              </span>
            </div>

            {/* Accent Sparkle Glyph */}
            <span className="text-[#FF1E27] text-xs sm:text-sm font-bold ml-0.5">✦</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-1 sm:gap-3 leading-none">
          {/* "PORT" */}
          <span className="font-extended font-black text-[15vw] sm:text-[14vw] md:text-[13vw] lg:text-[11.5rem] tracking-tighter text-[#111111]">
            PORT
          </span>

          {/* Central Avatar Head replacing / overlapping the "F" */}
          <div className="relative inline-flex items-center justify-center mx-1 sm:mx-3 -mt-2 sm:-mt-6 group">
            {/* Illustrated Cutout Avatar with Hand-Drawn / Graphic Frame */}
            <div className="w-[14vw] h-[14vw] min-w-[70px] min-h-[70px] max-w-[175px] max-h-[175px] rounded-full overflow-hidden border-4 border-[#111111] bg-white shadow-brutal group-hover:scale-105 group-hover:border-[#FF1E27] transition-all">
              <img
                src="/assets/ayush_halftone_poster.jpg"
                alt="Ayush Shukla"
                className="w-full h-full object-cover object-[center_24%] filter contrast-110"
              />
            </div>

            {/* Hand-Drawn Pencil Arrow pointing up to Avatar */}
            <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <svg className="w-5 h-8 text-[#111111]" viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 32 C10 22, 14 14, 12 6" strokeLinecap="round" />
                <path d="M7 11 L12 4 L17 11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-handwriting text-base sm:text-lg text-[#111111] -mt-1 font-bold whitespace-nowrap">
                (ayush / आयुष)
              </span>
            </div>
          </div>

          {/* "LIO" */}
          <span className="font-extended font-black text-[15vw] sm:text-[14vw] md:text-[13vw] lg:text-[11.5rem] tracking-tighter text-[#111111]">
            LIO
          </span>
        </div>

        {/* 3 Iconic Neo-Brutalist Glyphs Below: 8-Point Star, 4-Point Star, 3-Leaf Clover */}
        <div className="mt-16 sm:mt-24 flex items-center justify-center gap-6 sm:gap-8 text-[#111111]">
          {/* 8-point sparkle star */}
          <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current hover:text-[#FF1E27] transition-colors" viewBox="0 0 24 24">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>

          {/* 4-point diamond star */}
          <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current hover:text-[#FF1E27] transition-colors" viewBox="0 0 24 24">
            <path d="M12 1 L15 10 L24 12 L15 14 L12 23 L9 14 L0 12 L9 10 Z" />
          </svg>

          {/* 3-leaf club / clover */}
          <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-current hover:text-[#FF1E27] transition-colors" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="5" />
            <circle cx="7" cy="14" r="5" />
            <circle cx="17" cy="14" r="5" />
            <path d="M12 13 L12 22 L10 22 L14 22 Z" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Action Pills with Generous Spacing */}
        <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded bg-[#111111] text-white font-mono text-xs font-bold border-2 border-[#111111] shadow-brutal hover:bg-[#FF1E27] hover:border-[#FF1E27] transition-all flex items-center gap-2"
          >
            <span>SELECTED DELIVERABLES</span>
            <span>↓</span>
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded bg-white text-[#111111] font-mono text-xs font-bold border-2 border-[#111111] shadow-brutal hover:bg-[#111111] hover:text-white transition-all flex items-center gap-2"
          >
            <span>ABOUT & CAREER</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Bottom Horizontal Divider Line (Exact Behance Screen 1 Bottom) */}
      <div className="w-full border-b-2 border-[#111111]" />
    </section>
  );
}
