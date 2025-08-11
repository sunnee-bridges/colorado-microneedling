import Layout from '../components/Layout';

export default function LipFillerFAQ() {
  return (
    <Layout title="Lip Filler FAQ Guide - Colorado Lip Fillers Directory">
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
          Complete Lip Filler FAQ Guide
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          margin: '20px 0', 
          textAlign: 'center',
          color: '#666',
          fontStyle: 'italic'
        }}>
          Get answers to the most common questions about lip fillers, from pain and safety 
          to aftercare and results. Expert information to help you make informed decisions.
        </p>

        {/* Quick Navigation */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px', 
          margin: '30px 0',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ marginTop: '0', color: '#495057' }}>Quick Navigation</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '10px',
            fontSize: '0.9rem'
          }}>
            <a href="#pain-comfort" style={{ color: '#007bff', textDecoration: 'none' }}>• Pain & Comfort</a>
            <a href="#age-eligibility" style={{ color: '#007bff', textDecoration: 'none' }}>• Age & Eligibility</a>
            <a href="#pregnancy-safety" style={{ color: '#007bff', textDecoration: 'none' }}>• Pregnancy & Safety</a>
            <a href="#timing-frequency" style={{ color: '#007bff', textDecoration: 'none' }}>• Timing & Frequency</a>
            <a href="#duration-longevity" style={{ color: '#007bff', textDecoration: 'none' }}>• Duration & Longevity</a>
            <a href="#products-treatments" style={{ color: '#007bff', textDecoration: 'none' }}>• Products & Treatments</a>
            <a href="#aftercare" style={{ color: '#007bff', textDecoration: 'none' }}>• Aftercare</a>
            <a href="#recovery-healing" style={{ color: '#007bff', textDecoration: 'none' }}>• Recovery & Healing</a>
            <a href="#complications" style={{ color: '#007bff', textDecoration: 'none' }}>• Complications & Removal</a>
          </div>
        </div>

        {/* Emergency Warning Box */}
        <div style={{ 
          backgroundColor: '#fff3cd', 
          border: '1px solid #ffeaa7', 
          borderRadius: '8px', 
          padding: '20px', 
          margin: '20px 0' 
        }}>
          <h3 style={{ color: '#856404', marginTop: '0' }}>⚠️ Emergency Warning Signs</h3>
          <p style={{ margin: '10px 0', color: '#856404' }}>
            <strong>Seek immediate medical attention if you experience:</strong>
          </p>
          <ul style={{ color: '#856404', margin: '0' }}>
            <li>Severe pain or sudden color changes (blue, white, purple)</li>
            <li>Signs of infection (fever, pus, red streaking)</li>
            <li>Vision changes or severe headaches</li>
            <li>Persistent numbness or tingling</li>
          </ul>
        </div>

        {/* Pain & Comfort Section */}
        <section id="pain-comfort" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            color: '#495057', 
            borderBottom: '3px solid #007bff', 
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            💉 Pain & Comfort Questions
          </h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>Do lip fillers hurt?</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 4,900/month</em>
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Most patients experience mild to moderate discomfort during lip filler injections, 
              similar to a pinch or bee sting. The pain level varies by individual tolerance, 
              but most describe it as very manageable.
            </p>
            
            <h4 style={{ color: '#495057', marginTop: '20px' }}>What to expect:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>Before injection:</strong> Topical numbing cream applied 15-20 minutes prior</li>
              <li><strong>During injection:</strong> Brief sharp sensation, followed by pressure</li>
              <li><strong>Pain level:</strong> Most rate it 3-4 out of 10 on pain scale</li>
              <li><strong>Duration:</strong> Each injection takes 2-3 seconds, total procedure under 30 minutes</li>
            </ul>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Pain management options:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Topical numbing cream (lidocaine)</li>
              <li>Dental blocks for sensitive patients</li>
              <li>Ice before and after treatment</li>
              <li>Some fillers contain lidocaine for additional comfort</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>Why does my filler hurt months later?</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 1,200/month</em>
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Delayed pain months after treatment can have several causes:
            </p>

            <h4 style={{ color: '#28a745', marginTop: '20px' }}>Normal causes (usually resolve):</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Firm nodules forming (resolve within 2-4 weeks)</li>
              <li>Product settling and integrating with tissue</li>
              <li>Minor inflammatory response</li>
            </ul>

            <h4 style={{ color: '#dc3545', marginTop: '20px' }}>Concerning causes (need medical attention):</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Infection (rare but serious)</li>
              <li>Granuloma formation</li>
              <li>Vascular compromise</li>
              <li>Allergic reaction</li>
            </ul>
          </div>
        </section>

        {/* Age & Eligibility Section */}
        <section id="age-eligibility" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            color: '#495057', 
            borderBottom: '3px solid #007bff', 
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            🎂 Age & Eligibility Questions
          </h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>Can you get lip filler at 18?</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 370/month</em>
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Yes, you can legally get lip filler at 18 in most locations, as this is the age of medical consent.
            </p>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Legal requirements:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Must be 18+ for cosmetic procedures without parental consent</li>
              <li>Some providers prefer patients 21+ for maturity reasons</li>
              <li>Valid ID required for age verification</li>
            </ul>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Important considerations for young adults:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Facial features still developing until mid-20s</li>
              <li>Start conservatively with small amounts (0.5ml or less)</li>
              <li>Consider long-term aesthetic goals</li>
              <li>Financial responsibility for touch-ups every 6-12 months</li>
            </ul>
          </div>
        </section>

        {/* Pregnancy & Safety Section */}
        <section id="pregnancy-safety" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            color: '#495057', 
            borderBottom: '3px solid #007bff', 
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            🤱 Pregnancy & Safety Questions
          </h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>Can you get lip filler while pregnant?</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 4,400/month</em>
            </p>
            <div style={{ 
              backgroundColor: '#f8d7da', 
              border: '1px solid #f5c6cb', 
              borderRadius: '5px', 
              padding: '15px',
              marginBottom: '15px'
            }}>
              <p style={{ margin: '0', color: '#721c24', fontWeight: 'bold' }}>
                ❌ Lip fillers are NOT RECOMMENDED during pregnancy or breastfeeding
              </p>
            </div>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Safety concerns:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>No safety studies on pregnant/breastfeeding women</li>
              <li>Unknown effects on developing baby</li>
              <li>Increased risk of complications due to pregnancy changes</li>
              <li>Hormonal changes can affect healing and results</li>
            </ul>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Recommendations:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Wait until after breastfeeding is complete</li>
              <li>Existing filler is generally safe during pregnancy</li>
              <li>Consult your OB/GYN if you have concerns about existing filler</li>
              <li>Plan treatments around family planning timeline</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>Can you get lip filler if you get cold sores?</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 90/month</em>
            </p>
            <div style={{ 
              backgroundColor: '#fff3cd', 
              border: '1px solid #ffeaa7', 
              borderRadius: '5px', 
              padding: '15px',
              marginBottom: '15px'
            }}>
              <p style={{ margin: '0', color: '#856404', fontWeight: 'bold' }}>
                ⚠️ Yes, but requires special precautions and antiviral medication
              </p>
            </div>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Pre-treatment protocol:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Start antiviral medication (Valtrex/acyclovir) 3-5 days before treatment</li>
              <li>Continue for 7-10 days after procedure</li>
              <li>Inform provider about cold sore history during consultation</li>
              <li>Some providers may require medical clearance</li>
            </ul>
          </div>
        </section>

        {/* Duration & Longevity Section */}
        <section id="duration-longevity" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            color: '#495057', 
            borderBottom: '3px solid #007bff', 
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            ⏰ Duration & Longevity Questions
          </h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>How long does lip filler last?</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 21,900/month - #1 Most Asked Question</em>
            </p>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Average duration by filler type:</h4>
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '8px',
              margin: '15px 0'
            }}>
              <ul style={{ lineHeight: '1.8', margin: '0' }}>
                <li><strong>Juvederm Ultra XC:</strong> 9-12 months</li>
                <li><strong>Juvederm Volbella XC:</strong> 12-18 months</li>
                <li><strong>Restylane Kysse:</strong> 6-12 months</li>
                <li><strong>Restylane Silk:</strong> 6-9 months</li>
                <li><strong>Versa:</strong> 8-12 months</li>
              </ul>
            </div>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Factors affecting longevity:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>Individual metabolism:</strong> Faster metabolizers see shorter duration</li>
              <li><strong>Amount injected:</strong> More volume = longer lasting</li>
              <li><strong>Lifestyle factors:</strong> Exercise, sun exposure, smoking reduce duration</li>
              <li><strong>Age:</strong> Younger patients may break down filler faster</li>
            </ul>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Timeline expectations:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>2 weeks:</strong> Final results visible after swelling subsides</li>
              <li><strong>1-3 months:</strong> Peak results</li>
              <li><strong>6-9 months:</strong> Gradual volume loss begins</li>
              <li><strong>9-18 months:</strong> Touch-up typically needed</li>
            </ul>
          </div>
        </section>

        {/* Aftercare Section */}
        <section id="aftercare" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            color: '#495057', 
            borderBottom: '3px solid #007bff', 
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            🧴 Aftercare Questions
          </h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>Can I put lip balm on after lip fillers?</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 1,900/month</em>
            </p>
            <div style={{ 
              backgroundColor: '#d4edda', 
              border: '1px solid #c3e6cb', 
              borderRadius: '5px', 
              padding: '15px',
              marginBottom: '15px'
            }}>
              <p style={{ margin: '0', color: '#155724', fontWeight: 'bold' }}>
                ✅ Yes, but wait 4-6 hours and use gentle products
              </p>
            </div>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Timeline for lip balm use:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>First 4-6 hours:</strong> Avoid all products on injection sites</li>
              <li><strong>First 24 hours:</strong> Use only gentle, fragrance-free balm</li>
              <li><strong>First week:</strong> Avoid products with active ingredients</li>
              <li><strong>After 1 week:</strong> Normal lip care routine can resume</li>
            </ul>

            <h4 style={{ color: '#28a745', marginTop: '20px' }}>Recommended ingredients:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Plain petroleum jelly (Vaseline)</li>
              <li>Gentle beeswax-based balms</li>
              <li>Fragrance-free, hypoallergenic options</li>
              <li>Products with ceramides or hyaluronic acid</li>
            </ul>

            <h4 style={{ color: '#dc3545', marginTop: '20px' }}>Ingredients to avoid first week:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Menthol or camphor</li>
              <li>Strong fragrances or flavors</li>
              <li>Retinol or other active ingredients</li>
              <li>Exfoliating ingredients</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>How long to avoid straws after lip filler?</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 1,500/month</em>
            </p>
            <div style={{ 
              backgroundColor: '#fff3cd', 
              border: '1px solid #ffeaa7', 
              borderRadius: '5px', 
              padding: '15px',
              marginBottom: '15px'
            }}>
              <p style={{ margin: '0', color: '#856404', fontWeight: 'bold' }}>
                ⏱️ Avoid straws for 24-48 hours after lip filler treatment
              </p>
            </div>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Why avoid straws:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Pursing motion can shift filler</li>
              <li>Suction pressure may affect results</li>
              <li>Movement can increase swelling</li>
              <li>Risk of asymmetry if filler hasn't settled</li>
            </ul>

            <h4 style={{ color: '#495057', marginTop: '20px' }}>Safe drinking alternatives:</h4>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Drink directly from wide-mouth cups</li>
              <li>Use a spoon for liquids when possible</li>
              <li>Tilt head back slightly when drinking</li>
              <li>Keep lips relaxed during drinking</li>
            </ul>
          </div>
        </section>

        {/* Recovery & Healing Section */}
        <section id="recovery-healing" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            color: '#495057', 
            borderBottom: '3px solid #007bff', 
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            🩹 Recovery & Healing Questions
          </h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#007bff' }}>Lip filler swelling stages</h3>
            <p style={{ lineHeight: '1.6', margin: '15px 0', color: '#666' }}>
              <em>Searches: 3,000/month</em>
            </p>

            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '8px',
              margin: '15px 0'
            }}>
              <h4 style={{ color: '#495057', marginTop: '0' }}>Day-by-day swelling timeline:</h4>
              
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#dc3545' }}>Day 1-2: Peak swelling</strong>
                <ul style={{ margin: '5px 0 0 20px', lineHeight: '1.5' }}>
                  <li>Maximum swelling occurs</li>
                  <li>Lips may look significantly larger than intended</li>
                  <li>Some asymmetry is normal</li>
                </ul>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#ffc107' }}>Day 3-5: Gradual reduction</strong>
                <ul style={{ margin: '5px 0 0 20px', lineHeight: '1.5' }}>
                  <li>Swelling begins to decrease</li>
                  <li>Lips start to look more natural</li>
                  <li>Still larger than final result</li>
                </ul>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#17a2b8' }}>Day 6-10: Significant improvement</strong>
                <ul style={{ margin: '5px 0 0 20px', lineHeight: '1.5' }}>
                  <li>Most swelling has resolved</li>
                  <li>Shape becomes more defined</li>
                  <li>Closer to final result</li>
                </ul>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#28a745' }}>Day 11-14: Near final result</strong>
                <ul style={{ margin: '5px 0 0 20px', lineHeight: '1.5' }}>
                  <li>Minimal residual swelling</li>
                  <li>Final shape becoming apparent</li>
                  <li>True result now visible</li>
                </ul>
              </div>

              <div>
                <strong style={{ color: '#28a745' }}>Week 3-4: Final result</strong>
                <ul style={{ margin: '5px 0 0 20px', lineHeight: '1.5' }}>
                  <li>All swelling completely resolved</li>
                  <li>Final volume and shape achieved</li>
                  <li>Any touch-ups can be evaluated</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Find Colorado Providers CTA */}
        <div style={{ 
          backgroundColor: '#007bff', 
          color: 'white', 
          padding: '30px', 
          borderRadius: '10px', 
          textAlign: 'center',
          margin: '40px 0'
        }}>
          <h3 style={{ marginTop: '0', fontSize: '1.5rem' }}>Ready to Find a Qualified Provider?</h3>
          <p style={{ fontSize: '1.1rem', margin: '15px 0' }}>
            Browse our directory of board-certified providers offering lip filler treatments throughout Colorado.
          </p>
          <div style={{ marginTop: '20px' }}>
            <a 
              href="/providers" 
              style={{ 
                backgroundColor: 'white', 
                color: '#007bff', 
                padding: '12px 30px', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold',
                marginRight: '15px',
                display: 'inline-block'
              }}
            >
              Find Providers Near Me
            </a>
            <a 
              href="/before-after" 
              style={{ 
                backgroundColor: 'transparent', 
                color: 'white', 
                padding: '12px 30px', 
                textDecoration: 'none', 
                borderRadius: '5px',
                border: '2px solid white',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              View Before & After Gallery
            </a>
          </div>
        </div>

        {/* Key Takeaways */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '25px', 
          borderRadius: '8px',
          border: '1px solid #e9ecef',
          marginBottom: '30px'
        }}>
          <h3 style={{ marginTop: '0', color: '#495057' }}>🔑 Key Takeaways</h3>
          
          <h4 style={{ color: '#007bff', marginTop: '20px' }}>Most Important Points:</h4>
          <ul style={{ lineHeight: '1.6' }}>
            <li><strong>Pain is manageable</strong> with proper numbing and experienced provider</li>
            <li><strong>Age 18+ is legal</strong> but consider maturity and facial development</li>
            <li><strong>Avoid during pregnancy</strong> and breastfeeding for safety</li>
            <li><strong>Results last 6-18 months</strong> depending on filler type and individual factors</li>
            <li><strong>Swelling peaks day 1-2</strong> and resolves over 2 weeks</li>
            <li><strong>Choose qualified providers</strong> to avoid complications</li>
            <li><strong>Hyaluronic acid fillers are reversible</strong> with hyaluronidase</li>
            <li><strong>Start conservatively</strong> - you can always add more</li>
          </ul>
        </div>

        {/* Medical Disclaimer */}
        <div style={{ 
          backgroundColor: '#e9ecef', 
          padding: '20px', 
          borderRadius: '5px',
          fontSize: '0.9rem',
          color: '#6c757d',
          fontStyle: 'italic',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0' }}>
            <strong>Medical Disclaimer:</strong> This information is for educational purposes only and 
            does not constitute medical advice. Always consult with a qualified healthcare provider 
            for personalized treatment recommendations and medical guidance.
          </p>
        </div>
      </div>
    </Layout>
  );
}