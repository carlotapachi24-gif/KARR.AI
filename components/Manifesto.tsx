import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-32 bg-white/5 border-y border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-cyber-purple font-mono text-xs tracking-[0.5em] uppercase mb-8 block">Manifiesto Operativo</span>
        <h2 className="text-[1.8rem] sm:text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.05] mb-12">
          <span className="block whitespace-nowrap">Si todo depende de ti,</span>
          <span className="block italic text-cyber-purple whitespace-nowrap">tu tiempo no es tuyo.</span>
        </h2>
        <div className="space-y-12 text-xl font-light text-slate-300 leading-relaxed">
          <p className="max-w-2xl mx-auto">
            Hay negocios que crecen... y negocios que solo se vuelven más pesados. No por falta de talento, sino por fricción: mensajes, coordinación, recordar cosas, reordenar la agenda, perseguir decisiones.
          </p>
          
          <p className="text-lg font-bold tracking-[0.4em] uppercase text-cyber-purple py-4">
            La salida no es correr más.<br />
            Es diseñar un sistema.
          </p>
          
          <p className="max-w-2xl mx-auto">
            Yo convierto tareas repetitivas en automatizaciones estables para que recuperes tiempo. Y con tiempo recuperado pasan cosas: <span className="text-white font-medium">decides mejor, atiendes mejor, vendes mejor, descansas mejor.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
