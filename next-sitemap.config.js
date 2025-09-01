module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/contact/thanks'], // ✅ exclude thank-you
  additionalSitemaps: [],
  transform: async (config, path) => {
    const isFAQ     = path === '/lip-filler-faq' || path === '/faq';
    const isGuides  = path === '/guides' || path.startsWith('/guides/');
    const isShapes  = path === '/shapes';
    const isAbout   = path === '/about';
    const isContact = path === '/contact';

    const changefreq =
      path === '/' ? 'daily' :
      isGuides ? 'monthly' :
      isFAQ || isShapes ? 'monthly' :
      isAbout || isContact ? 'yearly' : 'weekly';

    const priority =
      path === '/' ? 1.0 :
      isGuides ? 0.7 :
      isFAQ || isShapes ? 0.6 :
      isAbout || isContact ? 0.4 : 0.5;

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: []
    };
  }
}
