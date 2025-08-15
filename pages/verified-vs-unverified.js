import Layout from '../components/Layout';

export default function VerifiedVsUnverified() {
  return (
    <Layout title="Verified vs Unverified Providers - The Critical Difference for Your Safety">
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
            ⚖️ Verified vs Unverified
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.95', maxWidth: '800px', margin: '0 auto 20px auto' }}>
            The critical differences between verified medical professionals and unlicensed practitioners
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '25px',
            padding: '10px 25px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            🎯 Make an informed choice for your safety
          </div>
        </div>

        {/* Side by Side Comparison */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>
            The Choice is Clear
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            margin: '30px 0'
          }}>
            {/* Verified Side */}
            <div style={{
              background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
              border: '3px solid #28a745',
              borderRadius: '12px',
              padding: '30px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ color: '#28a745', fontSize: '1.8rem', marginBottom: '10px' }}>
                  ✅ Verified Medical Professionals
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
                  Our Directory Standard
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>👨‍⚕️ Who's Treating You</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Licensed Medical Doctors (MD/DO)</li>
                  <li>Board-certified Nurse Practitioners (NP)</li>
                  <li>Licensed Physician Assistants (PA)</li>
                  <li>Registered Nurses (RN) with physician supervision</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>🎓 Education & Training</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>4-8 years medical/nursing education</li>
                  <li>Thousands of hours clinical training</li>
                  <li>Advanced anatomy and physiology knowledge</li>
                  <li>Specialized aesthetic injection training</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>📋 Regulation & Oversight</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>State medical board licensing</li>
                  <li>Continuing education requirements</li>
                  <li>Professional liability insurance</li>
                  <li>Disciplinary oversight and accountability</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>🚨 Emergency Preparedness</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Trained in emergency response</li>
                  <li>Access to emergency medications</li>
                  <li>Physician backup available</li>
                  <li>Hospital-grade safety protocols</li>
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
                ✅ Colorado Legal & Safe
              </div>
            </div>

            {/* Unverified Side */}
            <div style={{
              background: 'linear-gradient(135deg, #f8d7da 0%, #f1c0c7 100%)',
              border: '3px solid #dc3545',
              borderRadius: '12px',
              padding: '30px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ color: '#dc3545', fontSize: '1.8rem', marginBottom: '10px' }}>
                  ❌ Unverified Practitioners
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
                  Other Directories
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>🚫 Who's Treating You</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Estheticians (cannot legally inject)</li>
                  <li>"Certified injectors" (not real licenses)</li>
                  <li>Medical assistants (unlicensed)</li>
                  <li>Anyone with weekend training</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>📚 Education & Training</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>1-2 day injection courses</li>
                  <li>No medical education requirement</li>
                  <li>Limited anatomy knowledge</li>
                  <li>No formal medical training</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>🔓 Regulation & Oversight</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>No medical board oversight</li>
                  <li>No continuing education required</li>
                  <li>Limited or no insurance</li>
                  <li>No professional accountability</li>
                </ul>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>⚠️ Emergency Preparedness</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>No emergency training</li>
                  <li>No emergency medications</li>
                  <li>No physician available</li>
                  <li>Basic or no safety protocols</li>
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
                ⚠️ Potentially Illegal & Unsafe
              </div>
            </div>
          </div>
        </section>

        {/* Directory Comparison */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
            Directory Standards Comparison
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
                    Standard
                  </th>
                  <th style={{ 
                    padding: '15px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #dee2e6',
                    background: '#e8f5e8',
                    color: '#28a745',
                    fontWeight: 'bold'
                  }}>
                    Our Directory
                  </th>
                  <th style={{ 
                    padding: '15px', 
                    textAlign: 'center', 
                    borderBottom: '2px solid #dee2e6',
                    background: '#f8d7da',
                    color: '#dc3545',
                    fontWeight: 'bold'
                  }}>
                    Other Directories
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    standard: "License Verification",
                    ours: "✅ Every provider verified",
                    others: "❌ No verification required"
                  },
                  {
                    standard: "Medical Professional Requirement",
                    ours: "✅ RN/NP/PA/MD only",
                    others: "❌ Anyone can pay to list"
                  },
                  {
                    standard: "Educational Background Check",
                    ours: "✅ Degree verification",
                    others: "❌ No education verification"
                  },
                  {
                    standard: "Experience Documentation",
                    ours: "✅ Years of experience verified",
                    others: "❌ Self-reported only"
                  },
                  {
                    standard: "Disciplinary Record Review",
                    ours: "✅ Background checked",
                    others: "❌ No background checks"
                  },
                  {
                    standard: "Annual Re-verification",
                    ours: "✅ Yearly license renewal",
                    others: "❌ One-time listing fee"
                  },
                  {
                    standard: "Unlicensed Practitioners",
                    ours: "✅ Automatically rejected",
                    others: "❌ Commonly accepted"
                  },
                  {
                    standard: "Safety Standards",
                    ours: "✅ Hospital-grade",
                    others: "❌ Varies widely"
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
                      {row.ours}
                    </td>
                    <td style={{ 
                      padding: '12px 15px', 
                      textAlign: 'center',
                      color: '#dc3545',
                      fontWeight: 'bold'
                    }}>
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What Other Directories Don't Tell You */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#dc3545', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            What Other Directories Don't Tell You
          </h2>
          
          <div style={{
            background: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#856404', marginBottom: '20px' }}>
              🕵️ The Hidden Truth About "Competitor Directories"
            </h3>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#856404', marginBottom: '10px' }}>💰 Pay-to-Play Model</h4>
                <p style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Most directories operate on a simple business model: anyone who pays the listing fee gets listed. 
                  No credential verification, no safety standards, no quality control.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#856404', marginBottom: '10px' }}>🎭 Misleading Titles</h4>
                <p style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  "Board certified" often refers to unrelated fields. "Certified injector" sounds official 
                  but isn't a real medical license. These titles are designed to confuse consumers.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#856404', marginBottom: '10px' }}>🔍 No Verification Process</h4>
                <p style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Other directories don't verify licenses, education, or experience. They rely on 
                  self-reported information that's often exaggerated or misleading.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#856404', marginBottom: '10px' }}>⚖️ Legal Liability</h4>
                <p style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  By listing unlicensed practitioners, these directories may be facilitating illegal 
                  practice of medicine. They shift all liability to consumers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Complications */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #ffc107', paddingBottom: '10px' }}>
            The True Cost of Choosing Unverified Providers
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            margin: '30px 0'
          }}>
            <div style={{
              background: 'white',
              border: '2px solid #ffc107',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#856404', marginBottom: '15px' }}>💸 Financial Costs</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li><strong>Corrective procedures:</strong> $5,000-$15,000</li>
                <li><strong>Emergency treatment:</strong> $2,000-$8,000</li>
                <li><strong>Legal fees:</strong> $10,000-$50,000</li>
                <li><strong>Lost wages:</strong> Weeks off work</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              border: '2px solid #dc3545',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#dc3545', marginBottom: '15px' }}>⚕️ Health Consequences</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li><strong>Permanent scarring</strong></li>
                <li><strong>Nerve damage</strong></li>
                <li><strong>Blindness (rare but possible)</strong></li>
                <li><strong>Chronic pain</strong></li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              border: '2px solid #6f42c1',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#6f42c1', marginBottom: '15px' }}>😰 Emotional Impact</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li><strong>Loss of confidence</strong></li>
                <li><strong>Social anxiety</strong></li>
                <li><strong>Depression</strong></li>
                <li><strong>Regret and trauma</strong></li>
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
              💡 The Smart Investment
            </h4>
            <p style={{ color: '#004085', fontSize: '1.1rem', margin: 0 }}>
              Paying slightly more for a verified medical professional is always cheaper than 
              dealing with complications from an unqualified provider. <strong>Your safety is priceless.</strong>
            </p>
          </div>
        </section>

        {/* How to Spot the Difference */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
            🔍 How to Spot the Difference
          </h2>
          
          <div style={{
            background: '#e7f3ff',
            border: '1px solid #b3d9ff',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#004085', marginBottom: '20px' }}>
              ✅ Verified Provider Checklist
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#004085', marginBottom: '10px' }}>Look For</h4>
                <ul style={{ color: '#004085', lineHeight: '1.6' }}>
                  <li>✅ Clear license type (RN, NP, PA, MD)</li>
                  <li>✅ License numbers provided</li>
                  <li>✅ University education listed</li>
                  <li>✅ Years of experience documented</li>
                  <li>✅ Medical director on-site</li>
                  <li>✅ Professional medical setting</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>Red Flags</h4>
                <ul style={{ color: '#dc3545', lineHeight: '1.6' }}>
                  <li>❌ "Certified injector" only</li>
                  <li>❌ Esthetician credentials</li>
                  <li>❌ Vague about licensing</li>
                  <li>❌ Home-based practice</li>
                  <li>❌ Extremely low prices</li>
                  <li>❌ Pressure to book immediately</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Guarantee */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our 100% Verification Guarantee
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
            border: '2px solid #28a745',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#155724', marginBottom: '20px' }}>
              🛡️ Why Choose Our Verified Directory
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px',
              margin: '20px 0'
            }}>
              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔍</div>
                <h4 style={{ color: '#155724', marginBottom: '10px' }}>Individual Verification</h4>
                <p style={{ color: '#155724', fontSize: '0.9rem', margin: 0 }}>
                  Every provider personally verified by our team
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📋</div>
                <h4 style={{ color: '#155724', marginBottom: '10px' }}>Licensed Professionals Only</h4>
                <p style={{ color: '#155724', fontSize: '0.9rem', margin: 0 }}>
                  Zero unlicensed practitioners guaranteed
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔄</div>
                <h4 style={{ color: '#155724', marginBottom: '10px' }}>Annual Re-verification</h4>
                <p style={{ color: '#155724', fontSize: '0.9rem', margin: 0 }}>
                  Ongoing monitoring of license status
                </p>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏆</div>
                <h4 style={{ color: '#155724', marginBottom: '10px' }}>100% Success Rate</h4>
                <p style={{ color: '#155724', fontSize: '0.9rem', margin: 0 }}>
                  First directory to achieve complete verification
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
              <h4 style={{ margin: '0 0 10px 0' }}>Our Promise to You</h4>
              <p style={{ margin: '0', fontSize: '1.1rem' }}>
                Every provider in our directory is a verified licensed medical professional. 
                If you find otherwise, we'll immediately investigate and remove any provider 
                who doesn't meet our standards. <strong>Your safety is our guarantee.</strong>
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
          <h2 style={{ marginBottom: '20px' }}>Make the Smart Choice</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.95' }}>
            Don't gamble with unlicensed practitioners. Choose from Colorado's only 100% verified medical professional network.
          </p>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '5px' }}>18</div>
                <div style={{ fontSize: '0.9rem' }}>Verified Providers</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '5px' }}>100%</div>
                <div style={{ fontSize: '0.9rem' }}>Licensed Medical Professionals</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '5px' }}>0</div>
                <div style={{ fontSize: '0.9rem' }}>Unlicensed Injectors</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '5px' }}>7</div>
                <div style={{ fontSize: '0.9rem' }}>Colorado Cities</div>
              </div>
            </div>
            <p style={{ margin: 0, fontStyle: 'italic' }}>
              The only directory in Colorado that can make these claims
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
              🔍 Browse Verified Providers
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
              📋 See Our Process
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}