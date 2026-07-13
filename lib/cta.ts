// Ruta única de conversión (WhatsApp) + eventos de medición (GTM dataLayer).
// Recepción SIEMPRE humana: este enlace no inicia ningún bot.

export const WHATSAPP_NUMBER = '34622262076';

const DEFAULT_MESSAGE = 'Hola, Carlota. Quiero revisar una parte de la operativa de mi negocio.';

type EventParams = Record<string, string | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function pushEvent(event: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  const clean: Record<string, string> = {};
  Object.entries(params).forEach(([k, v]) => {
    if (v) clean[k] = v;
  });
  window.dataLayer.push({ event, ...clean });
}

// Identificador de origen legible dentro del propio mensaje: permite saber
// desde qué página/campaña llegó la conversación aunque WhatsApp no acepte UTM.
function originLabel(page: string): string {
  if (typeof window === 'undefined') return page;
  const utm = new URLSearchParams(window.location.search);
  const source = utm.get('utm_source');
  const campaign = utm.get('utm_campaign');
  const parts = [page, source, campaign].filter(Boolean);
  return parts.join(' · ');
}

export function whatsappUrl(page: string, message: string = DEFAULT_MESSAGE): string {
  const text = `${message} (Vengo de la web: ${originLabel(page)})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function trackWhatsappClick(page: string, cta: string): void {
  const utm = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  pushEvent('click_whatsapp', {
    page,
    cta,
    utm_source: utm?.get('utm_source') ?? undefined,
    utm_campaign: utm?.get('utm_campaign') ?? undefined,
  });
}
