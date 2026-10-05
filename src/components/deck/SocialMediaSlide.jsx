import React from 'react';
import { SquiggleDoodle } from '../ui/DesignDoodles';

export default function SocialMediaSlide({ aiDarkSide, biryaniData, borcelleCoffee, outfitOfTheDay, onOpenImage }) {
  return (
    <div className="dark-deck-slide rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 relative select-none">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 sm:pb-4 gap-3 relative z-10">
        <div className="relative inline-block">
          <h2 className="title-impact text-4xl sm:text-6xl md:text-7xl font-black leading-none">
            SOCIAL MEDIA
          </h2>
          <span className="handwriting-overlay absolute -bottom-2 sm:-bottom-3 right-0 text-2xl sm:text-4xl md:text-5xl -rotate-3 whitespace-nowrap">
            Designs
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-mono text-[#ffaa00] bg-[#ffaa00]/10 px-2.5 py-1 rounded border border-[#ffaa00]/20 font-medium">
            Carousels & Ad Creatives
          </span>
        </div>
      </div>

      <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 h-5 text-[#ffaa00]" />
      </div>

      {/* Project 1: AI's Dark Side (6 Slices Grid) */}
      {aiDarkSide && (
        <div className="bg-black/40 rounded-xl p-4 sm:p-5 border border-white/10 space-y-3 sm:space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffaa00]" />
                {aiDarkSide.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 font-mono mt-0.5">{aiDarkSide.description}</p>
            </div>
            <button
              onClick={() => onOpenImage(aiDarkSide.fullImage, `${aiDarkSide.title} (Full Strip)`)}
              className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded bg-white/10 hover:bg-white/20 text-[#ffaa00] border border-[#ffaa00]/30 transition-colors"
            >
              Full Strip ↗
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
            {aiDarkSide.slides.map((slide, idx) => (
              <div
                key={idx}
                onClick={() => onOpenImage(slide.img, `${aiDarkSide.title} — Slide #${slide.num}`)}
                className="bg-[#14151b] rounded-lg p-1.5 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-square rounded overflow-hidden bg-black mb-1.5 relative">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/85 text-[9px] font-mono font-bold text-white border border-white/10">
                    #{slide.num}
                  </span>
                </div>
                <div className="px-1 py-0.5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-white block truncate leading-tight">
                    {slide.title}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">Click to zoom</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project 2: Biryani is Just Like Your Data (5 Slices Grid) */}
      {biryaniData && (
        <div className="bg-black/40 rounded-xl p-4 sm:p-5 border border-white/10 space-y-3 sm:space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffaa00]" />
                {biryaniData.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 font-mono mt-0.5">{biryaniData.description}</p>
            </div>
            <button
              onClick={() => onOpenImage(biryaniData.fullImage, `${biryaniData.title} (Full Strip)`)}
              className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded bg-white/10 hover:bg-white/20 text-[#ffaa00] border border-[#ffaa00]/30 transition-colors"
            >
              Full Strip ↗
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
            {biryaniData.slides.map((slide, idx) => (
              <div
                key={idx}
                onClick={() => onOpenImage(slide.img, `${biryaniData.title} — Slide #${slide.num}`)}
                className="bg-[#14151b] rounded-lg p-1.5 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-square rounded overflow-hidden bg-black mb-1.5 relative">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/85 text-[9px] font-mono font-bold text-white border border-white/10">
                    #{slide.num}
                  </span>
                </div>
                <div className="px-1 py-0.5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-white block truncate leading-tight">
                    {slide.title}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">Click to zoom</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Row of Borcelle Coffee & Outfit of the Day */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
        {borcelleCoffee && (
          <div 
            onClick={() => onOpenImage(borcelleCoffee.fullImage, borcelleCoffee.title)}
            className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group space-y-3"
          >
            <div className="aspect-[4/5] max-h-[380px] rounded-lg overflow-hidden bg-black flex items-center justify-center">
              <img 
                src={borcelleCoffee.coverImage} 
                alt={borcelleCoffee.title} 
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#ffaa00] uppercase block">{borcelleCoffee.category}</span>
              <h4 className="text-sm font-bold text-white leading-tight mt-0.5">{borcelleCoffee.title}</h4>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">{borcelleCoffee.description}</p>
            </div>
          </div>
        )}

        {outfitOfTheDay && (
          <div 
            onClick={() => onOpenImage(outfitOfTheDay.fullImage, outfitOfTheDay.title)}
            className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/60 transition-all cursor-pointer group space-y-3"
          >
            <div className="aspect-[4/5] max-h-[380px] rounded-lg overflow-hidden bg-black flex items-center justify-center">
              <img 
                src={outfitOfTheDay.coverImage} 
                alt={outfitOfTheDay.title} 
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300" 
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#ffaa00] uppercase block">{outfitOfTheDay.category}</span>
              <h4 className="text-sm font-bold text-white leading-tight mt-0.5">{outfitOfTheDay.title}</h4>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">{outfitOfTheDay.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
        <span>Multi-Slide Social Posts & Ad Creatives</span>
        <span className="text-[#ffaa00] font-bold">03 / 08</span>
      </div>
    </div>
  );
}
