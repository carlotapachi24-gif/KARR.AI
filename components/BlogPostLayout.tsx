import React, { type ReactNode } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { whatsappUrl, trackWhatsappClick } from '../lib/cta';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

type RelatedResource = {
  href: string;
  label: string;
};

type BlogPostLayoutProps = {
  tags: string[];
  title: string;
  dateLabel: string;
  readTime: string;
  ctaEyebrow: string;
  ctaLabel: string;
  relatedResources?: RelatedResource[];
  children: ReactNode;
};

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  tags,
  title,
  dateLabel,
  readTime,
  ctaEyebrow,
  ctaLabel,
  relatedResources = [],
  children,
}) => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <article className="px-6 pt-32 pb-20">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              <a href="/blog/" className="hover:text-white transition-colors">Blog</a>
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-normal uppercase leading-[0.95] mb-6">
              {title}
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">{dateLabel} · {readTime}</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">
              {children}
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">{ctaEyebrow}</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                {ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>

        {relatedResources.length > 0 && (
          <section className="py-16 px-6 border-t border-white/5">
            <div className="max-w-2xl mx-auto">
              <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-6">Mas recursos</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedResources.map((resource) => (
                  <a
                    key={resource.href}
                    href={resource.href}
                    className="glass-card p-6 rounded-2xl flex items-center justify-between gap-4 group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10"
                  >
                    <span className="text-sm font-bold uppercase tracking-wider">{resource.label}</span>
                    <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-[110]">
        <a
          href={whatsappUrl('blog')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('blog', 'fab')}
          className="w-16 h-16 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center active:scale-95 transition-all"
          aria-label="Escribir por WhatsApp (te responde una persona)"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default BlogPostLayout;
