import React from 'react';
import { Clock, CalendarCheck, BarChart3, Wrench, ChevronDown } from 'lucide-react';
import { whatsappUrl, trackWhatsappClick } from '../lib/cta';

const badges = [
  { Icon: Clock, text: 'Respuesta a tiempo' },
  { Icon: CalendarCheck, text: 'Seguimiento con fecha' },
  { Icon: BarChart3, text: 'El número, cada mes' },
  { Icon: Wrench, text: 'Sobre tus herramientas' },
];

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-20 overflow-y-hidden overflow-x-hidden">
      {/* Animated blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-purple/10 blur-[120px] rounded-full -z-10 sm:animate-blob mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className="reveal inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 hover:bg-white/10 transition-colors backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-purple"></span>
          </span>
          <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.08em] sm:tracking-[0.2em] uppercase text-white/70 whitespace-nowrap">
            Pymes de servicios · Galicia
          </span>
        </div>

        <div className="relative isolate mb-12">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[220px] w-[94%] max-w-[980px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.42)_0%,rgba(139,92,246,0.2)_36%,rgba(139,92,246,0.08)_58%,transparent_76%)] blur-2xl"></div>

          <p className="reveal stagger-1 relative text-[clamp(1.9rem,8.5vw,3rem)] sm:text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold leading-[0.95] tracking-tighter uppercase [text-shadow:0_0_55px_rgba(139,92,246,0.28)] overflow-visible">
            <span className="block px-[0.04em] sm:px-0">Lo que entra en tu negocio</span>
            <span className="block pl-[0.04em] pr-[0.14em] sm:px-0">
              no debería <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-purple to-white animate-text pr-[0.06em] sm:pr-0">{`perderse `}</span>
            </span>
          </p>
        </div>

        <h1 className="reveal stagger-2 text-sm sm:text-base font-bold tracking-[0.18em] uppercase text-white/50 mb-3 -mt-6">
          Sistemas de atención, seguimiento y medición para pymes de servicios en Galicia
        </h1>

        <p className="reveal stagger-3 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          Consultas respondidas a tiempo, presupuestos con seguimiento y un número claro cada mes.
          Montado sobre las herramientas que ya usas, con tu equipo al mando.
        </p>

        <div className="reveal stagger-4 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
          {badges.map(({ Icon, text }) => (
            <div key={text} className="w-44 flex items-center gap-2 glass-card p-3 rounded-xl border-white/5 hover:bg-white/10 group transition-all duration-300">
              <Icon className="text-cyber-purple w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-tight">{text}</span>
            </div>
          ))}
        </div>

        <div className="reveal stagger-5 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={whatsappUrl('home')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick('home', 'hero')}
            className="relative overflow-hidden bg-white text-black px-12 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] group inline-flex items-center justify-center"
          >
            <span className="relative z-10">Escríbeme por WhatsApp</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-slate-200"></div>
          </a>
          <a href="/#como-funciona" className="glass-card px-12 py-5 rounded-xl font-black text-sm tracking-widest uppercase text-white border-white/10 hover:border-cyber-purple transition-all hover:bg-white/5 inline-flex items-center justify-center">
            Ver cómo trabajamos
          </a>
        </div>
        <p className="reveal stagger-5 mt-5 text-xs text-slate-500 font-light">
          Sin bots: te responde Carlota, fundadora de KAIRAS.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/30 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
