import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function HeaderNav({ onOpenResume }) {
  const navSections = [
    { label: "About", href: "#about" },
    { label: "Achievements", href: "#achievements" },
    { label: "Social Media", href: "#social-media" },
    { label: "UI/UX & Web", href: "#web-ui" },
    { label: "Branding", href: "#branding" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d10]/90 backdrop-blur-xl border-b border-white/10 py-2.5 px-4 sm:px-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Designer Identity with Mini Photo & Status Indicator */}
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#ffaa00] p-0.5 bg-black shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            <img src="/assets/ayush_profile.png" alt="Ayush Shukla" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-impact text-lg sm:text-xl text-white tracking-wide block leading-none">
                {personalInfo.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Available for Work" />
            </div>
            <span className="text-[10px] font-mono text-[#ffaa00] block -mt-0.5">
              UI/UX & Graphic Designer
            </span>
          </div>
        </a>

        {/* Center: Direct Jump Navigation Controls */}
        <nav className="hidden md:flex items-center gap-1 bg-[#14151b]/80 border border-white/10 px-3 py-1 rounded-full text-xs font-mono">
          {navSections.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="px-2.5 py-1 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors text-[11px]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Real Clickable Profiles & Email Action & Resume Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono">
          {/* Prominent Resume Paper Link Button */}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#ffaa00] to-[#ff9000] text-black font-bold hover:brightness-110 transition-all shadow-md text-xs hover:scale-105"
            title="Open Full Resume Paper"
          >
            <span>📄</span>
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="px-2.5 py-1.5 rounded-lg bg-white/10 text-white font-bold hover:bg-white/20 transition-colors border border-white/10 text-xs"
          >
            Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10 transition-colors text-[11px]"
          >
            LinkedIn ↗
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10 transition-colors text-[11px]"
          >
            GitHub ↗
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10 transition-colors text-[11px]"
          >
            Instagram ↗
          </a>
        </div>
      </div>
    </header>
  );
}
