export type PressItem = {
  id: string;
  type: 'audio' | 'article' | 'video';
  outlet: string;
  section?: string;
  date: string;
  title: string;
  excerpt?: string;
  sourceLabel?: string;
  url?: string;
  audioSrc?: string;
  allowDownload?: boolean;
  transcript?: string;
};

export const pressItems: PressItem[] = [
  {
    id: 'radio-estrada-2026-08-14',
    type: 'audio',
    outlet: 'Radio Estrada',
    date: '2026-08-14',
    title: 'Entrevista sobre KAIRAS, automatización e inteligencia artificial aplicada a pymes',
    excerpt:
      'Una conversación con Carlota López sobre el origen de KAIRAS y el uso práctico de la automatización y la inteligencia artificial en pequeñas y medianas empresas.',
    sourceLabel: 'Fuente: Radio Estrada',
    audioSrc: '/radio-estrada-entrevista-kairas-2026-08-14.mp3',
    allowDownload: false,
  },
  {
    id: 'faro-de-vigo-2026-08-05',
    type: 'article',
    outlet: 'Faro de Vigo',
    section: 'Deza-Tabeirós-Montes',
    date: '2026-08-05',
    title: 'Carlota López acerca la inteligencia artificial a pequeñas y medianas empresas',
    // Añade aquí un extracto autorizado cuando esté disponible. No se muestra
    // ningún texto de la noticia mientras este campo permanezca sin definir.
    excerpt: undefined,
    url: 'https://www.farodevigo.es/deza-tabeiros-montes/2026/08/05/carlota-lopez-acerca-inteligencia-artificial-a-pequenas-medianas-empresas-133124217.html',
    sourceLabel: 'Fuente: Faro de Vigo',
  },
];

export function formatPressDate(date: string): string {
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
