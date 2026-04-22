import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const posts = await getCollection('en');

    // Сортировка: новые сверху
    posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    return rss({
        title: 'CryptoGladi Blog',
        description: 'Algorithm + Science + Rust 🦀',
        site: 'https://cryptogladi.github.io',
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description || post.data.title,
            link: `/blog/${post.id}`,
            categories: post.data.tags || [],
        })),
        customData: `<language>ru-RU</language><generator>Astro + @astrojs/rss</generator>`,
    });
};