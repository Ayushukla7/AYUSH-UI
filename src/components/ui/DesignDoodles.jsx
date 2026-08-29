import React from 'react';

// Pen Tool Icon with yellow circular/square badge matching reference
export function PenToolBadge({ className = "w-9 h-9" }) {
  return (
    <div className={`rounded-full bg-[#ffaa00] flex items-center justify-center shadow-lg text-black p-2 ${className}`}>
      <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
        <path d="M7.7 2.3a1 1 0 0 1 1.4 0l1.9 1.9 2.5-2.5a1 1 0 0 1 1.4 0l6.8 6.8a1 1 0 0 1 0 1.4l-2.5 2.5 1.9 1.9a1 1 0 0 1 0 1.4l-6.8 6.8a1 1 0 0 1-.8.3c-.6 0-3.3-.7-5.9-3.3-2.6-2.6-3.3-5.3-3.3-5.9a1 1 0 0 1 .3-.8l6.8-6.8L9.6 4.6 7.7 2.3zm1.9 6.1L4.8 13.2c.4 1.4 1.3 3.3 3.1 5.1 1.8 1.8 3.7 2.7 5.1 3.1l4.8-4.8-8.2-8.2zM15 16l-3-3 2-2 3 3-2 2z"/>
      </svg>
    </div>
  );
}

// Playful Orange Squiggle Doodle
export function SquiggleDoodle({ className = "w-14 h-5 text-[#ffaa00]" }) {
  return (
    <svg className={className} viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M2 10C8 3 14 17 20 10C26 3 32 17 38 10C44 3 50 17 58 10" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

// Professional, sleek Software Badges matching high-end design standards
export function SoftwareBadges({ size = "md" }) {
  const isSmall = size === "sm";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 select-none">
      {/* Photoshop */}
      <div 
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-b from-[#001d33]/90 to-[#00101d]/95 border border-[#31a8ff]/40 text-[#31a8ff] shadow-md hover:border-[#31a8ff] hover:shadow-[#31a8ff]/20 hover:scale-105 transition-all duration-200 cursor-default`}
        title="Adobe Photoshop"
      >
        <span className="font-mono font-bold text-xs sm:text-sm tracking-wider">Ps</span>
        <span className="text-[10px] font-sans font-semibold text-slate-300 hidden sm:inline">Photoshop</span>
      </div>

      {/* Illustrator */}
      <div 
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-b from-[#331c00]/90 to-[#1f1000]/95 border border-[#ff9a00]/40 text-[#ff9a00] shadow-md hover:border-[#ff9a00] hover:shadow-[#ff9a00]/20 hover:scale-105 transition-all duration-200 cursor-default`}
        title="Adobe Illustrator"
      >
        <span className="font-mono font-bold text-xs sm:text-sm tracking-wider">Ai</span>
        <span className="text-[10px] font-sans font-semibold text-slate-300 hidden sm:inline">Illustrator</span>
      </div>

      {/* Figma */}
      <div 
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-b from-[#24101e]/90 to-[#140810]/95 border border-[#f24e1e]/40 text-[#f24e1e] shadow-md hover:border-[#f24e1e] hover:shadow-[#f24e1e]/20 hover:scale-105 transition-all duration-200 cursor-default`}
        title="Figma UI/UX"
      >
        <span className="font-mono font-bold text-xs sm:text-sm tracking-wider">Figma</span>
        <span className="text-[10px] font-sans font-semibold text-slate-300 hidden sm:inline">UI/UX</span>
      </div>

      {/* Premiere Pro */}
      <div 
        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-b from-[#19002e]/90 to-[#0e001a]/95 border border-[#9999ff]/40 text-[#9999ff] shadow-md hover:border-[#9999ff] hover:shadow-[#9999ff]/20 hover:scale-105 transition-all duration-200 cursor-default`}
        title="Adobe Premiere Pro"
      >
        <span className="font-mono font-bold text-xs sm:text-sm tracking-wider">Pr</span>
        <span className="text-[10px] font-sans font-semibold text-slate-300 hidden sm:inline">Premiere</span>
      </div>
    </div>
  );
}
