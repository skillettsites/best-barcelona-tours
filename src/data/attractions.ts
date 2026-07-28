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
  /** Extra prose sections rendered under the ranked ticket list. */
  sections?: { heading: string; paragraphs: string[] }[];
  /** Hand-picked internal links rendered under the sections. */
  relatedLinks?: { href: string; label: string; description: string }[];
}

export const attractions: Attraction[] = [
  {
    slug: 'sagrada-familia',
    name: 'Sagrada Familia',
    title: 'Sagrada Familia Tickets and Tours',
    metaTitle: 'Sagrada Familia Tickets and Tours 2026',
    metaDescription: 'Book Sagrada Familia tickets and tours in Barcelona. 10 top-rated options from £13, with skip-the-line where available and free cancellation on most.',
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
    metaDescription: 'Book Park Guell tickets and tours in Barcelona. 6 top-rated options from £18, with skip-the-line where available and free cancellation on most.',
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
    metaDescription: 'Book Casa Batllo tickets and tours in Barcelona. 2 top-rated options from £25, with skip-the-line where available and free cancellation on most.',
    intro: 'Compare the best Casa Batllo tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-casa-batll-entry-with-self-audioguide-tour', 'casa-batll-night-visit-with-live-music-on-the-roof-terrace'],
    faqs: [
      { question: 'How much are Casa Batllo tickets?', answer: 'Casa Batllo tickets and tours in Barcelona start from around £25. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Casa Batllo tour?', answer: 'The top-rated option is Casa Batlló Entry with Self-Audioguide Tour, rated 4.7 stars by 29,713 travellers, from £25.' },
      { question: 'Can I skip the line at Casa Batllo?', answer: 'Yes. The self-guided entry ticket is timed, so you enter on your slot rather than joining the on-the-day queue on Passeig de Gracia. Book ahead in peak season, as the best times sell out first.' },
      { question: 'Casa Batllo tours or entry tickets, which should I book?', answer: 'The timed entry ticket with the audio and augmented-reality guide, from £25, is the right choice for most visitors. Book the night visit with live music on the roof terrace, from £50, if you want an event rather than a house tour.' },
    ],
    sections: [
      {
        heading: 'Casa Batllo tours vs entry tickets',
        paragraphs: [
          'Casa Batllo is a self-guided house rather than a guided-tour attraction, so the choice is simpler than it looks. The standard entry ticket from £25 includes the augmented-reality tablet that reconstructs each room as the Batllo family knew it, which does the job a live guide would do elsewhere. For a first visit, that is the ticket to book.',
          'The alternative is the night visit from £50, which is a different experience rather than a better ticket: you tour the house in the evening and finish with live music on the roof terrace among Gaudi\'s chimneys as the city lights come on. Pay the premium for an occasion, not for extra access. Either way the entry is timed, so you are booking a slot as much as a ticket.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/blog/casa-batllo-vs-la-pedrera-which-gaudi-house',
        label: 'Casa Batllo vs La Pedrera: which Gaudi house to visit?',
        description: 'The two Gaudi houses on Passeig de Gracia compared on interiors, rooftops and price.',
      },
      {
        href: '/blog/best-way-to-skip-the-line-in-barcelona',
        label: 'The best way to skip the lines in Barcelona',
        description: 'How timed entry works at Casa Batllo, the Sagrada Familia and Park Guell.',
      },
    ],
  },
  {
    slug: 'montserrat',
    name: 'Montserrat',
    title: 'Montserrat Tickets and Tours',
    metaTitle: 'Montserrat Tickets and Tours 2026',
    metaDescription: 'Book Montserrat tickets and tours from Barcelona. One top-rated guided option from £43, with instant confirmation and free cancellation on most.',
    intro: 'Compare the best Montserrat tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-montserrat-tour-with-cog-wheel-and-black-madonna'],
    faqs: [
      { question: 'How much are Montserrat tickets?', answer: 'Montserrat tickets and tours in Barcelona start from around £43. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Montserrat tour?', answer: 'The top-rated option is Montserrat Tour with Cog-Wheel & Black Madonna, rated 4.6 stars by 8,241 travellers, from £43.' },
      { question: 'Can I skip the line at Montserrat?', answer: 'There is no separate ticket queue to beat on the guided tour we list: the cog-wheel train and monastery entry are arranged for you as part of the booking. Book ahead in peak season, as the tour itself sells out.' },
    ],
  },
  {
    slug: 'gothic-quarter',
    name: 'Gothic Quarter',
    title: 'Gothic Quarter Tickets and Tours',
    metaTitle: 'Gothic Quarter Tickets and Tours 2026',
    metaDescription: 'Book Gothic Quarter tours in Barcelona. One top-rated guided option from £83, with instant confirmation and free cancellation on most bookings.',
    intro: 'Compare the best Gothic Quarter tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-sagrada-familia-park-g-ell-and-gothic-quarter-tour'],
    faqs: [
      { question: 'How much are Gothic Quarter tickets?', answer: 'Gothic Quarter tickets and tours in Barcelona start from around £83. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Gothic Quarter tour?', answer: 'The top-rated option is Sagrada Familia, Park Güell & Gothic Quarter Tour, rated 4.7 stars by 646 travellers, from £83.' },
      { question: 'Can I skip the line at Gothic Quarter?', answer: 'The Gothic Quarter is an open neighbourhood, so there is no entry ticket or queue. The full-day tour we list walks you through it and El Born before taking you on to the ticketed Gaudi sights, with entry arranged for you.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
