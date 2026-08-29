import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Maximize2, 
  Sliders, 
  Sparkles, 
  Eye, 
  Play, 
  Pause,
  Grid,
  Film
} from 'lucide-react';
import { playCardFlipSound, playHoverSound } from '../audio/soundEffects';

export default function CarouselDeck3D({ project, onOpenModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('deck'); // 'deck', 'strip', 'panorama'
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const slides = project.slides || [];
  const totalSlides = slides.length;

  // Auto-play timer
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, totalSlides]);

  const handleNext = () => {
    playCardFlipSound();
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    playCardFlipSound();
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSelectSlide = (idx) => {
    if (idx !== currentIndex) {
      playCardFlipSound();
      setCurrentIndex(idx);
    }
  };

  // 3D Card Hover Tilt
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -8,
      y: (x / (rect.width / 2)) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Drag & Swipe gesture handlers
  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (dragStartX !== null) {
      setDragOffset(e.touches[0].clientX - dragStartX);
    }
  };

  const handleTouchEnd = () => {
    if (dragOffset > 50) {
      handlePrev();
    } else if (dragOffset < -50) {
      handleNext();
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
  };

  const handleMouseMoveDrag = (e) => {
    if (dragStartX !== null) {
      setDragOffset(e.clientX - dragStartX);
    }
  };

  const handleMouseUp = () => {
    if (dragOffset > 60) {
      handlePrev();
    } else if (dragOffset < -60) {
      handleNext();
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  const currentSlide = slides[currentIndex] || {};

  return (
    <div className="w-full glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/10 shadow-2xl">
      {/* Background Ambient Glow */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: project.accentColor }}
      />
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Top Header & View Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-sm"
              style={{
                borderColor: `${project.accentColor}55`,
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor
              }}
            >
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {currentIndex + 1} / {totalSlides} Slides
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl line-clamp-1">
            {project.tagline}
          </p>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="flex items-center gap-2 bg-[#090b12] p-1.5 rounded-xl border border-white/10">
          <button
            onClick={() => { setViewMode('deck'); playHoverSound(); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'deck'
                ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="3D Card Deck View"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">3D Deck</span>
          </button>

          <button
            onClick={() => { setViewMode('strip'); playHoverSound(); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'strip'
                ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Side by Side Card Gallery"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Card Strip</span>
          </button>

          <button
            onClick={() => { setViewMode('panorama'); playHoverSound(); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'panorama'
                ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Continuous Seamless Panorama"
          >
            <Film className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Panorama</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      {viewMode === 'deck' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4 relative z-10">
          {/* Left / Center: 3D Perspective Card Deck */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMoveCapture={handleMouseMoveDrag}
            onMouseUp={handleMouseUp}
            className="lg:col-span-7 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] relative preserve-3d select-none cursor-grab active:cursor-grabbing"
          >
            {/* 3D Stack Render */}
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square preserve-3d flex items-center justify-center">
              {slides.map((slide, idx) => {
                const diff = (idx - currentIndex + totalSlides) % totalSlides;
                // Calculate 3D stacking positioning
                let zOffset = 0;
                let xOffset = 0;
                let rotationY = tilt.y;
                let rotationX = tilt.x;
                let scale = 1;
                let opacity = 1;
                let zIndex = 30;

                if (diff === 0) {
                  // Active card
                  zOffset = 60;
                  scale = 1;
                  opacity = 1;
                  zIndex = 30;
                  rotationY += (dragOffset * 0.05);
                } else if (diff === 1) {
                  // Next card (peek right/behind)
                  zOffset = 0;
                  xOffset = 55;
                  scale = 0.90;
                  opacity = 0.75;
                  zIndex = 20;
                  rotationY += 12;
                } else if (diff === 2) {
                  // Second next
                  zOffset = -60;
                  xOffset = 100;
                  scale = 0.80;
                  opacity = 0.45;
                  zIndex = 10;
                  rotationY += 20;
                } else if (diff === totalSlides - 1) {
                  // Prev card (peek left)
                  zOffset = 0;
                  xOffset = -55;
                  scale = 0.90;
                  opacity = 0.75;
                  zIndex = 20;
                  rotationY -= 12;
                } else {
                  // Hidden offscreen
                  opacity = 0;
                  scale = 0.7;
                  zIndex = 0;
                  zOffset = -120;
                }

                return (
                  <div
                    key={slide.index}
                    onClick={() => handleSelectSlide(idx)}
                    style={{
                      transform: `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${rotationY}deg) rotateX(${rotationX}deg) scale(${scale})`,
                      opacity,
                      zIndex,
                      transition: dragStartX !== null ? 'none' : 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#0d101a] cursor-pointer group"
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                      draggable={false}
                    />

                    {/* Active Card Reflection & Edge Glow */}
                    {diff === 0 && (
                      <div 
                        className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                        style={{ borderColor: project.accentColor }}
                      />
                    )}

                    {/* Subtle Overlay gradient for background cards */}
                    {diff !== 0 && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] group-hover:bg-black/20 transition-colors" />
                    )}

                    {/* Slide Number Badge */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/10">
                      #{slide.index}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows & Play Control */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#141824] hover:bg-[#1f2538] border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 border transition-all ${
                  isAutoPlaying
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                    : 'bg-[#141824] text-slate-300 border-white/10 hover:bg-[#1f2538]'
                }`}
                title={isAutoPlaying ? "Pause Auto-Flip" : "Auto-Flip Slides"}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoPlaying ? "Auto 4s" : "Auto Play"}</span>
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#141824] hover:bg-[#1f2538] border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Slide Insight & Storytelling Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#0c0f18]/80 border border-white/10 rounded-2xl p-6 relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                  SLIDE {currentIndex + 1} OF {totalSlides}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {project.year} • {project.client.split('/')[0]}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-1">
                {currentSlide.title}
              </h4>
              <p className="text-sm font-medium text-slate-300 mb-3">
                {currentSlide.subtitle}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {currentSlide.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentSlide.tags?.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions & Thumbnails */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-400 font-mono">Quick Slide Jump:</span>
                <button
                  onClick={() => onOpenModal(project)}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <Maximize2 className="w-3 h-3" />
                  Full Case Study
                </button>
              </div>

              {/* Slide Thumbnail Dots / Pills */}
              <div className="flex gap-2">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSlide(idx)}
                    className={`h-12 flex-1 rounded-lg overflow-hidden border transition-all ${
                      currentIndex === idx
                        ? 'ring-2 ring-cyan-400 scale-105 border-white opacity-100 shadow-md'
                        : 'border-white/10 opacity-40 hover:opacity-80'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={`Slide ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Card Strip Gallery View */}
      {viewMode === 'strip' && (
        <div className="py-4 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-slate-400 font-mono">
              ← Scroll or swipe horizontally to inspect all individual {totalSlides} cards →
            </p>
            <button
              onClick={() => onOpenModal(project)}
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              <Maximize2 className="w-3.5 h-3.5" /> Fullscreen View
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scrollbar-thin">
            {slides.map((slide, idx) => (
              <div
                key={slide.index}
                onClick={() => {
                  setCurrentIndex(idx);
                  setViewMode('deck');
                  playCardFlipSound();
                }}
                className="flex-shrink-0 w-64 sm:w-72 aspect-square rounded-2xl overflow-hidden border border-white/15 bg-[#0d101a] snap-center hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.03] cursor-pointer relative group shadow-xl"
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="text-[11px] font-mono text-cyan-300">Slide #{slide.index}</span>
                  <h5 className="text-sm font-bold text-white leading-tight">{slide.title}</h5>
                  <p className="text-xs text-slate-300 line-clamp-1">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mode 3: Continuous Panorama View */}
      {viewMode === 'panorama' && (
        <div className="py-4 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Unbroken Continuous Panorama Strip
              </h5>
              <p className="text-xs text-slate-400">
                Notice how the background grid, neon traces, and character halos seamlessly connect across all slides.
              </p>
            </div>
            <button
              onClick={() => onOpenModal(project)}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium flex items-center gap-1.5 hover:bg-cyan-500/30 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" /> High-Res Zoom
            </button>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-white/15 bg-[#07090e] p-2 shadow-2xl">
            <img 
              src={project.fullImage} 
              alt={`${project.title} Full Panorama`}
              className="w-full min-w-[750px] sm:min-w-[900px] h-auto rounded-xl object-contain hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}
