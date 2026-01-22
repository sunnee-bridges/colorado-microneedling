import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
const defaultDesc =
  'Colorado lip filler directory featuring provider options. Find RNs, NPs, and MDs for lip enhancement. We encourage independent credential verification.';
const defaultOgImage = `${siteUrl}/og/default-og.jpg`;

export default function Layout({ children, title = "Colorado Lip Filler Provider Directory",
// Optional per-page overrides:
  metaDescription,
  canonical,          // pass to override canonical for special pages
  noindex = false,    // e.g., pass true from /contact/thanks, 404, etc.
  ogTitle,
  ogDescription,
  ogImage }) {
   const router = useRouter();
  const cleanPath = router.asPath?.split('#')[0]?.split('?')[0] || '/';
  const url = `${siteUrl}${cleanPath}`;
  const pathname = cleanPath;

  const desc = metaDescription || defaultDesc;
  const ogT = ogTitle || title;
  const ogD = ogDescription || desc;
  const ogI = ogImage || defaultOgImage;

  return (
    <>
      <Head>
        {/* Title */}
        <title>{title}</title>

        {/* Canonical + Robots */}
        <link rel="canonical" href={canonical || url} />
        <meta
          name="robots"
          content={
            noindex
              ? 'noindex, nofollow'
              : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          }
        />

        {/* Meta basics */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Only one description per page; use as fallback */}
        {!metaDescription && <meta name="description" content={defaultDesc} />}
        {/* Remove keywords: largely ignored by modern search engines */}

        {/* Hreflang (single locale example) */}
        <link rel="alternate" hrefLang="en-US" href={url} />

        {/* Favicons (example) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="android-chrome-512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Twitter defaults */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Colorado Lip Fillers Directory" />
        <meta property="og:title" content={ogT} />
        <meta property="og:description" content={ogD} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogI} />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogT} />
        <meta name="twitter:description" content={ogD} />
        <meta name="twitter:image" content={ogI} />

        {/* JSON-LD: WebSite + Organization (+ optional SiteNavigationElement) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Colorado Lip Fillers Directory',
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Colorado Lip Fillers Directory',
              url: siteUrl,
              logo: `${siteUrl}/logo.svg`,
              areaServed: 'US-CO',
              sameAs: [
                // add your real profiles; leave empty array if none
              ]
            })
          }}
        />
        {/* Optional: SiteNavigationElement for top nav */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'SiteNavigationElement',
                name: 'Guides',
                url: `${siteUrl}/guides`
              },
              { '@context': 'https://schema.org', '@type': 'SiteNavigationElement', name: 'Shapes', url: `${siteUrl}/shapes` },
              { '@context': 'https://schema.org', '@type': 'SiteNavigationElement', name: 'FAQ', url: `${siteUrl}/lip-filler-faq` },
              { '@context': 'https://schema.org', '@type': 'SiteNavigationElement', name: 'About', url: `${siteUrl}/about` },
              { '@context': 'https://schema.org', '@type': 'SiteNavigationElement', name: 'Contact', url: `${siteUrl}/contact` }
            ])
          }}
        />
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
                Colorado Lip Fillers Directory
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
                PROVIDER DIRECTORY
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
              <div style={{ fontWeight: 'bold' }}>Provider Options</div>
              <div>Research Resources</div>
            </div>
          </div>
          
          {/* UPDATED NAVIGATION - Added Guides Dropdown */}
          <nav style={{ marginTop: '15px' }}>
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              {/* Main Navigation */}
              <Link href="/" className="nav-link" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: pathname === '/' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}>
                Home
              </Link>

              {/* Guides Dropdown */}
              <div style={{ position: 'relative', display: 'inline-block' }} className="guides-container">
                <span className="nav-link dropdown-toggle" style={{
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '15px',
                  background: ['/lipfiller101', '/guides/lip-filler-vs-lip-flip', '/guides/recovery-timeline', '/guides/cost-breakdown'].includes(pathname) 
                    ? 'rgba(255,255,255,0.3)' 
                    : 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-block'
                }}>
                  Educational Guides ▼
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
                  minWidth: '240px',
                  zIndex: 1000,
                  display: 'none',
                  marginTop: '2px'
                }} className="guides-dropdown">
                  <Link href="/quiz" className="dropdown-link" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: pathname === '/quiz' ? '#28a745' : '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0',
                    background: pathname === '/quiz' ? '#f8f9fa' : 'transparent',
                    fontWeight: pathname === '/quiz' ? 'bold' : 'normal'
                  }}>
                    Lip Shape Finder Quiz
                  </Link>
                  <Link href="/guides/lip-filler-101" className="dropdown-link" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: pathname === '/lipfiller101' ? '#28a745' : '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0',
                    background: pathname === 'guides/lip-filler-101' ? '#f8f9fa' : 'transparent',
                    fontWeight: pathname === '/guides/lip-filler-101' ? 'bold' : 'normal'
                  }}>
                    Lip Filler 101: Complete Guide
                  </Link>
                  <Link href="/guides/lip-filler-vs-lip-flip" className="dropdown-link" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: pathname === '/guides/lip-filler-vs-lip-flip' ? '#28a745' : '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0',
                    background: pathname === '/guides/lip-filler-vs-lip-flip' ? '#f8f9fa' : 'transparent',
                    fontWeight: pathname === '/guides/lip-filler-vs-lip-flip' ? 'bold' : 'normal'
                  }}>
                    Lip Filler vs Lip Flip
                  </Link>
                  <Link href="/guides/lip-filler-recovery-timeline" className="dropdown-link" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: pathname === '/guides/lip-filler-recovery-timeline' ? '#28a745' : '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid #f0f0f0',
                    background: pathname === '/guides/lip-filler-recovery-timeline' ? '#f8f9fa' : 'transparent',
                    fontWeight: pathname === '/guides/lip-filler-recovery-timeline' ? 'bold' : 'normal'
                  }}>
                    Recovery Timeline Guide
                  </Link>
                  <Link href="/guides/lip-filler-cost-pricing" className="dropdown-link" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: pathname === '/guides/lip-filler-cost-pricing' ? '#28a745' : '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    background: pathname === '/guides/lip-filler-cost-pricing' ? '#f8f9fa' : 'transparent',
                    fontWeight: pathname === '/guides/lip-filler-cost-pricing' ? 'bold' : 'normal'
                  }}>
                    Cost Breakdown Guide
                  </Link>
                  <Link href="/guides/cannula-vs-needle" className="dropdown-link" style={{
                    display: 'block',
                    padding: '10px 15px',
                    color: pathname === '/guides/cannula-vs-needle' ? '#28a745' : '#333',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    background: pathname === '/guides/cannula-vs-needle' ? '#f8f9fa' : 'transparent',
                    fontWeight: pathname === '/guides/cannula-vs-needle' ? 'bold' : 'normal'
                  }}>
                    Cannula vs Needle
                  </Link>
                </div>
              </div>

             

              <Link href="/shapes" className="nav-link" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: pathname === '/shapes' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}>
                Shapes
              </Link>

              <Link href="/lip-filler-faq" className="nav-link" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: pathname === '/lip-filler-faq' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}>
                FAQ
              </Link>

              <Link href="/about" className="nav-link" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: pathname === '/about' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}>
                About
              </Link>

              <Link href="/contact" className="nav-link" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '15px',
                background: pathname === '/contact' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}>
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
      
    {/* CSS for dropdown hover effect and navigation states */}
