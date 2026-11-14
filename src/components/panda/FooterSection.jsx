import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#111111] bg-[#ECECEC] py-8 relative z-10 graph-paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-extended font-black text-sm text-[#111111]">AYUSH SHUKLA</span>
          <span className="text-[#FF1E27]">✦</span>
          <span className="font-bold text-[#111111]">UI/UX & Graphic Designer</span>
          <span>•</span>
          <span>2026</span>
        </div>

        {/* Center Glyphs */}
        <div className="flex items-center gap-2 text-sm text-[#111111]">
          <span>✦</span>
          <span>✦</span>
          <span>♣</span>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF1E27] transition-colors font-bold text-[#111111]"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF1E27] transition-colors font-bold text-[#111111]"
          >
            GitHub
          </a>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="px-2.5 py-1 bg-white border border-[#111111] text-[#111111] font-bold shadow-[2px_2px_0px_#111111] hover:bg-[#FF1E27] hover:text-white transition-all"
          >
            TOP ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
