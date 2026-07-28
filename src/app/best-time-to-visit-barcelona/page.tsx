import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { hubMonths } from '@/data/barcelona-months';
import { barcelonaClimate, MONTH_ORDER } from '@/data/barcelona-climate';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import {
  SEASON_BASE_YEAR,
  SEASON_PUBLISHED,
  SEASON_UPDATED,
  HUB_PATH,
  CLIMATE_SOURCE,
  SAGRADA_SOURCE,
  PARK_GUELL_SOURCE,
  PEDRERA_SOURCE,
  TOURIST_TAX_SOURCE,
} from '@/lib/season';

const TITLE = `Best Time to Visit Barcelona: Month by Month Guide ${SEASON_BASE_YEAR} to ${SEASON_BASE_YEAR + 1}`;
const DESCRIPTION =
  'The best time to visit Barcelona, month by month, with sea temperatures, real climate figures, the closure dates that catch people out and a ranked tour list for every month. Verified sources throughout.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${HUB_PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${HUB_PATH}`,
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the best month to visit Barcelona?',
    answer:
      'May, on almost every measure. It has the longest daylight of the ten months we cover in detail at 14 hours 29 minutes, comfortable 21.4C average highs, the narrowest daily temperature swing of the year and nothing at all closed or out of season. September is the strongest alternative if you want the sea, because the water holds 24 to 25C while the air has dropped to 25.0C.',
  },
  {
    question: 'When is the sea warmest in Barcelona?',
    answer:
      'August, at 25 to 26C, which is roughly double the 13C annual floor the Mediterranean reaches off Barcelona in February. The water lags the air by about six weeks in both directions, which is why it peaks in August rather than July and bottoms out in February rather than January. September still holds 24 to 25C and October 21 to 22C.',
  },
  {
    question: 'What is the cheapest time to visit Barcelona?',
    answer:
      'The second half of January and most of November. Barcelona empties once Epiphany has passed on 6 January and hotel rates fall to their annual floor until the trade-fair season starts in early February. November is similarly cheap until the Christmas lights arrive in the last week. Avoid the first week of March entirely.',
  },
  {
    question: 'Why are Barcelona hotels so expensive in early March?',
    answer:
      'Mobile World Congress runs at Fira Gran Via from 1 to 4 March 2027 and brings roughly a hundred thousand delegates. Hotel rates city-wide routinely reach three to five times normal, and the effect extends either side of the show. Integrated Systems Europe does the same on a smaller scale from 2 to 5 February, only four weeks earlier.',
  },
  {
    question: 'Which month has the most closures in Barcelona?',
    answer:
      'December, followed by January. La Pedrera closes completely on 25 December and the Sagrada Família runs 09:00 to 14:00 only on both 25 and 26 December. In January the Sagrada Família does the same on the 1st and the 6th, and La Pedrera closes for a full week from 11 to 17 January. February is the cleanest month, with no public holidays and no closures at all.',
  },
  {
    question: 'Does Barcelona really shut down in August?',
    answer:
      'No, and the claim is materially overstated. Every major attraction keeps normal hours in August, and the Sagrada Família and La Pedrera both run their longest daily timetables of the year. What closes is the local service layer: independent neighbourhood restaurants and shops in Gràcia, Eixample and Sant Antoni shut for two to three weeks around 15 August.',
  },
  {
    question: 'Which Barcelona public holidays catch visitors out?',
    answer:
      'Two are public holidays in the city of Barcelona and nowhere else: La Mercè on Thursday 24 September 2026 and Pasqua Granada on Monday 17 May 2027. A third catches people the other way: Catalonia observes Easter Monday, on 29 March 2027, while most of Spain does not. And Sant Jordi on 23 April, when the whole city is in the street, is not a public holiday at all.',
  },
  {
    question: 'What is the wettest month in Barcelona?',
    answer:
      'October, at about 105mm, ahead of September at 92mm and April at 70mm. September has more wet days, twelve against October\'s ten, so October downpours are heavier. Barcelona\'s wet season is autumn, not winter: December is the driest month of the entire year at just 25mm across four wet days.',
  },
];

