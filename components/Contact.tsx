import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyber-purple/10 blur-[150px] -z-10 rounded-full animate-blob"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="reveal text-5xl lg:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              El sistema <span className="text-cyber-purple">perfecto</span> es el que funciona <span className="italic opacity-50">cuando tú no estás.</span>
            </h2>
            <p className="reveal stagger-1 text-xl text-slate-400 font-light mb-12 max-w-lg">
              Cuéntame dónde están tus cuellos de botella operativos y te digo qué automatización haría primero para recuperar tiempo sin complicarte la vida.
            </p>
            <div className="reveal stagger-2 space-y-4">
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all">
                  <span className="material-symbols-outlined text-cyber-purple">mail</span>
                </span>
                <span className="font-bold">carlotaloopezcarracedo@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all">
                  <span className="material-symbols-outlined text-cyber-purple">location_on</span>
                </span>
                <span className="font-bold">Galicia</span>
              </div>
            </div>
          </div>
          <div className="relative reveal-scale stagger-2">
            <div className="glass-card p-12 rounded-[3rem] border-white/20 hover:border-white/30 transition-all">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">Nombre Completo</label>
                    <input className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Carlota..." type="text"/>
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">Email Profesional</label>
                    <input className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="tu@empresa.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">Empresa / Proyecto</label>
                  <input className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Nombre de tu negocio" type="text"/>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">¿Dónde pierdes más tiempo hoy?</label>
                  <textarea className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all resize-none placeholder:text-white/20" placeholder="Ej: Clasificación de leads, agenda, facturación..." rows={4}></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-cyber-purple to-cyber-indigo text-white font-black py-6 rounded-2xl text-xs uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all active:scale-[0.98]">
                  Solicitar Diagnóstico
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;