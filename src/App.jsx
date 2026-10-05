import React, { useState } from 'react';
import HeaderNav from './components/ui/HeaderNav';
import Card3DTilt from './components/3d/Card3DTilt';
import IntroSlide from './components/deck/IntroSlide';
import AchievementsSlide from './components/deck/AchievementsSlide';
import SocialMediaSlide from './components/deck/SocialMediaSlide';
import WebUiSlide from './components/deck/WebUiSlide';
import BrandingApparelSlide from './components/deck/BrandingApparelSlide';
import SkillsSlide from './components/deck/SkillsSlide';
import ResumeSlide from './components/deck/ResumeSlide';
import ThankYouSlide from './components/deck/ThankYouSlide';
import SimpleLightbox from './components/ui/SimpleLightbox';

import { portfolioSections, personalInfo } from './data/projectsData';

export default function App() {
  const [lightboxData, setLightboxData] = useState({ isOpen: false, src: '', title: '' });

  const handleOpenImage = (src, title) => {
    setLightboxData({ isOpen: true, src, title });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ isOpen: false, src: '', title: '' });
  };

  // Find individual project items
  const aiDarkSide = portfolioSections.find(p => p.id === 'ai-dark-side');
  const biryaniData = portfolioSections.find(p => p.id === 'biryani-data');
  const studentErp = portfolioSections.find(p => p.id === 'student-erp');
  const technovationWeb = portfolioSections.find(p => p.id === 'technovation-web');
  const teamTechnoMerch = portfolioSections.find(p => p.id === 'team-techno-merch');
  const speakerSession = portfolioSections.find(p => p.id === 'speaker-session');
  const borcelleCoffee = portfolioSections.find(p => p.id === 'borcelle-coffee');
  const outfitOfTheDay = portfolioSections.find(p => p.id === 'outfit-of-the-day');
  const quantumWorkshop = portfolioSections.find(p => p.id === 'quantum-workshop');

  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col justify-between relative selection:bg-[#ffaa00] selection:text-black">
      {/* Top Sticky Header Navigation with Direct Jump Controls */}
      <HeaderNav />

      {/* Main Slide Deck Canvas with 3D Spatial Tilt */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 relative z-10">
        
        {/* SECTION 1: HERO / INTRO (STARTS DIRECTLY WITH AYUSH'S INTRO & PHOTO) */}
        <section id="about" className="scroll-mt-20">
          <Card3DTilt maxRotation={4} glareColor="rgba(255, 170, 0, 0.12)">
            <IntroSlide />
          </Card3DTilt>
        </section>

        {/* SECTION 2: VERIFIED ACHIEVEMENTS & LINKEDIN MILESTONES */}
        <section id="achievements" className="scroll-mt-20">
          <Card3DTilt maxRotation={4} glareColor="rgba(255, 170, 0, 0.12)">
            <AchievementsSlide />
          </Card3DTilt>
        </section>

        {/* SECTION 3: SOCIAL MEDIA CAROUSELS & AD CREATIVES */}
        <section id="social-media" className="scroll-mt-20">
          <Card3DTilt maxRotation={3} glareColor="rgba(255, 170, 0, 0.12)">
            <SocialMediaSlide 
              aiDarkSide={aiDarkSide}
              biryaniData={biryaniData}
              borcelleCoffee={borcelleCoffee}
              outfitOfTheDay={outfitOfTheDay}
              onOpenImage={handleOpenImage}
            />
          </Card3DTilt>
        </section>

        {/* SECTION 4: UI/UX & WEB PLATFORMS */}
        <section id="web-ui" className="scroll-mt-20">
          <Card3DTilt maxRotation={3} glareColor="rgba(255, 170, 0, 0.12)">
            <WebUiSlide 
              studentErp={studentErp}
              technovationWeb={technovationWeb}
              onOpenImage={handleOpenImage}
            />
          </Card3DTilt>
        </section>

        {/* SECTION 5: BRANDING, APPAREL & EVENT POSTERS */}
        <section id="branding" className="scroll-mt-20">
          <Card3DTilt maxRotation={3} glareColor="rgba(255, 170, 0, 0.12)">
            <BrandingApparelSlide 
              teamTechnoMerch={teamTechnoMerch}
              speakerSession={speakerSession}
              quantumWorkshop={quantumWorkshop}
              onOpenImage={handleOpenImage}
            />
          </Card3DTilt>
        </section>

        {/* SECTION 6: SKILLS & TOOLS */}
        <section id="skills" className="scroll-mt-20">
          <Card3DTilt maxRotation={4} glareColor="rgba(255, 255, 255, 0.15)">
            <SkillsSlide />
          </Card3DTilt>
        </section>

        {/* SECTION 7: RESUME & CV (EXPERIENCE, EDUCATION, SKILL MATRIX) */}
        <section id="resume" className="scroll-mt-20">
          <Card3DTilt maxRotation={3} glareColor="rgba(255, 170, 0, 0.12)">
            <ResumeSlide />
          </Card3DTilt>
        </section>

        {/* SECTION 8: THANK YOU & DIRECT CONTACT */}
        <section id="contact" className="scroll-mt-20">
          <Card3DTilt maxRotation={4} glareColor="rgba(255, 170, 0, 0.12)">
            <ThankYouSlide />
          </Card3DTilt>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 bg-[#060608]/90 backdrop-blur-md py-6 px-4 text-center text-xs font-mono text-slate-500 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>{personalInfo.name} — {personalInfo.role}</span>
          <div className="flex items-center gap-4 text-slate-400">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-[#ffaa00] transition-colors">{personalInfo.email}</a>
            <span>•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffaa00] transition-colors">LinkedIn</a>
            <span>•</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffaa00] transition-colors">GitHub</a>
            <span>•</span>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffaa00] transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Lightweight Image Lightbox */}
      {lightboxData.isOpen && (
        <SimpleLightbox
          imageSrc={lightboxData.src}
          title={lightboxData.title}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
}
