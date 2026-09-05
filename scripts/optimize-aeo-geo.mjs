import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SITE_ORIGIN = 'https://kairas.es';
const HOME_URL = `${SITE_ORIGIN}/`;
const ORG_ID = `${SITE_ORIGIN}/#organization`;
const PERSON_ID = `${SITE_ORIGIN}/#carlota-lopez-carracedo`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
const BLOG_ID = `${SITE_ORIGIN}/blog/#blog`;
const DEFAULT_IMAGE = `${SITE_ORIGIN}/og-kairas.webp`;
const LOGO_URL = `${SITE_ORIGIN}/logos_KAIRAS_ISOLOGO_HORIZONTAL_NEGRO.png`;

const EXCLUDED_DIRS = new Set(['.git', '.claude', 'node_modules', 'dist']);

const KNOWS_ABOUT = [
  'automatizacion de procesos',
  'inteligencia artificial aplicada a pymes',
  'automatizacion con IA',
  'CRM para pymes',
  'seguimiento de clientes',
  'automatizacion de WhatsApp',
  'automatizacion de clinicas',
  'optimizacion operativa',
  'integracion de herramientas',
  'no-code automation',
  'datos operativos para pymes'
];

const AREA_SERVED = [
  { '@type': 'AdministrativeArea', name: 'Galicia' },
  { '@type': 'Country', name: 'Espana' },
  { '@type': 'City', name: 'Vigo' },
  { '@type': 'City', name: 'Pontevedra' },
  { '@type': 'City', name: 'Santiago de Compostela' },
  { '@type': 'City', name: 'A Coruna' },
  { '@type': 'City', name: 'Ourense' },
  { '@type': 'City', name: 'Lugo' }
];

const BUSINESS_AUDIENCE = {
  '@type': 'BusinessAudience',
  audienceType: 'pymes de servicios en Galicia y Espana'
};

const SERVICE_DETAILS = new Map([
  [
    '/servicios/',
    {
      name: 'Servicios de automatizacion para pymes',
      serviceType: [
        'automatizacion de procesos',
        'automatizacion de WhatsApp',
        'CRM y seguimiento de clientes',
        'automatizacion con IA',
        'optimizacion operativa'
      ]
    }
  ],
  [
    '/automatizacion-procesos/',
    {
      name: 'Automatizacion de procesos para pymes',
      serviceType: [
        'automatizacion de procesos',
        'reduccion de tareas manuales',
        'integracion de herramientas',
        'sistemas operativos para pymes'
      ]
    }
  ],
  [
    '/automatizacion-empresas-galicia/',
    {
      name: 'Automatizacion para empresas en Galicia',
      serviceType: [
        'automatizacion de empresas',
        'automatizacion de procesos en Galicia',
        'consultoria de automatizacion',
        'IA aplicada a pymes gallegas'
      ]
    }
  ],
  [
    '/ia-empresas/',
    {
      name: 'IA para empresas de servicios',
      serviceType: [
        'inteligencia artificial para empresas',
        'automatizacion con IA',
        'asistentes de IA',
        'clasificacion y resumen con IA'
      ]
    }
  ],
  [
    '/optimizacion-operativa-pymes/',
    {
      name: 'Optimizacion operativa para pymes',
      serviceType: [
        'optimizacion operativa',
        'mejora de procesos',
        'reduccion de carga manual',
        'priorizacion de automatizaciones'
      ]
    }
  ],
  [
    '/automatizacion-whatsapp-empresas/',
    {
      name: 'Automatizacion de WhatsApp para empresas',
      serviceType: [
        'automatizacion de WhatsApp',
        'atencion al cliente automatizada',
        'cualificacion de consultas',
        'seguimiento comercial por WhatsApp'
      ]
    }
  ],
  [
    '/crm-pymes-seguimiento-clientes/',
    {
      name: 'CRM y seguimiento de clientes para pymes',
      serviceType: [
        'CRM para pymes',
        'seguimiento de leads',
        'automatizacion comercial',
        'reactivacion de oportunidades'
      ]
    }
  ],
  [
    '/automatizacion-clinicas/',
    {
      name: 'Automatizacion para clinicas',
      serviceType: [
        'automatizacion de clinicas',
        'recordatorios de citas',
        'seguimiento de pacientes',
        'automatizacion de agenda'
      ]
    }
  ],
  [
    '/centros-estetica/',
    {
      name: 'Sistema de seguimiento para centros de estetica',
      serviceType: [
        'seguimiento de valoraciones',
        'automatizacion para centros de estetica',
        'recordatorios y consultas',
        'medicion de fugas comerciales'
      ]
    }
  ]
]);

