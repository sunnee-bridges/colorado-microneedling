import { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ProviderCard from '../../components/ProviderCard';
import providersData from '../../data/providers.json';

export default function ProvidersIndex({ providers }) {
  const [filters, setFilters] = useState({
    city: '',
    brand: '',
    hasOnlineBooking: false,
    searchQuery: ''
  });

  const [sortBy, setSortBy] = useState('name'); // name, city, newest
  const [viewMode, setViewMode] = useState('cards'); // cards, list

  const cities = useMemo(() => {
    const citySet = new Set(providers.map(p => p.address?.city || p.city));
    return Array.from(citySet).sort();
  }, [providers]);

  const brands = useMemo(() => {
    const brandSet = new Set();
    providers.forEach(p => {
      if (p.brands) p.brands.forEach(brand => brandSet.add(brand));
    });
    return Array.from(brandSet).sort();
  }, [providers]);

  const filteredAndSortedProviders = useMemo(() => {
    let filtered = providers.filter(provider => {
      const city = provider.address?.city || provider.city;
      
      if (filters.city && city !== filters.city) return false;
      if (filters.brand && !provider.brands?.includes(filters.brand)) return false;
      if (filters.hasOnlineBooking && !provider.booking?.onlineBookingUrl) return false;
      
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const searchableText = `${provider.name} ${city} ${provider.brands?.join(' ') || ''} ${provider.description || ''}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }
      
      return true;
    });

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'city':
          const cityA = a.address?.city || a.city;
          const cityB = b.address?.city || b.city;
          return cityA.localeCompare(cityB) || a.name.localeCompare(b.name);
        case 'newest':
          // Assuming providers have an id that correlates to creation order
          return b.id - a.id;
        default: // name
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [providers, filters, sortBy]);

  const generateMetaDescription = () => {
    const cityCount = cities.length;
    const providerCount = providers.length;
    return `Browse ${providerCount} lip filler providers across ${cityCount} Colorado cities. Compare brands, pricing, and book appointments with provider options.`;
  };

  return (
    <>
      <Head>
        <title>All Lip Filler Providers in Colorado - Provider Directory</title>
        <meta name="description" content={generateMetaDescription()} />
        <meta name="keywords" content={`lip fillers colorado, ${cities.join(', ')}, ${brands.slice(0, 5).join(', ')}`} />
        <link rel="canonical" href="https://yourdomain.com/providers" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Colorado Lip Filler Providers",
              "description": "Directory of providers offering lip filler services in Colorado",
              "numberOfItems": providers.length,
              "itemListElement": providers.map((provider, index) => ({
                "@type": "LocalBusiness",
                "position": index + 1,
                "name": provider.name,
                "url": `https://yourdomain.com/providers/${provider.slug}`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": provider.address?.city || provider.city,
                  "addressRegion": provider.address?.state || "CO"
                }
              }))
            })
          }}
        />
      </Head>

      <Layout>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          
          {/* Breadcrumbs */}
          <nav style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#666' }}>
            <Link href="/" style={{ color: '#667eea', textDecoration: 'none' }}>Home</Link>
            {' > '}
            <span>All Providers</span>
          </nav>

          {/* Header */}
          <div style={{ marginBottom: '30px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#333' }}>
              All Lip Filler Providers in Colorado
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
              Browse our complete directory of {providers.length} providers 
              across {cities.length} Colorado cities. Use the filters below to find providers 
              that match your specific needs.
            </p>
          </div>

          {/* Search and Filters */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid #e0e0e0',
            marginBottom: '30px'
          }}>
            
            {/* Search Bar */}
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Search providers, cities, or brands..."
                value={filters.searchQuery}
                onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* Filter Controls */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>City:</label>
                <select 
                  value={filters.city}
                  onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))}
                  style={{ 
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Filler Brand:</label>
                <select 
                  value={filters.brand}
                  onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
                  style={{ 
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Sort By:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ 
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="name">Provider Name</option>
                  <option value="city">City</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'end' }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  <input 
                    type="checkbox"
                    checked={filters.hasOnlineBooking}
                    onChange={(e) => setFilters(prev => ({ ...prev, hasOnlineBooking: e.target.checked }))}
                    style={{ marginRight: '8px' }}
                  />
                  Online Booking Only
                </label>
              </div>
            </div>

            {/* Clear Filters Button */}
            {(filters.city || filters.brand || filters.hasOnlineBooking || filters.searchQuery) && (
              <button
                onClick={() => setFilters({ city: '', brand: '', hasOnlineBooking: false, searchQuery: '' })}
                style={{
                  background: '#f8f9fa',
                  border: '1px solid #dee2e6',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Results Summary */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <div style={{ color: '#666' }}>
              Showing {filteredAndSortedProviders.length} of {providers.length} providers
              {filters.city && <span> in {filters.city}</span>}
              {filters.brand && <span> offering {filters.brand}</span>}
            </div>

            {/* View Mode Toggle */}
            <div style={{ display: 'flex', gap: '5px' }}>
              <button
                onClick={() => setViewMode('cards')}
                style={{
                  padding: '6px 12px',
                  border: `2px solid ${viewMode === 'cards' ? '#667eea' : '#ddd'}`,
                  background: viewMode === 'cards' ? '#667eea' : 'white',
                  color: viewMode === 'cards' ? 'white' : '#666',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Card View
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: '6px 12px',
                  border: `2px solid ${viewMode === 'list' ? '#667eea' : '#ddd'}`,
                  background: viewMode === 'list' ? '#667eea' : 'white',
                  color: viewMode === 'list' ? 'white' : '#666',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                List View
              </button>
            </div>
          </div>

          {/* No Results Message */}
          {filteredAndSortedProviders.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '50px 20px',
              background: '#f8f9fa',
              borderRadius: '12px',
              border: '1px solid #dee2e6'
            }}>
              <h3 style={{ color: '#666', marginBottom: '15px' }}>No providers found</h3>
              <p style={{ color: '#888', marginBottom: '20px' }}>
                Try adjusting your filters or search terms to see more results.
              </p>
              <button
                onClick={() => setFilters({ city: '', brand: '', hasOnlineBooking: false, searchQuery: '' })}
                style={{
                  background: '#667eea',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Provider Listings */}
          <div>
            {viewMode === 'cards' ? (
              // Card View
              <div>
                {filteredAndSortedProviders.map(provider => (
                  <div key={provider.id} style={{ marginBottom: '30px' }}>
                    <ProviderCard 
                      provider={provider}
                      showEnhanced={false}
                      trackClick={true}
                    />
                    
                    <div style={{ 
                      textAlign: 'center', 
                      marginTop: '15px'
                    }}>
                      <Link 
                        href={`/providers/${provider.slug}`}
                        style={{
                          color: '#667eea',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          padding: '8px 16px',
                          border: '2px solid #667eea',
                          borderRadius: '20px',
                          display: 'inline-block',
                          transition: 'all 0.2s',
                          background: 'white'
                        }}
                      >
                        View Full Details & Book
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // List View
              <div style={{
                background: 'white',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                overflow: 'hidden'
              }}>
                {filteredAndSortedProviders.map((provider, index) => (
                  <div 
                    key={provider.id}
                    style={{
                      padding: '20px',
                      borderBottom: index < filteredAndSortedProviders.length - 1 ? '1px solid #f0f0f0' : 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '15px'
                    }}
                  >
                    <div style={{ flex: 1, minWidth: '250px' }}>
                      <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>
                        <Link 
                          href={`/providers/${provider.slug}`}
                          style={{ color: '#333', textDecoration: 'none' }}
                        >
                          {provider.name}
                        </Link>
                      </h3>
                      <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>
                        {provider.address?.street}, {provider.address?.city}, {provider.address?.state}
                      </p>
                      <p style={{ color: '#666', margin: '5px 0 0 0', fontSize: '0.85rem' }}>
                        {provider.brands?.slice(0, 2).join(', ')}
                        {provider.brands?.length > 2 && ` +${provider.brands.length - 2} more`}
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {provider.booking?.onlineBookingUrl && (
                        <span style={{
                          background: '#28a745',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.7rem',
                          fontWeight: 'bold'
                        }}>
                          Online Booking
                        </span>
                      )}
                      
                      <Link 
                        href={`/providers/${provider.slug}`}
                        style={{
                          background: '#667eea',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: 'bold'
                        }}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            margin: '40px 0'
          }}>
            <h2 style={{ marginBottom: '15px' }}>Need Help Choosing a Provider?</h2>
            <p style={{ marginBottom: '20px', opacity: '0.9' }}>
              Read our educational guides to make an informed decision about lip filler treatments.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="/lipfillerfaq"
                style={{
                  background: 'white',
                  color: '#667eea',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Read FAQ Guide
              </Link>
              <Link 
                href="/shapes"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: '2px solid white',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Explore Lip Shapes
              </Link>
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      providers: providersData.providers,
    },
    revalidate: 3600, // Revalidate every hour
  };
}