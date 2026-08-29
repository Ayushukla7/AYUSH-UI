import React from 'react';

export default function CarouselSlide({ project, onOpenImage }) {
  const slides = project.slides || [];

  return (
    <div className="deck-slide rounded-xl p-6 sm:p-8 flex flex-col justify-between">
      {/* Slide Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 mb-4 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#9cb5bf] uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded border border-white/10">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#9cb5bf]">
                {project.type}
              </span>
            </div>
            <h3 className="deck-header-text text-2xl sm:text-3xl text-[#f3f6ec] mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => onOpenImage(project.fullImage, `${project.title} (Full Strip)`)}
            className="text-xs font-mono px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-[#f3f6ec] border border-white/15 transition-colors"
          >
            View Full Strip →
          </button>
        </div>

        {/* Short Authentic Description */}
        <p className="text-xs text-[#dbe3cf] mb-5 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Sliced Individual Slide Cards Grid (Matching Reference Design) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              onClick={() => onOpenImage(slide.img, `${project.title} — Slide ${slide.num}`)}
              className="bg-black/30 rounded-lg p-1.5 border border-white/10 hover:border-white/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-square rounded overflow-hidden bg-black mb-1.5 relative">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-[#f3f6ec]">
                  #{slide.num}
                </span>
              </div>
              <div className="px-1 py-0.5">
                <span className="text-[10px] font-bold text-[#f3f6ec] block truncate leading-tight">
                  {slide.title}
                </span>
                <span className="text-[9px] font-mono text-[#9cb5bf]">Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#9cb5bf]">
        <span>Social Media Carousel • Visual Storytelling</span>
        <span>{slides.length} Cards Sliced</span>
      </div>
    </div>
  );
}
