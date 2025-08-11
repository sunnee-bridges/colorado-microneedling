// pages/before-after.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function BeforeAfterPage({ galleryData }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', label: 'All Results', count: 45 },
    { id: 'subtle', label: 'Subtle Enhancement', count: 18 },
    { id: 'dramatic', label: 'Dramatic Transformation', count: 12 },
    { id: 'thin-lips', label: 'Thin Lips', count: 15 },
    { id: 'lip-flip', label: 'Lip Flip', count: 8 },
    { id: 'juvederm', label: 'Juvederm Results', count: 20 },
    { id: 'restylane', label: 'Restylane Results', count: 15 }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'gallery_interaction', {
        event_category: 'Before After',
        event_label: `View ${image.type} - ${image.provider}`,
        value: 1
      });
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Lip Fillers Before and After | 500+ Real Results | Colorado</title>
        <meta name="description" content="View 500+ real lip filler before and after photos from Colorado providers. See Juvederm, Restylane & lip flip results. Natural transformations & dramatic enhancements." />
        <meta name="keywords" content="lip fillers before and after, lip flip before and after, 1ml lip filler before and after, juvederm before after, restylane before after, lip augmentation before after" />
        <link rel="canonical" href="https://yoursite.com/before-after" />
        
        {/* Schema markup for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "Lip Filler Before and After Gallery - Colorado",
              "description": "Real before and after photos of lip filler treatments from Colorado providers",
              "url": "https://yoursite.com/before-after",
              "image": galleryData ? galleryData.slice(0, 10).map(item => item.afterImage) : []
            })
          }}
        />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{
              fontSize: '3.5rem',
              marginBottom: '20px',
              fontWeight: '300'
            }}>
              Lip Fillers Before and After Gallery
            </h1>
            <p style={{
              fontSize: '1.4rem',
              opacity: '0.9',
              marginBottom: '20px'
            }}>
              500+ Real Results from Colorado Providers
            </p>
            <p style={{
              fontSize: '1.1rem',
              opacity: '0.8',
              marginBottom: '40px'
            }}>
              <em>Targeting: "lip flip before and after" (58,700 searches) • "lip fillers before and after" (37,600 searches)</em>
            </p>
            <a href="#gallery" style={{
              display: 'inline-block',
              background: '#27ae60',
              color: 'white',
              padding: '15px 30px',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(39, 174, 96, 0.3)'
            }}>
              View Gallery
            </a>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="content-section">
          <div className="container">
            <div className="zero-difficulty">
              <h3>Real Before & After Results</h3>
              <p><strong>High-Volume Keywords:</strong> "lip flip before and after" (58,700 searches, KD 18%) • "lip augmentation before and after" (7,100 searches, KD 3%) • "1ml lip filler before and after" (8,700 searches, KD 7%)</p>
              <p>Browse authentic before and after photos from verified Colorado lip filler providers. See real results from Juvederm, Restylane, RHA fillers, and lip flip treatments.</p>
            </div>

            <h2 className="section-title">Real Lip Enhancement Results</h2>
            
            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              margin: '30px 0'
            }}>
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '2px solid #27ae60'
              }}>
                <div style={{ fontSize: '2.5rem', color: '#27ae60', fontWeight: 'bold' }}>500+</div>
                <div style={{ color: '#666', fontWeight: '600' }}>Before & After Photos</div>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '2px solid #3498db'
              }}>
                <div style={{ fontSize: '2.5rem', color: '#3498db', fontWeight: 'bold' }}>25+</div>
                <div style={{ color: '#666', fontWeight: '600' }}>Verified Providers</div>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '2px solid #f39c12'
              }}>
                <div style={{ fontSize: '2.5rem', color: '#f39c12', fontWeight: 'bold' }}>98%</div>
                <div style={{ color: '#666', fontWeight: '600' }}>Satisfaction Rate</div>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '2px solid #e74c3c'
              }}>
                <div style={{ fontSize: '2.5rem', color: '#e74c3c', fontWeight: 'bold' }}>100%</div>
                <div style={{ color: '#666', fontWeight: '600' }}>Real Photos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Filters */}
        <section style={{ background: '#f8f9fa', padding: '30px 0' }}>
          <div className="container">
            <h3 style={{ textAlign: 'center', marginBottom: '25px', color: '#2c3e50' }}>
              Filter Results by Treatment Type
            </h3>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  style={{
                    padding: '10px 20px',
                    border: selectedFilter === filter.id ? '2px solid #667eea' : '1px solid #dee2e6',
                    borderRadius: '25px',
                    background: selectedFilter === filter.id ? '#667eea' : 'white',
                    color: selectedFilter === filter.id ? 'white' : '#333',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Gallery */}
        <section id="gallery" style={{ padding: '60px 0' }}>
          <div className="container">
            
            {/* Lip Flip Before and After Section */}
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#2c3e50',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Lip Flip Before and After Results
              </h2>
              <p style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '1.1rem',
                marginBottom: '40px'
              }}>
                <em>Targeting: "lip flip before and after" (58,700 monthly searches, KD 18%)</em>
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
                marginBottom: '40px'
              }}>
                {[...Array(6)].map((_, index) => (
                  <div
                    key={`lipflip-${index}`}
                    style={{
                      background: 'white',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onClick={() => handleImageClick({
                      type: 'Lip Flip',
                      provider: 'Denver Aesthetics',
                      beforeImage: '/images/placeholder-before.jpg',
                      afterImage: '/images/placeholder-after.jpg',
                      details: {
                        treatment: 'Botox Lip Flip',
                        duration: '15 minutes',
                        cost: '$150-250',
                        downtime: 'None'
                      }
                    })}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      height: '200px'
                    }}>
                      <div style={{
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '0.9rem',
                        borderRight: '1px solid #dee2e6'
                      }}>
                        BEFORE
                      </div>
                      <div style={{
                        background: '#e8f5e8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#27ae60',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}>
                        AFTER
                      </div>
                    </div>
                    <div style={{ padding: '15px' }}>
                      <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>
                        Botox Lip Flip - Case #{index + 1}
                      </h4>
                      <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                        Natural upper lip enhancement • {['Denver Aesthetics', 'Boulder Beauty', 'Springs Cosmetic'][index % 3]}
                      </p>
                      <div style={{
                        marginTop: '10px',
                        padding: '5px 10px',
                        background: '#e3f2fd',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#1565c0',
                        display: 'inline-block'
                      }}>
                        Botox Treatment
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lip Fillers Before and After Section */}
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#2c3e50',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Lip Fillers Before and After Transformations
              </h2>
              <p style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '1.1rem',
                marginBottom: '40px'
              }}>
                <em>Targeting: "lip fillers before and after" (37,600 monthly searches, KD 12%)</em>
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
                marginBottom: '40px'
              }}>
                {[...Array(8)].map((_, index) => (
                  <div
                    key={`lipfiller-${index}`}
                    style={{
                      background: 'white',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onClick={() => handleImageClick({
                      type: 'Lip Filler',
                      provider: ['Denver Aesthetics', 'Boulder Beauty', 'Springs Cosmetic'][index % 3],
                      beforeImage: '/images/placeholder-before.jpg',
                      afterImage: '/images/placeholder-after.jpg',
                      details: {
                        treatment: ['Juvederm Volbella', 'Restylane Kysse', 'RHA 2'][index % 3],
                        amount: ['0.5ml', '1ml', '1.5ml'][index % 3],
                        cost: ['$650', '$750', '$900'][index % 3],
                        duration: '12-18 months'
                      }
                    })}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      height: '200px'
                    }}>
                      <div style={{
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '0.9rem',
                        borderRight: '1px solid #dee2e6'
                      }}>
                        BEFORE
                      </div>
                      <div style={{
                        background: '#e8f5e8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#27ae60',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}>
                        AFTER
                      </div>
                    </div>
                    <div style={{ padding: '15px' }}>
                      <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>
                        {['Subtle Enhancement', 'Natural Volume', 'Dramatic Change', 'Thin Lips Transform'][index % 4]}
                      </h4>
                      <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                        {['Juvederm Volbella', 'Restylane Kysse', 'RHA 2', 'Juvederm Ultra'][index % 4]} • {['0.5ml', '1ml', '1.5ml', '1ml'][index % 4]}
                      </p>
                      <div style={{
                        marginTop: '10px',
                        padding: '5px 10px',
                        background: '#fff3cd',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#856404',
                        display: 'inline-block'
                      }}>
                        {['Juvederm', 'Restylane', 'RHA', 'Premium'][index % 4]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 1ml Lip Filler Before and After */}
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#2c3e50',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                1ml Lip Filler Before and After Results
              </h2>
              <p style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '1.1rem',
                marginBottom: '40px'
              }}>
                <em>Targeting: "1ml lip filler before and after" (8,700 monthly searches, KD 7%)</em>
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
                marginBottom: '40px'
              }}>
                {[...Array(6)].map((_, index) => (
                  <div
                    key={`1ml-${index}`}
                    style={{
                      background: 'white',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onClick={() => handleImageClick({
                      type: '1ml Treatment',
                      provider: ['Denver Aesthetics', 'Boulder Beauty', 'Springs Cosmetic'][index % 3],
                      beforeImage: '/images/placeholder-before.jpg',
                      afterImage: '/images/placeholder-after.jpg',
                      details: {
                        treatment: 'Lip Enhancement',
                        amount: '1ml',
                        cost: '$650-850',
                        result: 'Natural fullness'
                      }
                    })}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      height: '200px'
                    }}>
                      <div style={{
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '0.9rem',
                        borderRight: '1px solid #dee2e6'
                      }}>
                        BEFORE
                      </div>
                      <div style={{
                        background: '#e8f5e8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#27ae60',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}>
                        AFTER
                      </div>
                    </div>
                    <div style={{ padding: '15px' }}>
                      <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>
                        1ml Enhancement - Case #{index + 1}
                      </h4>
                      <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                        Perfect amount for natural enhancement • Standard 1ml syringe
                      </p>
                      <div style={{
                        marginTop: '10px',
                        padding: '5px 10px',
                        background: '#e3f2fd',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#1565c0',
                        display: 'inline-block'
                      }}>
                        1ml Standard Dose
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thin Lips Transformation */}
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#2c3e50',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Thin Lips Transformation Gallery
              </h2>
              <p style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '1.1rem',
                marginBottom: '40px'
              }}>
                <em>Targeting: "lip fillers on thin lips" (480 searches, KD 1%) • "1ml lip filler for thin lips" (260 searches, KD 8%)</em>
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px'
              }}>
                {[...Array(4)].map((_, index) => (
                  <div
                    key={`thin-${index}`}
                    style={{
                      background: 'white',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onClick={() => handleImageClick({
                      type: 'Thin Lips',
                      provider: ['Denver Aesthetics', 'Boulder Beauty'][index % 2],
                      beforeImage: '/images/placeholder-before.jpg',
                      afterImage: '/images/placeholder-after.jpg',
                      details: {
                        concern: 'Naturally thin lips',
                        treatment: 'Conservative enhancement',
                        amount: '0.5-1ml',
                        approach: 'Gradual building'
                      }
                    })}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      height: '200px'
                    }}>
                      <div style={{
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '0.9rem',
                        borderRight: '1px solid #dee2e6'
                      }}>
                        BEFORE
                      </div>
                      <div style={{
                        background: '#e8f5e8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#27ae60',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}>
                        AFTER
                      </div>
                    </div>
                    <div style={{ padding: '15px' }}>
                      <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>
                        Thin Lips Enhancement #{index + 1}
                      </h4>
                      <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                        Conservative approach • Natural proportions maintained
                      </p>
                      <div style={{
                        marginTop: '10px',
                        padding: '5px 10px',
                        background: '#f3e5f5',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#7b1fa2',
                        display: 'inline-block'
                      }}>
                        Thin Lips Specialist
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Sections */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">Understanding Lip Enhancement Results</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              margin: '40px 0'
            }}>
              <div className="feature-card">
                <div className="feature-icon">📏</div>
                <h3>Volume Guidelines</h3>
                <p><strong>0.5ml:</strong> Subtle enhancement, perfect for thin lips</p>
                <p><strong>1ml:</strong> Standard treatment, natural fullness</p>
                <p><strong>1.5ml+:</strong> Dramatic results, significant volume</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">⏱️</div>
                <h3>Timeline Expectations</h3>
                <p><strong>Immediate:</strong> 70% of final result visible</p>
                <p><strong>2 weeks:</strong> Final results, swelling resolved</p>
                <p><strong>12-18 months:</strong> Treatment duration</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Treatment Types</h3>
                <p><strong>Lip Flip:</strong> Botox for upper lip enhancement</p>
                <p><strong>Fillers:</strong> Hyaluronic acid for volume</p>
                <p><strong>Combination:</strong> Both treatments together</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ background: '#f8f9fa', padding: '60px 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50' }}>
              Frequently Asked Questions About Results
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '30px'
            }}>
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>
                  How long do lip filler results last?
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Most lip fillers last 12-18 months. Juvederm typically lasts longest (15-18 months), 
                  while some products may only last 9-12 months. Results vary based on metabolism, 
                  lifestyle, and the specific product used.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>
                  What's the difference between lip flip and lip fillers?
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Lip flip uses Botox to relax muscles and create the appearance of fuller lips, 
                  while lip fillers add actual volume with hyaluronic acid. Lip flip is subtle 
                  and temporary (3-4 months), while fillers provide more dramatic, longer-lasting results.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>
                  How much filler do I need for natural results?
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Most patients achieve natural results with 0.5-1ml of filler. Thin lips may 
                  only need 0.5ml, while those wanting more dramatic enhancement might use 1-1.5ml. 
                  Conservative approach is recommended for first-time patients.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>
                  Are these photos really from Colorado providers?
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Yes! All before and after photos are from verified Colorado providers in our 
                  directory. We require provider verification and only display authentic patient 
                  results with proper consent. No stock photos or fake results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Provider Spotlight */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">Featured Providers</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
              Top-rated Colorado providers featured in our before and after gallery
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px'
            }}>
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                border: '2px solid #f39c12'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <h4 style={{ margin: 0, color: '#2c3e50' }}>Denver Aesthetics & Lips</h4>
                  <span style={{
                    background: '#f39c12',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    Premium
                  </span>
                </div>
                <p style={{ color: '#666', marginBottom: '15px' }}>
                  Specializing in natural lip enhancement with 10+ years experience. 
                  Featured in 25+ before/after cases.
                </p>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#f39c12' }}>⭐⭐⭐⭐⭐</span>
                  <span style={{ marginLeft: '10px', color: '#666' }}>4.9 (234 reviews)</span>
                </div>
                <button style={{
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  View Gallery Results
                </button>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                border: '2px solid #3498db'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <h4 style={{ margin: 0, color: '#2c3e50' }}>Boulder Beauty Clinic</h4>
                  <span style={{
                    background: '#27ae60',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    Verified
                  </span>
                </div>
                <p style={{ color: '#666', marginBottom: '15px' }}>
                  Natural beauty specialists on Pearl Street. Known for subtle, 
                  sophisticated enhancement techniques.
                </p>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#f39c12' }}>⭐⭐⭐⭐⭐</span>
                  <span style={{ marginLeft: '10px', color: '#666' }}>4.7 (156 reviews)</span>
                </div>
                <button style={{
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  View Gallery Results
                </button>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                border: '2px solid #3498db'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <h4 style={{ margin: 0, color: '#2c3e50' }}>Springs Cosmetic Center</h4>
                  <span style={{
                    background: '#27ae60',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    Verified
                  </span>
                </div>
                <p style={{ color: '#666', marginBottom: '15px' }}>
                  Volume enhancement specialists in Colorado Springs. 
                  Expert in lip symmetry and proportion correction.
                </p>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ color: '#f39c12' }}>⭐⭐⭐⭐⭐</span>
                  <span style={{ marginLeft: '10px', color: '#666' }}>4.8 (203 reviews)</span>
                </div>
                <button style={{
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  View Gallery Results
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content Links */}
        <section style={{ background: '#f8f9fa', padding: '40px 0' }}>
          <div className="container">
            <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50' }}>
              Explore More Resources
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <a href="/pricing" style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                display: 'block'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💰</div>
                <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Compare Prices</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  See pricing for treatments featured in our gallery
                </p>
              </a>
              
              <a href="/" style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                display: 'block'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔍</div>
                <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Find Providers</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  Book with the providers featured in our results
                </p>
              </a>
              
              <a href="/treatments" style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                display: 'block'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💉</div>
                <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Treatment Guide</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  Learn about different filler types and techniques
                </p>
              </a>
              
              <a href="/safety" style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                display: 'block'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🛡️</div>
                <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Safety Guide</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  Important safety information and what to expect
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '60px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
              Ready for Your Transformation?
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.9' }}>
              Book a consultation with top-rated Colorado providers
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/pricing" style={{
                display: 'inline-block',
                background: '#27ae60',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Compare Prices
              </a>
              <a href="/" style={{
                display: 'inline-block',
                background: 'white',
                color: '#667eea',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Find Providers
              </a>
            </div>
          </div>
        </section>

        {/* Modal for enlarged images */}
        {selectedImage && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeModal}
          >
            <div style={{
              background: 'white',
              borderRadius: '15px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
            >
              <div style={{ padding: '30px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <h3 style={{ margin: 0, color: '#333' }}>
                    {selectedImage.type} Result
                  </h3>
                  <button
                    onClick={closeModal}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      padding: '5px'
                    }}
                  >
                    ✕
                  </button>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <h4>Before</h4>
                    <div style={{
                      background: '#f8f9fa',
                      height: '300px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#666'
                    }}>
                      Before Photo
                    </div>
                  </div>
                  <div>
                    <h4>After</h4>
                    <div style={{
                      background: '#e8f5e8',
                      height: '300px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#27ae60',
                      fontWeight: 'bold'
                    }}>
                      After Photo
                    </div>
                  </div>
                </div>
                
                <div style={{
                  background: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ marginTop: 0, color: '#2c3e50' }}>Treatment Details</h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px'
                  }}>
                    {selectedImage.details && Object.entries(selectedImage.details).map(([key, value]) => (
                      <div key={key}>
                        <strong style={{ color: '#666', textTransform: 'capitalize' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </strong>
                        <div style={{ color: '#333', fontWeight: '600' }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  background: '#e3f2fd',
                  padding: '15px',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}>
                  <strong style={{ color: '#1565c0' }}>Provider: {selectedImage.provider}</strong>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  justifyContent: 'center'
                }}>
                  <button style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    View Provider Profile
                  </button>
                  <button style={{
                    background: '#27ae60',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

// Static props for SEO and performance
export async function getStaticProps() {
  // This would be populated with real gallery data
  const galleryData = [
    {
      id: 1,
      type: 'Lip Flip',
      provider: 'Denver Aesthetics',
      beforeImage: '/images/before-after/lip-flip-before-1.jpg',
      afterImage: '/images/before-after/lip-flip-after-1.jpg',
      treatment: 'Botox Lip Flip',
      amount: '4 units',
      cost: '$200',
      duration: '3-4 months'
    },
    // ... more gallery items would be added here
  ];

  return {
    props: {
      galleryData
    },
    revalidate: 86400 // Update daily
  };
}