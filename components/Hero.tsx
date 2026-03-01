import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-purple/10 blur-[120px] rounded-full -z-10 animate-blob mix-blend-screen"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-cyan/5 blur-[100px] rounded-full -z-10 animate-blob animation-delay-2000 mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 hover:bg-white/10 transition-colors backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-purple"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
            Menos tareas invisibles. Más horas útiles.
          </span>
        </div>
        
        <div className="relative isolate mb-12">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[220px] w-[94%] max-w-[980px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.42)_0%,rgba(139,92,246,0.2)_36%,rgba(139,92,246,0.08)_58%,transparent_76%)] blur-2xl"></div>

          <h1 className="reveal stagger-1 relative text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.85] tracking-tighter uppercase [text-shadow:0_0_55px_rgba(139,92,246,0.28)]">
            TE DEVUELVO<br />
            TU <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-purple to-white animate-text pr-4">TIEMPO</span>
          </h1>
        </div>
        
        <p className="reveal stagger-2 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          Automatizo procesos con IA para que tu negocio responda, agende, registre y haga seguimiento sin que tú estés pendiente del móvil.
        </p>
        
        <div className="reveal stagger-3 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
          {[
            { icon: 'speed', text: 'Optimización' },
            { icon: 'precision_manufacturing', text: 'Cero Errores' },
            { icon: 'trending_up', text: 'Escalabilidad' },
            { icon: 'lock', text: 'Control Total' }
          ].map((item) => (
            <div key={item.text} className="w-36 flex items-center gap-2 glass-card p-3 rounded-xl border-white/5 hover:bg-white/10 group transition-all duration-300">
              <span className="material-symbols-outlined text-cyber-purple text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-tight">{item.text}</span>
            </div>
          ))}
        </div>
        
        <div className="reveal stagger-4 flex flex-col sm:flex-row gap-6 justify-center">
          <button className="relative overflow-hidden bg-white text-black px-12 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] group">
            <span className="relative z-10">Analizar mi negocio</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-slate-200"></div>
          </button>
          <button className="glass-card px-12 py-5 rounded-xl font-black text-sm tracking-widest uppercase text-white border-white/10 hover:border-cyber-purple transition-all hover:bg-white/5">
            Ver automatizaciones
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-white/30">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
