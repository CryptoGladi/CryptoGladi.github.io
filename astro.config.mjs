// @ts-check
// astro.config.mjs
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
    site: 'https://cryptogladi.github.io',
    markdown: {
        syntaxHighlight: 'shiki',
        shikiConfig: {
            themes: { dark: 'nord' },
            defaultColor: 'dark',
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});