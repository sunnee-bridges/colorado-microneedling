import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function ContactThanks() {
  return (
    <Layout title="Thanks — Message Received">
      <Head>
        {/* Keep this page out of search results */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        {/* No canonical on purpose for a noindex thank-you page */}
      </Head>

      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h1>Thanks! 🎉</h1>
        <p style={{ color: '#666', lineHeight: 1.6 }}>
          We received your message and will get back to you within 1–2 business days.
        </p>
        <div style={{ marginTop: 24 }}>
          <Link href="/"><a style={{ color: '#007bff', textDecoration: 'none' }}>Return to Home</a></Link>
          <span style={{ margin: '0 10px' }}>•</span>
          <Link href="/lip-filler-faq"><a style={{ color: '#007bff', textDecoration: 'none' }}>Read FAQs</a></Link>
        </div>
      </div>
    </Layout>
  );
}
