import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true
  }),
  integrations: [react(), tailwind()],
  markdown: {
    syntaxHighlight: 'prism'
  }
});