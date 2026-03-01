import React from 'react';

const CONTACT_EMAIL = 'carlotaloopezcarracedo@gmail.com';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Servicios', href: '#automatizaciones' },
  { label: 'Casos', href: '#casos' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Sobre mí', href: '#sobre-mi' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-card rounded-3xl border-white/20 bg-black/70 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between gap-4">
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
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center bg-white text-black px-5 py-2.5 rounded-full text-[10px] font-extrabold uppercase hover:bg-slate-200 transition-all"
              >
                Quiero mi diagnóstico
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
