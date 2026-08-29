import React from 'react';
import { personalInfo } from '../../data/projectsData';
import { SquiggleDoodle } from '../ui/DesignDoodles';

export default function AchievementsSlide() {
  return (
    <div className="dark-deck-slide rounded-2xl p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 relative select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 sm:pb-4 gap-3 relative z-10">
        <div className="relative inline-block">
          <h2 className="title-impact text-4xl sm:text-6xl md:text-7xl font-black leading-none">
            ACHIEVEMENTS
          </h2>
          <span className="handwriting-overlay absolute -bottom-2 sm:-bottom-3 right-0 text-2xl sm:text-4xl md:text-5xl -rotate-3 whitespace-nowrap">
            & Milestones
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs font-mono text-[#ffaa00] bg-[#ffaa00]/10 px-3 py-1 rounded border border-[#ffaa00]/30 hover:bg-[#ffaa00]/20 transition-colors"
          >
            Verified on LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 h-5 text-[#ffaa00]" />
      </div>

      {/* Grid of 4 Real Achievement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
        {personalInfo.achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-black/40 rounded-xl p-5 border border-white/10 hover:border-[#ffaa00]/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[#ffaa00] uppercase font-bold tracking-wider bg-black/60 px-2 py-0.5 rounded border border-[#ffaa00]/20">
                  {item.metric}
                </span>
                <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ffaa00] transition-colors mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Verified Role</span>
              <span className="text-slate-300">Ayush Shukla</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Line */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
        <span>Verified Design Leadership & Experience Milestones</span>
        <span className="text-[#ffaa00] font-bold">LinkedIn Profile Highlights</span>
      </div>
    </div>
  );
}
