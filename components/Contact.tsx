import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { whatsappUrl, trackWhatsappClick, pushEvent } from '../lib/cta';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com'; // TODO P1: migrar a email de dominio propio
const CONTACT_PHONE_DISPLAY = '622 26 20 76';
const CONTACT_PHONE_HREF = '+34622262076';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
// Webhook opcional hacia n8n (hoja comercial). Solo se envía si está configurado
// en build (VITE_N8N_WEBHOOK_URL). Sin valores de prueba hardcodeados.
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL ?? '';

const PROBLEM_OPTIONS = [
  'Consultas que se quedan sin responder',
  'Valoraciones o presupuestos sin seguimiento',
  'Citas que fallan o no se confirman',
  'Coordinación interna / información dispersa',
  'No lo sé — para eso quiero el chequeo',
  'Otra cosa',
];

type SubmitStatus = 'idle' | 'sending' | 'error';

type ContactProps = {
  headingLevel?: 1 | 2;
  sectionId?: string;
};

const Contact: React.FC<ContactProps> = ({ headingLevel = 2, sectionId = 'contacto' }) => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [problem, setProblem] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const formStarted = useRef(false);

  const HeadingTag = headingLevel === 1 ? 'h1' : 'h2';

  const handleFormStart = () => {
    if (!formStarted.current) {
      formStarted.current = true;
      pushEvent('start_contact_form', { page: window.location.pathname });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitStatus === 'sending') return;

    if (!fullName.trim() || !businessName.trim() || !phoneNumber.trim() || !problem) {
      setSubmitStatus('error');
      setStatusMessage('Completa nombre, negocio, WhatsApp o teléfono y qué te está dando problemas.');
      return;
    }
    if (!privacyAccepted) {
      setSubmitStatus('error');
      setStatusMessage('Marca la casilla de privacidad para poder responderte.');
      return;
    }

    setSubmitStatus('sending');
    setStatusMessage('');

    const utm = new URLSearchParams(window.location.search);
    const payload: Record<string, string> = {
      _subject: `Chequeo web — ${businessName.trim()}`,
      _captcha: 'false',
      _template: 'table',
      nombre: fullName.trim(),
      negocio: businessName.trim(),
      whatsapp_telefono: phoneNumber.trim(),
      email: businessEmail.trim() || '-',
      que_le_pasa: problem,
      origen_pagina: window.location.pathname,
      origen_utm: utm.get('utm_source') ? `${utm.get('utm_source')}/${utm.get('utm_campaign') ?? ''}` : 'directo',
      origen_referrer: document.referrer || '-',
    };
    if (businessEmail.trim()) payload._replyto = businessEmail.trim();
    if (N8N_WEBHOOK_URL) payload._webhook = N8N_WEBHOOK_URL;

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Form endpoint error');

      pushEvent('submit_contact_form', { motivo: problem, page: window.location.pathname });
      window.location.assign('/gracias/');
    } catch {
      setSubmitStatus('error');
      setStatusMessage('No se pudo enviar. Escríbeme directamente por WhatsApp y te atiendo igual.');
    }
  };

  return (
    <section id={sectionId} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyber-purple/10 blur-[150px] -z-10 rounded-full animate-blob" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <HeadingTag className="reveal text-5xl lg:text-7xl font-black tracking-tighter leading-none uppercase mb-10">
              ¿Qué se te está escapando?
            </HeadingTag>
            <p className="reveal stagger-1 text-xl text-slate-400 font-light mb-8 max-w-lg">
              Cuéntamelo y te digo, sin compromiso, si puedo ayudarte — y si no puedo, también.
              Sin bots: te respondo yo, en menos de 24 horas laborables.
            </p>

            <a
              href={whatsappUrl('home')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsappClick('home', 'contact_section')}
              className="reveal stagger-1 inline-flex items-center gap-3 bg-white text-black font-black px-8 py-4 rounded-xl text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all mb-10"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp
            </a>

            <div className="reveal stagger-2 space-y-4">
              <a
                href={`tel:${CONTACT_PHONE_HREF}`}
                onClick={() => pushEvent('click_phone', { page: window.location.pathname })}
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer group"
              >
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all">
                  <Phone className="text-cyber-purple w-5 h-5" />
                </span>
                <span className="font-bold">{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() => pushEvent('click_email', { page: window.location.pathname })}
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-pointer group"
              >
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all">
                  <Mail className="text-cyber-purple w-5 h-5" />
                </span>
                <span className="font-bold">{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-center gap-4 text-slate-300 group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-purple/20 transition-all">
                  <MapPin className="text-cyber-purple w-5 h-5" />
                </span>
                <span className="font-bold">Vigo y Pontevedra · también en persona</span>
              </div>
            </div>

            <p className="reveal stagger-2 mt-10 text-sm text-slate-500 font-light max-w-lg">
              Carlota López — fundadora de KAIRAS. Trabajo por fases: primero un chequeo gratuito,
              después un diagnóstico con tus números, y solo entonces un proyecto. Nada de datos
              clínicos ni sensibles: solo lo necesario para responderte.
            </p>
          </div>

          <div className="relative reveal-scale stagger-2">
            <div className="glass-card p-12 rounded-[3rem] border-white/20 hover:border-white/30 transition-all">
              <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label htmlFor="contact-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">
                      Nombre
                    </label>
                    <input
                      id="contact-name"
                      name="nombre"
                      autoComplete="name"
                      className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      placeholder="Tu nombre"
                      type="text"
                      value={fullName}
                      onFocus={handleFormStart}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="contact-company" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">
                      Tu negocio
                    </label>
                    <input
                      id="contact-company"
                      name="negocio"
                      autoComplete="organization"
                      className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      placeholder="Nombre del centro o negocio"
                      type="text"
                      value={businessName}
                      onFocus={handleFormStart}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label htmlFor="contact-phone" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">
                      WhatsApp o teléfono
                    </label>
                    <input
                      id="contact-phone"
                      name="whatsapp_telefono"
                      className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      placeholder="+34 600 000 000"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phoneNumber}
                      onFocus={handleFormStart}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="contact-email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">
                      Email (opcional)
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      placeholder="tu@negocio.com"
                      type="email"
                      inputMode="email"
                      value={businessEmail}
                      onFocus={handleFormStart}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="contact-problem" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1 group-focus-within:text-cyber-purple transition-colors">
                    ¿Qué parte te está dando problemas?
                  </label>
                  <select
                    id="contact-problem"
                    name="que_le_pasa"
                    className="w-full bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-purple focus:ring-0 focus:bg-white/10 outline-none transition-all appearance-none [&>option]:bg-black"
                    value={problem}
                    onFocus={handleFormStart}
                    onChange={(e) => setProblem(e.target.value)}
                  >
                    <option value="" disabled>
                      Elige la que más se acerque…
                    </option>
                    {PROBLEM_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="flex items-start gap-3 text-xs text-slate-400 font-light cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-0.5 accent-[#8B5CF6]"
                  />
                  <span>
                    He leído la{' '}
                    <a href="/privacidad/" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
                      política de privacidad
                    </a>
                    . Tus datos solo se usan para responderte.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-cyber-purple to-cyber-indigo text-white font-black py-6 rounded-2xl text-xs uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'sending' ? 'Enviando…' : 'Pedir mi chequeo gratuito'}
                </button>

                {statusMessage && (
                  <p className="text-sm font-medium text-amber-300">
                    {statusMessage}{' '}
                    {submitStatus === 'error' && (
                      <a
                        href={whatsappUrl('contact_error')}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsappClick('home', 'form_error_fallback')}
                        className="underline text-white"
                      >
                        Abrir WhatsApp →
                      </a>
                    )}
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
