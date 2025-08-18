import { useState } from 'react';

export default function SearchFilter({ providers, onFilter }) {
  const [filters, setFilters] = useState({
    city: '',
    service: '',
    priceRange: ''
  });

  // Dynamically get all unique cities from providers
  const cities = [...new Set(providers.map(p => p.city))].sort();
  
  // Dynamically get all unique services from providers
  const services = [...new Set(providers.flatMap(p => p.services || []))].sort();

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
      filtered = filtered.filter(p => {
        if (!p.priceRange) return false;
        return p.priceRange.includes(newFilters.priceRange);
      });
    }
    
    onFilter(filtered);
  };

  const clearAllFilters = () => {
    setFilters({ city: '', service: '', priceRange: '' });
    onFilter(providers);
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
        {/* City Filter */}
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
            <option value="">All Cities ({cities.length} total)</option>
            {cities.map(city => {
              const count = providers.filter(p => p.city === city).length;
              return (
                <option key={city} value={city}>
                  {city} ({count} provider{count !== 1 ? 's' : ''})
                </option>
              );
            })}
          </select>
        </div>
        
        {/* Service Filter */}
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
        
        {/* Clear Filters Button */}
        <button
          onClick={clearAllFilters}
          style={{
            padding: '8px 16px',
            background: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            alignSelf: 'end',
            fontWeight: '600'
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Active Filters Display */}
      {(filters.city || filters.service) && (
        <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {filters.city && (
            <span style={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              City: {filters.city}
            </span>
          )}
          {filters.service && (
            <span style={{
              backgroundColor: '#f3e5f5',
              color: '#7b1fa2',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              Service: {filters.service}
            </span>
          )}
        </div>
      )}
    </div>
  );
}