// pages/sitemap.xml.js
import data from '../data/providers.json';
import { providerSlug, citySlug } from '../lib/slug';

const SITE_URL = 'https://your-domain.com';

export default function Sitemap() { /* SSR only */ }
export async function getServerSideProps({ res }) {
  const providers = data.providers.map(p => p.slug || providerSlug(p));
  const cities = Array.from(new Set(data.providers.map(p => p.address?.city || p.city).filter(Boolean)))
    .map(citySlug);

  const urls = [
    `${SITE_URL}/`,
    ...providers.map(slug => `${SITE_URL}/providers/${slug}`),
    ...cities.map(slug => `${SITE_URL}/cities/${slug}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${u}</loc></url>`).join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(xml);
  res.end();
  return { props: {} };
}
