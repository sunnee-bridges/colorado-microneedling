import Layout from '../components/Layout';

export default function WhyVerificationMatters() {
  return (
    <Layout title="Why Credentials Matter - Understanding Licensed Medical Professionals">
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
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚠️</div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '25px', fontWeight: 'bold' }}>
            Why Credentials Matter
          </h1>
          <p style={{ fontSize: '1.4rem', opacity: '0.95', maxWidth: '700px', margin: '0 auto 25px auto', lineHeight: '1.5' }}>
            Understanding the importance of licensed medical professionals for aesthetic procedures
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
            🎓 Patient education about provider qualifications
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
            <strong>This information is for educational purposes only.</strong> Patients are solely responsible for researching and verifying provider credentials, licensing status, and qualifications before scheduling any treatments. Always consult with qualified healthcare providers for personalized medical advice.
          </p>
        </div>

        {/* Why Credentials Matter */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #667eea', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            Understanding Provider Qualifications
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            margin: '30px 0'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%)',
              border: '3px solid #e53e3e',
              borderRadius: '16px',
              padding: '25px',
              boxShadow: '0 6px 20px rgba(229, 62, 62, 0.15)',
              transition: 'transform 0.2s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2rem', marginRight: '12px' }}>❓</div>
                <h4 style={{ color: '#e53e3e', margin: 0, fontSize: '1.3rem' }}>Questions to Consider</h4>
              </div>
              <ul style={{ color: '#666', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>What type of license does the provider have?</li>
                <li style={{ marginBottom: '8px' }}>What is their medical training background?</li>
                <li style={{ marginBottom: '8px' }}>Are they supervised by a physician?</li>
                <li style={{ marginBottom: '8px' }}>What emergency protocols are in place?</li>
                <li>Can I verify their credentials online?</li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
              border: '3px solid #38a169',
              borderRadius: '16px',
              padding: '25px',
              boxShadow: '0 6px 20px rgba(56, 161, 105, 0.15)',
              transition: 'transform 0.2s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2rem', marginRight: '12px' }}>✅</div>
                <h4 style={{ color: '#38a169', margin: 0, fontSize: '1.3rem' }}>Benefits of Medical Training</h4>
              </div>
              <ul style={{ color: '#666', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>Formal anatomy and physiology education</li>
                <li style={{ marginBottom: '8px' }}>Emergency response training</li>
                <li style={{ marginBottom: '8px' }}>Understanding of medications and interactions</li>
                <li style={{ marginBottom: '8px' }}>Sterile technique and safety protocols</li>
                <li>State board oversight and accountability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Colorado Licensing Types */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #38a169', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            Understanding Colorado Medical Licenses
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
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏥</div>
              <p style={{ color: '#2f855a', marginBottom: '0', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Patients should understand that different providers have different licensing requirements and scopes of practice. We encourage independent verification of all credentials.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ fontSize: '1.8rem', marginRight: '10px' }}>🩺</div>
                  <h4 style={{ color: '#38a169', margin: 0 }}>Medical Licenses to Research</h4>
                </div>
                <ul style={{ color: '#2f855a', lineHeight: '1.7', margin: 0, paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Medical Doctors (MD/DO)</strong> - Independent practice</li>
                  <li style={{ marginBottom: '8px' }}><strong>Nurse Practitioners (NP)</strong> - Advanced practice nursing</li>
                  <li style={{ marginBottom: '8px' }}><strong>Physician Assistants (PA)</strong> - Physician collaboration</li>
                  <li><strong>Registered Nurses (RN)</strong> - Physician supervision</li>
                </ul>
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ fontSize: '1.8rem', marginRight: '10px' }}>🔍</div>
                  <h4 style={{ color: '#e53e3e', margin: 0 }}>Verification Resources</h4>
                </div>
                <ul style={{ color: '#c53030', lineHeight: '1.7', margin: 0, paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Colorado Medical Board</strong> - MD/DO licenses</li>
                  <li style={{ marginBottom: '8px' }}><strong>Colorado Board of Nursing</strong> - RN/NP licenses</li>
                  <li style={{ marginBottom: '8px' }}><strong>Provider consultation</strong> - Ask directly</li>
                  <li><strong>Facility assessment</strong> - Visit and evaluate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Guide */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #3182ce', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            🔍 How to Research Your Provider
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)',
            border: '3px solid #3182ce',
            borderRadius: '16px',
            padding: '35px',
            margin: '20px 0',
            boxShadow: '0 8px 25px rgba(49, 130, 206, 0.2)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔍</div>
              <h3 style={{ color: '#2c5282', margin: 0, fontSize: '1.5rem' }}>
                Essential Questions to Ask
              </h3>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ fontSize: '1.8rem', marginRight: '10px' }}>📋</div>
                  <h4 style={{ color: '#2c5282', margin: 0 }}>Credentials & Training</h4>
                </div>
                <ul style={{ color: '#2c5282', lineHeight: '1.7', fontSize: '0.95rem', margin: 0, paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>What type of medical license do you hold?</li>
                  <li style={{ marginBottom: '8px' }}>Can you provide your license number?</li>
                  <li style={{ marginBottom: '8px' }}>What is your educational background?</li>
                  <li>How long have you been doing these procedures?</li>
                </ul>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ fontSize: '1.8rem', marginRight: '10px' }}>🏥</div>
                  <h4 style={{ color: '#2c5282', margin: 0 }}>Safety & Oversight</h4>
                </div>
                <ul style={{ color: '#2c5282', lineHeight: '1.7', fontSize: '0.95rem', margin: 0, paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Is there physician supervision or oversight?</li>
                  <li style={{ marginBottom: '8px' }}>What emergency protocols are in place?</li>
                  <li style={{ marginBottom: '8px' }}>What products do you use and where sourced?</li>
                  <li>Can you show examples of your work?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Scenarios */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #d69e2e', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px'
          }}>
            Educational Examples
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
            border: '2px solid #a0aec0',
            borderRadius: '12px',
            padding: '25px',
            marginBottom: '30px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>📚</div>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1rem', fontStyle: 'italic' }}>
                <strong>Educational Note:</strong> The following are hypothetical scenarios created for educational purposes to illustrate potential issues. These help patients understand what questions to ask.
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                title: "Research Success Story",
                scenario: "A patient verified a provider's medical license online and confirmed their training before proceeding with treatment at a licensed medical facility.",
                outcome: "Patient made an educated choice",
                icon: "✅",
                color: "#38a169"
              },
              {
                title: "Safety Question Example",
                scenario: "Before booking, a patient asked about emergency protocols and physician oversight. When the facility couldn't provide clear answers, the patient chose a medical clinic instead.",
                outcome: "Patient chose appropriate setting",
                icon: "🛡️",
                color: "#3182ce"
              },
              {
                title: "Credential Check Example",
                scenario: "A patient researched a provider's credentials and discovered they only had an esthetician license. The patient decided to seek a licensed medical professional instead.",
                outcome: "Patient made informed decision",
                icon: "🔍",
                color: "#d69e2e"
              }
            ].map((story, index) => (
              <div key={index} style={{
                background: 'white',
                border: `2px solid ${story.color}`,
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ fontSize: '1.8rem', marginRight: '10px' }}>{story.icon}</div>
                  <h4 style={{ color: story.color, margin: 0, fontSize: '1.1rem' }}>{story.title}</h4>
                </div>
                <p style={{ color: '#666', margin: '15px 0', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {story.scenario}
                </p>
                <div style={{
                  background: `${story.color}15`,
                  padding: '10px',
                  borderRadius: '8px',
                  marginTop: '15px'
                }}>
                  <p style={{ color: story.color, margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>
                    <strong>Result:</strong> {story.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Educational Approach */}
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
              Our Patient Education Focus
            </h2>
            <p style={{ color: '#2f855a', fontSize: '1.2rem', marginBottom: '30px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 30px auto' }}>
              Our goal is to help patients understand the importance of provider qualifications and encourage independent verification of credentials. We believe informed patients make better decisions.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '30px',
              margin: '30px 0'
            }}>
              {[
                { icon: "📚", label: "Patient Education" },
                { icon: "🔍", label: "Research Tools" },
                { icon: "✅", label: "Verification Support" },
                { icon: "🤝", label: "Informed Decisions" }
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
          <h2 style={{ marginBottom: '25px', fontSize: '2.2rem' }}>Make Informed Decisions</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '35px', opacity: '0.95', lineHeight: '1.5' }}>
            Use our educational resources to understand provider qualifications and make informed choices about your care.
          </p>
          
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
              📋 Our Quality Standards
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
            We make no claims about specific providers or their qualifications. Patients are solely responsible for researching, 
            verifying, and selecting healthcare providers. Always consult with qualified medical professionals for personalized guidance.
          </p>
        </div>
      </div>
    </Layout>
  );
}