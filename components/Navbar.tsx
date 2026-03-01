import React from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Servicios', href: '#automatizaciones' },
  { label: 'Casos', href: '#casos' },
  { label: 'CÃ³mo funciona', href: '#como-funciona' },
  { label: 'Sobre mÃ­', href: '#sobre-mi' },
];

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
            className="inline-flex items-center justify-center bg-white text-black px-5 py-2.5 rounded-full text-[10px] font-extrabold uppercase glow-soft hover:bg-slate-200 transition-all"
          >
            Quiero mi diagnÃ³stico
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
