import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6">
            <img
              src={`${import.meta.env.BASE_URL}LOGO_ISOLOGO HORIZONTAL BLANCO.png`}
              alt="Carlota AI"
              className="h-10 w-auto"
            />
            <p className="text-slate-500 max-w-xs font-light">
              Menos tareas. Más tiempo. Mejor negocio. <br/>Sistemas de automatización con IA.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Redes</span>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="#">LinkedIn</a>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Legal</span>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="#">Privacidad</a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="#">Aviso Legal</a>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
            © 2024 Carlota AI Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] text-slate-600 font-mono uppercase">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
