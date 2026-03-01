import React from 'react';

const Cases: React.FC = () => {
  return (
    <section id="casos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-24">Casos de <br/><span className="text-cyber-purple italic">Impacto Real</span></h2>
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Case 1 */}
          <div className="glass-card p-1 rounded-[2.5rem]">
            <div className="bg-void p-10 rounded-[2.2rem] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-cyber-cyan">chat</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">Inmobiliaria Premium</span>
              </div>
              <div className="space-y-6 flex-grow">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Antes</span>
                  <p className="text-xs text-slate-400">AtenciÃ³n manual de WhatsApp. 4h de retraso en respuestas. PÃ©rdida de leads fuera de horario.</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <span className="text-[10px] uppercase font-bold text-green-400 block mb-1">DespuÃ©s</span>
                  <p className="text-xs text-slate-100 font-medium">Asistente IA con agenda integrada. Respuesta en 5 seg. 24/7. Agendado automÃ¡tico.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <span className="text-3xl font-bold text-cyber-cyan">+240%</span>
                <span className="text-[10px] uppercase block text-slate-500 mt-1">Citas concertadas / mes</span>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="glass-card p-1 rounded-[2.5rem]">
            <div className="bg-void p-10 rounded-[2.2rem] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-cyber-purple">description</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">Agencia de Marketing</span>
              </div>
              <div className="space-y-6 flex-grow">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Antes</span>
                  <p className="text-xs text-slate-400">GeneraciÃ³n de presupuestos manual (1h c/u). Errores frecuentes en precios y servicios.</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <span className="text-[10px] uppercase font-bold text-green-400 block mb-1">DespuÃ©s</span>
                  <p className="text-xs text-slate-100 font-medium">Sistema automatizado: Formulario â†’ Presupuesto PDF en 30 seg. Cero errores.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <span className="text-3xl font-bold text-cyber-purple">95%</span>
                <span className="text-[10px] uppercase block text-slate-500 mt-1">Menos tiempo administrativo</span>
              </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="glass-card p-1 rounded-[2.5rem]">
            <div className="bg-void p-10 rounded-[2.2rem] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-cyber-cyan">analytics</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">E-commerce de Moda</span>
              </div>
              <div className="space-y-6 flex-grow">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Antes</span>
                  <p className="text-xs text-slate-400">Datos dispersos en 4 plataformas. Imposible saber rentabilidad neta diaria.</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <span className="text-[10px] uppercase font-bold text-green-400 block mb-1">DespuÃ©s</span>
                  <p className="text-xs text-slate-100 font-medium">Reporting automatizado que cruza ads, ventas y stock. Alertas al mÃ³vil.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <span className="text-3xl font-bold text-cyber-cyan">100%</span>
                <span className="text-[10px] uppercase block text-slate-500 mt-1">Claridad financiera total</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cases;
