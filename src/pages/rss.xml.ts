import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const writing = await getCollection('writing', ({ data }) => !data.draft);
  return rss({
    title: 'Syamsul Arifin',
    description: 'Writing on code, books, and thinking slowly.',
    site: context.site!,
    items: writing.map(entry => ({
      title: entry.data.title,
      pubDate: entry.data.publishedAt,
      description: entry.data.description,
      link: `/writing/${entry.id}/`,
    })),
  });
}
