import Layout from '../components/Layout';

export default function Verification() {
  return (
    <Layout title="Our Quality Standards - Colorado Quality-Focused Medical Professional Directory">
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
            🛡️ Our Quality Standards
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.95', maxWidth: '700px', margin: '0 auto' }}>
            Our commitment to featuring licensed medical professionals and promoting patient education
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
            ✅ Quality-Focused Directory • Licensed Professionals • Patient Education First
          </div>
        </div>

        {/* Important Disclaimer */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '40px'
        }}>
          <h4 style={{ color: '#856404', margin: '0 0 10px 0' }}>
            Important Patient Responsibility
          </h4>
          <p style={{ color: '#856404', margin: 0, lineHeight: '1.5' }}>
            <strong>We encourage all patients to independently verify provider credentials and licensing status before booking treatments.</strong> While we strive to feature licensed medical professionals, patients should always confirm qualifications directly with providers and state licensing boards.
          </p>
        </div>

        {/* Why Quality Matters Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Why We Focus on Licensed Medical Professionals
          </h2>
          <div style={{
            background: '#e8f4fd',
            border: '1px solid #bee5eb',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <p style={{ fontSize: '1.1rem', color: '#0c5460', margin: '0', fontStyle: 'italic' }}>
              <strong>"We believe patients deserve access to qualified medical professionals for cosmetic procedures."</strong>
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
              <h4 style={{ color: '#dc3545', marginBottom: '15px' }}>⚠️ Potential Risks</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li>Unlicensed practitioners performing medical procedures</li>
                <li>Lack of proper medical training and oversight</li>
                <li>Limited ability to handle complications</li>
                <li>Varying safety protocols and standards</li>
              </ul>
            </div>

            <div style={{
              background: '#e8f5e8',
              border: '1px solid #28a745',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#28a745', marginBottom: '15px' }}>✅ Our Approach</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li>Focus on licensed medical professionals</li>
                <li>Encourage credential verification by patients</li>
                <li>Promote education about provider qualifications</li>
                <li>Emphasize importance of medical oversight</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Quality Guidelines */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our Provider Quality Guidelines
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '30px' }}>
            We strive to feature providers who meet these professional standards. We encourage patients to verify these qualifications independently.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                step: 1,
                title: "Valid Medical License",
                description: "Current state licensing for medical practice",
                details: "Patients should verify through Colorado Medical Board or Nursing Board databases"
              },
              {
                step: 2,
                title: "Proper Medical Education",
                description: "Graduated from accredited medical or nursing programs",
                details: "BSN, MSN, NP, PA, or MD degrees from recognized institutions"
              },
              {
                step: 3,
                title: "Relevant Experience",
                description: "Training and experience in aesthetic procedures",
                details: "Background in medical aesthetics, injection training, and patient care"
              },
              {
                step: 4,
                title: "Professional Certifications",
                description: "Additional training in aesthetic medicine",
                details: "Specialized courses, advanced training, and continuing education"
              },
              {
                step: 5,
                title: "Medical Oversight",
                description: "Appropriate supervision and practice standards",
                details: "Physician oversight where required, established safety protocols"
              },
              {
                step: 6,
                title: "Clean Professional Record",
                description: "Good standing with licensing boards",
                details: "Patients should check for any disciplinary actions or restrictions"
              },
              {
                step: 7,
                title: "Ongoing Education",
                description: "Commitment to continuing professional development",
                details: "Regular training updates and skill enhancement programs"
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

        {/* Types of Licensed Professionals */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Licensed Medical Professionals We Feature
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
                requirements: ["Active Colorado RN license", "Medical training and education", "Injection certification preferred", "Physician oversight as required"],
                icon: "👩‍⚕️"
              },
              {
                title: "Nurse Practitioners (NP)",
                requirements: ["Active Colorado NP license", "Advanced practice authority", "Masters level education", "Independent practice capability"],
                icon: "🏥"
              },
              {
                title: "Physician Assistants (PA)",
                requirements: ["Active Colorado PA license", "Masters degree education", "Physician collaboration", "Medical model training"],
                icon: "🩺"
              },
              {
                title: "Medical Doctors (MD/DO)",
                requirements: ["Active Colorado medical license", "Medical school graduation", "Residency training completed", "Board eligibility or certification"],
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

        {/* Patient Verification Guide */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#0066cc', borderBottom: '3px solid #0066cc', paddingBottom: '10px' }}>
            📋 How Patients Can Verify Provider Credentials
          </h2>
          
          <div style={{
            background: '#e8f4fd',
            border: '1px solid #bee5eb',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <p style={{ color: '#0c5460', margin: '0 0 15px 0', fontWeight: 'bold' }}>
              We strongly encourage all patients to independently verify:
            </p>
            <ul style={{ color: '#0c5460', lineHeight: '1.7', margin: 0 }}>
              <li><strong>License Status:</strong> Check Colorado Medical Board or Nursing Board websites</li>
              <li><strong>Disciplinary History:</strong> Review any sanctions or restrictions</li>
              <li><strong>Education:</strong> Confirm medical or nursing school graduation</li>
              <li><strong>Experience:</strong> Ask about aesthetic training and years of practice</li>
              <li><strong>Supervision:</strong> Understand medical oversight and emergency protocols</li>
            </ul>
          </div>

          <div style={{
            background: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <h4 style={{ color: '#856404', margin: '0 0 10px 0' }}>
              Verification Resources
            </h4>
            <ul style={{ color: '#856404', lineHeight: '1.6', margin: 0 }}>
              <li><strong>Colorado Medical Board:</strong> For MD/DO license verification</li>
              <li><strong>Colorado Board of Nursing:</strong> For RN/NP license verification</li>
              <li><strong>Provider Websites:</strong> Review credentials and experience</li>
              <li><strong>Consultation Questions:</strong> Ask about training and qualifications</li>
            </ul>
          </div>
        </section>

        {/* Our Directory Focus */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our Directory Statistics
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
                <div style={{ fontSize: '2.5rem', color: '#28a745', fontWeight: 'bold' }}>15+</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Featured Providers</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', color: '#28a745', fontWeight: 'bold' }}>100%</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Licensed Focus</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', color: '#28a745', fontWeight: 'bold' }}>7</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Colorado Cities</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', color: '#28a745', fontWeight: 'bold' }}>24/7</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Patient Education</div>
              </div>
            </div>
            
            <h3 style={{ color: '#155724', marginBottom: '15px' }}>
              🎯 Commitment: Quality-Focused Medical Professional Directory
            </h3>
            <p style={{ color: '#155724', fontSize: '1.1rem', margin: 0 }}>
              Our goal is to help patients find licensed medical professionals while encouraging 
              independent verification of all provider credentials.
            </p>
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
          <h2 style={{ marginBottom: '20px' }}>Ready to Find Licensed Medical Professionals?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.95' }}>
            Browse our quality-focused directory and remember to verify credentials independently
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
              🔍 Browse Featured Providers
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
              📖 Why Credentials Matter
            </a>
          </div>
        </section>

        {/* Final Disclaimer */}
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#6c757d', margin: '0 0 10px 0' }}>
            Important Legal Disclaimer
          </h4>
          <p style={{ 
            color: '#6c757d', 
            fontSize: '0.9rem', 
            margin: 0, 
            lineHeight: '1.5',
            fontStyle: 'italic'
          }}>
            This directory is for informational and educational purposes only. We make no guarantees about provider qualifications or credentials. Patients are solely responsible for verifying all provider information, licensing status, and qualifications before scheduling treatments. Always consult with qualified healthcare providers for personalized medical advice.
          </p>
        </div>
      </div>
    </Layout>
  );
}