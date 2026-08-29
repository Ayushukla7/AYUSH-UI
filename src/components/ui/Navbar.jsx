import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { toggleAudioMute, getAudioMuteState, playHoverSound, playSuccessSound } from '../audio/soundEffects';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMuted(getAudioMuteState());

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleAudioMute();
    setIsMuted(newState);
  };

  const navLinks = [
    { label: "Carousels 3D", href: "#carousels" },
    { label: "Web & SaaS UI", href: "#web-ui" },
    { label: "All Projects", href: "#projects" },
    { label: "UX Process", href: "#process" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group"
            onMouseEnter={playHoverSound}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#090b14] rounded-[10px] flex items-center justify-center font-bold text-white font-mono text-base">
                AS
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  Ayush Shukla
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for Work" />
              </div>
              <span className="text-[11px] text-slate-400 font-mono block -mt-0.5">
                UI/UX & 3D Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121624]/70 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onMouseEnter={playHoverSound}
                className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons (Audio Toggle & Hire CTA) */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-full border transition-all duration-300 ${
                !isMuted 
                  ? 'bg-cyan-500/20 border-cyan-500/60 text-cyan-300 shadow-lg shadow-cyan-500/20' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
              title={isMuted ? "Enable UI Sound Effects" : "Mute Sound Effects"}
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Hire Me CTA Button */}
            <a
              href="#contact"
              onMouseEnter={playHoverSound}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 glass-panel rounded-2xl border border-white/15 space-y-2 animate-fadeIn">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 rounded-xl text-xs font-bold bg-cyan-400 text-black"
              >
                Hire Me / Let's Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
