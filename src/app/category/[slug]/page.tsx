import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getToursByCategory } from '@/data/tours';
import { categorySchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SITE_URL, SITE_CITY } from '@/lib/constants';
import TourCard from '@/components/ui/TourCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import FAQ from '@/components/ui/FAQ';

type CategorySeo = {
  capsule?: { heading: string; paragraphs: string[]; link: { href: string; label: string } };
  paragraphs: string[];
  relatedLinks: { href: string; title: string; description: string }[];
};

const categorySeoContent: Record<string, CategorySeo> = {
  'skip-the-line': {
    capsule: {
      heading: 'The best skip-the-line tours and tickets in Barcelona',
      paragraphs: [
        'Every ticket on this page comes with skip-the-line or priority access at a Barcelona attraction, booked through GetYourGuide on a reserved time slot. Park Guell admission starts from £18, Casa Batllo entry with the audio guide from £25, Barcelona Aquarium entry from £26 and the Sagrada Familia with an audio guide from £29. The Sagrada Familia is where a skip-the-line ticket buys back the most time, because its standby queue is the longest in the city.',
        'Want the how-to rather than the tickets? Our step-by-step guide explains how timed entry works in Barcelona, which slots are quietest and the mistakes that cost people an hour in the sun.',
      ],
      link: { href: '/guides/skip-the-line-barcelona', label: 'Read the full guide to skipping the line in Barcelona' },
    },
    paragraphs: [
      'Skip-the-line in Barcelona does not mean walking straight in. Every major sight runs on timed entry, so what you are buying is a reserved slot plus a short priority lane instead of the long general-admission queue. Book a specific time, turn up five to ten minutes before it, and you bypass the crowd that arrived hoping to buy on the day.',
      'Guided tours go one step further: the guide handles entry for the whole group, so you skip both the ticket line and the security shuffle, and you get the context as well. Tickets are delivered to your phone with instant confirmation, and most options can be cancelled free up to 24 hours before.',
    ],
    relatedLinks: [
      {
        href: '/guides/skip-the-line-barcelona',
        title: 'How to skip the line in Barcelona: tickets and tips',
        description: 'The step-by-step guide to timed entry, priority lanes and the quietest slots.',
      },
      {
        href: '/blog/best-way-to-skip-the-line-in-barcelona',
        title: 'The best way to skip the lines in Barcelona',
        description: 'Which skip-the-line tickets actually save an hour, what they cost, and the mistakes to avoid.',
      },
      {
        href: '/attractions',
        title: 'Barcelona attraction tickets at a glance',
        description: 'From-prices and skip-the-line availability for every top Barcelona attraction.',
      },
    ],
  },
};

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `${SITE_URL}/category/${category.slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${SITE_URL}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTours = getToursByCategory(category.slug);

  return (
    <>
      {[
        categorySchema(category),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: category.title, url: `${SITE_URL}/category/${category.slug}` },
        ]),
        faqSchema(category.faqs),
      ].filter(Boolean).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: category.title },
          ]}
        />

        <AffiliateDisclosure />

        <div className="mb-8">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{category.title}</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl">{category.description}</p>
        </div>

        {categorySeoContent[category.slug]?.capsule && (
          <section className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-6 max-w-3xl">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{categorySeoContent[category.slug].capsule!.heading}</h2>
            <div className="space-y-3 text-gray-700">
              {categorySeoContent[category.slug].capsule!.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-4 text-sm">
              <Link href={categorySeoContent[category.slug].capsule!.link.href} className="text-green-700 font-semibold hover:underline">
                {categorySeoContent[category.slug].capsule!.link.label}
              </Link>
            </p>
          </section>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        <FAQ faqs={category.faqs} />

        {/* Other Categories */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Browse Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.filter(c => c.slug !== category.slug).map(cat => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:border-green-300 hover:shadow-sm transition-all duration-300"
              >
                {cat.icon} {cat.title}
              </Link>
            ))}
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:border-green-300 hover:shadow-sm transition-all duration-300"
            >
              All {SITE_CITY} Tours
            </Link>
          </div>
        </section>

        {/* SEO Content Section */}
        {categorySeoContent[category.slug] && (
          <section className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {category.title} in {SITE_CITY}</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              {categorySeoContent[category.slug].paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {categorySeoContent[category.slug].relatedLinks.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
                <ul className="space-y-3">
                  {categorySeoContent[category.slug].relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-green-700 font-medium hover:underline">
                        {link.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-0.5">{link.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
        {/* Internal links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides" className="text-blue-900 hover:underline font-medium">Travel Guides</Link>
          </div>
        </section>
      </div>
    </>
  );
}
