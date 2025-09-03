import { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
      // Important: include "form-name" in the payload
      const payload = {
        'form-name': 'contact',
        ...formData
      };

      const res = await fetch('/contact', {
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
      // optionally show a toast/UI error here
    }
  };

  return (
    <Layout title="Contact Us - Colorado Lip Fillers Directory">
      <Head>
        {/* … your existing <Head> content unchanged … */}
      </Head>

      {/* Breadcrumbs … unchanged … */}

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact Us</h1>

        {/* … your informational blocks … */}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          <div>
            <h2>Send Us a Message</h2>

            {submitStatus === 'success' && (
              <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '6px', padding: '15px', marginBottom: '20px', color: '#155724' }}>
                <strong>Thank you!</strong> Your message has been received. We'll respond within 1-2 business days.
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
                <label>Don’t fill this out: <input name="bot-field" onChange={handleInputChange} value={formData['bot-field']} /></label>
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
                  style={{ width: '100%', padding: '10px', border: '1px solid '#ced4da', borderRadius: '6px' }}
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

          {/* Right column … unchanged … */}
        </div>

        {/* … rest of page unchanged … */}
      </div>
    </Layout>
  );
}
