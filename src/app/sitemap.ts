import type { MetadataRoute } from 'next';
import { SITE_URL, absoluteUrl, person, publicPages } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = publicPages.map((page) => ({
    url: page.path === '/' ? SITE_URL : absoluteUrl(page.path),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  pages.push({
    url: absoluteUrl(person.resumePath),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  });

  return pages;
}
