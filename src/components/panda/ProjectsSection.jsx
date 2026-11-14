import React, { useState } from 'react';
import { portfolioSections } from '../../data/projectsData';

export default function ProjectsSection({ onOpenImage }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'uiux', label: 'UI/UX & SaaS' },
    { id: 'carousels', label: 'Social Carousels' },
    { id: 'brand', label: 'Brand & Apparel' },
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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* GIANT PIXEL SECTION TITLE (MATCHING SCREEN 5) */}
        <div className="text-center mb-8">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#52525B] -rotate-1 inline-block">
            selected case studies & deliverables
          </span>
          <h2 className="font-pixel text-7xl sm:text-9xl text-[#141416] tracking-tight -mt-1 leading-none select-none">
            FEATURED WORKS
          </h2>
        </div>

        {/* Filter Pills (Stationery Tape Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-tight border-2 border-[#141416] transition-all ${
                activeFilter === cat.id
                  ? 'bg-[#FEF08A] text-[#141416] shadow-brutal scale-105 -rotate-1'
                  : 'bg-white text-[#52525B] hover:text-[#141416] hover:bg-[#FAF7F0] shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ============================================================ */}
        {/* 1. HERO CASE STUDY: STUDENT ERP (MATCHING SCREEN 7 LAYOUT) */}
        {/* ============================================================ */}
        {(activeFilter === 'all' || activeFilter === 'uiux') && (
          <div className="bg-[#FFFFFF] border-2 border-[#141416] rounded-3xl p-6 sm:p-10 shadow-brutal-lg mb-14 relative">
            
            {/* Top Bar with Date & Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-[#141416]/10 mb-8">
              <div className="flex items-center gap-2">
                <span className="bg-[#FEF08A] border-2 border-[#141416] px-3 py-1 rounded font-mono text-xs font-bold shadow-[2px_2px_0px_#141416]">
                  ★ SIH 2024 PODIUM
                </span>
                <span className="font-mono text-xs font-bold text-[#141416] uppercase">
                  PROJECT 01 // ACADEMIC SAAS
                </span>
              </div>

              <div className="font-handwriting text-xl text-[#52525B] -rotate-1">
                "Smart India Hackathon Deliverable"
              </div>
            </div>

            {/* Giant Pixel Project Name */}
            <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-2 mb-6">
              <h3 className="font-pixel text-5xl sm:text-7xl text-[#141416] tracking-tight leading-none">
                STUDENTERP.IO
              </h3>
              <span className="font-mono text-xs font-bold text-[#52525B] uppercase">
                COMPREHENSIVE ACADEMIC MANAGEMENT PLATFORM
              </span>
            </div>

            {/* Sticky Notes Metadata Grid (Screen 7 Recreation) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-[#DDD6FE] border-2 border-[#141416] p-3 rounded-lg shadow-[2px_2px_0px_#141416] -rotate-1">
                <span className="text-[10px] font-mono font-bold uppercase text-[#141416]/70 block">ROLE</span>
                <span className="font-mono text-xs font-bold text-[#141416]">Lead UI/UX Designer</span>
              </div>
              <div className="bg-[#FEF08A] border-2 border-[#141416] p-3 rounded-lg shadow-[2px_2px_0px_#141416] rotate-1">
                <span className="text-[10px] font-mono font-bold uppercase text-[#141416]/70 block">TIMELINE</span>
                <span className="font-mono text-xs font-bold text-[#141416]">4 Months Build</span>
              </div>
              <div className="bg-[#BBF7D0] border-2 border-[#141416] p-3 rounded-lg shadow-[2px_2px_0px_#141416] -rotate-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[#141416]/70 block">IMPACT</span>
                <span className="font-mono text-xs font-bold text-[#141416]">47% Faster Workflow</span>
              </div>
              <div className="bg-[#FBCFE8] border-2 border-[#141416] p-3 rounded-lg shadow-[2px_2px_0px_#141416] rotate-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[#141416]/70 block">TEAM</span>
                <span className="font-mono text-xs font-bold text-[#141416]">4 Engineers & Designers</span>
              </div>
            </div>

            {/* Project Screenshot with Washi Tape Corners */}
            <div 
              onClick={() => onOpenImage('/assets/student_erp_dashboard.png', 'StudentERP.io SaaS Dashboard')}
              className="relative cursor-pointer group bg-[#FAF7F0] border-2 border-[#141416] rounded-2xl p-3 sm:p-4 shadow-brutal overflow-hidden"
            >
              {/* Scotch tape on top corners */}
              <div className="absolute top-2 left-6 w-16 h-5 bg-white/80 border-l border-r border-dashed border-[#141416]/30 -rotate-6 z-20 shadow-sm" />
              <div className="absolute top-2 right-6 w-16 h-5 bg-white/80 border-l border-r border-dashed border-[#141416]/30 rotate-6 z-20 shadow-sm" />

              <div className="aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden bg-[#0c1626] border border-[#141416]/20 flex items-center justify-center">
                <img
                  src="/assets/student_erp_dashboard.png"
                  alt="StudentERP Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#52525B]">
                <span>CLICK TO ENLARGE PREVIEW ↗</span>
                <span className="font-bold text-[#141416]">STUDENTERP_DASHBOARD_V2.PNG</span>
              </div>
            </div>

            {/* Results Section with Sticky Metric Notes (Matching Screen 7) */}
            <div className="mt-8 pt-6 border-t-2 border-[#141416]/10">
              <span className="font-handwriting text-2xl text-[#141416] -rotate-1 inline-block mb-3">
                the results ✦
              </span>

              <p className="font-sans text-sm text-[#52525B] mb-5 max-w-2xl leading-relaxed">
                The platform streamlined faculty attendance input, reduced manual verification overhead by 55%, and introduced an intuitive student dashboard featuring real-time attendance analytics and examination timelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#BAE6FD] border-2 border-[#141416] p-4 rounded-xl shadow-brutal -rotate-1">
                  <span className="font-pixel text-4xl sm:text-5xl text-[#141416] block leading-none">
                    47%
                  </span>
                  <span className="font-mono text-xs font-bold text-[#141416] uppercase mt-1 block">
                    TASK EFFICIENCY BOOST
                  </span>
                  <span className="font-sans text-[11px] text-[#141416]/80 block">
                    Over legacy paper logbooks
                  </span>
                </div>

                <div className="bg-[#FEF08A] border-2 border-[#141416] p-4 rounded-xl shadow-brutal rotate-1">
                  <span className="font-pixel text-4xl sm:text-5xl text-[#141416] block leading-none">
                    -55%
                  </span>
                  <span className="font-mono text-xs font-bold text-[#141416] uppercase mt-1 block">
                    ADMIN OVERHEAD
                  </span>
                  <span className="font-sans text-[11px] text-[#141416]/80 block">
                    Automated batch reports
                  </span>
                </div>

                <div className="bg-[#BBF7D0] border-2 border-[#141416] p-4 rounded-xl shadow-brutal -rotate-1">
                  <span className="font-pixel text-4xl sm:text-5xl text-[#141416] block leading-none">
                    TOP 3
                  </span>
                  <span className="font-mono text-xs font-bold text-[#141416] uppercase mt-1 block">
                    NATIONAL PODIUM
                  </span>
                  <span className="font-sans text-[11px] text-[#141416]/80 block">
                    Smart India Hackathon track
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* 2. FOLDER CUTOUT CAROUSEL: AI'S DARK SIDE (SCREEN 6 RECREATION) */}
        {/* ============================================================ */}
        {(activeFilter === 'all' || activeFilter === 'carousels') && aiProject && (
          <div className="mb-14">
            {/* Folder Header Tabs */}
            <div className="flex items-end gap-2 px-4 -mb-0.5 relative z-20">
              <div className="bg-[#141416] text-white px-5 py-2.5 rounded-t-xl font-mono text-xs font-bold border-2 border-b-0 border-[#141416] flex items-center gap-2">
                <span>✦ PROJECT 02</span>
                <span className="text-[#FEF08A]">AI'S DARK SIDE</span>
              </div>
              <div className="bg-[#FEF08A] text-[#141416] px-4 py-2 rounded-t-xl font-mono text-xs font-bold border-2 border-b-0 border-[#141416]">
                6-SLIDE CAROUSEL
              </div>
            </div>

            {/* Folder Body Container */}
            <div className="bg-[#141416] text-[#F8F6F0] border-2 border-[#141416] rounded-2xl rounded-tl-none p-6 sm:p-10 shadow-brutal-lg">
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                <div>
                  <span className="font-handwriting text-2xl text-[#FEF08A] -rotate-1 inline-block">
                    cybersecurity visual storytelling
                  </span>
                  <h3 className="font-pixel text-4xl sm:text-6xl text-white tracking-tight -mt-1">
                    AI'S DARK SIDE (HACKING 2.0)
                  </h3>
                </div>

                <button
                  onClick={() => onOpenImage(aiProject.fullImage, aiProject.title)}
                  className="px-4 py-2 rounded-xl bg-[#FEF08A] text-[#141416] font-mono text-xs font-bold border-2 border-[#FEF08A] shadow-[2px_2px_0px_white] hover:bg-white transition-all flex items-center gap-1.5"
                >
                  <span>FULL CAROUSEL STRIP</span>
                  <span>↗</span>
                </button>
              </div>

              {/* Interactive Carousel Slides Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {aiProject.slides?.map((slide, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveSlide(idx);
                      onOpenImage(slide.img, `Slide ${slide.num}: ${slide.title}`);
                    }}
                    className={`bg-white p-2 rounded-xl border-2 cursor-pointer transition-all ${
                      activeSlide === idx
                        ? 'border-[#FEF08A] shadow-[3px_3px_0px_#FEF08A] -translate-y-1'
                        : 'border-[#141416] hover:border-white shadow-sm'
                    }`}
                  >
                    <div className="aspect-[4/5] rounded-lg overflow-hidden bg-black mb-2 border border-black/20">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#141416] font-bold">
                      <span>SLIDE {slide.num}</span>
                      <span className="text-[#52525B] truncate max-w-[70px]">{slide.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>✦ Click any slide to expand full-resolution view</span>
                <span className="text-[#FEF08A]">Viral LinkedIn Feed Asset • 1.5K+ Impressions</span>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 3. SCRAPBOOK POLAROID & CARD GRID FOR ALL OTHER WORKS */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => p.id !== 'student-erp' && p.id !== 'ai-dark-side')
            .map((project, idx) => (
              <div
                key={project.id || idx}
                className="bg-[#FFFFFF] border-2 border-[#141416] rounded-2xl p-5 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-lg transition-all"
              >
                <div>
                  {/* Top Bar with Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#FAF7F0] border border-[#141416] px-2.5 py-0.5 rounded text-[#141416]">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#52525B]">
                      #{idx + 3}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h4 className="font-pixel text-2xl sm:text-3xl text-[#141416] leading-none mb-2 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-xs text-[#52525B] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Preview Image with Scotch Tape */}
                  <div
                    onClick={() => onOpenImage(project.fullImage, project.title)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7F0] border-2 border-[#141416] p-1.5 cursor-pointer group/img flex items-center justify-center mb-4"
                  >
                    {/* Scotch tape on top */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/80 border-l border-r border-dashed border-[#141416]/30 rotate-1 z-20 shadow-sm" />

                    <img
                      src={project.coverImage || project.fullImage}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2 border-t-2 border-[#141416]/10 flex items-center justify-between">
                  <span className="font-handwriting text-lg text-[#141416]">
                    "handcrafted visual"
                  </span>
                  <button
                    onClick={() => onOpenImage(project.fullImage, project.title)}
                    className="px-3 py-1 rounded bg-[#FEF08A] border-2 border-[#141416] text-[#141416] font-mono text-[11px] font-bold shadow-[2px_2px_0px_#141416] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform"
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
