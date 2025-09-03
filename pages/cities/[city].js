// pages/cities/[city].js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ProviderCard from '../../components/ProviderCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import providersData from '../../data/providers.json';
import React from 'react';


// helpers
const slugifyCity = (s = '') => s.toLowerCase().replace(/\s+/g, '-');
const humanizeSlug = (s = '') =>
  decodeURIComponent(s).replace(/-/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());

// (Optional) quick nearby link map you can expand over time
const nearbyByCity = {
  'colorado-springs': ['denver', 'pueblo', 'castle-rock', 'monument'],
  denver: ['aurora', 'lakewood', 'boulder', 'westminster'],
  boulder: ['denver', 'longmont', 'louisville', 'erie'],
};

export default function CityPage({ cityName, citySlug, providers, canonicalUrl, siteUrl }) {
  const hasProviders = (providers || []).length > 0;
  const robots = hasProviders ? 'index,follow' : 'noindex,follow';

  // build JSON-LD breadcrumbs
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Cities', item: `${siteUrl}/cities` },
      { '@type': 'ListItem', position: 3, name: `${cityName}`, item: canonicalUrl },
    ],
  };

  const pageTitle = `${cityName} Lip Filler Providers (Colorado)`;
  const pageDesc = `Explore lip filler providers in ${cityName}, CO. Compare experience, products used, and aftercare policies. Always verify credentials via Colorado DORA before booking.`;

  const nearby = nearbyByCity[citySlug] || [];

  return (
    <Layout title={pageTitle}>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content={robots} />
        <meta name="description" content={pageDesc} />

        {/* Nice-to-have OG tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />

        {/* Breadcrumb JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Cities', href: '/cities' },
            { label: cityName }
          ]}
        />

        {/* Page header */}
        <h1 style={{ marginBottom: 8 }}>{cityName} Providers</h1>
        <p style={{ color: '#666', marginBottom: 16 }}>
          Always verify credentials independently and contact providers directly for current information.
        </p>

        {/* ---- City-specific intro (SEO uniqueness) ---- */}
        <section
          aria-labelledby="city-intro"
          style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '12px',
            padding: '16px 18px',
            margin: '0 0 24px 0'
          }}
        >
          <h2 id="city-intro" style={{ margin: '0 0 8px 0', fontSize: '1.15rem', color: '#333' }}>
            About lip filler options in {cityName}
          </h2>
          <p style={{ margin: '0 0 10px 0', color: '#555', lineHeight: 1.6 }}>
            Explore lip filler providers in {cityName}, CO. Compare experience, products used, and aftercare policies.
            Always verify credentials via{' '}
            <a
              href="https://www.colorado.gov/dora"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#667eea', textDecoration: 'none', fontWeight: 600 }}
            >
              Colorado DORA
            </a>{' '}
            before booking.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, fontSize: 14 }}>
            {nearby.length > 0 && (
              <>
                <span style={{ color: '#6c757d' }}>Nearby:</span>
                {nearby.map((slug, i) => (
                  <React.Fragment key={slug}>
 
                      {humanizeSlug(slug)}
                  
                    {i < nearby.length - 1 && <span style={{ color: '#6c757d' }}>•</span>}
                  </React.Fragment>
                ))}
                <span style={{ color: '#6c757d', marginLeft: 10 }}>|</span>
              </>
            )}
            <Link href="/lip-filler-faq" style={{ color: '#28a745', textDecoration: 'none', fontWeight: 600 }}>
              Lip Filler FAQ
            </Link>
            <Link href="/guides" style={{ color: '#28a745', textDecoration: 'none', fontWeight: 600 }}>
              Educational Guides
            </Link>
          </div>
        </section>
        {/* ---- End city intro ---- */}

        {!hasProviders ? (
          <p>No providers listed yet for {cityName}.</p>
        ) : (
          providers.map((p) => (
            <div key={p.id} style={{ marginBottom: 24 }}>
              <ProviderCard provider={p} showEnhanced={false} />
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Build unique city list from nested address field
  const cities = Array.from(
    new Set(
      (providersData.providers || [])
        .map(p => p.address?.city || p.city) // fallback if any legacy
        .filter(Boolean)
    )
  );

  const paths = cities.map(city => ({
    params: { city: slugifyCity(city) }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
  const citySlug = params.city;
  const cityName = humanizeSlug(citySlug);

  // Filter by matching the slug of the provider's city
  const providers = (providersData.providers || []).filter(p => {
    const c = p.address?.city || p.city || '';
    return slugifyCity(c) === citySlug;
  });

  const canonicalUrl = `${siteUrl}/cities/${citySlug}`;

  return {
    props: {
      cityName,
      citySlug,
      providers,
      canonicalUrl,
      siteUrl
    }
  };
}