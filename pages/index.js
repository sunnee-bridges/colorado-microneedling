import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProviderCard from '../components/ProviderCard';
import SearchFilter from '../components/SearchFilter';
import providersData from '../data/providers.json';
import { providerSlug } from '../lib/slug';

const SITE_URL = 'https://your-domain.com'; // ← set your real domain

export default function Home() {

  // helpers
const slugifyCity = (s = '') =>
  s
    .toString()
    .normalize('NFKD')                      // remove accents
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')            // replace spaces & symbols with -
    .replace(/(^-|-$)/g, '');               // trim leading/trailing -


  const providers = providersData.providers.map(p => ({
    ...p,
    slug: p.slug || providerSlug(p),
  }));

  const [filteredProviders, setFilteredProviders] = useState(providersData.providers);
  const [selectedCity, setSelectedCity] = useState('');
  
  // Dynamically generate city data from providers
  const getCityData = () => {
    const cityMap = {};
    
    providersData.providers.forEach(provider => {
      // Use provider.address.city instead of provider.city to match your JSON structure
      const city = provider.address?.city || provider.city || 'Unknown';
      if(!city) return;
      const key = slugifyCity(city);
      if (cityMap[key]) {
        cityMap[key].count += 1;
      } else {
        cityMap[key] = {
          name: city,
          count: 1,
          slug: key
        };
      }
    });
    
    // Sort cities by provider count (descending) then alphabetically
    return Object.values(cityMap).sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      return a.name.localeCompare(b.name);
    });
  };

  const cityData = getCityData();

  const handleCityFilter = (cityName) => {
    setSelectedCity(cityName);
    setFilteredProviders(
      providers.filter(p => (p.address?.city || p.city) === cityName)
    );
    const el = document.getElementById('provider-results');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShowAllCities = () => {
    setSelectedCity('');
    setFilteredProviders(providersData.providers);
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredProviders.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/providers/${p.slug}`,
      name: p.name
    }))
  };
  
  return (
    <Layout title="Colorado Lip Enhancement Provider Directory">
      <Head>
        <link rel="canonical" href={`${SITE_URL}/`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      </Head>
      <div>
        {/* Streamlined Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px 20px',
          borderRadius: '12px',
          margin: '0 -20px 40px -20px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '2.8rem', 
            marginBottom: '20px', 
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Colorado Lip Enhancement<br />
            Provider Directory
          </h1>
          
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto 30px auto',
            opacity: '0.95'
          }}>
            Find providers offering lip enhancement services in Colorado. Research options and verify all credentials independently.
          </p>
        </div>

        {/* Brief Important Notice */}
        <div style={{
          background: '#e3f2fd',
          border: '1px solid #2196f3',
          borderRadius: '8px',
          padding: '15px',
          margin: '20px 0',
          textAlign: 'center'
        }}>
          <p style={{ color: '#1976d2', margin: '0', fontSize: '0.9rem' }}>
            <strong>Important:</strong> This directory is for informational purposes only. Always verify provider credentials independently through 
            <a href="https://www.colorado.gov/dora" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', marginLeft: '5px' }}>
              Colorado DORA
            </a> before scheduling any treatments. <Link href="/terms" style={{ color: '#1976d2' }}>View full terms</Link>.
          </p>
        </div>

        {/* Find Providers Call-to-Action Section */}
        <section id="find-providers" style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          padding: '40px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          margin: '40px 0',
          scrollMarginTop: '20px'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Ready to Research Providers?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.95' }}>
            Browse provider listings and remember to verify all credentials independently
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => {
                const element = document.getElementById('directory-search');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                background: 'white',
                color: '#667eea',
                padding: '15px 30px',
                borderRadius: '25px',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Start Your Search Below
            </button>
            
          </div>
        </section>

        {/* Search & Filter Section */}
        <div id="directory-search" style={{ 
          scrollMarginTop: '20px',
          paddingTop: '20px'
        }}>
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid #e0e0e0',
            marginBottom: '30px'
          }}>
            <h3 style={{ 
              margin: '0 0 15px 0', 
              color: '#333',
              fontSize: '1.4rem',
              textAlign: 'center'
            }}>
              Search & Filter Providers
            </h3>
            <p style={{ 
              textAlign: 'center', 
              color: '#666', 
              marginBottom: '20px',
              fontSize: '1rem'
            }}>
              Use the filters below to find providers in your area
            </p>
            
            <SearchFilter 
              providers={providersData.providers} 
              onFilter={setFilteredProviders} 
            />
          </div>
        </div>

        {/* Quick City Navigation */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '15px' }}>Browse by City</h2>

          <button
            onClick={handleShowAllCities}
            style={{
              padding: '12px 24px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              marginBottom: '15px',
              fontSize: '16px',
              width: '100%'
            }}
          >
            Show All Cities ({providersData.providers.length} providers)
          </button>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              margin: '20px 0'
            }}
          >
            {cityData.map((city) => (
              <div key={city.slug} style={{ display: 'grid', gap: 6 }}>
                <button
                  onClick={() => handleCityFilter(city.name)}
                  style={{
                    padding: '15px',
                    background: 'white',
                    border:
                      selectedCity === city.name
                        ? '2px solid #dc3545'
                        : '2px solid #667eea',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#333',
                    textAlign: 'center',
                    transition: 'transform 0.2s',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {city.name}
                  <br />
                  <small style={{ color: '#667eea' }}>
                    {city.count} Provider{city.count !== 1 ? 's' : ''}
                  </small>
                </button>

                {/* SEO-friendly link to the city page */}
                <Link href={`/cities/${slugifyCity(city.name)}`} style={{ fontSize: 12, color: '#667eea' }}>
                  Open city page →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Provider Listings */}
        <div id="provider-results">
          <h2 style={{ marginBottom: '15px' }}>
            Provider Listings ({filteredProviders.length})
          </h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Browse provider listings. Always verify credentials independently and contact providers directly for current information.
          </p>

          {filteredProviders.map((provider) => {
            const slug =
              provider.slug ||
              `${(provider.address?.city || '')
                .toLowerCase()
                .replace(/\s+/g, '-')}-${provider.name
                .toLowerCase()
                .replace(/\s+/g, '-')}`;

            return (
              <div key={provider.id} style={{ marginBottom: 24 }}>
                <ProviderCard
                  provider={{ ...provider, isFeatured: false }}
                  showEnhanced={false}
                />

                {/* Details link (SSG page) */}
                <div style={{ textAlign: 'center', margin: '0 0 20px' }}>
                  <Link
                    href={`/providers/${slug}`}
                    style={{
                      color: '#667eea',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      padding: '10px 20px',
                      border: '2px solid #667eea',
                      borderRadius: '25px',
                      display: 'inline-block',
                      background: 'white'
                    }}
                  >
                    View Details & Contact
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Quick Links */}
        <div style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          border: '1px solid #dee2e6',
          borderRadius: '12px',
          padding: '30px',
          margin: '40px 0',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Learn Before You Choose</h2>
          <p style={{ color: '#666', marginBottom: '25px' }}>
            Get informed with our educational resources to help with your research.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <Link href="/lipfillerfaq" style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              border: '1px solid #dee2e6',
              transition: 'transform 0.2s',
              display: 'block'
            }}>
              <h4 style={{ margin: '0 0 10px 0' }}>FAQ Guide</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                Common questions about lip enhancement procedures
              </p>
            </Link>

            <Link href="/shapes" style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              border: '1px solid #dee2e6',
              transition: 'transform 0.2s',
              display: 'block'
            }}>
              <h4 style={{ margin: '0 0 10px 0' }}>Lip Shapes Guide</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                Explore different lip enhancement styles
              </p>
            </Link>

            <Link href="/cost-breakdown" style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              border: '1px solid #dee2e6',
              transition: 'transform 0.2s',
              display: 'block'
            }}>
              <h4 style={{ margin: '0 0 10px 0' }}>Cost Information</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                General cost information for lip enhancement features
              </p>
            </Link>
          </div>
        </div>

        {/* What to Research Section */}
        <div style={{
          background: 'white',
          border: '2px solid #28a745',
          borderRadius: '12px',
          padding: '30px',
          margin: '40px 0'
        }}>
          <h3 style={{ color: '#28a745', textAlign: 'center', marginBottom: '25px' }}>
            What to Research When Choosing a Provider
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h4 style={{ color: '#333', marginBottom: '10px' }}>Credentials & Licensing</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Verify current licensing status</li>
                <li>Check professional certifications</li>
                <li>Research training background</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: '#333', marginBottom: '10px' }}>Official Verification Sources</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Colorado Department of Regulatory Agencies</li>
                <li>Relevant state licensing boards</li>
                <li>Request to see license documentation</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '10px' }}>During Consultation</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Ask about experience and training</li>
                <li>Request before/after examples</li>
                <li>Discuss realistic expectations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          padding: '40px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          margin: '40px 0'
        }}>
          <h2 style={{ marginBottom: '15px' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.1rem', margin: '20px 0', opacity: 0.9 }}>
            Use our educational resources to learn about lip enhancement, then research providers in your area.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/lipfillerfaq" 
              style={{
                background: 'white',
                color: '#667eea',
                padding: '12px 25px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              Read FAQ First
            </Link>
            <Link 
              href="/shapes" 
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '12px 25px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                border: '2px solid white'
              }}
            >
              Explore Styles
            </Link>
          </div>
        </section>

        {/* Streamlined Footer Disclaimer */}
        <div style={{
          background: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          margin: '40px 0',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#6c757d'
        }}>
          <strong>Provider Directory:</strong> Information provided for reference only. 
          Always verify provider credentials independently and consult with qualified professionals for medical advice. 
          <Link href="/terms" style={{ color: '#007bff', textDecoration: 'none' }}>View complete terms and conditions</Link>.
        </div>
      </div>
    </Layout>
  );
}