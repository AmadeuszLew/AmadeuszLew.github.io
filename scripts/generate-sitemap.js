// Writes sitemap.xml next to the prerendered pages, listing every route from prerender-routes.txt.
// URLs use the trailing-slash form because GitHub Pages serves each route as <route>/index.html.
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://amadeuszlewandowski.pl';
const root = path.join(__dirname, '..');
const outputDir = path.join(root, 'dist/AmadeuszPortfolio/browser');

if (!fs.existsSync(outputDir)) {
  console.error(`${outputDir} not found! Build the project first.`);
  process.exit(1);
}

const routes = fs
  .readFileSync(path.join(root, 'prerender-routes.txt'), 'utf8')
  .split('\n')
  .map((route) => route.trim())
  .filter(Boolean);

const urls = routes.map((route) => {
  const loc = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.replace(/\/?$/, '/')}`;
  return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap);
console.log(`sitemap.xml written with ${routes.length} URLs`);
