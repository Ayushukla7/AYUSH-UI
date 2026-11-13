import React, { useState } from 'react';
import { portfolioSections } from '../../data/projectsData';

export default function ProjectsSection({ onOpenImage }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'carousels', label: 'Social Carousels' },
    { id: 'web', label: 'UI/UX & Web Platforms' },
    { id: 'branding', label: 'Branding & Apparel' }
  ];

  const filteredProjects = portfolioSections.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'carousels') return project.slides && project.slides.length > 0;
    if (activeFilter === 'web') return project.id === 'student-erp' || project.id === 'technovation-web';
    if (activeFilter === 'branding') return project.id !== 'student-erp' && project.id !== 'technovation-web' && !project.slides;
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Glow Blob */}
      <div className="blob-animate top-1/2 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Editorial Technical Label */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-mono text-purple-300">
            <span>[ 03 // PORTFOLIO SHOWCASE ]</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-[-0.035em] leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-200">Works</span> & Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-sans">
            Production-grade design deliverables across Smart India Hackathon SaaS platforms, high-engagement social carousels, and streetwear merchandise.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-display font-semibold transition-all ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg shadow-purple-900/50 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="purple-glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between group overflow-hidden border border-white/10"
            >
              <div>
                {/* Meta Top Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 bg-purple-950/70 px-3 py-0.5 rounded-full border border-purple-500/30 font-bold">
                    {project.category}
                  </span>
                  {project.type && (
                    <span className="text-[10px] font-mono text-slate-400">
                      {project.slides ? `${project.slides.length} Slides` : 'Featured'}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-purple-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3 font-sans">
                  {project.description}
                </p>

                {/* Main Media Preview Box */}
                <div
                  onClick={() => onOpenImage(project.fullImage, project.title)}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a14] border border-white/10 p-2 cursor-pointer relative group/img flex items-center justify-center"
                >
                  <img
                    src={project.coverImage || project.fullImage}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 text-[#030307] font-display font-bold text-xs shadow-lg">
                      View Full Preview ↗
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => onOpenImage(project.fullImage, project.title)}
                  className="text-purple-400 hover:text-purple-300 font-bold transition-colors flex items-center gap-1 font-display"
                >
                  <span>Inspect Details</span>
                  <span>→</span>
                </button>
                <span className="text-[10px] text-slate-400">Ayush Shukla</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
