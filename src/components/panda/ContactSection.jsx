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
            
            {/* Direct Email (Official Mail/Gmail Brand Pattern) */}
            <div className="bg-[#0c0c16] p-5 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all flex flex-col items-center justify-between group">
              <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-purple-400 transition-all shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">EMAIL</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors truncate block max-w-[180px]"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="mt-3 text-[10px] font-mono font-bold text-purple-400 hover:text-purple-300 hover:underline"
              >
                {copiedEmail ? 'Copied! ✓' : 'Copy Email'}
              </button>
            </div>

            {/* LinkedIn (Official LinkedIn Blue #0A66C2 Pattern) */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c0c16] p-5 rounded-2xl border border-white/5 hover:border-[#0A66C2]/60 transition-all flex flex-col items-center justify-between group hover:shadow-lg hover:shadow-[#0A66C2]/20"
            >
              <div className="w-11 h-11 rounded-xl bg-[#001D3D] border border-[#0A66C2]/40 text-[#0A66C2] flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-[#0A66C2] transition-all shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.94 0-1.7.76-1.7 1.7 0 .93.76 1.7 1.7 1.7.94 0 1.7-.77 1.7-1.7 0-.94-.76-1.7-1.7-1.7z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">LINKEDIN</span>
                <span className="text-xs font-bold text-white group-hover:text-[#0A66C2] transition-colors">
                  /in/ayushshukla41
                </span>
              </div>
              <span className="mt-3 text-[10px] font-mono font-bold text-[#0A66C2]">Connect ↗</span>
            </a>

            {/* GitHub (Official GitHub Invertocat Pattern) */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c0c16] p-5 rounded-2xl border border-white/5 hover:border-purple-400/60 transition-all flex flex-col items-center justify-between group hover:shadow-lg hover:shadow-purple-950/40"
            >
              <div className="w-11 h-11 rounded-xl bg-[#161B22] border border-white/20 text-white flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-purple-400 transition-all shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">GITHUB</span>
                <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                  @Ayushukla7
                </span>
              </div>
              <span className="mt-3 text-[10px] font-mono font-bold text-purple-400">Repositories ↗</span>
            </a>

            {/* Resume Direct (Official Paper PDF Vector Pattern) */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-purple-950/60 to-purple-900/30 p-5 rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all flex flex-col items-center justify-between group shadow-lg hover:scale-105"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 border border-purple-400 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-all shadow-md">
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
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
