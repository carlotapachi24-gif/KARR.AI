import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="hidden sm:block absolute top-0 right-0 w-[650px] h-[650px] bg-cyber-purple/10 blur-[120px] -z-10 rounded-full animate-blob"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 sm:gap-24">
          <div>
            <h2 className="reveal text-4xl sm:text-5xl lg:text-8xl font-black tracking-tighter leading-[0.95] uppercase mb-10 sm:mb-12 break-words">
              El sistema <span className="text-cyber-purple">perfecto</span> es el que funciona <span className="italic opacity-50">cuando tu no estas.</span>
            </h2>
            <p className="reveal stagger-1 text-lg sm:text-xl text-slate-400 font-light mb-10 sm:mb-12 max-w-lg">
              Cuentame donde estan tus cuellos de botella operativos y te digo que automatizacion haria primero para recuperar tiempo sin complicarte la vida.
            </p>
            <div className="reveal stagger-2 space-y-4">
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all shrink-0">
                  <span className="material-symbols-outlined text-cyber-purple">mail</span>
                </span>
                <span className="font-bold break-all">carlotaloopezcarracedo@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all shrink-0">
                  <span className="material-symbols-outlined text-cyber-purple">location_on</span>
                </span>
                <span className="font-bold">Galicia</span>
              </div>
            </div>
          </div>
          <div className="relative reveal-scale stagger-2">
            <div className="glass-card p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border-white/20 hover:border-white/30 transition-all">
              <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors break-words">Nombre completo</label>
                    <input className="w-full bg-white/5 border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Carlota..." type="text" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors break-words">Email profesional</label>
                    <input className="w-full bg-white/5 border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="tu@empresa.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors break-words">Empresa / proyecto</label>
                  <input className="w-full bg-white/5 border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Nombre de tu negocio" type="text" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors break-words">Donde pierdes mas tiempo hoy?</label>
                  <textarea className="w-full bg-white/5 border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all resize-none placeholder:text-white/20" placeholder="Ej: Clasificacion de leads, agenda, facturacion..." rows={4}></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-cyber-purple to-cyber-indigo text-white font-black py-4 sm:py-6 rounded-2xl text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.3em] hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:scale-[1.01] transition-transform active:scale-[0.99]">
                  Solicitar diagnostico
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
