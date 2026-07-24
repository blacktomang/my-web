import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://blacktomang.github.io',
  output: 'static',
  integrations: [mdx(), sitemap()],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },

  build: {
    format: 'directory',
  },

  adapter: cloudflare()
});