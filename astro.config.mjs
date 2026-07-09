import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Dev-only: serve `public/<dir>/index.html` for "/<dir>/" requests in `astro dev`.
// The production static build (astro preview, Vercel, etc.) already resolves directory
// indexes; Vite's dev server does not, so this makes `/ecma424/` (etc.) work locally
// without requiring the trailing `index.html`.
const publicDir = fileURLToPath(new URL('./public', import.meta.url));
const devDirectoryIndex = {
  name: 'tc54-dev-directory-index',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const [pathname, search] = (req.url || '').split('?');
      if (pathname.endsWith('/') && pathname !== '/') {
        const candidate = path.join(publicDir, pathname, 'index.html');
        if (candidate.startsWith(publicDir + path.sep) && fs.existsSync(candidate)) {
          req.url = pathname + 'index.html' + (search ? '?' + search : '');
        }
      }
      next();
    });
  },
};

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://tc54.org',
  integrations: [react(), tailwind(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  })],
  vite: {
    plugins: [devDirectoryIndex],
  },
  markdown: {
    syntaxHighlight: 'prism'
  }
});
