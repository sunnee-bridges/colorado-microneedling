import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Head from 'next/head';

export default function LipFillerRecoveryTimeline() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const CANON = `${SITE_URL.replace(/\/$/,'')}/guides/lip-filler-recovery-timeline`;
  const OG_IMG = `${SITE_URL.replace(/\/$/,'')}/images/lip-filler-recovery-1200x630.jpg`; // add this file
  
  return (
    <>
      <Head>
        <title>Lip Filler Recovery Timeline: Day-by-Day Swelling & Aftercare</title>
        <meta name="description" content="Easy day-by-day lip filler recovery guide: swelling, bruises, aftercare, and when to call your provider. Know what to expect each day." />
        <link rel="canonical" href={CANON} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Lip Filler Recovery Timeline: Day-by-Day Swelling & Aftercare" />
        <meta property="og:description" content="Day-by-day lip filler recovery guide: swelling, bruising, aftercare, and when to call your provider." />
        <meta property="og:url" content={CANON} />
        <meta property="og:image" content={OG_IMG} />
        <meta property="article:published_time" content="2025-08-20" />
        <meta property="article:modified_time" content="2025-08-20" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lip Filler Recovery Timeline: Day-by-Day Swelling & Aftercare" />
        <meta name="twitter:description" content="What to expect each day after lip fillers—simple recovery timeline and aftercare tips." />
        <meta name="twitter:image" content={OG_IMG} />
        
        {/* Article */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Lip Filler Recovery Timeline: Day-by-Day Guide",
            "description": "A plain-language, day-by-day lip filler recovery guide covering swelling, bruising, aftercare, and when to call your provider.",
            "mainEntityOfPage": { "@type": "WebPage", "@id": CANON },
            "image": [ `${SITE_URL}/images/lip-filler-recovery-1200x630.jpg` ],
            "author": { "@type": "Organization", "name": "Colorado Lip Enhancement Directory" },
            "publisher": {
              "@type": "Organization",
              "name": "Colorado Lip Enhancement Directory",
              "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/logo-600x60.png` }
            },
            "datePublished": "2025-08-20",
            "dateModified": "2025-08-20",
            "articleSection": "Guides"
          })
        }} />

        {/* Breadcrumbs */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type":"ListItem", "position":1, "name":"Home", "item": SITE_URL },
              { "@type":"ListItem", "position":2, "name":"Guides", "item": `${SITE_URL}/guides` },
              { "@type":"ListItem", "position":3, "name":"Lip Filler Recovery Timeline", "item": CANON }
            ]
          })
        }} />

        {/* FAQ (texts must match on-page content) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does swelling last after lip fillers?",
                "acceptedAnswer": { "@type": "Answer", "text": "Biggest swelling is in the first 1-2 days. Most people look normal by day 5-7." }
              },
              {
                "@type": "Question",
                "name": "When can I wear lipstick after lip fillers?",
                "acceptedAnswer": { "@type": "Answer", "text": "Often after day 1 if the area is clean and your provider says it's okay." }
              },
              {
                "@type": "Question",
                "name": "When do I see the final results?",
                "acceptedAnswer": { "@type": "Answer", "text": "Usually by 2-4 weeks when everything has settled." }
              }
            ]
          })
        }} />
      </Head>
      
      <Layout title="Lip Filler Recovery Timeline: Day-by-Day Guide | Colorado Directory">
        {/* Breadcrumbs */}
        <nav style={{ margin: '20px 0', fontSize: '14px', color: '#6c757d' }}>
          <Link href="/" style={{ color: '#667eea', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/guides" style={{ color: '#667eea', textDecoration: 'none' }}>Guides</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>Recovery Timeline</span>
        </nav>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Header */}
          <section style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '50px 30px',
            textAlign: 'center',
            borderRadius: '16px',
            margin: '0 0 40px 0',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
          }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h1 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '20px', 
                fontWeight: '700',
                lineHeight: '1.2'
              }}>
                Lip Filler Recovery Timeline
              </h1>
              <p style={{ 
                fontSize: '1.2rem', 
                opacity: '0.95', 
                marginBottom: '25px',
                lineHeight: '1.5'
              }}>
                Day-by-day guide to what to expect during your lip filler recovery—swelling, aftercare, and when to contact your provider.
              </p>
            </div>
          </section>

          {/* Quick Summary */}
          <div style={{
            backgroundColor: '#e7f3ff',
            border: '2px solid #007bff',
            borderRadius: '12px',
            padding: '25px',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: '#004085', marginBottom: '15px', fontSize: '1.3rem' }}>The Quick Take</h3>
            <div style={{ fontSize: '1rem', color: '#004085', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 10px 0' }}>Most people see the <strong>biggest swelling in the first 1-2 days</strong>.</p>
              <p style={{ margin: '0 0 10px 0' }}>Things usually <strong>look normal by day 5-7</strong>.</p>
              <p style={{ margin: 0 }}>Final look settles in <strong>about 2-4 weeks</strong>.</p>
            </div>
          </div>

          {/* Timeline */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              color: '#333', 
              borderBottom: '3px solid #667eea', 
              paddingBottom: '10px',
              fontSize: '1.8rem',
              marginBottom: '25px'
            }}>
              Day-by-Day Recovery Timeline
            </h2>
            
            <div style={{ display: 'grid', gap: '25px' }}>
              {/* Day 0 */}
              <div style={{
                backgroundColor: '#fff',
                border: '2px solid #dc3545',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#dc3545',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '700',
                    marginRight: '15px'
                  }}>
                    0
                  </div>
                  <h3 style={{ margin: 0, color: '#dc3545', fontSize: '1.4rem' }}>Treatment Day</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#721c24', marginBottom: '8px' }}>What to Expect:</h4>
                  <p style={{ margin: '0 0 10px 0', color: '#555', fontSize: '0.95rem' }}>
                    Lips may feel <strong>numb, puffy, or tender</strong>. This is completely normal.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: '#721c24', marginBottom: '8px' }}>What to Do:</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', margin: 0, color: '#555' }}>
                    <li style={{ marginBottom: '5px' }}><strong>Ice</strong> with a clean cloth: 10 minutes on, then off</li>
                    <li style={{ marginBottom: '5px' }}><strong>Sleep with your head up</strong> on extra pillows</li>
                    <li>Skip <strong>lipstick</strong>, <strong>hot drinks</strong>, <strong>alcohol</strong>, and <strong>hard exercise</strong> today</li>
                  </ul>
                </div>
              </div>

              {/* Day 1-2 */}
              <div style={{
                backgroundColor: '#fff',
                border: '2px solid #ffc107',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#ffc107',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '700',
                    marginRight: '15px'
                  }}>
                    1-2
                  </div>
                  <h3 style={{ margin: 0, color: '#856404', fontSize: '1.4rem' }}>Days 1-2: Peak Swelling</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#856404', marginBottom: '8px' }}>What to Expect:</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', margin: 0, color: '#555' }}>
                    <li style={{ marginBottom: '5px' }}>This is <strong>peak swelling</strong>—the most your lips will be swollen</li>
                    <li style={{ marginBottom: '5px' }}>Small <strong>bruises</strong> can show up</li>
                    <li>Bumps can feel firm from swelling (this is common and normal)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#856404', marginBottom: '8px' }}>What to Do:</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', margin: 0, color: '#555' }}>
                    <li style={{ marginBottom: '5px' }}>Keep using <strong>ice</strong> as needed</li>
                    <li>Drink plenty of <strong>water</strong></li>
                  </ul>
                </div>
              </div>

              {/* Day 3-4 */}
              <div style={{
                backgroundColor: '#fff',
                border: '2px solid #fd7e14',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#fd7e14',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '700',
                    marginRight: '15px'
                  }}>
                    3-4
                  </div>
                  <h3 style={{ margin: 0, color: '#dc3545', fontSize: '1.4rem' }}>Days 3-4: Getting Better</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#dc3545', marginBottom: '8px' }}>What to Expect:</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', margin: 0, color: '#555' }}>
                    <li style={{ marginBottom: '5px' }}>Swelling and bruises <strong>start to fade</strong></li>
                    <li>Lips feel <strong>less tight</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#dc3545', marginBottom: '8px' }}>What You Can Do:</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', margin: 0, color: '#555' }}>
                    <li style={{ marginBottom: '5px' }}>Light activity is fine</li>
                    <li>Still avoid heavy workouts and saunas</li>
                  </ul>
                </div>
              </div>

              {/* Day 5-7 */}
              <div style={{
                backgroundColor: '#fff',
                border: '2px solid #28a745',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#28a745',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '700',
                    marginRight: '15px'
                  }}>
                    5-7
                  </div>
                  <h3 style={{ margin: 0, color: '#155724', fontSize: '1.4rem' }}>Days 5-7: Almost Normal</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#155724', marginBottom: '8px' }}>What to Expect:</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', margin: 0, color: '#555' }}>
                    <li style={{ marginBottom: '5px' }}>Most swelling is <strong>gone</strong></li>
                    <li style={{ marginBottom: '5px' }}>Lips look <strong>more even</strong> and feel <strong>softer</strong></li>
                    <li>Starting to see how your final results will look</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#155724', marginBottom: '8px' }}>What You Can Do:</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
                    You can usually go back to normal <strong>workouts</strong> and activities
                  </p>
                </div>
              </div>

              {/* Week 2-4 */}
              <div style={{
                backgroundColor: '#fff',
                border: '2px solid #20c997',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#20c997',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginRight: '15px'
                  }}>
                    2-4W
                  </div>
                  <h3 style={{ margin: 0, color: '#0d5345', fontSize: '1.4rem' }}>Weeks 2-4: Final Results</h3>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#0d5345', marginBottom: '8px' }}>What to Expect:</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '20px', margin: 0, color: '#555' }}>
                    <li style={{ marginBottom: '5px' }}>Shape looks <strong>natural</strong> and <strong>settled</strong></li>
                    <li>This is your final result</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#0d5345', marginBottom: '8px' }}>Touch-Up Time:</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
                    If you want a <strong>touch-up</strong>, ask your provider after week 2 when everything has settled
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Aftercare Checklist */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              color: '#333', 
              borderBottom: '3px solid #28a745', 
              paddingBottom: '10px',
              fontSize: '1.8rem',
              marginBottom: '25px'
            }}>
              Easy Aftercare Checklist
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '25px' }}>
              <div style={{
                backgroundColor: '#d4edda',
                border: '2px solid #28a745',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <h3 style={{ color: '#155724', marginBottom: '15px', fontSize: '1.2rem' }}>Do These Things</h3>
                <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px', margin: 0, color: '#155724' }}>
                  <li style={{ marginBottom: '8px' }}>Ice with a clean cloth as needed</li>
                  <li style={{ marginBottom: '8px' }}>Keep lips and hands <strong>clean</strong></li>
                  <li style={{ marginBottom: '8px' }}><strong>Drink water</strong> to stay hydrated</li>
                  <li>Use gentle <strong>lip balm</strong> if your provider says it&apos;s okay</li>
                </ul>
              </div>
              
              <div style={{
                backgroundColor: '#f8d7da',
                border: '2px solid #dc3545',
                borderRadius: '12px',
                padding: '25px'
              }}>
                <h3 style={{ color: '#721c24', marginBottom: '15px', fontSize: '1.2rem' }}>Don&apos;t Do These</h3>
                <ul style={{ fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px', margin: 0, color: '#721c24' }}>
                  <li style={{ marginBottom: '8px' }}>Don&apos;t rub or press your lips</li>
                  <li style={{ marginBottom: '8px' }}>Don&apos;t use <strong>lip plumpers</strong> or go to <strong>saunas/steam rooms</strong> the first week</li>
                  <li>Don&apos;t book <strong>dental work</strong> for a couple of weeks unless your provider says it&apos;s okay</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Emergency Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              color: '#333', 
              borderBottom: '3px solid #dc3545', 
              paddingBottom: '10px',
              fontSize: '1.8rem',
              marginBottom: '25px'
            }}>
              When to Contact Your Provider Right Away
            </h2>
            <div style={{
              backgroundColor: '#f8d7da',
              border: '3px solid #dc3545',
              borderRadius: '12px',
              padding: '25px'
            }}>
              <h4 style={{ color: '#721c24', marginBottom: '15px', fontSize: '1.2rem' }}>Contact Immediately If You Have:</h4>
              <ul style={{ fontSize: '1rem', lineHeight: '1.6', paddingLeft: '20px', margin: '0 0 20px 0', color: '#721c24' }}>
                <li style={{ marginBottom: '8px' }}><strong>Strong pain</strong> that gets worse</li>
                <li style={{ marginBottom: '8px' }}>Skin turns <strong>white, blue, or very pale</strong></li>
                <li style={{ marginBottom: '8px' }}>One side gets <strong>much bigger</strong> than the other</li>
                <li><strong>Spreading redness</strong>, <strong>fever</strong>, or <strong>pus</strong></li>
              </ul>
              <div style={{
                backgroundColor: '#721c24',
                color: 'white',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <p style={{ margin: 0, fontWeight: '600' }}>
                  If you can&apos;t reach your provider, go to urgent care or the emergency room.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              color: '#333', 
              borderBottom: '3px solid #667eea', 
              paddingBottom: '10px',
              fontSize: '1.8rem',
              marginBottom: '25px'
            }}>
              Common Questions
            </h2>
            
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                {
                  question: "How long does swelling last?",
                  answer: "Biggest swelling is in the first 1-2 days. Most people look normal by day 5-7."
                },
                {
                  question: "When can I wear lipstick?",
                  answer: "Often after day 1 if the area is clean and your provider says it&apos;s okay."
                },
                {
                  question: "When do I see the final look?",
                  answer: "Usually by 2-4 weeks when everything has settled."
                },
                {
                  question: "Can I work out?",
                  answer: "Light walking is fine. Wait 2-3 days for hard exercise to avoid extra swelling."
                },
                {
                  question: "Is it normal to have lumps or bumps?",
                  answer: "Yes, small bumps from swelling are common in the first few days. They usually go away as swelling decreases."
                },
                {
                  question: "When can I drink alcohol?",
                  answer: "Wait at least 24-48 hours. Alcohol can increase swelling and bruising."
                }
              ].map((faq, index) => (
                <div key={index} style={{
                  backgroundColor: '#fff',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  padding: '20px'
                }}>
                  <h4 style={{ 
                    color: '#667eea', 
                    marginBottom: '10px', 
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    {faq.question}
                  </h4>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6',
                    color: '#555'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ 
              color: '#333', 
              fontSize: '1.4rem',
              marginBottom: '20px'
            }}>
              Related Guides
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              <Link href="/guides/lip-filler-101" style={{
                backgroundColor: '#f8f9ff',
                border: '1px solid #667eea',
                borderRadius: '8px',
                padding: '15px',
                textDecoration: 'none',
                color: '#667eea',
                fontWeight: '600'
              }}>
                Complete Lip Filler Guide
              </Link>
              <Link href="/guides/lip-filler-vs-lip-flip" style={{
                backgroundColor: '#f8f9ff',
                border: '1px solid #667eea',
                borderRadius: '8px',
                padding: '15px',
                textDecoration: 'none',
                color: '#667eea',
                fontWeight: '600'
              }}>
                Filler vs Lip Flip Guide
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '15px' }}>
              Questions About Your Recovery?
            </h3>
            <p style={{ fontSize: '1rem', marginBottom: '25px', opacity: '0.95' }}>
              Find providers in Colorado who can answer your questions and provide aftercare guidance.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/#find-providers"
                style={{
                  backgroundColor: 'white',
                  color: '#667eea',
                  padding: '12px 30px',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  display: 'inline-block'
                }}
              >
                Browse Providers
              </Link>
            </div>
          </div>

              {/* Comprehensive Legal Disclaimer */}
          <div style={{
            backgroundColor: '#f8f9fa',
            border: '2px solid #6c757d',
            borderRadius: '8px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', fontWeight: '600', color: '#495057' }}>
              Important Legal and Medical Disclaimer
            </h4>
            <div style={{ textAlign: 'left', fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 15px 0' }}>
                <strong>Educational Content Only:</strong> This guide provides general educational information about cosmetic procedures and should not be considered medical advice. Individual results, risks, and suitability vary significantly based on anatomy, medical history, and other factors.
              </p>
              <p style={{ margin: '0 0 15px 0' }}>
                <strong>Professional Consultation Required:</strong> Always consult with board-certified healthcare providers to discuss whether these treatments are appropriate for your specific medical situation and aesthetic goals. This content does not establish a doctor-patient relationship.
              </p>
              <p style={{ margin: '0 0 15px 0' }}>
                <strong>Verify Provider Credentials:</strong> Independently verify all provider qualifications through official state medical board databases and professional associations before scheduling any procedures. The listing or mention of providers does not constitute endorsement.
              </p>
              <p style={{ margin: 0 }}>
                <strong>No Guarantees:</strong> Treatment outcomes cannot be guaranteed. All cosmetic procedures carry risks including but not limited to infection, scarring, asymmetry, nerve damage, and unsatisfactory results. Carefully review informed consent documentation before proceeding with any treatment.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}