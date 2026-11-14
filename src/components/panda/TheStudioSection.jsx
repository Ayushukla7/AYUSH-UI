import React from 'react';

export default function TheStudioSection() {
  const polaroids = [
    {
      img: "/assets/borcelle_coffee_promo.png",
      caption: "You can't compete with someone who is having fun",
      author: "- Tiago Forte",
      rotate: "-rotate-2 hover:rotate-0"
    },
    {
      img: "/assets/ayush_profile.png",
      caption: "He who is back again, never quit, quick to fail-",
      author: "- Lil Yachty",
      rotate: "rotate-1 hover:rotate-0"
    },
    {
      img: "/assets/technovation_landing.png",
      caption: "I know of no better life purpose than to perish in attempting the great and the impossible.",
      author: "- Friedrich Nietzsche",
      rotate: "rotate-2 hover:rotate-0"
    }
  ];

  return (
    <section id="the-stu" className="py-24 sm:py-32 relative overflow-hidden graph-paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading: "THE STU" (Exact Behance Screen 3 Title) */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-extended font-black text-6xl sm:text-8xl md:text-9xl text-[#111111] tracking-tight leading-none uppercase select-none">
            THE STU
          </h2>
          <span className="font-mono text-xs font-bold text-[#666666] tracking-widest uppercase block mt-3">
            // STUDIO RITUALS, WORKSPACES & MINDSET
          </span>
        </div>

        {/* 3 Polaroids with Handwritten Quotes (Exact Behance Recreation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center max-w-5xl mx-auto mb-20 sm:mb-28">
          {polaroids.map((item, idx) => (
            <div
              key={idx}
              className={`polaroid-frame transform ${item.rotate} transition-all duration-300 group`}
            >
              {/* Photo Area */}
              <div className="aspect-[4/3] bg-[#141416] rounded-sm overflow-hidden mb-4 border border-[#D6D6D6]">
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Handwritten Quote Annotation */}
              <div className="text-center px-2">
                <p className="font-handwriting text-base sm:text-lg text-[#111111] leading-snug">
                  "{item.caption}"
                </p>
                <span className="font-handwriting text-sm text-[#FF1E27] font-bold block mt-1">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* INFINITE MARQUEE TICKER (EXACT BEHANCE STRIP) */}
      <div className="w-full bg-[#111111] py-4 sm:py-5 border-y-2 border-[#111111] overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap text-white font-extended font-black text-sm sm:text-base tracking-[0.2em] uppercase">
          <span>LOGOS & MARKS</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>UI/UX & PRODUCT DESIGN</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>DESIGN SYSTEMS & FEEDS</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>LOGOS & MARKS</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>UI/UX & PRODUCT DESIGN</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
          <span>DESIGN SYSTEMS & FEEDS</span>
          <span className="text-[#FF1E27]">✦ ✦ ♣</span>
        </div>
      </div>
    </section>
  );
}
