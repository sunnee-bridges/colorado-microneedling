module.exports = {
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
