// lib/slug.js

export const toKebab = (s = '') =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export const providerSlug = (p = {}) => {
  const name = toKebab(p.name);
  const city = toKebab(p.address?.city || '');
  
  // Always include city for better local SEO and uniqueness
  // Creates URLs like: /providers/the-luxe-room-fort-collins
  return city ? `${name}-${city}` : name;
};

export const citySlug = (city = '') => toKebab(city);