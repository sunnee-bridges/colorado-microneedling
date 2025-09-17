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
const normalizeUrl = (url) => url.replace(/\/+$/, ''); // Remove trailing slashes

// (Optional) quick nearby link map you can expand over time
const nearbyByCity = {
  'colorado-springs': ['denver', 'pueblo', 'castle-rock', 'monument'],
  denver: ['aurora', 'lakewood', 'boulder', 'westminster'],
  boulder: ['denver', 'longmont', 'louisville', 'erie'],
};

export default function CityPage({ cityName, citySlug, providers, canonicalUrl, siteUrl }) {
  const hasProviders = (providers || []).length > 0;
  const robots = 'index,follow'; // Always allow indexing

  // build JSON-LD breadcrumbs with required properties
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'name': `${cityName} Providers Breadcrumb`,
    'description': `Navigation path to ${cityName} provider listings`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: normalizeUrl(siteUrl) },
      { '@type': 'ListItem', position: 2, name: 'Cities', item: `${normalizeUrl(siteUrl)}/cities` },
      { '@type': 'ListItem', position: 3, name: `${cityName}`, item: normalizeUrl(canonicalUrl) },
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
        <meta property="og:site_name" content="Colorado Lip Enhancement Directory" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${normalizeUrl(siteUrl)}/og/city-default.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={`${normalizeUrl(siteUrl)}/og/city-default.jpg`} />

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
                    <Link 
                      href={`/cities/${slug}`}
                      style={{ color: '#667eea', textDecoration: 'none' }}
                    >
                      {humanizeSlug(slug)}
                    </Link>
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

        {/* ---- Comprehensive Provider Information Section ---- */}
        <section style={{
          backgroundColor: '#fff',
          border: '1px solid #e9ecef',
          borderRadius: '12px',
          padding: '24px',
          margin: '24px 0'
        }}>
          <h2 style={{ 
            margin: '0 0 16px 0', 
            fontSize: '1.4rem', 
            color: '#333',
            borderBottom: '2px solid #667eea',
            paddingBottom: '8px'
          }}>
            Finding Qualified Lip Filler Providers in {cityName}
          </h2>
          
          <p style={{ lineHeight: 1.6, marginBottom: '20px', color: '#555' }}>
            When searching for lip filler providers in {cityName}, Colorado, thorough research is essential for your safety and satisfaction. 
            Colorado has specific regulations for cosmetic procedures, and understanding these requirements will help you make an informed choice.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '24px'
          }}>
            <div>
              <h3 style={{ 
                color: '#667eea', 
                marginBottom: '12px', 
                fontSize: '1.1rem',
                borderLeft: '4px solid #667eea',
                paddingLeft: '12px'
              }}>
                Essential Credentials to Verify
              </h3>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.6, color: '#555' }}>
                <li><strong>Board certification</strong> in dermatology, plastic surgery, or related specialty</li>
                <li><strong>Active Colorado medical license</strong> - verify through <a href="https://www.colorado.gov/dora" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>DORA</a></li>
                <li><strong>Proper training</strong> in facial anatomy and injection techniques</li>
                <li><strong>Malpractice insurance</strong> and facility accreditation</li>
                <li><strong>Experience volume</strong> - ask how many lip procedures they perform monthly</li>
              </ul>
            </div>

            <div>
              <h3 style={{ 
                color: '#667eea', 
                marginBottom: '12px', 
                fontSize: '1.1rem',
                borderLeft: '4px solid #667eea',
                paddingLeft: '12px'
              }}>
                Questions to Ask During Consultation
              </h3>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.6, color: '#555' }}>
                <li>What filler brands do you use and why?</li>
                <li>Can I see before/after photos of recent patients?</li>
                <li>{"What's your complication rate and management protocol?"}</li>
                <li>Do you offer free touch-ups within 2 weeks?</li>
                <li>What emergency contact options do you provide?</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#f8f9ff',
            border: '2px solid #667eea',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '12px', fontSize: '1.1rem' }}>
              Colorado-Specific Considerations for {cityName}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div>
                <h4 style={{ color: '#667eea', marginBottom: '8px', fontSize: '1rem' }}>High Altitude Effects</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                  {"{cityName}'s elevation may increase swelling and bruising. Discuss altitude-specific aftercare with your provider"}.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#667eea', marginBottom: '8px', fontSize: '1rem' }}>Dry Climate Impact</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                  {"Colorado's dry air requires extra lip hydration post-treatment. Plan for increased water intake and gentle lip care."}
                </p>
              </div>
              <div>
                <h4 style={{ color: '#667eea', marginBottom: '8px', fontSize: '1rem' }}>Seasonal Timing</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                  {"Consider treatment timing around outdoor activities and sun exposure, especially during {cityName}'s active seasons."}
                </p>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <h3 style={{ color: '#856404', marginBottom: '12px', fontSize: '1.1rem' }}>
              Red Flags to Avoid in {cityName}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#856404', lineHeight: 1.5, fontSize: '0.9rem' }}>
                <li>Providers offering extremely low prices</li>
                <li>High-pressure sales tactics or same-day procedures</li>
                <li>Unwillingness to show credentials or before/after photos</li>
              </ul>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#856404', lineHeight: 1.5, fontSize: '0.9rem' }}>
                <li>Non-medical facilities (spas, salons, homes)</li>
                <li>No emergency contact or follow-up protocols</li>
                <li>Reluctance to discuss potential complications</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#e7f3ff',
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px'
          }}>
            <h3 style={{ color: '#004085', marginBottom: '12px', fontSize: '1.1rem' }}>
              Preparing for Your {cityName} Lip Filler Appointment
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <h4 style={{ color: '#004085', marginBottom: '8px', fontSize: '1rem' }}>24 Hours Before</h4>
                <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
                  <li>Avoid alcohol and blood thinners</li>
                  <li>Stop fish oil and vitamin E</li>
                  <li>Stay well-hydrated</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#004085', marginBottom: '8px', fontSize: '1rem' }}>Day of Treatment</h4>
                <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
                  <li>Eat a good meal beforehand</li>
                  <li>Arrive with clean, makeup-free lips</li>
                  <li>Bring emergency contact information</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#004085', marginBottom: '8px', fontSize: '1rem' }}>Recovery Planning</h4>
                <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
                  <li>Plan 2-3 days of social downtime</li>
                  <li>Stock up on ice packs and gentle lip balm</li>
                  <li>Avoid intense exercise for 48 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Provider Listings or No Providers Content ---- */}
        {!hasProviders ? (
          <section style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '16px', color: '#333' }}>
              No providers currently listed for {cityName}
            </h2>
            <p style={{ marginBottom: '20px', color: '#666', lineHeight: 1.6 }}>
              {"We're working to expand our directory to include more Colorado locations."} 
              In the meantime, here are some options to help you find qualified providers:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              marginBottom: '24px',
              textAlign: 'left'
            }}>
              <div style={{ 
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '12px' }}>Check Nearby Cities</h3>
                {nearby.length > 0 ? (
                  <p style={{ margin: '0 0 12px 0', color: '#555' }}>
                    Consider expanding your search to these nearby locations:
                  </p>
                ) : (
                  <p style={{ margin: '0 0 12px 0', color: '#555' }}>
                    Consider expanding your search to larger Colorado cities like Denver or Colorado Springs.
                  </p>
                )}
                {nearby.length > 0 && (
                  <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    {nearby.map((slug) => (
                      <li key={slug} style={{ marginBottom: '4px' }}>
                        <Link 
                          href={`/cities/${slug}`}
                          style={{ color: '#667eea', textDecoration: 'none' }}
                        >
                          {humanizeSlug(slug)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div style={{ 
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '12px' }}>Educational Resources</h3>
                <p style={{ margin: '0 0 12px 0', color: '#555' }}>
                  Prepare for your search with our comprehensive guides:
                </p>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <li style={{ marginBottom: '4px' }}>
                    <Link href="/guides/lip-filler-101" style={{ color: '#667eea', textDecoration: 'none' }}>
                      Complete Lip Filler Guide
                    </Link>
                  </li>
                  <li style={{ marginBottom: '4px' }}>
                    <Link href="/lip-filler-faq" style={{ color: '#667eea', textDecoration: 'none' }}>
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li style={{ marginBottom: '4px' }}>
                    <Link href="/guides" style={{ color: '#667eea', textDecoration: 'none' }}>
                      All Educational Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '20px'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#856404' }}>
                <strong>Important:</strong> Always verify provider credentials through{' '}
                <a
                  href="https://www.colorado.gov/dora"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#856404', textDecoration: 'underline' }}
                >
                  Colorado DORA
                </a>{' '}
                before booking any cosmetic procedure, regardless of location.
              </p>
            </div>

            <Link
              href="/cities"
              style={{
                display: 'inline-block',
                backgroundColor: '#667eea',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '600'
              }}
            >
              Browse All Colorado Cities
            </Link>
          </section>
        ) : (
          <section>
            <h2 style={{ 
              marginBottom: '20px', 
              fontSize: '1.3rem',
              borderBottom: '2px solid #667eea',
              paddingBottom: '8px'
            }}>
              {hasProviders ? `${providers.length} Provider${providers.length === 1 ? '' : 's'} in ${cityName}` : ''}
            </h2>
            {providers.map((p) => (
              <div key={p.id} style={{ marginBottom: 24 }}>
                <ProviderCard provider={p} showEnhanced={false} />
              </div>
            ))}
          </section>
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