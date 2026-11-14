import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function AboutSection() {
  const highlights = [
    { title: "Interaction Design", color: "bg-[#FEF08A] text-[#141416]" },
    { title: "Figma Prototyping", color: "bg-[#BBF7D0] text-[#141416]" },
    { title: "User Research", color: "bg-[#FBCFE8] text-[#141416]" },
    { title: "Motion Design", color: "bg-[#BAE6FD] text-[#141416]" },
    { title: "Design Systems", color: "bg-[#DDD6FE] text-[#141416]" },
  ];

  const stats = [
    { number: "3+", label: "Design Roles", sub: "Technovation, IIITD, OSC", color: "bg-[#FEF08A]", rotate: "-rotate-2" },
    { number: "10+", label: "Shipped UIs", sub: "Dashboards, Web & Apps", color: "bg-[#BBF7D0]", rotate: "rotate-1" },
    { number: "40+", label: "Visual Assets", sub: "Event Creatives & Merch", color: "bg-[#FED7AA]", rotate: "-rotate-1" },
    { number: "1.5K+", label: "Reach", sub: "Attendees & Users", color: "bg-[#BAE6FD]", rotate: "rotate-2" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* GIANT PIXEL SECTION TITLE (MATCHING SCREEN 4) */}
        <div className="text-center mb-10">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#52525B] -rotate-1 inline-block">
            about the designer
          </span>
          <h2 className="font-pixel text-7xl sm:text-9xl text-[#141416] tracking-tight -mt-1 leading-none select-none">
            ABOUT
          </h2>
        </div>

        {/* MAIN RULED PAPER SCRAPBOOK CARD (MATCHING SCREEN 3 & 4) */}
        <div className="bg-[#FFFFFF] border-2 border-[#141416] rounded-3xl p-6 sm:p-10 shadow-brutal-lg relative">
          
          {/* Top Paper Header Strip */}
          <div className="flex items-center justify-between pb-6 border-b-2 border-[#141416]/10 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-[#141416]" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] border border-[#141416]" />
              <span className="w-3 h-3 rounded-full bg-[#10B981] border border-[#141416]" />
              <span className="ml-2 font-mono text-xs font-bold text-[#141416] tracking-wider uppercase">
                DOSSIER // AYUSH_SHUKLA.TXT
              </span>
            </div>

            <div className="bg-[#FEF08A] border-2 border-[#141416] px-3 py-1 rounded font-mono text-[11px] font-bold shadow-[2px_2px_0px_#141416]">
              NOIDA / DELHI NCR, INDIA 📍
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Polaroid Photo with Frosted Scotch Tape */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="polaroid-card relative rotate-[-2.5deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[300px]">
                {/* Corner Washi Tape (Blue) */}
                <div className="absolute -top-3 -left-3 w-16 h-5 bg-[#BAE6FD]/85 border-l border-r border-dashed border-[#141416]/30 -rotate-12 z-20 shadow-sm" />
                <div className="absolute -top-3 -right-3 w-16 h-5 bg-[#BAE6FD]/85 border-l border-r border-dashed border-[#141416]/30 rotate-12 z-20 shadow-sm" />

                {/* Photo of Ayush */}
                <div className="w-full aspect-square bg-[#141416] rounded overflow-hidden border border-[#E2DED5]">
                  <img
                    src="/assets/ayush_profile.png"
                    alt="Ayush Shukla"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Polaroid Caption */}
                <div className="mt-3 text-center">
                  <span className="font-handwriting text-xl text-[#141416] block">
                    Ayush Shukla • 2026
                  </span>
                  <span className="font-mono text-[10px] text-[#52525B] uppercase font-bold tracking-wider">
                    UI/UX & GRAPHIC DESIGNER
                  </span>
                </div>
              </div>

              {/* Taped Sticky Tag Below Photo */}
              <div className="mt-5 bg-[#BBF7D0] border-2 border-[#141416] px-4 py-1.5 rounded-lg shadow-[2px_2px_0px_#141416] rotate-1 text-center">
                <span className="font-mono text-xs font-bold text-[#141416]">
                  ✦ ABESEC B.Tech CSE (2024–2028)
                </span>
              </div>
            </div>

            {/* Right: Bio & Highlighter Tape Pills (Matching Screen 3) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Handwriting "what's up" */}
              <div className="inline-block bg-[#FEF08A] border-2 border-[#141416] px-3.5 py-1 rounded shadow-[2px_2px_0px_#141416] -rotate-1">
                <span className="font-handwriting text-xl text-[#141416] font-bold">
                  what's up! 👋
                </span>
              </div>

              {/* Designer Manifesto Paragraph */}
              <p className="font-sans text-base sm:text-lg text-[#141416] leading-relaxed">
                I'm a <strong className="font-bold underline decoration-[#FEF08A] decoration-4">UI/UX & Graphic Designer</strong> who gets a little too excited about making complicated things feel simple. I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier. ☕
              </p>

              {/* Engineering + Design Narrative */}
              <p className="font-sans text-sm sm:text-[15px] text-[#52525B] leading-relaxed">
                Currently pursuing my B.Tech in Computer Science and Engineering at ABESEC, I combine engineering structure with design empathy. From architecting SaaS dashboard workflows to crafting high-converting social carousels and hackathon-winning healthcare platforms, I believe great software shouldn't call attention to itself — it should just work beautifully.
              </p>

              {/* Highlighter Tape Skills (Exact Screen 3 Reproduction) */}
              <div className="pt-2">
                <span className="font-mono text-xs text-[#52525B] uppercase font-bold tracking-wider block mb-3">
                  CORE DISCIPLINES & FOCUS:
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className={`px-3.5 py-1.5 rounded-md border-2 border-[#141416] shadow-[2px_2px_0px_#141416] font-mono text-xs font-bold tracking-tight hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform ${h.color}`}
                    >
                      {h.title}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 rounded-md bg-[#141416] text-white font-mono text-xs font-bold border-2 border-[#141416]">
                    &gt;&gt;
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#141416] text-[#F8F6F0] font-mono text-xs font-bold border-2 border-[#141416] shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
                >
                  FULL RESUME 📄
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-xl bg-white text-[#141416] font-mono text-xs font-bold border-2 border-[#141416] shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
                >
                  SAY HELLO ✉️
                </a>
              </div>

            </div>

          </div>

          {/* 4 Pastel Sticky Note Metrics Grid Below (Matching Screen 7 Sticky Style) */}
          <div className="mt-12 pt-8 border-t-2 border-[#141416]/10">
            <span className="font-handwriting text-xl text-[#52525B] -rotate-1 inline-block mb-4">
              the key numbers at a glance ✦
            </span>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-2 border-[#141416] shadow-brutal ${s.color} ${s.rotate} hover:rotate-0 transition-transform`}
                >
                  <span className="font-pixel text-4xl sm:text-5xl text-[#141416] block leading-none">
                    {s.number}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#141416] uppercase mt-1 block">
                    {s.label}
                  </span>
                  <span className="font-sans text-[11px] text-[#141416]/80 block mt-0.5">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
