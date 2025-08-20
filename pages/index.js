import { useState } from 'react';
import Layout from '../components/Layout';
import ProviderCard from '../components/ProviderCard';
import SearchFilter from '../components/SearchFilter';
import providersData from '../data/providers.json';

export default function Home() {
  const [filteredProviders, setFilteredProviders] = useState(providersData.providers);
  
  // Dynamically generate city data from providers
  const getCityData = () => {
    const cityMap = {};
    
    providersData.providers.forEach(provider => {
      const city = provider.city;
      if (cityMap[city]) {
        cityMap[city].count += 1;
      } else {
        cityMap[city] = {
          name: city,
          count: 1,
          slug: city.toLowerCase().replace(/\s+/g, '-')
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
    // Filter providers by the selected city
    const filtered = providersData.providers.filter(provider => provider.city === cityName);
    setFilteredProviders(filtered);
    
    // Optional: scroll to results section
    const resultsSection = document.getElementById('provider-results') || 
                          document.querySelector('[data-results]') ||
                          document.querySelector('.provider-list');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add this function to your component:
  const handleShowAllCities = () => {
    setFilteredProviders(providersData.providers);
  };
  
  return (
    <Layout title="Colorado Licensed Medical Professional Lip Filler Directory">
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
            Find Licensed Medical Professionals<br />
            for Lip Fillers in Colorado
          </h1>
          
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto 30px auto',
            opacity: '0.95'
          }}>
            Quality-focused directory featuring licensed medical professionals. Browse providers, compare services, and make informed decisions.
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
            <strong>📋 Important:</strong> This directory is for reference only. Please verify all provider credentials independently through 
            <a href="https://www.colorado.gov/dora" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', marginLeft: '5px' }}>
              Colorado DORA
            </a> before scheduling treatments. <a href="/terms" style={{ color: '#1976d2' }}>View full terms</a>.
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
          <h2 style={{ marginBottom: '20px' }}>Ready to Find Licensed Medical Professionals?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.95' }}>
            Browse our quality-focused directory and remember to verify credentials independently
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
              🔍 Start Your Search Below
            </button>
            <a 
              href="/why-verification-matters" 
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid white',
                padding: '13px 28px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              📖 Why Credentials Matter
            </a>
          </div>
        </section>

        {/* Search & Filter Section - Updated with anchor ID */}
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
              🔍 Search & Filter Providers
            </h3>
            <p style={{ 
              textAlign: 'center', 
              color: '#666', 
              marginBottom: '20px',
              fontSize: '1rem'
            }}>
              Use the filters below to find providers in your area that match your preferences
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

          {/* Show All Cities Button */}
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
            🌟 Show All Cities ({providersData.providers.length} providers)
          </button>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px',
            margin: '20px 0'
          }}>
            {cityData.map(city => (
              <button 
                key={city.slug}
                onClick={() => handleCityFilter(city.name)}
                style={{ 
                  padding: '15px', 
                  background: 'white', 
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                📍 {city.name}<br />
                <small style={{ color: '#667eea' }}>
                  {city.count} Provider{city.count !== 1 ? 's' : ''}
                </small>
              </button>
            ))}
          </div>
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
          <h2 style={{ marginBottom: '20px' }}>📚 Learn Before You Choose</h2>
          <p style={{ color: '#666', marginBottom: '25px' }}>
            Get informed with our educational resources to make the best decision for your needs.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <a href="/lipfillerfaq" style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              border: '1px solid #dee2e6',
              transition: 'transform 0.2s'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>❓</div>
              <h4 style={{ margin: '0 0 10px 0' }}>FAQ Guide</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                Common questions about lip fillers, safety, and costs
              </p>
            </a>

            <a href="/shapes" style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              border: '1px solid #dee2e6',
              transition: 'transform 0.2s'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💋</div>
              <h4 style={{ margin: '0 0 10px 0' }}>Lip Shapes Guide</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                Explore 14 popular lip filler shapes and styles
              </p>
            </a>

            <a href="/pricing" style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              border: '1px solid #dee2e6',
              transition: 'transform 0.2s'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💰</div>
              <h4 style={{ margin: '0 0 10px 0' }}>Pricing Guide</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                Learn about lip filler costs in Colorado
              </p>
            </a>
          </div>
        </div>

        {/* Provider Listings */}
        <div id="provider-results">
          <h2 style={{ marginBottom: '15px' }}>
            Featured Providers ({filteredProviders.length})
          </h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Browse our directory of medical professionals. Remember to verify credentials and contact providers directly for current pricing and availability.
          </p>

          {filteredProviders.map(provider => (
            <ProviderCard 
              key={provider.id} 
              provider={{
                ...provider,
                isFeatured: true
              }}
              showEnhanced={true}
            />
          ))}
        </div>

        {/* What to Look For Section */}
        <div style={{
          background: 'white',
          border: '2px solid #28a745',
          borderRadius: '12px',
          padding: '30px',
          margin: '40px 0'
        }}>
          <h3 style={{ color: '#28a745', textAlign: 'center', marginBottom: '25px' }}>
            🎯 What to Look for in a Provider
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h4 style={{ color: '#333', marginBottom: '10px' }}>✅ Medical Credentials</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Valid Colorado medical license</li>
                <li>RN, NP, PA, or MD credentials</li>
                <li>Aesthetic injection training</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: '#333', marginBottom: '10px' }}>✅ Verify Through Official Sources</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Colorado Department of Regulatory Agencies</li>
                <li>State medical/nursing boards</li>
                <li>Ask for license numbers</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '10px' }}>✅ During Consultation</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Ask about experience and training</li>
                <li>Review before/after photos</li>
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
            Use our educational resources to learn about lip fillers, then find qualified providers near you.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
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
              📚 Read FAQ First
            </a>
            <a 
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
              💋 Explore Shapes
            </a>
          </div>
        </section>
      </div>

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
        <strong>Educational Directory:</strong> Information provided for reference only. 
        Always verify provider credentials independently and consult with qualified healthcare providers for medical advice. 
        <a href="/terms" style={{ color: '#007bff', textDecoration: 'none' }}>View complete terms and conditions</a>.
      </div>
    </Layout>
  );
}