import React, { useState } from 'react';
import { portfolioSections } from '../../data/projectsData';

export default function ProjectsSection({ onOpenImage }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    { id: 'all', label: 'ALL WORKS' },
    { id: 'uiux', label: 'UI/UX & SAAS' },
    { id: 'carousels', label: 'SOCIAL FEEDS' },
    { id: 'brand', label: 'BRAND & APPAREL' },
  ];

  const filteredProjects = portfolioSections.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'uiux') return project.id === 'student-erp' || project.id === 'technovation-web';
    if (activeFilter === 'carousels') return !!project.slides;
    if (activeFilter === 'brand') return project.id !== 'student-erp' && project.id !== 'technovation-web' && !project.slides;
    return true;
  });

  const aiProject = portfolioSections.find((p) => p.id === 'ai-dark-side');

  return (
    <section id="projects" className="py-20 relative overflow-hidden graph-paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-6 border-b-2 border-[#111111] mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF1E27]" />
              <span className="font-mono text-xs font-bold text-[#666666] tracking-widest uppercase">
                PORTFOLIO CASE STUDIES
              </span>
            </div>
            <h2 className="font-extended font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tight leading-none uppercase">
              SELECTED WORKS
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-1.5 rounded font-mono text-xs font-bold transition-all border-2 border-[#111111] ${
                  activeFilter === cat.id
                    ? 'bg-[#111111] text-white shadow-brutal-red'
                    : 'bg-white text-[#111111] hover:bg-[#FF1E27] hover:text-white hover:border-[#FF1E27]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 1. HERO CASE STUDY: STUDENT ERP (SAAS & SIH PODIUM) */}
        {/* ============================================================ */}
        {(activeFilter === 'all' || activeFilter === 'uiux') && (
          <div className="bg-white border-2 border-[#111111] shadow-brutal-lg p-6 sm:p-10 mb-14 relative group">
            
            {/* Header Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-[#111111]/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#FF1E27] text-white font-mono text-[11px] font-bold">
                  ★ SIH PODIUM WINNER
                </span>
                <span className="font-mono text-xs font-bold text-[#111111] uppercase">
                  PROJECT 01 // SAAS ACADEMIC INTELLIGENCE
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#666666]">
                2024–2026 PRODUCTION
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text & Stats */}
              <div className="lg:col-span-5 space-y-5">
                <h3 className="font-extended font-black text-3xl sm:text-4xl text-[#111111] leading-tight uppercase">
                  StudentERP.io
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Designed for Smart India Hackathon. A comprehensive SaaS academic management portal featuring attendance analytics, batch performance charts, project pipelines, and examination timelines.
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#ECECEC] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
                    <span className="font-extended font-black text-2xl text-[#FF1E27] block">47%</span>
                    <span className="font-mono text-[10px] font-bold text-[#111111] uppercase">Faster Task Completion</span>
                  </div>
                  <div className="p-3 bg-[#ECECEC] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
                    <span className="font-extended font-black text-2xl text-[#111111] block">-55%</span>
                    <span className="font-mono text-[10px] font-bold text-[#111111] uppercase">Manual Admin Overhead</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenImage('/assets/student_erp_dashboard.png', 'StudentERP.io Dashboard')}
                    className="px-5 py-2.5 rounded bg-[#111111] text-white font-mono text-xs font-bold border-2 border-[#111111] shadow-brutal hover:bg-[#FF1E27] hover:border-[#FF1E27] transition-all flex items-center gap-2"
                  >
                    <span>ENLARGE DASHBOARD SPECS</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>

              {/* Screenshot with Bounding Box Effect */}
              <div
                onClick={() => onOpenImage('/assets/student_erp_dashboard.png', 'StudentERP.io Dashboard')}
                className="lg:col-span-7 ps-bounding-box p-1.5 bg-[#0e1626] cursor-pointer group/img overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/student_erp_dashboard.png"
                    alt="StudentERP Dashboard"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-white/80 px-2 py-1">
                  <span>STUDENTERP_V2_FIGMA_SPEC</span>
                  <span className="text-[#FF1E27]">CLICK TO EXPAND ↗</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* 2. SOCIAL CAROUSEL: AI'S DARK SIDE (HACKING 2.0) */}
        {/* ============================================================ */}
        {(activeFilter === 'all' || activeFilter === 'carousels') && aiProject && (
          <div className="bg-[#111111] text-white border-2 border-[#111111] shadow-brutal-lg p-6 sm:p-10 mb-14 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-white/20 mb-6 gap-3">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#FF1E27] uppercase tracking-wider block">
                  6-SLIDE CONTINUOUS FEED STORYTELLING
                </span>
                <h3 className="font-extended font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
                  AI'S DARK SIDE (HACKING 2.0)
                </h3>
              </div>

              <button
                onClick={() => onOpenImage(aiProject.fullImage, aiProject.title)}
                className="px-4 py-2 rounded bg-[#FF1E27] text-white font-mono text-xs font-bold border-2 border-white shadow-[2px_2px_0px_white] hover:bg-white hover:text-black hover:border-black transition-all flex items-center gap-1.5"
              >
                <span>EXPAND FULL STRIP</span>
                <span>↗</span>
              </button>
            </div>

            {/* Slide previews */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {aiProject.slides?.map((slide, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveSlide(idx);
                    onOpenImage(slide.img, `Slide ${slide.num}: ${slide.title}`);
                  }}
                  className={`bg-black p-2 border-2 cursor-pointer transition-all ${
                    activeSlide === idx
                      ? 'border-[#FF1E27] shadow-[3px_3px_0px_#FF1E27] -translate-y-1'
                      : 'border-white/20 hover:border-white shadow-sm'
                  }`}
                >
                  <div className="aspect-[4/5] overflow-hidden mb-2">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-mono text-[10px] text-white flex justify-between font-bold">
                    <span>SLIDE {slide.num}</span>
                    <span className="text-[#FF1E27]">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 3. GRID OF ALL OTHER DELIVERABLES & BRAND MARKS */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => p.id !== 'student-erp' && p.id !== 'ai-dark-side')
            .map((project, idx) => (
              <div
                key={project.id || idx}
                className="bg-white border-2 border-[#111111] p-5 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-lg hover:border-[#FF1E27] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#111111]/10">
                    <span className="font-mono text-[10px] font-bold text-[#FF1E27] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#111111]">
                      0{idx + 3}
                    </span>
                  </div>

                  <h4 className="font-extended font-black text-xl sm:text-2xl text-[#111111] leading-tight mb-2 group-hover:text-[#FF1E27] transition-colors uppercase">
                    {project.title}
                  </h4>

                  <p className="font-sans text-xs text-[#555555] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Visual Preview */}
                  <div
                    onClick={() => onOpenImage(project.fullImage, project.title)}
                    className="aspect-[4/3] bg-[#0c121e] border-2 border-[#111111] cursor-pointer overflow-hidden relative group/img mb-4"
                  >
                    <img
                      src={project.coverImage || project.fullImage}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-[#111111]/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#666666]">
                    DELIVERABLE #{idx + 3}
                  </span>
                  <button
                    onClick={() => onOpenImage(project.fullImage, project.title)}
                    className="px-3 py-1 bg-[#111111] text-white font-mono text-[11px] font-bold hover:bg-[#FF1E27] transition-colors"
                  >
                    PREVIEW ↗
                  </button>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
