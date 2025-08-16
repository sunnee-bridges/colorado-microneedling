import { useState } from 'react';
import Layout from '../components/Layout';
import ProviderCard from '../components/ProviderCard';
import SearchFilter from '../components/SearchFilter';
import providersData from '../data/providers.json';

export default function Home() {
  const [filteredProviders, setFilteredProviders] = useState(providersData.providers);
  
  return (
    <Layout title="Colorado Licensed Medical Professional Lip Filler Directory">
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
            Colorado Licensed Medical Professional<br />
            Lip Filler Directory
          </h1>
          
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '30px',
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            opacity: '0.95'
          }}>
            We strive to feature licensed medical professionals. <strong>Always verify credentials independently.</strong>
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
              ✅ Quality-Focused Listings
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
              ✅ Licensed Professional Focus
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
              ✅ Educational Resources
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
            <strong>Our Quality Focus:</strong><br />
            We make every effort to feature licensed medical professionals. We encourage patients to independently verify all provider credentials before scheduling treatments.
          </div>
        </div>

        {/* Important Disclaimer Section */}
        <div style={{
          background: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '12px',
          padding: '25px',
          margin: '20px 0',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#856404', marginBottom: '15px' }}>
            ⚠️ Important: Verify All Provider Credentials
          </h3>
          <p style={{ color: '#856404', margin: '0', lineHeight: '1.6' }}>
            <strong>This directory is for informational purposes only.</strong> While we strive to feature licensed medical professionals, 
            we strongly encourage all patients to independently verify provider credentials, licenses, and qualifications through official state boards 
            before scheduling any treatments. Always consult with qualified healthcare providers for personalized medical advice.
          </p>
        </div>

        {/* Quality Standards Section */}
        <div style={{
          background: 'white',
          border: '2px solid #28a745',
          borderRadius: '12px',
          padding: '30px',
          margin: '40px 0',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#28a745', marginBottom: '20px' }}>
            🏥 Our Quality Standards Approach
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            margin: '20px 0'
          }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>⚠️ What to Watch For:</h4>
              <ul style={{ color: '#666', lineHeight: '1.6' }}>
                <li>Unlicensed "certified injectors"</li>
                <li>Estheticians performing medical procedures</li>
                <li>Lack of proper medical credentials</li>
                <li>Inability to provide license verification</li>
              </ul>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: '#28a745', marginBottom: '10px' }}>✅ What We Strive to Feature:</h4>
              <ul style={{ color: '#666', lineHeight: '1.6' }}>
                <li>Licensed RNs, NPs, PAs, and MDs</li>
                <li>Medical professional backgrounds</li>
                <li>Quality-focused practices</li>
                <li>Transparent credential information</li>
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
            <strong style={{ color: '#333' }}>How to Verify Providers:</strong>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '15px'
            }}>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Check Colorado Medical Board</span>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Verify Nursing License</span>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Ask About Training</span>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Review Credentials</span>
            </div>
          </div>

          <p style={{ 
            fontSize: '1.1rem', 
            color: '#333',
            fontStyle: 'italic'
          }}>
            <strong>Remember:</strong> You are responsible for verifying provider credentials. Always research thoroughly before treatment.
          </p>
        </div>

        {/* Search Filter */}
        <SearchFilter 
          providers={providersData.providers} 
          onFilter={setFilteredProviders} 
        />

        {/* Popular Cities - Updated with safer messaging */}
        <div style={{ marginBottom: '30px' }}>
          <h2>Featured Providers by City</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Browse providers by location. Remember to verify all credentials independently.
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
                background: '#17a2b8',
                color: 'white',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '10px'
              }}>
                FEATURED
              </div>
              📍 Denver Lip Fillers<br />
              <small style={{ color: '#667eea' }}>4 Featured Providers</small>
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
                background: '#17a2b8',
                color: 'white',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '10px'
              }}>
                FEATURED
              </div>
              📍 Boulder Lip Fillers<br />
              <small style={{ color: '#667eea' }}>3 Featured Providers</small>
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
                background: '#17a2b8',
                color: 'white',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '10px'
              }}>
                FEATURED
              </div>
              📍 Colorado Springs Lip Fillers<br />
              <small style={{ color: '#667eea' }}>5 Featured Providers</small>
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
            🎓 What to Look for in Quality Providers
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
              <h4>Medical Background</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Look for providers with nursing, medical, or healthcare backgrounds with relevant experience
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
              <h4>Proper Training</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Seek providers with formal aesthetic training from reputable institutions and ongoing education
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
              <h4>Valid Credentials</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Always verify current licenses and certifications through official state boards
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
            <h2>Educational Resources & Results Gallery</h2>
            <p style={{ fontSize: '1.1rem', margin: '20px 0' }}>
              Browse educational content and before/after photos to help inform your decisions
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
              📸 View Educational Gallery
            </a>
          </div>
        </section>

        {/* Provider List with Updated Language */}
        <div>
          <h2>
            Featured Medical Professionals ({filteredProviders.length})
            <span style={{
              background: '#17a2b8',
              color: 'white',
              padding: '5px 15px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              marginLeft: '15px'
            }}>
              QUALITY FOCUSED
            </span>
          </h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            The providers below represent our quality-focused approach. Please independently verify all credentials before scheduling treatments.
          </p>
          
          {/* Additional Verification Reminder */}
          <div style={{
            background: '#e3f2fd',
            border: '1px solid #2196f3',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '20px'
          }}>
            <p style={{ color: '#1976d2', margin: '0', fontSize: '0.9rem' }}>
              <strong>📋 Verification Reminder:</strong> Before booking any treatment, independently verify provider licenses through the 
              <a href="https://www.colorado.gov/dora" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', marginLeft: '5px' }}>
                Colorado Department of Regulatory Agencies (DORA)
              </a> and consult with the provider about their qualifications.
            </p>
          </div>

          {filteredProviders.map(provider => (
            <ProviderCard 
              key={provider.id} 
              provider={{
                ...provider,
                isFeatured: true,
                qualityFocus: 'Licensed Professional Focus'
              }}
              showEnhanced={true}
            />
          ))}
        </div>

        {/* Legal Disclaimer Footer */}
        <div style={{
          background: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '25px',
          margin: '40px 0',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#495057', marginBottom: '15px' }}>Important Legal Disclaimer</h4>
          <p style={{ 
            color: '#6c757d', 
            fontSize: '0.9rem', 
            lineHeight: '1.6',
            margin: '0',
            fontStyle: 'italic'
          }}>
            <strong>This directory is for informational and educational purposes only.</strong> We make no warranties or guarantees 
            about provider qualifications, treatment outcomes, or safety. All information is provided "as is" without any representations 
            or warranties of any kind. Users are solely responsible for verifying provider credentials, conducting their own research, 
            and making informed healthcare decisions. Always consult with qualified healthcare providers for personalized medical advice. 
            By using this directory, you acknowledge that you understand these limitations and agree to independently verify all information.
          </p>
        </div>
      </div>
    </Layout>
  );
}