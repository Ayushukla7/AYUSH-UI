import React from 'react';
import { personalInfo, resumeData } from '../../data/projectsData';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 overflow-hidden">
      
      {/* 1. TOP PART: BIO, EDUCATION, EXPERIENCE & PHOTOSHOP BOUNDING BOX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Photoshop Bounding Box Visual (Exact Behance Screen 2 Left) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="ps-bounding-box p-1 bg-white max-w-[260px] shadow-brutal relative group">
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
                  src="/assets/team_techno_merchandise.png"
                  alt="Streetwear Apparel Graphic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-[#111111] px-1 font-bold">
                <span>SELECTION_V1</span>
                <span className="text-[#FF1E27]">100%</span>
              </div>
            </div>
          </div>

          {/* Center: Bio Narrative & Education (Exact Behance Screen 2 Center) */}
          <div className="lg:col-span-4 space-y-6">
            <p className="font-sans text-xs sm:text-sm text-[#111111] leading-relaxed">
              Right now I'm studying Computer Science & Engineering in India while working with platforms and brands that trust me to bring their digital experiences and interfaces to life.
            </p>

            {/* Education Block */}
            <div className="pt-2">
              <h3 className="font-extended font-black text-lg sm:text-xl text-[#111111] tracking-wide mb-2 uppercase">
                EDUCATION
              </h3>
              <div className="border-l-2 border-[#111111] pl-3 py-1 space-y-1">
                <span className="font-sans text-xs sm:text-sm font-bold text-[#111111] block">
                  Bachelor of Technology in CSE
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-[#666666] block">
                  ABES Engineering College | 2024 – 2028
                </span>
              </div>
            </div>

            {/* Core Focus Pills */}
            <div className="pt-1 flex flex-wrap gap-1.5">
              {["UI/UX Design", "Design Systems", "Product Strategy", "Figma Auto-Layout"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-white border border-[#111111] font-mono text-[10px] font-bold text-[#111111]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Experience Timeline (Exact Behance Screen 2 Right) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-extended font-black text-lg sm:text-xl text-[#111111] tracking-wide uppercase">
              EXPERIENCE
            </h3>

            <div className="space-y-4">
              {/* ONI Cares */}
              <div className="border-l-2 border-[#FF1E27] pl-3 py-0.5">
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
              <div className="border-l-2 border-[#111111] pl-3 py-0.5">
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
              <div className="border-l-2 border-[#111111] pl-3 py-0.5">
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
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE SIGNATURE TORN PAPER COLLAGE (EXACT BEHANCE CENTERPIECE) */}
      <div className="relative w-full my-8">
        
        {/* Dark Crumpled Paper Container with Jagged Torn Top & Bottom */}
        <div className="dark-crumpled-bg torn-top torn-bottom py-20 sm:py-32 relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px]">
          
          {/* Subtle Grid overlay inside dark section */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Giant Arching Background Typography: "AYUSH SHUKLA" / "CREATIVE DIRECTION" */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden opacity-90">
            <span className="font-extended font-black text-[15vw] sm:text-[14vw] md:text-[12vw] text-white tracking-widest whitespace-nowrap leading-none">
              AYUSH SHUKLA
            </span>
          </div>

          {/* Cutout Portrait Photo with Bold Red Outline Sticker Effect */}
          <div className="relative z-20 group">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden portrait-red-outline transition-transform duration-500 group-hover:scale-105">
              <img
                src="/assets/ayush_profile.png"
                alt="Ayush Shukla Cutout Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sticker Pill Below Portrait */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#111111] border-2 border-[#FF1E27] text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider whitespace-nowrap shadow-brutal flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF1E27] animate-pulse" />
              <span>CREATIVE DIRECTION & UI/UX</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
