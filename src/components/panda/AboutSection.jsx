import React, { useState } from 'react';
import { personalInfo, resumeData } from '../../data/projectsData';

export default function AboutSection() {
  const [activeVisual, setActiveVisual] = useState('fashion'); // 'fashion' or 'coffee'

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden graph-paper-bg">
      
      {/* 1. TOP PART: BIO, EDUCATION, EXPERIENCE & PHOTOSHOP BOUNDING BOX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Photoshop Bounding Box Visual (Replaced T-shirt with Editorial Fashion / Ad) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            {/* Visual Switcher Tabs */}
            <div className="flex items-center gap-1.5 mb-3 self-center sm:self-start">
              <button
                onClick={() => setActiveVisual('fashion')}
                className={`px-2.5 py-1 font-mono text-[10px] font-bold border border-[#111111] transition-all ${
                  activeVisual === 'fashion'
                    ? 'bg-[#111111] text-white'
                    : 'bg-white text-[#111111] hover:bg-[#FF1E27] hover:text-white hover:border-[#FF1E27]'
                }`}
              >
                ✦ EDITORIAL CAMPAIGN
              </button>
              <button
                onClick={() => setActiveVisual('coffee')}
                className={`px-2.5 py-1 font-mono text-[10px] font-bold border border-[#111111] transition-all ${
                  activeVisual === 'coffee'
                    ? 'bg-[#111111] text-white'
                    : 'bg-white text-[#111111] hover:bg-[#FF1E27] hover:text-white hover:border-[#FF1E27]'
                }`}
              >
                ☕ COMMERCIAL AD
              </button>
            </div>

            {/* Photoshop Canvas Bounding Box */}
            <div className="ps-bounding-box p-1.5 bg-white max-w-[290px] w-full shadow-brutal relative group">
              {/* 8 Transform Handles */}
              <div className="ps-handle -top-1.5 -left-1.5" />
              <div className="ps-handle -top-1.5 left-1/2 -translate-x-1/2" />
              <div className="ps-handle -top-1.5 -right-1.5" />
              <div className="ps-handle top-1/2 -translate-y-1/2 -left-1.5" />
              <div className="ps-handle top-1/2 -translate-y-1/2 -right-1.5" />
              <div className="ps-handle -bottom-1.5 -left-1.5" />
              <div className="ps-handle -bottom-1.5 left-1/2 -translate-x-1/2" />
              <div className="ps-handle -bottom-1.5 -right-1.5" />

              {/* Visual inside box */}
              <div className="aspect-[3/4] bg-[#141416] overflow-hidden">
                <img
                  src={
                    activeVisual === 'fashion'
                      ? '/assets/outfit_of_the_day_fashion.jpg'
                      : '/assets/borcelle_coffee_promo.png'
                  }
                  alt="Editorial Design Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-[#111111] px-1 font-bold">
                <span>{activeVisual === 'fashion' ? 'EDITORIAL_MOODBOARD.PSD' : 'COMMERCIAL_AD.PSD'}</span>
                <span className="text-[#FF1E27]">1080×1350 // 300DPI</span>
              </div>
            </div>
          </div>

          {/* Center: Bio Narrative & Education */}
          <div className="lg:col-span-4 space-y-7">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#FF1E27] tracking-widest uppercase block mb-1">
                BACKGROUND // IDENTITY
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#222222] leading-relaxed">
                Right now I'm studying Computer Science & Engineering in India while working with platforms and brands that trust me to bring their digital experiences and interfaces to life.
              </p>
            </div>

            {/* Education Block */}
            <div className="pt-1">
              <h3 className="font-extended font-black text-lg sm:text-xl text-[#111111] tracking-wide mb-2.5 uppercase">
                EDUCATION
              </h3>
              <div className="border-l-2 border-[#111111] pl-3.5 py-1 space-y-1">
                <span className="font-sans text-xs sm:text-sm font-bold text-[#111111] block">
                  Bachelor of Technology in CSE
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-[#666666] block">
                  ABES Engineering College | 2024 – 2028
                </span>
              </div>
            </div>

            {/* Core Focus Pills */}
            <div className="pt-1">
              <span className="font-mono text-[10px] font-bold text-[#666666] uppercase block mb-2">
                FOCUS DISCIPLINES
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["UI/UX Design", "Design Systems", "Product Strategy", "Figma Auto-Layout", "Frontend Tokens"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white border border-[#111111] font-mono text-[10px] font-bold text-[#111111]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Experience Timeline */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="font-extended font-black text-lg sm:text-xl text-[#111111] tracking-wide uppercase">
              EXPERIENCE
            </h3>

            <div className="space-y-4">
              {/* ONI Cares */}
              <div className="border-l-2 border-[#FF1E27] pl-3.5 py-0.5">
                <span className="font-mono text-xs font-bold text-[#FF1E27] block">
                  2026 – Present
                </span>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#111111] block mt-0.5">
                  UI/UX & Product Designer
                </span>
                <span className="font-mono text-[11px] text-[#666666] block">
                  ONI Cares (HealthTech)
                </span>
              </div>

              {/* Technovation */}
              <div className="border-l-2 border-[#111111] pl-3.5 py-0.5">
                <span className="font-mono text-xs font-bold text-[#111111] block">
                  Jun 2025 – Present
                </span>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#111111] block mt-0.5">
                  Graphic Designer
                </span>
                <span className="font-mono text-[11px] text-[#666666] block">
                  Technovation – The Networking Club, ABESEC
                </span>
              </div>

              {/* Ignite Room IIIT Delhi */}
              <div className="border-l-2 border-[#111111] pl-3.5 py-0.5">
                <span className="font-mono text-xs font-bold text-[#666666] block">
                  Jul 2025 – Jun 2026
                </span>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#111111] block mt-0.5">
                  Lead Graphic Designer
                </span>
                <span className="font-mono text-[11px] text-[#666666] block">
                  Ignite Room IIIT DELHI
                </span>
              </div>

              {/* Know Your Careers */}
              <div className="border-l-2 border-[#111111] pl-3.5 py-0.5">
                <span className="font-mono text-xs font-bold text-[#666666] block">
                  Aug 2025 – Nov 2025
                </span>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#111111] block mt-0.5">
                  Graphic Design Specialist
                </span>
                <span className="font-mono text-[11px] text-[#666666] block">
                  Know Your Careers
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE RE-ENGINEERED SIGNATURE CENTERPIECE: STACKED NAME + HERO PORTRAIT */}
      <div className="relative w-full my-12 sm:my-20">
        
        {/* Dark Crumpled Paper Container with Jagged Torn Top & Bottom */}
        <div className="dark-crumpled-bg torn-top torn-bottom py-20 sm:py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[540px] sm:min-h-[640px]">
          
          {/* Subtle Grid overlay inside dark section */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Micro Top Ticker Bar */}
          <div className="absolute top-8 left-0 right-0 overflow-hidden py-1 border-y border-white/10 opacity-70">
            <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-white font-mono text-[10px] tracking-widest uppercase">
              <span>✦ CREATIVE DIRECTION</span>
              <span className="text-[#FF1E27]">●</span>
              <span>UI/UX & PRODUCT DESIGN</span>
              <span className="text-[#FF1E27]">●</span>
              <span>ONI CARES</span>
              <span className="text-[#FF1E27]">●</span>
              <span>TECHNOVATION</span>
              <span className="text-[#FF1E27]">●</span>
              <span>✦ CREATIVE DIRECTION</span>
              <span className="text-[#FF1E27]">●</span>
              <span>UI/UX & PRODUCT DESIGN</span>
              <span className="text-[#FF1E27]">●</span>
              <span>ONI CARES</span>
              <span className="text-[#FF1E27]">●</span>
              <span>TECHNOVATION</span>
            </div>
          </div>

          {/* Stacked 2-Line Monumental Typography (100% Responsive, Zero Slicing!) */}
          <div className="w-full max-w-5xl mx-auto px-4 text-center select-none z-10 flex flex-col items-center justify-center">
            
            {/* Line 1: AYUSH */}
            <h2 className="font-extended font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] text-white tracking-tight leading-[0.88] uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              AYUSH
            </h2>

            {/* Overlapping Hero Cutout Portrait in Center */}
            <div className="relative z-20 my-[-25px] sm:my-[-40px] md:my-[-55px] group">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden portrait-red-outline border-4 border-[#111111] bg-[#111111] transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/assets/ayush_profile.png"
                  alt="Ayush Shukla Cutout Portrait"
                  className="w-full h-full object-cover filter contrast-110"
                />
              </div>

              {/* Floating Pill Below Portrait */}
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-1.5 rounded-full bg-[#111111] border-2 border-[#FF1E27] text-white font-mono text-[10px] sm:text-xs font-bold tracking-wider whitespace-nowrap shadow-brutal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF1E27] animate-pulse" />
                <span>CREATIVE DIRECTION & UI/UX</span>
              </div>
            </div>

            {/* Line 2: SHUKLA (Outlined in crisp white) */}
            <h2 className="font-extended font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight leading-[0.88] uppercase text-transparent [-webkit-text-stroke:2px_#ffffff] sm:[-webkit-text-stroke:3px_#ffffff] hover:text-white transition-colors duration-300">
              SHUKLA
            </h2>
          </div>

          {/* Bottom Disciplines Strip */}
          <div className="mt-8 z-10 flex flex-wrap items-center justify-center gap-3 text-zinc-400 font-mono text-[11px] font-bold">
            <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-white">
              01 // INTERFACE SYSTEMS
            </span>
            <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-white">
              02 // VISUAL STORYTELLING
            </span>
            <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-white">
              03 // PRODUCT DESIGN
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
