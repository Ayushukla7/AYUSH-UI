import React from 'react';
import { SquiggleDoodle } from '../ui/DesignDoodles';

export default function BrandingApparelSlide({ teamTechnoMerch, speakerSession, quantumWorkshop, onOpenImage }) {
  return (
    <div className="dark-deck-slide rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 relative select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 sm:pb-4 gap-3 relative z-10">
        <div className="relative inline-block">
          <h2 className="title-impact text-4xl sm:text-6xl md:text-7xl font-black leading-none">
            BRANDING & APPAREL
          </h2>
          <span className="handwriting-overlay absolute -bottom-2 sm:-bottom-3 right-0 text-2xl sm:text-4xl md:text-5xl -rotate-3 whitespace-nowrap">
            Creations
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-mono text-[#ffaa00] bg-[#ffaa00]/10 px-2.5 py-1 rounded border border-[#ffaa00]/20 font-medium">
            Merchandise & Event Posters
          </span>
        </div>
      </div>

      <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 h-5 text-[#ffaa00]" />
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Team Techno Merchandise */}
        {teamTechnoMerch && (
          <div 
            onClick={() => onOpenImage(teamTechnoMerch.fullImage, teamTechnoMerch.title)}
            className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="aspect-[4/5] max-h-[340px] rounded-lg overflow-hidden bg-black flex items-center justify-center p-2 mb-3">
              <img 
                src={teamTechnoMerch.coverImage} 
                alt={teamTechnoMerch.title} 
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#ffaa00] uppercase block font-bold">{teamTechnoMerch.category}</span>
              <h4 className="text-sm font-bold text-white leading-tight mt-1">{teamTechnoMerch.title}</h4>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">{teamTechnoMerch.description}</p>
            </div>
          </div>
        )}

        {/* AI Speaker Session Poster */}
        {speakerSession && (
          <div 
            onClick={() => onOpenImage(speakerSession.fullImage, speakerSession.title)}
            className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="aspect-[4/5] max-h-[340px] rounded-lg overflow-hidden bg-black flex items-center justify-center p-2 mb-3">
              <img 
                src={speakerSession.coverImage} 
                alt={speakerSession.title} 
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#ffaa00] uppercase block font-bold">{speakerSession.category}</span>
              <h4 className="text-sm font-bold text-white leading-tight mt-1">{speakerSession.title}</h4>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">{speakerSession.description}</p>
            </div>
          </div>
        )}

        {/* Quantum Computing Workshop */}
        {quantumWorkshop && (
          <div 
            onClick={() => onOpenImage(quantumWorkshop.fullImage, quantumWorkshop.title)}
            className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group flex flex-col justify-between sm:col-span-2 md:col-span-1"
          >
            <div className="aspect-[4/5] max-h-[340px] rounded-lg overflow-hidden bg-black flex items-center justify-center p-2 mb-3">
              <img 
                src={quantumWorkshop.coverImage} 
                alt={quantumWorkshop.title} 
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#ffaa00] uppercase block font-bold">{quantumWorkshop.category}</span>
              <h4 className="text-sm font-bold text-white leading-tight mt-1">{quantumWorkshop.title}</h4>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">{quantumWorkshop.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
        <span>Apparel Graphics & Event Key Visuals</span>
        <span className="text-[#ffaa00] font-bold">05 / 07</span>
      </div>
    </div>
  );
}
