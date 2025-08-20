import Layout from '../components/Layout';

export default function HospitalGradeStandards() {
  return (
    <Layout title="Understanding Medical Standards - Quality Care in Aesthetic Medicine">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '50px 30px',
          borderRadius: '16px',
          textAlign: 'center',
          marginBottom: '40px',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏥</div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '25px', fontWeight: 'bold' }}>
            Understanding Medical Standards
          </h1>
          <p style={{ fontSize: '1.4rem', opacity: '0.95', maxWidth: '700px', margin: '0 auto 25px auto', lineHeight: '1.5' }}>
            Educational information about medical standards and quality care in aesthetic medicine
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '30px',
            padding: '12px 28px',
            display: 'inline-block',
            fontWeight: 'bold',
            fontSize: '0.95rem'
          }}>
            ⚕️ Understanding quality medical care standards
          </div>
        </div>

        {/* Important Disclaimer */}
        <div style={{
          background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
          border: '2px solid #ffc107',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '40px',
          boxShadow: '0 4px 12px rgba(255, 193, 7, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>⚠️</div>
            <h4 style={{ color: '#856404', margin: 0, fontSize: '1.2rem' }}>
              Important Patient Responsibility
            </h4>
          </div>
          <p style={{ color: '#856404', margin: 0, lineHeight: '1.6', fontSize: '1rem' }}>
            <strong>This information is for educational purposes only.</strong> We make no guarantees about any provider's adherence to specific standards or protocols. Patients are solely responsible for researching providers, verifying credentials, and evaluating care standards before scheduling treatments.
          </p>
        </div>

        {/* What Are Medical Standards */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #667eea', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            Understanding Medical Care Standards
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            border: '2px solid #dee2e6',
            borderRadius: '16px',
            padding: '35px',
            margin: '20px 0',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚕️</div>
              <p style={{ color: '#333', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '0' }}>
                Medical standards in aesthetic care typically include provider qualifications, safety protocols, 
                emergency preparedness, and quality monitoring. These standards can vary significantly between facilities and providers.
              </p>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #e7f3ff 0%, #bee3f8 100%)',
              border: '2px solid #3182ce',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>💡</div>
                <p style={{ color: '#1e40af', margin: 0, fontStyle: 'italic', fontSize: '1rem' }}>
                  <strong>Educational Note:</strong> Injectable treatments are medical procedures. 
                  Patients should research which standards providers maintain and verify this information independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Quality Components */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #667eea', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            Components Patients Should Research
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', margin: '30px 0' }}>
            {[
              {
                component: 1,
                title: "Provider Qualifications",
                icon: "👨‍⚕️",
                description: "Understanding provider education, licensing, and experience",
                considerations: [
                  "Medical or nursing education background",
                  "Current state licensing status",
                  "Specialized training documentation",
                  "Professional experience verification"
                ],
                color: "#3182ce"
              },
              {
                component: 2,
                title: "Safety Protocols",
                icon: "🧼",
                description: "Infection control and procedure practices",
                considerations: [
                  "Sterile technique practices",
                  "Single-use equipment protocols",
                  "Product storage and handling",
                  "Contamination prevention measures"
                ],
                color: "#38a169"
              },
              {
                component: 3,
                title: "Emergency Preparedness",
                icon: "🚨",
                description: "Readiness to handle medical emergencies",
                considerations: [
                  "Emergency medication availability",
                  "Staff emergency training",
                  "Clear emergency protocols",
                  "Physician access or oversight"
                ],
                color: "#d69e2e"
              }
            ].map((component, index) => (
              <div key={index} style={{
                background: 'white',
                border: `3px solid ${component.color}`,
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    background: component.color,
                    color: 'white',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    marginRight: '20px'
                  }}>
                    {component.component}
                  </div>
                  <span style={{ fontSize: '2rem', marginRight: '15px' }}>{component.icon}</span>
                  <h3 style={{ color: component.color, margin: 0, fontSize: '1.4rem' }}>{component.title}</h3>
                </div>
                
                <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6' }}>
                  {component.description}
                </p>
                
                <div style={{
                  background: `${component.color}15`,
                  border: `1px solid ${component.color}30`,
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <h4 style={{ color: component.color, marginBottom: '15px', fontSize: '1.1rem' }}>Patients Should Ask About:</h4>
                  <ul style={{ color: '#666', lineHeight: '1.7', margin: 0, paddingLeft: '20px' }}>
                    {component.considerations.map((consideration, conIndex) => (
                      <li key={conIndex} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: component.color, marginRight: '8px' }}>💡</span>
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Different Approaches */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #d69e2e', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            Different Provider Approaches to Standards
          </h2>
          
          <div style={{
            background: 'white',
            border: '2px solid #e9ecef',
            borderRadius: '16px',
            overflow: 'hidden',
            margin: '20px 0',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '1rem'
            }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                  <th style={{ 
                    padding: '20px', 
                    textAlign: 'left', 
                    borderBottom: '3px solid #dee2e6',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}>
                    Quality Component
                  </th>
                  <th style={{ 
                    padding: '20px', 
                    textAlign: 'center', 
                    borderBottom: '3px solid #dee2e6',
                    background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
                    color: '#92400e',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}>
                    Basic Approach
                  </th>
                  <th style={{ 
                    padding: '20px', 
                    textAlign: 'center', 
                    borderBottom: '3px solid #dee2e6',
                    background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
                    color: '#2f855a',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}>
                    Enhanced Approach
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
                    category: "Safety Protocols",
                    basic: "Standard safety measures",
                    enhanced: "Comprehensive emergency protocols"
                  },
                  {
                    category: "Medical Oversight",
                    basic: "Basic supervision",
                    enhanced: "Active physician involvement"
                  }
                ].map((row, index) => (
                  <tr key={index} style={{ 
                    borderBottom: '1px solid #dee2e6',
                    background: index % 2 === 0 ? '#fff' : '#fafbfc'
                  }}>
                    <td style={{ 
                      padding: '18px 20px', 
                      fontWeight: 'bold',
                      fontSize: '1rem'
                    }}>
                      {row.category}
                    </td>
                    <td style={{ 
                      padding: '18px 20px', 
                      textAlign: 'center',
                      color: '#92400e',
                      fontSize: '0.95rem'
                    }}>
                      {row.basic}
                    </td>
                    <td style={{ 
                      padding: '18px 20px', 
                      textAlign: 'center',
                      color: '#2f855a',
                      fontWeight: 'bold',
                      fontSize: '0.95rem'
                    }}>
                      {row.enhanced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%)',
            border: '2px solid #3182ce',
            borderRadius: '12px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>📋</div>
              <p style={{ color: '#1e40af', margin: 0, fontSize: '1rem', fontStyle: 'italic' }}>
                <strong>Important Note:</strong> Patients should research and verify which standards providers actually meet, 
                as claims may vary. Independent verification through official sources is always recommended.
              </p>
            </div>
          </div>
        </section>

        {/* Research Guide */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #38a169', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            How to Research Provider Standards
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
            border: '3px solid #38a169',
            borderRadius: '16px',
            padding: '35px',
            margin: '20px 0',
            boxShadow: '0 8px 25px rgba(56, 161, 105, 0.2)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔍</div>
              <h3 style={{ color: '#2f855a', margin: 0, fontSize: '1.5rem' }}>
                Essential Questions to Ask
              </h3>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '25px'
            }}>
              {[
                {
                  title: "Credentials & Training",
                  icon: "📋",
                  questions: [
                    "What type of medical license do you hold?",
                    "Where did you complete your medical education?",
                    "What aesthetic training have you completed?",
                    "How many years of experience do you have?"
                  ]
                },
                {
                  title: "Safety & Emergency Protocols",
                  icon: "🚨",
                  questions: [
                    "What emergency medications are available?",
                    "Is physician oversight available?",
                    "What are your infection control protocols?",
                    "How do you handle complications?"
                  ]
                }
              ].map((section, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '25px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ fontSize: '1.8rem', marginRight: '10px' }}>{section.icon}</div>
                    <h4 style={{ color: '#2f855a', margin: 0, fontSize: '1.1rem' }}>{section.title}</h4>
                  </div>
                  <ul style={{ color: '#2f855a', lineHeight: '1.7', margin: 0, paddingLeft: '20px' }}>
                    {section.questions.map((question, qIndex) => (
                      <li key={qIndex} style={{ marginBottom: '8px' }}>{question}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%)',
            border: '2px solid #e53e3e',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>⚠️</div>
              <h4 style={{ color: '#c53030', margin: 0, fontSize: '1.1rem' }}>
                Research Warning Signs
              </h4>
            </div>
            <ul style={{ color: '#c53030', lineHeight: '1.7', margin: 0, paddingLeft: '20px' }}>
              <li style={{ marginBottom: '5px' }}>Reluctance to provide specific license information</li>
              <li style={{ marginBottom: '5px' }}>Vague responses about emergency preparedness</li>
              <li style={{ marginBottom: '5px' }}>No clear medical oversight structure</li>
              <li>Pressure to make immediate decisions</li>
            </ul>
          </div>
        </section>

        {/* Our Educational Mission */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
            border: '3px solid #38a169',
            borderRadius: '20px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(56, 161, 105, 0.2)'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🎓</div>
            <h2 style={{ color: '#2f855a', marginBottom: '25px', fontSize: '2.2rem' }}>
              Our Educational Mission
            </h2>
            
            <p style={{ color: '#2f855a', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
              Our goal is to help patients understand the importance of quality medical care 
              and provide educational resources for making informed healthcare decisions.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '25px',
              margin: '30px 0'
            }}>
              {[
                { icon: "📚", label: "Educational Resources" },
                { icon: "🔍", label: "Research Guidance" },
                { icon: "🤝", label: "Informed Decisions" },
                { icon: "🛡️", label: "Safety Awareness" }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '25px 15px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{item.icon}</div>
                  <div style={{ color: '#2f855a', fontWeight: 'bold', fontSize: '1rem' }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div style={{
              background: '#38a169',
              color: 'white',
              padding: '25px',
              borderRadius: '12px',
              margin: '25px 0'
            }}>
              <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
                We believe informed patients make better healthcare decisions. We encourage 
                all patients to independently research and verify provider qualifications and standards.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          padding: '50px 40px',
          borderRadius: '20px',
          textAlign: 'center',
          marginBottom: '40px',
          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
        }}>
          <h2 style={{ marginBottom: '25px', fontSize: '2.2rem' }}>Make Informed Healthcare Decisions</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '30px', opacity: '0.95', lineHeight: '1.5' }}>
            Use our educational resources to understand medical standards and research providers thoroughly.
          </p>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            padding: '20px',
            margin: '25px 0'
          }}>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1rem' }}>
              Remember: We encourage independent verification of provider credentials and standards
            </p>
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/#find-providers" 
              style={{
                background: 'white',
                color: '#667eea',
                padding: '18px 35px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                fontSize: '1.1rem',
                transition: 'transform 0.2s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
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
                padding: '16px 33px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                fontSize: '1.1rem',
                transition: 'transform 0.2s ease'
              }}
            >
              📋 Quality Standards Guide
            </a>
          </div>
        </section>

        {/* Final Legal Disclaimer */}
        <div style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          border: '2px solid #dee2e6',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>⚖️</div>
          <h4 style={{ color: '#6c757d', margin: '0 0 15px 0', fontSize: '1.2rem' }}>
            Important Legal Disclaimer
          </h4>
          <p style={{ 
            color: '#6c757d', 
            fontSize: '1rem', 
            margin: 0, 
            lineHeight: '1.6',
            fontStyle: 'italic',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            This information is provided for educational purposes only and does not constitute medical advice, provider recommendations, or guarantees about medical standards or provider qualifications. We make no representations about any provider's adherence to specific standards or protocols. Patients are solely responsible for researching, verifying, and evaluating providers and their standards before making healthcare decisions.
          </p>
        </div>
      </div>
    </Layout>
  );
}