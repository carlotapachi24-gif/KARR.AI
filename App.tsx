import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Results from './components/Results';
import Manifesto from './components/Manifesto';
import Automations from './components/Automations';
import Integrations from './components/Integrations';
import Services from './components/Services';
import Cases from './components/Cases';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const hiddenElements = document.querySelectorAll('.reveal, .reveal-scale');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0 grainy-overlay z-50 pointer-events-none"></div>
      <div className="fixed inset-0 mesh-gradient -z-10 transition-opacity duration-1000"></div>
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Results />
        <Manifesto />
        <Automations />
        <Integrations />
        <Services />
        <Cases />
        <Process />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[110]">
        <button className="w-16 h-16 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center group active:scale-95 transition-all animate-bounce hover:animate-none">
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
      </div>
    </div>
  );
};

export default App;