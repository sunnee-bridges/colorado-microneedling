import Layout from '../components/Layout';

export default function VerifiedVsUnverified() {
  return (
    <Layout title="Licensed vs Unlicensed Providers - Understanding the Difference">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚖️</div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '25px', fontWeight: 'bold' }}>
            Licensed vs Unlicensed
          </h1>
          <p style={{ fontSize: '1.4rem', opacity: '0.95', maxWidth: '800px', margin: '0 auto 25px auto', lineHeight: '1.5' }}>
            Understanding the differences between licensed medical professionals and other practitioners
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
            🎓 Educational information for informed decision-making
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
            <strong>This information is for educational purposes only.</strong> Patients are solely responsible for researching and verifying provider credentials, licensing status, and qualifications before scheduling any treatments.
          </p>
        </div>

        {/* Side by Side Comparison */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            textAlign: 'center', 
            marginBottom: '40px',
            fontSize: '2rem',
            borderBottom: '4px solid #667eea',
            paddingBottom: '15px'
          }}>
            Understanding Provider Types
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            margin: '30px 0'
          }}>
            {/* Licensed Side */}
            <div style={{
              background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
              border: '4px solid #38a169',
              borderRadius: '20px',
              padding: '35px',
              boxShadow: '0 8px 25px rgba(56, 161, 105, 0.2)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#38a169',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}>
                LICENSED PROFESSIONALS
              </div>

              <div style={{ textAlign: 'center', marginBottom: '25px', marginTop: '10px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>✅</div>
                <h3 style={{ color: '#2f855a', fontSize: '1.6rem', margin: 0 }}>
                  Licensed Medical Professionals
                </h3>
              </div>

              {[
                {
                  title: "Provider Types",
                  icon: "👨‍⚕️",
                  items: [
                    "Medical Doctors (MD/DO)",
                    "Nurse Practitioners (NP)",
                    "Physician Assistants (PA)",
                    "Registered Nurses (RN) with supervision"
                  ]
                },
                {
                  title: "Education & Training",
                  icon: "🎓",
                  items: [
                    "4-8 years medical/nursing education",
                    "Extensive clinical training",
                    "Anatomy and physiology knowledge",
                    "Emergency response training"
                  ]
                },
                {
                  title: "Professional Standards",
                  icon: "📋",
                  items: [
                    "State medical board licensing",
                    "Continuing education requirements",
                    "Professional liability insurance",
                    "Established safety protocols"
                  ]
                }
              ].map((section, index) => (
                <div key={index} style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>{section.icon}</span>
                    <h4 style={{ color: '#2f855a', margin: 0, fontSize: '1.1rem' }}>{section.title}</h4>
                  </div>
                  <ul style={{ color: '#2f855a', lineHeight: '1.7', margin: 0, paddingLeft: '32px' }}>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ marginBottom: '5px' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div style={{
                background: '#38a169',
                color: 'white',
                padding: '18px',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}>
                ✅ Research These Qualifications
              </div>
            </div>

            {/* Non-Licensed Side */}
            <div style={{
              background: 'linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%)',
              border: '4px solid #e53e3e',
              borderRadius: '20px',
              padding: '35px',
              boxShadow: '0 8px 25px rgba(229, 62, 62, 0.2)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#e53e3e',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}>
                OTHER PRACTITIONERS
              </div>

              <div style={{ textAlign: 'center', marginBottom: '25px', marginTop: '10px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>❓</div>
                <h3 style={{ color: '#c53030', fontSize: '1.6rem', margin: 0 }}>
                  Other Practitioners
                </h3>
              </div>

              {[
                {
                  title: "Various Types",
                  icon: "🤔",
                  items: [
                    "Estheticians (verify scope of practice)",
                    '"Certified injectors" (verify actual licensing)',
                    "Medical assistants (verify supervision)",
                    "Other practitioners (research credentials)"
                  ]
                },
                {
                  title: "Questions to Ask",
                  icon: "📚",
                  items: [
                    "What type of license do you have?",
                    "What is your medical training background?",
                    "Are you supervised by a physician?",
                    "What emergency protocols are in place?"
                  ]
                },
                {
                  title: "Verification Steps",
                  icon: "🔍",
                  items: [
                    "Check state board licensing websites",
                    "Understand scope of practice limits",
                    "Ask about insurance coverage",
                    "Verify professional oversight"
                  ]
                }
              ].map((section, index) => (
                <div key={index} style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>{section.icon}</span>
                    <h4 style={{ color: '#c53030', margin: 0, fontSize: '1.1rem' }}>{section.title}</h4>
                  </div>
                  <ul style={{ color: '#c53030', lineHeight: '1.7', margin: 0, paddingLeft: '32px' }}>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ marginBottom: '5px' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div style={{
                background: '#e53e3e',
                color: 'white',
                padding: '18px',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}>
                ❓ Verify All Credentials Independently
              </div>
            </div>
          </div>
        </section>

        {/* Research Checklist */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #3182ce', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            🔍 Patient Research Checklist
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)',
            border: '3px solid #3182ce',
            borderRadius: '16px',
            padding: '35px',
            margin: '20px 0',
            boxShadow: '0 8px 25px rgba(49, 130, 206, 0.2)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
            }}>
              {[
                {
                  title: "Essential Verifications",
                  icon: "✅",
                  color: "#38a169",
                  items: [
                    "Verify license through state boards",
                    "Confirm educational background",
                    "Check for disciplinary actions",
                    "Understand supervision requirements",
                    "Ask about emergency protocols"
                  ]
                },
                {
                  title: "Warning Signs",
                  icon: "❌",
                  color: "#e53e3e",
                  items: [
                    "Unwilling to provide license numbers",
                    "Vague about qualifications",
                    "No clear medical oversight",
                    "Pressure to decide immediately",
                    "No emergency protocols discussed"
                  ]
                },
                {
                  title: "Value Considerations",
                  icon: "💰",
                  color: "#d69e2e",
                  items: [
                    "Quality of care vs. cost",
                    "Follow-up care included",
                    "Emergency support available",
                    "Provider accessibility post-treatment",
                    "Long-term results and safety"
                  ]
                }
              ].map((section, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '25px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: `2px solid ${section.color}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ fontSize: '1.8rem', marginRight: '10px' }}>{section.icon}</div>
                    <h4 style={{ color: section.color, margin: 0, fontSize: '1.2rem' }}>{section.title}</h4>
                  </div>
                  <ul style={{ color: section.color, lineHeight: '1.7', margin: 0, paddingLeft: '20px' }}>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ marginBottom: '8px' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directory Approach Comparison */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #d69e2e', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            Different Directory Approaches
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
                    Directory Feature
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
                    Quality-Focused
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
                    General Directories
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    standard: "Provider Screening",
                    quality: "✅ Focus on licensed professionals",
                    general: "❓ Varies by directory"
                  },
                  {
                    standard: "Patient Education",
                    quality: "✅ Provide verification guidance",
                    general: "❓ Limited educational resources"
                  },
                  {
                    standard: "Quality Standards",
                    quality: "✅ Promote high standards",
                    general: "❓ Standards may vary"
                  },
                  {
                    standard: "Transparency",
                    quality: "✅ Clear about limitations",
                    general: "❓ May vary in transparency"
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
                      {row.standard}
                    </td>
                    <td style={{ 
                      padding: '18px 20px', 
                      textAlign: 'center',
                      color: '#2f855a',
                      fontWeight: 'bold',
                      fontSize: '0.95rem'
                    }}>
                      {row.quality}
                    </td>
                    <td style={{ 
                      padding: '18px 20px', 
                      textAlign: 'center',
                      color: '#92400e',
                      fontWeight: 'bold',
                      fontSize: '0.95rem'
                    }}>
                      {row.general}
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
                <strong>Note:</strong> Regardless of directory type, patients should always independently verify provider credentials, licensing status, and qualifications before scheduling treatments.
              </p>
            </div>
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
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '25px',
              margin: '30px 0'
            }}>
              {[
                { icon: "📚", label: "Patient Education" },
                { icon: "🔍", label: "Verification Guidance" },
                { icon: "🤝", label: "Informed Decisions" },
                { icon: "🛡️", label: "Safety Focus" }
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

            <p style={{ color: '#2f855a', fontSize: '1.2rem', margin: '25px 0', lineHeight: '1.6', maxWidth: '600px', margin: '25px auto' }}>
              We strive to feature licensed medical professionals and provide educational resources 
              to help patients make informed decisions. <strong>We encourage all patients to 
              independently verify provider credentials.</strong>
            </p>
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
            Use our educational resources to understand provider qualifications and research credentials independently.
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
              Remember: Always verify provider credentials through official state boards
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
              🔍 Browse Featured Providers
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
              📋 Quality Standards
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
            This information is provided for educational purposes only and does not constitute medical advice or provider recommendations. 
            Patients are solely responsible for researching, verifying, and selecting healthcare providers. 
            Always consult with qualified medical professionals for personalized guidance.
          </p>
        </div>
      </div>
    </Layout>
  );
}