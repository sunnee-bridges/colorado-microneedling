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
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💰</div>
            <h1 style={{ 
              fontSize: '2.8rem', 
              marginBottom: '25px', 
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
              Lip Filler Prices in Colorado
            </h1>
            <p style={{ 
              fontSize: '1.4rem', 
              opacity: '0.95', 
              marginBottom: '30px',
              lineHeight: '1.5'
            }}>
              Compare costs from licensed medical professionals • Updated January 2025
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
              Calculate Your Cost
            </a>
          </div>
        </section>

        {/* Professional Notice */}
        <div style={{ maxWidth: '900px', margin: '0 auto 40px auto', padding: '0 20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #e7f3ff 0%, #bee3f8 100%)',
            border: '2px solid #3182ce',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 4px 12px rgba(49, 130, 206, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>🎯</div>
              <h3 style={{ color: '#1e40af', margin: 0, fontSize: '1.2rem' }}>
                Professional Price Comparison Tool
              </h3>
            </div>
            <p style={{ color: '#1e40af', margin: 0, lineHeight: '1.6' }}>
               Explore general pricing information for lip fillers from medical professionals in Colorado cities. 
                All pricing is approximate and for educational purposes only. Contact providers directly for current rates and personalized consultations.
            </p>
          </div>
        </div>

        {/* Main Pricing Overview */}
        <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #667eea', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Colorado Lip Filler Pricing Overview
          </h2>
          
          <div style={{
            background: 'white',
            border: '2px solid #e9ecef',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '1rem'
            }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                  <th style={{ 
                    padding: '20px', 
                    textAlign: 'left', 
                    borderBottom: '3px solid #dee2e6',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}>
                    City
                  </th>
                  <th style={{ 
                    padding: '20px', 
                    textAlign: 'center', 
                    borderBottom: '3px solid #dee2e6',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#667eea'
                  }}>
                    Average Range*
                  </th>
                  <th style={{ 
                    padding: '20px', 
                    textAlign: 'center', 
                    borderBottom: '3px solid #dee2e6',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    Starting From*
                  </th>
                  <th style={{ 
                    padding: '20px', 
                    textAlign: 'center', 
                    borderBottom: '3px solid #dee2e6',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    Premium Range*
                  </th>
                  <th style={{ 
                    padding: '20px', 
                    textAlign: 'center', 
                    borderBottom: '3px solid #dee2e6',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    Most Common*
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
    city: "Denver",
    average: "$650 - $950",
    low: "$550 - $650",
    high: "$950 - $1,200",
    popular: "$700 - $800",
    highlight: true
  },
  {
    city: "Colorado Springs",
    average: "$550 - $850",
    low: "$450 - $550",
    high: "$850 - $950",
    popular: "$600 - $700"
  },
  {
    city: "Boulder",
    average: "$700 - $1,100",
    low: "$650 - $750",
    high: "$1,000 - $1,200",
    popular: "$800 - $900"
  },
  {
    city: "Fort Collins",
    average: "$600 - $900",
    low: "$525 - $625",
    high: "$900 - $1,050",
    popular: "$700 - $800"
  },
  {
    city: "Aurora",
    average: "$600 - $900",
    low: "$500 - $600",
    high: "$900 - $1,100",
    popular: "$650 - $750"
  },
  {
    city: "Lakewood",
    average: "$650 - $950",
    low: "$550 - $650",
    high: "$950 - $1,150",
    popular: "$700 - $800"
  },
  {
    city: "Thornton",
    average: "$600 - $850",
    low: "$500 - $600",
    high: "$850 - $1,000",
    popular: "$650 - $750"
  },
  {
    city: "Arvada",
    average: "$625 - $875",
    low: "$525 - $625",
    high: "$875 - $1,050",
    popular: "$675 - $775"
  },
  {
    city: "Westminster",
    average: "$625 - $900",
    low: "$525 - $625",
    high: "$900 - $1,100",
    popular: "$700 - $800"
  },
  {
    city: "Pueblo",
    average: "$500 - $750",
    low: "$400 - $500",
    high: "$750 - $900",
    popular: "$550 - $650"
  },
  {
    city: "Centennial",
    average: "$700 - $1,000",
    low: "$600 - $700",
    high: "$1,000 - $1,200",
    popular: "$750 - $850"
  },
  {
    city: "Greeley",
    average: "$550 - $800",
    low: "$450 - $550",
    high: "$800 - $950",
    popular: "$600 - $700"
  }
                ].map((row, index) => (
                  <tr key={index} style={{ 
                    borderBottom: '1px solid #dee2e6',
                    background: row.highlight ? 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)' : (index % 2 === 0 ? '#fff' : '#fafbfc')
                  }}>
                    <td style={{ 
                      padding: '18px 20px', 
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      color: row.highlight ? '#2f855a' : '#333'
                    }}>
                      {row.city}
                      {row.highlight && <span style={{ 
                        marginLeft: '8px', 
                        background: '#38a169',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontSize: '0.7rem'
                      }}>POPULAR</span>}
                    </td>
                    <td style={{ 
                      padding: '18px 20px', 
                      textAlign: 'center',
                      color: '#667eea',
                      fontWeight: 'bold',
                      fontSize: '1rem'
                    }}>
                      {row.average}
                    </td>
                    <td style={{ 
                      padding: '18px 20px', 
                      textAlign: 'center',
                      fontSize: '0.95rem'
                    }}>
                      {row.low}
                    </td>
                    <td style={{ 
                      padding: '18px 20px', 
                      textAlign: 'center',
                      fontSize: '0.95rem'
                    }}>
                      {row.high}
                    </td>
                    <td style={{ 
                      padding: '18px 20px', 
                      textAlign: 'center',
                      fontSize: '0.95rem'
                    }}>
                      {row.popular}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            padding: '15px',
            marginTop: '20px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.95rem', color: '#6c757d', margin: 0 }}>
              *All pricing is approximate and subject to change. Contact providers directly for current pricing and consultation fees.
            </p>
          </div>
        </section>

        {/* Price Calculator */}
        <section id="calculator" style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
            border: '3px solid #38a169',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(56, 161, 105, 0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>💻</div>
            <h3 style={{ color: '#2f855a', fontSize: '2rem', marginBottom: '15px' }}>
              Lip Filler Cost Calculator
            </h3>
            <p style={{ color: '#2f855a', fontSize: '1.1rem', marginBottom: '30px' }}>
              Get personalized pricing estimates based on your location and treatment preferences
            </p>
            <PriceCalculator />
          </div>
        </section>

        {/* Brand Specific Pricing */}
        <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #d69e2e', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Brand-Specific Pricing Information
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                icon: "💎",
                title: "Juvéderm Collection",
                color: "#3182ce",
                products: [
                  { name: "Volbella XC", price: "$650-850", note: "Subtle enhancement" },
                  { name: "Voluma XC", price: "$750-950", note: "Volume & structure" },
                  { name: "Ultra XC", price: "$700-900", note: "Natural fullness" }
                ],
                duration: "12-18 months",
                benefit: "Smooth, natural results"
              },
              {
                icon: "✨",
                title: "Restylane Collection",
                color: "#38a169",
                products: [
                  { name: "Kysse", price: "$600-800", note: "Natural lip enhancement" },
                  { name: "Silk", price: "$550-750", note: "Subtle definition" },
                  { name: "Lyft", price: "$650-850", note: "Volume & lift" }
                ],
                duration: "12-18 months",
                benefit: "Flexible, lasting results"
              },
              {
                icon: "🚀",
                title: "RHA Collection",
                color: "#805ad5",
                products: [
                  { name: "RHA 2", price: "$700-900", note: "Dynamic movement" },
                  { name: "RHA 3", price: "$750-950", note: "Enhanced volume" }
                ],
                duration: "15-18 months",
                benefit: "Natural facial movement"
              }
            ].map((brand, index) => (
              <div key={index} style={{
                background: 'white',
                border: `3px solid ${brand.color}`,
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '15px',
                    background: `${brand.color}15`,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px auto'
                  }}>
                    {brand.icon}
                  </div>
                  <h3 style={{ color: brand.color, fontSize: '1.3rem', margin: 0 }}>
                    {brand.title}
                  </h3>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  {brand.products.map((product, pIndex) => (
                    <div key={pIndex} style={{
                      background: `${brand.color}08`,
                      padding: '12px',
                      borderRadius: '8px',
                      marginBottom: '8px',
                      border: `1px solid ${brand.color}20`
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <strong style={{ color: brand.color }}>{product.name}</strong>
                          <div style={{ fontSize: '0.85rem', color: '#666' }}>{product.note}</div>
                        </div>
                        <div style={{ fontWeight: 'bold', color: brand.color }}>
                          {product.price}*
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  background: brand.color,
                  color: 'white',
                  padding: '15px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
                    <strong>Duration:</strong> {brand.duration}*
                  </div>
                  <div style={{ fontSize: '0.9rem' }}>
                    <strong>Benefit:</strong> {brand.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '30px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.95rem', color: '#6c757d', margin: 0 }}>
              *All pricing and duration information is approximate and may vary by provider and individual patient needs.
            </p>
          </div>
        </section>

        {/* Cost-Effective Tips */}
        <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '4px solid #38a169', 
            paddingBottom: '15px',
            fontSize: '2rem',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Smart Savings Strategies
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                icon: "🎁",
                title: "New Patient Consultations",
                description: "Many licensed medical professionals offer complimentary consultations for new patients. Take advantage of these to compare options and treatment plans.",
                color: "#3182ce"
              },
              {
                icon: "📅",
                title: "Seasonal Opportunities",
                description: "Some providers offer seasonal promotions in January and spring. Monitor for limited-time offers during slower aesthetic seasons.",
                color: "#38a169"
              },
              {
                icon: "👥",
                title: "Loyalty Programs",
                description: "Ask about referral programs and loyalty rewards when consulting with licensed providers. Many offer points systems for returning patients.",
                color: "#805ad5"
              },
              {
                icon: "🔍",
                title: "Provider Comparison",
                description: "Use our directory to compare licensed medical professionals in your area. Always verify credentials and obtain multiple consultations.",
                color: "#d69e2e"
              }
            ].map((tip, index) => (
              <div key={index} style={{
                background: 'white',
                border: `2px solid ${tip.color}`,
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '15px',
                  background: `${tip.color}15`,
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px auto'
                }}>
                  {tip.icon}
                </div>
                <h3 style={{ color: tip.color, fontSize: '1.2rem', marginBottom: '15px' }}>
                  {tip.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to Provider Directory */}
        <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '50px 30px',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
          }}>
            <h2 style={{ marginBottom: '20px', fontSize: '2.2rem' }}>
              Ready to Find Licensed Providers Near You?
            </h2>
            <p style={{ 
              fontSize: '1.3rem', 
              margin: '20px 0 30px 0', 
              opacity: 0.95,
              lineHeight: '1.5'
            }}>
              Browse our directory of licensed medical professionals offering lip filler services in Colorado.
            </p>
            <a 
              href="/#find-providers" 
              style={{
                background: 'white',
                color: '#667eea',
                padding: '18px 35px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                fontSize: '1.1rem',
                transition: 'transform 0.2s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              🔍 Browse Provider Directory
            </a>
          </div>
        </section>

        {/* Professional Disclaimer */}
        <div style={{ maxWidth: '900px', margin: '0 auto 40px auto', padding: '0 20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            border: '2px solid #dee2e6',
            borderRadius: '12px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>⚖️</div>
            <h4 style={{ color: '#6c757d', margin: '0 0 15px 0', fontSize: '1.2rem' }}>
              Pricing Information Disclaimer
            </h4>
            <p style={{ 
              color: '#6c757d', 
              fontSize: '1rem', 
              margin: 0, 
              lineHeight: '1.6',
              fontStyle: 'italic',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              All pricing information is approximate and for educational purposes only. 
              Actual costs may vary significantly based on individual treatment plans, provider policies, 
              consultation fees, and current promotions. Always contact providers directly for current pricing 
              and verify all credentials independently.
              <a href="/terms" style={{ color: '#667eea', textDecoration: 'none', marginLeft: '5px' }}>
                View complete terms
              </a>.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}