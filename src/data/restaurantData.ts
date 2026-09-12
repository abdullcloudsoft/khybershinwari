import { GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Khyber Shinwari Dastarkhwan',
  tagline: 'Authentic Shinwari Taste',
  location: 'Cricket Stadium Food Street, Shamsabad, Rawalpindi, Pakistan',
  phone: '0300 5592299',
  phoneRaw: '03005592299',
  phoneIntl: '+923005592299',
  whatsAppUrl: 'https://wa.me/923005592299?text=Assalam-o-Alaikum%20Khyber%20Shinwari%20Dastarkhwan%2C%20I%20would%20like%20to%20inquire%20about%20ordering.',
  email: 'khyberdarbar@gmail.com',
  facebook: 'https://www.facebook.com/p/Khyber-Shanwari-DastarKhawn-100075863996089/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cricket+Stadium+Food+Street+Shamsabad+Rawalpindi+Pakistan',
  hours: 'Open Daily: 1:00 PM – 2:00 AM',
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Shinwari Mutton Karahi',
    category: 'Karahi',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    description: 'Slow-simmered in pure animal fat, fresh ripe tomatoes, ginger, and green chilies.'
  },
  {
    id: 'g2',
    title: 'Char-Grilled Seekh Kababs',
    category: 'Kababs',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80',
    description: 'Fresh minced meat skewers grilled over smoking natural wood charcoal.'
  },
  {
    id: 'g3',
    title: 'Tender Mutton Chops & Tikka',
    category: 'Mutton',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    description: 'Selected cuts seasoned with sea salt and grilled over an open fire pit.'
  },
  {
    id: 'g4',
    title: 'Traditional Roghani Tandoori Naan',
    category: 'Naan',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=1000&q=80',
    description: 'Freshly baked in a clay tandoor oven, garnished with toasted sesame seeds.'
  },
  {
    id: 'g5',
    title: 'Pashtun Dastarkhwan Dining',
    category: 'Dining',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    description: 'Comfortable family and group floor seating following authentic Pashtun hospitality.'
  },
  {
    id: 'g6',
    title: 'Live Barbecue Station',
    category: 'Kababs',
    imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1000&q=80',
    description: 'Fresh cuts prepared live on the mangal grill right before your eyes.'
  }
];
