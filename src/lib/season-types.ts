export interface EventRow {
  event: string;
  dates: string;
  where: string;
  free: string;
}

export interface ClosureRow {
  site: string;
  closed: string;
  note: string;
}

export interface TourPick {
  /** Must match a slug in src/data/tours.ts. Price, rating and review count are read from there. */
  slug: string;
  /**
   * Display name for the ranked list and the quick-pick table. Several stored
   * shortTitles are truncated or carry raw HTML entities from the original
   * scrape, so the month pages render this instead. It never changes the tour
   * page's own title or H1.
   */
  label: string;
  bestFor: string;
  why: string;
}

export interface MonthSection {
  capsule: string;
  body: string[];
}

export interface MonthContent {
  /** URL slug, no year, e.g. barcelona-in-august */
  slug: string;
  /** Display name, e.g. August */
  month: string;
  /** Key into barcelonaClimate */
  monthKey: string;
  /** 0 = base year, 1 = base year + 1 */
  yearOffset: 0 | 1;
  prevMonth: string;
  prevPath: string;
  nextMonth: string;
  nextPath: string;
  metaDescription: string;
  heroCapsule: string;
  verdict: MonthSection;
  weather: MonthSection;
  crowds: MonthSection;
  tours: {
    capsule: string;
    picks: TourPick[];
    note: string;
  };
  events: {
    capsule: string;
    rows: EventRow[];
    body: string[];
  };
  closures: {
    capsule: string;
    rows: ClosureRow[];
    body: string[];
  };
  packing: {
    capsule: string;
    body: string[];
    list: string[];
  };
  faqs: { question: string; answer: string }[];
}
