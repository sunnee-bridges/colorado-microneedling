import Layout from '../components/Layout';

export default function HospitalGradeStandards() {
  return (
    <Layout title="Understanding Medical Standards - Quality Care in Aesthetic Medicine">
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
            🏥 Understanding Medical Standards
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.95', maxWidth: '700px', margin: '0 auto 20px auto' }}>
            Educational information about medical standards and quality care in aesthetic medicine
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '25px',
            padding: '10px 25px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            ⚕️ Understanding quality medical care standards
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
            <strong>This information is for educational purposes only.</strong> We make no guarantees about any provider's adherence to specific standards or protocols. Patients are solely responsible for researching providers, verifying credentials, and evaluating care standards before scheduling treatments.
          </p>
        </div>

        {/* What Are Medical Standards */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #6f42c1', paddingBottom: '10px' }}>
            Understanding Medical Care Standards
          </h2>
          
          <div style={{
            background: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              High-quality medical standards represent comprehensive approaches to patient care, safety protocols, 
              and professional excellence. These standards may include rigorous credentialing, sterile procedures, 
              emergency preparedness, and continuous quality monitoring.
            </p>
            
            <div style={{
              background: '#e7f3ff',
              border: '1px solid #b3d9ff',
              borderRadius: '6px',
              padding: '15px'
            }}>
              <p style={{ color: '#004085', margin: 0, fontStyle: 'italic' }}>
                <strong>Educational Note:</strong> Patients should understand that injectable treatments are medical procedures 
                and research providers who maintain appropriate medical standards for such procedures.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Quality Components */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #6f42c1', paddingBottom: '10px' }}>
            Components of Quality Medical Care
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', margin: '30px 0' }}>
            {[
              {
                component: 1,
                title: "Professional Qualifications",
                icon: "👨‍⚕️",
                description: "Understanding provider education, licensing, and ongoing competency",
                considerations: [
                  "Medical or nursing education background",
                  "Current state licensing status",
                  "Specialized training and certifications",
                  "Continuing education participation",
                  "Professional experience and references"
                ]
              },
              {
                component: 2,
                title: "Safety Protocols",
                icon: "🧼",
                description: "Infection control and sterile procedure practices",
                considerations: [
                  "Universal precautions implementation",
                  "Sterile injection techniques",
                  "Single-use equipment protocols",
                  "Proper product storage and handling",
                  "Contamination prevention measures"
                ]
              },
              {
                component: 3,
                title: "Emergency Preparedness",
                icon: "🚨",
                description: "Readiness to handle medical emergencies and adverse reactions",
                considerations: [
                  "Emergency medication availability",
                  "Staff training in emergency response",
                  "Clear emergency protocols",
                  "Physician access or oversight",
                  "Hospital relationships for referrals"
                ]
              },
              {
                component: 4,
                title: "Quality Monitoring",
                icon: "📊",
                description: "Continuous monitoring and improvement practices",
                considerations: [
                  "Patient outcome tracking",
                  "Adverse event documentation",
                  "Regular protocol reviews",
                  "Staff training assessments",
                  "Equipment maintenance programs"
                ]
              },
              {
                component: 5,
                title: "Regulatory Compliance",
                icon: "📋",
                description: "Adherence to medical regulations and oversight",
                considerations: [
                  "State medical board compliance",
                  "FDA approved product usage",
                  "Professional liability insurance",
                  "Medical oversight and supervision",
                  "Regular compliance reviews"
                ]
              }
            ].map((component, index) => (
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
                    {component.component}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '2rem', marginRight: '10px' }}>{component.icon}</span>
                      <h3 style={{ color: '#333', margin: 0 }}>{component.title}</h3>
                    </div>
                    <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '15px' }}>
                      {component.description}
                    </p>
                  </div>
                </div>
                
                <div style={{
                  background: '#f8f9fa',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  padding: '15px'
                }}>
                  <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>Patients Should Research:</h4>
                  <ul style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                    {component.considerations.map((consideration, conIndex) => (
                      <li key={conIndex} style={{ marginBottom: '5px' }}>
                        💡 {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Educational Approach */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our Educational Focus
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
            border: '2px solid #28a745',
            borderRadius: '12px',
            padding: '30px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#155724', textAlign: 'center', marginBottom: '25px' }}>
              🎓 Patient Education Priorities
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
                <h4 style={{ color: '#28a745', marginBottom: '15px' }}>🔍 Research Guidance</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', margin: 0 }}>
                  <li>How to verify provider credentials</li>
                  <li>Questions to ask during consultations</li>
                  <li>Understanding different licensing types</li>
                  <li>Evaluating facility standards</li>
                </ul>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h4 style={{ color: '#28a745', marginBottom: '15px' }}>📚 Educational Resources</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', margin: 0 }}>
                  <li>Understanding medical standards</li>
                  <li>Safety protocol awareness</li>
                  <li>Quality indicator recognition</li>
                  <li>Decision-making support</li>
                </ul>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h4 style={{ color: '#28a745', marginBottom: '15px' }}>🤝 Informed Choices</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', margin: 0 }}>
                  <li>Encouraging independent verification</li>
                  <li>Promoting patient advocacy</li>
                  <li>Supporting quality-conscious decisions</li>
                  <li>Emphasizing safety awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Different Approaches */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            Understanding Different Provider Approaches
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
                    Quality Component
                  </th>
                  <th style={{ 
                    padding: '15px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #dee2e6',
                    background: '#fff3cd',
                    color: '#856404',
                    fontWeight: 'bold'
                  }}>
                    Basic Standards
                  </th>
                  <th style={{ 
                    padding: '15px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #dee2e6',
                    background: '#e8f5e8',
                    color: '#155724',
                    fontWeight: 'bold'
                  }}>
                    Enhanced Standards
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: "Provider Licensing",
                    basic: "State license verification",
                    enhanced: "Current license + ongoing verification"
                  },
                  {
                    category: "Education Requirements",
                    basic: "Minimum education requirements",
                    enhanced: "Advanced medical education"
                  },
                  {
                    category: "Training Documentation",
                    basic: "Basic certification training",
                    enhanced: "Comprehensive medical training"
                  },
                  {
                    category: "Experience Assessment",
                    basic: "General experience claims",
                    enhanced: "Documented medical experience"
                  },
                  {
                    category: "Safety Protocols",
                    basic: "Standard safety measures",
                    enhanced: "Advanced emergency protocols"
                  },
                  {
                    category: "Medical Oversight",
                    basic: "Basic supervision",
                    enhanced: "Active physician involvement"
                  },
                  {
                    category: "Continuing Education",
                    basic: "Required minimums",
                    enhanced: "Advanced ongoing training"
                  },
                  {
                    category: "Quality Monitoring",
                    basic: "Basic outcome tracking",
                    enhanced: "Comprehensive quality programs"
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
                      color: '#856404'
                    }}>
                      {row.basic}
                    </td>
                    <td style={{ 
                      padding: '12px 15px', 
                      textAlign: 'center',
                      color: '#155724',
                      fontWeight: 'bold'
                    }}>
                      {row.enhanced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            background: '#e8f4fd',
            border: '1px solid #bee5eb',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <p style={{ color: '#0c5460', margin: 0, fontSize: '1rem', fontStyle: 'italic' }}>
              <strong>Important Note:</strong> Patients should research and verify which standards providers actually meet, 
              as claims may vary. Independent verification through official sources is always recommended.
            </p>
          </div>
        </section>

        {/* Understanding Benefits of Quality Care */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
            Potential Benefits of Quality Medical Care
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
                title: "Safety Considerations",
                benefits: [
                  "Proper emergency preparedness",
                  "Appropriate infection control",
                  "Qualified medical oversight",
                  "Established safety protocols"
                ]
              },
              {
                icon: "✨",
                title: "Quality Outcomes",
                benefits: [
                  "Experienced provider techniques",
                  "Appropriate product knowledge",
                  "Individualized treatment planning",
                  "Evidence-based approaches"
                ]
              },
              {
                icon: "🎯",
                title: "Professional Expertise",
                benefits: [
                  "Advanced medical training",
                  "Comprehensive product understanding",
                  "Customized care approaches",
                  "Professional best practices"
                ]
              },
              {
                icon: "💙",
                title: "Patient Confidence",
                benefits: [
                  "Verified provider qualifications",
                  "Established safety measures",
                  "Emergency preparedness knowledge",
                  "Professional medical oversight"
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
                      💡 {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Our Educational Mission */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #6f42c1', paddingBottom: '10px' }}>
            Our Educational Mission
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
                🎯 Patient Education Goals
              </h3>
              <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.7' }}>
                Our goal is to help patients understand the importance of quality medical care 
                and provide educational resources for making informed healthcare decisions.
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
                <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>Educational Resources</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                  Providing information about medical standards and quality indicators
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>Patient Empowerment</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                  Teaching patients how to research and evaluate providers
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>Safety Awareness</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                  Promoting understanding of medical safety and quality care
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
              <h4 style={{ margin: '0 0 10px 0' }}>Our Educational Commitment</h4>
              <p style={{ margin: 0, fontSize: '1rem' }}>
                We believe informed patients make better healthcare decisions. We encourage 
                all patients to independently research and verify provider qualifications and standards.
              </p>
            </div>
          </div>
        </section>

        {/* How to Research Quality Standards */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            How to Research Provider Standards
          </h2>
          
          <div style={{
            background: '#d1ecf1',
            border: '1px solid #bee5eb',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#0c5460', marginBottom: '20px' }}>
              🔍 Questions for Provider Research
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#0c5460', marginBottom: '10px' }}>Credential Research</h4>
                <ul style={{ color: '#0c5460', lineHeight: '1.6' }}>
                  <li>What type of medical license do you hold?</li>
                  <li>Where did you complete your medical education?</li>
                  <li>How many years of medical experience do you have?</li>
                  <li>What aesthetic training have you completed?</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#0c5460', marginBottom: '10px' }}>Safety Protocol Questions</h4>
                <ul style={{ color: '#0c5460', lineHeight: '1.6' }}>
                  <li>What emergency medications are available?</li>
                  <li>Is physician oversight available?</li>
                  <li>What are your infection control protocols?</li>
                  <li>How do you handle complications?</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#0c5460', marginBottom: '10px' }}>Quality Assessment</h4>
                <ul style={{ color: '#0c5460', lineHeight: '1.6' }}>
                  <li>How do you monitor patient outcomes?</li>
                  <li>What continuing education do you pursue?</li>
                  <li>Do you follow established protocols?</li>
                  <li>Can you provide professional references?</li>
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
              ⚠️ Research Warning Signs
            </h4>
            <ul style={{ color: '#856404', lineHeight: '1.6', margin: 0 }}>
              <li>Reluctance to provide specific license information</li>
              <li>Vague responses about emergency preparedness</li>
              <li>No clear medical oversight structure</li>
              <li>Limited medical education or training</li>
              <li>Inability to explain safety protocols clearly</li>
              <li>Pressure to make immediate decisions</li>
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
          <h2 style={{ marginBottom: '20px' }}>Make Informed Healthcare Decisions</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.95' }}>
            Use our educational resources to understand medical standards and research providers thoroughly before making healthcare decisions.
          </p>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <h3 style={{ marginBottom: '15px' }}>🎓 Educational Focus</h3>
            <p style={{ margin: 0, fontStyle: 'italic' }}>
              Remember: We encourage all patients to independently verify provider credentials 
              and standards. Make informed decisions based on your own research and consultations.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/#find-providers" 
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
              🔍 Browse Providers
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
              📋 Quality Standards Guide
            </a>
          </div>
        </section>

        {/* Final Legal Disclaimer */}
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
            This information is provided for educational purposes only and does not constitute medical advice, provider recommendations, or guarantees about medical standards or provider qualifications. We make no representations about any provider's adherence to specific standards or protocols. Patients are solely responsible for researching, verifying, and evaluating providers and their standards before making healthcare decisions.
          </p>
        </div>
      </div>
    </Layout>
  );
}