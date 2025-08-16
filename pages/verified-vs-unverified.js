import Layout from '../components/Layout';

export default function VerifiedVsUnverified() {
  return (
    <Layout title="Licensed vs Unlicensed Providers - Understanding the Difference">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px 30px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
            ⚖️ Licensed vs Unlicensed
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.95', maxWidth: '800px', margin: '0 auto 20px auto' }}>
            Understanding the differences between licensed medical professionals and other practitioners
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '25px',
            padding: '10px 25px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            🎯 Educational information for informed decision-making
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
            <strong>This information is for educational purposes only.</strong> Patients are solely responsible for researching and verifying provider credentials, licensing status, and qualifications before scheduling any treatments. We make no guarantees about any provider's qualifications or credentials.
          </p>
        </div>

        {/* Side by Side Comparison */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>
            Understanding Provider Types
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            margin: '30px 0'
          }}>
            {/* Licensed Side */}
            <div style={{
              background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
              border: '3px solid #28a745',
              borderRadius: '12px',
              padding: '30px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.8rem', marginBottom: '10px' }}>
                  ✅ Licensed Medical Professionals
                </h3>
                <div style={{
                  background: '#28a745',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  What to Look For
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>👨‍⚕️ Types of Licensed Providers</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Licensed Medical Doctors (MD/DO)</li>
                  <li>Licensed Nurse Practitioners (NP)</li>
                  <li>Licensed Physician Assistants (PA)</li>
                  <li>Registered Nurses (RN) with proper supervision</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>🎓 Typical Education & Training</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>4-8 years medical/nursing education</li>
                  <li>Extensive clinical training hours</li>
                  <li>Anatomy and physiology knowledge</li>
                  <li>Specialized aesthetic training programs</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>📋 Professional Standards</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>State medical board licensing</li>
                  <li>Continuing education requirements</li>
                  <li>Professional liability insurance</li>
                  <li>Disciplinary oversight systems</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>🚨 Safety Considerations</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Emergency response training</li>
                  <li>Access to emergency medications</li>
                  <li>Physician consultation available</li>
                  <li>Established safety protocols</li>
                </ul>
              </div>

              <div style={{
                background: '#28a745',
                color: 'white',
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                ✅ Research These Qualifications
              </div>
            </div>

            {/* Non-Licensed Side */}
            <div style={{
              background: 'linear-gradient(135deg, #f8d7da 0%, #f1c0c7 100%)',
              border: '3px solid #dc3545',
              borderRadius: '12px',
              padding: '30px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ color: '#dc3545', fontSize: '1.8rem', marginBottom: '10px' }}>
                  ❓ Other Types of Practitioners
                </h3>
                <div style={{
                  background: '#dc3545',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  Questions to Ask
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>🤔 Various Provider Types</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Estheticians (verify scope of practice)</li>
                  <li>"Certified injectors" (verify actual licensing)</li>
                  <li>Medical assistants (verify supervision)</li>
                  <li>Other practitioners (research credentials)</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>📚 Training Questions to Ask</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>What type of training do you have?</li>
                  <li>How long was your education program?</li>
                  <li>Do you have medical education?</li>
                  <li>What is your certification in?</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>🔍 Important Considerations</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Verify licensing through state boards</li>
                  <li>Understand scope of practice limits</li>
                  <li>Ask about insurance coverage</li>
                  <li>Research professional oversight</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>⚠️ Safety Questions</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>What emergency training do you have?</li>
                  <li>Are emergency medications available?</li>
                  <li>Is a physician available if needed?</li>
                  <li>What are your safety protocols?</li>
                </ul>
              </div>

              <div style={{
                background: '#dc3545',
                color: 'white',
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                ❓ Verify All Credentials Independently
              </div>
            </div>
          </div>
        </section>

        {/* Directory Approach Comparison */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
            Different Directory Approaches
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
                    Directory Feature
                  </th>
                  <th style={{ 
                    padding: '15px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #dee2e6',
                    background: '#e8f5e8',
                    color: '#28a745',
                    fontWeight: 'bold'
                  }}>
                    Quality-Focused Directories
                  </th>
                  <th style={{ 
                    padding: '15px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #dee2e6',
                    background: '#fff3cd',
                    color: '#856404',
                    fontWeight: 'bold'
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
                    standard: "Credential Verification",
                    quality: "✅ Encourage patient verification",
                    general: "❓ May rely on self-reporting"
                  },
                  {
                    standard: "Educational Requirements",
                    quality: "✅ Emphasize medical education",
                    general: "❓ Various requirements"
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
                    background: index % 2 === 0 ? '#fff' : '#f8f9fa'
                  }}>
                    <td style={{ padding: '12px 15px', fontWeight: 'bold' }}>
                      {row.standard}
                    </td>
                    <td style={{ 
                      padding: '12px 15px', 
                      textAlign: 'center',
                      color: '#28a745',
                      fontWeight: 'bold'
                    }}>
                      {row.quality}
                    </td>
                    <td style={{ 
                      padding: '12px 15px', 
                      textAlign: 'center',
                      color: '#856404',
                      fontWeight: 'bold'
                    }}>
                      {row.general}
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
              <strong>Note:</strong> Regardless of directory type, patients should always independently verify provider credentials, licensing status, and qualifications before scheduling treatments.
            </p>
          </div>
        </section>

        {/* Understanding Potential Risks */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#dc3545', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            Understanding Different Provider Approaches
          </h2>
          
          <div style={{
            background: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#856404', marginBottom: '20px' }}>
              📚 Educational Information: Directory Variations
            </h3>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#856404', marginBottom: '10px' }}>💰 Different Business Models</h4>
                <p style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Some directories operate on payment-based listing models, while others focus on specific 
                  qualifications. Patients should understand how providers are selected for listings.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#856404', marginBottom: '10px' }}>📋 Varying Standards</h4>
                <p style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Different directories may have different requirements for listing providers. 
                  Patients should research these standards and verify credentials independently.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#856404', marginBottom: '10px' }}>🔍 Information Sources</h4>
                <p style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Some directories rely on provider self-reporting, while others may conduct 
                  verification. Patients should always verify information through official sources.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#856404', marginBottom: '10px' }}>⚖️ Patient Responsibility</h4>
                <p style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Regardless of directory claims, patients are responsible for verifying provider 
                  credentials and making informed decisions about their healthcare choices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Costs and Considerations */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #ffc107', paddingBottom: '10px' }}>
            Cost and Quality Considerations
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            margin: '30px 0'
          }}>
            <div style={{
              background: 'white',
              border: '2px solid #28a745',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#28a745', marginBottom: '15px' }}>💰 Value Considerations</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li><strong>Quality of care:</strong> Consider training and experience</li>
                <li><strong>Safety protocols:</strong> Emergency preparedness</li>
                <li><strong>Follow-up care:</strong> Post-treatment support</li>
                <li><strong>Long-term results:</strong> Quality vs. cost</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              border: '2px solid #ffc107',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#856404', marginBottom: '15px' }}>🤔 Questions to Consider</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li><strong>What's included in the price?</strong></li>
                <li><strong>Are follow-ups included?</strong></li>
                <li><strong>What if complications arise?</strong></li>
                <li><strong>Is the provider accessible post-treatment?</strong></li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              border: '2px solid #6f42c1',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#6f42c1', marginBottom: '15px' }}>🎯 Decision Factors</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li><strong>Provider qualifications</strong></li>
                <li><strong>Facility standards</strong></li>
                <li><strong>Patient reviews and outcomes</strong></li>
                <li><strong>Communication and comfort level</strong></li>
              </ul>
            </div>
          </div>

          <div style={{
            background: '#e7f3ff',
            border: '1px solid #b3d9ff',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#004085', marginBottom: '10px' }}>
              💡 Making Informed Decisions
            </h4>
            <p style={{ color: '#004085', fontSize: '1.1rem', margin: 0 }}>
              Consider all factors when choosing a provider. The lowest price may not always provide 
              the best value when considering qualifications, safety, and long-term results.
            </p>
          </div>
        </section>

        {/* How to Research Providers */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
            🔍 How to Research Any Provider
          </h2>
          
          <div style={{
            background: '#e7f3ff',
            border: '1px solid #b3d9ff',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#004085', marginBottom: '20px' }}>
              ✅ Patient Research Checklist
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#004085', marginBottom: '10px' }}>Essential Verifications</h4>
                <ul style={{ color: '#004085', lineHeight: '1.6' }}>
                  <li>✅ Verify license through state boards</li>
                  <li>✅ Confirm educational background</li>
                  <li>✅ Check for disciplinary actions</li>
                  <li>✅ Understand supervision requirements</li>
                  <li>✅ Review facility credentials</li>
                  <li>✅ Ask about emergency protocols</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>Warning Signs</h4>
                <ul style={{ color: '#dc3545', lineHeight: '1.6' }}>
                  <li>❌ Unwilling to provide license numbers</li>
                  <li>❌ Vague about qualifications</li>
                  <li>❌ No clear medical oversight</li>
                  <li>❌ Pressure to decide immediately</li>
                  <li>❌ Prices significantly below market</li>
                  <li>❌ No emergency protocols discussed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Educational Approach */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our Educational Mission
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
            border: '2px solid #28a745',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#155724', marginBottom: '20px' }}>
              🎓 Empowering Patient Education
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minMax(250px, 1fr))',
              gap: '25px',
              margin: '20px 0'
            }}>
              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📚</div>
                <h4 style={{ color: '#155724', marginBottom: '10px' }}>Educational Resources</h4>
                <p style={{ color: '#155724', fontSize: '0.9rem', margin: 0 }}>
                  Providing information to help patients understand provider qualifications
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔍</div>
                <h4 style={{ color: '#155724', marginBottom: '10px' }}>Verification Guidance</h4>
                <p style={{ color: '#155724', fontSize: '0.9rem', margin: 0 }}>
                  Teaching patients how to research and verify credentials
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤝</div>
                <h4 style={{ color: '#155724', marginBottom: '10px' }}>Informed Decisions</h4>
                <p style={{ color: '#155724', fontSize: '0.9rem', margin: 0 }}>
                  Helping patients make educated healthcare choices
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🛡️</div>
                <h4 style={{ color: '#155724', marginBottom: '10px' }}>Safety Focus</h4>
                <p style={{ color: '#155724', fontSize: '0.9rem', margin: 0 }}>
                  Emphasizing the importance of qualified medical care
                </p>
              </div>
            </div>

            <div style={{
              background: '#28a745',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              margin: '20px 0'
            }}>
              <h4 style={{ margin: '0 0 10px 0' }}>Our Commitment</h4>
              <p style={{ margin: '0', fontSize: '1.1rem' }}>
                We strive to feature licensed medical professionals and provide educational resources 
                to help patients make informed decisions. <strong>We encourage all patients to 
                independently verify provider credentials.</strong>
              </p>
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
          <h2 style={{ marginBottom: '20px' }}>Make Informed Healthcare Decisions</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.95' }}>
            Use our educational resources to understand provider qualifications and research credentials independently.
          </p>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <p style={{ margin: 0, fontStyle: 'italic' }}>
              Remember: Always verify provider credentials through official state boards and 
              make your own informed decisions about healthcare providers.
            </p>
          </div>

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
              📋 Quality Standards
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
            This information is provided for educational purposes only and does not constitute medical advice, provider recommendations, or guarantees about provider qualifications. We make no representations about any provider's credentials or qualifications. Patients are solely responsible for researching, verifying, and selecting healthcare providers. Always consult with qualified medical professionals for personalized guidance.
          </p>
        </div>
      </div>
    </Layout>
  );
}