export default function BestTimeToVisitBarcelonaPage() {
  const pageUrl = `${SITE_URL}${HUB_PATH}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The best time to visit Barcelona, month by month',
    description: DESCRIPTION,
    url: pageUrl,
    inLanguage: 'en-GB',
    datePublished: SEASON_PUBLISHED,
    dateModified: SEASON_UPDATED,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Barcelona month by month',
    numberOfItems: hubMonths.length,
    itemListElement: hubMonths.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Barcelona in ${m.month}`,
      url: m.hasPage ? `${SITE_URL}${m.href}` : `${pageUrl}#${m.key}`,
    })),
  };

  return (
    <>
      {[articleSchema, faqPageSchema, itemListSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Best time to visit Barcelona' }]} />

        <article>
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              The best time to visit Barcelona, month by month
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Written and checked by the {SITE_NAME} editorial team.{' '}
              <time dateTime={SEASON_UPDATED}>
                Updated{' '}
                {new Date(SEASON_UPDATED).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              .
            </p>
            <p className="mt-3 text-[17px] leading-relaxed text-gray-800 bg-blue-50/60 border-l-4 border-blue-900/70 rounded-r-lg px-4 py-3">
              May and September are the best months to visit Barcelona, with 21.4C and 25.0C average highs
              and nothing significant closed. The number that should decide your month is the sea: it swings
              from 25 to 26C in August to 13C in February. Avoid the first week of March, when Mobile World
              Congress takes hotel rates to three to five times normal.
            </p>
          </header>

          <section aria-labelledby="at-a-glance" className="mt-8">
            <h2 id="at-a-glance" className="text-xl font-bold text-gray-900">
              Barcelona at a glance, all twelve months
            </h2>
            <div className="mt-3 overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[720px] text-left text-sm">
                <caption className="sr-only">
                  Barcelona climate, sea temperature and verdict for each month of the year
                </caption>
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Month</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg high</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg low</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Sea</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Wet days</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Daylight</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MONTH_ORDER.map((key) => {
                    const c = barcelonaClimate[key];
                    const hub = hubMonths.find((h) => h.key === key)!;
                    return (
                      <tr key={key} className="align-top">
                        <th scope="row" className="px-3 py-2.5 font-medium">
                          <Link href={hub.href} className="text-blue-900 hover:underline">{c.month}</Link>
                        </th>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgHighC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgLowC}C</td>
                        <td className="px-3 py-2.5 text-gray-900 font-semibold bg-amber-50/60 whitespace-nowrap">{c.seaTempC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.wetDays}</td>
                        <td className="px-3 py-2.5 text-gray-800 whitespace-nowrap">{c.daylight}</td>
                        <td className="px-3 py-2.5 text-gray-700">{hub.verdict}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Air temperature and wet days are a ten-year observed mean for Barcelona from the{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {CLIMATE_SOURCE.label}
              </a>
              . A wet day is a day recording 1mm or more. Daylight is the length of day on the 15th. Sea
              temperature is the Mediterranean immediately off Barcelona.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">The short answer</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you want the best weather and the fewest obstacles, go in May. It has the longest daylight
              of the ten months we cover in detail at 14 hours 29 minutes, average highs of 21.4C, the
              narrowest day-to-night swing of the year and, uniquely, nothing at all closed or out of season.
              If you want the sea, go in August or September: the water peaks at 25 to 26C in August and is
              still 24 to 25C in September, when the air has already dropped to a far more comfortable 25.0C.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If price is the deciding factor, go in the second half of January or in November. Barcelona
              empties after Epiphany on 6 January and again through November until the Christmas lights
              arrive, and hotel rates in both windows sit at their annual floor. What you give up is daylight:
              9 hours 30 minutes in January and 9 hours 54 minutes in November, against nearly fifteen hours
              in June.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The one week to avoid outright is the first week of March. Mobile World Congress runs at Fira
              Gran Via from 1 to 4 March 2027 and takes hotel rates across the entire city to three to five
              times their normal level. Integrated Systems Europe does something similar on a smaller scale
              from 2 to 5 February, only four weeks earlier, which makes the middle of February an unusually
              good value window between the two.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">The sea is the number that should decide your month</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Most Barcelona month guides lead with air temperature, and for a city on the Mediterranean that
              is the wrong headline. Barcelona&apos;s air ranges from 13.5C in January to 28.7C in July, a
              swing of about fifteen degrees. Its sea ranges from 13C in February to 25 to 26C in August,
              which is roughly a doubling. That is the single biggest seasonal difference in the city and it
              changes what is actually bookable.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The water lags the air by about six weeks in both directions. That is why the sea peaks in
              August rather than in July, when the air is hottest, and bottoms out in February rather than in
              January, when the air is coldest. It also produces the most useful planning insight in this
              guide: October, at 21 to 22C, has warmer water than June at 21 to 22C and far warmer water than
              April at 14 to 15C, even though April and October have similar air temperatures.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              This is not academic. The highest-rated tour on this site, a Costa Brava kayak, snorkel and
              cliff jump day trip rated 4.9 out of 5 from 2,790 reviews, is genuinely unbookable from about
              November to March, and the Casa Batlló rooftop night visit with live music runs from 1 April to
              31 August only. Between them, those two products are the reason our ranked tour list changes
              materially from month to month rather than being the same ten in a different order.
            </p>
          </section>

          {hubMonths.map((m) => {
            const c = barcelonaClimate[m.key];
            return (
              <section key={m.key} id={m.key} className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900">Barcelona in {m.month}</h2>
                <p className="mt-2 text-sm text-gray-600">
                  {c.avgHighC}C average high, {c.avgLowC}C average low, sea {c.seaTempC}C,{' '}
                  {c.wetDays} wet days, {c.daylight} of daylight mid-month.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">{m.capsule}</p>
                {m.hasPage ? (
                  <p className="mt-3">
                    <Link href={m.href} className="font-semibold text-blue-900 hover:underline">
                      Read the full guide to Barcelona in {m.month}
                    </Link>
                  </p>
                ) : (
                  <p className="mt-3 text-gray-600">
                    We publish full month guides for August through May. For {m.month}, the figures above are
                    the essentials; the nearest full guides are{' '}
                    <Link href="/barcelona-in-may" className="text-blue-900 font-medium hover:underline">
                      Barcelona in May
                    </Link>{' '}
                    and{' '}
                    <Link href="/barcelona-in-august" className="text-blue-900 font-medium hover:underline">
                      Barcelona in August
                    </Link>
                    .
                  </p>
                )}
              </section>
            );
          })}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Where the numbers come from</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Air temperature, rainfall and wet days are a ten-year observed mean for the city of Barcelona,
              taken from the{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Open-Meteo ERA5 reanalysis archive
              </a>
              . A wet day is a day recording 1mm or more of precipitation. Daylight is the length of day on
              the 15th of each month, computed from Barcelona&apos;s sunrise and sunset times. Sea temperature
              is the Mediterranean immediately off Barcelona, given as a range rather than a single mean
              because the swing inside a month is large in spring and autumn.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Opening hours, prices and closure dates come from each attraction&apos;s own published
              timetable: the{' '}
              <a href={SAGRADA_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Sagrada Família
              </a>
              ,{' '}
              <a href={PEDRERA_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                La Pedrera
              </a>{' '}
              and{' '}
              <a href={PARK_GUELL_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Park Güell
              </a>
              . Public holidays were checked against the official Catalan calendar and every weekday was
              calculated rather than assumed. Tourist tax rates come from the{' '}
              <a href={TOURIST_TAX_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Barcelona City Council
              </a>{' '}
              and are quoted in euros, because the city sets them in euros; every tour price on this site is
              in pounds.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Where we could not confirm something from an official source, we say so on the page rather than
              filling the gap. That currently applies to the 2026 dates of the Fira de Santa Llúcia, the exact
              day of La Mercè&apos;s free museum opening, the route and start time of the 2027 Cavalcada de
              Reis, Barcelona&apos;s tourist tax rates from 1 April 2027, the Christmas lights switch-on
              dates, and the operating seasons of every water activity other than the two we have verified
              directly.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Best time to visit Barcelona: FAQs</h2>
            <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((f) => (
                <div key={f.question} className="py-4">
                  <h3 className="font-semibold text-gray-900">{f.question}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm font-semibold text-gray-900">Ready to book?</p>
            <p className="mt-2 text-sm text-gray-600">
              Browse{' '}
              <Link href="/tours" className="text-blue-900 font-medium hover:underline">
                all Barcelona tours
              </Link>
              , the{' '}
              <Link href="/attractions" className="text-blue-900 font-medium hover:underline">
                Barcelona attractions
              </Link>{' '}
              guide, or our{' '}
              <Link href="/blog/top-10-tours" className="text-blue-900 font-medium hover:underline">
                top ten Barcelona tours
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
