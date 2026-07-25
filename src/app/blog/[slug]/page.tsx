import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import { getTourBySlug } from '@/data/tours';
import { blogArticleSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE_URL, SITE_CITY } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

function symbol(currency?: string): string {
  if (!currency || currency === 'GBP') return '£';
  const map: Record<string, string> = { USD: '$', EUR: '€', AUD: 'A$', ISK: 'ISK ', MXN: 'MX$' };
  return map[currency] || `${currency} `;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.heroImage, width: 800, height: 500, alt: post.heroImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedTours = post.relatedTourSlugs
    .map((s) => getTourBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  const relatedPosts = post.relatedBlogSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 3);

  const faqLd = faqSchema(post.faqs);
  const schemas = [
    blogArticleSchema(post),
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Blog', url: `${SITE_URL}/blog` },
      { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
    ]),
    ...(faqLd ? [faqLd] : []),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]}
        />

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>
              Updated{' '}
              {new Date(post.updatedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <div className="mt-4">
            <AffiliateDisclosure />
          </div>
        </header>

        {/* Blog content */}
        <div
          className="blog-content prose prose-gray prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-green-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-li:text-gray-700
            prose-img:rounded-xl prose-img:shadow-sm
            prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* FAQ */}
        <FAQ faqs={post.faqs} />

        {/* Related tours (real, bookable) */}
        {relatedTours.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tours mentioned in this guide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedTours.map((tour) => (
                <div
                  key={tour.slug}
                  className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all"
                >
                  <TrackedGYGLink
                    href={tour.affiliateUrl}
                    tourName={tour.shortTitle}
                    section="blog-related-image"
                    className="block relative aspect-[16/9] w-full overflow-hidden group"
                  >
                    <Image
                      src={tour.imageUrl}
                      alt={tour.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-gray-900 shadow">
                      <span className="text-amber-500">&#9733;</span> {tour.rating.toFixed(1)}
                    </span>
                  </TrackedGYGLink>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                      <Link href={`/tours/${tour.slug}`} className="hover:text-green-700 transition-colors">
                        {tour.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">
                        From {symbol(tour.currency)}
                        {tour.price}
                      </span>{' '}
                      &middot; Free cancellation on most options
                    </p>
                    <TrackedGYGLink
                      href={tour.affiliateUrl}
                      tourName={tour.shortTitle}
                      section="blog-related-book"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
                    >
                      Book on GetYourGuide
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </TrackedGYGLink>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related blog posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.heroImage}
                      alt={p.heroImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-700 to-green-600 text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">See every {SITE_CITY} tour</h2>
          <p className="text-green-100 mb-6 max-w-lg mx-auto">
            Browse the full list of top-rated {SITE_CITY} tours and tickets, each with live prices, real reviews and
            instant booking through GetYourGuide.
          </p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-green-900 font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Browse all {SITE_CITY} tours
          </Link>
        </section>
      </article>
    </>
  );
}
