import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import remarkHtml from 'remark-html';
import { remarkReadingTime } from './remark-reading-time.mjs';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://beta.noobscience.rocks",
  integrations: [react(), tailwind(), mdx(), sitemap()],
  output: "server",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkHtml, remarkReadingTime],
    gfm: true,
    shikiConfig: {
      theme: 'monokai',
      langs: ['javascript', 'html', 'css', 'typescript', 'tsx', 'jsx', 'json', 'markdown', 'mdx', 'bash', 'shell', 'md', 'mdx', 'rust'],
      wrap: true,
    },
    syntaxHighlight: 'shiki'
  },
  compressHTML: true,
  experimental: {
    redirects: true
  },
  redirects: {
    '/pages/[id]': '/i/[id]',
    '/updates/[id]': '/quips/[id]',
  }
});