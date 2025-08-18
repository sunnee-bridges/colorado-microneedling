// ===================================
// components/PriceCalculator.js
// ===================================

import React, { useState, useEffect } from 'react';
import providersData from '../data/providers.json'; // Add this import

export default function PriceCalculator() {
  const [formData, setFormData] = useState({
    city: '',
    filler: '',
    amount: '',
    experience: '',
    newpatient: 'no'
  });
  
  const [result, setResult] = useState(null);

  // Generate city data from providers.json
  const getCityData = () => {
    const cityMap = {};
    
    providersData.providers.forEach(provider => {
      const city = provider.city;
      if (cityMap[city]) {
        cityMap[city].count += 1;
      } else {
        cityMap[city] = {
          name: city,
          count: 1,
          slug: city.toLowerCase().replace(/\s+/g, '').replace('village', '')
        };
      }
    });
    
    return Object.values(cityMap).sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      return a.name.localeCompare(b.name);
    });
  };

  const cityData = getCityData();

  // Updated pricing to include all cities
  const pricing = {
    denver: {
      juvederm: 750,
      restylane: 650,
      rha: 800,
      budget: 550
    },
    'colorado springs': {
      juvederm: 650,
      restylane: 550,
      rha: 700,
      budget: 450
    },
    boulder: {
      juvederm: 850,
      restylane: 750,
      rha: 900,
      budget: 650
    },
    'fort collins': {
      juvederm: 725,
      restylane: 625,
      rha: 775,
      budget: 525
    },
    broomfield: {
      juvederm: 700,
      restylane: 600,
      rha: 750,
      budget: 500
    },
    aurora: {
      juvederm: 675,
      restylane: 575,
      rha: 725,
      budget: 475
    },
    evergreen: {
      juvederm: 825,
      restylane: 725,
      rha: 875,
      budget: 625
    },
    'greenwood village': {
      juvederm: 875,
      restylane: 775,
      rha: 925,
      budget: 675
    }
  };

  const experienceMultiplier = {
    trainee: 0.7,
    experienced: 1.0,
    expert: 1.2,
    specialist: 1.4
  };

  const calculateCost = () => {
    const { city, filler, amount, experience } = formData;
    
    if (!city || !filler || !amount || !experience) {
      setResult(null);
      return;
    }

    // Convert city name to match pricing keys
    const cityKey = city.toLowerCase();
    const cityPricing = pricing[cityKey];
    
    if (!cityPricing) {
      setResult(null);
      return;
    }

    let baseCost = cityPricing[filler] * parseFloat(amount);
    baseCost *= experienceMultiplier[experience];
    
    const finalCost = Math.round(baseCost);
    
    setResult({
      cost: finalCost
    });
  };

  useEffect(() => {
    calculateCost();
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="calculator">
      <div className="grid">
        <div>
          <div className="form-group">
            <label htmlFor="city">Choose Your City:</label>
            <select 
              id="city" 
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
            >
              <option value="">Select a city...</option>
              {cityData.map(city => (
                <option key={city.slug} value={city.name}>
                  {city.name} ({city.count} provider{city.count !== 1 ? 's' : ''})
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="filler">Filler Type:</label>
            <select 
              id="filler" 
              value={formData.filler}
              onChange={(e) => handleChange('filler', e.target.value)}
            >
              <option value="">Select filler...</option>
              <option value="juvederm">Juvederm Volbella</option>
              <option value="restylane">Restylane Kysse</option>
              <option value="rha">RHA 2</option>
              <option value="budget">Budget Option</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="amount">Amount Needed:</label>
            <select 
              id="amount" 
              value={formData.amount}
              onChange={(e) => handleChange('amount', e.target.value)}
            >
              <option value="">Select amount...</option>
              <option value="0.5">0.5ml (Subtle)</option>
              <option value="1">1ml (Standard)</option>
              <option value="1.5">1.5ml (Full)</option>
              <option value="2">2ml (Dramatic)</option>
            </select>
          </div>
        </div>
        
        <div>
          <div className="form-group">
            <label htmlFor="experience">Provider Experience:</label>
            <select 
              id="experience" 
              value={formData.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
            >
              <option value="">Select experience...</option>
              <option value="trainee">Trainee (Supervised)</option>
              <option value="experienced">Experienced (3+ years)</option>
              <option value="expert">Expert (5+ years)</option>
              <option value="specialist">Specialist (Board-certified)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="newpatient">Are you a new patient?</label>
            <select 
              id="newpatient" 
              value={formData.newpatient}
              onChange={(e) => handleChange('newpatient', e.target.value)}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          
          {formData.newpatient === 'yes' && (
            <div className="new-patient-info" style={{
              padding: '12px',
              backgroundColor: '#f0f9ff',
              borderLeft: '4px solid #0ea5e9',
              borderRadius: '4px',
              marginTop: '10px'
            }}>
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#0369a1', 
                margin: 0 
              }}>
                <strong>Great!</strong> Many providers offer new patient discounts. Be sure to mention you're a new patient when contacting them to ask about current promotions.
              </p>
            </div>
          )}
          
          {result && (
            <div className="calc-result" style={{
              color: '#2c3e50',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Your estimated cost: ${result.cost}
              <div style={{ 
                fontSize: '0.9rem', 
                marginTop: '12px',
                padding: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '6px',
                color: '#2c3e50',
                fontWeight: '400'
              }}>
                <strong style={{ color: '#1a5490' }}>Note:</strong> This is a base estimate. Final pricing may vary based on consultation and current promotions.
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Disclaimer */}
      <div style={{
        marginTop: '24px',
        padding: '16px',
        backgroundColor: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '8px'
      }}>
        <h4 style={{
          fontWeight: '600',
          color: '#1e40af',
          marginBottom: '8px',
          fontSize: '1rem'
        }}>
          Pricing Disclaimer
        </h4>
        <p style={{
          fontSize: '0.875rem',
          color: '#1e40af',
          margin: 0,
          lineHeight: '1.4'
        }}>
          Prices shown are base estimates and may vary significantly based on individual treatment needs, provider consultation, and current promotions. New patient discounts are commonly available but vary by provider. Always contact providers directly to confirm current pricing and available discounts before booking your appointment.
        </p>
      </div>
    </div>
  );
}