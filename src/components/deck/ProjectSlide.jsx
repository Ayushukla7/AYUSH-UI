import React from 'react';

export default function ProjectSlide({ project, onOpenImage }) {
  return (
    <div className="deck-slide rounded-xl p-6 sm:p-8 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 mb-4 gap-2">
          <div>
            <span className="text-[10px] font-mono text-[#9cb5bf] uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded border border-white/10">
              {project.category}
            </span>
            <h3 className="deck-header-text text-2xl sm:text-3xl text-[#f3f6ec] mt-1">
              {project.title}
            </h3>
          </div>
          <span className="text-xs font-mono text-[#9cb5bf]">
            {project.type}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-[#dbe3cf] mb-5 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Visual Frame */}
        <div 
          onClick={() => onOpenImage(project.fullImage, project.title)}
          className="w-full bg-black/30 rounded-lg border border-white/10 hover:border-white/40 p-2 transition-all cursor-pointer group"
        >
          <div className="w-full max-h-[420px] rounded overflow-hidden flex items-center justify-center bg-black/40">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-auto max-h-[400px] object-contain group-hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="mt-2 px-1 flex items-center justify-between text-[11px] font-mono text-[#9cb5bf]">
            <span>{project.title}</span>
            <span className="text-[#f3f6ec] group-hover:underline">Click to view full image ↗</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-white/10 flex justify-between text-[11px] font-mono text-[#9cb5bf]">
        <span>{project.category}</span>
        <span>Ayush Shukla</span>
      </div>
    </div>
  );
}
