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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Animated Blob */}
      <div className="blob-animate bottom-10 right-1/4 opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="mb-14 space-y-3">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest block font-bold">
            05. GET IN TOUCH
          </span>
          <h2 className="font-unbounded font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">Connect</span> & Create
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Have a project, role, or design collaboration in mind? Feel free to reach out anytime.
          </p>
        </div>

        {/* Contact Big Glass Card */}
        <div className="purple-glass-card p-8 sm:p-12 rounded-3xl space-y-8 relative shadow-2xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Direct Email */}
            <div className="bg-[#0c0c16] p-5 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all flex flex-col items-center justify-between group">
              <span className="text-2xl mb-2">✉️</span>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">EMAIL</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors truncate block max-w-[180px]"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="mt-3 text-[10px] font-mono text-purple-400 hover:underline"
              >
                {copiedEmail ? 'Copied! ✓' : 'Copy Email'}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c0c16] p-5 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all flex flex-col items-center justify-between group"
            >
              <span className="text-2xl mb-2">💼</span>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">LINKEDIN</span>
                <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                  /in/ayushshukla41
                </span>
              </div>
              <span className="mt-3 text-[10px] font-mono text-purple-400">Connect ↗</span>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c0c16] p-5 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all flex flex-col items-center justify-between group"
            >
              <span className="text-2xl mb-2">🐙</span>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">GITHUB</span>
                <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                  @Ayushukla7
                </span>
              </div>
              <span className="mt-3 text-[10px] font-mono text-purple-400">Repositories ↗</span>
            </a>

            {/* Resume Direct */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-purple-950/60 to-purple-900/30 p-5 rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all flex flex-col items-center justify-between group shadow-lg hover:scale-105"
            >
              <span className="text-2xl mb-2">📄</span>
              <div>
                <span className="text-[10px] font-mono text-purple-300 block uppercase font-bold">RESUME</span>
                <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                  Official Paper
                </span>
              </div>
              <span className="mt-3 text-[10px] font-mono text-purple-300 font-bold">Open Paper ↗</span>
            </a>

          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span>📞 +91 9369657005</span>
            <span>•</span>
            <span>📍 Noida / Delhi NCR, India</span>
            <span>•</span>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              Instagram @ayushs_4141 ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
