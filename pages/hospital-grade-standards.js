import Layout from '../components/Layout';

export default function HospitalGradeStandards() {
  return (
    <Layout title="Hospital-Grade Standards - Medical Professional Excellence in Aesthetic Care">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #6f42c1 0%, #495057 100%)',
          color: 'white',
          padding: '40px 30px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
            🏥 Hospital-Grade Standards
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.95', maxWidth: '700px', margin: '0 auto 20px auto' }}>
            Why we apply hospital-level quality standards to aesthetic medicine
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '25px',
            padding: '10px 25px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            ⚕️ Medical procedures deserve medical standards
          </div>
        </div>

        {/* What Are Hospital-Grade Standards */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #6f42c1', paddingBottom: '10px' }}>
            What Are Hospital-Grade Standards?
          </h2>
          
          <div style={{
            background: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Hospital-grade standards represent the highest level of medical care, safety protocols, 
              and professional excellence. These standards ensure patient safety through rigorous 
              credentialing, sterile procedures, emergency preparedness, and continuous quality monitoring.
            </p>
            
            <div style={{
              background: '#e7f3ff',
              border: '1px solid #b3d9ff',
              borderRadius: '6px',
              padding: '15px'
            }}>
              <p style={{ color: '#004085', margin: 0, fontStyle: 'italic' }}>
                <strong>Our Philosophy:</strong> Injectable treatments are medical procedures that should 
                be held to the same standards as any hospital-based medical intervention.
              </p>
            </div>
          </div>
        </section>

        {/* The 5 Pillars */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #6f42c1', paddingBottom: '10px' }}>
            The 5 Pillars of Hospital-Grade Standards
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', margin: '30px 0' }}>
            {[
              {
                pillar: 1,
                title: "Professional Credentialing",
                icon: "👨‍⚕️",
                description: "Rigorous verification of medical education, licensing, and ongoing competency",
                standards: [
                  "Medical or nursing school graduation verification",
                  "Active state medical board licensing",
                  "Specialty training and certification confirmation",
                  "Continuing education requirement compliance",
                  "Professional references and peer review"
                ]
              },
              {
                pillar: 2,
                title: "Sterile Procedures & Safety",
                icon: "🧼",
                description: "Adherence to infection control and sterile technique protocols",
                standards: [
                  "Universal precautions implementation",
                  "Sterile injection technique requirements",
                  "Single-use needle and syringe protocols",
                  "Proper product storage and handling",
                  "Contamination prevention measures"
                ]
              },
              {
                pillar: 3,
                title: "Emergency Preparedness",
                icon: "🚨",
                description: "Readiness to handle medical emergencies and adverse reactions",
                standards: [
                  "Emergency medication availability (epinephrine, etc.)",
                  "Trained staff in emergency response",
                  "Clear emergency protocols and procedures",
                  "Direct physician access or on-site presence",
                  "Hospital relationship for emergency referrals"
                ]
              },
              {
                pillar: 4,
                title: "Quality Assurance",
                icon: "📊",
                description: "Continuous monitoring and improvement of patient outcomes",
                standards: [
                  "Patient outcome tracking and documentation",
                  "Adverse event reporting and analysis",
                  "Regular safety protocol reviews",
                  "Staff training and competency assessments",
                  "Equipment maintenance and calibration"
                ]
              },
              {
                pillar: 5,
                title: "Regulatory Compliance",
                icon: "📋",
                description: "Full compliance with medical regulations and oversight",
                standards: [
                  "State medical board regulation compliance",
                  "FDA approved product usage only",
                  "Professional liability insurance coverage",
                  "Medical director oversight and supervision",
                  "Regular regulatory audits and inspections"
                ]
              }
            ].map((pillar, index) => (
              <div key={index} style={{
                background: 'white',
                border: '2px solid #e9ecef',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    background: '#6f42c1',
                    color: 'white',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    {pillar.pillar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '2rem', marginRight: '10px' }}>{pillar.icon}</span>
                      <h3 style={{ color: '#333', margin: 0 }}>{pillar.title}</h3>
                    </div>
                    <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '15px' }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
                
                <div style={{
                  background: '#f8f9fa',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  padding: '15px'
                }}>
                  <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>Required Standards:</h4>
                  <ul style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                    {pillar.standards.map((standard, stdIndex) => (
                      <li key={stdIndex} style={{ marginBottom: '5px' }}>
                        ✅ {standard}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Network Quality */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            How Our Network Exceeds Hospital Standards
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
            border: '2px solid #28a745',
            borderRadius: '12px',
            padding: '30px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#155724', textAlign: 'center', marginBottom: '25px' }}>
              🏆 Beyond Hospital Standards: Our Premium Requirements
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h4 style={{ color: '#28a745', marginBottom: '15px' }}>🎓 Advanced Education</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', margin: 0 }}>
                  <li>University-level medical education (not community college)</li>
                  <li>Bachelor's degree minimum for RNs</li>
                  <li>Master's degree for NPs and PAs</li>
                  <li>Specialized aesthetic training beyond basic requirements</li>
                </ul>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h4 style={{ color: '#28a745', marginBottom: '15px' }}>💼 Premium Experience</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', margin: 0 }}>
                  <li>Minimum 5+ years medical experience</li>
                  <li>Emergency medicine backgrounds preferred</li>
                  <li>National trainer status recognition</li>
                  <li>Award-winning professional achievements</li>
                </ul>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h4 style={{ color: '#28a745', marginBottom: '15px' }}>🔍 Enhanced Verification</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', margin: 0 }}>
                  <li>Individual provider credential verification</li>
                  <li>Educational background confirmation</li>
                  <li>Professional reference checks</li>
                  <li>Annual re-verification process</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with Industry */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            Industry Standards vs Hospital-Grade Standards
          </h2>
          
          <div style={{
            background: 'white',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '20px 0'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '0.9rem'
            }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>
                    Standard Category
                  </th>
                  <th style={{ 
                    padding: '15px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #dee2e6',
                    background: '#f8d7da',
                    color: '#721c24',
                    fontWeight: 'bold'
                  }}>
                    Industry Minimum
                  </th>
                  <th style={{ 
                    padding: '15px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #dee2e6',
                    background: '#e8f5e8',
                    color: '#155724',
                    fontWeight: 'bold'
                  }}>
                    Hospital-Grade
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: "Provider Licensing",
                    industry: "Any state license",
                    hospital: "Current Colorado license + verification"
                  },
                  {
                    category: "Education Requirements",
                    industry: "High school + certification",
                    hospital: "University degree required"
                  },
                  {
                    category: "Medical Training",
                    industry: "Weekend injection course",
                    hospital: "Years of medical education"
                  },
                  {
                    category: "Experience Verification",
                    industry: "Self-reported",
                    hospital: "Independently verified"
                  },
                  {
                    category: "Emergency Preparedness",
                    industry: "Basic first aid",
                    hospital: "Advanced emergency protocols"
                  },
                  {
                    category: "Physician Oversight",
                    industry: "Optional or remote",
                    hospital: "Required and accessible"
                  },
                  {
                    category: "Continuing Education",
                    industry: "Minimal requirements",
                    hospital: "Rigorous ongoing training"
                  },
                  {
                    category: "Quality Monitoring",
                    industry: "Self-regulated",
                    hospital: "External verification"
                  }
                ].map((row, index) => (
                  <tr key={index} style={{ 
                    borderBottom: '1px solid #dee2e6',
                    background: index % 2 === 0 ? '#fff' : '#f8f9fa'
                  }}>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold' }}>
                      {row.category}
                    </td>
                    <td style={{ 
                      padding: '12px 15px', 
                      textAlign: 'center',
                      color: '#721c24'
                    }}>
                      {row.industry}
                    </td>
                    <td style={{ 
                      padding: '12px 15px', 
                      textAlign: 'center',
                      color: '#155724',
                      fontWeight: 'bold'
                    }}>
                      {row.hospital}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Real-World Benefits */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
            Real-World Benefits for Patients
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            margin: '30px 0'
          }}>
            {[
              {
                icon: "🛡️",
                title: "Enhanced Safety",
                benefits: [
                  "Lower complication rates",
                  "Faster emergency response",
                  "Better infection control",
                  "Reduced adverse events"
                ]
              },
              {
                icon: "✨",
                title: "Superior Results",
                benefits: [
                  "More natural-looking outcomes",
                  "Better technique precision",
                  "Longer-lasting results",
                  "Higher patient satisfaction"
                ]
              },
              {
                icon: "🎯",
                title: "Professional Expertise",
                benefits: [
                  "Advanced injection techniques",
                  "Better product knowledge",
                  "Customized treatment plans",
                  "Evidence-based practices"
                ]
              },
              {
                icon: "💙",
                title: "Peace of Mind",
                benefits: [
                  "Confidence in provider qualifications",
                  "Trust in safety protocols",
                  "Knowledge of emergency preparedness",
                  "Assurance of professional oversight"
                ]
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                background: 'white',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{benefit.icon}</div>
                <h4 style={{ color: '#333', marginBottom: '15px' }}>{benefit.title}</h4>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  color: '#666',
                  fontSize: '0.9rem',
                  textAlign: 'left'
                }}>
                  {benefit.benefits.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ marginBottom: '8px' }}>
                      ✅ {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Our Commitment */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #6f42c1', paddingBottom: '10px' }}>
            Our Commitment to Excellence
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            border: '1px solid #dee2e6',
            borderRadius: '12px',
            padding: '30px',
            margin: '20px 0'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <h3 style={{ color: '#6f42c1', marginBottom: '15px' }}>
                🎯 The Colorado Promise
              </h3>
              <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.7' }}>
                We pledge to maintain the highest standards in aesthetic medicine by applying 
                hospital-grade protocols to every aspect of our provider network.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '25px'
            }}>
              <div style={{
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>Continuous Improvement</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                  Regular review and enhancement of our standards
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>Industry Leadership</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                  Setting new benchmarks for aesthetic medicine
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>Patient Advocacy</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                  Always putting patient safety above profit
                </p>
              </div>
            </div>

            <div style={{
              background: '#6f42c1',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0' }}>Our Standards Will Never Be Compromised</h4>
              <p style={{ margin: 0, fontSize: '1rem' }}>
                We would rather have fewer providers than compromise on quality. 
                Hospital-grade standards are not negotiable - they are our foundation.
              </p>
            </div>
          </div>
        </section>

        {/* How to Verify Standards */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            How to Verify Hospital-Grade Standards
          </h2>
          
          <div style={{
            background: '#d1ecf1',
            border: '1px solid #bee5eb',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#0c5460', marginBottom: '20px' }}>
              🔍 Questions to Ask Any Aesthetic Provider
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#0c5460', marginBottom: '10px' }}>Credentialing Questions</h4>
                <ul style={{ color: '#0c5460', lineHeight: '1.6' }}>
                  <li>What is your medical license type and number?</li>
                  <li>Where did you receive your medical/nursing education?</li>
                  <li>How many years of medical experience do you have?</li>
                  <li>What specialized aesthetic training have you completed?</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#0c5460', marginBottom: '10px' }}>Safety Questions</h4>
                <ul style={{ color: '#0c5460', lineHeight: '1.6' }}>
                  <li>What emergency medications do you have on-site?</li>
                  <li>Is there a physician available for emergencies?</li>
                  <li>What are your infection control protocols?</li>
                  <li>How do you handle adverse reactions?</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#0c5460', marginBottom: '10px' }}>Quality Questions</h4>
                <ul style={{ color: '#0c5460', lineHeight: '1.6' }}>
                  <li>How do you track patient outcomes?</li>
                  <li>What continuing education do you complete?</li>
                  <li>Do you follow specific safety protocols?</li>
                  <li>Can you provide references or certifications?</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{
            background: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '8px',
            padding: '20px'
          }}>
            <h4 style={{ color: '#856404', marginBottom: '10px' }}>
              ⚠️ Red Flags: Providers Who Don't Meet Hospital Standards
            </h4>
            <ul style={{ color: '#856404', lineHeight: '1.6', margin: 0 }}>
              <li>Cannot provide specific license numbers</li>
              <li>Vague about emergency preparedness</li>
              <li>No physician oversight or availability</li>
              <li>Minimal medical education or training</li>
              <li>Cannot explain safety protocols</li>
              <li>Pressure you to book without consultation</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          background: 'linear-gradient(135deg, #6f42c1, #495057)',
          color: 'white',
          padding: '40px 30px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Experience Hospital-Grade Excellence</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.95' }}>
            Don't settle for minimum standards. Choose providers who exceed hospital-grade requirements for your safety and satisfaction.
          </p>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <h3 style={{ marginBottom: '15px' }}>🏆 Our Hospital-Grade Network</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '15px'
            }}>
              <div>
                <div style={{ fontSize: '1.8rem', marginBottom: '5px' }}>100%</div>
                <div style={{ fontSize: '0.9rem' }}>Licensed Medical Professionals</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', marginBottom: '5px' }}>18</div>
                <div style={{ fontSize: '0.9rem' }}>Verified Providers</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', marginBottom: '5px' }}>25+</div>
                <div style={{ fontSize: '0.9rem' }}>Years Average Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', marginBottom: '5px' }}>0</div>
                <div style={{ fontSize: '0.9rem' }}>Compromises on Standards</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/" 
              style={{
                background: 'white',
                color: '#6f42c1',
                padding: '15px 30px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              🔍 Find Hospital-Grade Providers
            </a>
            <a 
              href="/verification" 
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
              📋 See Our Verification Process
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}