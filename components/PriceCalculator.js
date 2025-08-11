// ===================================
// components/PriceCalculator.js
// ===================================

import React, { useState, useEffect } from 'react';

export default function PriceCalculator() {
  const [formData, setFormData] = useState({
    city: '',
    filler: '',
    amount: '',
    experience: '',
    newpatient: 'no'
  });
  
  const [result, setResult] = useState(null);

  const pricing = {
    denver: {
      juvederm: 750,
      restylane: 650,
      rha: 800,
      budget: 550
    },
    springs: {
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
    fortcollins: {
      juvederm: 725,
      restylane: 625,
      rha: 775,
      budget: 525
    }
  };

  const experienceMultiplier = {
    trainee: 0.7,
    experienced: 1.0,
    expert: 1.2,
    specialist: 1.4
  };

  const calculateCost = () => {
    const { city, filler, amount, experience, newpatient } = formData;
    
    if (!city || !filler || !amount || !experience) {
      setResult(null);
      return;
    }

    let baseCost = pricing[city][filler] * parseFloat(amount);
    baseCost *= experienceMultiplier[experience];
    
    let discount = 0;
    if (newpatient === 'yes') {
      discount = 100;
      baseCost -= discount;
    }

    const finalCost = Math.round(baseCost);
    
    setResult({
      cost: finalCost,
      discount: discount
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
              <option value="denver">Denver</option>
              <option value="springs">Colorado Springs</option>
              <option value="boulder">Boulder</option>
              <option value="fortcollins">Fort Collins</option>
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
              <option value="yes">Yes (Discount eligible)</option>
            </select>
          </div>
          
          {result && (
            <div className="calc-result">
              Your estimated cost: ${result.cost}
              {result.discount > 0 && (
                <div style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                  You saved ${result.discount} with new patient discount!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}