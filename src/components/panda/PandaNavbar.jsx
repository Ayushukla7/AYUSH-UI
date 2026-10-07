import React, { useState } from 'react';
import { personalInfo } from '../../data/projectsData';

export default function PandaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Me", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030307]/80 backdrop-blur-xl border-b border-white/5 transition-all">
      {/* Ambient Top Left Glow Blob */}
      <div className="absolute -top-16 -left-16 w-56 h-56 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative z-10">
        
        {/* Left: Brand Logo in Unbounded */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-500 to-indigo-500 p-0.5 shadow-lg shadow-purple-900/40 group-hover:scale-105 transition-transform">
              <img
                src="/assets/ayush_profile.png"
                alt="Ayush Shukla"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#030307] animate-pulse" />
          </div>

          <div>
            <span className="font-unbounded font-bold text-lg text-white group-hover:text-purple-300 transition-colors tracking-tight flex items-center gap-1.5">
              <span>Ayush Shukla</span>
              <span className="text-purple-400 text-xs">✦</span>
            </span>
            <span className="text-[11px] text-purple-300/80 font-medium block -mt-1 font-mono">
              UI/UX & Graphic Designer
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0c0c16]/80 border border-white/10 px-4 py-1.5 rounded-full shadow-inner">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-purple-600/20 hover:border hover:border-purple-500/30 transition-all font-unbounded text-[11px]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions & Direct Resume Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Direct Resume Button */}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold font-unbounded hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 hover:scale-105"
          >
            <svg className="w-3.5 h-3.5 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span>Resume</span>
          </a>

          {/* Quick Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-white transition-all hover:scale-105"
          >
            <svg className="w-3.5 h-3.5 text-[#EA4335]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Email</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a14]/95 border-b border-white/10 px-6 py-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-unbounded text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-unbounded font-bold text-xs shadow-lg text-center"
            >
              <svg className="w-3.5 h-3.5 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span>View Official Resume</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-center text-xs font-mono text-slate-300"
            >
              <svg className="w-3.5 h-3.5 text-[#EA4335]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
