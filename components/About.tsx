import React from 'react';
import { BadgeCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative reveal-scale">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group cursor-none">
              <img
                alt="Carlota López, fundadora de KAIRAS — sistemas de atención y seguimiento para pymes de servicios"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                src={`${import.meta.env.BASE_URL}og-kairas.webp`}
                loading="lazy"
                decoding="async"
                width="600"
                height="750"
              />
            </div>
            <div className="-mt-px w-full px-3 sm:px-8 py-5 sm:py-6 rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="flex flex-nowrap justify-center gap-1.5 sm:gap-2">
                <span className="px-3 sm:px-4 py-1.5 rounded-full bg-cyber-purple/20 text-cyber-purple text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-widest border border-cyber-purple/30 whitespace-nowrap">Claridad</span>
                <span className="px-3 sm:px-4 py-1.5 rounded-full bg-cyber-cyan/20 text-cyber-cyan text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-widest border border-cyber-cyan/30 whitespace-nowrap">Control</span>
                <span className="px-3 sm:px-4 py-1.5 rounded-full bg-white/10 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-widest border border-white/20 whitespace-nowrap">Resultado</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="reveal text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-8">Soy Carlota.</h2>
            <p className="reveal stagger-1 text-2xl font-light text-slate-300 leading-relaxed mb-8">
              Diseño sistemas de automatización e IA para que pymes de servicios trabajen con <span className="text-white font-medium">más orden, menos carga manual</span> y menos dependencia de personas concretas.
            </p>
            <p className="reveal stagger-1 text-base text-slate-500 mb-8">
              Trabajo con negocios en Galicia y España que tienen alta carga operativa y necesitan un sistema, no más herramientas.
            </p>
            <div className="reveal stagger-2 space-y-6 mb-12">

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Automatización e IA Aplicada",
                  "Enfoque en Negocio",
                  "Sistemas Operativos",
                  "Trato Directo y Claro"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <BadgeCheck className="text-cyber-purple w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contacto" className="reveal stagger-3 inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