const LEGAL_PATHS = new Set(['/accesibilidad/', '/aviso-legal/', '/cookies/', '/privacidad/']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && EXCLUDED_DIRS.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name === 'index.html') {
      files.push(fullPath);
    }
  }

  return files;
}

function extract(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : '';
}

function canonicalToPath(canonicalUrl) {
  try {
    const url = new URL(canonicalUrl);
    return url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
  } catch {
    return '';
  }
}

function decodeHtmlEntities(value) {
  const named = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: ' ',
    mdash: '-',
    ndash: '-',
    hellip: '...',
    euro: 'EUR',
    aacute: 'a',
    eacute: 'e',
    iacute: 'i',
    oacute: 'o',
    uacute: 'u',
    Aacute: 'A',
    Eacute: 'E',
    Iacute: 'I',
    Oacute: 'O',
    Uacute: 'U',
    ntilde: 'n',
    Ntilde: 'N',
    iquest: '',
    iexcl: ''
  };

  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&([a-zA-Z]+);/g, (match, key) => named[key] ?? match);
}

function toAscii(value) {
  return decodeHtmlEntities(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7E]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanTitle(html) {
  const raw = extract(html, /<title>([\s\S]*?)<\/title>/i);
  const withoutBrand = raw
    .replace(/\s+\|\s+KAIRAS.*$/i, '')
    .replace(/\s+-\s+KAIRAS.*$/i, '')
    .replace(/^KAIRAS\s+[-&mdash;]+\s+/i, 'KAIRAS: ');
  return toAscii(withoutBrand || 'KAIRAS');
}

function metaDescription(html) {
  return toAscii(extract(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i));
}

function metaRobots(html) {
  return extract(html, /<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i).toLowerCase();
}

function isIndexable(html) {
  const robots = metaRobots(html);
  if (robots.includes('noindex')) {
    return false;
  }
  return !robots || robots.includes('index');
}

function typeList(node) {
  const type = node?.['@type'];
  if (Array.isArray(type)) {
    return type;
  }
  return type ? [type] : [];
}

function hasType(node, type) {
  return typeList(node).includes(type);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function removeContext(node) {
  if (node && typeof node === 'object' && !Array.isArray(node)) {
    const copy = { ...node };
    delete copy['@context'];
    return copy;
  }
  return node;
}

function jsonLdBlocks(html) {
  const blocks = [];
  const regex = /<script\b(?=[^>]*type=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    blocks.push(match[1].trim());
  }

  return blocks;
}

function parseJsonLd(html, filePath) {
  const nodes = [];

  for (const block of jsonLdBlocks(html)) {
    try {
      const parsed = JSON.parse(block);
      const values = Array.isArray(parsed) ? parsed : [parsed];

      for (const value of values) {
        if (value?.['@graph'] && Array.isArray(value['@graph'])) {
          nodes.push(...value['@graph']);
        } else {
          nodes.push(value);
        }
      }
    } catch (error) {
      throw new Error(`Invalid JSON-LD in ${path.relative(ROOT, filePath)}: ${error.message}`);
    }
  }

  return nodes.map(removeContext);
}

function isOrganizationNode(node) {
  const types = typeList(node);
  const looksLikeKairas = `${node?.name ?? ''}`.toLowerCase().includes('kairas') || node?.url === HOME_URL;
  return looksLikeKairas && (types.includes('Organization') || types.includes('ProfessionalService') || types.includes('LocalBusiness'));
}

function isWebsiteNode(node) {
  return hasType(node, 'WebSite');
}

function isAuthorNode(node) {
  return hasType(node, 'Person') && `${node?.name ?? ''}`.toLowerCase().includes('carlota');
}

function isBreadcrumbNode(node) {
  return hasType(node, 'BreadcrumbList');
}

function isBlogNode(node) {
  return hasType(node, 'Blog');
}

function isPageNode(node) {
  return ['WebPage', 'CollectionPage', 'ContactPage', 'AboutPage'].some((type) => hasType(node, type));
}

function asArray(value) {
  if (!value) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean).map((value) => toAscii(`${value}`)).filter(Boolean))];
}

