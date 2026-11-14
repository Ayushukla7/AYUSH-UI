import React from 'react';

export default function SkillsSection() {
  const tools = [
    {
      name: "Figma",
      role: "UI/UX & Design Systems",
      badge: "Primary Daily Driver",
      badgeColor: "bg-[#BBF7D0] text-[#141416]",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
      description: "Auto-layout, responsive component libraries, variable tokens, interactive clickable prototypes, and developer handoff specs for SaaS and mobile apps.",
      tags: ["Auto-Layout", "Design Tokens", "Wireframing", "Component Libraries", "Clickable Prototypes"]
    },
    {
      name: "Adobe Photoshop",
      role: "Key Visuals & Photo Manipulation",
      badge: "Advanced Raster",
      badgeColor: "bg-[#BAE6FD] text-[#141416]",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#001E36] border-2 border-[#141416] flex items-center justify-center text-[#31A8FF] font-black text-xl font-mono shadow-[2px_2px_0px_#141416]">
          Ps
        </div>
      ),
      description: "High-contrast commercial advertising visuals, realistic lighting and reflections, mood grading, product compositions, and event announcement posters.",
      tags: ["Color Grading", "Lighting & Shadows", "Photo Retouching", "Event Posters"]
    },
    {
      name: "Adobe Illustrator",
      role: "Vector Graphics & Apparel Design",
      badge: "Precision Vector",
      badgeColor: "bg-[#FED7AA] text-[#141416]",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#330000] border-2 border-[#141416] flex items-center justify-center text-[#FF9A00] font-black text-xl font-mono shadow-[2px_2px_0px_#141416]">
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
      badgeColor: "bg-[#DDD6FE] text-[#141416]",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#1F004D] border-2 border-[#141416] flex items-center justify-center text-[#9999FF] font-black text-xl font-mono shadow-[2px_2px_0px_#141416]">
          Ae
        </div>
      ),
      description: "Kinetic typography, UI micro-interaction teaser loops, social reveal animations, and technical video key visuals.",
      tags: ["UI Loops", "Kinetic Typography", "Event Teasers", "Keyframing"]
    },
    {
      name: "React.js",
      role: "Frontend Component Implementation",
      badge: "Production Code",
      badgeColor: "bg-[#FEF08A] text-[#141416]",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#00212B] border-2 border-[#141416] flex items-center justify-center text-[#61DAFB] shadow-[2px_2px_0px_#141416]">
          <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.8">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
          </svg>
        </div>
      ),
      description: "Translating high-fidelity Figma components into modular, production-ready React applications with reusable props and responsive state management.",
      tags: ["Reusable Components", "Vite / Next.js", "Hooks & State", "Vercel Deployments"]
    },
    {
      name: "Tailwind CSS",
      role: "Utility-First Styling & Design Tokens",
      badge: "Design Tokens",
      badgeColor: "bg-[#BBF7D0] text-[#141416]",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#001C24] border-2 border-[#141416] flex items-center justify-center text-[#38BDF8] shadow-[2px_2px_0px_#141416]">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        </div>
      ),
      description: "Building responsive grids, brutalist borders, custom animations, and atomic color palettes matching production design systems.",
      tags: ["Utility Tokens", "Responsive Layouts", "Dark/Light Modes", "Custom Animations"]
    },
    {
      name: "Canva Pro",
      role: "Rapid Social & Community Creatives",
      badge: "Fast Turnaround",
      badgeColor: "bg-[#FED7AA] text-[#141416]",
      logo: (
        <div className="w-10 h-10 rounded-xl bg-[#00C4CC] border-2 border-[#141416] flex items-center justify-center text-white font-black text-lg font-sans shadow-[2px_2px_0px_#141416]">
          C
        </div>
      ),
      description: "Fast-turnaround event banners, social story cards, speaker posters, and community engagement graphics for Open Source Connect.",
      tags: ["Social Creatives", "Event Banners", "Rapid Turnaround", "Community Assets"]
    }
  ];

  const methodologies = [
    { title: "UI/UX Architecture", desc: "User journeys, task flows, wireframes, and high-fidelity prototypes in Figma.", color: "bg-[#FEF08A]", rotate: "-rotate-1" },
    { title: "Visual & Brand Systems", desc: "Typography hierarchies, color scales, iconography sets, and merchandise layouts.", color: "bg-[#BBF7D0]", rotate: "rotate-1" },
    { title: "Social Storytelling", desc: "Multi-slide educational carousels with continuous pano-grid composition.", color: "bg-[#FED7AA]", rotate: "-rotate-2" },
    { title: "Frontend Integration", desc: "Implementing interactive UI into modern React, Tailwind CSS, and Vite stacks.", color: "bg-[#BAE6FD]", rotate: "rotate-2" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* GIANT PIXEL SECTION TITLE (MATCHING SCREEN 8) */}
        <div className="text-center mb-10">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#52525B] -rotate-1 inline-block">
            crafted with precision
          </span>
          <h2 className="font-pixel text-7xl sm:text-9xl text-[#141416] tracking-tight -mt-1 leading-none select-none">
            TECHNICAL TOOLBOX
          </h2>
        </div>

        {/* TOOLS GRID STYLED AS PHYSICAL LABEL STICKERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border-2 border-[#141416] rounded-2xl p-5 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-lg transition-all"
            >
              <div>
                {/* Top Strip with Logo and Status Pill */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#141416]/10 mb-3">
                  <div className="flex items-center gap-3">
                    {tool.logo}
                    <div>
                      <h3 className="font-pixel text-2xl text-[#141416] leading-none">
                        {tool.name}
                      </h3>
                      <span className="font-mono text-[10px] text-[#52525B] font-bold block mt-0.5">
                        {tool.role}
                      </span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded border border-[#141416] font-mono text-[10px] font-bold ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-[#52525B] leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="pt-3 border-t-2 border-[#141416]/10 flex flex-wrap gap-1.5">
                {tool.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#141416] font-mono text-[10px] font-semibold text-[#141416]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* METHODOLOGIES TRAY STYLED AS PASTEL POST-IT NOTES */}
        <div className="bg-[#FAF7F0] border-2 border-[#141416] rounded-3xl p-6 sm:p-8 shadow-brutal">
          <div className="flex items-center justify-between pb-4 border-b-2 border-[#141416]/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#141416]" />
              <span className="font-mono text-xs font-bold text-[#141416] tracking-wider uppercase">
                DESIGN DISCIPLINES & METHODOLOGIES
              </span>
            </div>
            <span className="font-handwriting text-xl text-[#52525B] -rotate-1">
              "engineering rigor meets human empathy"
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodologies.map((m, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 border-[#141416] shadow-brutal ${m.color} ${m.rotate} hover:rotate-0 transition-transform`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#141416]/60">0{idx + 1}</span>
                  <span className="text-xs">✦</span>
                </div>
                <h4 className="font-pixel text-xl sm:text-2xl text-[#141416] leading-none mb-2">
                  {m.title}
                </h4>
                <p className="font-sans text-xs text-[#141416]/80 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
