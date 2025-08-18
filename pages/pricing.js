// pages/pricing.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import PriceCalculator from '../components/PriceCalculator';
import Head from 'next/head';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Lip Filler Prices Near Me Colorado | Cost Comparison 2025</title>
        <meta name="description" content="Compare lip filler prices near you in Colorado. Find the best deals on lip injections in Denver, Boulder, Colorado Springs. Updated 2025 pricing guide." />
        <meta name="keywords" content="lip filler prices, lip filler cost denver, juvederm cost denver, restylane denver cost, how much do lip fillers cost near me" />
        <link rel="canonical" href="https://yoursite.com/pricing" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="hero-pricing">
          <div className="container">
            <h1>Lip Filler Prices Near Me in Colorado</h1>
            <p className="subtitle">Compare costs from Colorado providers • Updated January 2025</p>
            <a href="#calculator" className="cta-button">Calculate Your Cost</a>
          </div>
        </section>

        {/* Zero Difficulty Keywords Callout */}
        <div className="container">
          <div className="zero-difficulty">
            <h3>🎯 Instant Price Comparison Tool</h3>
            <p><strong>Targeting:</strong> "lip fillers near me prices" (880 searches, KD 1%) • "how much do lip fillers cost near me" (170 searches, KD 0%)</p>
            <p>Find exact pricing for lip fillers in your Colorado city. Compare costs instantly and find the best deals near you.</p>
          </div>
        </div>

        {/* Main Pricing Overview */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">Colorado Lip Filler Pricing Overview</h2>
            
            <div className="price-table-container">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Average Price Range*</th>
                    <th>Typical Low End*</th>
                    <th>Typical High End*</th>
                    <th>Most Popular Range*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="best-deal">
                    <td><strong>Denver</strong></td>
                    <td className="price-highlight">$650 - $950*</td>
                    <td>$550 - $650*</td>
                    <td>$950 - $1,200*</td>
                    <td>$700 - $800*</td>
                  </tr>
                  <tr>
                    <td><strong>Colorado Springs</strong></td>
                    <td className="price-highlight">$550 - $850*</td>
                    <td>$450 - $550*</td>
                    <td>$850 - $950*</td>
                    <td>$600 - $700*</td>
                  </tr>
                  <tr>
                    <td><strong>Boulder</strong></td>
                    <td className="price-highlight">$700 - $1,100*</td>
                    <td>$650 - $750*</td>
                    <td>$1,000 - $1,200*</td>
                    <td>$800 - $900*</td>
                  </tr>
                  <tr>
                    <td><strong>Fort Collins</strong></td>
                    <td className="price-highlight">$600 - $900*</td>
                    <td>$525 - $625*</td>
                    <td>$900 - $1,050*</td>
                    <td>$700 - $800*</td>
                  </tr>
                </tbody>
              </table>
              
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '15px', textAlign: 'center' }}>
                *All pricing is approximate and subject to change. Contact providers directly for current pricing and consultation fees.
              </p>
            </div>
          </div>
        </section>

        {/* Price Calculator */}
        <section className="calculator-section" id="calculator">
          <div className="container">
            <h3>💻 Lip Filler Cost Calculator</h3>
            <p><em>Targeting: "lip filler cost calculator" (110 searches, KD 0%)</em></p>
            <PriceCalculator />
          </div>
        </section>

        {/* Brand Specific Pricing */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">Brand-Specific Pricing in Colorado</h2>
            
            <div className="grid">
              <div className="feature-card">
                <div className="feature-icon">💎</div>
                <h3>Juvederm Pricing</h3>
                <p><em>Targeting: "juvederm cost colorado" (20 searches, KD 0%)</em></p>
                <p><strong>Volbella XC:</strong> Starting approximately $650-850*</p>
                <p><strong>Voluma XC:</strong> Starting approximately $750-950*</p>
                <p><strong>Ultra XC:</strong> Starting approximately $700-900*</p>
                <p><strong>Duration:</strong> Typically 12-18 months*</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>Restylane Pricing</h3>
                <p><em>Targeting: "restylane cost colorado" (10 searches, KD 0%)</em></p>
                <p><strong>Kysse:</strong> Starting approximately $600-800*</p>
                <p><strong>Silk:</strong> Starting approximately $550-750*</p>
                <p><strong>Lyft:</strong> Starting approximately $650-850*</p>
                <p><strong>Duration:</strong> Typically 12-18 months*</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>RHA Collection</h3>
                <p><em>Targeting: "rha fillers colorado" (20 searches, KD 0%)</em></p>
                <p><strong>RHA 2:</strong> Starting approximately $700-900*</p>
                <p><strong>RHA 3:</strong> Starting approximately $750-950*</p>
                <p><strong>Duration:</strong> Typically 15-18 months*</p>
                <p><strong>Benefits:</strong> Natural movement*</p>
              </div>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '20px', textAlign: 'center' }}>
              *All pricing and duration information is approximate and may vary by provider and individual patient needs.
            </p>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">💡 How to Save Money on Lip Fillers</h2>
            
            <div className="grid">
              <div className="feature-card">
                <div className="feature-icon">🎁</div>
                <h3>New Patient Offers</h3>
                <p>Many clinics offer promotions for new patients. Ask about consultation fees, first-visit discounts, and package deals when contacting providers.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Seasonal Promotions</h3>
                <p>Some providers offer seasonal specials in January (New Year) and spring. Holiday weekends may feature limited-time promotions.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Referral Programs</h3>
                <p>Ask about referral programs and loyalty rewards when consulting with providers.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Compare Providers</h3>
                <p>Use our provider directory to compare options in your area. Always verify credentials and get consultations from multiple providers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA to Provider Directory */}
        <section className="content-section">
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '40px 20px',
              borderRadius: '12px',
              textAlign: 'center',
              margin: '40px 0'
            }}>
              <h2 style={{ marginBottom: '15px' }}>Ready to Find Providers Near You?</h2>
              <p style={{ fontSize: '1.1rem', margin: '20px 0', opacity: 0.9 }}>
                Browse our directory of licensed medical professionals offering lip filler services in Colorado.
              </p>
              <a 
                href="/#find-providers" 
                style={{
                  background: 'white',
                  color: '#667eea',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '18px'
                }}
              >
                🔍 Browse Provider Directory
              </a>
            </div>
          </div>
        </section>

        {/* Important Disclaimer */}
        <div style={{
          background: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          margin: '40px 0',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#6c757d'
        }}>
          <strong>Pricing Information Disclaimer:</strong> All pricing information is approximate and for educational purposes only. 
          Actual costs may vary significantly based on individual treatment plans, provider policies, consultation fees, and current promotions. 
          Always contact providers directly for current pricing and verify all credentials independently.
          <a href="/terms" style={{ color: '#007bff', textDecoration: 'none', marginLeft: '5px' }}>View complete terms</a>.
        </div>
      </Layout>
    </>
  );
}

// Remove getStaticProps entirely since we're not using provider data anymore