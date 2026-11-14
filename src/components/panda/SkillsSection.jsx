import React from 'react';

export default function SkillsSection() {
  const tools = [
    {
      name: "Figma",
      role: "UI/UX & Design Systems",
      badge: "Primary Driver",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
      description: "Auto-layout, responsive component libraries, variable tokens, interactive clickable prototypes, and developer handoff specs for SaaS dashboards and mobile apps.",
      tags: ["Auto-Layout", "Design Tokens", "Wireframing", "Component Libraries", "Clickable Prototypes"]
    },
    {
      name: "Adobe Photoshop",
      role: "Key Visuals & Photo Manipulation",
      badge: "Raster Art",
      logo: (
        <div className="w-10 h-10 rounded bg-[#001E36] border-2 border-[#111111] flex items-center justify-center text-[#31A8FF] font-black text-xl font-mono shadow-[2px_2px_0px_#111111]">
          Ps
        </div>
      ),
      description: "High-contrast commercial advertising visuals, realistic lighting and reflections, mood grading, product compositions, and event announcement posters.",
      tags: ["Color Grading", "Lighting & Shadows", "Photo Retouching", "Event Posters"]
    },
    {
      name: "Adobe Illustrator",
      role: "Vector Graphics & Apparel Design",
      badge: "Vector Master",
      logo: (
        <div className="w-10 h-10 rounded bg-[#330000] border-2 border-[#111111] flex items-center justify-center text-[#FF9A00] font-black text-xl font-mono shadow-[2px_2px_0px_#111111]">
          Ai
        </div>
      ),
      description: "Precision vector logo marks, scalable typography lockups, brand iconography, custom apparel back prints, and technical merchandise layouts.",
      tags: ["Vector Badges", "Apparel Prints", "Brand Marks", "Iconography"]
    },
    {
      name: "Adobe After Effects",
      role: "Motion Graphics & Micro-Animations",
      badge: "Motion Visuals",
      logo: (
        <div className="w-10 h-10 rounded bg-[#1F004D] border-2 border-[#111111] flex items-center justify-center text-[#9999FF] font-black text-xl font-mono shadow-[2px_2px_0px_#111111]">
          Ae
        </div>
      ),
      description: "Kinetic typography, UI micro-interaction teaser loops, social reveal animations, and technical video key visuals.",
      tags: ["UI Loops", "Kinetic Typography", "Event Teasers", "Keyframing"]
    },
    {
      name: "React.js & Tailwind",
      role: "Frontend Component Engineering",
      badge: "Production Code",
      logo: (
        <div className="w-10 h-10 rounded bg-[#00212B] border-2 border-[#111111] flex items-center justify-center text-[#61DAFB] shadow-[2px_2px_0px_#111111]">
          <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.8">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
          </svg>
        </div>
      ),
      description: "Translating high-fidelity Figma components into modular, production-ready React applications with reusable props, design tokens, and responsive state.",
      tags: ["Reusable Components", "Vite / Next.js", "Hooks & State", "Vercel Deployments"]
    },
    {
      name: "Canva Pro",
      role: "Rapid Social & Community Creatives",
      badge: "Fast Turnaround",
      logo: (
        <div className="w-10 h-10 rounded bg-[#00C4CC] border-2 border-[#111111] flex items-center justify-center text-white font-black text-lg font-sans shadow-[2px_2px_0px_#111111]">
          C
        </div>
      ),
      description: "Fast-turnaround event banners, social story cards, speaker posters, and technical community visual communication assets.",
      tags: ["Social Creatives", "Event Banners", "Rapid Turnaround", "Community Assets"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden graph-paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-6 border-b-2 border-[#111111] mb-12 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF1E27]" />
              <span className="font-mono text-xs font-bold text-[#666666] tracking-widest uppercase">
                HARD SKILLS & ARSENAL
              </span>
            </div>
            <h2 className="font-extended font-black text-4xl sm:text-6xl text-[#111111] tracking-tight uppercase leading-none">
              TECHNICAL TOOLBOX
            </h2>
          </div>

          <div className="font-mono text-xs font-bold text-[#111111] bg-white border-2 border-[#111111] px-3 py-1 shadow-[2px_2px_0px_#111111]">
            6 PRIMARY CREATIVE SUITES
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#111111] p-6 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-lg hover:border-[#FF1E27] transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-4">
                  <div className="flex items-center gap-3">
                    {tool.logo}
                    <div>
                      <h3 className="font-extended font-bold text-lg text-[#111111] leading-none group-hover:text-[#FF1E27] transition-colors">
                        {tool.name}
                      </h3>
                      <span className="font-mono text-[10px] text-[#666666] font-bold block mt-1">
                        {tool.role}
                      </span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 bg-[#111111] text-white font-mono text-[9px] font-bold uppercase">
                    {tool.badge}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#444444] leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="pt-3 border-t border-[#111111]/10 flex flex-wrap gap-1.5">
                {tool.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-[#ECECEC] border border-[#111111] font-mono text-[10px] font-bold text-[#111111]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
