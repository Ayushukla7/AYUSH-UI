import React, { useState } from 'react';
import { personalInfo } from '../../data/projectsData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* ============================================================ */}
        {/* 1. HUGE YELLOW SMILEY FACE (EXACT SCREEN 9 RECREATION) */}
        {/* ============================================================ */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FEF08A] border-4 border-[#141416] shadow-brutal flex items-center justify-center relative select-none">
            {/* Left Eye */}
            <div className="w-3.5 h-6 bg-[#141416] rounded-full absolute top-7 left-6 sm:left-7" />
            {/* Right Eye */}
            <div className="w-3.5 h-6 bg-[#141416] rounded-full absolute top-7 right-6 sm:right-7" />
            {/* Smile Arc */}
            <div className="w-14 sm:w-16 h-8 border-b-4 border-[#141416] rounded-b-full absolute bottom-5 sm:bottom-6" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. GIANT PIXEL "LET'S TALK" (EXACT SCREEN 9 & 10 RECREATION) */}
        {/* ============================================================ */}
        <h2 className="font-pixel text-7xl sm:text-9xl md:text-[10.5rem] text-[#141416] tracking-tight leading-none select-none">
          LET'S TALK
        </h2>

        {/* Handwriting Subtext */}
        <p className="font-handwriting text-2xl sm:text-3xl text-[#52525B] max-w-lg mx-auto mt-2 mb-10 -rotate-1 leading-snug">
          Got a project, a design problem, or just want to say hi? Send a message. ✉️
        </p>

        {/* ============================================================ */}
        {/* 3. CENTRAL YELLOW POST-IT & FLANKING POLAROIDS (SCREEN 10) */}
        {/* ============================================================ */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-6">
          
          {/* Left Polaroid (Angled) */}
          <div className="hidden md:flex md:col-span-3 justify-center">
            <div className="polaroid-card relative rotate-[-6deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[220px]">
              {/* Scotch tape on top */}
              <div className="scotch-tape-center" />
              <div className="w-full aspect-[4/5] bg-black rounded overflow-hidden border border-[#E2DED5]">
                <img
                  src="/assets/speaker_session_announcement.png"
                  alt="AI Speaker Session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="font-handwriting text-base text-[#141416]">
                  speaker key visual ✦
                </span>
              </div>
            </div>
          </div>

          {/* Center: Yellow Post-It Note (Main Contact Box) */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-[#FEF08A] border-2 border-[#141416] rounded-2xl p-6 sm:p-8 shadow-brutal-lg relative -rotate-1 hover:rotate-0 transition-transform">
              
              {/* Push Pin / Scotch Tape on Top Center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/75 border-l border-r border-dashed border-[#141416]/30 shadow-sm" />

              <div className="pb-4 border-b-2 border-[#141416]/15 mb-6 text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#141416] block">
                  OFFICIAL INBOX // DIRECT TOUCH
                </span>
                <span className="font-handwriting text-xl text-[#141416]/80 -rotate-1 inline-block mt-1">
                  "quickest response time"
                </span>
              </div>

              {/* Email Address Display */}
              <div className="bg-white border-2 border-[#141416] p-3 rounded-xl shadow-[2px_2px_0px_#141416] mb-5 text-center">
                <span className="text-[10px] font-mono font-bold uppercase text-[#52525B] block">EMAIL ME AT</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-[#141416] hover:text-amber-600 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 rounded-xl bg-white border-2 border-[#141416] text-[#141416] font-mono text-xs font-bold shadow-[2px_2px_0px_#141416] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform"
                >
                  {copiedEmail ? 'COPIED TO CLIPBOARD! ✓' : 'COPY EMAIL 📋'}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full text-center py-2.5 rounded-xl bg-[#141416] text-white font-mono text-xs font-bold border-2 border-[#141416] shadow-[2px_2px_0px_#141416] hover:bg-[#2A2A2E] transition-colors"
                >
                  SEND EMAIL ✉️
                </a>
              </div>

              {/* Bottom Phone & Location info */}
              <div className="mt-5 pt-3 border-t border-[#141416]/15 flex items-center justify-between text-[11px] font-mono font-semibold text-[#141416]/80">
                <span>📍 Noida / Delhi NCR</span>
                <span>📞 {personalInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Polaroid (Angled) */}
          <div className="hidden md:flex md:col-span-3 justify-center">
            <div className="polaroid-card relative rotate-[6deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[220px]">
              {/* Scotch tape on top */}
              <div className="scotch-tape-center" />
              <div className="w-full aspect-[4/5] bg-black rounded overflow-hidden border border-[#E2DED5]">
                <img
                  src="/assets/technovation_landing.png"
                  alt="Technovation Web Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="font-handwriting text-base text-[#141416]">
                  dark web platform ✦
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 4. OUTLINED BRUTALIST SOCIAL BUTTONS (SCREEN 10 RECREATION) */}
        {/* ============================================================ */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#141416] text-[#141416] font-mono text-xs font-bold shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          >
            <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.94 0-1.7.76-1.7 1.7 0 .93.76 1.7 1.7 1.7.94 0 1.7-.77 1.7-1.7 0-.94-.76-1.7-1.7-1.7z"/>
            </svg>
            <span>LINKEDIN</span>
            <span className="text-[10px]">↗</span>
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#141416] text-[#141416] font-mono text-xs font-bold shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          >
            <svg className="w-4 h-4 fill-[#141416]" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            <span>GITHUB</span>
            <span className="text-[10px]">↗</span>
          </a>

          {/* Instagram */}
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#141416] text-[#141416] font-mono text-xs font-bold shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          >
            <svg className="w-4 h-4 fill-[#E1306C]" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>INSTAGRAM</span>
            <span className="text-[10px]">↗</span>
          </a>

          {/* Resume */}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FEF08A] border-2 border-[#141416] text-[#141416] font-mono text-xs font-bold shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          >
            <span>RESUME</span>
            <span>📄</span>
          </a>
        </div>

        {/* Bottom Tagline (Exact Screen 10 Recreation) */}
        <div className="mt-10 font-handwriting text-2xl text-[#141416]">
          ~ Open to new work and good partners ✦ ★ ~
        </div>

      </div>
    </section>
  );
}
