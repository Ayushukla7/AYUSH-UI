import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/projectsData';
import { playHoverSound } from '../audio/soundEffects';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070a] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
              AS
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                UI/UX Designer & 3D Visual Craftsman
              </span>
            </div>
          </div>

          {/* Copyright & Tag */}
          <div className="text-center text-xs text-slate-400 font-mono">
            Designed & Built with 3D Precision & Modern Web Architecture • {new Date().getFullYear()}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all hover:scale-105"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
