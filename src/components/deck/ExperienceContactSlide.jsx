import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function ExperienceContactSlide() {
  return (
    <div className="dark-deck-slide rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <h2 className="title-impact text-3xl sm:text-4xl text-white">
            EXPERIENCE & CREDENTIALS
          </h2>
          <span className="text-xs font-mono text-[#ffaa00]">PROFILE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Experience Column */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#ffaa00] block font-bold">
              DESIGN EXPERIENCE & CREDENTIALS
            </span>

            {personalInfo.experience.map((exp, idx) => (
              <div key={idx} className="bg-black/30 p-3.5 rounded-lg border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                </div>
                <span className="text-xs font-mono text-[#ffaa00] block">
                  {exp.organization}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connect & Social Profiles */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#ffaa00] block font-bold">
              DIRECT CONTACT & PROFILES
            </span>

            <div className="bg-black/30 p-4 rounded-lg border border-white/10 space-y-3 text-xs">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">EMAIL</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-bold text-[#ffaa00] font-mono hover:underline block"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono text-slate-400 block uppercase mb-2">PROFILES</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-white/5 border border-white/10 hover:border-[#ffaa00] text-center text-white hover:text-[#ffaa00] font-mono transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-white/5 border border-white/10 hover:border-[#ffaa00] text-center text-white hover:text-[#ffaa00] font-mono transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-white/5 border border-white/10 hover:border-[#ffaa00] text-center text-white hover:text-[#ffaa00] font-mono transition-colors"
                  >
                    Instagram ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Core Design Tools */}
            <div className="pt-1">
              <span className="text-[10px] font-mono text-slate-400 block uppercase mb-1.5 font-bold">
                KEY SPECIALIZATIONS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["UI/UX Architecture", "Smart India Hackathon (SIH)", "Design Systems", "Apparel Design", "Letter of Recommendation"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-[11px] font-mono text-slate-400">
        <span>Ayush Shukla • UI/UX & Graphic Designer</span>
        <span className="text-[#ffaa00]">Verified Profile</span>
      </div>
    </div>
  );
}
