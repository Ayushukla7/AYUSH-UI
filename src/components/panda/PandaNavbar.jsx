import React, { useState } from 'react';
import { personalInfo } from '../../data/projectsData';

export default function PandaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "★ HOME", href: "#hero", active: true },
    { label: "ABOUT", href: "#about" },
    { label: "WORKS", href: "#projects" },
    { label: "TOOLBOX", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "LET'S TALK", href: "#contact" }
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto bg-[#FFFFFF] border-2 border-[#141416] shadow-brutal rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all">
        
        {/* Left: Traffic Dots & Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 pr-2 border-r border-[#141416]/20">
            <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-[#141416]" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B] border border-[#141416]" />
            <span className="w-3 h-3 rounded-full bg-[#10B981] border border-[#141416]" />
          </div>

          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-[#141416] bg-[#FEF08A] flex-shrink-0">
              <img
                src="/assets/ayush_profile.png"
                alt="Ayush Shukla"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-pixel text-xl sm:text-2xl text-[#141416] tracking-wide uppercase group-hover:text-amber-600 transition-colors">
              AYUSH.FOLIO
            </span>
          </a>
        </div>

        {/* Center: Desktop Folder-Pill Nav Items */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-tight transition-all ${
                item.active
                  ? 'bg-[#FEF08A] text-[#141416] border-2 border-[#141416] shadow-[2px_2px_0px_#141416] -rotate-1'
                  : 'text-[#141416]/80 hover:text-[#141416] hover:bg-[#F3EFE6] border-2 border-transparent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Direct Resume & Contact CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border-2 border-[#141416] text-[#141416] text-xs font-mono font-bold shadow-[2px_2px_0px_#141416] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            <span>RESUME</span>
            <span className="text-[10px]">📄</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#141416] text-white text-xs font-mono font-bold border-2 border-[#141416] shadow-[2px_2px_0px_#FEF08A] hover:bg-[#252528] transition-all"
          >
            <span>CONTACT</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg border-2 border-[#141416] bg-[#FEF08A] text-[#141416] shadow-[2px_2px_0px_#141416]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="max-w-6xl mx-auto mt-2 bg-[#FFFFFF] border-2 border-[#141416] shadow-brutal rounded-2xl p-4 md:hidden pointer-events-auto space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-mono font-bold text-center border-2 border-[#141416] bg-[#FAF7F0] hover:bg-[#FEF08A] text-[#141416] shadow-[2px_2px_0px_#141416]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#141416]/10">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg bg-white border-2 border-[#141416] text-[#141416] text-xs font-mono font-bold shadow-[2px_2px_0px_#141416]"
            >
              📄 RESUME
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 rounded-lg bg-[#141416] text-white text-xs font-mono font-bold border-2 border-[#141416]"
            >
              LET'S TALK ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
