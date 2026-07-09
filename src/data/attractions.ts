import { FAQ } from '@/lib/types';

export interface Attraction {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tourSlugs: string[];
  faqs: FAQ[];
}

export const attractions: Attraction[] = [
  {
    slug: 'sagrada-familia',
    name: 'Sagrada Familia',
    title: 'Sagrada Familia Tickets and Tours',
    metaTitle: 'Sagrada Familia Tickets and Tours 2026',
    metaDescription: 'Book Sagrada Familia tickets and tours in Barcelona. 10 top-rated options from £13, with skip-the-line where available, instant confirmation and free cance',
    intro: 'Compare the best Sagrada Familia tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou', 'barcelona-sagrada-familia-priority-access-guided-tour', 'sagrada-familia-priority-entry-and-expert-guided-tour', 'barcelona-park-g-ell-and-la-sagrada-familia-tickets-and-tour', 'barcelona-sagrada-familia-park-g-ell-and-gothic-quarter-tour', 'barcelona-sagrada-familia-entry-ticket-with-audio-guide', 'barcelona-sagrada-familia-skip-the-line-tour-with-guide', 'barcelona-sagrada-familia-skip-the-line-guided-tour', 'barcelona-sagrada-familia-guided-tour-with-tower-access', 'barcelona-sagrada-familia-decoded-guided-tour'],
    faqs: [
      { question: 'How much are Sagrada Familia tickets?', answer: 'Sagrada Familia tickets and tours in Barcelona start from around £13. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Sagrada Familia tour?', answer: 'The top-rated option is Sagrada Familia Skip-the-Line Entry Ticket & Tour, rated 4.8 stars by 14,289 travellers, from £54.' },
      { question: 'Can I skip the line at Sagrada Familia?', answer: 'Yes, many Sagrada Familia options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'park-guell',
    name: 'Park Guell',
    title: 'Park Guell Tickets and Tours',
    metaTitle: 'Park Guell Tickets and Tours 2026',
    metaDescription: 'Book Park Guell tickets and tours in Barcelona. 6 top-rated options from £18, with skip-the-line where available, instant confirmation and free cancellatio',
    intro: 'Compare the best Park Guell tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-park-guell-guided-tour-with-skip-the-line-entry', 'barcelona-gaud-s-park-g-ell-tour-with-fast-track-ticket', 'barcelona-park-g-ell-and-la-sagrada-familia-tickets-and-tour', 'barcelona-sagrada-familia-park-g-ell-and-gothic-quarter-tour', 'barcelona-park-g-ell-and-gaud-house-museum-entry-ticket', 'barcelona-park-g-ell-admission-ticket'],
    faqs: [
      { question: 'How much are Park Guell tickets?', answer: 'Park Guell tickets and tours in Barcelona start from around £18. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Park Guell tour?', answer: 'The top-rated option is Park Guell Guided Tour with Skip The Line Entry, rated 4.7 stars by 20,762 travellers, from £22.' },
      { question: 'Can I skip the line at Park Guell?', answer: 'Yes, many Park Guell options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'casa-batllo',
    name: 'Casa Batllo',
    title: 'Casa Batllo Tickets and Tours',
    metaTitle: 'Casa Batllo Tickets and Tours 2026',
    metaDescription: 'Book Casa Batllo tickets and tours in Barcelona. 2 top-rated options from £25, with skip-the-line where available, instant confirmation and free cancellati',
    intro: 'Compare the best Casa Batllo tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-casa-batll-entry-with-self-audioguide-tour', 'casa-batll-night-visit-with-live-music-on-the-roof-terrace'],
    faqs: [
      { question: 'How much are Casa Batllo tickets?', answer: 'Casa Batllo tickets and tours in Barcelona start from around £25. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Casa Batllo tour?', answer: 'The top-rated option is Casa Batlló Entry with Self-Audioguide Tour, rated 4.7 stars by 29,713 travellers, from £25.' },
      { question: 'Can I skip the line at Casa Batllo?', answer: 'Yes, many Casa Batllo options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'montserrat',
    name: 'Montserrat',
    title: 'Montserrat Tickets and Tours',
    metaTitle: 'Montserrat Tickets and Tours 2026',
    metaDescription: 'Book Montserrat tickets and tours in Barcelona. 1 top-rated options from £43, with skip-the-line where available, instant confirmation and free cancellatio',
    intro: 'Compare the best Montserrat tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-montserrat-tour-with-cog-wheel-and-black-madonna'],
    faqs: [
      { question: 'How much are Montserrat tickets?', answer: 'Montserrat tickets and tours in Barcelona start from around £43. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Montserrat tour?', answer: 'The top-rated option is Montserrat Tour with Cog-Wheel & Black Madonna, rated 4.6 stars by 8,241 travellers, from £43.' },
      { question: 'Can I skip the line at Montserrat?', answer: 'Yes, many Montserrat options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'gothic-quarter',
    name: 'Gothic Quarter',
    title: 'Gothic Quarter Tickets and Tours',
    metaTitle: 'Gothic Quarter Tickets and Tours 2026',
    metaDescription: 'Book Gothic Quarter tickets and tours in Barcelona. 1 top-rated options from £83, with skip-the-line where available, instant confirmation and free cancell',
    intro: 'Compare the best Gothic Quarter tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-sagrada-familia-park-g-ell-and-gothic-quarter-tour'],
    faqs: [
      { question: 'How much are Gothic Quarter tickets?', answer: 'Gothic Quarter tickets and tours in Barcelona start from around £83. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Gothic Quarter tour?', answer: 'The top-rated option is Sagrada Familia, Park Güell & Gothic Quarter Tour, rated 4.7 stars by 646 travellers, from £83.' },
      { question: 'Can I skip the line at Gothic Quarter?', answer: 'Yes, many Gothic Quarter options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
