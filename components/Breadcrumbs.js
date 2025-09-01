import Link from 'next/link';
import Head from 'next/head';

export default function Breadcrumbs({ items }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: siteUrl.replace(/\/$/, '') + it.href } : {})
    }))
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          {items.map((it, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} {...(isLast ? { 'aria-current': 'page' } : {})}>
                {!isLast && it.href ? <Link href={it.href}>{it.label}</Link> : it.label}
              </li>
            );
          })}
        </ol>
      </nav>

      <Head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </Head>

      <style jsx>{`
        .breadcrumbs { margin: 8px 0 16px; }
        .breadcrumbs ol { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; }
        .breadcrumbs li { color: #6c757d; font-size: .9rem; }
        .breadcrumbs li:not(:last-child)::after {
          content: '›'; margin: 0 8px; color: #adb5bd;
        }
        .breadcrumbs a { color: #667eea; text-decoration: none; }
        .breadcrumbs a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
