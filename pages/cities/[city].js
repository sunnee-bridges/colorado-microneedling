// pages/cities/[city].js
import Head from 'next/head';
import Layout from '../../components/Layout';
import ProviderCard from '../../components/ProviderCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import providersData from '../../data/providers.json';

// helpers
const slugifyCity = (s = '') => s.toLowerCase().replace(/\s+/g, '-');
const humanizeSlug = (s = '') =>
  decodeURIComponent(s).replace(/-/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());

export default function CityPage({ cityName, citySlug, providers, canonicalUrl, siteUrl }) {
  return (
    <Layout title={`${cityName} Lip Enhancement Providers`}>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content={`Browse lip enhancement providers in ${cityName}. Verify credentials independently before booking.`}
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

        <h1 style={{ marginBottom: 8 }}>{cityName} Providers</h1>
        <p style={{ color: '#666', marginBottom: 24 }}>
          Always verify credentials independently and contact providers directly for current information.
        </p>

        {providersData.length === 0 ? (
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const citySlug = params.city;
  const cityName = humanizeSlug(citySlug);

  // Filter by matching the slug of the provider's city
  const providers = (providersData.providers || []).filter(p => {
    const c = p.address?.city || p.city || '';
    return slugifyCity(c) === citySlug;
  });

  const canonicalUrl = `${siteUrl.replace(/\/$/, '')}/cities/${citySlug}`;

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
