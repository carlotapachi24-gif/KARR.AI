import React from 'react';

const Automations: React.FC = () => {
  return (
    <section id="automatizaciones" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-14 sm:mb-24 break-words">Capacidades<br/><span className="text-cyber-purple">Y Sistemas</span></h2>
        
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
          {[
            {
              title: "Atención al cliente",
              color: "text-cyber-purple",
              borderColor: "bg-cyber-purple",
              items: [
                { title: "Chatbots de Respuesta Directa", desc: "IA entrenada con tu conocimiento para resolver dudas 24/7 en WhatsApp o Web." },
                { title: "Clasificación de Leads", desc: "Filtra automáticamente quién es cliente ideal y quién no antes de que pierdas un minuto." }
              ]
            },
            {
              title: "Agenda y Citas",
              color: "text-cyber-purple",
              borderColor: "bg-cyber-purple",
              items: [
                { title: "Agendamiento Autónomo", desc: "Sincronización total de calendarios, pagos de reserva y recordatorios sin intervención." },
                { title: "Seguimiento Post-reunión", desc: "Envío automático de resúmenes, actas y siguientes pasos tras finalizar una llamada." }
              ]
            },
            {
              title: "Procesamiento de Datos",
              color: "text-cyber-purple",
              borderColor: "bg-cyber-purple",
              items: [
                { title: "Extracción de Información", desc: "Convierte PDFs, facturas o emails en datos estructurados en tu CRM automáticamente." },
                { title: "Reporting Inteligente", desc: "Dashboards que se actualizan solos y te envían alertas de KPIs críticos cada mañana." }
              ]
            },
            {
              title: "Ventas y Operaciones",
              color: "text-cyber-purple",
              borderColor: "bg-cyber-purple",
              items: [
                { title: "Generación de Presupuestos", desc: "Crea propuestas personalizadas en segundos basadas en el formulario del cliente." },
                { title: "Onboarding de Clientes", desc: "Desde el pago hasta el acceso al servicio: todo el proceso de bienvenida automatizado." }
              ]
            }
          ].map((cat, catIndex) => (
            <div key={cat.title} className={`reveal stagger-${catIndex + 1}`}>
              <h3 className={`text-xs font-bold tracking-[0.22em] sm:tracking-[0.4em] uppercase ${cat.color} mb-8 flex items-center gap-4`}>
                <span className={`w-8 h-px ${cat.borderColor} shadow-[0_0_10px_currentColor]`}></span> {cat.title}
              </h3>
              <div className="grid gap-4">
                {cat.items.map((item) => (
                  <div key={item.title} className={`glass-card p-6 sm:p-8 rounded-2xl group hover:border-${cat.borderColor.split('-')[1]}-${cat.borderColor.split('-')[2]}/50 transition-all duration-500 hover:-translate-y-2`}>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 uppercase flex justify-between items-center">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automations;
