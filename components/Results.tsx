import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Bell, Calendar, Check, CheckCircle2, Clock, MessageSquare, User } from 'lucide-react';

const Results: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const isLowMotion = isMobile || Boolean(reduceMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const onChange = () => setIsMobile(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (isLowMotion) {
      setStage(4);
      return;
    }

    const timers: number[] = [];
    const loop = () => {
      setStage(0);
      timers.push(window.setTimeout(() => setStage(1), 700));
      timers.push(window.setTimeout(() => setStage(2), 1800));
      timers.push(window.setTimeout(() => setStage(3), 3000));
      timers.push(window.setTimeout(() => setStage(4), 4200));
    };

    loop();
    const interval = window.setInterval(loop, 7000);

    return () => {
      window.clearInterval(interval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isLowMotion]);

  const results = [
    { title: 'Evento creado', subtitle: 'Corte - Rosa Lopez - 18:00', icon: Calendar },
    { title: 'Respuesta enviada', subtitle: 'Confirmacion automatica', icon: MessageSquare },
    { title: 'Recordatorio listo', subtitle: 'Programado para hoy 17:00', icon: Bell },
  ];

  return (
    <section id="resultados" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-7 sm:mb-8 leading-none uppercase"
            >
              Lo que cambia cuando
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan">recuperas tiempo</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-xl text-slate-400 font-light mb-10 sm:mb-12"
            >
              La automatizacion no es solo ahorrar minutos. Es trabajar sin interrupciones y con procesos que responden solos.
            </motion.p>

            <ul className="space-y-5 sm:space-y-6">
              {[
                'Eliminas la carga administrativa repetitiva.',
                'Escalas sin aumentar trabajo manual.',
                'Tomas decisiones con datos y no con urgencias.',
                'Tu negocio responde incluso cuando no estas conectada.',
              ].map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <span className="w-6 h-6 rounded-full bg-cyber-purple/20 flex items-center justify-center shrink-0 mt-1 border border-cyber-purple/40">
                    <Check className="w-3 h-3 text-cyber-purple" strokeWidth={4} />
                  </span>
                  <span className="text-base sm:text-lg text-slate-300">{text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 glass-card rounded-2xl border-l-4 border-l-cyber-purple"
            >
              <p className="text-lg sm:text-xl italic font-light">
                "Tu negocio no necesita mas horas tuyas; necesita mejores sistemas trabajando por ti."
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 sm:-inset-16 bg-cyber-indigo/20 blur-[70px] sm:blur-[100px] -z-10 rounded-full"></div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card w-full rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 border-white/10 relative overflow-hidden bg-[#050505] shadow-2xl ring-1 ring-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#0a0a0f] to-[#120b29] opacity-90"></div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Entrada</span>
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${stage >= 2 ? 'text-cyber-purple' : 'text-slate-500'}`}>
                    Sistema
                  </span>
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${stage >= 3 ? 'text-green-400' : 'text-slate-500'}`}>
                    Resultado
                  </span>
                </div>

                <div className="glass-card rounded-2xl border border-white/10 p-4 sm:p-5 bg-slate-900/40 mb-4 sm:mb-5">
                  <p className="text-sm sm:text-base text-white leading-relaxed break-words">
                    "Quiero cita manana a las 6 para cortar"
                  </p>
                </div>

                <div className="glass-card rounded-2xl border border-white/10 p-4 sm:p-5 bg-slate-900/40 mb-5 sm:mb-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest">Estado</span>
                      <div className="text-lg sm:text-2xl font-black uppercase tracking-wider text-cyber-purple">
                        {stage >= 2 ? 'LISTO' : 'PROCESANDO'}
                      </div>
                    </div>
                    <div className={`w-11 h-11 rounded-full border flex items-center justify-center ${stage >= 2 ? 'border-green-400/30 bg-green-400/10' : 'border-white/10 bg-white/5'}`}>
                      {stage >= 2 ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Clock className="w-5 h-5 text-cyber-purple" />}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Servicio', value: 'Corte' },
                      { label: 'Dia', value: 'Manana' },
                      { label: 'Hora', value: '18:00' },
                      { label: 'Nombre', value: 'Rosa', icon: User },
                    ].map((chip) => (
                      <div key={chip.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <span className="text-[9px] uppercase tracking-wider text-slate-500">{chip.label}</span>
                        <span className="block text-xs sm:text-sm font-bold text-white mt-1 break-words">{chip.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {results.map((item, i) => (
                    <div
                      key={item.title}
                      className={`glass-card rounded-xl border border-white/10 p-3 sm:p-4 flex items-center justify-between gap-3 bg-slate-900/40 transition-all duration-500 ${
                        stage >= i + 2 ? 'opacity-100 translate-x-0' : 'opacity-35 translate-x-3'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyber-purple/20 flex items-center justify-center border border-cyber-purple/25 shrink-0">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-purple" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-sm font-bold text-white break-words">{item.title}</span>
                          <span className="text-xs text-slate-400 break-words">{item.subtitle}</span>
                        </div>
                      </div>
                      <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${stage >= i + 2 ? 'text-green-400' : 'text-slate-600'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
