import React from 'react';
import { Sparkles, Layers, ArrowRight, Eye, Monitor } from 'lucide-react';
import HolographicCard from '../3d/HolographicCard';
import { playHoverSound } from '../audio/soundEffects';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <HolographicCard
      glareColor={project.glowColor}
      maxRotation={7}
      scaleOnHover={1.02}
      className="bg-[#0e121d] border border-white/10 flex flex-col justify-between group shadow-xl"
      onClick={() => onSelectProject(project)}
    >
      {/* Top Preview Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#07090e] border-b border-white/5">
        <img 
          src={project.coverImage} 
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span 
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-md border shadow-md"
            style={{
              borderColor: `${project.accentColor}66`,
              backgroundColor: 'rgba(8, 10, 16, 0.8)',
              color: project.accentColor
            }}
          >
            {project.categoryLabel}
          </span>

          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-black/70 backdrop-blur-md border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Hover Inspect Indicator */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e121d] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5 bg-black/80 px-3 py-1.5 rounded-full border border-cyan-500/40 backdrop-blur-md shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            Inspect 3D Project
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
            {project.title}
          </h4>
          <p className="text-xs text-slate-400 font-medium mb-3 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-2 my-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            {project.stats?.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-mono">{stat.label}</span>
                <span className="text-xs font-bold text-slate-200">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Tool Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tools?.slice(0, 3).map((tool, idx) => (
              <span 
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono border border-white/5"
              >
                {tool}
              </span>
            ))}
            {project.tools?.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                +{project.tools.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Button */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            {project.isCarousel ? `${project.totalSlides} Slides Deck` : project.type}
          </span>
          <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Details <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </HolographicCard>
  );
}
