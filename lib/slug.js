// lib/slug.js
export const toKebab = (s = '') =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export const providerSlug = (p = {}) => {
  const city = p.address?.city || '';
  const state = p.address?.state || '';
  return [toKebab(p.name), toKebab(city), toKebab(state)].filter(Boolean).join('-');
};

export const citySlug = (city = '') => toKebab(city);
