import React, { useState } from 'react';
import Layout from '../components/Layout';

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
  </svg>
);

export default function Verification() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <Layout title="Provider Verification & Quality Standards | Colorado Quality-Focused Medical Professional Directory">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
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
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛡️</div>
            <h1 style={{ 
              fontSize: '2.8rem', 
              marginBottom: '25px', 
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
              Provider Verification Standards
            </h1>
            <p style={{ 
              fontSize: '1.4rem', 
              opacity: '0.95', 
              marginBottom: '30px',
              lineHeight: '1.5'
            }}>
              Professional framework for authenticating healthcare provider credentials and clinical safety standards.
            </p>
            <a 
              href="#verification-guide" 
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
              Review The Standards
            </a>
          </div>
        </section>

        {/* Critical Disclaimer */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '6px',
          padding: '16px',
          margin: '24px 0'
        }}>
          <h4 style={{ color: '#856404', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertIcon />
            Patient Responsibility
          </h4>
          <p style={{ 
            color: '#856404', 
            fontSize: '0.9rem', 
            margin: 0, 
            lineHeight: '1.5' 
          }}>
            <strong>You are solely responsible</strong> for independently verifying all provider credentials, 
            licensing status, and qualifications before scheduling treatments. This guide provides educational 
            information only and does not guarantee provider qualifications.
          </p>
        </div>

        {/* Tab Navigation */}
        <div id="verification-guide" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          marginBottom: '25px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb' }}>
            {['overview', 'providers', 'verification', 'safety'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: '15px',
                  border: 'none',
                  backgroundColor: activeTab === tab ? '#667eea' : 'white',
                  color: activeTab === tab ? 'white' : '#6b7280',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {tab === 'overview' ? 'Standards' : tab}
              </button>
            ))}
          </div>

          <div style={{ padding: '30px' }}>
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#111827', marginBottom: '25px' }}>
                  Medical Quality Standards
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div style={{
                    backgroundColor: '#f0f9ff',
                    border: '2px solid #3b82f6',
                    borderRadius: '10px',
                    padding: '20px'
                  }}>
                    <h3 style={{ color: '#1e40af', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
                      Regulatory Standards
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ color: '#1e40af', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                        <CheckIcon /> Current state licensing verification
                      </li>
                      <li style={{ color: '#1e40af', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                        <CheckIcon /> Professional education authentication
                      </li>
                      <li style={{ color: '#1e40af', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                        <CheckIcon /> Continuing education compliance
                      </li>
                      <li style={{ color: '#1e40af', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                        <CheckIcon /> State board oversight
                      </li>
                    </ul>
                  </div>

                  <div style={{
                    backgroundColor: '#f0fdf4',
                    border: '2px solid #10b981',
                    borderRadius: '10px',
                    padding: '20px'
                  }}>
                    <h3 style={{ color: '#047857', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
                      Safety Requirements
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ color: '#047857', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                        <CheckIcon /> Emergency preparedness protocols
                      </li>
                      <li style={{ color: '#047857', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                        <CheckIcon /> Sterile technique implementation
                      </li>
                      <li style={{ color: '#047857', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                        <CheckIcon /> Medical oversight availability
                      </li>
                      <li style={{ color: '#047857', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                        <CheckIcon /> FDA-approved products only
                      </li>
                    </ul>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '25px'
                }}>
                  <h3 style={{ color: '#374151', marginBottom: '15px', fontSize: '1.2rem', fontWeight: '700' }}>
                    Official Verification Resources
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', color: '#dc2626', fontWeight: '600' }}>Colorado Medical Board</h4>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '13px' }}>MD/DO License Verification</p>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', color: '#7c3aed', fontWeight: '600' }}>Colorado Board of Nursing</h4>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '13px' }}>RN/APRN License Verification</p>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', color: '#059669', fontWeight: '600' }}>Direct Provider Inquiry</h4>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '13px' }}>Primary Credential Verification</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Provider Types Tab */}
            {activeTab === 'providers' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#111827', marginBottom: '25px' }}>
                  Licensed Medical Provider Classifications
                </h2>
                
                {[
                  { title: "Medical Doctors (MD/DO)", level: "Independent Practice", color: "#dc2626", requirements: ["Active Colorado medical license", "Board certification/eligibility", "Residency completion"] },
                  { title: "Advanced Practice Nurses (APRN)", level: "Advanced Practice", color: "#7c3aed", requirements: ["Active Colorado APRN license", "National certification", "Graduate education"] },
                  { title: "Physician Assistants (PA)", level: "Supervised Practice", color: "#0891b2", requirements: ["Active Colorado PA license", "NCCPA certification", "Physician collaboration"] },
                  { title: "Registered Nurses (RN)", level: "Nursing Practice", color: "#059669", requirements: ["Active Colorado RN license", "Aesthetic training", "Physician supervision"] }
                ].map((provider, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'white',
                      border: `2px solid ${provider.color}`,
                      borderRadius: '12px',
                      padding: '20px',
                      marginBottom: '15px'
                    }}
                  >
                    <h3 style={{ margin: '0 0 8px 0', color: provider.color, fontSize: '1.2rem', fontWeight: '700' }}>
                      {provider.title}
                    </h3>
                    <div style={{
                      backgroundColor: provider.color,
                      color: 'white',
                      padding: '3px 10px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: '600',
                      display: 'inline-block',
                      marginBottom: '12px'
                    }}>
                      {provider.level}
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '15px' }}>
                      {provider.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} style={{ color: '#6b7280', marginBottom: '3px', fontSize: '14px' }}>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Verification Process Tab */}
            {activeTab === 'verification' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#111827', marginBottom: '25px' }}>
                  Verification Protocol
                </h2>
                
                {[
                  { title: "License Verification", actions: ["Check state board databases", "Verify license status", "Review disciplinary history"] },
                  { title: "Education Authentication", actions: ["Confirm institution graduation", "Verify training certificates", "Review continuing education"] },
                  { title: "Experience Assessment", actions: ["Inquire about practice years", "Ask about procedure volume", "Request outcome information"] },
                  { title: "Safety Protocol Review", actions: ["Review emergency protocols", "Confirm physician oversight", "Evaluate facility standards"] }
                ].map((step, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '10px',
                      padding: '20px',
                      marginBottom: '15px',
                      display: 'flex',
                      gap: '15px'
                    }}
                  >
                    <div style={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#667eea',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 8px 0', color: '#111827', fontSize: '1.1rem', fontWeight: '700' }}>
                        {step.title}
                      </h3>
                      <ul style={{ margin: 0, paddingLeft: '15px' }}>
                        {step.actions.map((action, actionIndex) => (
                          <li key={actionIndex} style={{ color: '#6b7280', marginBottom: '3px', fontSize: '14px' }}>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div style={{
                  backgroundColor: '#fef2f2',
                  border: '2px solid #ef4444',
                  borderRadius: '10px',
                  padding: '20px',
                  marginTop: '20px'
                }}>
                  <h3 style={{ color: '#7f1d1d', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
                    Warning Signs
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                    {["Unwilling to provide license numbers", "Vague about qualifications", "No medical oversight", "Pressure for quick decisions"].map((flag, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <AlertIcon />
                        <span style={{ color: '#7f1d1d', fontSize: '13px' }}>{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Safety Standards Tab */}
            {activeTab === 'safety' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#111827', marginBottom: '25px' }}>
                  Clinical Safety Standards
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                  <div style={{
                    backgroundColor: '#f0fdf4',
                    border: '2px solid #10b981',
                    borderRadius: '10px',
                    padding: '18px'
                  }}>
                    <h3 style={{ color: '#047857', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
                      Provider Qualifications
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {["Board certification", "Current licensing", "Specialized training", "Education compliance"].map((item, itemIndex) => (
                        <li key={itemIndex} style={{ 
                          color: '#047857', 
                          marginBottom: '6px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          fontSize: '14px'
                        }}>
                          <CheckIcon /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    backgroundColor: '#fef3c7',
                    border: '2px solid #f59e0b',
                    borderRadius: '10px',
                    padding: '18px'
                  }}>
                    <h3 style={{ color: '#92400e', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
                      Safety Protocols
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {["Sterile techniques", "Single-use equipment", "FDA-approved products", "Pre-procedure screening"].map((item, itemIndex) => (
                        <li key={itemIndex} style={{ 
                          color: '#92400e', 
                          marginBottom: '6px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          fontSize: '14px'
                        }}>
                          <CheckIcon /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    backgroundColor: '#fef2f2',
                    border: '2px solid #ef4444',
                    borderRadius: '10px',
                    padding: '18px'
                  }}>
                    <h3 style={{ color: '#7f1d1d', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
                      Emergency Preparedness
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {["Emergency medications", "Staff training", "Clear protocols", "Physician oversight"].map((item, itemIndex) => (
                        <li key={itemIndex} style={{ 
                          color: '#7f1d1d', 
                          marginBottom: '6px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          fontSize: '14px'
                        }}>
                          <CheckIcon /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  padding: '20px'
                }}>
                  <h3 style={{ color: '#374151', marginBottom: '15px', fontSize: '1.1rem', fontWeight: '700' }}>
                    Essential Safety Questions
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#667eea', marginBottom: '8px', fontSize: '1rem' }}>Emergency Protocols</h4>
                      <ul style={{ margin: 0, paddingLeft: '15px', color: '#6b7280', fontSize: '14px' }}>
                        <li>What emergency medications are available?</li>
                        <li>Is physician oversight available?</li>
                        <li>What are complication protocols?</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ color: '#667eea', marginBottom: '8px', fontSize: '1rem' }}>Safety Standards</h4>
                      <ul style={{ margin: 0, paddingLeft: '15px', color: '#6b7280', fontSize: '14px' }}>
                        <li>What infection control measures?</li>
                        <li>Only FDA-approved products used?</li>
                        <li>How is sterile technique maintained?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <h2>Our Verification Commitment</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          We help Colorado patients make informed decisions about aesthetic treatments by 
          providing comprehensive information about provider verification standards. We strive to feature 
          licensed medical professionals and encourage patients to verify credentials independently.
        </p>

        <h2>Why Verification Matters</h2>
        <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
          Licensed medical professionals have formal training in anatomy, safety protocols, 
          and emergency management. They are accountable to state medical boards and must 
          maintain continuing education requirements. Always verify your provider's credentials 
          through official state licensing boards.
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
            This verification guide is for educational purposes only and does not constitute 
            medical advice. Always consult with qualified healthcare providers for 
            personalized medical guidance and independently verify all credentials.
          </p>
        </div>
      </div>
    </Layout>
  );
}