function organizationNode() {
  return {
    '@id': ORG_ID,
    '@type': ['Organization', 'ProfessionalService'],
    name: 'KAIRAS',
    alternateName: 'Kairas',
    url: HOME_URL,
    logo: LOGO_URL,
    image: DEFAULT_IMAGE,
    email: 'carlota.kairas@gmail.com',
    description:
      'KAIRAS ayuda a pymes de servicios a automatizar procesos, WhatsApp, CRM, seguimiento de clientes y tareas operativas con IA aplicada y control humano.',
    founder: { '@id': PERSON_ID },
    foundingLocation: { '@type': 'Place', name: 'Galicia, Espana' },
    areaServed: AREA_SERVED,
    knowsAbout: KNOWS_ABOUT,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'carlota.kairas@gmail.com',
        contactType: 'consultoria y automatizacion',
        areaServed: 'ES',
        availableLanguage: ['Spanish', 'es-ES']
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios KAIRAS',
      itemListElement: [...SERVICE_DETAILS.entries()].map(([pathname, details]) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: details.name,
          url: `${SITE_ORIGIN}${pathname}`,
          serviceType: details.serviceType
        }
      }))
    }
  };
}

function personNode() {
  return {
    '@id': PERSON_ID,
    '@type': 'Person',
    name: 'Carlota Lopez Carracedo',
    worksFor: { '@id': ORG_ID },
    jobTitle: 'Fundadora de KAIRAS',
    knowsAbout: KNOWS_ABOUT
  };
}

function websiteNode() {
  return {
    '@id': WEBSITE_ID,
    '@type': 'WebSite',
    name: 'KAIRAS',
    url: HOME_URL,
    inLanguage: 'es-ES',
    publisher: { '@id': ORG_ID },
    about: { '@id': ORG_ID }
  };
}

function blogNode() {
  return {
    '@id': BLOG_ID,
    '@type': 'Blog',
    name: 'Blog KAIRAS',
    url: `${SITE_ORIGIN}/blog/`,
    inLanguage: 'es-ES',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    author: { '@id': PERSON_ID },
    about: KNOWS_ABOUT.map((name) => ({ '@type': 'Thing', name }))
  };
}

function pageType(pathname) {
  if (pathname === '/blog/') {
    return 'CollectionPage';
  }
  if (pathname === '/contacto/') {
    return 'ContactPage';
  }
  return 'WebPage';
}

function topicHints(page, node = {}) {
  const hints = [];
  const keywords = asArray(node.keywords).flatMap((keyword) => `${keyword}`.split(/[;,]/));
  hints.push(...keywords);

  const source = `${page.pathname} ${page.title} ${page.description}`.toLowerCase();
  if (source.includes('whatsapp')) hints.push('automatizacion de WhatsApp');
  if (source.includes('crm') || source.includes('lead')) hints.push('CRM para pymes', 'seguimiento de clientes');
  if (source.includes('clinic')) hints.push('automatizacion para clinicas');
  if (source.includes('estet')) hints.push('automatizacion para centros de estetica');
  if (source.includes('galicia') || source.includes('vigo') || source.includes('pontevedra')) hints.push('automatizacion de empresas en Galicia');
  if (source.includes('ia')) hints.push('automatizacion con IA', 'inteligencia artificial aplicada a pymes');
  if (source.includes('proceso')) hints.push('automatizacion de procesos');

  return uniqueStrings([...hints, ...KNOWS_ABOUT]).slice(0, 10).map((name) => ({ '@type': 'Thing', name }));
}

