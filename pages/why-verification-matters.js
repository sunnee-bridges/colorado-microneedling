import Layout from '../components/Layout';

export default function WhyVerificationMatters() {
  return (
    <Layout title="Why Credentials Matter - Understanding Licensed Medical Professionals">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
          color: 'white',
          padding: '40px 30px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
            ⚠️ Why Credentials Matter
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.95', maxWidth: '700px', margin: '0 auto 20px auto' }}>
            Understanding the importance of licensed medical professionals for aesthetic procedures
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '25px',
            padding: '10px 25px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            🚨 Patient education about provider qualifications
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
            <strong>This information is for educational purposes only.</strong> Patients are solely responsible for researching and verifying provider credentials, licensing status, and qualifications before scheduling any treatments. Always consult with qualified healthcare providers for personalized medical advice.
          </p>
        </div>

        {/* The Importance of Credentials Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#dc3545', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            Understanding Provider Qualifications
          </h2>
          
          <div style={{
            background: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#721c24', marginBottom: '15px' }}>
              📚 Educational Information: Provider Types
            </h3>
            <p style={{ color: '#721c24', fontSize: '1.1rem', lineHeight: '1.6' }}>
              It's important for patients to understand the different types of providers who may offer aesthetic services. 
              Not all providers have the same level of medical training or licensing. <strong>We encourage patients to research 
              and verify credentials independently.</strong>
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            margin: '30px 0'
          }}>
            <div style={{
              background: 'white',
              border: '2px solid #dc3545',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#dc3545', marginBottom: '15px' }}>⚠️ Questions to Consider</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li>What type of license does the provider have?</li>
                <li>What is their medical training background?</li>
                <li>Are they supervised by a physician?</li>
                <li>What emergency protocols are in place?</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              border: '2px solid #ffc107',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#856404', marginBottom: '15px' }}>📋 Research Recommendations</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li>Verify licenses through state boards</li>
                <li>Ask about medical training and experience</li>
                <li>Understand the facility's safety protocols</li>
                <li>Seek referrals from trusted sources</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Educational Case Studies Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            Educational Case Studies
          </h2>
          
          <div style={{
            background: '#d1ecf1',
            border: '1px solid #bee5eb',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <p style={{ color: '#0c5460', margin: 0, fontSize: '1rem', fontStyle: 'italic' }}>
              <strong>Educational Note:</strong> The following are hypothetical scenarios created for educational purposes 
              to illustrate potential issues that may arise. These are not specific claims about any providers and are 
              meant to help patients understand what questions to ask.
            </p>
          </div>
          
          <div style={{ margin: '30px 0' }}>
            {[
              {
                location: "Educational Scenario A",
                story: "A patient researched a provider's credentials and discovered they only had an esthetician license, which may not authorize certain procedures. The patient decided to seek a licensed medical professional instead.",
                outcome: "Patient made an informed decision"
              },
              {
                location: "Educational Scenario B",
                story: "Before booking, a patient asked about emergency protocols and physician oversight. The facility couldn't provide clear answers, so the patient chose a medical clinic with established safety procedures.",
                outcome: "Patient chose a more appropriate setting"
              },
              {
                location: "Educational Scenario C",
                story: "A patient verified a provider's medical license online and confirmed their training background before proceeding with treatment at a licensed medical facility.",
                outcome: "Patient made an educated choice"
              }
            ].map((story, index) => (
              <div key={index} style={{
                background: '#e8f4fd',
                border: '1px solid #bee5eb',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                  <h4 style={{ color: '#0c5460', margin: 0 }}>📚 {story.location}</h4>
                  <span style={{
                    background: '#17a2b8',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: '0.8rem'
                  }}>
                    Educational Example
                  </span>
                </div>
                <p style={{ color: '#0c5460', margin: '10px 0', fontStyle: 'italic' }}>
                  {story.story}
                </p>
                <p style={{ color: '#0c5460', margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>
                  <strong>Outcome:</strong> {story.outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Requirements Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Understanding Colorado Licensing Requirements
          </h2>
          
          <div style={{
            background: '#e8f5e8',
            border: '2px solid #28a745',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#155724', marginBottom: '15px' }}>
              📋 Educational Information: Licensing in Colorado
            </h3>
            <p style={{ color: '#155724', marginBottom: '15px' }}>
              Patients should understand that different types of providers have different licensing requirements. 
              We encourage patients to research these requirements and verify provider credentials independently.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>💡 Research These Licenses</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6' }}>
                  <li><strong>Medical Doctors (MD/DO)</strong></li>
                  <li><strong>Nurse Practitioners (NP)</strong></li>
                  <li><strong>Physician Assistants (PA)</strong></li>
                  <li><strong>Registered Nurses (RN)</strong></li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>❓ Questions to Ask</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6' }}>
                  <li>What type of license do you have?</li>
                  <li>Can I verify your license online?</li>
                  <li>What is your medical training?</li>
                  <li>Is there physician supervision?</li>
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
            <p style={{ color: '#856404', margin: 0, fontSize: '1rem' }}>
              <strong>💡 Patient Education:</strong> Patients should verify provider licensing and qualifications 
              through official state boards and ensure they understand what type of provider they are seeing. 
              Different licenses have different scopes of practice and supervision requirements.
            </p>
          </div>
        </section>

        {/* Benefits of Medical Professionals */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Understanding Medical Professional Training
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            margin: '30px 0'
          }}>
            {[
              {
                icon: "🧠",
                title: "Medical Education",
                description: "Formal medical or nursing school training",
                details: "Anatomy, physiology, pharmacology, and clinical training"
              },
              {
                icon: "🚨",
                title: "Emergency Training",
                description: "Education in handling medical emergencies",
                details: "Recognition and management of adverse reactions"
              },
              {
                icon: "💉",
                title: "Clinical Experience",
                description: "Hands-on medical practice and procedures",
                details: "Sterile technique and injection procedures"
              },
              {
                icon: "📋",
                title: "Professional Oversight",
                description: "Licensed and regulated by state boards",
                details: "Continuing education and professional standards"
              },
              {
                icon: "🔬",
                title: "Medical Knowledge",
                description: "Understanding of medications and treatments",
                details: "Product knowledge, contraindications, and interactions"
              },
              {
                icon: "🏥",
                title: "Medical Environment",
                description: "Practice in medical facilities with proper equipment",
                details: "Access to emergency supplies and physician support"
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
                <h4 style={{ color: '#333', marginBottom: '10px' }}>{benefit.title}</h4>
                <p style={{ color: '#666', marginBottom: '10px', fontSize: '1rem' }}>
                  {benefit.description}
                </p>
                <p style={{ color: '#888', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Guidelines Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#dc3545', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            🔍 Patient Research Guidelines
          </h2>
          
          <div style={{
            background: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <p style={{ color: '#721c24', fontSize: '1.1rem', marginBottom: '20px', fontWeight: 'bold' }}>
              We encourage patients to research the following before choosing any provider:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#721c24', marginBottom: '10px' }}>🔍 Credential Research</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6' }}>
                  <li>Verify license type and status</li>
                  <li>Check state board websites</li>
                  <li>Confirm educational background</li>
                  <li>Ask about medical training</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#721c24', marginBottom: '10px' }}>🏥 Facility Assessment</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6' }}>
                  <li>Understand supervision structure</li>
                  <li>Ask about emergency protocols</li>
                  <li>Verify facility licensing</li>
                  <li>Assess overall professionalism</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#721c24', marginBottom: '10px' }}>💰 Value Assessment</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6' }}>
                  <li>Compare qualifications vs. pricing</li>
                  <li>Understand what's included</li>
                  <li>Ask about follow-up care</li>
                  <li>Consider long-term value</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Research Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
            🔍 How to Research Your Provider
          </h2>
          
          <div style={{
            background: '#e7f3ff',
            border: '1px solid #b3d9ff',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#004085', marginBottom: '20px' }}>
              ✅ Questions Patients Should Ask
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                "What type of medical license do you hold?",
                "Can you provide your license number for verification?",
                "What is your educational and training background?",
                "How long have you been performing these procedures?",
                "Is there physician supervision or oversight?",
                "What emergency protocols do you have in place?",
                "Can you show examples of your previous work?",
                "What products do you use and where do you source them?"
              ].map((question, index) => (
                <div key={index} style={{
                  background: 'white',
                  border: '1px solid #b3d9ff',
                  borderRadius: '6px',
                  padding: '12px',
                  color: '#004085'
                }}>
                  <strong>{index + 1}.</strong> {question}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '8px',
            padding: '20px'
          }}>
            <h4 style={{ color: '#155724', marginBottom: '10px' }}>
              💡 License Verification Resources
            </h4>
            <p style={{ color: '#155724', margin: 0 }}>
              Patients can verify Colorado medical licenses through official state board websites. 
              We encourage patients to independently verify all provider credentials before scheduling treatments.
            </p>
          </div>
        </section>

        {/* Our Approach Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our Educational Approach
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
            border: '2px solid #28a745',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#155724', marginBottom: '20px' }}>
              🎓 Patient Education Focus
            </h3>
            <p style={{ color: '#155724', fontSize: '1.1rem', marginBottom: '20px' }}>
              Our goal is to help patients understand the importance of provider qualifications and 
              encourage independent verification of credentials. We believe informed patients make better decisions.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📚</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Patient Education</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔍</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Research Tools</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✅</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Verification Support</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤝</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Informed Decisions</div>
              </div>
            </div>
            
            <div style={{
              background: '#28a745',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '25px',
              display: 'inline-block',
              marginTop: '20px',
              fontWeight: 'bold'
            }}>
              🎯 Empowering Patient Choice Through Education
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
          <h2 style={{ marginBottom: '20px' }}>Make Informed Decisions</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.95' }}>
            Use our educational resources to understand provider qualifications and make informed choices about your care.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/#find-providers" 
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
              📋 Our Quality Standards
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
            This information is provided for educational purposes only and does not constitute medical advice or provider recommendations. 
            We make no claims about specific providers or their qualifications. Patients are solely responsible for researching, 
            verifying, and selecting healthcare providers. Always consult with qualified medical professionals for personalized guidance.
          </p>
        </div>
      </div>
    </Layout>
  );
}