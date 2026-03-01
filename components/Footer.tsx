import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-12 mb-14 sm:mb-20">
          <div className="space-y-6">
            <img
              src={`${import.meta.env.BASE_URL}LOGO_ISOLOGO HORIZONTAL BLANCO.png`}
              alt="Carlota AI"
              className="h-10 w-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="text-slate-500 max-w-xs font-light">
              Menos tareas. Mas tiempo. Mejor negocio.
              <br />
              Sistemas de automatizacion con IA.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Redes</span>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="#">
                LinkedIn
              </a>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Legal</span>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="#">
                Privacidad
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="#">
                Aviso legal
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-[10px] text-slate-600 font-mono tracking-[0.12em] sm:tracking-widest uppercase text-center md:text-left break-words">
            (c) 2026 Carlota AI Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] text-slate-600 font-mono uppercase">System operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
