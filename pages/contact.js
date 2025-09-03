import { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const CANONICAL = `${SITE.replace(/\/$/, '')}/contact`;

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general',
    'bot-field': '' // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email') setEmailError(value && !validateEmail(value) ? 'Please enter a valid email address' : '');
  };

  // helper to URL-encode body the way Netlify expects
  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (emailError) return;
  setIsSubmitting(true);

  try {
    const payload = {
      'form-name': 'contact',
      ...formData
    };

    // Post to the current page, not /contact
    const res = await fetch('/', {  // Changed from '/contact' to '/'
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(payload),
    });

    if (res.ok) {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general',
        'bot-field': ''
      });
      router.push('/contact/thanks');
    } else {
      throw new Error('Submission failed');
    }
  } catch (err) {
    setIsSubmitting(false);
    setSubmitStatus('error');
    console.error(err);
  }
};

  return (
    <Layout title="Contact Us - Colorado Lip Fillers Directory">
      <Head>
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Contact the Colorado Lip Fillers Directory team for questions, provider listings, corrections, or general inquiries. We respond within 1-2 business days."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - Colorado Lip Fillers Directory" />
        <meta property="og:description" content="Get in touch with our team for questions about providers, listings, or general inquiries." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us - Colorado Lip Fillers Directory" />
        <meta name="twitter:description" content="Contact our team for questions, provider listings, or general inquiries." />

        {/* JSON-LD: ContactPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              '@id': `${CANONICAL}#contact`,
              url: CANONICAL,
              name: 'Contact Us - Colorado Lip Fillers Directory',
              description: 'Contact form and information for the Colorado Lip Fillers Directory.',
              isPartOf: { '@type': 'WebSite', url: SITE },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
                  { '@type': 'ListItem', position: 2, name: 'Contact', item: CANONICAL },
                ],
              },
            }),
          }}
        />
      </Head>

      <nav aria-label="Breadcrumb" style={{ margin: '12px 0', fontSize: 14 }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#667eea' }}>Home</Link>
        <span style={{ margin: '0 8px', color: '#6c757d' }}>›</span>
        <span>Contact</span>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px 20px',
          textAlign: 'center',
          borderRadius: '16px',
          margin: '0 0 40px 0',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📧</div>
          <h1 style={{ 
            fontSize: '2.4rem', 
            marginBottom: '20px', 
            fontWeight: 'bold',
            lineHeight: '1.2'
          }}>
            Contact Us
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: '0.95', 
            marginBottom: '0',
            lineHeight: '1.5'
          }}>
            Questions? Corrections? We&apos;re here to help.
          </p>
        </section>

        <div style={{
          backgroundColor: '#e3f2fd',
          border: '1px solid #bbdefb',
          borderRadius: '8px',
          padding: '20px',
          margin: '0 0 40px 0'
        }}>
          <h2 style={{ color: '#1565c0', margin: '0 0 12px 0', fontSize: '1.2rem' }}>
            ℹ️ Before You Contact Us
          </h2>
          <p style={{ margin: '0 0 12px 0', color: '#1976d2', lineHeight: '1.6' }}>
            <strong>Looking for provider information?</strong> Check our directory first, as it includes contact details and locations for all listed providers.
          </p>
          <p style={{ margin: '0', color: '#1976d2', lineHeight: '1.6' }}>
            <strong>Need immediate medical advice?</strong> Please contact a healthcare provider directly. This directory is for informational purposes only.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          <div>
            <h2>Send Us a Message</h2>

            {submitStatus === 'success' && (
              <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '6px', padding: '15px', marginBottom: '20px', color: '#155724' }}>
                <strong>Thank you!</strong> Your message has been received. We&apos;ll respond within 1-2 business days.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{ backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '6px', padding: '15px', marginBottom: '20px', color: '#721c24' }}>
                <strong>Oops!</strong> There was an error sending your message. Please try again or email us directly.
              </div>
            )}

            {/* Netlify Forms: add name, data-netlify, method=POST, honeypot, hidden form-name */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/contact/thanks"            // fallback redirect when JS is disabled
              onSubmit={handleSubmit}             // JS-enhanced submit (still posts to Netlify)
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {/* Required hidden input so Netlify can identify the form */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field (hidden from humans) */}
              <p hidden>
                <label>Don&apos;t fill this out: <input name="bot-field" onChange={handleInputChange} value={formData['bot-field']} /></label>
              </p>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ced4da', borderRadius: '6px', backgroundColor: 'white' }}
                >
                  <option value="general">General Inquiry</option>
                  <option value="provider-listing">Provider Listing Information</option>
                  <option value="technical">Technical Issue</option>
                  <option value="correction">Information Correction</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ced4da', borderRadius: '6px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>Email Address *</label>
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
                  <small style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                    {emailError}
                  </small>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ced4da', borderRadius: '6px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#495057' }}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ced4da', borderRadius: '6px', resize: 'vertical' }}
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || emailError}
                style={{
                  backgroundColor: (isSubmitting || emailError) ? '#6c757d' : '#007bff',
                  color: 'white',
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: (isSubmitting || emailError) ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '20px', 
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            height: 'fit-content'
          }}>
            <h3 style={{ marginTop: '0', color: '#495057' }}>Response Times</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#6c757d' }}>
              We typically respond to inquiries within 1-2 business days. For urgent provider-related questions, 
              we recommend contacting the provider directly using the information in our directory.
            </p>

            <h3 style={{ color: '#495057' }}>Common Questions</h3>
            <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#6c757d', paddingLeft: '20px' }}>
              <li><strong>Provider Listings:</strong> Information about getting listed in our directory</li>
              <li><strong>Corrections:</strong> Updates to existing provider information</li>
              <li><strong>Technical Issues:</strong> Problems with website functionality</li>
              <li><strong>General Questions:</strong> About our directory and services</li>
            </ul>

            <div style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '6px',
              padding: '15px',
              marginTop: '20px'
            }}>
              <p style={{ 
                margin: '0', 
                fontSize: '0.85rem', 
                color: '#856404',
                fontWeight: '600'
              }}>
                📋 Note: This directory is for informational purposes only. 
                Always verify provider credentials and discuss treatment options directly with providers.
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>
            📍 Serving Colorado
          </h3>
          <p style={{ 
            margin: '0', 
            fontSize: '0.9rem', 
            color: '#6c757d',
            lineHeight: '1.6'
          }}>
            Our directory focuses on lip filler providers throughout Colorado, including Denver, 
            Colorado Springs, Boulder, Fort Collins, and surrounding areas. We&apos;re continuously 
            working to expand our coverage and improve our listings.
          </p>
        </div>
      </div>
    </Layout>
  );
}