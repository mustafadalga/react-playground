import { useEffect } from 'react';
import HeroSection from './HeroSection';
import BackgroundSection from './BackgroundSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const handleMobileNavToggle = () => {
  const nav = document.getElementById('mobile-nav');
  if (nav) {
    nav.classList.toggle('hidden');
  }
};

const handleMobileNavClose = () => {
  document.getElementById('mobile-nav')?.classList.add('hidden');
};

export default function PortfolioLanding() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-slate-900">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#hero" className="text-xl font-bold text-white md:text-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              MD
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#hero"
              className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
            >
              Home
            </a>
            <a
              href="#background"
              className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
            >
              Contact
            </a>
          </div>

          <button
            className="text-white md:hidden"
            onClick={handleMobileNavToggle}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div id="mobile-nav" className="hidden border-t border-white/10 bg-slate-900/95 md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            <a
              href="#hero"
              className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
              onClick={handleMobileNavClose}
            >
              Home
            </a>
            <a
              href="#background"
              className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
              onClick={handleMobileNavClose}
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
              onClick={handleMobileNavClose}
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
              onClick={handleMobileNavClose}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-cyan-500/30"
              onClick={handleMobileNavClose}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />
      <BackgroundSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
