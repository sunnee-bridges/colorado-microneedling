import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About Colorado Lip Fillers Directory">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
               <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '60px 20px',
          textAlign: 'center',
          borderRadius: '16px',
          margin: '0 0 40px 0',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>❓</div>
            <h1 style={{ 
              fontSize: '2.8rem', 
              marginBottom: '25px', 
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
             About Colorado Lip Fillers Directory
            </h1>
            <p style={{ 
              fontSize: '1.4rem', 
              opacity: '0.95', 
              marginBottom: '30px',
              lineHeight: '1.5'
            }}>
               Colorado Lip Fillers Directory is your trusted resource for finding qualified, 
          licensed medical providers offering lip enhancement services throughout Colorado.
            </p>
            <a 
              href="#calculator" 
              style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: '2px solid white',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                fontSize: '1.1rem',
                transition: 'transform 0.2s ease'
              }}
            >
              Review The Guide
            </a>
          </div>
        </section>
        

        <h2>Our Mission</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          We help Colorado residents make informed decisions about lip enhancement by 
          providing comprehensive information about qualified providers, treatment options, 
          and pricing transparency. We strive to feature licensed medical professionals 
          and encourage patients to verify credentials independently.
        </p>

        <h2>Our Commitment to Quality</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          We make every effort to feature licensed medical professionals including 
          registered nurses, nurse practitioners, physician assistants, and physicians. 
          However, we encourage all patients to independently verify provider credentials 
          and licensing status before booking any treatments.
        </p>

        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '6px',
          padding: '16px',
          margin: '24px 0'
        }}>
          <h4 style={{ color: '#856404', margin: '0 0 8px 0' }}>
            Important Disclaimer
          </h4>
          <p style={{ 
            color: '#856404', 
            fontSize: '0.9rem', 
            margin: 0, 
            lineHeight: '1.5' 
          }}>
            While we strive to feature qualified providers, we recommend that patients 
            independently verify all provider credentials, licensing, and qualifications 
            before scheduling any treatments. Always consult with licensed medical 
            professionals for personalized advice.
          </p>
        </div>

        <h2>Your Safety First</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          We believe informed patients make the best decisions. Always research your 
          provider, ask about their qualifications, and ensure you feel comfortable 
          before proceeding with any cosmetic treatment. When in doubt, seek a second 
          opinion from another qualified medical professional.
        </p>

        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '6px',
          padding: '16px',
          margin: '24px 0',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: '0', 
            fontSize: '0.9rem', 
            color: '#6c757d',
            fontStyle: 'italic'
          }}>
            This directory is for informational purposes only and does not constitute 
            medical advice. Always consult with qualified healthcare providers for 
            personalized medical guidance.
          </p>
        </div>
      </div>
    </Layout>
  );
}