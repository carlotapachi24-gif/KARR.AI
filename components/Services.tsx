import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="reveal text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-12 sm:mb-16 text-center">Niveles de intervencion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="reveal stagger-1 glass-card p-6 sm:p-8 rounded-3xl flex flex-col hover:bg-white/5">
            <div className="text-[10px] font-mono text-white/40 mb-4 tracking-widest uppercase">Fase 01</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Auditoria</h3>
            <p className="text-sm text-slate-400 mb-8 flex-grow">Mapeo de procesos para detectar donde estas perdiendo tiempo ahora mismo.</p>
            <div className="mb-8 p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-purple mb-1">Ideal para:</span>
              <span className="text-xs text-white">Equipos que saben que fallan, pero no donde.</span>
            </div>
          </div>

          <div className="reveal stagger-2 glass-card p-6 sm:p-8 rounded-3xl flex flex-col hover:bg-white/5">
            <div className="text-[10px] font-mono text-white/40 mb-4 tracking-widest uppercase">Fase 02</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Impacto</h3>
            <p className="text-sm text-slate-400 mb-8 flex-grow">Automatizaciones tacticas de implementacion rapida para liberar tus primeras horas cada semana.</p>
            <div className="mb-8 p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-purple mb-1">Ideal para:</span>
              <span className="text-xs text-white">Cuellos de botella puntuales en gestion y seguimiento.</span>
            </div>
          </div>

          <div className="reveal-scale stagger-3 relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-b from-cyber-purple to-cyber-cyan rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative h-full glass-card bg-black/90 p-6 sm:p-8 rounded-[2rem] flex flex-col border-white/20 transform group-hover:scale-[1.01] transition-transform duration-500">
              <div className="flex justify-between items-start mb-4 gap-4">
                <div className="text-[10px] font-mono text-cyber-cyan tracking-[0.16em] sm:tracking-widest uppercase break-words">Fase 03 // Recomendado</div>
                <span className="material-symbols-outlined text-cyber-cyan animate-spin-slow shrink-0">settings</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Sistema completo</h3>
              <p className="text-sm text-slate-300 mb-8 flex-grow">Arquitectura integral con IA para que tu negocio funcione con orden y ritmo sostenido.</p>
              <div className="mb-8 p-3 bg-white/10 rounded-xl border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-cyan mb-1">Ideal para:</span>
                <span className="text-xs text-white font-medium">Empresas en fase de escalado que necesitan estructura.</span>
              </div>
            </div>
          </div>

          <div className="reveal stagger-4 glass-card p-6 sm:p-8 rounded-3xl flex flex-col hover:bg-white/5">
            <div className="text-[10px] font-mono text-white/40 mb-4 tracking-widest uppercase">Fase 04</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Mantenimiento</h3>
            <p className="text-sm text-slate-400 mb-8 flex-grow">Optimizacion continua para que tus automatizaciones no se degraden con el tiempo.</p>
            <div className="mb-8 p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-purple mb-1">Ideal para:</span>
              <span className="text-xs text-white">Sistemas ya lanzados que necesitan evolucion.</span>
            </div>
          </div>
        </div>

        <div className="reveal mt-14 sm:mt-20 p-7 sm:p-12 glass-card rounded-[2rem] sm:rounded-[3rem] text-center border-white/10 hover:border-white/20 transition-all">
          <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-6">Dudas sobre por donde empezar?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Reserva una llamada estrategica de 15 minutos y trazamos tu hoja de ruta.</p>
          <button className="bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-extrabold uppercase tracking-[0.14em] sm:tracking-widest hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-transform w-full sm:w-auto">
            Solicitar diagnostico gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