function normalizeContentNode(node, page) {
  const copy = removeContext(clone(node));

  if (hasType(copy, 'BlogPosting')) {
    copy['@id'] = `${page.canonical}#article`;
    copy.url = page.canonical;
    copy.mainEntityOfPage = { '@id': `${page.canonical}#webpage` };
    copy.author = { '@id': PERSON_ID };
    copy.publisher = { '@id': ORG_ID };
    copy.isPartOf = { '@id': BLOG_ID };
    copy.image = copy.image || DEFAULT_IMAGE;
    copy.inLanguage = copy.inLanguage || 'es-ES';
    copy.description = copy.description || page.description;
    copy.about = topicHints(page, copy);
    copy.audience = clone(BUSINESS_AUDIENCE);
  }

  if (hasType(copy, 'FAQPage')) {
    copy['@id'] = `${page.canonical}#faq`;
    copy.inLanguage = copy.inLanguage || 'es-ES';
    copy.isPartOf = { '@id': `${page.canonical}#webpage` };
    copy.about = { '@id': ORG_ID };
  }

  if (hasType(copy, 'Service')) {
    const details = SERVICE_DETAILS.get(page.pathname);
    copy['@id'] = `${page.canonical}#service`;
    copy.url = page.canonical;
    copy.name = copy.name || details?.name || page.title;
    copy.provider = { '@id': ORG_ID };
    copy.areaServed = AREA_SERVED;
    copy.audience = clone(BUSINESS_AUDIENCE);
    copy.inLanguage = copy.inLanguage || 'es-ES';
    copy.mainEntityOfPage = { '@id': `${page.canonical}#webpage` };
    copy.serviceType = uniqueStrings([...asArray(copy.serviceType), ...(details?.serviceType ?? [])]);
    copy.category = 'automatizacion, IA aplicada y optimizacion operativa para pymes de servicios';
  }

  return copy;
}

function serviceNode(page) {
  const details = SERVICE_DETAILS.get(page.pathname);
  if (!details) {
    return null;
  }

  return {
    '@id': `${page.canonical}#service`,
    '@type': 'Service',
    name: details.name,
    url: page.canonical,
    serviceType: details.serviceType,
    category: 'automatizacion, IA aplicada y optimizacion operativa para pymes de servicios',
    provider: { '@id': ORG_ID },
    areaServed: AREA_SERVED,
    audience: clone(BUSINESS_AUDIENCE),
    inLanguage: 'es-ES',
    mainEntityOfPage: { '@id': `${page.canonical}#webpage` }
  };
}

function pageNode(page, primaryEntityId) {
  const node = {
    '@id': `${page.canonical}#webpage`,
    '@type': pageType(page.pathname),
    url: page.canonical,
    name: page.title,
    description: page.description,
    inLanguage: 'es-ES',
    isPartOf: { '@id': WEBSITE_ID },
    about: page.pathname.startsWith('/blog/') ? topicHints(page) : { '@id': ORG_ID },
    breadcrumb: { '@id': `${page.canonical}#breadcrumb` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: DEFAULT_IMAGE
    }
  };

  if (primaryEntityId) {
    node.mainEntity = { '@id': primaryEntityId };
  }

  if (LEGAL_PATHS.has(page.pathname)) {
    node.about = { '@id': ORG_ID };
  }

  return node;
}

function breadcrumbNode(page) {
  const crumbs = [{ name: 'Inicio', item: HOME_URL }];

  if (page.pathname === '/blog/') {
    crumbs.push({ name: 'Blog', item: `${SITE_ORIGIN}/blog/` });
  } else if (page.pathname.startsWith('/blog/')) {
    crumbs.push({ name: 'Blog', item: `${SITE_ORIGIN}/blog/` });
    crumbs.push({ name: page.title, item: page.canonical });
  } else if (page.pathname !== '/') {
    crumbs.push({ name: page.title, item: page.canonical });
  }

  return {
    '@id': `${page.canonical}#breadcrumb`,
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item
    }))
  };
}

