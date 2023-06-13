import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "server",
  adapter: vercel(),
  markdown: {
    gfm: true,
    shikiConfig: {
      theme: 'dracula-soft',
      langs: ['javascript', 'html', 'css', 'typescript', 'tsx', 'jsx', 'json', 'markdown', 'mdx', 'bash', 'shell', 'sh', 'yaml', 'yml', 'graphql', 'md', 'mdx'],
      wrap: true
    },
    syntaxHighlight: 'shiki'
  }
});