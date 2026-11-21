import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/projectsData';

export default function FooterSection() {
  const [timeIST, setTimeIST] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTimeIST(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { num: "01", label: "HERO // TOP", href: "#hero" },
    { num: "02", label: "ABOUT & BIO", href: "#about" },
    { num: "03", label: "SELECTED WORKS", href: "#projects" },
    { num: "04", label: "TECHNICAL TOOLBOX", href: "#skills" },
    { num: "05", label: "WORK EXPERIENCE", href: "#experience" },
    { num: "06", label: "HONORS & AWARDS", href: "#achievements" },
    { num: "07", label: "INITIATE CONTACT", href: "#contact" },
    { num: "08", label: "VIEW RESUME 📄", href: "/resume.html", external: true }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: personalInfo.linkedin,
      handle: "/in/ayushstech",
      icon: (
        <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.94 0-1.7.76-1.7 1.7 0 .93.76 1.7 1.7 1.7.94 0 1.7-.77 1.7-1.7 0-.94-.76-1.7-1.7-1.7z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: personalInfo.github,
      handle: "Ayushukla7",
      icon: (
        <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: personalInfo.instagram,
      handle: "@ayushs_4141",
      icon: (
        <svg className="w-4 h-4 fill-current text-[#E1306C]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative z-20 bg-[#0F0F12] text-white border-t-4 border-[#111111] overflow-hidden">
      
      {/* 1. TOP RUNNING MARQUEE BANNER */}
      <div className="w-full bg-[#111111] py-3.5 sm:py-4 border-b-2 border-[#262626] overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-extended font-black text-xs sm:text-sm tracking-[0.2em] uppercase text-white">
          <span>AYUSH SHUKLA</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>UI/UX & PRODUCT DESIGN</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>ONI CARES // DESIGN SYSTEMS</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>OPEN FOR 2026 ROLES</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>BRAND IDENTITY & MERCH</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>BASED IN NOIDA / NCR</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>AYUSH SHUKLA</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>UI/UX & PRODUCT DESIGN</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>ONI CARES // DESIGN SYSTEMS</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>OPEN FOR 2026 ROLES</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>BRAND IDENTITY & MERCH</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>BASED IN NOIDA / NCR</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
        </div>
      </div>

      {/* 2. MAIN ARCHITECTURAL FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* COL 1: IDENTITY, NEW AVATAR & LIVE AVAILABILITY (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            
            {/* Profile Micro Card */}
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF1E27] shadow-[3px_3px_0px_#FF1E27] bg-[#1A1A1E] flex-shrink-0">
                  <img
                    src="/assets/ayush_halftone_poster.jpg"
                    alt="Ayush Shukla"
                    className="w-full h-full object-cover object-[center_24%]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extended font-black text-lg sm:text-xl tracking-wider uppercase text-white">
                      AYUSH SHUKLA
                    </h3>
                  </div>
                  <p className="font-mono text-xs font-bold text-[#FF1E27] uppercase tracking-wider">
                    UI/UX & Graphic Designer
                  </p>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#999999] leading-relaxed max-w-sm mb-5">
                Designing end-to-end digital interfaces, maternal healthcare platforms at ONI Cares, and bold visual design systems across Web, App & Merch.
              </p>

              {/* Live Status Indicators Box */}
              <div className="bg-[#16161B] border border-[#2B2B33] p-4 rounded space-y-2.5 font-mono text-[11px] shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse flex-shrink-0" />
                  <span className="text-[#E0E0E0] font-bold">
                    ONI CARES
                  </span>
                  <span className="text-[#666666]">// UI/UX & Design Systems</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF1E27] flex-shrink-0" />
                  <span className="text-[#E0E0E0] font-bold">
                    STATUS:
                  </span>
                  <span className="text-[#AAAAAA]">Available for 2026 roles</span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#26262E] text-[#888888]">
                  <span>📍 Noida / NCR, India</span>
                  <span className="text-[#FF1E27] font-bold">
                    {timeIST ? `IST: ${timeIST}` : 'IST [UTC+5:30]'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* COL 2: DIRECTORY / SITEMAP (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#262626]">
              <span className="w-2 h-2 bg-[#FF1E27]" />
              <h4 className="font-mono text-xs font-bold tracking-widest text-[#FFFFFF] uppercase">
                // DIRECTORY
              </h4>
            </div>

            <ul className="space-y-2 font-mono text-xs">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between py-1 text-[#888888] hover:text-[#FFFFFF] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#555555] group-hover:text-[#FF1E27] font-bold transition-colors">
                        {link.num}
                      </span>
                      <span className="font-bold tracking-wide">
                        {link.label}
                      </span>
                    </span>
                    <span className="text-[10px] text-[#444444] group-hover:text-[#FF1E27] group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: CONNECT CHANNELS & DIRECT INBOX (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#262626]">
              <span className="w-2 h-2 bg-[#FF1E27]" />
              <h4 className="font-mono text-xs font-bold tracking-widest text-[#FFFFFF] uppercase">
                // DIRECT CHANNELS
              </h4>
            </div>

            <div className="space-y-2.5">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-[#16161B] border border-[#2B2B33] hover:border-[#FF1E27] rounded transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    {social.icon}
                    <div className="text-left leading-tight">
                      <span className="font-bold text-xs text-white block group-hover:text-[#FF1E27] transition-colors">
                        {social.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#777777]">
                        {social.handle}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#555555] group-hover:text-[#FF1E27] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
                    ↗
                  </span>
                </a>
              ))}

              {/* Quick Email Click-To-Copy Pill */}
              <div className="p-2.5 bg-[#16161B] border border-[#2B2B33] rounded">
                <span className="font-mono text-[10px] text-[#666666] font-bold uppercase block mb-1">
                  PRIMARY EMAIL
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-[11px] font-bold text-white hover:text-[#FF1E27] transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2 py-0.5 bg-[#22222A] hover:bg-[#FF1E27] text-white font-mono text-[10px] font-bold rounded transition-colors flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? 'COPIED! ✓' : 'COPY'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* COL 4: COLOPHON & SPECIFICATIONS (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#262626]">
              <span className="w-2 h-2 bg-[#FF1E27]" />
              <h4 className="font-mono text-xs font-bold tracking-widest text-[#FFFFFF] uppercase">
                // SPEC_SHEET
              </h4>
            </div>

            <div className="bg-[#16161B] border border-[#2B2B33] p-3 rounded font-mono text-[11px] space-y-2 text-[#888888]">
              <div>
                <span className="text-[#555555] block text-[9px] uppercase">COHORT</span>
                <span className="text-white font-bold">2026 EDITION</span>
              </div>
              <div>
                <span className="text-[#555555] block text-[9px] uppercase">AESTHETIC</span>
                <span className="text-white font-bold">NEO-BRUTALIST V4</span>
              </div>
              <div>
                <span className="text-[#555555] block text-[9px] uppercase">TYPOGRAPHY</span>
                <span className="text-white font-bold">UNBOUNDED / SYNE</span>
              </div>
              <div>
                <span className="text-[#555555] block text-[9px] uppercase">FRAMEWORK</span>
                <span className="text-white font-bold">REACT + VITE</span>
              </div>
              <div>
                <span className="text-[#555555] block text-[9px] uppercase">DEPLOY</span>
                <span className="text-[#10B981] font-bold">VERCEL EDGE</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. GIGANTIC ARCHIVAL BRAND DISPLAY WATERMARK */}
      <div className="border-t border-[#222227] pt-6 pb-2 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <span className="font-extended font-black text-[13vw] sm:text-[11vw] md:text-[9.5vw] leading-none text-[#18181D] hover:text-[#22222A] tracking-tighter uppercase whitespace-nowrap block transition-colors cursor-default">
            AYUSH SHUKLA 2026
          </span>
        </div>
      </div>

      {/* 4. BOTTOM METADATA & BACK TO TOP BUTTON */}
      <div className="border-t border-[#222227] bg-[#0A0A0C] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666666]">
          
          {/* Copyright & Stamp */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">© 2026 AYUSH SHUKLA</span>
            <span>•</span>
            <span className="text-[#888888]">ALL RIGHTS RESERVED</span>
          </div>

          {/* Brutalist Glyphs */}
          <div className="flex items-center gap-2.5 text-sm text-[#FF1E27]">
            <span>✦</span>
            <span className="text-white">✦</span>
            <span>♣</span>
          </div>

          {/* Back to Top Brutalist Action */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[11px] text-[#555555]">
              SCROLL TO SUMMIT
            </span>
            <button
              onClick={scrollToTop}
              className="px-3.5 py-1.5 bg-[#FF1E27] text-white font-mono font-bold text-xs uppercase border border-white shadow-[2px_2px_0px_#FFFFFF] hover:bg-white hover:text-[#111111] hover:border-[#FF1E27] hover:shadow-[2px_2px_0px_#FF1E27] active:translate-x-[1px] active:translate-y-[1px] transition-all"
            >
              TOP ↑
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
