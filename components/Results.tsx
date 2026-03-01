import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, MessageSquare, Bell, Scissors, User, Clock, CheckCircle2, Sparkles } from 'lucide-react';

const Results: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const totalDuration = 12000; // 12 seconds loop
    let loopTimers: number[] = [];
    const loop = () => {
      loopTimers.forEach((timer) => clearTimeout(timer));
      loopTimers = [];

      setStage(0);
      loopTimers.push(window.setTimeout(() => setStage(1), 500));   // Message appears
      loopTimers.push(window.setTimeout(() => setStage(2), 2500));  // Line to System
      loopTimers.push(window.setTimeout(() => setStage(3), 3000));  // System Processing
      loopTimers.push(window.setTimeout(() => setStage(4), 5000));  // System Ready
      loopTimers.push(window.setTimeout(() => setStage(5), 6000));  // Line to Results
      loopTimers.push(window.setTimeout(() => setStage(6), 6500));  // Result 1
      loopTimers.push(window.setTimeout(() => setStage(7), 7000));  // Result 2
      loopTimers.push(window.setTimeout(() => setStage(8), 7500));  // Result 3
      loopTimers.push(window.setTimeout(() => setStage(9), 9000));  // Seal
    };

    loop();
    const interval = setInterval(loop, totalDuration);
    return () => {
      clearInterval(interval);
      loopTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <section id="resultados" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none uppercase"
            >
              Lo que cambia cuando<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan">recuperas tiempo</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-400 font-light mb-12"
            >
              La automatizaciÃ³n no es solo ahorrar minutos; es transformar la naturaleza de tu trabajo diario.
            </motion.p>
            <ul className="space-y-6">
              {[
                "Eliminas el 90% de la carga administrativa y tareas repetitivas.",
                "Escalabilidad pura: tu sistema crece sin necesidad de aumentar plantilla linealmente.",
                "Claridad estratÃ©gica: datos en tiempo real para tomar decisiones, no suposiciones.",
                "Respuesta inmediata: la IA atiende a tus clientes mientras tÃº descansas.",
                "Paz mental: procesos robustos que no dependen de la memoria de nadie."
              ].map((text, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <span className="w-6 h-6 rounded-full bg-cyber-purple/20 flex items-center justify-center shrink-0 mt-1 border border-cyber-purple/40">
                    <Check className="w-3 h-3 text-cyber-purple" strokeWidth={4} />
                  </span>
                  <span className="text-lg text-slate-300 group hover:text-white transition-colors">
                    <strong className="text-white">{text.split(':')[0]}</strong>
                    {text.includes(':') ? text.substring(text.indexOf(':')) : ''}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 p-8 glass-card rounded-2xl border-l-4 border-l-cyber-purple hover:pl-10 transition-all cursor-default"
            >
              <p className="text-xl italic font-light">"Tu negocio no necesita mÃ¡s horas tuyas;<br />necesita mejores sistemas trabajando para ti."</p>
            </motion.div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-20 bg-cyber-indigo/20 blur-[100px] -z-10 rounded-full animate-pulse"></div>
            
            {/* Tech Luxury Container - Vertical Aspect Ratio 3:4 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.2 }}
              className="glass-card w-full min-h-[900px] rounded-[2.5rem] p-8 flex flex-col border-white/10 relative overflow-hidden bg-[#050505] shadow-2xl ring-1 ring-white/5"
            >
              
              {/* Background Aesthetics */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#0a0a0f] to-[#120b29] opacity-90"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              
              {/* Connecting Line (SVG) */}
              <svg className="absolute left-[3.3rem] top-0 bottom-0 h-full w-1 z-0 overflow-visible">
                {/* Background Line - Solid */}
                <line x1="0" y1="15%" x2="0" y2="85%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
                
                {/* Continuous Progress Line */}
                <motion.line 
                  x1="0" y1="15%" x2="0" y2="85%" 
                  stroke="#a855f7" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: stage >= 5 ? 1 : (stage >= 2 ? 0.5 : 0) }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 6px #a855f7)" }}
                />
              </svg>

              {/* Animation Stage - Vertical Stack */}
              <div className="relative z-10 flex flex-col h-full gap-6 pl-12">
                
                {/* SECTION 1: INPUT (Messaging) */}
                <div className="flex-1 flex flex-col justify-center">
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: stage >= 1 ? 1 : 0.3 }}
                     className="flex items-center gap-3 mb-3"
                   >
                      <div className="w-3 h-3 rounded-full bg-slate-500 ring-4 ring-slate-500/20"></div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Entrada</span>
                   </motion.div>
                   
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: stage >= 1 ? 1 : 0, x: stage >= 1 ? 0 : -20 }}
                     transition={{ duration: 0.5 }}
                     className="glass-card rounded-2xl border border-white/10 p-5 relative overflow-hidden bg-slate-900/40 backdrop-blur-md"
                   >
                      {/* Chat Header */}
                      <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-xs font-bold text-white/50">RL</div>
                         <div className="flex flex-col gap-1.5">
                            <div className="h-2.5 w-24 bg-slate-700/50 rounded-full"></div>
                            <div className="h-2 w-16 bg-slate-800/50 rounded-full"></div>
                         </div>
                      </div>
                      {/* Message Bubble */}
                      <div className="bg-[#1f2937] border border-white/5 p-5 rounded-2xl rounded-tl-none relative shadow-lg">
                         <p className="text-lg font-medium text-white leading-relaxed">
                           {stage >= 1 && (
                             <TypewriterText text='"Quiero cita maÃ±ana a las 6 para cortar"' />
                           )}
                         </p>
                      </div>
                   </motion.div>
                </div>

                {/* SECTION 2: SYSTEM (Automation Module) */}
                <div className="flex-1 flex flex-col justify-center">
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: stage >= 2 ? 1 : 0.3 }}
                     className="flex items-center gap-3 mb-3"
                   >
                      <motion.div 
                        animate={{ 
                          backgroundColor: stage >= 4 ? '#a855f7' : '#64748b',
                          scale: stage === 3 ? [1, 1.2, 1] : 1
                        }}
                        transition={{ duration: 0.5, repeat: stage === 3 ? Infinity : 0 }}
                        className="w-3 h-3 rounded-full ring-4 ring-slate-500/20"
                      ></motion.div>
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${stage >= 4 ? 'text-cyber-purple' : 'text-slate-500'}`}>Sistema</span>
                   </motion.div>
                   
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ 
                       opacity: stage >= 2 ? 1 : 0,
                       borderColor: stage >= 4 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                       backgroundColor: stage >= 4 ? 'rgba(168, 85, 247, 0.05)' : 'rgba(15, 23, 42, 0.4)'
                     }}
                     className="glass-card rounded-2xl border p-1 relative overflow-hidden transition-colors duration-500"
                   >
                      {/* Scanning Effect */}
                      {stage === 3 && (
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-purple/10 to-transparent w-1/2 h-full skew-x-12 z-0"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      <div className="relative z-10 p-5">
                        <div className="flex justify-between items-center mb-6">
                           <div className="flex flex-col">
                             <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Estado</span>
                             <AnimatePresence mode="wait">
                               {stage >= 4 ? (
                                 <motion.span 
                                   key="ready"
                                   initial={{ opacity: 0, y: 10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   className="text-2xl font-black uppercase tracking-widest text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)] flex items-center gap-2"
                                 >
                                   LISTO <CheckCircle2 className="w-5 h-5" />
                                 </motion.span>
                               ) : (
                                 <motion.span 
                                   key="processing"
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   exit={{ opacity: 0, y: -10 }}
                                   className="text-2xl font-black uppercase tracking-widest text-cyber-purple animate-pulse"
                                 >
                                   PROCESANDO
                                 </motion.span>
                               )}
                             </AnimatePresence>
                           </div>
                           
                           {/* Circular Progress or Icon */}
                           <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                              {stage >= 4 ? (
                                <Sparkles className="w-6 h-6 text-green-400" />
                              ) : (
                                <motion.div 
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                  <Clock className="w-6 h-6 text-cyber-purple" />
                                </motion.div>
                              )}
                           </div>
                        </div>

                        {/* Data Chips */}
                        <div className="grid grid-cols-2 gap-3">
                           {[
                             { label: 'Servicio', val: 'Corte', icon: Scissors },
                             { label: 'DÃ­a', val: 'MaÃ±ana', icon: Calendar },
                             { label: 'Hora', val: '18:00', icon: Clock },
                             { label: 'Nombre', val: 'Rosa', icon: User }
                           ].map((chip, idx) => (
                             <motion.div 
                               key={idx}
                               initial={{ opacity: 0, scale: 0.9 }}
                               animate={{ 
                                 opacity: stage >= 4 ? 1 : 0.3, 
                                 scale: stage >= 4 ? 1 : 0.9,
                                 borderColor: stage >= 4 ? 'rgba(255,255,255,0.1)' : 'transparent'
                               }}
                               transition={{ delay: idx * 0.1 }}
                               className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col gap-1"
                             >
                                <div className="flex items-center gap-2 text-slate-500">
                                  <chip.icon className="w-3 h-3" />
                                  <span className="text-[9px] uppercase tracking-wider">{chip.label}</span>
                                </div>
                                <span className="text-sm font-bold text-white">{chip.val}</span>
                             </motion.div>
                           ))}
                        </div>
                      </div>
                   </motion.div>
                </div>

                {/* SECTION 3: OUTPUT (Stacked Cards) */}
                <div className="flex-1 flex flex-col justify-center gap-3">
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: stage >= 5 ? 1 : 0.3 }}
                     className="flex items-center gap-3 mb-1"
                   >
                      <div className={`w-3 h-3 rounded-full ring-4 ring-slate-500/20 transition-colors duration-500 ${stage >= 5 ? 'bg-green-400' : 'bg-slate-500'}`}></div>
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${stage >= 5 ? 'text-green-400' : 'text-slate-500'}`}>Resultado</span>
                   </motion.div>
                   
                   {/* Card 1: Calendar */}
                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: stage >= 6 ? 1 : 0, x: stage >= 6 ? 0 : 20 }}
                     className="glass-card rounded-xl border border-white/10 p-4 flex items-center justify-between bg-slate-900/40 hover:bg-slate-800/40 transition-colors"
                   >
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-cyber-cyan/20 flex items-center justify-center border border-cyber-cyan/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                             <Calendar className="w-5 h-5 text-cyber-cyan" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-white">Evento creado</span>
                            <span className="text-xs text-slate-400">Corte â€” Rosa LÃ³pez Â· 18:00</span>
                          </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                   </motion.div>

                   {/* Card 2: Reply */}
                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: stage >= 7 ? 1 : 0, x: stage >= 7 ? 0 : 20 }}
                     className="glass-card rounded-xl border border-white/10 p-4 flex items-center justify-between bg-slate-900/40 hover:bg-slate-800/40 transition-colors"
                   >
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-cyber-purple/20 flex items-center justify-center border border-cyber-purple/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                             <MessageSquare className="w-5 h-5 text-cyber-purple" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-white">Respuesta enviada</span>
                            <span className="text-xs text-slate-400">ConfirmaciÃ³n automÃ¡tica</span>
                          </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                   </motion.div>

                   {/* Card 3: Reminder */}
                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: stage >= 8 ? 1 : 0, x: stage >= 8 ? 0 : 20 }}
                     className="glass-card rounded-xl border border-white/10 p-4 flex items-center justify-between bg-slate-900/40 hover:bg-slate-800/40 transition-colors"
                   >
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center border border-white/10">
                             <Bell className="w-5 h-5 text-slate-300" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-white">Recordatorio</span>
                            <span className="text-xs text-slate-400">Programado: MaÃ±ana 17:00</span>
                          </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                   </motion.div>
                </div>

              </div>

              {/* Final Seal */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ 
                  opacity: stage >= 9 ? 1 : 0, 
                  scale: stage >= 9 ? 1 : 0.5,
                  rotate: stage >= 9 ? 0 : -10
                }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="absolute bottom-8 right-8 text-right z-20"
              >
                 <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl ring-1 ring-white/10 transform hover:scale-105 transition-transform duration-300">
                     <h4 className="text-3xl font-black text-white tracking-tighter leading-none mb-2">TIEMPO<br/>RECUPERADO.</h4>
                     <div className="h-1 w-full bg-gradient-to-r from-cyber-purple to-cyber-cyan mb-2 rounded-full"></div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Sin hacer nada a mano</p>
                 </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for typing effect
const TypewriterText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: index * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default Results;
