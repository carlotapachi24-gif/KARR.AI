import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Results from './components/Results';
import Manifesto from './components/Manifesto';
import Automations from './components/Automations';
import Integrations from './components/Integrations';
import Services from './components/Services';
import Soluciones from './components/Soluciones';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { whatsappUrl, trackWhatsappClick } from './lib/cta';

const App: React.FC = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.reveal, .reveal-scale');
    const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobileViewport || isCoarsePointer || prefersReducedMotion) {
      hiddenElements.forEach((el) => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-[100svh]">
      {/* Background Effects */}
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none"></div>
      <div className="fixed inset-0 mesh-gradient -z-10 transition-opacity duration-1000"></div>
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <Results />
        <Manifesto />
        <Automations />
        <Integrations />
        <Services />
        <Soluciones />
        <Process />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button — WhatsApp, recepción humana */}
      <div className="fixed bottom-6 right-6 z-[110]">
        <a
          href={whatsappUrl('home')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('home', 'fab')}
          className="w-16 h-16 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center group active:scale-95 transition-all"
          aria-label="Escribir por WhatsApp (te responde una persona)"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;
