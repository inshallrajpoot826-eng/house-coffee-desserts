// Menu items and prices are transcribed directly from HOUSE Coffee & Desserts'
// in-store printed menus (Desserts / Sandwiches / Ice-Cream Combos boards and
// the "OG Matcha Pop-Up" menu). Nothing here is invented — where a category
// exists in-store but pricing wasn't visible/confirmed, it is marked
// [CONTENT NEEDED] instead of guessed.

export const menuCategories = [
  {
    id: 'desserts',
    label: 'Desserts',
    note: 'Specialty coffee-house pastry case',
    items: [
      { name: 'Carrot Cake', price: 595 },
      { name: 'Donuts', desc: 'Nutella, Pistachio, Rafaelo White Chocolate', price: 495 },
      { name: 'Pistachio San Sebastian Cheesecake', price: 1295 },
      { name: 'San Sebastian Cheesecake', price: 1195 },
      { name: 'Macarons', desc: 'Chocolate, Pistachio', price: 350 },
      { name: 'Chocolate Chip Cookie', price: 510 },
      { name: 'Vanilla Chip Cookie', price: 510 },
      { name: 'Kunafa Cookie', price: 550 },
      { name: 'Banana Bread', price: 499 },
      { name: 'Brookie', price: 495 },
      { name: 'Swiss Chocolate Milk Brownie', price: 510 },
      { name: 'Swiss Chocolate Walnut Brownie', price: 995 },
      { name: 'Tiramisu', price: 995 },
      { name: 'Matilda Cake', price: 1100 },
      { name: 'Lemon Tart', price: 450 },
      { name: 'Pistachio Tart', price: 450 },
      { name: 'Almond Croissant', price: 670 },
      { name: 'Pistachio Croissant', price: 870 },
      { name: 'Pistachio Kunafa Dessert', price: 950 },
      { name: 'Signature Milk Cake', price: 850 },
    ],
  },
  {
    id: 'ice-cream-combos',
    label: 'Ice Cream Combos',
    note: 'Warm dessert, paired with a scoop of vanilla',
    items: [
      { name: 'Kunafa Cookie with Vanilla Ice Cream', price: 695 },
      { name: 'Brookie with Vanilla Ice Cream', price: 695 },
      { name: 'Chocolate Chip Cookie with Vanilla Ice Cream', price: 670 },
      { name: 'Vanilla Chip Cookie with Vanilla Ice Cream', price: 670 },
      { name: 'Chocolate Milk Brownie with Vanilla Ice Cream', price: 690 },
      { name: 'Walnut Brownie with Vanilla Ice Cream', price: 690 },
      { name: 'Chocolate Macaron with Vanilla Ice Cream', price: 480 },
      { name: 'Pistachio Macaron with Vanilla Ice Cream', price: 480 },
      { name: 'Extra Scoop', price: 200 },
    ],
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    note: 'Brown bread & sourdough, made to order',
    items: [
      { name: 'Bacon & Egg', desc: 'Brown bread, egg, smoked beef bacon, mayo', price: 850 },
      { name: 'Chilli Chicken', desc: 'Chilli mayo, caramelised onion, chicken', price: 895 },
      { name: 'Pesto', desc: 'Sourdough, tomato, cucumber, jalapeños, pesto, cheese', price: 995 },
      { name: 'Chilli Crisp Mayo Chicken', desc: 'Sourdough, chicken, mozzarella, mayo', price: 995 },
      { name: 'Pastrami', desc: 'Sourdough, beef, cheddar, mozzarella, mustard, mayo', price: 1195 },
    ],
  },
  {
    id: 'og-matcha',
    label: 'OG Matcha — Pop-Up Menu',
    note: 'Prepared with Japanese ceremonial-grade matcha · seasonal, limited-run menu',
    items: [
      { name: 'Original OG Matcha Latte', desc: 'Pure matcha with milk', price: 850 },
      { name: 'Spanish OG Matcha', desc: 'Pure matcha with sweet milk', price: 950 },
      { name: 'Coco Matcha', desc: 'Coconut milk with premium matcha', price: 950 },
      { name: 'Lavender Haze Matcha', desc: 'Chill vibes, floral sip', price: 1295 },
      { name: 'Berry Rose Matcha', desc: 'Festival-ready berry pop', price: 1295 },
      { name: 'Salted Caramel Drip Matcha', desc: 'Sweet-salty swagger in every sip', price: 1295 },
      { name: 'Sea Salt Vanilla Vibe Check Matcha', desc: 'Smooth, coastal vanilla dream', price: 1295 },
      { name: 'Crème Brûlée Glow-Up Matcha', desc: 'Bougie sweetness, matcha style', price: 1295 },
      { name: 'Strawberry Vanilla Flex Matcha', desc: 'Indie-sunny strawberry sweetness', price: 1295 },
      { name: 'Pistachio Vanilla Mood Matcha', desc: 'Nutty vibes, aesthetic sips', price: 1545 },
      { name: 'Strawberry Coconut Slay Matcha', desc: 'Tropical strawberry cocoa glow', price: 1350 },
      { name: 'Mango Coconut Heatwave Matcha', desc: 'Juicy, summery matcha magic', price: 1350 },
      { name: 'Raspberry Coconut Matcha', price: 1350 },
      { name: 'Flavoured Matcha', desc: 'Traditional: Mango, Raspberry, Strawberry', price: 1295 },
    ],
  },
  {
    id: 'specialty-coffee',
    label: 'Specialty Coffee',
    note: 'Full espresso & filter coffee menu — item-level pricing not yet confirmed',
    items: [
      {
        name: 'Espresso-based & filter coffee menu',
        desc: '[CONTENT NEEDED — please supply the current coffee menu and pricing]',
        price: null,
      },
    ],
  },
]
