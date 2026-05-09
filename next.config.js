module.exports = {
  async redirects() {
    return [
      {
        source: '/lipfillerfaq',
        destination: '/lip-filler-faq',
        permanent: true,
      },
      {
        source: '/cost-breakdown',
        destination: '/guides/lip-filler-cost-pricing',
        permanent: true,
      },
      { source: '/cities/longmont',                          destination: '/cities',                           permanent: true },
      { source: '/cities/erie',                              destination: '/cities',                           permanent: true },
      { source: '/guides/cost-breakdown',                    destination: '/guides/lip-filler-cost-pricing',   permanent: true },
      { source: '/guides/worst-day-after-lip-fillers',       destination: '/guides/lip-filler-recovery-timeline', permanent: true },
      { source: '/guides/best-time-lip-filler-colorado',     destination: '/guides',                           permanent: true },
      { source: '/guides/how-to-find-a-provider',            destination: '/guides',                           permanent: true },
      { source: '/before-after',                             destination: '/shapes',                           permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/contact/thanks',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' }
        ]
      }
    ];
  }
};