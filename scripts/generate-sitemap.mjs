import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, 'public', 'sitemap.xml');
const SITE_URL = 'https://kairas.es';

const EXCLUDED_DIRS = new Set(['.git', '.claude', 'node_modules', 'dist']);
const EXCLUDED_CANONICAL_PATHS = new Set([
  '/automatizacion-ia-empresas-galicia/',
  '/automatizacion-procesos-empresas/',
  '/gracias/'
]);

const PRIORITY_MAP = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/servicios/': { changefreq: 'monthly', priority: '0.9' },
  '/contacto/': { changefreq: 'monthly', priority: '0.8' },
  '/faq/': { changefreq: 'monthly', priority: '0.6' },
  '/automatizacion-procesos/': { changefreq: 'monthly', priority: '0.9' },
  '/automatizacion-empresas-galicia/': { changefreq: 'monthly', priority: '0.8' },
  '/ia-empresas/': { changefreq: 'monthly', priority: '0.8' },
  '/optimizacion-operativa-pymes/': { changefreq: 'monthly', priority: '0.8' },
  '/automatizacion-whatsapp-empresas/': { changefreq: 'monthly', priority: '0.8' },
  '/crm-pymes-seguimiento-clientes/': { changefreq: 'monthly', priority: '0.8' },
  '/automatizacion-clinicas/': { changefreq: 'monthly', priority: '0.7' },
  '/centros-estetica/': { changefreq: 'weekly', priority: '0.9' },
  '/blog/': { changefreq: 'weekly', priority: '0.7' },
  '/blog/automatizaciones-que-recuperan-tiempo-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/por-que-las-pymes-pierden-clientes-antes-de-firmar/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/dejar-de-gestionar-whatsapp-empresa-a-mano/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/como-saber-que-proceso-automatizar-primero/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/reducir-ausencias-clinicas-recordatorios-automaticos/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/tareas-manuales-que-frenan-tu-negocio/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/seguimiento-leads-pymes-cuando-insistir/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/whatsapp-business-app-vs-api-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/reactivar-leads-frios-sin-perseguir/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/confirmacion-citas-whatsapp-clinicas/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/crm-no-falla-falla-el-proceso/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/herramientas-desconectadas-equipo-va-tarde/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/todo-depende-de-una-sola-persona/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/ia-para-pymes-cuando-tiene-sentido/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/asistente-ia-atencion-cliente-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/conectar-whatsapp-crm-sin-crear-mas-trabajo/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizar-presupuestos-seguimiento-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-empresas-galicia-procesos-retorno/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/seguimiento-pacientes-clinicas-antes-despues-cita/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-academias-matriculas-seguimiento/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-inmobiliarias-leads-portales-whatsapp/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-asesorias-vencimientos-documentos-clientes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/documentar-procesos-pyme-sin-complicarse/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/errores-automatizar-empresa-primera-vez/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/mensajes-automaticos-clientes-cuando-ayudan-molestan/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-gimnasios-renovaciones-seguimiento-socios/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-reformas-instaladoras-presupuestos-visitas/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-procesos-pontevedra-pymes-servicios/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/cuanto-cuesta-automatizar-procesos-pyme/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/diferencia-digitalizacion-automatizacion-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/integrar-calendario-email-crm-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-clinicas-esteticas-primera-consulta-seguimiento/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-despachos-abogados-expedientes-clientes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/onboarding-clientes-pymes-servicios-automatizado/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizar-cobros-recordatorios-pago-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/preparar-datos-empresa-automatizar-ia/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-empresas-vigo-pymes-servicios/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-con-ia-empresas-pymes-servicios/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-procesos-con-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/agencia-automatizacion-ia-como-elegir/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/servicios-consultoria-automatizacion-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/herramientas-automatizacion-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-no-code-flujos-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/gestion-documental-ia-automatizacion-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/chatbot-ia-atencion-cliente-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-inteligente-tareas-repetitivas/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/software-rpa-ia-pymes-antes-comprar/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/que-es-automatizacion-con-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/como-funciona-automatizacion-con-ia-empresa/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/sistema-automatizado-ia-pyme/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/tipos-automatizacion-empresa-reglas-ia-rpa/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/ia-automatizacion-diferencias-trabajan-juntas/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/ejemplos-automatizacion-ia-atencion-ventas-administracion/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/aplicaciones-ia-pymes-servicios/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/tipos-ia-pymes-servicios/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/ia-mas-usadas-empresas-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/chatgpt-vs-otras-ia-empresa/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-tareas-administrativas-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/agentes-ia-automatizacion-procesos-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-ia-whatsapp-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-con-ia-generativa-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-con-ia-n8n-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-con-ia-make-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-procesos-contables-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-ia-marketing-digital-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-ia-gratis-pymes-riesgos/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/curso-automatizacion-ia-pymes-delegar/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-industrial-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/n8n-vs-make-automatizacion-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/power-automate-ia-microsoft-365-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-email-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-facturas-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/lead-scoring-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/calcular-roi-automatizacion-ia/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/seguridad-datos-automatizacion-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/mantenimiento-automatizaciones-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/piloto-automatizacion-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-youtube-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-google-workspace-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/manychat-automatizacion-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-redes-sociales-ia-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-logistica-ia-pymes-servicios/': { changefreq: 'monthly', priority: '0.6' },
  '/blog/automatizacion-ia-principiantes-pymes/': { changefreq: 'monthly', priority: '0.6' },
  '/accesibilidad/': { changefreq: 'yearly', priority: '0.3' },
  '/privacidad/': { changefreq: 'yearly', priority: '0.3' },
  '/aviso-legal/': { changefreq: 'yearly', priority: '0.3' },
  '/cookies/': { changefreq: 'yearly', priority: '0.1' }
};
const REQUIRED_CANONICAL_PATHS = Object.keys(PRIORITY_MAP);

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (EXCLUDED_DIRS.has(entry.name)) {
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

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

const seen = new Map();

for (const filePath of walk(ROOT)) {
  const html = fs.readFileSync(filePath, 'utf8');
  const robots = extract(html, /<meta\s+name="robots"\s+content="([^"]+)"/i).toLowerCase();
  const canonical = extract(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);

  if (!canonical || robots.includes('noindex') || !robots.includes('index')) {
    continue;
  }

  const canonicalPath = canonicalToPath(canonical);
  if (!canonicalPath || !canonical.startsWith(SITE_URL)) {
    continue;
  }
  if (EXCLUDED_CANONICAL_PATHS.has(canonicalPath)) {
    continue;
  }

  const stats = fs.statSync(filePath);
  const sourcePath = toPosix(path.relative(ROOT, filePath));

  const previous = seen.get(canonicalPath);
  if (!previous || stats.mtimeMs > previous.mtimeMs) {
    seen.set(canonicalPath, {
      canonical: `${SITE_URL}${canonicalPath}`,
      mtimeMs: stats.mtimeMs,
      lastmod: formatDate(stats.mtime),
      sourcePath
    });
  }
}

