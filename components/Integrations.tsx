import React from 'react';
import { motion } from 'motion/react';

const Integrations: React.FC = () => {
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
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-cyber-purple font-mono text-xs tracking-[0.5em] uppercase mb-8 block reveal">Integraciones</span>
        <h2 className="reveal text-4xl md:text-6xl font-black tracking-tighter uppercase mb-16 md:mb-24">
          Conecta tu negocio con <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan pr-4">todas tus herramientas</span>
        </h2>

        {/* 2D Orbit Container */}
        <div className="relative w-[600px] h-[600px] mx-auto hidden md:block reveal-scale">
          
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyber-purple/20 blur-[100px] rounded-full -z-10"></div>
          
          {/* Orbital Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full"></div>
          
          {/* Central Logo (Static) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl flex items-center justify-center z-20 shadow-[0_0_50px_rgba(139,92,246,0.3)] border border-white/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl">
            <img
              src={`${import.meta.env.BASE_URL}LOGO_FAVICON BLANCO.png`}
              alt="Carlota AI"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Orbiting Icons Container */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {tools.map((tool, index) => {
              const angle = (index * 360) / tools.length;
              
              return (
                <div
                  key={tool.name}
                  className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
                  style={{
                    transform: `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`,
                  }}
                >
                   {/* Counter-rotate to keep upright while orbiting */}
                   <motion.div 
                      className="w-full h-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                   >
                      {/* Scale on Hover (Independent of rotation) */}
                      <motion.div 
                        className="w-full h-full glass-card rounded-2xl flex items-center justify-center border-white/10 shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className={`w-10 h-10 rounded-lg ${tool.bg} flex items-center justify-center`}>
                            <img src={tool.icon} alt={tool.name} className="w-6 h-6 opacity-90" />
                        </div>
                      </motion.div>
                   </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Orbit (Same layout as desktop, scaled down) */}
        <div className="relative w-[320px] h-[320px] mx-auto md:hidden reveal-scale">
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-cyber-purple/20 blur-[80px] rounded-full -z-10"></div>

          {/* Orbital Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] border border-white/10 rounded-full"></div>

          {/* Central Logo (Static) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl flex items-center justify-center z-20 shadow-[0_0_40px_rgba(139,92,246,0.3)] border border-white/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl">
            <img
              src={`${import.meta.env.BASE_URL}LOGO_FAVICON BLANCO.png`}
              alt="Carlota AI"
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* Orbiting Icons Container */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {tools.map((tool, index) => {
              const angle = (index * 360) / tools.length;

              return (
                <div
                  key={tool.name}
                  className="absolute top-1/2 left-1/2 w-14 h-14 -ml-7 -mt-7"
                  style={{
                    transform: `rotate(${angle}deg) translate(145px) rotate(-${angle}deg)`,
                  }}
                >
                  {/* Counter-rotate to keep upright while orbiting */}
                  <motion.div
                    className="w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Scale on Hover (Independent of rotation) */}
                    <motion.div
                      className="w-full h-full glass-card rounded-xl flex items-center justify-center border-white/10 shadow-lg cursor-pointer"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className={`w-9 h-9 rounded-lg ${tool.bg} flex items-center justify-center`}>
                        <img src={tool.icon} alt={tool.name} className="w-5 h-5 opacity-90" />
                      </div>
                    </motion.div>
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
