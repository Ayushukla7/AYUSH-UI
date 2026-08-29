import React, { useEffect, useState } from 'react';
import { 
  X, 
  Sparkles, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  CheckCircle2, 
  ExternalLink,
  ZoomIn,
  Film
} from 'lucide-react';
import { playCardFlipSound, playHoverSound } from '../audio/soundEffects';

export default function ProjectModal({ project, onClose }) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (project?.isCarousel) {
        if (e.key === 'ArrowRight') {
          setActiveSlideIdx(prev => (prev + 1) % project.slides.length);
          playCardFlipSound();
        }
        if (e.key === 'ArrowLeft') {
          setActiveSlideIdx(prev => (prev - 1 + project.slides.length) % project.slides.length);
          playCardFlipSound();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const slides = project.slides || [];
  const currentSlide = slides[activeSlideIdx] || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Glassmorphic Modal Box */}
      <div 
        className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#0c0f18] border border-white/15 rounded-3xl overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-[#0c0f18]/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border"
              style={{
                borderColor: `${project.accentColor}55`,
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor
              }}
            >
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.year} • {project.role}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Header Title Section */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Visual Stage */}
          {project.isCarousel ? (
            <div className="space-y-4">
              {/* Slide Inspector Container */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#07090e] rounded-2xl p-4 sm:p-6 border border-white/10">
                {/* Left: Active Slide Preview with Zoom */}
                <div className="md:col-span-7 flex flex-col items-center justify-center relative">
                  <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
                    <img 
                      src={currentSlide.image} 
                      alt={currentSlide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/80 font-mono text-xs text-white border border-white/10">
                      Slide {activeSlideIdx + 1} / {slides.length}
                    </div>
                  </div>

                  {/* Nav Controls */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => {
                        setActiveSlideIdx(prev => (prev - 1 + slides.length) % slides.length);
                        playCardFlipSound();
                      }}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-white flex items-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev Slide
                    </button>
                    <button
                      onClick={() => {
                        setActiveSlideIdx(prev => (prev + 1) % slides.length);
                        playCardFlipSound();
                      }}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-white flex items-center gap-1"
                    >
                      Next Slide <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right: Slide Meta */}
                <div className="md:col-span-5 space-y-3">
                  <span className="text-xs font-mono text-cyan-400">SLIDE SPECIFICATION</span>
                  <h4 className="text-xl font-bold text-white">{currentSlide.title}</h4>
                  <p className="text-xs font-medium text-slate-300">{currentSlide.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {currentSlide.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {currentSlide.tags?.map((t, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono border border-white/5">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSlideIdx(idx);
                      playCardFlipSound();
                    }}
                    className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border transition-all ${
                      activeSlideIdx === idx 
                        ? 'ring-2 ring-cyan-400 border-white opacity-100 scale-105 shadow-lg' 
                        : 'border-white/10 opacity-40 hover:opacity-80'
                    }`}
                  >
                    <img src={s.image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Full Seamless Strip Preview */}
              <div className="p-4 rounded-2xl bg-[#07090e] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-cyan-400" />
                    Full Continuous Panoramic View
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Uncropped Design Asset</span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-white/5 p-1 bg-black">
                  <img src={project.fullImage} alt={project.title} className="w-full min-w-[700px] h-auto object-contain" />
                </div>
              </div>
            </div>
          ) : (
            /* Single Large Image Display (Dashboard / Banner / Web Landing) */
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#07090e] shadow-2xl p-2">
              <img 
                src={project.fullImage} 
                alt={project.title}
                className="w-full h-auto max-h-[550px] object-contain mx-auto rounded-xl"
              />
            </div>
          )}

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            {project.stats?.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs text-slate-400 font-mono">{stat.label}</span>
                <span className="text-base sm:text-lg font-bold text-white">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Overview & Design Rationale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Project Overview
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>

              <div className="pt-3">
                <h4 className="text-xs font-mono text-slate-400 mb-2">TOOLS & TECHNOLOGIES USED</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> UI/UX Design Decisions
              </h3>
              <ul className="space-y-2.5">
                {project.uxHighlights?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
