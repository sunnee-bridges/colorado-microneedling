import React, { useState } from 'react';

export default function ProviderCard({ 
  provider, 
  showEnhanced = false,
  trackClick = true 
}) {
  const [showFullPricing, setShowFullPricing] = useState(false);
  
  if (!provider) return null;

  // Analytics tracking for monetization
  const handleProviderClick = (action) => {
    if (trackClick && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'provider_interaction', {
        event_category: 'Provider',
        event_label: `${provider.name} - ${action}`,
        provider_id: provider.id,
        listing_tier: provider.listingTier || 'basic',
        value: provider.leadCost || 25
      });
    }
  };

  // Enhanced pricing display
  const renderEnhancedPricing = () => {
    if (!showEnhanced || !provider.pricing) return null;

    return (
      <div style={{
        background: '#f8f9fa',
        borderRadius: '8px',
        padding: '12px',
        margin: '10px 0',
        border: '1px solid #e9ecef'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
          <strong style={{ color: '#333', fontSize: '0.9rem' }}>💰 Detailed Pricing</strong>
          {Object.keys(provider.pricing).length > 2 && (
            <button
              onClick={() => setShowFullPricing(!showFullPricing)}
              style={{
                background: 'none',
                border: 'none',
                color: '#667eea',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              {showFullPricing ? 'Show Less' : 'Show All'}
            </button>
          )}
        </div>

        {Object.entries(provider.pricing)
          .slice(0, showFullPricing ? undefined : 2)
          .map(([type, price]) => (
            <div key={type} style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '5px 0',
              fontSize: '0.85rem'
            }}>
              <span style={{ color: '#666', textTransform: 'capitalize' }}>
                {type.replace(/([A-Z])/g, ' $1').trim()}:
              </span>
              <span style={{ fontWeight: 'bold', color: '#667eea' }}>
                {price}
              </span>
            </div>
          ))}
      </div>
    );
  };

  // Enhanced promotions display
  const renderPromotions = () => {
    if (!showEnhanced || !provider.promotions) return null;

    const promoEntries = Object.entries(provider.promotions);
    if (promoEntries.length === 0) return null;

    return (
      <div style={{
        background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
        border: '1px solid #f0ad4e',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px 0'
      }}>
        <strong style={{ color: '#8a6d3b', fontSize: '0.9rem' }}>🎁 Current Specials</strong>
        {promoEntries.slice(0, 2).map(([type, offer]) => (
          <div key={type} style={{
            fontSize: '0.8rem',
            color: '#8a6d3b',
            margin: '3px 0'
          }}>
            <strong>{type.charAt(0).toUpperCase() + type.slice(1)}:</strong> {offer}
          </div>
        ))}
      </div>
    );
  };

  // Enhanced badges
  const renderBadges = () => {
    return (
      <div style={{ display: 'flex', gap: '5px', marginBottom: '8px', flexWrap: 'wrap' }}>
        {provider.isVerified && (
          <span style={{
            background: '#28a745',
            color: 'white',
            padding: '2px 6px',
            borderRadius: '10px',
            fontSize: '0.7rem'
          }}>
            ✓ Verified
          </span>
        )}
        
        {provider.isPremium && (
          <span style={{
            background: '#ffc107',
            color: '#212529',
            padding: '2px 6px',
            borderRadius: '10px',
            fontSize: '0.7rem'
          }}>
            ⭐ Premium
          </span>
        )}

        {provider.listingTier === 'premium' && (
          <span style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '2px 6px',
            borderRadius: '10px',
            fontSize: '0.7rem'
          }}>
            💎 Featured
          </span>
        )}
      </div>
    );
  };

  // Enhanced features display
  const renderFeatures = () => {
    if (!showEnhanced || !provider.features || provider.features.length === 0) return null;

    return (
      <div style={{ margin: '10px 0' }}>
        <strong style={{ color: '#333', fontSize: '0.9rem' }}>✨ Features:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '5px' }}>
          {provider.features.slice(0, 4).map((feature, index) => (
            <span
              key={index}
              style={{
                background: '#e9ecef',
                color: '#495057',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}
            >
              {feature}
            </span>
          ))}
          {provider.features.length > 4 && (
            <span style={{ fontSize: '0.75rem', color: '#666' }}>
              +{provider.features.length - 4} more
            </span>
          )}
        </div>
      </div>
    );
  };

  // Enhanced action buttons
  const renderActionButtons = () => {
    if (!showEnhanced) {
      return (
        <a 
          href={provider.website} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => handleProviderClick('website_visit')}
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
      );
    }

    return (
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={() => handleProviderClick('view_profile')}
          style={{
            background: '#667eea',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            cursor: 'pointer',
            flex: 1,
            minWidth: '100px'
          }}
        >
          📋 View Profile
        </button>

        <button
          onClick={() => handleProviderClick('book_consultation')}
          style={{
            background: '#28a745',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            cursor: 'pointer',
            flex: 1,
            minWidth: '120px'
          }}
        >
          📞 Book Consultation
        </button>

        {provider.website && (
          <a
            href={provider.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleProviderClick('website_visit')}
            style={{
              background: 'white',
              color: '#667eea',
              border: '1px solid #667eea',
              padding: '7px 14px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            🌐 Website
          </a>
        )}
      </div>
    );
  };

  // Determine card styling based on listing tier
  const getCardStyling = () => {
    const baseStyle = {
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      margin: '20px 0',
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease',
      position: 'relative'
    };

    if (provider.listingTier === 'premium') {
      return {
        ...baseStyle,
        border: '2px solid #ffc107',
        background: 'linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%)',
        boxShadow: '0 4px 15px rgba(255, 193, 7, 0.2)'
      };
    }

    if (provider.listingTier === 'enhanced') {
      return {
        ...baseStyle,
        border: '2px solid #667eea',
        boxShadow: '0 3px 12px rgba(102, 126, 234, 0.15)'
      };
    }

    return baseStyle;
  };

  return (
    <div style={getCardStyling()}>
      {/* Premium ribbon */}
      {provider.listingTier === 'premium' && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '-25px',
          background: 'linear-gradient(135deg, #ffc107, #ff9800)',
          color: 'white',
          padding: '3px 30px',
          transform: 'rotate(45deg)',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          FEATURED
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div style={{ flex: 1 }}>
          {renderBadges()}
          
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

          {/* Enhanced sections */}
          {renderEnhancedPricing()}
          {renderPromotions()}
          {renderFeatures()}

          {/* Enhanced description */}
          {showEnhanced && provider.description && (
            <p style={{
              color: '#666',
              margin: '10px 0',
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              {provider.description}
            </p>
          )}

          {/* Operating hours */}
          {showEnhanced && provider.operatingHours && (
            <div style={{ margin: '10px 0' }}>
              <strong style={{ color: '#333', fontSize: '0.9rem' }}>🕒 Hours: </strong>
              <span style={{ color: '#666', fontSize: '0.85rem' }}>
                {(() => {
                  const today = new Date().toLocaleLowerCase().slice(0, 3) + 'day';
                  const todayHours = provider.operatingHours[today];
                  return todayHours === 'Closed' ? 
                    'Closed Today' : 
                    `Open Today: ${todayHours}`;
                })()}
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
          
          {renderActionButtons()}
        </div>
      </div>

      {/* Payment options */}
      {showEnhanced && provider.paymentOptions && provider.paymentOptions.length > 0 && (
        <div style={{ 
          marginTop: '15px',
          padding: '8px',
          background: '#f8f9fa',
          borderRadius: '6px'
        }}>
          <small style={{ color: '#6c757d' }}>
            <strong>Payment Options:</strong> {provider.paymentOptions.join(', ')}
          </small>
        </div>
      )}
    </div>
  );
}