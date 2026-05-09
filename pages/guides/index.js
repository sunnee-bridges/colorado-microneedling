// pages/guides/index.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://findlipfillers.com';

const guides = [
  { href: '/guides/lip-filler-101',                    title: 'Lip Filler 101: Complete Guide' },
  { href: '/guides/lip-filler-vs-lip-flip',            title: 'Lip Filler vs Lip Flip' },
  { href: '/guides/lip-filler-recovery-timeline',      title: 'Recovery Timeline Guide' },
  { href: '/guides/lip-filler-cost-pricing',           title: 'Cost Breakdown Guide' },
  { href: '/guides/cannula-vs-needle',                 title: 'Cannula vs Needle' },
  { href: '/guides/lip-filler-dissolution',            title: 'How to Dissolve Lip Filler' },
  { href: '/guides/lip-filler-cold-sores',             title: 'Lip Filler and Cold Sores' },
  { href: '/guides/white-bumps-on-lips',               title: 'White Bumps on Your Lips' },
  { href: '/guides/lip-filler-cultural-appropriation', title: 'Lip Filler and Cultural Appropriation' },
  { href: '/guides/lip-cell-visualizer',               title: 'How Lip Filler Works' },
];

export default function GuidesIndex() {
  return (
    <Layout
      title="Educational Guides | Colorado Lip Fillers Directory"
      metaDescription="Browse all lip filler educational guides: basics, recovery, costs, techniques, and FAQs."
      canonical={`${base}/guides`}
    >
      <Head>
        {/* JSON-LD only — Layout handles canonical, title, meta */}
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