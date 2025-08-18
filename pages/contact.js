import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

     if (name === 'email') {
        if (value && !validateEmail(value)) {
          setEmailError('Please enter a valid email address');
        } else {
          setEmailError('');
        }
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 1000);
  };

  return (
    <Layout title="Contact Us - Colorado Lip Fillers Directory">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact Us</h1>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '20px 0', color: '#666' }}>
          Have questions about our directory or need assistance? We're here to help. Please note that we provide 
          directory services only and cannot offer medical advice or provider recommendations.
        </p>

        {/* Important Notice */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: '#856404', margin: '0 0 10px 0' }}>
            ⚠️ Important Notice
          </h3>
          <p style={{ color: '#856404', margin: 0, lineHeight: '1.5' }}>
            <strong>We do not provide medical advice or treatment recommendations.</strong> For medical questions, 
            consultation scheduling, or treatment inquiries, please contact providers directly. For credential 
            verification, use official Colorado state resources.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          marginBottom: '40px'
        }}>
          {/* Contact Form */}
          <div>
            <h2>Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div style={{
                backgroundColor: '#d4edda',
                border: '1px solid #c3e6cb',
                borderRadius: '6px',
                padding: '15px',
                marginBottom: '20px',
                color: '#155724'
              }}>
                <strong>Thank you!</strong> Your message has been received. We'll respond within 1-2 business days.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '6px',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="general">General Inquiry</option>
                  <option value="provider-listing">Provider Listing Information</option>
                  <option value="technical">Technical Issue</option>
                  <option value="correction">Information Correction</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '6px'
                  }}
                />
              </div>

              <div>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    required
    style={{
      width: '100%',
      padding: '10px',
      border: `1px solid ${emailError ? '#dc3545' : '#ced4da'}`,
      borderRadius: '6px',
      backgroundColor: emailError ? '#fff5f5' : 'white'
    }}
    placeholder="Enter your email address"
  />
  {emailError && (
    <small style={{ 
      color: '#dc3545', 
      fontSize: '0.8rem',
      marginTop: '4px',
      display: 'block'
    }}>
      {emailError}
    </small>
  )}
</div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '6px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '6px',
                    resize: 'vertical'
                  }}
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? '#6c757d' : '#007bff',
                  color: 'white',
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information & FAQs */}
          <div>
            <h2>Quick Answers</h2>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '25px'
            }}>
              <h4 style={{ color: '#495057', margin: '0 0 15px 0' }}>
                📋 For Provider Verification:
              </h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#666' }}>
                To verify provider credentials and licenses:
              </p>
              <a 
                href="https://www.colorado.gov/dora" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                🔗 Colorado Department of Regulatory Agencies (DORA)
              </a>
            </div>

            <div style={{
              backgroundColor: '#e3f2fd',
              border: '1px solid #2196f3',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '25px'
            }}>
              <h4 style={{ color: '#1976d2', margin: '0 0 15px 0' }}>
                💡 Common Questions:
              </h4>
              <div style={{ fontSize: '0.9rem', color: '#1976d2' }}>
                <p style={{ margin: '0 0 8px 0' }}>
                  <strong>Q: Can you recommend a provider?</strong><br />
                  A: We provide directory services only and cannot make medical recommendations.
                </p>
                <p style={{ margin: '0 0 8px 0' }}>
                  <strong>Q: How do I schedule an appointment?</strong><br />
                  A: Contact providers directly using the information in their listings.
                </p>
                <p style={{ margin: '0' }}>
                  <strong>Q: Is the pricing information accurate?</strong><br />
                  A: Pricing is for reference only. Always confirm current rates with providers.
                </p>
              </div>
            </div>

            <h3>Response Time</h3>
            <ul style={{ lineHeight: '1.6', color: '#666' }}>
              <li><strong>General inquiries:</strong> 1-2 business days</li>
              <li><strong>Technical issues:</strong> 24-48 hours</li>
              <li><strong>Information corrections:</strong> 2-3 business days</li>
              <li><strong>Partnership inquiries:</strong> 3-5 business days</li>
            </ul>

            <h3>What We Can Help With</h3>
            <ul style={{ lineHeight: '1.6', color: '#666' }}>
              <li>Directory navigation assistance</li>
              <li>Provider listing information updates</li>
              <li>Technical website issues</li>
              <li>Information correction requests</li>
              <li>Partnership and advertising opportunities</li>
            </ul>

            <h3>What We Cannot Help With</h3>
            <ul style={{ lineHeight: '1.6', color: '#666' }}>
              <li>Medical advice or treatment recommendations</li>
              <li>Appointment scheduling (contact providers directly)</li>
              <li>Provider credential verification (use official state sources)</li>
              <li>Treatment outcome guarantees</li>
              <li>Pricing negotiations with providers</li>
            </ul>
          </div>
        </div>

        {/* Emergency Notice */}
        <div style={{
          backgroundColor: '#f8d7da',
          border: '2px solid #dc3545',
          borderRadius: '8px',
          padding: '20px',
          margin: '30px 0',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#721c24', margin: '0 0 10px 0' }}>
            🚨 Medical Emergency Notice
          </h3>
          <p style={{ color: '#721c24', margin: 0, lineHeight: '1.5' }}>
            <strong>This is not a medical service.</strong> For medical emergencies, call 911 immediately. 
            For urgent medical concerns related to cosmetic treatments, contact your provider directly 
            or seek immediate medical attention.
          </p>
        </div>

        {/* Legal Footer */}
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '6px',
          padding: '15px',
          margin: '30px 0',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#6c757d'
        }}>
          <p style={{ margin: 0 }}>
            By contacting us, you acknowledge that this directory is for informational purposes only. 
            We do not provide medical advice or guarantee provider information accuracy. 
            <a href="/terms" style={{ color: '#007bff', textDecoration: 'none' }}> View full terms</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}