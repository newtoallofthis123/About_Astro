import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import remarkHtml from 'remark-html';
import remarkRehype from 'remark-rehype'
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "server",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkHtml, remarkReadingTime, remarkRehype],
    gfm: true,
    shikiConfig: {
      theme: 'monokai',
      langs: ['javascript', 'html', 'css', 'typescript', 'tsx', 'jsx', 'json', 'markdown', 'mdx', 'bash', 'shell', 'sh', 'yaml', 'yml', 'graphql', 'md', 'mdx'],
      wrap: true
    },
    syntaxHighlight: 'shiki'
  },
  compressHTML: true,
  experimental: {
    redirects: true
  },
  redirects: {
    '/pages/[id]': '/i/[id]'
  }
});