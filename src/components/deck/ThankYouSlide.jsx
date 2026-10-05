import React from 'react';
import { personalInfo } from '../../data/projectsData';
import { SquiggleDoodle } from '../ui/DesignDoodles';

export default function ThankYouSlide({ onOpenResume }) {
  return (
    <div className="dark-deck-slide rounded-2xl p-6 sm:p-10 md:p-12 min-h-[400px] sm:min-h-[440px] flex flex-col justify-between relative overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 border-b border-white/10 pb-3 relative z-10">
        <span className="text-white font-bold tracking-wider">{personalInfo.name}</span>
        <span className="text-[#ffaa00]">GET IN TOUCH</span>
      </div>

      <div className="absolute top-10 right-8 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 sm:w-16 h-6 text-[#ffaa00]" />
      </div>
      <div className="absolute top-10 left-8 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 sm:w-16 h-6 text-[#ffaa00]" />
      </div>

      {/* Main Center Content */}
      <div className="my-auto py-6 sm:py-8 text-center relative z-10 flex flex-col items-center justify-center w-full">
        <div className="relative inline-block mb-4 sm:mb-6 w-full max-w-full">
          <h2 className="title-impact text-6xl sm:text-8xl md:text-9xl lg:text-[120px] font-black leading-none break-words">
            THANK YOU
          </h2>
          
          <span className="handwriting-overlay absolute -top-3 sm:-top-6 left-1/2 -translate-x-1/2 text-3xl sm:text-5xl md:text-6xl -rotate-6 whitespace-nowrap pointer-events-none">
            For Attention
          </span>
        </div>

        {/* Contact Pill Box */}
        <div className="w-full max-w-2xl bg-black/70 border border-white/15 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ffaa00] block font-bold">
            CONTACT & SOCIAL PROFILES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-mono">
            {/* Resume Button */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gradient-to-r from-[#ffaa00] to-[#ff9000] text-black font-bold hover:brightness-110 transition-all flex flex-col items-center justify-center text-center gap-1 shadow-md hover:scale-105"
            >
              <span className="text-[10px] text-black/70 uppercase font-mono font-bold">RESUME</span>
              <span className="font-bold text-xs truncate max-w-full">View Paper 📄</span>
            </a>

            {/* Direct Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ffaa00] text-white hover:text-[#ffaa00] transition-colors flex flex-col items-center justify-center text-center gap-1"
            >
              <span className="text-[10px] text-slate-400 uppercase">EMAIL ME</span>
              <span className="font-bold text-xs truncate max-w-full">{personalInfo.email}</span>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ffaa00] text-white hover:text-[#ffaa00] transition-colors flex flex-col items-center justify-center text-center gap-1"
            >
              <span className="text-[10px] text-slate-400 uppercase">LINKEDIN</span>
              <span className="font-bold text-xs">/in/ayushshukla41 ↗</span>
            </a>

            {/* Instagram */}
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ffaa00] text-white hover:text-[#ffaa00] transition-colors flex flex-col items-center justify-center text-center gap-1"
            >
              <span className="text-[10px] text-slate-400 uppercase">INSTAGRAM</span>
              <span className="font-bold text-xs">@ayushs_4141 ↗</span>
            </a>
          </div>

          <div className="pt-1 text-center">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-300 hover:text-white transition-colors underline"
            >
              GitHub: https://github.com/Ayushukla7 ↗
            </a>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 sm:pt-4 border-t border-white/10 relative z-10">
        <span>Ayush Shukla • UI/UX & Graphic Designer</span>
        <span className="text-[#ffaa00] font-bold">07 / 07</span>
      </div>
    </div>
  );
}
