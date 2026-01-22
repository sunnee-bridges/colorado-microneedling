import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import LipShapeQuiz from '../components/LipShapeQuiz';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://findlipfillers.com';

export default function QuizPage() {
  return (
    <Layout 
      title="Lip Shape Finder Quiz | Find Your Perfect Lip Style"
      metaDescription="Take our 60-second Lip Shape Finder quiz to discover your ideal lip filler style, volume recommendations, and talking points for your consultation."
      ogTitle="What's Your Lip Shape?"
      ogDescription="Take the Lip Shape Finder quiz in 60 seconds. Get personalized style recommendations, volume ranges, and consultation talking points."
      ogImage={`${SITE_URL}/og/quiz-og.jpg`}
    >
      <Head>
        <link rel="canonical" href={`${SITE_URL}/quiz`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Lip Shape Finder Quiz',
              description: 'Interactive quiz to find your perfect lip filler style',
              url: `${SITE_URL}/quiz`,
              applicationCategory: 'LifestyleApplication',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              }
            })
          }}
        />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fef3f8 0%, #f5e6f0 100%)' }}>
        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px 20px',
          borderRadius: '0 0 12px 12px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '15px',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Lip Shape Finder
          </h1>
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
            opacity: 0.95
          }}>
            Discover your ideal lip style in just 60 seconds. Get personalized recommendations & talking points for your consultation.
          </p>
        </div>

        {/* Quiz Container */}
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '0 20px 40px 20px'
        }}>
          <LipShapeQuiz />
        </div>

        {/* Info Section */}
        <div style={{
          maxWidth: '900px',
          margin: '40px auto',
          padding: '0 20px 80px 20px'
        }}>
          <div style={{
            background: 'white',
            border: '2px solid #667eea',
            borderRadius: '12px',
            padding: '30px',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h2 style={{ color: '#2d1b3d', marginBottom: '15px' }}>
              What Happens Next?
            </h2>
            <p style={{ color: '#6b4c7a', marginBottom: '0px', fontSize: '1rem', lineHeight: '1.6' }}>
              Your personalized results include your ideal lip style and a checklist of talking points to bring to your consultation. Share your results with friends or save them to show your provider!
            </p>
          </div>

          {/* Disclaimer */}
          <div style={{
            background: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            padding: '30px',
            marginTop: '0px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#6c757d',
            lineHeight: '1.7'
          }}>
            <strong>Disclaimer:</strong> This quiz is for entertainment and educational purposes only. Always consult with a qualified provider to discuss your specific goals and anatomy.
          </div>
        </div>
      </div>
    </Layout>
  );
}