import { useState } from 'react';

export default function SearchFilter({ providers, onFilter }) {
  const [filters, setFilters] = useState({
    city: '',
    brand: '',
    hasOnlineBooking: false
  });

  // Fix: Use provider.address.city instead of provider.city to match your JSON structure
  const cities = [...new Set(providers.map(p => p.address?.city || p.city).filter(Boolean))].sort();
  
  // Fix: Use provider.brands instead of provider.services since your data has filler brands
  const brands = [...new Set(providers.flatMap(p => p.brands || []))].sort();

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters
    let filtered = providers;
    
    if (newFilters.city) {
      filtered = filtered.filter(p => {
        const providerCity = p.address?.city || p.city;
        return providerCity === newFilters.city;
      });
    }
    
    if (newFilters.brand) {
      filtered = filtered.filter(p => 
        p.brands && p.brands.includes(newFilters.brand)
      );
    }
    
    if (newFilters.hasOnlineBooking) {
      filtered = filtered.filter(p => p.booking?.onlineBookingUrl);
    }
    
    onFilter(filtered);
  };

  const clearAllFilters = () => {
    setFilters({ city: '', brand: '', hasOnlineBooking: false });
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
      <h3 style={{ margin: '0 0 20px 0' }}>Filter Providers</h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '15px',
        marginBottom: '15px'
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
              const count = providers.filter(p => {
                const providerCity = p.address?.city || p.city;
                return providerCity === city;
              }).length;
              return (
                <option key={city} value={city}>
                  {city} ({count} provider{count !== 1 ? 's' : ''})
                </option>
              );
            })}
          </select>
        </div>
        
        {/* Brand Filter */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>
            Filler Brand:
          </label>
          <select 
            value={filters.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '6px'
            }}
          >
            <option value="">All Brands</option>
            {brands.map(brand => {
              const count = providers.filter(p => p.brands && p.brands.includes(brand)).length;
              return (
                <option key={brand} value={brand}>
                  {brand} ({count} provider{count !== 1 ? 's' : ''})
                </option>
              );
            })}
          </select>
        </div>
        
        {/* Online Booking Filter */}
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
              onChange={(e) => handleFilterChange('hasOnlineBooking', e.target.checked)}
              style={{ marginRight: '8px' }}
            />
            Online Booking Only
          </label>
        </div>
      </div>

      {/* Clear Filters Button */}
      {(filters.city || filters.brand || filters.hasOnlineBooking) && (
        <button
          onClick={clearAllFilters}
          style={{
            padding: '8px 16px',
            background: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            marginBottom: '10px'
          }}
        >
          Clear All Filters
        </button>
      )}

      {/* Active Filters Display */}
      {(filters.city || filters.brand || filters.hasOnlineBooking) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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
          {filters.brand && (
            <span style={{
              backgroundColor: '#f3e5f5',
              color: '#7b1fa2',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              Brand: {filters.brand}
            </span>
          )}
          {filters.hasOnlineBooking && (
            <span style={{
              backgroundColor: '#e8f5e8',
              color: '#2e7d32',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              Online Booking Available
            </span>
          )}
        </div>
      )}

    </div>
  );
}