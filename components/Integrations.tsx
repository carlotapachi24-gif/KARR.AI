import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const Integrations: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const onChange = () => setIsMobile(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  const shouldAnimate = !reduceMotion && !isMobile;

  const tools = [
    { name: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/ffffff', bg: 'bg-[#25D366]/20' },
    { name: 'OpenAI', icon: 'https://api.iconify.design/simple-icons:openai.svg?color=%23ffffff', bg: 'bg-[#412991]/20' },
    { name: 'Google Drive', icon: 'https://cdn.simpleicons.org/googledrive/ffffff', bg: 'bg-[#4285F4]/20' },
    { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/ffffff', bg: 'bg-[#8E75B2]/20' },
    { name: 'Gmail', icon: 'https://cdn.simpleicons.org/gmail/ffffff', bg: 'bg-[#EA4335]/20' },
    { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/ffffff', bg: 'bg-white/10' },
    { name: 'Google Calendar', icon: 'https://cdn.simpleicons.org/googlecalendar/ffffff', bg: 'bg-[#4285F4]/20' },
    { name: 'Telegram', icon: 'https://cdn.simpleicons.org/telegram/ffffff', bg: 'bg-[#26A5E4]/20' },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-cyber-purple font-mono text-xs tracking-[0.35em] sm:tracking-[0.5em] uppercase mb-8 block reveal">Integraciones</span>
        <h2 className="reveal text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase mb-14 md:mb-24 px-2">
          Conecta tu negocio con
          <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan">todas tus herramientas</span>
        </h2>

        {/* Desktop Orbit */}
        <div className="relative w-full max-w-[600px] aspect-square mx-auto hidden md:block reveal-scale overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[66%] h-[66%] bg-cyber-purple/20 blur-[80px] rounded-full -z-10"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] h-[84%] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] h-[58%] border border-white/10 rounded-full"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl flex items-center justify-center z-20 shadow-[0_0_40px_rgba(139,92,246,0.25)] border border-white/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl">
            <img
              src={`${import.meta.env.BASE_URL}LOGO_FAVICON BLANCO.png`}
              alt="Carlota AI"
              className="w-20 h-20 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <motion.div
            className="absolute inset-0 rounded-full"
            animate={shouldAnimate ? { rotate: 360 } : undefined}
            transition={shouldAnimate ? { duration: 60, repeat: Infinity, ease: 'linear' } : undefined}
          >
            {tools.map((tool, index) => {
              const angle = (index * 360) / tools.length;

              return (
                <div
                  key={tool.name}
                  className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
                  style={{ transform: `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)` }}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={shouldAnimate ? { rotate: -360 } : undefined}
                    transition={shouldAnimate ? { duration: 60, repeat: Infinity, ease: 'linear' } : undefined}
                  >
                    <motion.div
                      className="w-full h-full glass-card rounded-2xl flex items-center justify-center border-white/10 shadow-lg cursor-pointer"
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <div className={`w-10 h-10 rounded-lg ${tool.bg} flex items-center justify-center`}>
                        <img src={tool.icon} alt={tool.name} className="w-6 h-6 opacity-90" loading="lazy" decoding="async" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Orbit */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto md:hidden reveal-scale overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] h-[72%] bg-cyber-purple/20 blur-[60px] rounded-full -z-10"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[92%] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68%] h-[68%] border border-white/10 rounded-full"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center z-20 shadow-[0_0_32px_rgba(139,92,246,0.25)] border border-white/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl">
            <img
              src={`${import.meta.env.BASE_URL}LOGO_FAVICON BLANCO.png`}
              alt="Carlota AI"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <motion.div
            className="absolute inset-0 rounded-full"
            animate={shouldAnimate ? { rotate: 360 } : undefined}
            transition={shouldAnimate ? { duration: 60, repeat: Infinity, ease: 'linear' } : undefined}
          >
            {tools.map((tool, index) => {
              const angle = (index * 360) / tools.length;

              return (
                <div
                  key={tool.name}
                  className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-14 sm:h-14 -ml-6 sm:-ml-7 -mt-6 sm:-mt-7"
                  style={{ transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)` }}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={shouldAnimate ? { rotate: -360 } : undefined}
                    transition={shouldAnimate ? { duration: 60, repeat: Infinity, ease: 'linear' } : undefined}
                  >
                    <div className="w-full h-full glass-card rounded-xl flex items-center justify-center border-white/10 shadow-lg">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${tool.bg} flex items-center justify-center`}>
                        <img src={tool.icon} alt={tool.name} className="w-4 h-4 sm:w-5 sm:h-5 opacity-90" loading="lazy" decoding="async" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
