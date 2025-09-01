import React, { useState, useMemo } from 'react';
import Link from 'next/link';

export default function ProviderCard({
  provider,
  showEnhanced = false,
  trackClick = true,
  linkToDetails = true // show "View Details" if slug is present
}) {
  const [showFullBrands, setShowFullBrands] = useState(false);
  if (!provider) return null;

  // ---------- helpers ----------
  const sanitizedPhone = useMemo(() => {
    const raw = provider.displayPhone || provider.phone || '';
    const tel = (provider.phone || raw).replace(/[^\d+]/g, '');
    return { display: raw, tel };
  }, [provider.displayPhone, provider.phone]);

  const addressParts = provider.address || {};
  const addressText = useMemo(() => {
    const parts = [
      addressParts.street,
      [addressParts.city, addressParts.state].filter(Boolean).join(', '),
      addressParts.postalCode,
    ].filter(Boolean);
    return parts.join(', ');
  }, [addressParts]);

  const directionsUrl = useMemo(() => {
    // Priority: explicit mapsUrl → fallbackUrl → raw address search
    if (provider.google?.mapsUrl) return provider.google.mapsUrl;
    if (provider.google?.fallbackUrl) return provider.google.fallbackUrl;
    if (addressText) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`;
    }
    return null;
  }, [provider.google, addressText]);

  const handleProviderClick = (action) => {
    if (trackClick && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'provider_interaction', {
        event_category: 'Provider',
        event_label: `${provider.name} - ${action}`,
        provider_id: provider.id,
        listing_tier: provider.listingTier || 'basic',
        value: provider.leadCost || 25,
      });
    }
  };

  // ---------- sub-views ----------
  const renderFillerBrands = () => {
    if (!provider.brands || provider.brands.length === 0) return null;
    const displayBrands = showFullBrands ? provider.brands : provider.brands.slice(0, 3);

    // guard for invalid date
    const asOfDate = provider.brandsAsOf ? new Date(provider.brandsAsOf) : null;
    const asOfSafe =
      asOfDate && !isNaN(asOfDate) ? asOfDate.toLocaleDateString() : null;

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
          <strong style={{ color: '#333', fontSize: '0.9rem' }}>
            Filler Brands (provider-stated)
          </strong>
          {provider.brands.length > 3 && (
            <button
              type="button"
              onClick={() => setShowFullBrands(!showFullBrands)}
              style={{
                background: 'none',
                border: 'none',
                color: '#667eea',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
              aria-expanded={showFullBrands}
            >
              {showFullBrands ? 'Show Less' : `Show All ${provider.brands.length}`}
            </button>
          )}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {displayBrands.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              style={{
                background: '#667eea',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}
            >
              {brand}
            </span>
          ))}
        </div>

        {(provider.brandsVerified || asOfSafe) && (
          <div style={{
            fontSize: '0.75rem',
            color: '#6c757d',
            marginTop: '8px',
            fontStyle: 'italic'
          }}>
            {provider.brandsVerified ? `Verified: ${provider.brandsVerified}` : null}
            {provider.brandsVerified && asOfSafe ? ' | ' : ''}
            {asOfSafe ? `Updated: ${asOfSafe}` : null}
          </div>
        )}
      </div>
    );
  };

  const renderBookingOptions = () => {
    if (!provider.booking) return null;
    const hasOnlineBooking = provider.booking.onlineBookingUrl;
    const hasWebForm = provider.booking.webFormUrl;

    const box = {
      bg: hasOnlineBooking ? 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)' : '#fff3cd',
      bd: hasOnlineBooking ? '#28a745' : '#ffc107',
      text: hasOnlineBooking ? '#155724' : '#856404',
      title: hasOnlineBooking ? 'Online Booking Available' : 'Contact Required',
      desc: hasOnlineBooking ? 'Direct appointment scheduling' : 'Phone or web form required',
    };

    return (
      <div style={{
        background: box.bg,
        border: `1px solid ${box.bd}`,
        borderRadius: '8px',
        padding: '10px',
        margin: '10px 0'
      }}>
        <strong style={{ color: box.text, fontSize: '0.9rem' }}>{box.title}</strong>
        <div style={{ fontSize: '0.8rem', color: box.text, marginTop: '4px' }}>
          {box.desc}
        </div>
      </div>
    );
  };

  const renderLocationInfo = () => (
    <div style={{ marginBottom: '15px' }}>
      {addressText && (
        <div style={{ color: '#666', margin: '5px 0', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>📍</span>
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">{addressParts.street}</span>{', '}
            <span itemProp="addressLocality">{addressParts.city}</span>{', '}
            <span itemProp="addressRegion">{addressParts.state}</span>{' '}
            <span itemProp="postalCode">{addressParts.postalCode}</span>
          </span>
        </div>
      )}

      {sanitizedPhone.display && (
        <div style={{ color: '#666', margin: '5px 0', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>📞</span>
          <a
            href={`tel:${sanitizedPhone.tel}`}
            style={{ color: '#667eea', textDecoration: 'none' }}
            onClick={() => handleProviderClick('phone_call')}
            itemProp="telephone"
          >
            {sanitizedPhone.display}
          </a>
        </div>
      )}

      {directionsUrl && (
        <div style={{ color: '#666', margin: '5px 0' }}>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.85rem' }}
            onClick={() => handleProviderClick('directions')}
            aria-label={`Get directions to ${provider.name}`}
          >
            🗺️ Get Directions
          </a>
        </div>
      )}
    </div>
  );

  const renderActionButtons = () => {
    const { booking, website } = provider;
    return (
      <div style={{ display: 'flex', gap: '8px', marginTop: '15px', flexWrap: 'wrap' }}>
        {booking?.onlineBookingUrl ? (
          <a
            href={booking.onlineBookingUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={() => handleProviderClick('online_booking')}
            style={primaryBtnStyle('#28a745', '#20c997')}
          >
            📅 Book Online
          </a>
        ) : booking?.webFormUrl ? (
          <a
            href={booking.webFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleProviderClick('contact_form')}
            style={primaryBtnStyle('#667eea', '#764ba2')}
          >
            📋 Request Consultation
          </a>
        ) : (
          <a
            href={`tel:${sanitizedPhone.tel}`}
            onClick={() => handleProviderClick('phone_call')}
            style={primaryBtnStyle('#667eea', '#764ba2')}
          >
            📞 Call Now
          </a>
        )}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={() => handleProviderClick('website_visit')}
            style={{
              background: 'white',
              color: '#667eea',
              border: '2px solid #667eea',
              padding: '10px 16px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              minWidth: 140
            }}
          >
            🌐 Website
          </a>
        )}

        {linkToDetails && provider.slug && (
          <Link
            href={`/providers/${provider.slug}`}
            onClick={() => handleProviderClick('view_details')}
            style={{
              background: 'white',
              color: '#333',
              border: '2px solid #28a745',
              padding: '10px 16px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              minWidth: 140
            }}
          >
            🔎 View Details
          </Link>
        )}
      </div>
    );
  };

  const renderSEOKeywords = () => {
    if (!showEnhanced || !provider.seoKeywords?.length) return null;
    return (
      <div style={{ margin: '10px 0' }}>
        <strong style={{ color: '#333', fontSize: '0.9rem' }}>Search Terms:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '5px' }}>
          {provider.seoKeywords.slice(0, 4).map((kw, i) => (
            <span key={`${kw}-${i}`} style={chipStyle}>{kw}</span>
          ))}
          {provider.seoKeywords.length > 4 && (
            <span style={{ fontSize: '0.75rem', color: '#666' }}>
              +{provider.seoKeywords.length - 4} more
            </span>
          )}
        </div>
      </div>
    );
  };

  // ---------- render ----------
  return (
    <article
      itemScope
      itemType="https://schema.org/LocalBusiness"
      style={{
        border: '2px solid #28a745',
        borderRadius: '12px',
        padding: '20px',
        margin: '20px 0',
        background: 'white',
        boxShadow: '0 2px 10px rgba(40, 167, 69, 0.1)',
        transition: 'transform 0.2s ease',
        position: 'relative'
      }}
    >
      <h3 style={{ margin: '0 0 15px 0', color: '#333', fontSize: '1.3rem' }} itemProp="name">
        {provider.name}
      </h3>

      {renderLocationInfo()}

      {provider.description && (
        <div style={{ margin: '15px 0', color: '#666', fontSize: '0.9rem' }} itemProp="description">
          {provider.description}
        </div>
      )}

      {renderFillerBrands()}
      {renderBookingOptions()}
      {renderSEOKeywords()}

      {provider.brandsNote && showEnhanced && (
        <div style={{
          background: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '6px',
          padding: '8px',
          margin: '10px 0',
          fontSize: '0.8rem',
          color: '#856404'
        }}>
          <strong>Note:</strong> {provider.brandsNote}
        </div>
      )}

      {renderActionButtons()}

      {showEnhanced && provider.brandsProof?.length > 0 && (
        <div style={{ marginTop: '15px', padding: '8px', background: '#f8f9fa', borderRadius: '6px' }}>
          <small style={{ color: '#6c757d' }}>
            <strong>Brand Information Sources:</strong>{' '}
            {provider.brandsProof.map((url, i) => {
              let label = 'Provider Website';
              try { label = new URL(url).hostname.replace(/^www\./, ''); } catch {}
              return (
                <span key={`${url}-${i}`}>
                  {i > 0 && ', '}
                  <a href={url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: '#667eea' }}>
                    {label}
                  </a>
                </span>
              );
            })}
          </small>
        </div>
      )}

      <div style={{
        marginTop: '15px',
        padding: '10px',
        background: 'rgba(40, 167, 69, 0.1)',
        borderRadius: '6px',
        textAlign: 'center'
      }}>
        <small style={{ color: '#155724', fontWeight: 'bold' }}>
          🛡️ Information provided for reference only. Verify details directly with the provider.
        </small>
      </div>
    </article>
  );
}

// ---------- styles ----------
const chipStyle = {
  background: '#e9ecef',
  color: '#495057',
  padding: '2px 8px',
  borderRadius: '12px',
  fontSize: '0.75rem'
};

function primaryBtnStyle(c1, c2) {
  return {
    background: `linear-gradient(135deg, ${c1}, ${c2})`,
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    minWidth: 160
  };
}
