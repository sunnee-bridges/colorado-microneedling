/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [],
  // Optional: add additional sitemaps, e.g. /sitemap-guides.xml
  additionalSitemaps: [],
  transform: async (config, path) => {
    // You can tweak changefreq/priority per path
    const isGuide = path.startsWith('/guides/');
    return {
      loc: path,
      changefreq: isGuide ? 'monthly' : 'weekly',
      priority: isGuide ? 0.7 : 0.6,
      lastmod: new Date().toISOString(),
      alternateRefs: []
    }
  }
}
