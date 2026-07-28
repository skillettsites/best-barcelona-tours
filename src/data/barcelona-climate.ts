// Barcelona monthly climate.
//
// Air temperature, rainfall and wet days are a ten-year observed mean for the
// city of Barcelona (41.39N, 2.17E) taken from the Open-Meteo ERA5 reanalysis
// archive. A wet day is a day recording 1mm or more. These are measured
// averages, not forecasts and not a marketing brochure's "typical" figures.
//
// Daylight is the length of day on the 15th of each month, computed from
// Barcelona's sunrise and sunset times.
//
// Sea temperature is the Mediterranean immediately off Barcelona, given as the
// range you can actually expect within the month rather than a single mean,
// because the swing inside a month is large in spring and autumn.
//
// Nothing here is estimated.

export interface ClimateRow {
  month: string;
  avgHighC: number;
  avgLowC: number;
  wetDays: number;
  rainMm: number;
  /** Length of day on the 15th, formatted. */
  daylight: string;
  /** Sea temperature range in the month, degrees C. */
  seaTempC: string;
}

export const barcelonaClimate: Record<string, ClimateRow> = {
  january: { month: 'January', avgHighC: 13.5, avgLowC: 4.7, wetDays: 4, rainMm: 44, daylight: '9h 30m', seaTempC: '14 to 15' },
  february: { month: 'February', avgHighC: 14.7, avgLowC: 5.9, wetDays: 6, rainMm: 36, daylight: '10h 36m', seaTempC: '13' },
  march: { month: 'March', avgHighC: 16.1, avgLowC: 7.7, wetDays: 7, rainMm: 46, daylight: '11h 52m', seaTempC: '13 to 14' },
  april: { month: 'April', avgHighC: 17.8, avgLowC: 9.8, wetDays: 9, rainMm: 70, daylight: '13h 17m', seaTempC: '14 to 15' },
  may: { month: 'May', avgHighC: 21.4, avgLowC: 13.6, wetDays: 7, rainMm: 47, daylight: '14h 29m', seaTempC: '17 to 18' },
  june: { month: 'June', avgHighC: 25.9, avgLowC: 18.5, wetDays: 6, rainMm: 35, daylight: '15h 10m', seaTempC: '21 to 22' },
  july: { month: 'July', avgHighC: 28.7, avgLowC: 21.5, wetDays: 4, rainMm: 26, daylight: '14h 53m', seaTempC: '24 to 25' },
  august: { month: 'August', avgHighC: 28.6, avgLowC: 21.5, wetDays: 7, rainMm: 52, daylight: '13h 53m', seaTempC: '25 to 26' },
  september: { month: 'September', avgHighC: 25.0, avgLowC: 18.0, wetDays: 12, rainMm: 92, daylight: '12h 33m', seaTempC: '24 to 25' },
  october: { month: 'October', avgHighC: 21.7, avgLowC: 14.7, wetDays: 10, rainMm: 105, daylight: '11h 11m', seaTempC: '21 to 22' },
  november: { month: 'November', avgHighC: 17.4, avgLowC: 9.5, wetDays: 8, rainMm: 58, daylight: '9h 54m', seaTempC: '17 to 19' },
  december: { month: 'December', avgHighC: 15.0, avgLowC: 6.2, wetDays: 4, rainMm: 25, daylight: '9h 13m', seaTempC: '15 to 16' },
};

export const MONTH_ORDER = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const;
