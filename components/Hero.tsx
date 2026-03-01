import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Animated blobs */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-cyber-purple/10 blur-[100px] rounded-full -z-10 animate-blob mix-blend-screen"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] bg-cyber-cyan/5 blur-[90px] rounded-full -z-10 animate-blob mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
        <div className="reveal inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-7 sm:mb-8 hover:bg-white/10 transition-colors backdrop-blur-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-purple"></span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-[0.2em] uppercase text-white/70 break-words">
            Menos tareas invisibles. Mas horas utiles.
          </span>
        </div>

        <div className="relative isolate mb-10 sm:mb-12">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[170px] sm:h-[220px] w-[96%] max-w-[980px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.42)_0%,rgba(139,92,246,0.2)_36%,rgba(139,92,246,0.08)_58%,transparent_76%)] blur-2xl"></div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[170px] sm:h-[220px] w-[88vw] sm:w-[84vw] max-w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyber-purple/30 shadow-[0_0_70px_rgba(139,92,246,0.2)]"></div>

          <h1 className="reveal stagger-1 relative text-[clamp(2.3rem,13vw,9rem)] font-extrabold leading-[0.88] tracking-tight uppercase [text-shadow:0_0_40px_rgba(139,92,246,0.25)] break-words">
            TE DEVUELVO
            <br />
            TU{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-purple to-white">
              TIEMPO
            </span>
          </h1>
        </div>

        <p className="reveal stagger-2 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10 sm:mb-12 px-2">
          Automatizo procesos con IA para que tu negocio responda, agende, registre y haga seguimiento sin que tu estes pendiente del movil.
        </p>

        <div className="reveal stagger-3 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-12 sm:mb-16">
          {[
            { icon: 'speed', text: 'Optimizacion' },
            { icon: 'precision_manufacturing', text: 'Cero errores' },
            { icon: 'trending_up', text: 'Escalabilidad' },
            { icon: 'lock', text: 'Control total' },
          ].map((item) => (
            <div key={item.text} className="w-full sm:w-36 min-w-0 flex items-center gap-2 glass-card p-3 rounded-xl border-white/5 hover:bg-white/10 group transition-all duration-300">
              <span className="material-symbols-outlined text-cyber-purple text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-tight break-words">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="reveal stagger-4 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
          <button className="relative overflow-hidden bg-white text-black px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-black text-xs sm:text-sm tracking-[0.12em] sm:tracking-widest uppercase hover:scale-[1.02] transition-transform shadow-[0_0_25px_rgba(255,255,255,0.2)] group w-full sm:w-auto">
            <span className="relative z-10">Analizar mi negocio</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-slate-200"></div>
          </button>
          <button className="glass-card px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-black text-xs sm:text-sm tracking-[0.12em] sm:tracking-widest uppercase text-white border-white/10 hover:border-cyber-purple transition-all hover:bg-white/5 w-full sm:w-auto">
            Ver automatizaciones
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:block absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-white/30">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
