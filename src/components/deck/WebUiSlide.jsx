import React from 'react';
import { SquiggleDoodle } from '../ui/DesignDoodles';

export default function WebUiSlide({ studentErp, technovationWeb, onOpenImage }) {
  return (
    <div className="dark-deck-slide rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 relative select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 sm:pb-4 gap-3 relative z-10">
        <div className="relative inline-block">
          <h2 className="title-impact text-4xl sm:text-6xl md:text-7xl font-black leading-none">
            UI/UX & WEB
          </h2>
          <span className="handwriting-overlay absolute -bottom-2 sm:-bottom-3 right-0 text-2xl sm:text-4xl md:text-5xl -rotate-3 whitespace-nowrap">
            Platforms
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-mono text-[#ffaa00] bg-[#ffaa00]/10 px-2.5 py-1 rounded border border-[#ffaa00]/20 font-medium">
            SIH Project & SaaS Platforms
          </span>
        </div>
      </div>

      <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 h-5 text-[#ffaa00]" />
      </div>

      {/* Grid of UI/UX and Web Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* StudentERP.io Dashboard (SIH Project) */}
        {studentErp && (
          <div 
            onClick={() => onOpenImage(studentErp.fullImage, studentErp.title)}
            className="bg-black/40 rounded-xl p-4 sm:p-5 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[#ffaa00] uppercase bg-[#ffaa00]/15 px-2.5 py-0.5 rounded border border-[#ffaa00]/40 font-bold">
                  Smart India Hackathon (SIH)
                </span>
                <span className="text-[11px] font-mono text-slate-400">SIH Project</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">{studentErp.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{studentErp.description}</p>
            </div>

            <div className="w-full max-h-[340px] rounded-lg overflow-hidden bg-black/60 border border-white/10 p-2 flex items-center justify-center">
              <img
                src={studentErp.coverImage}
                alt={studentErp.title}
                className="w-full h-auto max-h-[320px] object-contain group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <span className="text-[11px] font-mono text-slate-400 mt-3 block text-right group-hover:text-[#ffaa00] transition-colors">
              Click for full dashboard view ↗
            </span>
          </div>
        )}

        {/* Technovation Landing Page */}
        {technovationWeb && (
          <div 
            onClick={() => onOpenImage(technovationWeb.fullImage, technovationWeb.title)}
            className="bg-black/40 rounded-xl p-4 sm:p-5 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[#ffaa00] uppercase bg-black/50 px-2 py-0.5 rounded border border-[#ffaa00]/30 font-bold">
                  {technovationWeb.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400">2025</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">{technovationWeb.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{technovationWeb.description}</p>
            </div>

            <div className="w-full max-h-[340px] rounded-lg overflow-hidden bg-black/60 border border-white/10 p-2 flex items-center justify-center">
              <img
                src={technovationWeb.coverImage}
                alt={technovationWeb.title}
                className="w-full h-auto max-h-[320px] object-contain group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <span className="text-[11px] font-mono text-slate-400 mt-3 block text-right group-hover:text-[#ffaa00] transition-colors">
              Click for full landing page ↗
            </span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
        <span>SaaS Dashboards & Dark Web Interfaces</span>
        <span className="text-[#ffaa00] font-bold">04 / 07</span>
      </div>
    </div>
  );
}
