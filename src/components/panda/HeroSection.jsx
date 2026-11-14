import React, { useState } from 'react';
import { personalInfo } from '../../data/projectsData';

export default function HeroSection() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(Math.max(0.9, prev + delta), 1.15));
  };

  return (
    <section id="hero" className="relative min-h-screen pt-12 pb-24 overflow-hidden">
      
      {/* ============================================================ */}
      {/* 1. HERO MAIN CANVAS (SCREEN 1 RECREATION) */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center text-center pt-8 sm:pt-14">
        
        {/* Handwriting script greeting */}
        <div className="relative mb-2">
          <span className="font-handwriting text-2xl sm:text-4xl text-[#52525B] tracking-wide inline-block -rotate-2">
            my name is
          </span>
          <span className="font-handwriting text-base sm:text-xl text-[#F59E0B] ml-2 font-bold inline-block rotate-6">
            (hey there! 👋)
          </span>
        </div>

        {/* GIANT PIXEL NAME WITH TAPED PASTEL STICKY NOTES */}
        <div className="relative my-4 select-none w-full max-w-4xl flex items-center justify-center">
          
          {/* Taped Sticky Note: Top Left (Mint) */}
          <div className="absolute -top-7 left-2 sm:left-12 z-20 transform -rotate-3 hover:rotate-0 transition-transform hidden xs:block">
            <div className="relative bg-[#BBF7D0] text-[#141416] border-2 border-[#141416] px-3 py-1.5 rounded shadow-[2px_2px_0px_#141416] font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              {/* Scotch tape on top */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/75 border-l border-r border-dashed border-[#141416]/30 shadow-sm rotate-2" />
              ✦ UI/UX DESIGN
            </div>
          </div>

          {/* Taped Sticky Note: Top Right (Peach) */}
          <div className="absolute -top-8 right-2 sm:right-12 z-20 transform rotate-3 hover:rotate-0 transition-transform hidden xs:block">
            <div className="relative bg-[#FED7AA] text-[#141416] border-2 border-[#141416] px-3.5 py-1.5 rounded shadow-[2px_2px_0px_#141416] font-mono text-[11px] sm:text-xs font-bold tracking-wider">
              {/* Scotch tape on top */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/75 border-l border-r border-dashed border-[#141416]/30 shadow-sm -rotate-2" />
              ABOUT THE DETAILS ✎
            </div>
          </div>

          {/* THE GIANT PIXELATED "AYUSH" TITLE */}
          <h1 className="font-pixel text-[20vw] sm:text-[14vw] md:text-[10.5rem] lg:text-[12.5rem] leading-[0.88] tracking-normal text-[#141416] text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,0.12)]">
            AYUSH
          </h1>

          {/* Taped Sticky Note: Bottom Left (Yellow) */}
          <div className="absolute -bottom-6 left-4 sm:left-16 z-20 transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="relative bg-[#FEF08A] text-[#141416] border-2 border-[#141416] px-3.5 py-1 rounded shadow-[2px_2px_0px_#141416] font-mono text-[10px] sm:text-xs font-bold uppercase">
              🎓 CSE @ ABESEC
            </div>
          </div>

          {/* Taped Sticky Note: Bottom Right (Baby Blue) */}
          <div className="absolute -bottom-6 right-4 sm:right-16 z-20 transform rotate-2 hover:rotate-0 transition-transform">
            <div className="relative bg-[#BAE6FD] text-[#141416] border-2 border-[#141416] px-3 py-1 rounded shadow-[2px_2px_0px_#141416] font-mono text-[10px] sm:text-xs font-bold uppercase flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OPEN FOR WORK</span>
            </div>
          </div>
        </div>

        {/* SUBTITLE & AVATAR BADGE ROW (EXACT SCREEN 1 COMPOSITION) */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl md:text-2xl font-sans font-semibold text-[#141416] max-w-2xl">
          {/* Mini Left Avatar */}
          <div className="w-8 h-8 rounded-full border-2 border-[#141416] overflow-hidden bg-amber-100 shadow-[1px_1px_0px_#141416] flex-shrink-0">
            <img
              src="/assets/ayush_profile.png"
              alt="Ayush Shukla"
              className="w-full h-full object-cover"
            />
          </div>

          <span>I design software that</span>

          {/* Badge with smiley / target */}
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#BBF7D0] border-2 border-[#141416] shadow-[2px_2px_0px_#141416] text-xs sm:text-sm font-mono font-bold text-[#141416]">
            <span>◎</span>
            <span>INTUITIVE</span>
          </span>

          <span>gets out of your way.</span>

          {/* Flower sticker */}
          <span className="inline-block text-2xl sm:text-3xl animate-bounce duration-1000 -mt-1">
            🌸
          </span>

          {/* Mini Right Circular Sticker */}
          <div className="w-8 h-8 rounded-full border-2 border-[#141416] bg-[#FEF08A] shadow-[1px_1px_0px_#141416] flex items-center justify-center text-xs font-mono font-bold">
            ☻
          </div>
        </div>

        {/* BRUTALIST BUTTONS ROW */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#141416] text-[#F8F6F0] font-mono text-xs sm:text-sm font-bold border-2 border-[#141416] shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          >
            <span>CONTACT ME</span>
            <span className="text-amber-300">↗</span>
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#141416] font-mono text-xs sm:text-sm font-bold border-2 border-[#141416] shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          >
            <span>VIEW WORK</span>
            <span>↓</span>
          </a>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FEF08A] text-[#141416] font-mono text-xs sm:text-sm font-bold border-2 border-[#141416] shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          >
            <span>RESUME</span>
            <span>📄</span>
          </a>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. "JUST FOR FUN" PLAYGROUND SCRAPBOOK COLLAGE (SCREEN 2) */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 relative z-10">
        
        {/* Scrapbook Container Box */}
        <div 
          className="bg-[#FFFFFF] border-2 border-[#141416] rounded-3xl p-6 sm:p-10 shadow-brutal-lg relative overflow-hidden transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Top Paper Ruled Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b-2 border-[#141416]/10 gap-4">
            <div>
              <span className="font-handwriting text-2xl sm:text-3xl text-[#52525B] -rotate-1 inline-block">
                playground & visual lab
              </span>
              <h2 className="font-pixel text-4xl sm:text-6xl text-[#141416] tracking-tight -mt-1">
                JUST FOR FUN
              </h2>
            </div>

            {/* Corner Zoom Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs font-mono text-[#52525B] uppercase font-bold mr-1">
                ZOOM
              </span>
              <button
                onClick={() => handleZoom(-0.05)}
                className="w-8 h-8 rounded-lg bg-[#FAF7F0] border-2 border-[#141416] font-mono font-bold text-xs shadow-[2px_2px_0px_#141416] hover:bg-[#FEF08A] transition-colors"
                title="Zoom Out"
              >
                −
              </button>
              <button
                onClick={() => handleZoom(0.05)}
                className="w-8 h-8 rounded-lg bg-[#FAF7F0] border-2 border-[#141416] font-mono font-bold text-xs shadow-[2px_2px_0px_#141416] hover:bg-[#FEF08A] transition-colors"
                title="Zoom In"
              >
                +
              </button>
            </div>
          </div>

          {/* Collage Grid of Scrapbook Elements */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 items-center">
            
            {/* Scrapbook Card 1: Polaroid with Scotch Tape (Left 4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="polaroid-card relative rotate-[-2.5deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[280px]">
                {/* Scotch tape on top */}
                <div className="scotch-tape-center" />

                {/* Photo */}
                <div className="w-full aspect-square bg-[#0e1626] rounded overflow-hidden border border-[#E2DED5]">
                  <img
                    src="/assets/borcelle_coffee_promo.png"
                    alt="Borcelle Cafe Visual"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="mt-3 text-center">
                  <span className="font-handwriting text-lg text-[#141416] block">
                    borcelle iced coffee ☕
                  </span>
                  <span className="font-mono text-[10px] text-[#52525B] uppercase font-bold">
                    COMMERCIAL AD DESIGN
                  </span>
                </div>
              </div>

              {/* Sticky Note Below Polaroid */}
              <div className="mt-4 bg-[#FEF08A] border-2 border-[#141416] px-4 py-2 rounded-lg shadow-[2px_2px_0px_#141416] rotate-2 text-center">
                <span className="font-handwriting text-lg text-[#141416] font-bold">
                  "lighting & shadow study"
                </span>
              </div>
            </div>

            {/* Scrapbook Card 2: Retro Macintosh "Hello" Screen (Center 4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center">
              {/* Retro Macintosh Monitor Box */}
              <div className="w-full max-w-[260px] bg-[#E8E4DA] border-2 border-[#141416] rounded-2xl p-4 shadow-brutal relative">
                {/* Disk drive slot & badge */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#141416]/20">
                  <div className="w-2 h-2 rounded-full bg-[#141416]" />
                  <span className="font-mono text-[9px] font-bold tracking-widest text-[#141416]">
                    MACINTOSH 1984
                  </span>
                </div>

                {/* CRT Screen */}
                <div className="bg-[#141416] rounded-xl p-4 text-center border-2 border-[#141416] relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
                  <span className="font-handwriting text-3xl sm:text-4xl text-[#BBF7D0] block py-4 animate-pulse">
                    hello.
                  </span>
                  <span className="font-mono text-[9px] text-[#BBF7D0]/70 uppercase tracking-widest block">
                    READY FOR CODE & DESIGN
                  </span>
                </div>

                {/* Bottom ventilation grill */}
                <div className="mt-3 flex justify-between items-center px-2">
                  <div className="h-1.5 w-16 bg-[#141416]/20 rounded" />
                  <span className="font-mono text-[10px] font-bold text-[#141416]">AYUSH</span>
                </div>

                {/* Taped sticky note hanging on monitor */}
                <div className="absolute -top-3 -right-3 bg-[#BBF7D0] border-2 border-[#141416] px-2 py-0.5 rounded shadow-[2px_2px_0px_#141416] rotate-6 text-[10px] font-mono font-bold">
                  hello world! ✦
                </div>
              </div>

              {/* Pastel Washi Tape Pill Tag */}
              <div className="mt-4 bg-[#DDD6FE] border-2 border-[#141416] px-4 py-1.5 rounded-full shadow-[2px_2px_0px_#141416] -rotate-1 font-mono text-xs font-bold text-[#141416]">
                ✦ PRACTICES & MOTION
              </div>
            </div>

            {/* Scrapbook Card 3: Streetwear Apparel & 3D Poster (Right 4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="polaroid-card relative rotate-[3deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[280px]">
                {/* Corner Washi Tape */}
                <div className="absolute -top-2.5 -right-2.5 w-14 h-4 bg-amber-200/80 border-l border-r border-dashed border-[#141416]/40 rotate-12 z-20" />

                {/* Photo */}
                <div className="w-full aspect-square bg-[#0e1626] rounded overflow-hidden border border-[#E2DED5]">
                  <img
                    src="/assets/team_techno_merchandise.png"
                    alt="Team Techno Merchandise"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="mt-3 text-center">
                  <span className="font-handwriting text-lg text-[#141416] block">
                    techno core merchandise ⚡
                  </span>
                  <span className="font-mono text-[10px] text-[#52525B] uppercase font-bold">
                    STREETWEAR APPAREL PRINT
                  </span>
                </div>
              </div>

              {/* Sticky Note Below */}
              <div className="mt-4 bg-[#FED7AA] border-2 border-[#141416] px-4 py-2 rounded-lg shadow-[2px_2px_0px_#141416] -rotate-2 text-center">
                <span className="font-handwriting text-lg text-[#141416] font-bold">
                  "typography & barcodes"
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Stamp & Signature Line */}
          <div className="mt-10 pt-4 border-t-2 border-[#141416]/10 flex flex-wrap items-center justify-between text-xs font-mono text-[#52525B]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#141416]" />
              <span>HAND-CRAFTED SCRAPBOOK ARCHIVE</span>
            </div>
            <div className="font-handwriting text-xl text-[#141416]">
              Ayush Shukla — UI/UX & Visual Design ✦
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
