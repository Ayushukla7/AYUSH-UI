import React, { useState } from 'react';
import { personalInfo } from '../../data/projectsData';

export default function PandaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "WORKS", href: "#projects" },
    { label: "TOOLBOX", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto bg-[#ECECEC]/95 backdrop-blur-md border-2 border-[#111111] shadow-brutal px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center justify-between pointer-events-auto transition-all">
        
        {/* Left: Brand Name with Micro Avatar */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-[#111111] bg-white shadow-[1px_1px_0px_#111111] flex-shrink-0">
            <img
              src="/assets/ayush_halftone_poster.jpg"
              alt="Ayush Shukla"
              className="w-full h-full object-cover object-[center_24%]"
            />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-extended font-black text-xs sm:text-sm tracking-wider uppercase text-[#111111] group-hover:text-[#FF1E27] transition-colors">
              AYUSH SHUKLA
            </span>
            <span className="text-[10px] font-mono font-bold text-[#FF1E27]">
              ✦ '26
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links with Clean Spacing & Hover States */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="px-3 py-1.5 rounded text-[11px] font-mono font-bold tracking-wider text-[#222222] hover:text-white hover:bg-[#111111] transition-all flex items-center gap-1 group"
            >
              <span className="text-[9px] text-[#FF1E27] opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Direct Actions with Brutalist Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded bg-white border-2 border-[#111111] text-xs font-mono font-bold shadow-[2px_2px_0px_#111111] hover:bg-[#111111] hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>RESUME</span>
            <span className="text-[10px]">📄</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-1.5 rounded bg-[#111111] text-white border-2 border-[#111111] text-xs font-mono font-bold shadow-[2px_2px_0px_#FF1E27] hover:bg-[#FF1E27] hover:border-[#FF1E27] hover:shadow-[2px_2px_0px_#111111] transition-all flex items-center gap-1.5"
          >
            <span>LET'S TALK</span>
            <span className="text-[10px] text-[#FF1E27] group-hover:text-white">↗</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded border-2 border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0px_#111111] font-mono text-xs font-bold"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? '✕ CLOSE' : '☰ MENU'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="max-w-7xl mx-auto mt-2 bg-[#ECECEC] border-2 border-[#111111] shadow-brutal-lg rounded-xl p-4 md:hidden pointer-events-auto space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 bg-white border-2 border-[#111111] text-xs font-mono font-bold text-center hover:bg-[#FF1E27] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex gap-2">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 bg-white border-2 border-[#111111] text-xs font-mono font-bold"
            >
              RESUME 📄
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 bg-[#111111] text-white border-2 border-[#111111] text-xs font-mono font-bold"
            >
              LET'S TALK ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
