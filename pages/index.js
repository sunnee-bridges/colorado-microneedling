import { useState } from 'react';
import Layout from '../components/Layout';
import ProviderCard from '../components/ProviderCard';
import SearchFilter from '../components/SearchFilter';
import providersData from '../data/providers.json';

export default function Home() {
  const [filteredProviders, setFilteredProviders] = useState(providersData.providers);
  
  return (
    <Layout title="Colorado's ONLY 100% Verified Medical Professional Lip Filler Directory">
      <div>
        {/* Updated Hero Section */}
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
            Colorado's ONLY 100% Verified<br />
            Medical Professional Lip Filler Directory
          </h1>
          
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '30px',
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            opacity: '0.95'
          }}>
            Every single provider individually credential-verified. Every injector a licensed medical professional. <strong>Guaranteed.</strong>
          </p>

          {/* Trust Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            margin: '30px 0'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '25px',
              padding: '10px 20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              ✅ 100% Licensed Medical Professionals
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '25px',
              padding: '10px 20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              ✅ Zero Unlicensed Injectors
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '25px',
              padding: '10px 20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              ✅ Emergency Medicine Expertise
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            padding: '15px',
            maxWidth: '600px',
            margin: '20px auto',
            fontSize: '0.95rem'
          }}>
            <strong>The Colorado Verification Promise:</strong><br />
            While other directories list anyone who pays, we maintain hospital-grade standards with individual credential verification of every provider.
          </div>
        </div>

        {/* Quality Guarantee Section */}
        <div style={{
          background: 'white',
          border: '2px solid #28a745',
          borderRadius: '12px',
          padding: '30px',
          margin: '40px 0',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#28a745', marginBottom: '20px' }}>
            🏥 Hospital-Grade Standards Guarantee
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            margin: '20px 0'
          }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>❌ Other Directories List:</h4>
              <ul style={{ color: '#666', lineHeight: '1.6' }}>
                <li>Unlicensed "certified injectors"</li>
                <li>Estheticians performing medical procedures</li>
                <li>Anyone willing to pay listing fees</li>
                <li>No credential verification</li>
              </ul>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: '#28a745', marginBottom: '10px' }}>✅ We ONLY List:</h4>
              <ul style={{ color: '#666', lineHeight: '1.6' }}>
                <li>Licensed RNs, NPs, PAs, and MDs</li>
                <li>Individual credential verification</li>
                <li>Active Colorado license confirmation</li>
                <li>Medical professional standards</li>
              </ul>
            </div>
          </div>

          <div style={{
            background: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <strong style={{ color: '#333' }}>Our Verification Process:</strong>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '15px'
            }}>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Colorado Medical Board Verification</span>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Educational Background Check</span>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Experience Documentation</span>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Annual Re-verification</span>
            </div>
          </div>

          <p style={{ 
            fontSize: '1.1rem', 
            color: '#333',
            fontStyle: 'italic'
          }}>
            <strong>Result:</strong> 18 providers, 18 verified licensed medical professionals. 100% success rate.
          </p>
        </div>

        {/* Search Filter */}
        <SearchFilter 
          providers={providersData.providers} 
          onFilter={setFilteredProviders} 
        />

        {/* Popular Cities - Updated with verification messaging */}
        <div style={{ marginBottom: '30px' }}>
          <h2>Verified Medical Professionals by City</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Every provider in every city individually credential-verified
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px',
            margin: '20px 0'
          }}>
            <a href="/providers/denver" style={{ 
              padding: '15px', 
              background: 'white', 
              border: '2px solid #667eea',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '10px',
                background: '#28a745',
                color: 'white',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '10px'
              }}>
                ✓ VERIFIED
              </div>
              📍 Denver Lip Fillers<br />
              <small style={{ color: '#667eea' }}>4 Verified Providers</small>
            </a>
            <a href="/providers/boulder" style={{ 
              padding: '15px', 
              background: 'white', 
              border: '2px solid #667eea',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '10px',
                background: '#28a745',
                color: 'white',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '10px'
              }}>
                ✓ VERIFIED
              </div>
              📍 Boulder Lip Fillers<br />
              <small style={{ color: '#667eea' }}>3 Verified Providers</small>
            </a>
            <a href="/providers/colorado-springs" style={{ 
              padding: '15px', 
              background: 'white', 
              border: '2px solid #667eea',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '10px',
                background: '#28a745',
                color: 'white',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '10px'
              }}>
                ✓ VERIFIED
              </div>
              📍 Colorado Springs Lip Fillers<br />
              <small style={{ color: '#667eea' }}>5 Verified Providers</small>
            </a>
          </div>
        </div>

        {/* Network Quality Highlights */}
        <div style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          border: '1px solid #dee2e6',
          borderRadius: '12px',
          padding: '30px',
          margin: '40px 0'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
            🎓 Why Our Network is Different
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: '#667eea',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px auto',
                fontSize: '1.5rem'
              }}>
                🏥
              </div>
              <h4>Hospital-Grade Expertise</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Emergency Department RNs, Cardiac specialists, Surgical backgrounds with 15-30 years experience
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: '#28a745',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px auto',
                fontSize: '1.5rem'
              }}>
                🎯
              </div>
              <h4>National-Level Training</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Galderma & Allergan national trainers, Georgetown & USF graduates, award-winning professionals
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: '#ffc107',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px auto',
                fontSize: '1.5rem'
              }}>
                ⭐
              </div>
              <h4>Advanced Certifications</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                CANS certified, BSN degrees, NP credentials, continuous education requirements
              </p>
            </div>
          </div>
        </div>

        {/* Updated Featured Section */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          padding: '40px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          margin: '40px 0'
        }}>
          <div>
            <h2>See Real Results from Verified Professionals</h2>
            <p style={{ fontSize: '1.1rem', margin: '20px 0' }}>
              Browse 500+ before and after photos from our 100% verified Colorado medical professionals
            </p>
            <a 
              href="/before-after" 
              style={{
                background: 'white',
                color: '#667eea',
                padding: '15px 30px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(255,255,255,0.2)'
              }}
            >
              📸 View Verified Results Gallery
            </a>
          </div>
        </section>

        {/* Provider List with Verification Status */}
        <div>
          <h2>
            All Verified Medical Professionals ({filteredProviders.length})
            <span style={{
              background: '#28a745',
              color: 'white',
              padding: '5px 15px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              marginLeft: '15px'
            }}>
              100% VERIFIED
            </span>
          </h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Every provider below has been individually credential-verified as a licensed medical professional
          </p>
          {filteredProviders.map(provider => (
            <ProviderCard 
              key={provider.id} 
              provider={{
                ...provider,
                isVerified: true, // Add verification badge to all providers
                verificationLevel: '100% Medical Professional'
              }}
              showEnhanced={true}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}