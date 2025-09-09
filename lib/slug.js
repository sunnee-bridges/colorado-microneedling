// lib/slug.js
export const toKebab = (s = '') =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export const providerSlug = (p = {}) => {
  // Start with just the business name
  let slug = toKebab(p.name);
  
  // Only add city if the name alone might not be unique
  // (You can implement uniqueness checking later if needed)
  const city = p.address?.city || '';
  
  // For now, just use business name for cleaner URLs
  return slug;
  
  // Alternative: Only add city for very generic names
  // const genericNames = ['spa', 'clinic', 'medspa', 'wellness'];
  // if (genericNames.some(term => slug.includes(term))) {
  //   return `${slug}-${toKebab(city)}`;
  // }
  // return slug;
};

export const citySlug = (city = '') => toKebab(city);