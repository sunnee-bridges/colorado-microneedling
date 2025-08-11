// pages/pricing.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import PriceCalculator from '../components/PriceCalculator';
import ProviderCard from '../components/ProviderCard';
import Head from 'next/head';

export default function PricingPage({ providers }) {
  return (
    <>
      <Head>
        <title>Lip Filler Prices Near Me Colorado | Cost Comparison 2025</title>
        <meta name="description" content="Compare lip filler prices near you in Colorado. Find the best deals on lip injections in Denver, Boulder, Colorado Springs. Updated 2025 pricing from 500+ providers." />
        <meta name="keywords" content="lip filler prices, lip filler cost denver, juvederm cost denver, restylane denver cost, how much do lip fillers cost near me" />
        <link rel="canonical" href="https://yoursite.com/pricing" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="hero-pricing">
          <div className="container">
            <h1>Lip Filler Prices Near Me in Colorado</h1>
            <p className="subtitle">Compare costs from 500+ verified providers • Updated January 2025</p>
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
                    <th>Average Price Range</th>
                    <th>Cheapest Option</th>
                    <th>Premium Option</th>
                    <th>Most Popular</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="best-deal">
                    <td><strong>Denver</strong></td>
                    <td className="price-highlight">$650 - $950</td>
                    <td>$550 (New Patient Special)</td>
                    <td>$1,200 (Premium Clinic)</td>
                    <td>$750 (Juvederm Volbella)</td>
                  </tr>
                  <tr>
                    <td><strong>Colorado Springs</strong></td>
                    <td className="price-highlight">$550 - $850</td>
                    <td>$450 (Limited Time)</td>
                    <td>$950 (Luxury Spa)</td>
                    <td>$650 (Restylane Kysse)</td>
                  </tr>
                  <tr>
                    <td><strong>Boulder</strong></td>
                    <td className="price-highlight">$700 - $1,100</td>
                    <td>$650 (Student Discount)</td>
                    <td>$1,200 (High-End Clinic)</td>
                    <td>$850 (Juvederm Ultra)</td>
                  </tr>
                  <tr>
                    <td><strong>Fort Collins</strong></td>
                    <td className="price-highlight">$600 - $900</td>
                    <td>$525 (Promotional)</td>
                    <td>$1,050 (Specialty Clinic)</td>
                    <td>$725 (Restylane Silk)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="special-offer">
              <div className="offer-title">💰 Current Promotions</div>
              <p><strong>January 2025 Specials:</strong> New patient discounts up to $200 off • Multiple syringe savings 15-20% • Free consultations at participating clinics</p>
            </div>
          </div>
        </section>

        {/* Denver Section (Highest Traffic City) */}
        <section className="city-section">
          <div className="container">
            <h2 className="city-title">🏙️ Lip Filler Cost Denver</h2>
            <p><em>Targeting: "lip filler cost denver" (30 searches, KD 0%) • "juvederm cost denver" (20 searches, KD 0%)</em></p>
            
            {providers.denver.map((provider, index) => (
              <ProviderCard 
                key={index}
                provider={provider}
                showPricing={true}
                showSpecials={true}
              />
            ))}
          </div>
        </section>

        {/* Price Calculator */}
        <section className="calculator-section" id="calculator">
          <div className="container">
            <h3>💻 Lip Filler Cost Calculator</h3>
            <p><em>Targeting: "needleless lip fillers near me" (110 searches, KD 0%)</em></p>
            <PriceCalculator />
          </div>
        </section>

        {/* Brand Specific Pricing */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">Brand-Specific Pricing</h2>
            
            <div className="grid">
              <div className="feature-card">
                <div className="feature-icon">💎</div>
                <h3>Juvederm Pricing</h3>
                <p><em>Targeting: "juvederm deals denver" (20 searches, KD 0%)</em></p>
                <p><strong>Volbella XC:</strong> $650-850</p>
                <p><strong>Voluma XC:</strong> $750-950</p>
                <p><strong>Ultra XC:</strong> $700-900</p>
                <p><strong>Duration:</strong> 12-18 months</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>Restylane Pricing</h3>
                <p><em>Targeting: "restylane denver cost" (10 searches, KD 0%)</em></p>
                <p><strong>Kysse:</strong> $600-800</p>
                <p><strong>Silk:</strong> $550-750</p>
                <p><strong>Lyft:</strong> $650-850</p>
                <p><strong>Duration:</strong> 12-18 months</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>RHA Collection</h3>
                <p><em>Targeting: "rha fillers colorado springs" (20 searches, KD 0%)</em></p>
                <p><strong>RHA 2:</strong> $700-900</p>
                <p><strong>RHA 3:</strong> $750-950</p>
                <p><strong>Duration:</strong> 15-18 months</p>
                <p><strong>Benefits:</strong> Natural movement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">💡 How to Save Money on Lip Fillers</h2>
            
            <div className="grid">
              <div className="feature-card">
                <div className="feature-icon">🎁</div>
                <h3>New Patient Specials</h3>
                <p>Save $100-300 off your first treatment at participating clinics. Many providers offer consultation credits and package deals.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Seasonal Promotions</h3>
                <p>Best deals in January (New Year specials) and spring (pre-summer prep). Holiday weekends often feature limited-time offers.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Group Discounts</h3>
                <p>Bring a friend and both save $50-100. Multiple syringe treatments often include 10-20% volume discounts.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🎓</div>
                <h3>Training Clinics</h3>
                <p>Save 30-50% at supervised training sessions. Performed by students under expert physician oversight.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

// Static props for SEO and performance
export async function getStaticProps() {
  // This would fetch from your providers.json or API
  const providers = {
    denver: [
      {
        name: "Denver Aesthetic Center",
        rating: 4.9,
        reviewCount: 156,
        pricing: {
          juvederm: "$750-900",
          restylane: "$650-800",
          rha: "$800-950"
        },
        special: "$100 off first treatment for new patients",
        location: "Cherry Creek",
        phone: "(303) 555-0123",
        features: ["Online booking available"],
        isVerified: true,
        isPremium: true
      },
      {
        name: "Mile High Cosmetic Surgery",
        rating: 4.8,
        reviewCount: 203,
        pricing: {
          juvederm: "$700-850",
          restylane: "$600-750",
          budget: "Budget options available"
        },
        special: "Free consultation + $75 off any treatment",
        location: "Downtown Denver",
        phone: "(720) 555-0156",
        features: ["Same-day appointments"],
        isVerified: true
      },
      {
        name: "Colorado Facial Plastics",
        rating: 4.9,
        reviewCount: 124,
        pricing: {
          premium: "$850-1,200",
          specialty: "Board-certified plastic surgeon"
        },
        special: "Loyalty program with member pricing",
        location: "Highlands",
        phone: "(303) 555-0189",
        features: ["Luxury experience"],
        isVerified: true,
        isPremium: true
      }
    ]
  };

  return {
    props: {
      providers
    },
    revalidate: 86400 // Update daily
  };
}