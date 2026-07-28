import { MonthContent } from '@/lib/season-types';
import { august, september, october, november, december } from './barcelona-months-a';
import { january, february, march, april, may } from './barcelona-months-b';

export const monthPages: MonthContent[] = [
  august, september, october, november, december,
  january, february, march, april, may,
];

export function getMonthBySlug(slug: string): MonthContent | undefined {
  return monthPages.find((m) => m.slug === slug);
}

/** Footer month strip order, chronological across the season. */
export const monthStrip = monthPages.map((m) => ({ month: m.month, href: `/${m.slug}` }));

export interface HubMonth {
  /** Anchor id and climate key */
  key: string;
  month: string;
  /** Path to the month page, or a hub anchor where no page exists. */
  href: string;
  hasPage: boolean;
  /** 40 to 60 words, standalone, at least one hard number, no links inside. */
  capsule: string;
  verdict: string;
}

// Twelve capsules, calendar order. June and July have no dedicated page in this
// build, so they link to their own section on this hub.
export const hubMonths: HubMonth[] = [
  {
    key: 'january',
    month: 'January',
    href: '/barcelona-in-january',
    hasPage: true,
    verdict: 'Cheapest of the year',
    capsule:
      'The coldest month at 13.5C average highs, and the cheapest once Epiphany has passed on 6 January. Only four wet days, joint fewest with December, giving the clearest air and sharpest views of the year. La Pedrera closes completely for a full week, from 11 to 17 January.',
  },
  {
    key: 'february',
    month: 'February',
    href: '/barcelona-in-february',
    hasPage: true,
    verdict: 'Sea at its 13C floor',
    capsule:
      'The Mediterranean bottoms out at 13C, roughly half its August temperature, so this is a city trip and nothing else. In exchange, daylight climbs past ten and a half hours and there are no public holidays and no attraction closures at all. The ISE trade fair fills hotels from 2 to 5 February.',
  },
  {
    key: 'march',
    month: 'March',
    href: '/barcelona-in-march',
    hasPage: true,
    verdict: 'Avoid the first week',
    capsule:
      'Mobile World Congress runs 1 to 4 March and routinely takes hotel rates to three to five times normal across the whole city. After it, March is excellent: 16.1C highs, La Pedrera back on summer hours from the 6th and the clocks going forward on the 28th. Holy Week closes the month.',
  },
  {
    key: 'april',
    month: 'April',
    href: '/barcelona-in-april',
    hasPage: true,
    verdict: 'Two things come back',
    capsule:
      'The Casa Batlló rooftop night visit returns on 1 April after seven months off sale, and the Costa Brava sea trips return to the calendar. The tourist tax also rises on the 1st. Sant Jordi on Friday 23 April fills the centre with book and rose stalls and is not a public holiday.',
  },
  {
    key: 'may',
    month: 'May',
    href: '/barcelona-in-may',
    hasPage: true,
    verdict: 'Best all-round month',
    capsule:
      'The longest daylight in this guide at 14 hours 29 minutes, 21.4C average highs and the narrowest daily temperature swing of the year. Nothing is closed and nothing is out of season. The trap is Monday 17 May, Pasqua Granada, a public holiday in the city of Barcelona alone.',
  },
  {
    key: 'june',
    month: 'June',
    href: '/best-time-to-visit-barcelona#june',
    hasPage: false,
    verdict: 'Longest days, sea catching up',
    capsule:
      'The longest days of the year at around 15 hours 10 minutes in mid-June, with 25.9C average highs and only six wet days. The sea finally reaches 21 to 22C, roughly matching October. Primavera Sound falls on 3 to 5 June 2027 and Sónar on 17 to 19 June, both outside our guide window.',
  },
  {
    key: 'july',
    month: 'July',
    href: '/best-time-to-visit-barcelona#july',
    hasPage: false,
    verdict: 'Driest month of the summer',
    capsule:
      'Barcelona\'s driest summer month at 26mm across four wet days, almost exactly matching December\'s 25mm, with 28.7C average highs and a sea at 24 to 25C. Daylight is still 14 hours 53 minutes. It is the hottest overnight month of the year, with lows averaging 21.5C.',
  },
  {
    key: 'august',
    month: 'August',
    href: '/barcelona-in-august',
    hasPage: true,
    verdict: 'Warmest sea of the year',
    capsule:
      'The sea peaks at 25 to 26C, roughly double February\'s 13C, and that is the whole argument for August. Air temperatures are a manageable 28.6C. The talk of the city shutting down is overstated: the Sagrada Família and La Pedrera both run their longest hours of the year this month.',
  },
  {
    key: 'september',
    month: 'September',
    href: '/barcelona-in-september',
    hasPage: true,
    verdict: 'Festival month, wettest by frequency',
    capsule:
      'La Mercè, the city\'s own festival, runs 23 to 27 September and is the largest free event of the Barcelona year. Wet days jump from seven to twelve, the highest count of any month, while the sea barely cools at 24 to 25C. La Pedrera closes completely on 7 September.',
  },
  {
    key: 'october',
    month: 'October',
    href: '/barcelona-in-october',
    hasPage: true,
    verdict: 'Wettest month, best walking',
    capsule:
      'The wettest month of the year at 105mm, and simultaneously the best walking temperature at 21.7C. The clocks go back on Sunday 25 October, cutting an hour off the evening overnight. It is also the last bookable month for the Costa Brava sea trips before the winter.',
  },
  {
    key: 'november',
    month: 'November',
    href: '/barcelona-in-november',
    hasPage: true,
    verdict: 'Quietest and darkest',
    capsule:
      'Rain halves from October to 58mm and the city empties, but daylight falls below ten hours for the first time, to 9 hours 54 minutes. La Pedrera switches to its winter timetable on 2 November, moving the night visit to 19:00 to 23:00. Christmas lights are expected from the 26th.',
  },
  {
    key: 'december',
    month: 'December',
    href: '/barcelona-in-december',
    hasPage: true,
    verdict: 'Driest month of the year',
    capsule:
      'Barcelona\'s driest month, at 25mm across four wet days against October\'s 105mm across ten, and also its darkest at 9 hours 13 minutes of daylight. La Pedrera closes on 25 December and the Sagrada Família runs 09:00 to 14:00 only on the 25th and 26th.',
  },
];
