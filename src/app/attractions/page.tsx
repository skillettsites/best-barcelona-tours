import LocalPrice from '@/components/LocalPrice';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { attractions } from '@/data/attractions';
import { getTourBySlug } from '@/data/tours';
import { breadcrumbSchema } from '@/lib/schema';
import { SITE_URL, SITE_CITY, SITE_NAME } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: `${SITE_CITY} Attractions: Tickets and Tours 2026`,
  description: `Book tickets and tours for the top attractions in ${SITE_CITY}, ranked by verified reviews. Skip-the-line where available, instant confirmation and free cancellation.`,
  alternates: { canonical: `${SITE_URL}/attractions` },
};

export default function AttractionsIndex() {
  const cards = attractions.map((a) => {
    const tours = a.tourSlugs.map((s) => getTourBySlug(s)).filter((t): t is NonNullable<typeof t> => Boolean(t));
    return {
      a,
      top: tours[0],
      count: tours.length,
      from: Math.min(...tours.map((t) => t.price).filter(Boolean)),
      skipTheLine: tours.some((t) => t.categories.includes('skip-the-line')),
    };
  }).filter((c) => c.top);

  const aquarium = getTourBySlug('barcelona-aquarium-entry-ticket');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Attractions', url: `${SITE_URL}/attractions` },
      ])) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 pb-24">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Attractions' }]} />
        <div className="mt-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Top {SITE_CITY} attractions</h1>
          <p className="mt-3 text-lg text-gray-600">
            Tickets and tours for the most-visited attractions in {SITE_CITY}, each ranked by verified reviews and booked direct through GetYourGuide.
          </p>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">Barcelona attraction tickets at a glance</h2>
          <p className="mt-2 text-gray-600 max-w-3xl">
            The lowest price we list for each attraction, and whether a skip-the-line or priority-access option is available. Prices are the from-price on GetYourGuide at the time of writing.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Attraction</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Tickets from</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Skip-the-line available</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {cards.map(({ a, from, skipTheLine }) => (
                  <tr key={a.slug}>
                    <td className="px-4 py-3">
                      <Link href={`/attractions/${a.slug}`} className="text-green-700 font-medium hover:underline">
                        {a.name} tickets and tours
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900"><LocalPrice gbp={from} /></td>
                    <td className="px-4 py-3 text-gray-700">{skipTheLine ? 'Yes' : 'Not offered'}</td>
                  </tr>
                ))}
                {aquarium && (
                  <tr>
                    <td className="px-4 py-3">
                      <Link href={`/tours/${aquarium.slug}`} className="text-green-700 font-medium hover:underline">
                        Barcelona Aquarium entry ticket
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900"><LocalPrice gbp={aquarium.price} /></td>
                    <td className="px-4 py-3 text-gray-700">{aquarium.categories.includes('skip-the-line') ? 'Yes' : 'Not offered'}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Booking any of these online gives you a timed slot and a mobile ticket. See{' '}
            <Link href="/category/skip-the-line" className="text-green-700 font-medium hover:underline">skip-the-line tickets in Barcelona</Link>{' '}
            for the full list, or read{' '}
            <Link href="/guides/skip-the-line-barcelona" className="text-green-700 font-medium hover:underline">how to skip the line in Barcelona</Link>.
          </p>
        </section>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map(({ a, top, count, from }) => (
            <Link key={a.slug} href={`/attractions/${a.slug}`} className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                {top && <Image src={top.imageUrl} alt={a.name} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-500" sizes="(max-width: 640px) 100vw, 400px" />}
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">{a.name}</h2>
                <p className="mt-1 text-sm text-gray-500">{count} tour{count === 1 ? '' : 's'} and ticket{count === 1 ? '' : 's'} &middot; from <LocalPrice gbp={from} /></p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Prefer to browse everything? See all <Link href="/tours" className="text-green-700 font-medium hover:underline">{SITE_NAME}</Link>.
        </p>
      </div>
    </>
  );
}
