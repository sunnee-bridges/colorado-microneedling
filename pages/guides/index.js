// pages/guides/index.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function GuidesIndex() {
  const base = 'https://yourdomain.com';
  const guides = [
    { href: '/guides/lip-filler-101',              title: 'Lip Filler 101: Complete Guide' },
    { href: '/guides/lip-filler-vs-lip-flip',      title: 'Lip Filler vs Lip Flip' },
    { href: '/guides/lip-filler-recovery-timeline',title: 'Recovery Timeline Guide' },
    { href: '/guides/lip-filler-cost-pricing',     title: 'Cost Breakdown Guide' },
    { href: '/guides/cannula-vs-needle',           title: 'Cannula vs Needle' },
  ];

  return (
    <Layout title="Educational Guides | Colorado Lip Fillers Directory">
      <Head>
        <title>Educational Guides | Colorado Lip Fillers Directory</title>
        <meta name="description" content="Browse all lip filler educational guides: basics, recovery, costs, techniques, and FAQs." />
        <link rel="canonical" href={`${base}/guides`} />

        {/* Breadcrumbs JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${base}/` },
              { "@type": "ListItem", "position": 2, "name": "Guides", "item": `${base}/guides` }
            ]
          })
        }} />

        {/* CollectionPage + ItemList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Lip Filler Educational Guides",
            "url": `${base}/guides`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": guides.map((g, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `${base}${g.href}`,
                "name": g.title
              }))
            }
          })
        }} />
      </Head>

      <nav aria-label="Breadcrumb" style={{ margin: '12px 0', fontSize: 14 }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#667eea' }}>Home</Link>
        <span style={{ margin: '0 8px', color: '#6c757d' }}>›</span>
        <span>Guides</span>
      </nav>

      <h1>Educational Guides</h1>
      <p style={{ color: '#666' }}>Explore our plain-language guides covering lip filler basics, safety, recovery, costs, and techniques.</p>

      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
        {guides.map(g => (
          <li key={g.href} style={{ border: '1px solid #e9ecef', borderRadius: 8, padding: 16 }}>
            <Link href={g.href} style={{ color: '#667eea', textDecoration: 'none', fontWeight: 600 }}>
              {g.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
