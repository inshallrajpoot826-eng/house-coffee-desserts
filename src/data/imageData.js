// Curated food/interior photography for the HOUSE Coffee & Desserts concept
// site. All images are hosted on Unsplash's CDN and used under the Unsplash
// License (free for commercial and non-commercial use). These are NOT photos
// of the real HOUSE Coffee & Desserts venue — they are demo/placeholder
// photography standing in for the client's own photos, which should replace
// these before the site goes live. Each entry was individually verified to
// resolve to a real photo before being added here.

function unsplash(id, { w = 1200, q = 80 } = {}) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`
}

export const images = {
  heroCoffeeCake: {
    id: 'photo-1740204245771-42575327a61b',
    url: unsplash('photo-1740204245771-42575327a61b', { w: 1400 }),
    alt: 'A latte and a slice of cake served together on a café table',
  },
  latteArt: {
    id: 'photo-1426174840074-541ae41efdb9',
    url: unsplash('photo-1426174840074-541ae41efdb9'),
    alt: 'Coffee with latte art in a warm-toned cup',
  },
  cheesecake: {
    id: 'photo-1702925614886-50ad13c88d3f',
    url: unsplash('photo-1702925614886-50ad13c88d3f'),
    alt: 'A slice of cheesecake plated with berries',
  },
  matcha: {
    id: 'photo-1560148196-df61132466ce',
    url: unsplash('photo-1560148196-df61132466ce'),
    alt: 'A vibrant matcha latte',
  },
  croissant: {
    id: 'photo-1675125530909-15213f01a9e1',
    url: unsplash('photo-1675125530909-15213f01a9e1'),
    alt: 'A breakfast tray of coffee and croissants',
  },
  sandwich: {
    id: 'photo-1722041220514-f6a26e286f2e',
    url: unsplash('photo-1722041220514-f6a26e286f2e'),
    alt: 'A bacon, egg and lettuce sandwich plated',
  },
  cafeInterior: {
    id: 'photo-1749871615234-98bff62995ba',
    url: unsplash('photo-1749871615234-98bff62995ba'),
    alt: 'A cozy café interior with warm lighting and wooden furniture',
  },
  cookies: {
    id: 'photo-1495085570317-992279e0c33d',
    url: unsplash('photo-1495085570317-992279e0c33d'),
    alt: 'A close-up stack of chocolate chip cookies',
  },
  tiramisu: {
    id: 'photo-1698688334089-c68105801d02',
    url: unsplash('photo-1698688334089-c68105801d02'),
    alt: 'A plated tiramisu dessert',
  },
  carrotCake: {
    id: 'photo-1607269832078-1a3bd22a306d',
    url: unsplash('photo-1607269832078-1a3bd22a306d'),
    alt: 'A slice of carrot cake with cream cheese frosting',
  },
}

// Menu-category visual cards ("Our Menu")
export const menuCategoryImages = {
  'specialty-coffee': images.latteArt,
  desserts: images.cheesecake,
  'og-matcha': images.matcha,
  sandwiches: images.sandwich,
}

// Featured individual items — maps to real items already in menuData.js.
// Keeping this separate (rather than editing menuData.js) so menu data
// stays the single source of truth for names/prices.
export const featuredItemImages = {
  'San Sebastian Cheesecake': images.cheesecake,
  'Kunafa Cookie': images.cookies,
  'Original OG Matcha Latte': images.matcha,
  'Almond Croissant': images.croissant,
  'Chilli Crisp Mayo Chicken': images.sandwich,
  Tiramisu: images.tiramisu,
  'Carrot Cake': images.carrotCake,
}

export const galleryImages = [
  { ...images.latteArt, size: 'tall' },
  { ...images.cheesecake, size: 'wide' },
  { ...images.matcha, size: 'normal' },
  { ...images.cafeInterior, size: 'normal' },
  { ...images.tiramisu, size: 'normal' },
  { ...images.croissant, size: 'wide' },
  { ...images.carrotCake, size: 'normal' },
  { ...images.cookies, size: 'tall' },
]

// Image-led "specialty" cards (Coffee / Desserts / Matcha) — same three
// specialties as before, now shown with photography instead of line icons.
export const specialtyImages = {
  matcha: images.matcha,
  desserts: images.tiramisu,
  coffee: images.latteArt,
}
