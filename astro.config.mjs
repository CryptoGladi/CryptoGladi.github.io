// @ts-check

import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkCallout from '@r4ai/remark-callout';

export default defineConfig({
    site: 'https://cryptogladi.github.io',
    markdown: {
        syntaxHighlight: 'shiki',
        shikiConfig: {
            themes: { dark: 'nord' },
            defaultColor: 'dark',
        },
        remarkPlugins: [remarkMath, remarkCallout],
        rehypePlugins: [rehypeKatex],
    },
});