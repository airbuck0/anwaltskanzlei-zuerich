import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anwaltskanzleizuerich.ch',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],
});
