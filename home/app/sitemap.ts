import type { MetadataRoute } from 'next';
import { LOCALES } from '@/constants/i18n';
import { SITE_URL, getAlternateLanguages } from '@/constants/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/landing', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/landing/ability', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/landing/seedvault', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/landing/memoflow', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/landing/ability/gravity-time', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/landing/ability/daoxin', priority: 0.8, changeFrequency: 'monthly' },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const currentDate = new Date();

  for (const route of routes) {
    for (const locale of LOCALES) {
      const url = `${SITE_URL}/${locale}${route.path}`;
      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: getAlternateLanguages(route.path),
        },
      });
    }
  }

  return sitemapEntries;
}
