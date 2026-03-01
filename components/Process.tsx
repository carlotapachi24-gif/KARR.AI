import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="como-funciona" className="py-32 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="reveal text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-24 text-center">Protocolo de ImplementaciÃ³n</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
          
          {[
            { id: "01", title: "DiagnÃ³stico", desc: "AnÃ¡lisis quirÃºrgico de tus cuellos de botella y mapeo de flujos.", color: "bg-cyber-purple" },
            { id: "02", title: "DiseÃ±o", desc: "Arquitectura de la soluciÃ³n y selecciÃ³n del stack tecnolÃ³gico ideal.", color: "bg-cyber-purple" },
            { id: "03", title: "ConstrucciÃ³n", desc: "ImplementaciÃ³n, integraciones y pruebas intensivas de error.", color: "bg-cyber-purple" },
            { id: "04", title: "Entrega", desc: "Lanzamiento, formaciÃ³n de equipo y monitorizaciÃ³n de KPIs.", color: "bg-cyber-cyan" }
          ].map((step, index) => (
            <div key={step.id} className={`reveal stagger-${index + 1} glass-card p-10 rounded-3xl relative group hover:bg-white/5 transition-all hover:-translate-y-2`}>
              <div className={`w-12 h-12 rounded-full ${step.color} text-black flex items-center justify-center font-black mb-6 shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-300`}>
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">{step.title}</h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{step.desc}</p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Process;
