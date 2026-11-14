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
    <section id="contact" className="py-24 relative overflow-hidden graph-paper-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] mb-6">
          <span className="w-2 h-2 bg-[#FF1E27] animate-pulse" />
          <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
            INITIATE COLLABORATION // 2026
          </span>
        </div>

        {/* GIANT TITLE: "LET'S TALK" */}
        <h2 className="font-extended font-black text-6xl sm:text-8xl md:text-9xl text-[#111111] tracking-tight uppercase leading-none select-none">
          LET'S TALK
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#555555] max-w-lg mx-auto mt-4 mb-10 leading-relaxed">
          Open for full-time UI/UX design roles, design systems architecture, and high-impact digital platform projects.
        </p>

        {/* Central Neo-Brutalist Box */}
        <div className="w-full max-w-xl bg-white border-2 border-[#111111] p-8 shadow-brutal-lg mb-10 relative">
          
          <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-6">
            <span className="font-mono text-xs font-bold uppercase text-[#666666]">
              DIRECT INBOX
            </span>
            <span className="font-mono text-xs font-bold text-[#FF1E27]">
              ● FASTEST RESPONSE
            </span>
          </div>

          {/* Email Box */}
          <div className="bg-[#ECECEC] border-2 border-[#111111] p-4 shadow-[3px_3px_0px_#111111] mb-6">
            <span className="font-mono text-[10px] text-[#666666] font-bold uppercase block mb-1">
              PRIMARY EMAIL
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-extended font-bold text-sm sm:text-lg text-[#111111] hover:text-[#FF1E27] transition-colors break-all"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex-1 py-3 rounded bg-white border-2 border-[#111111] font-mono text-xs font-bold shadow-brutal hover:bg-[#111111] hover:text-white transition-all"
            >
              {copiedEmail ? 'COPIED TO CLIPBOARD! ✓' : 'COPY EMAIL 📋'}
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex-1 text-center py-3 rounded bg-[#FF1E27] text-white border-2 border-[#111111] font-mono text-xs font-bold shadow-brutal hover:bg-[#111111] transition-all"
            >
              SEND DIRECT EMAIL ✉️
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-[#111111]/10 flex items-center justify-between text-xs font-mono text-[#666666]">
            <span>📍 Noida / Delhi NCR, India</span>
            <span>📞 {personalInfo.phone}</span>
          </div>
        </div>

        {/* Outlined Brutalist Social Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* LinkedIn (Ayush's new link) */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-white border-2 border-[#111111] text-xs font-mono font-bold shadow-brutal hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all"
          >
            <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
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
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-white border-2 border-[#111111] text-xs font-mono font-bold shadow-brutal hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
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
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-white border-2 border-[#111111] text-xs font-mono font-bold shadow-brutal hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all"
          >
            <svg className="w-4 h-4 fill-current text-[#E1306C]" viewBox="0 0 24 24">
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
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#FF1E27] text-white border-2 border-[#111111] text-xs font-mono font-bold shadow-brutal hover:bg-[#111111] transition-all"
          >
            <span>RESUME</span>
            <span>📄</span>
          </a>
        </div>

        {/* 3 Brutalist Glyphs at Bottom */}
        <div className="mt-14 flex items-center justify-center gap-4 text-[#111111]">
          <span>✦</span>
          <span>✦</span>
          <span>♣</span>
        </div>

      </div>
    </section>
  );
}
