export const hotels = [
  {
    id: 1,
    name: "Aman Tokyo",
    city: "Tokyo",
    country: "Japan",
    price_level: "$$$$$",
    style: "Minimalist, Urban Sanctuary",
    image_url: "/aman-tokyo.jpg", // Note: I'm using descriptive image names. You'd place these in /public/
    description_points: [
      "Located in the prestigious Otemachi Tower with panoramic views of the Imperial Palace.",
      "Design inspired by Japanese residential tradition, featuring washi paper, camphor wood, and stone.",
      "A serene Aman Spa spans two floors, offering treatments based on Japanese healing principles.",
      "The 30-meter, black basalt-lined swimming pool offers breathtaking city views.",
    ],
    reviews: [
      "The view from our room was simply breathtaking. Waking up to see the city skyline was an unforgettable experience.",
      "Impeccable service from the moment we arrived. The staff is attentive without being intrusive.",
      "A true oasis of calm in the bustling city of Tokyo. The minimalist design is executed to perfection.",
      "While the hotel is stunning, the dining options were incredibly expensive, even for a luxury hotel.",
    ],
  },
  {
    id: 2,
    name: "Rosewood Hong Kong",
    city: "Hong Kong",
    country: "China",
    price_level: "$$$$$",
    style: "Ultra-Luxury, Harbourfront",
    image_url: "/rosewood-hongkong.jpg",
    description_points: [
      "Occupies 43 floors of a 65-storey tower on the Victoria Harbour waterfront.",
      "Features a stunning art collection with works by Henry Moore and Damien Hirst.",
      "Over 80% of rooms offer breathtaking harbour views.",
      "Home to Asaya, Rosewood's integrative wellness concept.",
    ],
    reviews: [
      "The harbour view from the Manor Suite is perhaps the best hotel view in the world.",
      "The level of detail in the room design is extraordinary. Pure luxury.",
      "The infinity pool is spectacular. Service was top-notch throughout our stay.",
    ],
  },
  {
    id: 3,
    name: "The Gritti Palace, a Luxury Collection Hotel, Venice",
    city: "Venice",
    country: "Italy",
    price_level: "$$$$$",
    style: "Historic, Venetian Gothic",
    image_url: "/gritti-palace.jpg",
    description_points: [
      "A 15th-century palace on the Grand Canal, offering some of the most enchanting views of Venice.",
      "Exquisitely restored with rare Rubelli fabrics, Murano glass, and precious antiques.",
      "The Riva Yacht experience offers unforgettable tours of the Venetian lagoon.",
      "Home to the legendary Bar Longhi and the Gritti Epicurean School.",
    ],
    reviews: [
      "Staying at the Gritti Palace feels like stepping back in time. The history and opulence are palpable.",
      "Having breakfast on the Grand Canal terrace is a memory I will cherish forever.",
      "The service is what you would expect from a legendary hotel - flawless.",
    ],
  },
  {
    id: 4,
    name: "Hotel de Crillon, A Rosewood Hotel",
    city: "Paris",
    country: "France",
    price_level: "$$$$$",
    style: "Neoclassical, Parisian Chic",
    image_url: "/hotel-de-crillon.jpg",
    description_points: [
      "Originally built in 1758, overlooking the iconic Place de la Concorde.",
      "Reopened in 2017 after a meticulous four-year restoration.",
      "Features two suites designed by Karl Lagerfeld, offering a unique blend of history and modernity.",
      "The subterranean swimming pool, with its scale-like mosaic, is a design masterpiece.",
    ],
    reviews: [
      "Perfect location, perfect service, perfect room. The Crillon is the epitome of Parisian luxury.",
      "The Karl Lagerfeld suite was an experience in itself. A truly special place.",
      "The staff made us feel like family. We wouldn't stay anywhere else in Paris.",
    ],
  },
  {
    id: 5,
    name: "Claridge's",
    city: "London",
    country: "United Kingdom",
    price_level: "$$$$$",
    style: "Art Deco, Timeless Glamour",
    image_url: "/claridges.jpg",
    description_points: [
      "A legendary Art Deco hotel in the heart of Mayfair.",
      "Known for its long-standing connections to royalty and high society.",
      "The Fumoir bar is an intimate, glamorous space for cocktails.",
      "Afternoon tea at Claridge's is a world-renowned institution.",
    ],
    reviews: [
      "Claridge's is more than a hotel, it's an experience. The Art Deco design is stunning.",
      "The best afternoon tea in London, without a doubt.",
      "From the doorman to the general manager, everyone provides flawless, friendly service.",
    ],
  },
  {
    id: 6,
    name: "Cheval Blanc Paris",
    city: "Paris",
    country: "France",
    price_level: "$$$$$",
    style: "Contemporary, Artistic",
    image_url: "/cheval-blanc-paris.jpg",
    description_points: [
      "Located within the iconic La Samaritaine building, with stunning views of the Seine.",
      "Features just 72 rooms and suites, ensuring an intimate and exclusive experience.",
      "The Dior Spa Cheval Blanc offers a range of bespoke treatments in a luxurious setting.",
      "Home to the three-Michelin-starred restaurant Plénitude by chef Arnaud Donckele.",
    ],
    reviews: [
        "The view of the Pont Neuf from our room was like a living painting. Unforgettable.",
        "A contemporary masterpiece. The attention to detail is mind-blowing.",
        "The Dior spa is an experience of pure indulgence. The best hotel in Paris right now."
    ]
  }
];

