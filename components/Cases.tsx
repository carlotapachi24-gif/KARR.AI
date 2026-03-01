import React from 'react';

const Cases: React.FC = () => {
  return (
    <section id="casos" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-14 sm:mb-24">
          Casos de
          <br />
          <span className="text-cyber-purple italic">impacto real</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-1 rounded-[2rem] sm:rounded-[2.5rem]">
            <div className="bg-void p-6 sm:p-10 rounded-[1.8rem] sm:rounded-[2.2rem] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-7 sm:mb-8 min-w-0">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-cyber-cyan">chat</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] sm:tracking-widest break-words">Inmobiliaria premium</span>
              </div>
              <div className="space-y-5 sm:space-y-6 flex-grow">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Antes</span>
                  <p className="text-xs text-slate-400">Atencion manual por WhatsApp, retrasos y perdida de leads fuera de horario.</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <span className="text-[10px] uppercase font-bold text-green-400 block mb-1">Despues</span>
                  <p className="text-xs text-slate-100 font-medium">Asistente IA con agenda integrada y respuesta inmediata 24/7.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <span className="text-3xl font-bold text-cyber-cyan">+240%</span>
                <span className="text-[10px] uppercase block text-slate-500 mt-1">Citas concertadas / mes</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-1 rounded-[2rem] sm:rounded-[2.5rem]">
            <div className="bg-void p-6 sm:p-10 rounded-[1.8rem] sm:rounded-[2.2rem] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-7 sm:mb-8 min-w-0">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-cyber-purple">description</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] sm:tracking-widest break-words">Agencia de marketing</span>
              </div>
              <div className="space-y-5 sm:space-y-6 flex-grow">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Antes</span>
                  <p className="text-xs text-slate-400">Presupuestos manuales con alto coste de tiempo y errores frecuentes.</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <span className="text-[10px] uppercase font-bold text-green-400 block mb-1">Despues</span>
                  <p className="text-xs text-slate-100 font-medium">Flujo automatico: formulario a presupuesto PDF en segundos.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <span className="text-3xl font-bold text-cyber-purple">95%</span>
                <span className="text-[10px] uppercase block text-slate-500 mt-1">Menos tiempo administrativo</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-1 rounded-[2rem] sm:rounded-[2.5rem]">
            <div className="bg-void p-6 sm:p-10 rounded-[1.8rem] sm:rounded-[2.2rem] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-7 sm:mb-8 min-w-0">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-cyber-cyan">analytics</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] sm:tracking-widest break-words">E-commerce de moda</span>
              </div>
              <div className="space-y-5 sm:space-y-6 flex-grow">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Antes</span>
                  <p className="text-xs text-slate-400">Datos en sistemas separados y sin visibilidad de rentabilidad diaria.</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <span className="text-[10px] uppercase font-bold text-green-400 block mb-1">Despues</span>
                  <p className="text-xs text-slate-100 font-medium">Reporting consolidado con alertas y seguimiento automatico.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <span className="text-3xl font-bold text-cyber-cyan">100%</span>
                <span className="text-[10px] uppercase block text-slate-500 mt-1">Claridad financiera</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
