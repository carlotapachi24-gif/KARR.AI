import React from 'react';
import { ArrowRight, Mic2, Newspaper } from 'lucide-react';
import { formatPressDate, pressItems } from '../lib/press';

const PressHome: React.FC = () => {
  return (
    <section className="-mt-16 px-6 pb-20 pt-0 sm:pb-24" aria-labelledby="press-home-title">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-[#121015]/75 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#A78BFA]">Han hablado de KAIRAS</p>
              <h2 id="press-home-title" className="text-[clamp(0.875rem,5vw,4.5rem)] font-black uppercase leading-none tracking-tighter">
                <span className="block whitespace-nowrap">Automatización e IA,</span>
                <span className="block whitespace-nowrap">contadas desde la práctica</span>
              </h2>
            </div>
            <a
              href="/prensa/"
              className="inline-flex w-fit self-end items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyber-cyan transition-colors hover:text-white"
            >
              Ver apariciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {pressItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 px-5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-cyber-cyan">
                  {item.type === 'audio' ? <Mic2 className="h-4 w-4" /> : <Newspaper className="h-4 w-4" />}
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-white">{item.outlet}</p>
                  <p className="mt-1 text-xs text-slate-400">{formatPressDate(item.date)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressHome;
