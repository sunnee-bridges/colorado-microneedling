import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = "Colorado's ONLY 100% Verified Medical Professional Lip Filler Directory" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Colorado's ONLY 100% verified medical professional lip filler directory. Every provider individually credential-verified. Licensed RNs, NPs, and MDs only. Hospital-grade standards guaranteed." />
        <meta name="keywords" content="verified lip fillers Colorado, licensed medical professionals, RN injectors Colorado, board certified lip fillers, hospital grade standards" />
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
                ✅ 100% VERIFIED MEDICAL PROFESSIONALS
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
              <div style={{ fontWeight: 'bold' }}>Colorado's ONLY</div>
              <div>100% Verified Directory</div>
            </div>
          </div>
          
          {/* UPDATED NAVIGATION - Now includes all verification pages */}
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

              {/* Verification Dropdown or Separate Links */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
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
                  ✅ Verification ▼
                </span>
                
                {/* Dropdown Menu - CSS hover effect needed */}
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
                  display: 'none', // Will be shown on hover with CSS
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
                    📋 Our Verification Process
                  </Link>
                  <Link href="/why-verification-matters" style={{
                    display: 'block',
                    padding: '8px 15px',
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    ⚠️ Why Verification Matters
                  </Link>
                  <Link href="/verified-vs-unverified" style={{
                    display: 'block',
                    padding: '8px 15px',
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    ⚖️ Verified vs Unverified
                  </Link>
                  <Link href="/hospital-grade-standards" style={{
                    display: 'block',
                    padding: '8px 15px',
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>
                    🏥 Hospital-Grade Standards
                  </Link>
                </div>
              </div>

              {/* OR Simple Separate Links (Alternative approach) */}
              <Link href="/verification" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(40, 167, 69, 0.3)',
                border: '1px solid rgba(255,255,255,0.4)',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                📋 Verification
              </Link>

              <Link href="/why-verification-matters" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(40, 167, 69, 0.2)',
                fontSize: '0.85rem'
              }}>
                ⚠️ Why Verify
              </Link>

              {/* Other Pages */}
              <Link href="/before-after" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem'
              }}>
                📸 Verified Results
              </Link>

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
            </div>
          </nav>
        </div>
      </header>
      
      {/* ADD CSS for dropdown hover effect */}
      <style jsx>{`
        .verification-dropdown {
          display: none;
        }
        .verification-dropdown:hover,
        div:hover .verification-dropdown {
          display: block !important;
        }
        nav div:hover .verification-dropdown {
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
              🛡️ The Colorado Verification Promise
            </h3>
            <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
              <strong>100% Licensed Medical Professionals.</strong> Every provider individually credential-verified.
              <br />
              While other directories list anyone who pays, we maintain hospital-grade standards.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px', 
              marginTop: '15px',
              flexWrap: 'wrap'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                ✅ Colorado Medical Board Verified
              </span>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                ✅ Educational Background Confirmed
              </span>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                ✅ Zero Unlicensed Injectors
              </span>
            </div>
          </div>

          {/* UPDATED Footer links - now includes verification pages */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px',
            marginBottom: '20px'
          }}>
            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Verified Cities</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/providers/denver" style={{ color: '#667eea', textDecoration: 'none' }}>
                    ✅ Denver (4 Verified Providers)
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/providers/boulder" style={{ color: '#667eea', textDecoration: 'none' }}>
                    ✅ Boulder (3 Verified Providers)
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/providers/colorado-springs" style={{ color: '#667eea', textDecoration: 'none' }}>
                    ✅ Colorado Springs (5 Verified Providers)
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/providers/fort-collins" style={{ color: '#667eea', textDecoration: 'none' }}>
                    ✅ Fort Collins (3 Verified Providers)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Verification Info</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/verification" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    📋 Our Verification Process
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/why-verification-matters" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ⚠️ Why Verification Matters
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/verified-vs-unverified" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ⚖️ Verified vs Unverified
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/hospital-grade-standards" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    🏥 Hospital-Grade Standards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Quality Standards</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#666', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '5px' }}>🏥 Licensed RNs, NPs, PAs & MDs Only</li>
                <li style={{ marginBottom: '5px' }}>🎓 University-Educated Professionals</li>
                <li style={{ marginBottom: '5px' }}>⭐ National Trainer Network</li>
                <li style={{ marginBottom: '5px' }}>🛡️ Hospital-Grade Standards</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Why Choose Us</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#666', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '5px' }}>🚫 No Unlicensed Practitioners</li>
                <li style={{ marginBottom: '5px' }}>✅ Individual Credential Checks</li>
                <li style={{ marginBottom: '5px' }}>🔍 Annual Re-verification</li>
                <li style={{ marginBottom: '5px' }}>📋 Transparent Standards</li>
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
              <strong>Colorado's Premier 100% Verified Medical Professional Directory</strong>
              <br />
              Committed to maintaining hospital-grade standards through individual credential verification of every listed provider.
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
              🏆 FIRST & ONLY 100% VERIFIED DIRECTORY IN COLORADO
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}