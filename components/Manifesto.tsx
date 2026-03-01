import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white/5 border-y border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-cyber-purple font-mono text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-8 block">Manifiesto operativo</span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase mb-10 sm:mb-12">
          Si todo depende de ti,
          <br />
          <span className="italic text-cyber-purple">tu tiempo no es tuyo.</span>
        </h2>
        <div className="space-y-10 sm:space-y-12 text-lg sm:text-xl font-light text-slate-300 leading-relaxed">
          <p className="max-w-2xl mx-auto">
            Hay negocios que crecen y negocios que solo se vuelven mas pesados. No por falta de talento, sino por friccion: mensajes, coordinacion, recordar cosas, reordenar agenda y perseguir decisiones.
          </p>

          <p className="text-base sm:text-lg font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase text-cyber-purple py-4 break-words">
            La salida no es correr mas.
            <br />
            Es disenar un sistema.
          </p>

          <p className="max-w-2xl mx-auto">
            Yo convierto tareas repetitivas en automatizaciones estables para que recuperes tiempo. Y con tiempo recuperado pasan cosas:
            <span className="text-white font-medium"> decides mejor, atiendes mejor, vendes mejor, descansas mejor.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
