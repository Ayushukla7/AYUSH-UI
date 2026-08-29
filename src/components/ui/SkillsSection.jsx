import React from 'react';
import { Sparkles, CheckCircle2, Wrench, Code2, Palette, Layers } from 'lucide-react';
import { personalInfo } from '../../data/projectsData';
import { playHoverSound } from '../audio/soundEffects';

const categoryIcons = {
  "UI/UX Design": Layers,
  "Visual & 3D Design": Palette,
  "Tools & Software": Wrench,
  "Frontend Knowledge": Code2
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            CORE TOOLKIT & CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-gradient-purple">Specializations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A versatile blend of product UX strategy, 3D visual storytelling, and design system precision.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.skills.map((skillGroup, idx) => {
            const Icon = categoryIcons[skillGroup.category] || Sparkles;
            return (
              <div 
                key={idx}
                onMouseEnter={playHoverSound}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {skillGroup.category}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {skillGroup.items.map((item, itemIdx) => (
                      <li 
                        key={itemIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
