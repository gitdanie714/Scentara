import img1 from '../images/img1.png';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
const productDetails = [
  {
    id: 1,
    name: "Miss Dior",
    scentDescription: "A timeless floral bouquet that captures the essence of romance and femininity. This iconic fragrance opens with fresh citrus notes, blooms into a heart of Damascus Rose, and settles into a warm, sophisticated base.",
    description: "250ml - Floral Bouquet Eau de Parfum",
    category: "Flower Fragrance",
    price: 300.99,
    image: img1,
    rate: 5,
    scentNotes: {
      top: ["Calabrian Bergamot", "Italian Mandarin", "Pink Pepper"],
      heart: ["Damascus Rose", "Lily of the Valley", "Peony"],
      base: ["White Musk", "Patchouli", "Vanilla"]
    },
    sizes: [
      { size: "30ml", price: 89.99 },
      { size: "50ml", price: 129.99 },
      { size: "100ml", price: 199.99 },
    ]
  },
  {
    id: 2,
    name: "Chanel No. 5",
    scentDescription: "An eternal symbol of elegance, blending aldehydes and florals into a timeless powdery fragrance.",
    description: "200ml - Classic Floral Aldehyde",
    category: "Luxury Floral",
    price: 349.99,
    image: img2,
    rate: 5,
    scentNotes: {
      top: ["Aldehydes", "Neroli", "Ylang-Ylang"],
      heart: ["Jasmine", "Rose", "Iris"],
      base: ["Sandalwood", "Vetiver", "Amber"]
    },
    sizes: [
      { size: "30ml", price: 99.99 },
      { size: "50ml", price: 159.99 },
      { size: "100ml", price: 229.99 },
    ]
  },
  {
    id: 3,
    name: "YSL Black Opium",
    scentDescription: "An addictive blend of coffee, vanilla, and white flowers for the bold and modern woman.",
    description: "250ml - Oriental Gourmand Eau de Parfum",
    category: "Gourmand",
    price: 280.50,
    image: img3,
    rate: 4.5,
    scentNotes: {
      top: ["Pear", "Pink Pepper", "Orange Blossom"],
      heart: ["Coffee", "Jasmine", "Bitter Almond"],
      base: ["Vanilla", "Cedarwood", "Patchouli"]
    },
    sizes: [
      { size: "30ml", price: 79.99 },
      { size: "50ml", price: 119.99 },
      { size: "100ml", price: 189.99 },
    ]
  },
  {
    id: 4,
    name: "Tom Ford Oud Wood",
    scentDescription: "A mysterious unisex fragrance with rare oud wood, spices, and smoky undertones.",
    description: "200ml - Woody Spicy Eau de Parfum",
    category: "Woody",
    price: 420.00,
    image: img4,
    rate: 5,
    scentNotes: {
      top: ["Rosewood", "Cardamom", "Sichuan Pepper"],
      heart: ["Oud", "Sandalwood", "Vetiver"],
      base: ["Tonka Bean", "Amber", "Vanilla"]
    },
    sizes: [
      { size: "50ml", price: 199.99 },
      { size: "100ml", price: 329.99 },
      { size: "200ml", price: 420.00 },
    ]
  },
  {
    id: 5,
    name: "Dior Sauvage",
    scentDescription: "A raw, fresh, and powerful masculine fragrance inspired by wide-open spaces.",
    description: "250ml - Aromatic Fresh Eau de Toilette",
    category: "Men’s Fragrance",
    price: 310.00,
    image: img5,
    rate: 4.8,
    scentNotes: {
      top: ["Calabrian Bergamot", "Pepper"],
      heart: ["Lavender", "Geranium", "Sichuan Pepper"],
      base: ["Cedar", "Labdanum", "Ambroxan"]
    },
    sizes: [
      { size: "60ml", price: 129.99 },
      { size: "100ml", price: 199.99 },
      { size: "200ml", price: 310.00 },
    ]
  },
  {
    id: 6,
    name: "Gucci Bloom",
    scentDescription: "Captures the spirit of modern femininity with tuberose, jasmine, and Rangoon creeper.",
    description: "200ml - White Floral Eau de Parfum",
    category: "Floral",
    price: 270.00,
    image: img1,
    rate: 4.6,
    scentNotes: {
      top: ["Rangoon Creeper"],
      heart: ["Jasmine Bud Extract", "Tuberose"],
      base: ["Sandalwood", "Vanilla"]
    },
    sizes: [
      { size: "30ml", price: 89.99 },
      { size: "50ml", price: 139.99 },
      { size: "100ml", price: 199.99 },
    ]
  },
  {
    id: 7,
    name: "Jo Malone Peony & Blush ",
    scentDescription: "An enchanting fragrance with delicate peony, red apple, and soft suede.",
    description: "200ml - Floral Fruity Cologne",
    category: "Luxury Cologne",
    price: 250.00,
    image: img2,
    rate: 4.7,
    scentNotes: {
      top: ["Red Apple"],
      heart: ["Peony", "Jasmine", "Rose"],
      base: ["Suede", "Musk"]
    },
    sizes: [
      { sizeOne: "30ml", price: 89.99 },
      { sizeTwo: "50ml", price: 129.99 },
      { sizeThree: "100ml", price: 189.99 },
    ]
  },
  {
    id: 8,
    name: "Versace Bright Crystal",
    scentDescription: "A sparkling fresh scent with yuzu, pomegranate, and a bouquet of peonies.",
    description: "250ml - Fruity Floral Eau de Toilette",
    category: "Fresh Floral",
    price: 220.00,
    image: img3,
    rate: 4.3,
    scentNotes: {
      top: ["Yuzu", "Pomegranate", "Ice Accord"],
      heart: ["Peony", "Lotus Flower", "Magnolia"],
      base: ["Amber", "Musk", "Mahogany"]
    },
    sizes: [
      { size: "30ml", price: 69.99 },
      { size: "50ml", price: 109.99 },
      { size: "100ml", price: 169.99 },
    ]
  },
  {
    id: 9,
    name: "Armani Si",
    scentDescription: "A modern chypre scent balancing blackcurrant nectar, airy florals, and musky blond wood.",
    description: "200ml - Chypre Fruity Eau de Parfum",
    category: "Chypre",
    price: 295.00,
    image: img4,
    rate: 4.9,
    scentNotes: {
      top: ["Blackcurrant Nectar"],
      heart: ["Rose de Mai", "Freesia"],
      base: ["Patchouli", "Vanilla", "Woody Notes"]
    },
    sizes: [
      { size: "30ml", price: 89.99 },
      { size: "50ml", price: 139.99 },
      { size: "100ml", price: 209.99 },
    ]
  },
  {
    id: 10,
    name: "Maison Francis Kurkdjian ",
    scentDescription: "A luxurious fragrance with luminous saffron, cedarwood, and ambergris.",
    description: "200ml - Amber Floral Eau de Parfum",
    category: "Niche Luxury",
    price: 450.00,
    image: img5,
    rate: 5,
    scentNotes: {
      top: ["Saffron", "Jasmine"],
      heart: ["Amberwood", "Ambergris"],
      base: ["Fir Resin", "Cedar"]
    },
    sizes: [
      { size: "70ml", price: 300.00 },
      { size: "100ml", price: 370.00 },
      { size: "200ml", price: 450.00 },
    ]
  },
  {
    id: 11,
    name: "Lancome La Vie Est Belle",
    scentDescription: "A sweet, floral gourmand fragrance symbolizing happiness and femininity.",
    description: "200ml - Floral Gourmand Eau de Parfum",
    category: "Gourmand",
    price: 280.00,
    image: img1,
    rate: 4.8,
    scentNotes: {
      top: ["Blackcurrant", "Pear"],
      heart: ["Iris", "Orange Blossom", "Jasmine"],
      base: ["Praline", "Vanilla", "Patchouli"]
    },
    sizes: [
      { size: "30ml", price: 79.99 },
      { size: "50ml", price: 129.99 },
      { size: "100ml", price: 189.99 },
    ]
  },
  {
    id: 12,
    name: "Hermès Terre d’Hermès",
    scentDescription: "A woody mineral fragrance evoking earth, air, and roots for men.",
    description: "200ml - Woody Spicy Eau de Toilette",
    category: "Men’s Woody",
    price: 260.00,
    image: img2,
    rate: 4.6,
    scentNotes: {
      top: ["Orange", "Grapefruit"],
      heart: ["Pepper", "Geranium"],
      base: ["Vetiver", "Cedar", "Benzoin"]
    },
    sizes: [
      { size: "50ml", price: 129.99 },
      { size: "100ml", price: 189.99 },
      { size: "200ml", price: 260.00 },
    ]
  },
  {
    id: 13,
    name: "Marc Jacobs Daisy",
    scentDescription: "A playful, fresh floral fragrance with violet leaves, strawberry, and jasmine.",
    description: "200ml - Fresh Floral Eau de Toilette",
    category: "Youthful Floral",
    price: 230.00,
    image: img3,
    rate: 4.4,
    scentNotes: {
      top: ["Wild Strawberry", "Violet Leaf", "Blood Grapefruit"],
      heart: ["Jasmine", "Gardenia", "Violet"],
      base: ["Musk", "Vanilla", "White Woods"]
    },
    sizes: [
      { size: "30ml", price: 69.99 },
      { size: "50ml", price: 119.99 },
      { size: "100ml", price: 169.99 },
    ]
  },
  {
    id: 14,
    name: "Creed Aventus",
    scentDescription: "A legendary masculine fragrance blending pineapple, birch, and musk with a powerful presence.",
    description: "250ml - Fruity Chypre Eau de Parfum",
    category: "Luxury Men",
    price: 490.00,
    image: img4,
    rate: 5,
    scentNotes: {
      top: ["Pineapple", "Blackcurrant", "Apple"],
      heart: ["Birch", "Patchouli", "Jasmine"],
      base: ["Oakmoss", "Musk", "Vanilla"]
    },
    sizes: [
      { size: "50ml", price: 220.00 },
      { size: "100ml", price: 320.00 },
      { size: "250ml", price: 490.00 },
    ]
  },
  {
    id: 15,
    name: "Byredo Gypsy Water",
    scentDescription: "An earthy, woody fragrance evoking fresh pine forests and free-spirited adventure.",
    description: "200ml - Woody Aromatic Eau de Parfum",
    category: "Niche Unisex",
    price: 310.00,
    image: img5,
    rate: 4.7,
    scentNotes: {
      top: ["Bergamot", "Juniper Berries", "Lemon"],
      heart: ["Pine Needles", "Incense", "Orris Root"],
      base: ["Amber", "Vanilla", "Sandalwood"]
    },
    sizes: [
      { size: "50ml", price: 149.99 },
      { size: "100ml", price: 210.00 },
      { size: "200ml", price: 310.00 },
    ]
  },
  {
    id: 16,
    name: "Paco Rabanne 1 Million",
    scentDescription: "A bold, spicy fragrance with cinnamon, rose, and leather wrapped in golden luxury.",
    description: "200ml - Woody Spicy Eau de Toilette",
    category: "Men’s Spicy",
    price: 240.00,
    image: img1,
    rate: 4.5,
    scentNotes: {
      top: ["Blood Mandarin", "Grapefruit", "Mint"],
      heart: ["Cinnamon", "Rose", "Spices"],
      base: ["Leather", "Amber", "Patchouli"]
    },
    sizes: [
      { size: "50ml", price: 99.99 },
      { size: "100ml", price: 159.99 },
      { size: "200ml", price: 240.00 },
    ]
  },
  {
    id: 17,
    name: "Jean Paul Gaultier Le Male",
    scentDescription: "A comforting blend of lavender, mint, and vanilla with a sensual twist.",
    description: "200ml - Aromatic Fougere Eau de Toilette",
    category: "Classic Men",
    price: 220.00,
    image: img2,
    rate: 4.6,
    scentNotes: {
      top: ["Mint", "Lavender", "Bergamot"],
      heart: ["Cinnamon", "Orange Blossom", "Cumin"],
      base: ["Vanilla", "Tonka Bean", "Amber"]
    },
    sizes: [
      { size: "50ml", price: 89.99 },
      { size: "100ml", price: 149.99 },
      { size: "200ml", price: 220.00 },
    ]
  },
  {
    id: 18,
    name: "Givenchy L’Interdit",
    scentDescription: "A daring fragrance of white florals cut with deep vetiver and patchouli.",
    description: "200ml - White Floral Eau de Parfum",
    category: "Luxury Floral",
    price: 275.00,
    image: img3,
    rate: 4.5,
    scentNotes: {
      top: ["Pear", "Bergamot"],
      heart: ["Tuberose", "Orange Blossom", "Jasmine"],
      base: ["Vetiver", "Patchouli", "Vanilla"]
    },
    sizes: [
      { size: "35ml", price: 89.99 },
      { size: "50ml", price: 139.99 },
      { size: "100ml", price: 199.99 },
    ]
  },
  {
    id: 19,
    name: "Mugler Alien",
    scentDescription: "An enchanting, mysterious fragrance blending jasmine sambac and cashmeran wood.",
    description: "200ml - Amber Woody Eau de Parfum",
    category: "Mysterious",
    price: 290.00,
    image: img4,
    rate: 4.7,
    scentNotes: {
      top: ["Mandarin Essence"],
      heart: ["Jasmine Sambac"],
      base: ["Cashmeran", "White Amber"]
    },
    sizes: [
      { size: "30ml", price: 89.99 },
      { size: "60ml", price: 139.99 },
      { size: "90ml", price: 199.99 },
    ]
  },
  {
    id: 20,
    name: "Narciso Rodriguez For Her",
    scentDescription: "A sensual fragrance of musk, rose, and amber with powdery softness.",
    description: "200ml - Musky Floral Eau de Parfum",
    category: "Musk",
    price: 270.00,
    image: img5,
    rate: 4.6,
    scentNotes: {
      top: ["Osmanthus", "African Orange Flower"],
      heart: ["Amber", "Musk"],
      base: ["Vanilla", "Vetiver", "Patchouli"]
    },
    sizes: [
      { size: "30ml", price: 79.99 },
      { size: "50ml", price: 129.99 },
      { size: "100ml", price: 189.99 },
    ]
  }

];

export default productDetails;
