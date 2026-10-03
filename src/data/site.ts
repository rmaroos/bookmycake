export const site = {
  name: 'Maison Sucré',
  tagline: 'Handcrafted Cakes for Special Moments',
  phone: '+94 77 123 4567',
  whatsapp: '94771234567',
  email: 'hello@maisonsucre.lk',
  address: '42 Flower Road, Colombo 07, Sri Lanka',
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'By Appointment' },
  ],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.96315349497!2d79.8586!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25922e8b4a8b3%3A0x4e5b9e1f2a0c0d0!2sColombo%207!5e0!3m2!1sen!2slk!4v1700000000000',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Cakes', path: '/cakes' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