export const posts = [
  {
    id: 1,
    title: "The Rise of the Urban Sanctuary: A Look at Aman Tokyo",
    slug: "urban-sanctuary-aman-tokyo",
    related_hotel_ids: [1],
    content_markdown: `
## Finding Zen in the World's Busiest Metropolis

Tokyo is a city of exhilarating contrasts, but finding a moment of peace can be a challenge. Enter **Aman Tokyo**, a hotel that has redefined the concept of an urban sanctuary. Perched high above the financial district in the Otemachi Tower, it offers a serene escape that feels worlds away from the city below.

### Design as a Philosophy
The design, inspired by traditional Japanese residences, is the star. The lobby, with its 30-meter high ceiling and washi paper lantern centerpiece, creates an awe-inspiring sense of space and light. Natural materials like camphor wood and basalt stone are used throughout, creating a connection to nature that is both grounding and uplifting.

### More Than a Room
The rooms—or residences, as they feel—are minimalist yet warm, designed to frame the panoramic views of the Imperial Palace Gardens and the city skyline. It's this combination of masterful design and a philosophy of tranquility that makes Aman Tokyo more than just a place to stay; it's a destination in itself.
    `,
  },
  {
    id: 2,
    title: "Parisian Perfection: Old World vs. New World Luxury",
    slug: "paris-luxury-hotels-crillon-cheval-blanc",
    related_hotel_ids: [4, 6],
    content_markdown: `
## Two Visions of Parisian Luxury

Paris is the undisputed capital of luxury hospitality, but what does that mean today? Two hotels, one a historic icon and the other a modern marvel, offer compellingly different answers: **Hotel de Crillon** and **Cheval Blanc Paris**.

### The Icon: Hotel de Crillon
Overlooking the Place de la Concorde, the Crillon is a Parisian landmark. After a landmark restoration, it blends its 18th-century grandeur with contemporary elegance. Staying here is to immerse yourself in the history of Paris, surrounded by bespoke service and timeless decor. It's the grand dame of Parisian hotels.

### The Newcomer: Cheval Blanc Paris
Situated in the newly reimagined La Samaritaine, Cheval Blanc offers a vibrant, contemporary vision of luxury. With an artistic flair and breathtaking views of the Seine, it feels fresh and of-the-moment. It's a statement of modern French *art de vivre*.

Which is better? It's a matter of taste. Do you prefer the quiet grandeur of history or the vibrant pulse of the new? In Paris, you can have both.
    `,
  },
    {
    id: 3,
    title: "Living History: The Enduring Allure of The Gritti Palace",
    slug: "living-history-gritti-palace-venice",
    related_hotel_ids: [3],
    content_markdown: `
## Where History and Hospitality Converge

On the most beautiful stretch of Venice's Grand Canal sits **The Gritti Palace**, a hotel that is as much a part of the city's fabric as the gondolas that glide past its terrace. This 15th-century noble palace, once home to the Doge of Venice, offers guests a chance to live inside a masterpiece.

### A Feast for the Senses
Every corner of the Gritti is adorned with treasures—Murano glass chandeliers, priceless antiques, and luxurious Rubelli fabrics that tell the story of Venetian artistry. The view from the rooms overlooking the canal, capturing the Santa Maria della Salute church, is simply one of the world's great vistas.

To stay at the Gritti is not just to visit Venice, but to inhabit its soul. It's an unforgettable experience for the discerning traveler who seeks authenticity and timeless elegance.
    `,
  },
];

// Helper functions to fetch data
export const getHotels = () => hotels;
export const getHotelById = (id) => hotels.find((h) => h.id === parseInt(id));
export const getPosts = () => posts;
export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);
