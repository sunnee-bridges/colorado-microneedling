import Layout from '../components/Layout';

export default function WhyVerificationMatters() {
  return (
    <Layout title="Why Verification Matters - Protecting Your Safety with Licensed Medical Professionals">
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
            ⚠️ Why Verification Matters
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.95', maxWidth: '700px', margin: '0 auto 20px auto' }}>
            The hidden dangers of unlicensed injectors and why your safety depends on medical professionals
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '25px',
            padding: '10px 25px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            🚨 Medical procedures should only be performed by medical professionals
          </div>
        </div>

        {/* The Problem Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#dc3545', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            The Hidden Problem in Colorado
          </h2>
          
          <div style={{
            background: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#721c24', marginBottom: '15px' }}>
              🚨 Shocking Truth: Most Directories Don't Verify Credentials
            </h3>
            <p style={{ color: '#721c24', fontSize: '1.1rem', lineHeight: '1.6' }}>
              The majority of aesthetic provider directories in Colorado list <strong>anyone willing to pay a fee</strong> - 
              including unlicensed practitioners, estheticians performing illegal procedures, and "certified injectors" 
              with no medical training. Your safety is not their priority.
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
              <h4 style={{ color: '#dc3545', marginBottom: '15px' }}>❌ Who's Injecting You?</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li><strong>Estheticians:</strong> Not licensed for medical procedures</li>
                <li><strong>"Certified Injectors":</strong> Weekend course certificates</li>
                <li><strong>Medical Assistants:</strong> Cannot legally inject independently</li>
                <li><strong>Unlicensed Staff:</strong> No medical training whatsoever</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              border: '2px solid #ffc107',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h4 style={{ color: '#856404', marginBottom: '15px' }}>⚠️ The Risks</h4>
              <ul style={{ color: '#666', lineHeight: '1.7' }}>
                <li>Permanent facial nerve damage</li>
                <li>Blindness from improper injection</li>
                <li>Severe allergic reactions</li>
                <li>Infection and scarring</li>
                <li>Asymmetrical results</li>
                <li>Emergency room visits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real Stories Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            Real Stories from Colorado
          </h2>
          
          <div style={{ margin: '30px 0' }}>
            {[
              {
                location: "Denver Area",
                story: "Sarah received lip fillers from an unlicensed 'certified injector' at a med spa. The filler was injected incorrectly, causing permanent lumps and requiring corrective surgery by a plastic surgeon.",
                outcome: "2 corrective procedures, $8,000 in additional costs"
              },
              {
                location: "Colorado Springs",
                story: "Michael went to an esthetician advertising Botox treatments. The esthetician hit a blood vessel, causing severe bruising and temporary facial paralysis that lasted 3 months.",
                outcome: "Emergency room visit, 3 months recovery time"
              },
              {
                location: "Boulder",
                story: "Jennifer trusted a 'cosmetic injector' who wasn't a nurse. The injector used expired product and caused a severe infection requiring antibiotics and leaving permanent scarring.",
                outcome: "Infection treatment, permanent scarring, legal action"
              }
            ].map((story, index) => (
              <div key={index} style={{
                background: '#fff3cd',
                border: '1px solid #ffeaa7',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                  <h4 style={{ color: '#856404', margin: 0 }}>📍 {story.location}</h4>
                  <span style={{
                    background: '#dc3545',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: '0.8rem'
                  }}>
                    Unlicensed Provider
                  </span>
                </div>
                <p style={{ color: '#856404', margin: '10px 0', fontStyle: 'italic' }}>
                  "{story.story}"
                </p>
                <p style={{ color: '#721c24', margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>
                  <strong>Result:</strong> {story.outcome}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: '#d1ecf1',
            border: '1px solid #bee5eb',
            borderRadius: '8px',
            padding: '20px'
          }}>
            <p style={{ color: '#0c5460', margin: 0, fontSize: '1rem', fontStyle: 'italic' }}>
              <strong>Note:</strong> Names have been changed to protect privacy. These stories represent 
              real complications that occur when unlicensed practitioners perform medical procedures.
            </p>
          </div>
        </section>

        {/* Legal Requirements Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Colorado Legal Requirements
          </h2>
          
          <div style={{
            background: '#e8f5e8',
            border: '2px solid #28a745',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#155724', marginBottom: '15px' }}>
              📋 Who Can Legally Inject in Colorado
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>✅ LEGAL</h4>
                <ul style={{ color: '#155724', lineHeight: '1.6' }}>
                  <li><strong>Medical Doctors (MD/DO)</strong></li>
                  <li><strong>Nurse Practitioners (NP)</strong></li>
                  <li><strong>Physician Assistants (PA)</strong></li>
                  <li><strong>Registered Nurses (RN)</strong> under physician supervision</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>❌ ILLEGAL</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6' }}>
                  <li><strong>Estheticians</strong> (cannot inject)</li>
                  <li><strong>Medical Assistants</strong> (without RN license)</li>
                  <li><strong>"Certified Injectors"</strong> (not a legal license)</li>
                  <li><strong>Unlicensed Personnel</strong></li>
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
              <strong>⚖️ Colorado Law:</strong> Injectable treatments like Botox and dermal fillers are 
              considered medical procedures and must be performed by licensed medical professionals. 
              Estheticians and unlicensed practitioners performing these procedures are violating state law.
            </p>
          </div>
        </section>

        {/* Benefits of Medical Professionals */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Why Choose Licensed Medical Professionals
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
                title: "Medical Training",
                description: "Years of anatomy, physiology, and pharmacology education",
                details: "Understanding of facial anatomy, nerve pathways, and vascular structures"
              },
              {
                icon: "🚨",
                title: "Emergency Response",
                description: "Trained to handle complications and adverse reactions",
                details: "Can quickly recognize and treat allergic reactions, vascular occlusion, and other emergencies"
              },
              {
                icon: "💉",
                title: "Injection Expertise",
                description: "Extensive experience with needles and injection techniques",
                details: "Proper sterile technique, depth control, and product placement"
              },
              {
                icon: "📋",
                title: "Regulatory Oversight",
                description: "Licensed and regulated by state medical boards",
                details: "Continuing education requirements, professional standards, and accountability"
              },
              {
                icon: "🔬",
                title: "Product Knowledge",
                description: "Understanding of injectable products and their properties",
                details: "Proper storage, dilution, dosing, and contraindications"
              },
              {
                icon: "🏥",
                title: "Medical Setting",
                description: "Access to emergency equipment and physician oversight",
                details: "Emergency medications, resuscitation equipment, and immediate medical backup"
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

        {/* Red Flags Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#dc3545', borderBottom: '3px solid #dc3545', paddingBottom: '10px' }}>
            🚩 Red Flags to Avoid
          </h2>
          
          <div style={{
            background: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <p style={{ color: '#721c24', fontSize: '1.1rem', marginBottom: '20px', fontWeight: 'bold' }}>
              Warning signs that you're dealing with an unlicensed or unqualified provider:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h4 style={{ color: '#721c24', marginBottom: '10px' }}>🚨 Credential Red Flags</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6' }}>
                  <li>Calls themselves "certified injector" (not a real license)</li>
                  <li>Won't provide license numbers</li>
                  <li>Lists "esthetician" as their only credential</li>
                  <li>No medical professional on site</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#721c24', marginBottom: '10px' }}>💸 Pricing Red Flags</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6' }}>
                  <li>Prices significantly below market rate</li>
                  <li>Groupon deals for medical procedures</li>
                  <li>Pressure to buy packages immediately</li>
                  <li>No consultation fee (cutting corners)</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#721c24', marginBottom: '10px' }}>🏠 Setting Red Flags</h4>
                <ul style={{ color: '#721c24', lineHeight: '1.6' }}>
                  <li>Home-based "clinics"</li>
                  <li>No emergency equipment visible</li>
                  <li>Unmarked or suspicious products</li>
                  <li>No physician supervision</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Verify Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px' }}>
            🔍 How to Verify Your Provider
          </h2>
          
          <div style={{
            background: '#e7f3ff',
            border: '1px solid #b3d9ff',
            borderRadius: '8px',
            padding: '25px',
            margin: '20px 0'
          }}>
            <h3 style={{ color: '#004085', marginBottom: '20px' }}>
              ✅ Questions to Ask Before Your Appointment
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                "What is your medical license type and number?",
                "Can I verify your license online?",
                "What is your educational background?",
                "How many years of injection experience do you have?",
                "Is there a physician on-site or available for emergencies?",
                "What emergency protocols do you have in place?",
                "Can you show me before/after photos of your work?",
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
              💡 Pro Tip: License Verification
            </h4>
            <p style={{ color: '#155724', margin: 0 }}>
              You can verify any Colorado medical license online at <strong>dpo.colorado.gov</strong>. 
              Look up your provider's license before your appointment. If they can't provide a license 
              number or seem evasive, find someone else.
            </p>
          </div>
        </section>

        {/* Our Promise Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>
            Our Verification Promise
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #e8f5e8 0%, #d4f1d4 100%)',
            border: '2px solid #28a745',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#155724', marginBottom: '20px' }}>
              🛡️ We Do the Verification Work for You
            </h3>
            <p style={{ color: '#155724', fontSize: '1.1rem', marginBottom: '20px' }}>
              Every provider in our directory has been individually verified as a licensed medical professional. 
              We check their credentials so you don't have to worry.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              margin: '20px 0'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✅</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>License Verified</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎓</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Education Confirmed</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📋</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Experience Documented</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔄</div>
                <div style={{ color: '#155724', fontWeight: 'bold' }}>Annually Re-verified</div>
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
              🏆 100% Licensed Medical Professionals - Guaranteed
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
          <h2 style={{ marginBottom: '20px' }}>Your Safety is Worth It</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.95' }}>
            Don't risk your face with unlicensed practitioners. Choose from Colorado's only 100% verified medical professional network.
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
              🔍 Find Verified Professionals
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