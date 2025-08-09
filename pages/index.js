import { useState } from 'react';
import Layout from '../components/Layout';
import ProviderCard from '../components/ProviderCard';
import SearchFilter from '../components/SearchFilter';
import providersData from '../data/providers.json';

export default function Home() {
  const [filteredProviders, setFilteredProviders] = useState(providersData.providers);

  return (
    <Layout title="Best Lip Fillers in Colorado - Top Providers & Prices 2024">
      <div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>
          Find the Best Lip Filler Providers in Colorado
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          textAlign: 'center', 
          color: '#666', 
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px auto'
        }}>
          Compare prices, read reviews, and book appointments with top-rated lip filler 
          specialists across Colorado. Find board-certified providers offering Juvederm, 
          Restylane, and RHA fillers.
        </p>

        <SearchFilter 
          providers={providersData.providers} 
          onFilter={setFilteredProviders} 
        />

        <div style={{ marginBottom: '30px' }}>
          <h2>Popular Cities for Lip Fillers</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px',
            margin: '20px 0'
          }}>
            <a href="/providers/denver" style={{ 
              padding: '15px', 
              background: 'white', 
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center'
            }}>
              📍 Denver Lip Fillers
            </a>
            <a href="/providers/boulder" style={{ 
              padding: '15px', 
              background: 'white', 
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center'
            }}>
              📍 Boulder Lip Fillers
            </a>
            <a href="/providers/colorado-springs" style={{ 
              padding: '15px', 
              background: 'white', 
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center'
            }}>
              📍 Colorado Springs Lip Fillers
            </a>
          </div>
        </div>

        <div>
          <h2>All Providers ({filteredProviders.length})</h2>
          {filteredProviders.map(provider => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </Layout>
  );
}