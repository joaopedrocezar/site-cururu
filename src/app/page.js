'use client';

import { useEffect, useRef } from 'react';
import { toadData } from '../data/toadData';
import HeroSection from '../components/HeroSection';
import DossierSection from '../components/DossierSection';
import VenomSection from '../components/VenomSection';
import InvasiveSpeciesSection from '../components/InvasiveSpeciesSection';
import PopularCultureSection from '../components/PopularCultureSection';
import CuriositiesSection from '../components/CuriositiesSection';
import GallerySection from '../components/GallerySection';

// --- HOOK PARA ANIMAÇÃO DE SCROLL ---
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};

// --- COMPONENTE PRINCIPAL ---
export default function SapoCururuSite() {
  useScrollAnimation();

  return (
    <div className="bg-background text-text-main selection:bg-primary/40">
      <style jsx global>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-content-swap {
          animation: contentSwap 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes contentSwap {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-gradient {
          background: linear-gradient(to right, #a68a64, #8c6d46);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <HeroSection toadData={toadData} />

      <main className="w-full">
        <DossierSection toadData={toadData} />
        <VenomSection />
        <InvasiveSpeciesSection />
        <PopularCultureSection />
        <CuriositiesSection toadData={toadData} />
        <GallerySection toadData={toadData} />
      </main>

      <footer className="bg-surface/50 py-10 text-center">
        <p className="text-text-secondary">Dossiê Biológico: Rhinella marina</p>
      </footer>
    </div>
  );
}
