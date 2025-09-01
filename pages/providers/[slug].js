// pages/providers/[slug].js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ProviderCard from '../../components/ProviderCard';
import data from '../../data/providers.json';
import { providerSlug } from '../../lib/slug';

const SITE_URL = 'https://your-domain.com';

export default function ProviderPage({ provider }) {
  if (!provider) return null;

  const url = `${SITE_URL}/providers/${provider.slug}`;
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: provider.name,
    url,
    telephone: provider.phone || provider.displayPhone,
    ...(provider.website ? { sameAs: [provider.website] } : {}),
    address: provider.address ? {
      '@type': 'PostalAddress',
      streetAddress: provider.address.street,
      addressLocality: provider.address.city,
      addressRegion: provider.address.state,
      postalCode: provider.address.postalCode,
      addressCountry: provider.address.country
    } : undefined
  };

  return (
    <Layout title={`${provider.name} — Details & Contact`}>
      <Head>
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      </Head>

      <nav style={{ margin: '10px 0' }}>
        <Link href="/">Home</Link> &nbsp; / &nbsp;
        <Link href={`/cities/${provider.address?.city?.toLowerCase().replace(/\s+/g,'-') || ''}`}>
          {provider.address?.city || 'City'}
        </Link> &nbsp; / &nbsp;
        <span>{provider.name}</span>
      </nav>

      <ProviderCard provider={{ ...provider, listingTier: provider.listingTier || 'free' }} showEnhanced={true} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const providers = data.providers.map(p => ({ ...p, slug: p.slug || providerSlug(p) }));
  return {
    paths: providers.map(p => ({ params: { slug: p.slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const providers = data.providers.map(p => ({ ...p, slug: p.slug || providerSlug(p) }));
  const provider = providers.find(p => p.slug === params.slug);
  if (!provider) return { notFound: true };
  return { props: { provider } , revalidate: 3600 };
}
