const fs = require('fs');
const { bundleMDX } = require('mdx-bundler');

function addPage(page) {
  const path = page
    .replace('src/pages', '')
    .replace('.page.js', '')
    .replace('.page.mdx', '')
    .replace('/index', '/');
  const route = path === '/index' ? '' : path;

  // Exclude 404 page and generated `[]` pages
  if (route.includes('[') || route.includes('404')) return;

  return `  <url>
    <loc>${`${process.env.NEXT_PUBLIC_WEBSITE_URL}${route}`}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
}

async function generateSitemap() {
  const { globby } = await import('globby');
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/**/*{.page.js,.page.mdx}',
    '!src/pages/_*.js',
    '!src/pages/api',
  ]);

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
