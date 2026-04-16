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