function buildGraph(existingNodes, page) {
  const normalized = [];
  let primaryEntityId = null;
  let hasService = false;

  for (const node of existingNodes) {
    if (!node || typeof node !== 'object' || Array.isArray(node)) {
      continue;
    }

    if (
      isOrganizationNode(node) ||
      isWebsiteNode(node) ||
      isAuthorNode(node) ||
      isBreadcrumbNode(node) ||
      isBlogNode(node) ||
      isPageNode(node)
    ) {
      continue;
    }

    const contentNode = normalizeContentNode(node, page);
    if (hasType(contentNode, 'BlogPosting')) {
      primaryEntityId = `${page.canonical}#article`;
    }
    if (hasType(contentNode, 'Service')) {
      hasService = true;
      primaryEntityId = `${page.canonical}#service`;
    }
    if (hasType(contentNode, 'FAQPage') && !primaryEntityId) {
      primaryEntityId = `${page.canonical}#faq`;
    }
    normalized.push(contentNode);
  }

  const inferredService = !hasService ? serviceNode(page) : null;
  if (inferredService) {
    primaryEntityId = `${page.canonical}#service`;
  }

  if (page.pathname === '/blog/' && !primaryEntityId) {
    primaryEntityId = BLOG_ID;
  }

  return [
    organizationNode(),
    personNode(),
    websiteNode(),
    ...(page.pathname.startsWith('/blog/') ? [blogNode()] : []),
    pageNode(page, primaryEntityId),
    ...normalized,
    ...(inferredService ? [inferredService] : []),
    breadcrumbNode(page)
  ];
}

function formatJsonLd(graph) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  return `    <script type="application/ld+json">\n    ${json}\n    </script>`;
}

function removeJsonLd(html) {
  return html.replace(/\s*<script\b(?=[^>]*type=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>\s*/gi, '\n');
}

function ensureDiscoveryLinks(html) {
  const links = [
    {
      href: `${SITE_ORIGIN}/llms.txt`,
      markup: `<link rel="alternate" type="text/plain" title="KAIRAS llms.txt" href="${SITE_ORIGIN}/llms.txt" />`
    },
    {
      href: `${SITE_ORIGIN}/answers.md`,
      markup: `<link rel="alternate" type="text/markdown" title="KAIRAS answer brief" href="${SITE_ORIGIN}/answers.md" />`
    },
    {
      href: `${SITE_ORIGIN}/okf/index.md`,
      markup: `<link rel="alternate" type="text/markdown" title="KAIRAS open knowledge file" href="${SITE_ORIGIN}/okf/index.md" />`
    }
  ];

  const missing = links.filter((link) => !html.includes(link.href));
  if (missing.length === 0) {
    return html;
  }

  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'][^"']+["']\s*\/?>/i);
  if (!canonicalMatch) {
    return html;
  }

  return html.replace(canonicalMatch[0], `${canonicalMatch[0]}\n    ${missing.map((link) => link.markup).join('\n    ')}`);
}

function optimizeFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const canonical = extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);

  if (!canonical || !canonical.startsWith(SITE_ORIGIN) || !isIndexable(html)) {
    return { changed: false, skipped: true };
  }

  const pathname = canonicalToPath(canonical);
  if (!pathname) {
    return { changed: false, skipped: true };
  }

  const page = {
    canonical: `${SITE_ORIGIN}${pathname}`,
    pathname,
    title: cleanTitle(html),
    description: metaDescription(html)
  };

  const existingNodes = parseJsonLd(html, filePath);
  const graph = buildGraph(existingNodes, page);
  const schema = formatJsonLd(graph);

  let nextHtml = removeJsonLd(html);
  nextHtml = ensureDiscoveryLinks(nextHtml);
  nextHtml = nextHtml.replace(/<\/head>/i, `${schema}\n</head>`);
  nextHtml = nextHtml.replace(/\n{3,}/g, '\n\n');

  if (nextHtml !== html) {
    fs.writeFileSync(filePath, nextHtml, 'utf8');
    return { changed: true, skipped: false };
  }

  return { changed: false, skipped: false };
}

const files = walk(ROOT);
let changed = 0;
let optimized = 0;
let skipped = 0;

for (const filePath of files) {
  const result = optimizeFile(filePath);
  if (result.skipped) {
    skipped += 1;
    continue;
  }
  optimized += 1;
  if (result.changed) {
    changed += 1;
  }
}

console.log(`AEO/GEO optimized ${optimized} indexable HTML pages (${changed} changed, ${skipped} skipped).`);
