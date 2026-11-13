import React from 'react';
import { resumeData } from '../../data/projectsData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#05050c]/60">
      {/* Glow Blob */}
      <div className="blob-animate top-1/3 right-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Editorial Technical Label */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-mono text-purple-300">
            <span>[ 02 // CAREER JOURNEY ]</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-[-0.035em] leading-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-200">Experience</span> & Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-sans">
            Leading visual identities, community design initiatives, and production interfaces across 4 organizations.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resumeData.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="purple-glass-card p-6 sm:p-7 rounded-3xl space-y-4 relative flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Role Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-400 animate-pulse">
                          PRESENT
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-purple-400 block mt-1 font-semibold">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono pb-2 border-b border-white/5">
                  <span>📍</span>
                  <span>{exp.location}</span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 pt-1 font-sans">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-[13px] text-slate-300 leading-relaxed flex items-start gap-2.5">
                      <span className="text-purple-400 font-bold mt-0.5">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified Experience</span>
                <span className="text-purple-400 font-bold">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
