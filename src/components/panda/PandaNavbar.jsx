import React, { useState } from 'react';
import { personalInfo } from '../../data/projectsData';

export default function PandaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "WORKS", href: "#projects" },
    { label: "THE STU", href: "#the-stu" },
    { label: "TOOLBOX", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ECECEC]/95 backdrop-blur-md border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Brand Name in Extended Typography */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 bg-[#FF1E27] inline-block group-hover:rotate-45 transition-transform" />
          <span className="font-extended font-black text-sm sm:text-base tracking-widest uppercase text-[#111111] group-hover:text-[#FF1E27] transition-colors">
            AYUSH SHUKLA
          </span>
          <span className="text-xs font-mono font-bold text-[#666666] hidden sm:inline">
            // 2026
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-xs font-mono font-bold tracking-wider text-[#111111] hover:text-[#FF1E27] transition-colors flex items-center gap-1 group"
            >
              <span className="text-[10px] text-transparent group-hover:text-[#FF1E27] transition-colors">✦</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded bg-white border-2 border-[#111111] text-xs font-mono font-bold shadow-[2px_2px_0px_#111111] hover:bg-[#FF1E27] hover:text-white hover:border-[#FF1E27] hover:shadow-[2px_2px_0px_#111111] transition-all"
          >
            RESUME 📄
          </a>

          <a
            href="#contact"
            className="px-4 py-1.5 rounded bg-[#111111] text-white border-2 border-[#111111] text-xs font-mono font-bold shadow-[2px_2px_0px_#FF1E27] hover:bg-[#FF1E27] hover:border-[#FF1E27] transition-all"
          >
            LET'S TALK ↗
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 border-2 border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0px_#111111]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ECECEC] border-b-2 border-[#111111] p-4 space-y-2 animate-fadeIn">
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
              className="flex-1 text-center py-2 bg-white border-2 border-[#111111] text-xs font-mono font-bold"
            >
              RESUME 📄
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 bg-[#111111] text-white border-2 border-[#111111] text-xs font-mono font-bold"
            >
              LET'S TALK ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
