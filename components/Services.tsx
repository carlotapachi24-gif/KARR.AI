import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="reveal text-5xl font-black tracking-tighter uppercase mb-16 text-center">Niveles de Intervención</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="reveal stagger-1 glass-card p-8 rounded-3xl flex flex-col hover:bg-white/5">
            <div className="text-[10px] font-mono text-white/40 mb-4 tracking-widest uppercase">Fase 01</div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Auditoría</h3>
            <p className="text-sm text-slate-400 mb-8 flex-grow">Mapeo exhaustivo de procesos para detectar dónde estás perdiendo el tiempo hoy mismo.</p>
            <div className="mb-8 p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-purple mb-1">Ideal para:</span>
              <span className="text-xs text-white">Equipos que saben que fallan pero no dónde exactamente.</span>
            </div>
          </div>

          <div className="reveal stagger-2 glass-card p-8 rounded-3xl flex flex-col hover:bg-white/5">
            <div className="text-[10px] font-mono text-white/40 mb-4 tracking-widest uppercase">Fase 02</div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Impacto</h3>
            <p className="text-sm text-slate-400 mb-8 flex-grow">Automatizaciones tácticas de implementación rápida para liberar tus primeras 10h semanales.</p>
            <div className="mb-8 p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-purple mb-1">Ideal para:</span>
              <span className="text-xs text-white">Problemas puntuales de cuello de botella o gestión de leads.</span>
            </div>
          </div>

          <div className="reveal-scale stagger-3 relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-b from-cyber-purple to-cyber-cyan rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative h-full glass-card bg-black/90 p-8 rounded-[2rem] flex flex-col border-white/20 transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] font-mono text-cyber-cyan tracking-widest uppercase">Fase 03 // Recomendado</div>
                <span className="material-symbols-outlined text-cyber-cyan animate-spin-slow">settings</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Sistema Completo</h3>
              <p className="text-sm text-slate-300 mb-8 flex-grow">Arquitectura integral de IA. Tu negocio funcionando como un reloj suizo digital.</p>
              <div className="mb-8 p-3 bg-white/10 rounded-xl border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-cyan mb-1">Ideal para:</span>
                <span className="text-xs text-white font-medium">Empresas en fase de escalado que necesitan orden total.</span>
              </div>
            </div>
          </div>

          <div className="reveal stagger-4 glass-card p-8 rounded-3xl flex flex-col hover:bg-white/5">
            <div className="text-[10px] font-mono text-white/40 mb-4 tracking-widest uppercase">Fase 04</div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Mantenimiento</h3>
            <p className="text-sm text-slate-400 mb-8 flex-grow">Optimización constante y actualización de modelos para que nunca te quedes atrás.</p>
            <div className="mb-8 p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-purple mb-1">Ideal para:</span>
              <span className="text-xs text-white">Sistemas ya construidos que requieren evolución continua.</span>
            </div>
          </div>
        </div>

        <div className="reveal mt-20 p-12 glass-card rounded-[3rem] text-center border-white/10 hover:border-white/20 transition-all">
          <h3 className="text-3xl font-bold uppercase mb-6">¿Dudas sobre por dónde empezar?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Reserva una llamada estratégica de 15 minutos y definiremos tu hoja de ruta hacia la eficiencia total.</p>
          <button className="bg-white text-black px-6 sm:px-10 py-4 rounded-xl font-extrabold uppercase text-[11px] sm:text-sm tracking-[0.08em] sm:tracking-widest whitespace-nowrap hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
            Solicitar diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
