export type GalleryImage = {
  id: string;
  image: string;
  alt: string;
  category: string;
  span?: 'tall' | 'wide' | 'normal';
};

export const galleryFilters = ['All', 'Birthday', 'Wedding', 'Kids', 'Custom', 'Anniversary', 'Celebration'];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    image: 'https://images.pexels.com/photos/17315403/pexels-photo-17315403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxurious wedding cake display surrounded by elegant flower arrangements',
    category: 'Wedding',
    span: 'wide',
  },
  {
    id: 'g2',
    image: 'https://images.pexels.com/photos/9475871/pexels-photo-9475871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink floral birthday cake with elegant decorations for an 18th birthday',
    category: 'Birthday',
    span: 'normal',
  },
  {
    id: 'g3',
    image: 'https://images.pexels.com/photos/29051739/pexels-photo-29051739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Three elegant floral wedding cakes with greenery',
    category: 'Wedding',
    span: 'tall',
  },
  {
    id: 'g4',
    image: 'https://images.pexels.com/photos/34833097/pexels-photo-34833097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink two-tier custom cake with roses and pearls',
    category: 'Custom',
    span: 'normal',
  },
  {
    id: 'g5',
    image: 'https://images.pexels.com/photos/12616001/pexels-photo-12616001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Decorated chocolate birthday cake for a child',
    category: 'Kids',
    span: 'normal',
  },
  {
    id: 'g6',
    image: 'https://images.pexels.com/photos/30233153/pexels-photo-30233153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Delicate white cake with floral decorations for special occasions',
    category: 'Celebration',
    span: 'wide',
  },
  {
    id: 'g7',
    image: 'https://images.pexels.com/photos/20045506/pexels-photo-20045506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Wedding cake with pink roses and intricate icing design',
    category: 'Wedding',
    span: 'normal',
  },
  {
    id: 'g8',
    image: 'https://images.pexels.com/photos/8015247/pexels-photo-8015247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'White frosted cake with red berries beside champagne glasses',
    category: 'Anniversary',
    span: 'normal',
  },
  {
    id: 'g9',
    image: 'https://images.pexels.com/photos/31108765/pexels-photo-31108765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink floral custom cake with buttercream roses',
    category: 'Custom',
    span: 'tall',
  },
  {
    id: 'g10',
    image: 'https://images.pexels.com/photos/19036040/pexels-photo-19036040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Drip cake with cherries and chocolate for an anniversary celebration',
    category: 'Anniversary',
    span: 'normal',
  },
  {
    id: 'g11',
    image: 'https://images.pexels.com/photos/30233124/pexels-photo-30233124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Beautiful white wedding cake topped with flowers',
    category: 'Wedding',
    span: 'normal',
  },
  {
    id: 'g12',
    image: 'https://images.pexels.com/photos/12065625/pexels-photo-12065625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Vibrant birthday cake with pastel icing and lit candles',
    category: 'Birthday',
    span: 'normal',
  },
  {
    id: 'g13',
    image: 'https://images.pexels.com/photos/7174717/pexels-photo-7174717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Cake decorated with flowers on a stand at a festive event',
    category: 'Celebration',
    span: 'normal',
  },
  {
    id: 'g14',
    image: 'https://images.pexels.com/photos/11350950/pexels-photo-11350950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Minimalist white wedding cake with eucalyptus and thistle flowers',
    category: 'Wedding',
    span: 'tall',
  },
  {
    id: 'g15',
    image: 'https://images.pexels.com/photos/18131293/pexels-photo-18131293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Indulgent chocolate cake with assorted sweets for a birthday',
    category: 'Kids',
    span: 'normal',
  },
  {
    id: 'g16',
    image: 'https://images.pexels.com/photos/20009393/pexels-photo-20009393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Freshly baked chocolate cake with elaborate icing',
    category: 'Celebration',
    span: 'wide',
  },
  {
    id: 'g17',
    image: 'https://images.pexels.com/photos/32125117/pexels-photo-32125117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Birthday cake with lush pink flowers and happy birthday text',
    category: 'Birthday',
    span: 'normal',
  },
  {
    id: 'g18',
    image: 'https://images.pexels.com/photos/11712500/pexels-photo-11712500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Two-tier wedding cake adorned with white roses',
    category: 'Wedding',
    span: 'normal',
  },
];
