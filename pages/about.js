import Head from 'next/head';
import Layout from '../components/Layout';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const CANONICAL = `${SITE.replace(/\/$/, '')}/about`;

export default function About() {
  return (
    <Layout title="About Colorado Lip Fillers Directory">
     <Head>
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="About the Colorado Lip Fillers Directory—what we provide, how to use the directory, and key questions to ask when researching providers."
        />

        {/* Open Graph */}
        <meta property="og:title" content="About Colorado Lip Fillers Directory" />
        <meta property="og:description" content="Learn what the directory offers and how to research providers safely and effectively." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        {/* Optional when you have one: */}
        {/* <meta property="og:image" content={`${SITE}/og/about-og.jpg`} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Colorado Lip Fillers Directory" />
        <meta name="twitter:description" content="What we provide and how to use the directory to research providers." />
        {/* <meta name="twitter:image" content={`${SITE}/og/about-og.jpg`} /> */}

        {/* JSON-LD: AboutPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              '@id': `${CANONICAL}#about`,
              url: CANONICAL,
              name: 'About Colorado Lip Fillers Directory',
              description:
                'Overview of the Colorado Lip Fillers Directory and guidance on researching providers and treatments.',
              isPartOf: { '@type': 'WebSite', url: SITE },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
                  { '@type': 'ListItem', position: 2, name: 'About', item: CANONICAL },
                ],
              },
            }),
          }}
        />

        {/* JSON-LD: Organization (site entity) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Colorado Lip Fillers Directory',
              url: SITE,
              logo: `${SITE}/logo.png`, // replace when available
              sameAs: [
                // add profiles when available, e.g. 'https://www.instagram.com/yourhandle'
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer support',
                  url: `${SITE}/about`,
                },
              ],
            }),
          }}
        />
      </Head>
      <nav aria-label="Breadcrumb" style={{ margin: '12px 0', fontSize: 14 }}>
        <a href="/" style={{ textDecoration: 'none', color: '#667eea' }}>Home</a>
        <span style={{ margin: '0 8px', color: '#6c757d' }}>›</span>
        <span>About</span>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '60px 20px',
          textAlign: 'center',
          borderRadius: '16px',
          margin: '0 0 40px 0',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💋</div>
            <h1 style={{ 
              fontSize: '2.8rem', 
              marginBottom: '25px', 
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
             Colorado Lip Fillers Directory
            </h1>
            <p style={{ 
              fontSize: '1.4rem', 
              opacity: '0.95', 
              marginBottom: '30px',
              lineHeight: '1.5'
            }}>
              Find lip filler providers in Colorado and learn what questions to ask 
              when considering lip enhancement treatments.
            </p>
            <a 
              href="/#find-providers" 
              style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: '2px solid white',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                fontSize: '1.1rem',
                transition: 'transform 0.2s ease'
              }}
            >
              Browse Directory
            </a>
          </div>
        </section>

        <h2>What We Provide</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px', 
          margin: '20px 0' 
        }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#495057', marginTop: '0' }}>🏥 Provider Directory</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>
              Directory of Colorado providers offering lip filler treatments with 
              location and contact information to help you find options in your area.
            </p>
          </div>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#495057', marginTop: '0' }}>❓ Questions to Consider</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>
              General guidance on what questions you should ask and factors to 
              consider when evaluating lip filler treatment options.
            </p>
          </div>
        </div>

        <h2>Provider Options</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          Our directory includes providers offering various lip enhancement treatments. 
          We encourage you to research and compare different providers and treatment 
          options available in your area.
        </p>

        <div style={{
          backgroundColor: '#e8f5e8',
          border: '1px solid #c3e6c3',
          borderRadius: '8px',
          padding: '20px',
          margin: '24px 0'
        }}>
          <h3 style={{ color: '#2d5a2d', margin: '0 0 12px 0', fontSize: '1.1rem' }}>
            ✅ Important Questions to Ask Providers
          </h3>
          <ul style={{ 
            color: '#2d5a2d', 
            fontSize: '0.95rem', 
            lineHeight: '1.6',
            margin: '0',
            paddingLeft: '20px'
          }}>
            <li>What are your qualifications and experience with lip enhancement procedures?</li>
            <li>What products do you use and why do you recommend them for my goals?</li>
            <li>What are the potential risks and side effects I should be aware of?</li>
            <li>What should I expect during recovery and aftercare?</li>
            <li>Can you show me before and after photos of similar cases?</li>
          </ul>
        </div>

        <h2>Research and Preparation</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          Before choosing a provider, consider researching their background, reading 
          reviews, and scheduling consultations with multiple practitioners. This can 
          help you make an informed decision about your treatment options.
        </p>

        <h2>General Considerations</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          When considering lip enhancement, think about your goals, timeline, budget, 
          and any concerns you may have. A thorough consultation with a provider 
          can help address your questions and determine if treatment is 
          right for you.
        </p>

        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          padding: '20px',
          margin: '24px 0'
        }}>
          <h3 style={{ color: '#856404', margin: '0 0 12px 0', fontSize: '1.1rem' }}>
            ⚠️ Important Reminders
          </h3>
          <div style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <p style={{ margin: '0 0 12px 0' }}>
              <strong>Take your time with research.</strong> Don't rush into decisions. 
              Take time to understand your options and feel comfortable with your choice.
            </p>
            <p style={{ margin: '0 0 12px 0' }}>
              <strong>Ask questions during consultations.</strong> A good provider 
              should be willing to discuss your concerns and explain the process thoroughly.
            </p>
            <p style={{ margin: '0' }}>
              <strong>Trust your instincts.</strong> If something doesn't feel right 
              during your consultation or research process, consider other options.
            </p>
          </div>
        </div>

        <h2>General Safety Information</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          As with any cosmetic procedure, it's important to understand that lip enhancement 
          treatments carry potential risks and side effects. We encourage you to discuss 
          these thoroughly with providers who can provide personalized 
          guidance based on your individual situation.
        </p>

        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          margin: '24px 0',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: '0 0 12px 0', 
            fontSize: '0.9rem', 
            color: '#6c757d',
            fontStyle: 'italic'
          }}>
            This directory is for informational purposes only and does not constitute 
            medical advice. All treatment decisions should be made in consultation with 
            providers who can assess your individual needs.
          </p>
          <p style={{ 
            margin: '0', 
            fontSize: '0.85rem', 
            color: '#6c757d'
          }}>
            <strong>Directory Purpose:</strong> This directory aims to help you locate 
            providers in Colorado and understand what questions to ask during your research.
          </p>
        </div>
      </div>
    </Layout>
  );
}