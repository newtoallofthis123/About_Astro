import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "server",
  adapter: netlify(),
  markdown: {
    gfm: true,
    shikiConfig: {
      theme: 'dracula',
      langs: ['javascript', 'html', 'css', 'typescript', 'tsx', 'jsx', 'json', 'markdown', 'mdx', 'bash', 'shell', 'sh', 'yaml', 'yml', 'graphql', 'md', 'mdx'],
      wrap: true,
    },
    syntaxHighlight: 'shiki'
  }
});