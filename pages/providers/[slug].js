// pages/providers/[slug].js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ProviderCard from '../../components/ProviderCard';
import data from '../../data/providers.json';
import { providerSlug } from '../../lib/slug';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

// helpers
const slugifyCity = (s = '') => s.toLowerCase().replace(/\s+/g, '-');
const toCityName = (s = '') =>
  s.replace(/-/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());

const safeJoin = (arr = [], sep = ', ') =>
  Array.isArray(arr) ? arr.filter(Boolean).join(sep) : '';

const buildMetaDescription = (p) => {
  const city = p.address?.city;
  const pieces = [
    p.shortDescription,
    p.specialties?.length ? `Specialties: ${safeJoin(p.specialties)}` : '',
    p.products?.length ? `Uses: ${safeJoin(p.products)}` : '',
    city ? `Serving ${city}, CO.` : '',
    'Verify credentials via DORA.'
  ].filter(Boolean);

  // Keep ~155–160 chars
  const text = pieces.join(' ');
  return text.length > 160 ? `${text.slice(0, 157)}…` : text;
};

export default function ProviderPage({ provider, siteUrl }) {
  if (!provider) return null;

  const citySlug = slugifyCity(provider.address?.city || '');
  const cityName = toCityName(citySlug);
  const url = `${siteUrl}/providers/${provider.slug}`;
  const title = `${provider.name} – Lip Filler Provider in ${cityName} | Colorado Directory`;
  const metaDescription =
    (provider.metaDescription && provider.metaDescription.slice(0, 160)) ||
    buildMetaDescription(provider);

  // -------- JSON-LD: LocalBusiness --------
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: provider.name,
    url,
    ...(provider.logo || provider.image
      ? { image: provider.logo || provider.image }
      : {}),
    telephone: provider.phone || provider.displayPhone,
    ...(provider.website ? { sameAs: [provider.website] } : {}),
    address: provider.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: provider.address.street,
          addressLocality: provider.address.city,
          addressRegion: provider.address.state,
          postalCode: provider.address.postalCode,
          addressCountry: provider.address.country || 'US'
        }
      : undefined,
    ...(provider.geo?.lat && provider.geo?.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: provider.geo.lat,
            longitude: provider.geo.lng
          }
        }
      : {}),
    ...(provider.priceRange ? { priceRange: provider.priceRange } : {}),
    ...(provider.openingHoursSpecification
      ? { openingHoursSpecification: provider.openingHoursSpecification }
      : {}),
    description: provider?.shortDescription || buildMetaDescription(provider)
  };

  // -------- JSON-LD: BreadcrumbList --------
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      ...(citySlug
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: cityName,
              item: `${siteUrl}/cities/${citySlug}`
            }
          ]
        : []),
      {
        '@type': 'ListItem',
        position: citySlug ? 3 : 2,
        name: provider.name,
        item: url
      }
    ]
  };

  const ogImage =
    provider.ogImage ||
    provider.image ||
    `${siteUrl}/og/providers-default.jpg`;

  return (
    <Layout title={title}>
      <Head>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colorado Lip Fillers Directory" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={provider.name} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={provider.name} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>

      {/* BREADCRUMBS */}
      <nav aria-label="Breadcrumb" style={{ margin: '12px 0', fontSize: 14 }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#667eea' }}>
          Home
        </Link>
        {citySlug && (
          <>
            <span style={{ margin: '0 8px', color: '#6c757d' }}>›</span>
            <Link
              href={`/cities/${citySlug}`}
              style={{ textDecoration: 'none', color: '#667eea' }}
            >
              {cityName}
            </Link>
          </>
        )}
        <span style={{ margin: '0 8px', color: '#6c757d' }}>›</span>
        <span>{provider.name}</span>
      </nav>

      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '36px 20px',
          borderRadius: 16,
          marginBottom: 20
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.8rem', lineHeight: 1.25 }}>
          {provider.name}
        </h1>
        <p style={{ opacity: 0.95, marginTop: 6 }}>
          {provider.shortDescription ||
            `Learn more about ${provider.name}${
              cityName ? ` in ${cityName}` : ''
            }.`}
        </p>
      </section>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 24,
          alignItems: 'start'
        }}
      >
        {/* LEFT: VISIBLE UNIQUE CONTENT */}
        <div>
          {/* UNIQUE ABOUT COPY (add ~150–300 words per provider in providers.json) */}
          {provider.about && (
            <section
              style={{
                background: '#fff',
                border: '1px solid #eee',
                borderRadius: 8,
                padding: 16,
                marginBottom: 16
              }}
            >
              <h2 style={{ marginTop: 0, fontSize: '1.1rem', color: '#333' }}>
                About {provider.name}
              </h2>
              <div style={{ whiteSpace: 'pre-line', lineHeight: 1.6, color: '#444' }}>
                {provider.about}
              </div>
            </section>
          )}

          {/* ProviderCard (keeps your existing look) */}
          <ProviderCard
            provider={{
              ...provider,
              listingTier: provider.listingTier || 'free'
            }}
            showEnhanced={true}
          />

          {/* Services / Specialties / Products */}
          {(provider.services?.length ||
            provider.specialties?.length ||
            provider.products?.length) && (
            <section
              style={{
                background: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: 8,
                padding: 16,
                marginTop: 16
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 16
                }}
              >
                {provider.services?.length ? (
                  <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem' }}>
                      Services
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                      {provider.services.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {provider.specialties?.length ? (
                  <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem' }}>
                      Specialties
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                      {provider.specialties.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {provider.products?.length ? (
                  <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem' }}>
                      Products Used
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                      {provider.products.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </section>
          )}

          {/* Policies / Notes */}
          {(provider.policies?.length || provider.notes) && (
            <section
              style={{
                background: '#fff',
                border: '1px solid #eee',
                borderRadius: 8,
                padding: 16,
                marginTop: 16
              }}
            >
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem' }}>
                Policies & Notes
              </h3>
              {provider.policies?.length ? (
                <ul style={{ margin: '0 0 8px 0', paddingLeft: 18 }}>
                  {provider.policies.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              ) : null}
              {provider.notes ? (
                <p style={{ margin: 0, color: '#555' }}>{provider.notes}</p>
              ) : null}
            </section>
          )}
        </div>

        {/* RIGHT: CONTACT / ADDRESS / HOURS */}
        <aside>
          {/* Contact */}
          <section
            style={{
              background: '#ffffff',
              border: '1px solid #e9ecef',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: '1.05rem' }}>Contact</h2>
            {provider.phone || provider.displayPhone ? (
              <p style={{ margin: '0 0 8px 0' }}>
                <strong>Phone:</strong>{' '}
                <a
                  href={`tel:${(provider.phone || provider.displayPhone || '')
                    .replace(/[^\d+]/g, '')}`}
                  style={{ color: '#667eea', textDecoration: 'none' }}
                >
                  {provider.phone || provider.displayPhone}
                </a>
              </p>
            ) : null}
            {provider.website ? (
              <p style={{ margin: '0 0 8px 0' }}>
                <strong>Website:</strong>{' '}
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#667eea', textDecoration: 'none' }}
                >
                  {provider.website.replace(/^https?:\/\//, '')}
                </a>
              </p>
            ) : null}
          </section>

          {/* Address */}
          {provider.address && (
            <section
              style={{
                background: '#ffffff',
                border: '1px solid #e9ecef',
                borderRadius: 8,
                padding: 16,
                marginBottom: 16
              }}
            >
              <h2 style={{ marginTop: 0, fontSize: '1.05rem' }}>Location</h2>
              <address style={{ margin: 0, lineHeight: 1.6 }}>
                {provider.address.street}
                <br />
                {provider.address.city}, {provider.address.state}{' '}
                {provider.address.postalCode}
              </address>
              {(provider.geo?.lat && provider.geo?.lng) || provider.address ? (
                <div style={{ marginTop: 10 }}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      provider.address.street
                        ? `${provider.address.street}, ${provider.address.city}, ${provider.address.state} ${provider.address.postalCode}`
                        : `${provider.address.city}, ${provider.address.state} ${provider.address.postalCode}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: 6,
                      color: '#667eea',
                      textDecoration: 'none'
                    }}
                  >
                    View on Google Maps
                  </a>
                </div>
              ) : null}
            </section>
          )}

          {/* Hours */}
          {provider.hours?.length ? (
            <section
              style={{
                background: '#ffffff',
                border: '1px solid #e9ecef',
                borderRadius: 8,
                padding: 16,
                marginBottom: 16
              }}
            >
              <h2 style={{ marginTop: 0, fontSize: '1.05rem' }}>Hours</h2>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                {provider.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Safety note */}
          <section
            style={{
              background: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: 8,
              padding: 16
            }}
          >
            <p style={{ margin: 0, color: '#856404', fontSize: 14, lineHeight: 1.6 }}>
              <strong>Reminder:</strong> Always verify credentials independently via{' '}
              <a
                href="https://www.colorado.gov/dora"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#856404', textDecoration: 'underline' }}
              >
                DORA
              </a>{' '}
              before booking.
            </p>
          </section>
        </aside>
      </div>

      {/* INTERNAL LINKS */}
      <div style={{ marginTop: 28 }}>
        <Link href={`/cities/${citySlug}`} style={{ color: '#667eea' }}>
          ← Back to {cityName} providers
        </Link>
        <span style={{ margin: '0 10px', color: '#6c757d' }}>•</span>
        <Link href="/lip-filler-faq" style={{ color: '#667eea' }}>
          Read Lip Filler FAQ
        </Link>
        <span style={{ margin: '0 10px', color: '#6c757d' }}>•</span>
        <Link href="/guides/lip-filler-101" style={{ color: '#667eea' }}>
          Lip Filler 101 Guide
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const providers = (data.providers || []).map((p) => ({
    ...p,
    slug: p.slug || providerSlug(p)
  }));

  return {
    paths: providers.map((p) => ({ params: { slug: p.slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const siteUrl = SITE_URL;

  const providers = (data.providers || []).map((p) => ({
    ...p,
    slug: p.slug || providerSlug(p)
  }));

  const provider = providers.find((p) => p.slug === params.slug);
  if (!provider) return { notFound: true };

  return {
    props: { provider, siteUrl },
    revalidate: 3600
  };
}
