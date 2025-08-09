export default function ProviderCard({ provider }) {
  if (!provider) return null;

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      margin: '20px 0',
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
            {provider.name}
          </h3>
          
          <p style={{ color: '#666', margin: '5px 0' }}>
            📍 {provider.address}
          </p>
          
          <p style={{ color: '#666', margin: '5px 0' }}>
            📞 {provider.phone}
          </p>
          
          <div style={{ margin: '15px 0' }}>
            <strong>Services: </strong>
            {provider.services && provider.services.join(', ')}
          </div>
          
          <div style={{ margin: '15px 0' }}>
            <strong>Price Range: </strong>
            <span style={{ color: '#667eea', fontWeight: 'bold' }}>
              {provider.priceRange}
            </span>
          </div>
          
          {provider.rating && (
            <div style={{ margin: '10px 0' }}>
              <span style={{ color: '#ffc107' }}>
                {'⭐'.repeat(Math.floor(provider.rating))}
              </span>
              <span style={{ marginLeft: '10px', color: '#666' }}>
                {provider.rating} ({provider.reviews} reviews)
              </span>
            </div>
          )}
        </div>
        
        <div style={{ marginLeft: '20px' }}>
          {provider.boardCertified && (
            <div style={{
              background: '#e8f5e8',
              color: '#388e3c',
              padding: '5px 10px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              marginBottom: '10px'
            }}>
              ✓ Board Certified
            </div>
          )}
          
          <a 
            href={provider.website} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '0.9rem'
            }}
          >
            🌐 Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}