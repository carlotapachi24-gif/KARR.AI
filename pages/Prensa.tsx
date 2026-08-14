import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PressSection from '../components/PressSection';

const Prensa: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <header className="px-6 pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#A78BFA]">Prensa</p>
            <h1 className="text-4xl font-black uppercase leading-[0.94] tracking-tighter text-[#E1E8F0] sm:text-5xl lg:text-7xl">
              KAIRAS en los medios
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Conversaciones sobre automatización, inteligencia artificial y cómo mejorar la operativa de pequeñas y medianas empresas.
            </p>
          </div>
        </header>

        <PressSection />
      </main>

      <Footer />
    </div>
  );
};

export default Prensa;
