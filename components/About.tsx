import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative reveal-scale">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group cursor-none">
              <img 
                alt="Carlota - AI Architect" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                src={`${import.meta.env.BASE_URL}ChatGPT Image 1 mar 2026, 20_59_20-Photoroom (1).png`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-3xl border-white/20 animate-float">
              <div className="flex gap-2">
                <span className="px-4 py-1.5 rounded-full bg-cyber-purple/20 text-cyber-purple text-[10px] font-bold uppercase tracking-widest border border-cyber-purple/30">Claridad</span>
                <span className="px-4 py-1.5 rounded-full bg-cyber-cyan/20 text-cyber-cyan text-[10px] font-bold uppercase tracking-widest border border-cyber-cyan/30">Control</span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">Resultado</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="reveal text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-8">Soy Carlota.</h2>
            <p className="reveal stagger-1 text-2xl font-light text-slate-300 leading-relaxed mb-8">
              No soy una consultora IT al uso. Soy arquitecta de sistemas obsesionada con la <span className="text-white font-medium">libertad creativa</span> que solo da el orden digital.
            </p>
            <div className="reveal stagger-2 space-y-6 mb-12">

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Experta en No-Code/IA",
                  "Enfoque en Negocio",
                  "sistemas optimizados",
                  "Trato directo y claro"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-cyber-purple">verified</span>
                    <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="reveal stagger-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
              Hablemos de tu proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
