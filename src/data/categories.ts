export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  alt: string;
};

export const categories: Category[] = [
  {
    slug: 'birthday',
    name: 'Birthday Cakes',
    shortName: 'Birthday',
    description: 'Beautiful cakes made for memorable celebrations and happy moments.',
    image: 'https://images.pexels.com/photos/9475871/pexels-photo-9475871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink floral birthday cake with elegant decorations',
  },
  {
    slug: 'wedding',
    name: 'Wedding Cakes',
    shortName: 'Wedding',
    description: 'Elegant tiered cakes designed for your once-in-a-lifetime day.',
    image: 'https://images.pexels.com/photos/30233124/pexels-photo-30233124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'White wedding cake topped with fresh flowers',
  },
  {
    slug: 'custom',
    name: 'Custom Cakes',
    shortName: 'Custom',
    description: 'Bespoke designs crafted around your theme, colours and imagination.',
    image: 'https://images.pexels.com/photos/34833097/pexels-photo-34833097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink two-tier custom cake with roses and pearls',
  },
  {
    slug: 'kids',
    name: 'Kids Cakes',
    shortName: 'Kids',
    description: 'Playful, colourful cakes that make little faces light up.',
    image: 'https://images.pexels.com/photos/12616001/pexels-photo-12616001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Decorated chocolate birthday cake for a child',
  },
  {
    slug: 'anniversary',
    name: 'Anniversary Cakes',
    shortName: 'Anniversary',
    description: 'Romantic cakes to celebrate love and the years you share.',
    image: 'https://images.pexels.com/photos/8015247/pexels-photo-8015247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'White frosted cake with berries beside champagne glasses',
  },
  {
    slug: 'celebration',
    name: 'Celebration Cakes',
    shortName: 'Celebration',
    description: 'Sophisticated cakes for milestones, achievements and gatherings.',
    image: 'https://images.pexels.com/photos/30233153/pexels-photo-30233153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Delicate white cake with floral decorations',
  },
  {
    slug: 'treats',
    name: 'Cupcakes & Treats',
    shortName: 'Treats',
    description: 'Delicate cupcakes and small treats for every sweet occasion.',
    image: 'https://images.pexels.com/photos/7475803/pexels-photo-7475803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pastel cupcakes with floral icing decorations',
  },
];
