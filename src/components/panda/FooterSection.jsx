import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#141416] bg-[#FFFFFF] py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#52525B]">
        
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-2">
          <span className="font-pixel text-xl text-[#141416]">AYUSH SHUKLA</span>
          <span>•</span>
          <span className="font-bold text-[#141416]">UI/UX & Graphic Designer</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Center: Handwriting Note */}
        <div className="font-handwriting text-lg text-[#141416]">
          "designed with care & attention to the details" ☕
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors font-bold"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors font-bold"
          >
            GitHub
          </a>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="px-2.5 py-1 rounded bg-[#FEF08A] border border-[#141416] text-[#141416] font-bold shadow-[2px_2px_0px_#141416] hover:translate-y-[-1px] transition-transform"
          >
            BACK TO TOP ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
