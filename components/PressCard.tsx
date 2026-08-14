import React from 'react';
import { ArrowUpRight, Download, Mic2, Newspaper } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import { pushEvent } from '../lib/cta';
import { formatPressDate, type PressItem } from '../lib/press';

type PressCardProps = {
  item: PressItem;
  featured?: boolean;
};

const PressCard: React.FC<PressCardProps> = ({ item, featured = false }) => {
  const isAudio = item.type === 'audio';
  const titleId = `press-title-${item.id}`;

  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121015]/90 ${
        featured ? 'p-6 sm:p-8 lg:p-12' : 'p-6 sm:p-8 lg:p-10'
      }`}
      aria-labelledby={titleId}
    >
      {featured && <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyber-purple/10 blur-3xl" />}

      <div className="relative">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cyber-cyan">
              {isAudio ? <Mic2 className="h-4 w-4" /> : <Newspaper className="h-4 w-4" />}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyber-cyan">
              {isAudio ? 'Radio' : 'Prensa'}
            </span>
          </div>
          <time dateTime={item.date} className="text-xs text-slate-400">
            {formatPressDate(item.date)}
          </time>
        </div>

        <div className={featured ? 'grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:items-end lg:gap-12' : ''}>
          <div>
            <p className="mb-4 text-sm font-bold text-white">{item.outlet}</p>
            {item.section && (
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.section}</p>
            )}
            <h2 id={titleId} className={`${featured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-2xl sm:text-3xl'} font-black leading-tight tracking-tight text-[#E1E8F0]`}>
              {item.title}
            </h2>
            {item.excerpt && <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">{item.excerpt}</p>}
          </div>

          <div className={featured ? '' : 'mt-8'}>
            {isAudio && item.audioSrc && (
              <>
                <AudioPlayer src={item.audioSrc} title={item.title} pressId={item.id} outlet={item.outlet} />
                {item.allowDownload && (
                  <a
                    href={item.audioSrc}
                    download
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-300 transition-colors hover:text-white"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Descargar audio
                  </a>
                )}
                {item.transcript && (
                  <details className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-slate-300">
                    <summary className="cursor-pointer font-bold text-white">Leer transcripción</summary>
                    <p className="mt-4 whitespace-pre-line leading-7">{item.transcript}</p>
                  </details>
                )}
              </>
            )}
            {item.type === 'article' && item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer external"
                onClick={() => pushEvent('press_article_click', { press_id: item.id, outlet: item.outlet })}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-cyber-purple/60 hover:bg-cyber-purple/10"
                aria-label={`Leer noticia completa en ${item.outlet} (se abre en una pestaña nueva)`}
              >
                Leer noticia completa
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {item.sourceLabel && <p className="relative mt-8 text-[10px] uppercase tracking-[0.18em] text-slate-400">{item.sourceLabel}</p>}
      </div>
    </article>
  );
};

export default PressCard;
