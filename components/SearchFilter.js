import { useState } from 'react';

export default function SearchFilter({ providers, onFilter }) {
  const [filters, setFilters] = useState({
    city: '',
    service: '',
    priceRange: ''
  });

  const cities = [...new Set(providers.map(p => p.city))];
  const services = [...new Set(providers.flatMap(p => p.services || []))];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters
    let filtered = providers;
    
    if (newFilters.city) {
      filtered = filtered.filter(p => p.city === newFilters.city);
    }
    
    if (newFilters.service) {
      filtered = filtered.filter(p => 
        p.services && p.services.includes(newFilters.service)
      );
    }
    
    if (newFilters.priceRange) {
      // Simple price filtering - you can make this more sophisticated
      filtered = filtered.filter(p => 
        p.priceRange && p.priceRange.includes(newFilters.priceRange)
      );
    }
    
    onFilter(filtered);
  };

  return (
    <div style={{
      background: 'white',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      marginBottom: '30px'
    }}>
      <h3 style={{ margin: '0 0 20px 0' }}>🔍 Filter Providers</h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '15px' 
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
            City:
          </label>
          <select 
            value={filters.city}
            onChange={(e) => handleFilterChange('city', e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '6px'
            }}
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
            Service:
          </label>
          <select 
            value={filters.service}
            onChange={(e) => handleFilterChange('service', e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '6px'
            }}
          >
            <option value="">All Services</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
        
        <button
          onClick={() => {
            setFilters({ city: '', service: '', priceRange: '' });
            onFilter(providers);
          }}
          style={{
            padding: '8px 16px',
            background: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            alignSelf: 'end'
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}