import { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'skip-the-line',
    title: 'Skip-the-Line Tickets',
    metaTitle: 'Skip-the-Line Tickets in Barcelona 2026',
    metaDescription: 'Browse the best skip-the-line tickets in Barcelona. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best skip-the-line tickets in Barcelona, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated skip-the-line tickets in Barcelona, booked direct through GetYourGuide.',
    icon: '🎟️',
    tourSlugs: ['barcelona-sagrada-familia-entry-ticket-with-audio-guide', 'barcelona-sagrada-familia-skip-the-line-guided-tour', 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou', 'barcelona-park-g-ell-admission-ticket', 'barcelona-sagrada-familia-priority-access-guided-tour', 'barcelona-park-g-ell-and-la-sagrada-familia-tickets-and-tour', 'sagrada-familia-priority-entry-and-expert-guided-tour', 'barcelona-casa-batll-entry-with-self-audioguide-tour', 'barcelona-top-night-club-experience-vip-club-entry', 'barcelona-park-guell-guided-tour-with-skip-the-line-entry', 'barcelona-gaud-s-park-g-ell-tour-with-fast-track-ticket', 'barcelona-sagrada-familia-skip-the-line-tour-with-guide', 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-', 'barcelona-park-g-ell-and-gaud-house-museum-entry-ticket', 'barcelona-aquarium-entry-ticket'],
    faqs: [
      { question: 'How do I book skip-the-line tickets in Barcelona?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'guided-tours',
    title: 'Guided Tours',
    metaTitle: 'Guided Tours in Barcelona 2026',
    metaDescription: 'Browse the best guided tours in Barcelona. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best guided tours in Barcelona, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated guided tours in Barcelona, booked direct through GetYourGuide.',
    icon: '🧑‍🏫',
    tourSlugs: ['barcelona-sagrada-familia-decoded-guided-tour', 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna', 'barcelona-sagrada-familia-guided-tour-with-tower-access', 'costa-brava-tour-kayak-snorkel-and-cliff-jump-from-barcelona', 'from-barcelona-mont-rebei-canyon-day-trip-with-guide', 'barcelona-city-tour-hop-on-hop-off-bus-tour', 'barcelona-sagrada-familia-park-g-ell-and-gothic-quarter-tour', 'the-best-barcelona-audio-guides-2026-free-cancellation'],
    faqs: [
      { question: 'How do I book guided tours in Barcelona?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'food-drink',
    title: 'Food, Wine & Nightlife',
    metaTitle: 'Food, Wine & Nightlife in Barcelona 2026',
    metaDescription: 'Browse the best food, wine & nightlife in Barcelona. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best food, wine & nightlife in Barcelona, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated food, wine & nightlife in Barcelona, booked direct through GetYourGuide.',
    icon: '🍷',
    tourSlugs: ['barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an', 'barcelona-daytime-or-sunset-catamaran-cruise-with-music'],
    faqs: [
      { question: 'How do I book food, wine & nightlife in Barcelona?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'top-attractions',
    title: 'Top Attractions',
    metaTitle: 'Top Attractions in Barcelona 2026',
    metaDescription: 'Browse the best top attractions in Barcelona. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best top attractions in Barcelona, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated top attractions in Barcelona, booked direct through GetYourGuide.',
    icon: '⭐',
    tourSlugs: ['casa-batll-night-visit-with-live-music-on-the-roof-terrace'],
    faqs: [
      { question: 'How do I book top attractions in Barcelona?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
