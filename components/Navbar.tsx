import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] nav-blur px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}LOGO_ISOLOGO HORIZONTAL BLANCO.png`}
            alt="Carlota AI"
            className="h-8 w-auto cursor-pointer"
          />
        </div>
        
        <div className="hidden xl:flex items-center gap-6">
          {['Inicio', 'Resultados', 'Automatizaciones', 'Servicios', 'Casos', 'Cómo funciona', 'Sobre mí', 'Contacto'].map((item) => (
            <a 
              key={item}
              className="text-[10px] font-bold tracking-widest uppercase hover:text-cyber-purple transition-colors cursor-pointer" 
              href={`#${item.toLowerCase().replace(' ', '-').replace('ó', 'o').replace('í', 'i')}`}
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-6">
          <a className="hidden lg:block text-[10px] font-bold tracking-widest uppercase border-b border-white/20 hover:border-cyber-purple transition-all pb-0.5 cursor-pointer" href="#">
            Portfolio creativo ↗
          </a>
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-[10px] font-extrabold uppercase glow-soft hover:bg-slate-200 transition-all">
            Quiero mi diagnóstico
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
