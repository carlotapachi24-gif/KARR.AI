import React, { useState } from 'react';

const CONTACT_EMAIL = 'carlotaloopezcarracedo@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const buildMailtoUrl = () => {
    const subject = `Solicitud de diagnóstico - ${businessName.trim() || fullName.trim() || 'Nuevo contacto'}`;
    const body = [
      `Nombre: ${fullName.trim() || '-'}`,
      `Email profesional: ${businessEmail.trim() || '-'}`,
      `Empresa / Proyecto: ${businessName.trim() || '-'}`,
      '',
      '¿Dónde pierdes más tiempo hoy?',
      message.trim() || '-',
    ].join('\n');

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitStatus === 'sending') {
      return;
    }

    if (!fullName.trim() || !businessEmail.trim() || !message.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Completa nombre, email y mensaje para enviar la solicitud.');
      return;
    }

    setSubmitStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Solicitud de diagnóstico - ${businessName.trim() || fullName.trim() || 'Nuevo contacto'}`,
          _captcha: 'false',
          _template: 'table',
          _replyto: businessEmail.trim(),
          nombre: fullName.trim(),
          email_profesional: businessEmail.trim(),
          empresa_proyecto: businessName.trim() || '-',
          mensaje: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Form endpoint error');
      }

      setSubmitStatus('success');
      setStatusMessage('Solicitud enviada. Te responderé por email lo antes posible.');
      setFullName('');
      setBusinessEmail('');
      setBusinessName('');
      setMessage('');
    } catch {
      setSubmitStatus('error');
      setStatusMessage('No se pudo enviar automáticamente. Se abrirá tu correo para enviarlo manualmente.');
      window.location.href = buildMailtoUrl();
    }
  };

  return (
    <section id="contacto" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyber-purple/10 blur-[150px] -z-10 rounded-full animate-blob"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="reveal text-5xl lg:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              El sistema <span className="text-cyber-purple">perfecto</span> es el que funciona <span className="italic opacity-50">cuando tú no estás.</span>
            </h2>
            <p className="reveal stagger-1 text-xl text-slate-400 font-light mb-12 max-w-lg">
              Cuéntame dónde están tus cuellos de botella operativos y te digo qué automatización haría primero para recuperar tiempo sin complicarte la vida.
            </p>
            <div className="reveal stagger-2 space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all">
                  <span className="material-symbols-outlined text-cyber-purple">mail</span>
                </span>
                <span className="font-bold">{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all">
                  <span className="material-symbols-outlined text-cyber-purple">location_on</span>
                </span>
                <span className="font-bold">Galicia</span>
              </div>
            </div>
          </div>
          <div className="relative reveal-scale stagger-2">
            <div className="glass-card p-12 rounded-[3rem] border-white/20 hover:border-white/30 transition-all">
              <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">Nombre Completo</label>
                    <input
                      className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      placeholder="Carlota..."
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">Email Profesional</label>
                    <input
                      className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      placeholder="tu@empresa.com"
                      type="email"
                      inputMode="email"
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">Empresa / Proyecto</label>
                  <input
                    className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                    placeholder="Nombre de tu negocio"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">¿Dónde pierdes más tiempo hoy?</label>
                  <textarea
                    className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all resize-none placeholder:text-white/20"
                    placeholder="Ej: Clasificación de leads, agenda, facturación..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-cyber-purple to-cyber-indigo text-white font-black py-6 rounded-2xl text-xs uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'sending' ? 'Enviando...' : 'Solicitar Diagnóstico'}
                </button>
                {statusMessage && (
                  <p className={`text-sm font-medium ${submitStatus === 'success' ? 'text-green-400' : 'text-amber-300'}`}>
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
