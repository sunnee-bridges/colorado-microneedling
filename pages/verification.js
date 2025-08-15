import Layout from '../components/Layout';

export default function Verification() {
  return (
    <Layout title="Our Verification Process - Colorado's ONLY 100% Verified Medical Professional Directory">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
          color: 'white',
          padding: '40px 30px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
            🛡️ Our Verification Process
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.95', maxWidth: '700px', margin: '0 auto' }}>
            The rigorous standards that make us Colorado's ONLY 100% verified medical professional directory
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '25px',
            padding: '10px 25px',
            display: 'inline-block',
            marginTop: '20px',
            fontWeight: 'bold'
          }}>
            ✅ 18 Providers Verified • 18 Licensed Medical Professionals • 100% Success Rate
          </div>
        </div>

        {/* Why We Verify Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Why We Verify Every Single Provider
          </h2>
          <div style={{
            background: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <p style={{ fontSize: '1.1rem', color: '#8a6d3b', margin: '0', fontStyle: 'italic' }}>
              <strong>"While other directories list anyone willing to pay a fee, we believe your face deserves hospital-grade standards."</strong>
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            margin: '30px 0'
          }}>
            <div style={{
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#dc3545', marginBottom: '15px' }}>❌ The Problem</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li>Unlicensed "certified injectors" performing medical procedures</li>
                <li>Estheticians illegally administering Botox and fillers</li>
                <li>No credential verification by other directories</li>
                <li>Patient safety risks from unqualified practitioners</li>
              </ul>
            </div>

            <div style={{
              background: '#e8f5e8',
              border: '1px solid #28a745',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#28a745', marginBottom: '15px' }}>✅ Our Solution</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li>100% licensed medical professionals only</li>
                <li>Individual credential verification for every provider</li>
                <li>Colorado Medical Board license confirmation</li>
                <li>Hospital-grade safety standards maintained</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our 7-Step Verification Process */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our 7-Step Verification Process
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '30px' }}>
            Every provider must pass all 7 steps before being listed in our directory. No exceptions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                step: 1,
                title: "License Verification",
                description: "Colorado Medical Board or Nursing Board license lookup and confirmation",
                details: "We verify active RN, NP, PA, or MD licenses through official state databases"
              },
              {
                step: 2,
                title: "Educational Background Check",
                description: "Confirmation of nursing or medical school graduation and degrees",
                details: "BSN, MSN, NP, PA, or MD degree verification from accredited institutions"
              },
              {
                step: 3,
                title: "Professional Experience Documentation",
                description: "Years of experience and specialization in aesthetic medicine",
                details: "Minimum experience requirements and aesthetic training verification"
              },
              {
                step: 4,
                title: "Specialty Certification Validation",
                description: "Advanced certifications like CANS, aesthetic training programs",
                details: "National trainer status, advanced injection training, and specialty certifications"
              },
              {
                step: 5,
                title: "Practice Standards Review",
                description: "Medical director oversight and safety protocol confirmation",
                details: "Physician supervision, safety protocols, and professional practice standards"
              },
              {
                step: 6,
                title: "Disciplinary Record Check",
                description: "Review of any disciplinary actions or license restrictions",
                details: "Clean professional record with no serious disciplinary actions"
              },
              {
                step: 7,
                title: "Annual Re-verification",
                description: "Yearly renewal process to maintain verified status",
                details: "License renewal confirmation and continuing education requirements"
              }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                background: 'white',
                border: '2px solid #e9ecef',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  background: '#28a745',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  {item.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#333', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ color: '#666', marginBottom: '10px', fontSize: '1rem' }}>
                    {item.description}
                  </p>
                  <p style={{ color: '#888', fontSize: '0.9rem', fontStyle: 'italic' }}>
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Look For */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Licensed Medical Professionals We Accept
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            margin: '30px 0'
          }}>
            {[
              {
                title: "Registered Nurses (RN)",
                requirements: ["Active Colorado RN license", "BSN degree preferred", "Aesthetic injection training", "Physician supervision"],
                icon: "👩‍⚕️"
              },
              {
                title: "Nurse Practitioners (NP)",
                requirements: ["Active Colorado NP license", "Masters degree required", "Independent practice authority", "Advanced training"],
                icon: "🏥"
              },
              {
                title: "Physician Assistants (PA)",
                requirements: ["Active Colorado PA license", "Masters degree required", "Physician collaboration", "Medical model training"],
                icon: "🩺"
              },
              {
                title: "Medical Doctors (MD/DO)",
                requirements: ["Active Colorado medical license", "Board certification preferred", "Residency completion", "Medical school graduation"],
                icon: "⚕️"
              }
            ].map((category, index) => (
              <div key={index} style={{
                background: 'white',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{category.icon}</div>
                <h4 style={{ color: '#333', marginBottom: '15px' }}>{category.title}</h4>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  {category.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} style={{ marginBottom: '5px' }}>
                      ✅ {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* What We Reject */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#dc3545', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            ❌ What We Do NOT Accept
          </h2>
          
          <div style={{
            background: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <p style={{ color: '#721c24', margin: '0 0 15px 0', fontWeight: 'bold' }}>
              We automatically reject providers who are:
            </p>
            <ul style={{ color: '#721c24', lineHeight: '1.7', margin: 0 }}>
              <li><strong>Unlicensed Practitioners:</strong> "Certified injectors" without medical licenses</li>
              <li><strong>Estheticians:</strong> Cannot legally perform injectable procedures in Colorado</li>
              <li><strong>Uncredentialed Staff:</strong> Medical assistants or unlicensed personnel</li>
              <li><strong>Disciplinary Issues:</strong> Providers with serious license restrictions</li>
              <li><strong>Unverifiable Claims:</strong> Cannot confirm education or experience</li>
            </ul>
          </div>
        </section>

        {/* Our Results */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our Verification Results
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
            border: '2px solid #28a745',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              marginBottom: '20px'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', color: '#28a745', fontWeight: 'bold' }}>18</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Providers Verified</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', color: '#28a745', fontWeight: 'bold' }}>100%</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Success Rate</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', color: '#28a745', fontWeight: 'bold' }}>0</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Unlicensed Injectors</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', color: '#28a745', fontWeight: 'bold' }}>7</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Colorado Cities</div>
              </div>
            </div>
            
            <h3 style={{ color: '#155724', marginBottom: '15px' }}>
              🏆 Achievement Unlocked: First Directory to Reach 100% Verification
            </h3>
            <p style={{ color: '#155724', fontSize: '1.1rem', margin: 0 }}>
              Every single provider in our directory is a verified licensed medical professional. 
              No other directory in Colorado can make this claim.
            </p>
          </div>
        </section>

        {/* Network Quality Highlights */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Quality of Our Verified Network
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            margin: '30px 0'
          }}>
            <div style={{
              background: 'white',
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>🏥 Medical Backgrounds</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                <li>Emergency Department RNs (20+ years experience)</li>
                <li>Cardiac unit specialists</li>
                <li>Surgical nursing backgrounds</li>
                <li>NICU and critical care experience</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>🎓 Education & Training</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                <li>Georgetown University graduates</li>
                <li>Colorado State University alumni</li>
                <li>National trainers for Galderma & Allergan</li>
                <li>CANS certified specialists</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#667eea', marginBottom: '15px' }}>⭐ Recognition & Awards</h4>
              <ul style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                <li>Staff Nurse of the Year recipients</li>
                <li>Real Self Most Loved Injectors</li>
                <li>National aesthetic industry trainers</li>
                <li>10-30 years average experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          padding: '40px 30px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Ready to Find Your Verified Medical Professional?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.95' }}>
            Browse our 100% verified network of licensed medical professionals across Colorado
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/" 
              style={{
                background: 'white',
                color: '#667eea',
                padding: '15px 30px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              🔍 Browse Verified Providers
            </a>
            <a 
              href="/why-verification-matters" 
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid white',
                padding: '13px 28px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              📖 Why Verification Matters
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}