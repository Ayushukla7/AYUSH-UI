import React from 'react';
import { Globe, Shield, Sparkles, ExternalLink } from 'lucide-react';
import HolographicCard from './HolographicCard';

export default function DeviceMockup({ 
  title, 
  url = "studenterp.io", 
  imageSrc, 
  aspectRatio = "aspect-[16/10]",
  accentColor = "#3a86ff",
  onOpenModal,
  badges = []
}) {
  return (
    <HolographicCard 
      glareColor={`${accentColor}44`}
      maxRotation={8}
      className="bg-[#0b0e17] border border-slate-800/80 shadow-2xl group"
      onClick={onOpenModal}
    >
      {/* macOS Browser Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#121624]/90 border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-sm" />
        </div>

        {/* URL Pill */}
        <div className="flex items-center gap-2 bg-[#080a10]/80 border border-white/10 px-4 py-1 rounded-full text-xs text-slate-400 font-mono max-w-xs w-full justify-center shadow-inner">
          <Shield className="w-3 h-3 text-cyan-400" />
          <span className="text-slate-300 truncate">https://{url}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <span className="hidden sm:inline text-[11px] text-slate-400/80">Interactive 3D Stage</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:text-cyan-400 transition-colors" />
        </div>
      </div>

      {/* Screen Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-[#07090e]`}>
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Floating Interactive Badge Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {badges.map((badge, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md border border-cyan-500/30 text-cyan-300 shadow-lg"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="text-sm font-semibold text-white flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Click to inspect detailed UX breakdown & full design
          </p>
        </div>
      </div>
    </HolographicCard>
  );
}