<style jsx>{`
  .guides-dropdown {
    display: none;
  }
  .guides-container:hover .guides-dropdown {
    display: block !important;
  }
  
  .guides-container {
    position: relative;
  }
  
  .guides-container::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 5px;
    background: transparent;
    z-index: 999;
  }
  
  .guides-container:hover::after {
    display: block;
  }
`}</style>

{/* Global CSS for hover effects */}
<style jsx global>{`
  .nav-link:hover {
    background: rgba(255,255,255,0.25) !important;
    transform: translateY(-1px);
  }
  .dropdown-toggle:hover {
    background: rgba(255,255,255,0.25) !important;
  }
  .dropdown-link:hover {
    background: #e9ecef !important;
    color: #28a745 !important;
  }
  
  .guides-container:hover .guides-dropdown {
    display: block !important;
  }
  
  .guides-dropdown {
    transition: opacity 0.1s ease;
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
              Our Directory Approach
            </h3>
            <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
              <strong>We aim to help you research potential providers.</strong> We encourage you to independently verify all provider information and credentials before making any decisions. Our focus is on helping you understand what questions to ask during your research process.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px', 
              marginTop: '15px',
              flexWrap: 'wrap'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                Research Guidance
              </span>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                Question-Focused Resources
              </span>
              <span style={{ fontSize: '0.8rem', color: '#28a745' }}>
                Patient Education Support
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
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Educational Guides</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/guides/lip-filler-101" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Lip Filler 101: Complete Guide
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/guides/lip-filler-vs-lip-flip" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Lip Filler vs Lip Flip
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/guides/lip-filler-cost-pricing" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Cost Breakdown
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/guides/lip-filler-recovery-timeline" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Recovery Timeline
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/guides/cannula-vs-needle" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Cannula vs Needle
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/shapes" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Lip Filler Shapes Guide
                  </Link>
                </li>
              </ul>
            </div>


            <div>
              <h4 style={{ color: '#333', marginBottom: '15px' }}>Legal & Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/terms" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Terms & Conditions
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/privacy" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Privacy Policy
                  </Link>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <a href="https://www.colorado.gov/dora" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Verify Credentials (DORA)
                  </a>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <Link href="/contact" style={{ color: '#667eea', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Contact Us
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
              <strong>Colorado Provider Directory</strong>
              <br />
              Helping you research provider options and understand what questions to ask about credentials.
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
              COLORADO PROVIDER DIRECTORY
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}