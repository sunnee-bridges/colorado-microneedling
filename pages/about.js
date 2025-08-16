import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About Colorado Lip Fillers Directory">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>About Colorado Lip Fillers Directory</h1>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '20px 0' }}>
          Colorado Lip Fillers Directory is your trusted resource for finding qualified, 
          licensed medical providers offering lip enhancement services throughout Colorado.
        </p>

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

        <h2>Why Choose Licensed Medical Providers?</h2>
        <ul style={{ lineHeight: '1.6', margin: '20px 0' }}>
          <li>Formal medical training and certification</li>
          <li>Understanding of facial anatomy and safety protocols</li>
          <li>Adherence to medical standards and best practices</li>
          <li>Access to FDA-approved dermal fillers</li>
          <li>Ability to handle complications should they arise</li>
        </ul>

        <h2>Popular Lip Filler Brands</h2>
        <div style={{ margin: '20px 0' }}>
          <h3>Juvederm</h3>
          <p>Hyaluronic acid-based fillers known for smooth, natural results. FDA-approved for lip augmentation.</p>
          
          <h3>Restylane</h3>
          <p>Long-lasting fillers ideal for both subtle and dramatic enhancement. Clinically proven safety profile.</p>
          
          <h3>RHA Fillers</h3>
          <p>Newest generation fillers designed to move naturally with facial expressions. Advanced cross-linking technology.</p>
        </div>

        <h2>What to Look for in a Provider</h2>
        <div style={{
          backgroundColor: '#e8f4fd',
          border: '1px solid #bee5eb',
          borderRadius: '6px',
          padding: '16px',
          margin: '24px 0'
        }}>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>Current medical license (verify through state board)</li>
            <li style={{ marginBottom: '8px' }}>Proper training in aesthetic injections</li>
            <li style={{ marginBottom: '8px' }}>Clean, medical-grade facility</li>
            <li style={{ marginBottom: '8px' }}>Before/after portfolio of actual work</li>
            <li style={{ marginBottom: '8px' }}>Clear pricing and treatment plans</li>
            <li style={{ marginBottom: '8px' }}>Emergency protocols and complication management</li>
          </ul>
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