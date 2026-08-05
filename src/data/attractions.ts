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
    metaDescription: 'Book Sagrada Familia tickets and tours in Barcelona. 10 top-rated options from £9, with skip-the-line where available and free cancellation on most.',
    intro: 'Compare the best Sagrada Familia tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou', 'barcelona-sagrada-familia-priority-access-guided-tour', 'sagrada-familia-priority-entry-and-expert-guided-tour', 'barcelona-park-g-ell-and-la-sagrada-familia-tickets-and-tour', 'barcelona-sagrada-familia-park-g-ell-and-gothic-quarter-tour', 'barcelona-sagrada-familia-entry-ticket-with-audio-guide', 'barcelona-sagrada-familia-skip-the-line-tour-with-guide', 'barcelona-sagrada-familia-skip-the-line-guided-tour', 'barcelona-sagrada-familia-guided-tour-with-tower-access', 'barcelona-sagrada-familia-decoded-guided-tour'],
    relatedLinks: [
      {
        href: '/blog/is-sagrada-familia-worth-it',
        label: 'Is the Sagrada Familia worth it?',
        description: 'What the entry fee actually buys you, and whether the interior lives up to the queue.',
      },
      {
        href: '/blog/sagrada-familia-tower-access-worth-it',
        label: 'Is Sagrada Familia tower access worth the upgrade?',
        description: 'The towers are the priciest add-on. Whether the climb and the view justify it.',
      },
      {
        href: '/blog/best-way-to-skip-the-line-in-barcelona',
        label: 'The best way to skip the lines in Barcelona',
        description: 'Which priority tickets genuinely save time here, and which just cost more.',
      },
    ],
    faqs: [
      { question: 'How much are Sagrada Familia tickets?', answer: 'Sagrada Familia tickets and tours in Barcelona start from around £9. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Sagrada Familia tour?', answer: 'The top-rated option is Sagrada Familia Skip-the-Line Entry Ticket & Tour, rated 4.8 stars by 14,486 travellers, from £54.' },
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
    relatedLinks: [
      {
        href: '/blog/park-guell-guided-tour-vs-entry-ticket',
        label: 'Park Guell: guided tour or plain entry ticket?',
        description: 'A guide costs only a little more than entry alone. Whether it is worth the difference.',
      },
      {
        href: '/blog/sagrada-familia-vs-park-guell-which-to-visit-first',
        label: 'Sagrada Familia vs Park Guell: which to visit first?',
        description: 'How to order the two Gaudi headliners, and whether they pair on one day.',
      },
      {
        href: '/blog/best-way-to-skip-the-line-in-barcelona',
        label: 'The best way to skip the lines in Barcelona',
        description: 'Park Guell caps entry by timed slot, so this is the one to read before booking.',
      },
    ],
    faqs: [
      { question: 'How much are Park Guell tickets?', answer: 'Park Guell tickets and tours in Barcelona start from around £18. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Park Guell tour?', answer: 'The top-rated option is Park Guell Guided Tour with Skip The Line Entry, rated 4.7 stars by 21,210 travellers, from £22.' },
      { question: 'Can I skip the line at Park Guell?', answer: 'Yes, many Park Guell options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'casa-batllo',
    name: 'Casa Batllo',
    title: 'Casa Batllo Tickets and Tours',
    metaTitle: 'Casa Batllo Tickets and Tours 2026',
    metaDescription: 'Book Casa Batllo tickets and tours in Barcelona. 2 top-rated options from £25, with timed entry. Both are non-refundable, so choose your date first.',
    intro: 'Compare the best Casa Batllo tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees your entry slot at a house that has no priority lane. Note that GetYourGuide lists both Casa Batllo options as non-refundable, so settle on your date before you pay. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-casa-batll-entry-with-self-audioguide-tour', 'casa-batll-night-visit-with-live-music-on-the-roof-terrace'],
    faqs: [
      { question: 'How much are Casa Batllo tickets?', answer: 'Casa Batllo tickets and tours in Barcelona start from around £25. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Casa Batllo tour?', answer: 'The top-rated option is Casa Batlló Entry with Self-Audioguide Tour, rated 4.7 stars by 30,250 travellers, from £25.' },
      { question: 'Can I skip the line at Casa Batllo?', answer: 'Not exactly. GetYourGuide does not list a skip-the-line option here, because Casa Batllo has no separate priority lane. What booking online buys you is a timed slot, so you enter at your chosen time rather than queuing on Passeig de Gracia for whatever is left. Book ahead in peak season, as the best times sell out first.' },
      { question: 'Casa Batllo tours or entry tickets, which should I book?', answer: 'The timed entry ticket with the audio and augmented-reality guide, from £25, is the right choice for most visitors. Book the night visit with live music on the roof terrace, from £50, if you want an event rather than a house tour. Both are non-refundable once booked.' },
    ],
    sections: [
      {
        heading: 'Casa Batllo tours vs entry tickets',
        paragraphs: [
          'Casa Batllo is a self-guided house rather than a guided-tour attraction, so the choice is simpler than it looks. The standard entry ticket from £25 includes the augmented-reality tablet that reconstructs each room as the Batllo family knew it, which does the job a live guide would do elsewhere. For a first visit, that is the ticket to book.',
          'The alternative is the night visit from £50, which is a different experience rather than a better ticket: you tour the house in the evening and finish with live music on the roof terrace among Gaudi\'s chimneys as the city lights come on. Pay the premium for an occasion, not for extra access. Either way the entry is timed, so you are booking a slot as much as a ticket, and neither option can be cancelled or refunded once you have paid.',
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
    relatedLinks: [
      {
        href: '/blog/is-a-montserrat-day-trip-from-barcelona-worth-it',
        label: 'Is a Montserrat day trip from Barcelona worth it?',
        description: 'Whether the mountain monastery earns a full day away from the city.',
      },
      // One link only. The combined-tour post covers a city-centre priority-access
      // product and never mentions Montserrat, which is a day trip out of the city.
    ],
    faqs: [
      { question: 'How much are Montserrat tickets?', answer: 'Montserrat tickets and tours in Barcelona start from around £43. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Montserrat tour?', answer: 'The top-rated option is Montserrat Tour with Cog-Wheel & Black Madonna, rated 4.6 stars by 8,416 travellers, from £43.' },
      { question: 'Can I skip the line at Montserrat?', answer: 'There is no separate ticket queue to beat on the guided tour we list: the cog-wheel train and monastery entry are arranged for you as part of the booking. Book ahead in peak season, as the tour itself sells out.' },
    ],
  },
  {
    slug: 'gothic-quarter',
    name: 'Gothic Quarter',
    title: 'Gothic Quarter Tickets and Tours',
    metaTitle: 'Gothic Quarter Tickets and Tours 2026',
    metaDescription: 'Book Gothic Quarter tours in Barcelona. One top-rated guided option from £65, with instant confirmation and free cancellation on most bookings.',
    intro: 'Compare the best Gothic Quarter tickets and guided tours in Barcelona, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['barcelona-sagrada-familia-park-g-ell-and-gothic-quarter-tour'],
    relatedLinks: [
      {
        href: '/blog/best-of-barcelona-priority-access-tour-worth-it',
        label: 'Is a combined Barcelona priority-access tour worth it?',
        description: 'The Gothic Quarter is free to walk, so the value here sits in what the tour bundles with it.',
      },
      // One link only. This page carries a single bundled tour, so a second
      // entry would outweigh the product it sits under.
    ],
    faqs: [
      { question: 'How much are Gothic Quarter tickets?', answer: 'Gothic Quarter tickets and tours in Barcelona start from around £65. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Gothic Quarter tour?', answer: 'The top-rated option is Sagrada Familia, Park Güell & Gothic Quarter Tour, rated 4.7 stars by 726 travellers, from £65.' },
      { question: 'Can I skip the line at Gothic Quarter?', answer: 'The Gothic Quarter is an open neighbourhood, so there is no entry ticket or queue. The full-day tour we list walks you through it and El Born before taking you on to the ticketed Gaudi sights, with entry arranged for you.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
