import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TARGET_ROOT = process.argv.includes('--dist') ? path.join(ROOT, 'dist') : ROOT;
const SITE_ORIGIN = 'https://kairas.es';
const EXCLUDED_DIRS = new Set(['.git', '.claude', 'node_modules', 'dist']);
const SOURCE_STATIC_FILES = [
  'public/llms.txt',
  'public/answers.md',
  'public/pricing.md',
  'public/okf/index.md',
  'public/okf/company.md',
  'public/okf/services.md',
  'public/okf/blog-clusters.md',
  'public/okf/faq.md'
];
const DIST_STATIC_FILES = SOURCE_STATIC_FILES.map((file) => file.replace(/^public\//, ''));
const REQUIRED_STATIC_FILES = TARGET_ROOT.endsWith(`${path.sep}dist`) ? DIST_STATIC_FILES : SOURCE_STATIC_FILES;

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

function isIndexable(html, canonical) {
  const robots = extract(html, /<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i).toLowerCase();
  return canonical.startsWith(SITE_ORIGIN) && !robots.includes('noindex') && (!robots || robots.includes('index'));
}

function jsonLdGraphs(html, filePath) {
  const graphs = [];
  const regex = /<script\b(?=[^>]*type=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const parsed = JSON.parse(match[1]);
    if (Array.isArray(parsed['@graph'])) {
      graphs.push(parsed['@graph']);
    } else {
      graphs.push([parsed]);
    }
  }

  if (graphs.length === 0) {
    throw new Error(`Missing JSON-LD in ${path.relative(ROOT, filePath)}`);
  }

  return graphs;
}

function hasType(graph, expectedType) {
  return graph.some((node) => {
    const type = node?.['@type'];
    return Array.isArray(type) ? type.includes(expectedType) : type === expectedType;
  });
}

const errors = [];
let indexablePages = 0;
let pagesWithBreadcrumb = 0;
let pagesWithDiscoveryLinks = 0;
let pagesWithOrganization = 0;
let pagesWithWebSite = 0;

for (const filePath of walk(TARGET_ROOT)) {
  const html = fs.readFileSync(filePath, 'utf8');
  const canonical = extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);

  if (!isIndexable(html, canonical)) {
    continue;
  }

  indexablePages += 1;

  if (
    html.includes(`${SITE_ORIGIN}/llms.txt`) &&
    html.includes(`${SITE_ORIGIN}/answers.md`) &&
    html.includes(`${SITE_ORIGIN}/okf/index.md`)
  ) {
    pagesWithDiscoveryLinks += 1;
  } else {
    errors.push(`Missing AEO discovery links in ${path.relative(ROOT, filePath)}`);
  }

  try {
    const graph = jsonLdGraphs(html, filePath).flat();

    if (hasType(graph, 'BreadcrumbList')) pagesWithBreadcrumb += 1;
    else errors.push(`Missing BreadcrumbList in ${path.relative(ROOT, filePath)}`);

    if (graph.some((node) => hasType([node], 'Organization') || hasType([node], 'ProfessionalService'))) {
      pagesWithOrganization += 1;
    } else {
      errors.push(`Missing Organization/ProfessionalService in ${path.relative(ROOT, filePath)}`);
    }

    if (hasType(graph, 'WebSite')) pagesWithWebSite += 1;
    else errors.push(`Missing WebSite in ${path.relative(ROOT, filePath)}`);
  } catch (error) {
    errors.push(error.message);
  }
}

for (const file of REQUIRED_STATIC_FILES) {
  if (!fs.existsSync(path.join(TARGET_ROOT, file))) {
    errors.push(`Missing static AEO/GEO resource: ${file}`);
  }
}

const summary = {
  indexablePages,
  pagesWithBreadcrumb,
  pagesWithDiscoveryLinks,
  pagesWithOrganization,
  pagesWithWebSite,
  staticResources: REQUIRED_STATIC_FILES.length,
  errors: errors.length
};

console.log(JSON.stringify(summary, null, 2));

if (errors.length > 0) {
  for (const error of errors.slice(0, 20)) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}
