import { TravelPackage } from '../types';

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 'pkg-1',
    title: 'Bali Serenity & Jungle Wellness',
    subtitle: 'Ubud Sacred Valleys & Seminyak Coastal Luxury',
    destination: 'Bali, Indonesia',
    region: 'Asia',
    category: 'Wellness',
    durationDays: 8,
    priceFrom: 2850,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    description: 'Immerse yourself in spiritual tranquility, lush terraced rice paddies, private cliffside villas, and holistic spa rejuvenation with 24/7 private concierge support.',
    highlights: [
      'Private sunrise yoga session at Mount Batur caldera',
      'Exclusive water temple cleansing ceremony with a high priest',
      'Stay in a private pool jungle villa in Ubud & oceanfront suite in Seminyak',
      'Private gourmet dining experience overlooking the Indian Ocean'
    ],
    inclusions: [
      '24/7 Dedicated Trip Concierge',
      'Luxury Private Chauffeur & Airport Transfers',
      '5-Star Boutique Accommodations',
      'All Daily Breakfasts & 3 Signature Dinners'
    ],
    bestTime: 'April to October'
  },
  {
    id: 'pkg-2',
    title: 'Alpine Majesty & Glacier Express',
    subtitle: 'Zermatt, St. Moritz & Luxury Swiss Train Journey',
    destination: 'Switzerland',
    region: 'Europe',
    category: 'Luxury',
    durationDays: 10,
    priceFrom: 5900,
    rating: 5.0,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    description: 'Experience the pinnacle of European alpine luxury aboard the legendary Glacier Express in Excellence Class, paired with Michelin-starred dining and Matterhorn views.',
    highlights: [
      'First Class & Excellence Class tickets on the Glacier Express',
      'Private helicopter tour over the Matterhorn and Jungfraujoch',
      'Chalet stays in Zermatt with private spa and fireplace butler',
      'Exclusive private chocolate crafting masterclass in Zurich'
    ],
    inclusions: [
      '24/7 Concierge Hotline & On-Call Assistance',
      'Swiss Travel Pass First Class',
      'Luxury 5-Star Alpine Resort Stays',
      'Luggage Forwarding Service'
    ],
    bestTime: 'December to March (Winter) or June to September (Summer)'
  },
  {
    id: 'pkg-3',
    title: 'Kyoto Imperial Heritage & Zen',
    subtitle: 'Cherry Blossoms, Private Tea Ceremonies & Ryokan Splendor',
    destination: 'Kyoto & Tokyo, Japan',
    region: 'Asia',
    category: 'Cultural',
    durationDays: 9,
    priceFrom: 4600,
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    description: 'Journey through ancient bamboo groves, majestic golden temples, ultra-modern skylines, and serene luxury ryokans with private hot spring (onsen) baths.',
    highlights: [
      'Private tea ceremony with a Grand Master in a 300-year-old temple',
      'Exclusive Geisha cultural evening and private kaiseki banquet in Gion',
      'Bullet train first-class green car transfers with bento boxes',
      'Private insider tour of Tokyo art galleries and Tsukiji culinary secrets'
    ],
    inclusions: [
      '24/7 English-Japanese Bilingual Concierge',
      'Luxury Ryokan & 5-Star Hotel Accommodations',
      'Private Licensed Expert Guides',
      'Pocket Wi-Fi & Shinkansen Reservations'
    ],
    bestTime: 'March to May (Spring) or October to November (Autumn)'
  },
  {
    id: 'pkg-4',
    title: 'Serengeti Migration & Zanzibar Shores',
    subtitle: 'Tanzanian Luxury Safari & Turquoise Ocean Escape',
    destination: 'Tanzania & Zanzibar',
    region: 'Africa',
    category: 'Adventure',
    durationDays: 12,
    priceFrom: 7200,
    rating: 4.9,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    description: 'Witness the Great Wildebeest Migration from exclusive tented camps in the Serengeti, followed by barefoot luxury on the pristine white sands of Zanzibar.',
    highlights: [
      'Hot air balloon safari over the Serengeti at sunrise with champagne breakfast',
      'Private 4x4 Land Cruiser safari vehicle with dedicated expert tracker',
      'Luxury tented camp stays with candlelit dining under the stars',
      'Private sunset dhow cruise in Stone Town, Zanzibar'
    ],
    inclusions: [
      '24/7 Satellite Concierge Support',
      'All Domestic Bush Flights & Transfers',
      'Full-Board Luxury Lodges & Beach Resorts',
      'Park Conservation & Reserve Fees'
    ],
    bestTime: 'July to October (River Crossings)'
  },
  {
    id: 'pkg-5',
    title: 'Amalfi Coast & Capri Island Odyssey',
    subtitle: 'Cliffside Villas, Private Yachts & Limoncello Vineyards',
    destination: 'Amalfi Coast, Italy',
    region: 'Europe',
    category: 'Honeymoon',
    durationDays: 8,
    priceFrom: 5100,
    rating: 4.8,
    reviewsCount: 110,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    description: 'Sip vintage wines overlooking the Mediterranean from cliffside terraces in Positano, charter a private yacht to Capri, and explore ancient ruins with an archaeologist.',
    highlights: [
      'Full-day private luxury yacht charter around the Isle of Capri and Blue Grotto',
      'Cliffside sea-view suite accommodations in Positano and Ravello',
      'Private cooking masterclass with a Michelin-starred chef in Sorrento',
      'Helicopter arrival transfer avoiding coastal traffic'
    ],
    inclusions: [
      '24/7 Italian Concierge Support',
      'Private Mercedes Chauffeur Transfers',
      '5-Star Sea-View Hotel Accommodations',
      'Daily Breakfasts & Exclusive Tastings'
    ],
    bestTime: 'May to June or September to October'
  },
  {
    id: 'pkg-6',
    title: 'Patagonian Glaciers & Fjords Expedition',
    subtitle: 'Torres del Paine, Perito Moreno & Eco-Luxury Lodges',
    destination: 'Patagonia, Chile & Argentina',
    region: 'Americas',
    category: 'Adventure',
    durationDays: 11,
    priceFrom: 6400,
    rating: 4.9,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80',
    description: 'Explore the dramatic granite towers of Torres del Paine, walk atop ancient blue glaciers, and unwind in award-winning sustainable architecture design lodges.',
    highlights: [
      'Guided ice-trekking expedition on the colossal Perito Moreno Glacier',
      'Private gaucho cultural barbecue experience in the Patagonian steppe',
      'Stay in world-renowned architectural wilderness lodges with open bar',
      'Catamaran cruise through iceberg-filled glacial fjords'
    ],
    inclusions: [
      '24/7 Expedition Support Hotline',
      'All Internal Flights and 4x4 Transfers',
      'All-Inclusive Gourmet Dining & Fine Wines',
      'Expert Mountain Guides & Equipment'
    ],
    bestTime: 'November to March (Southern Summer)'
  }
];

export const CATEGORIES = ['All', 'Luxury', 'Adventure', 'Cultural', 'Honeymoon', 'Wellness'];

export const REGIONS = ['All', 'Europe', 'Asia', 'Africa', 'Americas'];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Eleanor Vance & Marcus Sterling',
    location: 'New York, USA',
    trip: 'Alpine Majesty & Glacier Express',
    quote: 'Wanderlust crafted our honeymoon to absolute perfection. When our flight out of Zurich was delayed, their 24/7 concierge had us rebooked in first class and a private driver waiting before we even reached baggage claim. Truly unmatched service!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Dr. Alistair Chen',
    location: 'London, UK',
    trip: 'Kyoto Imperial Heritage & Zen',
    quote: 'The level of cultural access Wanderlust provided in Kyoto was astonishing. Having a private audience and tea ceremony with a temple master is something money usually cannot buy. Exceptional professionalism from start to finish.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'The Hawthorne Family',
    location: 'Sydney, Australia',
    trip: 'Serengeti Migration & Zanzibar',
    quote: 'Traveling with three teenagers can be daunting, but Wanderlust ensured every single detail was seamless. The safari lodges were breathtaking and the kids still talk about the hot air balloon sunrise.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];
