import React from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Servicios', href: '#automatizaciones' },
  { label: 'Casos', href: '#casos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre mi', href: '#sobre-mi' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] nav-blur px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={`${import.meta.env.BASE_URL}LOGO_ISOLOGO HORIZONTAL BLANCO.png`}
            alt="Carlota AI"
            className="h-7 sm:h-8 w-auto cursor-pointer"
          />
        </div>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.label}
              className="text-[10px] font-bold tracking-widest uppercase hover:text-cyber-purple transition-colors cursor-pointer"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-white text-black px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase whitespace-nowrap hover:bg-slate-200 transition-colors"
          >
            <span className="sm:hidden">Diagnostico</span>
            <span className="hidden sm:inline">Quiero mi diagnostico</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
