// Single build-time constant for the seasonal month pages.
//
// The month pages run August of SEASON_BASE_YEAR through May of the following
// year. The year is rendered in the <title> tag and in the events section
// heading only. It never appears in a URL or in an H1, so rolling the whole set
// forward is a one-line edit here plus a content refresh.
export const SEASON_BASE_YEAR = 2026;

// Article datePublished / dateModified for the seasonal set.
export const SEASON_PUBLISHED = '2026-07-28';
export const SEASON_UPDATED = '2026-07-28';

// Months from August of the base year carry offset 0, January onwards carry 1.
export function seasonYear(yearOffset: 0 | 1): number {
  return SEASON_BASE_YEAR + yearOffset;
}

export const HUB_PATH = '/best-time-to-visit-barcelona';

// Sources cited on the seasonal pages. Every one of these was read directly for
// this build. Nothing on these pages is estimated.
export const CLIMATE_SOURCE = {
  label: 'Open-Meteo ERA5 reanalysis for Barcelona, ten-year observed mean',
  url: 'https://open-meteo.com/en/docs/historical-weather-api',
};

export const SAGRADA_SOURCE = {
  label: 'Sagrada Família official opening hours and prices',
  url: 'https://sagradafamilia.org/en/visit-us',
};

export const PARK_GUELL_SOURCE = {
  label: 'Park Güell official tickets and timed-entry rules',
  url: 'https://parkguell.barcelona/en',
};

export const PEDRERA_SOURCE = {
  label: 'La Pedrera (Casa Milà) official timetable and closure dates',
  url: 'https://www.lapedrera.com/en/visits',
};

export const TOURIST_TAX_SOURCE = {
  label: 'Barcelona City Council tourist tax (IEET plus municipal surcharge)',
  url: 'https://ajuntament.barcelona.cat/hisenda/en',
};

// Barcelona's tourist tax is set by the city and charged in euros, so it is the
// one figure on these pages that is not quoted in pounds. Rates below apply per
// person per night to 31 March 2027 and are capped at the first seven nights.
// They rise again on 1 April 2027; Barcelona had not published the new figures
// at the time of writing, so no 2027 number is stated anywhere on this site.
export const TOURIST_TAX = {
  fiveStar: '12.00',
  fourStar: '8.40',
  apartment: '9.50',
  other: '7.00',
  hostel: '6.00',
  capNights: 7,
  validUntil: '31 March 2027',
};
