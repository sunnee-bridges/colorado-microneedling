// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/contact/thanks'], // keep the thank-you page out of the index
  additionalSitemaps: [],
    // Add this section to manually include static pages
  additionalPaths: async (config) => [
  '/faq',
  '/lip-filler-faq',
  '/shapes',
  '/guides',
  '/guides/lip-filler-101',           
  '/guides/lip-filler-recovery-timeline',  
  '/guides/lip-filler-vs-lip-flip',   
  '/guides/lip-filler-cost-pricing',
  '/guides/cannula-vs-needle',
  '/about',
  '/contact',
],
  transform: async (config, path) => {
    const isHome            = path === '/';
    const isFAQ             = path === '/lip-filler-faq' || path === '/faq';
    const isGuides          = path === '/guides' || path.startsWith('/guides/');
    const isShapes          = path === '/shapes';
    const isAbout           = path === '/about';
    const isContact         = path === '/contact';

    const isProvidersIndex  = path === '/providers';
    const isProviderDetail  = path.startsWith('/providers/'); // each provider page
    const isCitiesIndex     = path === '/cities';
    const isCityDetail      = path.startsWith('/cities/');     // each city page

    const changefreq =
      isHome ? 'daily' :
      isProviderDetail ? 'weekly' :
      isProvidersIndex ? 'weekly' :
      isCityDetail ? 'monthly' :
      isCitiesIndex ? 'monthly' :
      isGuides ? 'monthly' :
      (isFAQ || isShapes) ? 'monthly' :
      (isAbout || isContact) ? 'yearly' :
      'weekly';

    const priority =
      isHome ? 1.0 :
      isProviderDetail ? 0.85 :
      isProvidersIndex ? 0.7 :
      isCityDetail ? 0.7 :
      isCitiesIndex ? 0.6 :
      isGuides ? 0.7 :
      (isFAQ || isShapes) ? 0.6 :
      (isAbout || isContact) ? 0.4 :
      0.5;

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: []
    };
  },
  // Optional: keep crawlers from discovering the thank-you URL elsewhere
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