const urls = Array.from(seen.entries())
  .sort(([a], [b]) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  })
  .map(([pathname, data]) => {
    const defaults = PRIORITY_MAP[pathname] ?? { changefreq: 'monthly', priority: '0.5' };
    return {
      loc: data.canonical,
      lastmod: data.lastmod,
      changefreq: defaults.changefreq,
      priority: defaults.priority,
      sourcePath: data.sourcePath
    };
  });

const missingRequiredPaths = REQUIRED_CANONICAL_PATHS.filter((pathname) => !seen.has(pathname));
if (missingRequiredPaths.length > 0) {
  console.error('Sitemap generation failed. Missing required canonical paths:');
  for (const pathname of missingRequiredPaths) {
    console.error(`- ${SITE_URL}${pathname}`);
  }
  process.exit(1);
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(
    (url) => [
      '  <url>',
      `    <loc>${url.loc}</loc>`,
      `    <lastmod>${url.lastmod}</lastmod>`,
      `    <changefreq>${url.changefreq}</changefreq>`,
      `    <priority>${url.priority}</priority>`,
      '  </url>'
    ].join('\n')
  ),
  '</urlset>',
  ''
].join('\n');

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, xml, 'utf8');

console.log(`Generated sitemap with ${urls.length} URLs -> ${toPosix(path.relative(ROOT, OUTPUT))}`);
