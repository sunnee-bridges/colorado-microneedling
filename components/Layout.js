import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = "Colorado Licensed Medical Professional Lip Filler Directory" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Colorado lip filler directory featuring licensed medical professionals. Find qualified RNs, NPs, and MDs for lip enhancement. We encourage independent credential verification." />
        <meta name="keywords" content="licensed lip fillers Colorado, medical professionals, RN injectors Colorado, qualified lip fillers, medical grade standards" />
      </Head>
      
      <header style={{ 
        padding: '20px', 
        borderBottom: '1px solid #e0e0e0',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '1.8rem' }}>
                💋 Colorado Lip Fillers Directory
              </h1>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '15px',
                padding: '3px 10px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                display: 'inline-block'
              }}>
                ✅ FEATURING LICENSED MEDICAL PROFESSIONALS
              </div>
            </div>
            
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.8rem',
              textAlign: 'right'
            }}>
              <div style={{ fontWeight: 'bold' }}>Quality-Focused</div>
              <div>Licensed Professionals</div>
            </div>
          </div>
          
          {/* UPDATED NAVIGATION - Added Shapes Link */}
          <nav style={{ marginTop: '15px' }}>
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              {/* Main Navigation */}
              <Link href="/" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                🏠 Home
              </Link>

              {/* Verification Dropdown */}
              <div style={{ position: 'relative', display: 'inline-block' }} className="verification-container">
                <span style={{
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '15px',
                  background: 'rgba(40, 167, 69, 0.3)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  ✅ Quality Standards ▼
                </span>
                
                {/* Dropdown Menu */}
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  padding: '10px 0',
                  minWidth: '220px',
                  zIndex: 1000,
                  display: 'none',
                  marginTop: '5px'
                }} className="verification-dropdown">
                  <Link href="/verification" style={{
                    display: 'block',
                    padding: '8px 15px',
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    📋 Our Quality Standards
                  </Link>
                  <Link href="/why-verification-matters" style={{
                    display: 'block',
                    padding: '8px 15px',
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    ⚠️ Why Credentials Matter
                  </Link>
                  <Link href="/verified-vs-unverified" style={{
                    display: 'block',
                    padding: '8px 15px',
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    ⚖️ Licensed vs Unlicensed
                  </Link>
                  <Link href="/hospital-grade-standards" style={{
                    display: 'block',
                    padding: '8px 15px',
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>
                    🏥 Medical Standards
                  </Link>
                </div>
              </div>

              <Link href="/pricing" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem'
              }}>
                💰 Pricing
              </Link>

              {/* ADDED SHAPES LINK */}
              <Link href="/shapes" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem'
              }}>
                💋 Shapes
              </Link>

              <Link href="/lipfillerfaq" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem'
              }}>
                ❓ FAQ
              </Link>

              <Link href="/about" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem'
              }}>
                ℹ️ About
              </Link>

              <Link href="/contact" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem'
              }}>
                📧 Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
      
      {/* CSS for dropdown hover effect */}
      <style jsx>{`
        .verification-dropdown {
          display: none;
        }
        .verification-container:hover .verification-dropdown {
          display: block !important;
        }
      `}</style>
      
      <main style={{ 
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '70vh'
      }}>
        {children}
      </main>
      
      <footer style={{ 
        padding: '40px 20px', 
        borderTop: '1px solid #e0e0e0', 
        marginTop: '40px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Quality guarantee section */}
          <div style={{
            background: 'white',
            border: '2px solid #28a745',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#28a745', margin: '0 0 15px 0' }}>
              🛡️ Our Quality Commitment
            </h3>
            <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
              <strong>We strive to feature licensed medical professionals.</strong> We encourage patients to independently verify all provider credentials.
              <br />
              While other directories list anyone who pays, we focus on quality and safety.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px', 
              marginTop: '15px',
              flexWrap: 'wrap'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                ✅ Licensed Medical Professionals
              </span>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                ✅ Quality-Focused Listings
              </span>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                ✅ Patient Education First
              </span>
            </div>
          </div>

          {/* Footer links */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px',
            marginBottom: '20px'
          }}>
            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Featured Cities</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/providers/denver" style={{ color: '#667eea', textDecoration: 'none' }}>
                    ✅ Denver (Featured Providers)
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/providers/boulder" style={{ color: '#667eea', textDecoration: 'none' }}>
                    ✅ Boulder (Featured Providers)
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/providers/colorado-springs" style={{ color: '#667eea', textDecoration: 'none' }}>
                    ✅ Colorado Springs (Featured Providers)
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/providers/fort-collins" style={{ color: '#667eea', textDecoration: 'none' }}>
                    ✅ Fort Collins (Featured Providers)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Educational Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/faq" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ❓ Lip Filler FAQ
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/shapes" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    💋 Lip Filler Shapes Guide
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/pricing" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    💰 Pricing Information
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/about" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ℹ️ About Our Directory
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Quality Standards</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/verification" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    📋 Our Quality Standards
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/why-verification-matters" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ⚠️ Why Credentials Matter
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/verified-vs-unverified" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ⚖️ Licensed vs Unlicensed
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/hospital-grade-standards" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    🏥 Medical Standards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Legal & Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/terms" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    📄 Terms & Conditions
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/privacy" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    🔒 Privacy Policy
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <a href="https://www.colorado.gov/dora" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    🔍 Verify Credentials (DORA)
                  </a>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/contact" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    📧 Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ 
            textAlign: 'center',
            borderTop: '1px solid #dee2e6',
            paddingTop: '20px'
          }}>
            <p style={{ margin: '0 0 10px 0', color: '#333' }}>
              &copy; 2024 Colorado Lip Fillers Directory
            </p>
            <p style={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              margin: '0',
              fontStyle: 'italic'
            }}>
              <strong>Colorado's Quality-Focused Medical Professional Directory</strong>
              <br />
              Committed to featuring licensed medical professionals and promoting patient education about provider credentials.
            </p>
            <div style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '20px',
              display: 'inline-block',
              marginTop: '10px',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              🏆 QUALITY-FOCUSED COLORADO DIRECTORY
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}