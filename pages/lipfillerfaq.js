import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

// Simple SVG Icon Components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const ChevronDownIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
);

const ChevronUpIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="18,15 12,9 6,15"></polyline>
  </svg>
);

const FilterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"></polygon>
  </svg>
);

const AlertTriangleIcon = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <path d="M12 9v4"></path>
    <path d="m12 17 .01 0"></path>
  </svg>
);

const ImprovedFAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: '📋', color: '#6c757d' },
    { id: 'pain-comfort', name: 'Pain & Comfort', icon: '💉', color: '#dc3545' },
    { id: 'safety', name: 'Safety & Health', icon: '🛡️', color: '#28a745' },
    { id: 'results', name: 'Results & Duration', icon: '⏰', color: '#007bff' },
    { id: 'aftercare', name: 'Aftercare & Recovery', icon: '🩹', color: '#ffc107' },
    { id: 'cost', name: 'Cost & Planning', icon: '💰', color: '#17a2b8' },
    { id: 'procedure', name: 'Procedure Details', icon: '🔬', color: '#6f42c1' }
  ];

  const priorities = [
    { id: 'all', name: 'All Questions' },
    { id: 'essential', name: 'Must-Know', color: '#dc3545' },
    { id: 'important', name: 'Important', color: '#ffc107' },
    { id: 'helpful', name: 'Good to Know', color: '#28a745' }
  ];

  const faqData = [
    {
      id: 1,
      question: "Do lip fillers hurt?",
      category: 'pain-comfort',
      priority: 'essential',
      searchVolume: 4900,
      answer: `Most patients experience mild to moderate discomfort during lip filler injections, similar to a pinch or bee sting. The pain level varies by individual tolerance, but most describe it as very manageable.

**What to expect:**
• Before injection: Topical numbing cream applied 15-20 minutes prior
• During injection: Brief sharp sensation, followed by pressure  
• Pain level: Most rate it 3-4 out of 10 on pain scale
• Duration: Each injection takes 2-3 seconds, total procedure under 30 minutes

**Pain management options:**
• Topical numbing cream (lidocaine)
• Dental blocks for sensitive patients
• Ice before and after treatment
• Some fillers contain lidocaine for additional comfort`,
      tags: ['pain', 'numbing', 'comfort', 'procedure']
    },
    {
      id: 2,
      question: "How long do lip fillers last?",
      category: 'results',
      priority: 'essential',
      searchVolume: 21900,
      answer: `**Average duration by filler type:**
• Juvederm Ultra XC: 9-12 months
• Juvederm Volbella XC: 12-18 months
• Restylane Kysse: 6-12 months
• Restylane Silk: 6-9 months
• Versa: 8-12 months

**Factors affecting longevity:**
• Individual metabolism: Faster metabolizers see shorter duration
• Amount injected: More volume = longer lasting
• Lifestyle factors: Exercise, sun exposure, smoking reduce duration
• Age: Younger patients may break down filler faster

**Timeline expectations:**
• 2 weeks: Final results visible after swelling subsides
• 1-3 months: Peak results
• 6-9 months: Gradual volume loss begins
• 9-18 months: Touch-up typically needed`,
      tags: ['duration', 'longevity', 'results', 'timeline']
    },
    {
      id: 3,
      question: "Can you get lip filler while pregnant?",
      category: 'safety',
      priority: 'essential',
      searchVolume: 4400,
      answer: `❌ **Lip fillers are NOT RECOMMENDED during pregnancy or breastfeeding**

**Safety concerns:**
• No safety studies on pregnant/breastfeeding women
• Unknown effects on developing baby
• Increased risk of complications due to pregnancy changes
• Hormonal changes can affect healing and results

**Recommendations:**
• Wait until after breastfeeding is complete
• Existing filler is generally safe during pregnancy
• Consult your OB/GYN if you have concerns about existing filler
• Plan treatments around family planning timeline`,
      tags: ['pregnancy', 'breastfeeding', 'safety', 'contraindications']
    },
    {
      id: 4,
      question: "Can I put lip balm on after lip fillers?",
      category: 'aftercare',
      priority: 'important',
      searchVolume: 1900,
      answer: `✅ **Yes, but wait 4-6 hours and use gentle products**

**Timeline for lip balm use:**
• First 4-6 hours: Avoid all products on injection sites
• First 24 hours: Use only gentle, fragrance-free balm
• First week: Avoid products with active ingredients
• After 1 week: Normal lip care routine can resume

**Recommended ingredients:**
• Plain petroleum jelly (Vaseline)
• Gentle beeswax-based balms
• Fragrance-free, hypoallergenic options
• Products with ceramides or hyaluronic acid

**Ingredients to avoid first week:**
• Menthol or camphor
• Strong fragrances or flavors
• Retinol or other active ingredients
• Exfoliating ingredients`,
      tags: ['aftercare', 'lip balm', 'products', 'healing']
    },
    {
      id: 5,
      question: "How much do lip fillers cost?",
      category: 'cost',
      priority: 'essential',
      searchVolume: 8100,
      answer: `**Average costs by location:**
• Denver: $650-950 per syringe
• Colorado Springs: $550-850 per syringe
• Boulder: $700-1,100 per syringe
• Fort Collins: $600-900 per syringe

**Factors affecting cost:**
• Provider experience and credentials
• Geographic location
• Type of filler used
• Amount needed (0.5ml to 2ml typical)
• Clinic overhead and amenities

**Additional costs to consider:**
• Consultation fees: $50-150
• Touch-up appointments: $300-500
• Annual maintenance: $1,200-2,000
• Potential reversal: $400-800`,
      tags: ['cost', 'price', 'budget', 'planning']
    },
    {
      id: 6,
      question: "Can you get lip filler at 18?",
      category: 'safety',
      priority: 'important',
      searchVolume: 370,
      answer: `✅ **Yes, you can legally get lip filler at 18**

**Legal requirements:**
• Must be 18+ for cosmetic procedures without parental consent
• Some providers prefer patients 21+ for maturity reasons
• Valid ID required for age verification

**Important considerations for young adults:**
• Facial features still developing until mid-20s
• Start conservatively with small amounts (0.5ml or less)
• Consider long-term aesthetic goals
• Financial responsibility for touch-ups every 6-12 months`,
      tags: ['age', 'legal', 'young adults', 'considerations']
    },
    {
      id: 7,
      question: "What are the swelling stages after lip filler?",
      category: 'aftercare',
      priority: 'important',
      searchVolume: 3000,
      answer: `**Day-by-day swelling timeline:**

**Day 1-2: Peak swelling** 🔴
• Maximum swelling occurs
• Lips may look significantly larger than intended
• Some asymmetry is normal

**Day 3-5: Gradual reduction** 🟡
• Swelling begins to decrease
• Lips start to look more natural
• Still larger than final result

**Day 6-10: Significant improvement** 🔵
• Most swelling has resolved
• Shape becomes more defined
• Closer to final result

**Day 11-14: Near final result** 🟢
• Minimal residual swelling
• Final shape becoming apparent
• True result now visible

**Week 3-4: Final result** ✅
• All swelling completely resolved
• Final volume and shape achieved
• Any touch-ups can be evaluated`,
      tags: ['swelling', 'recovery', 'timeline', 'healing']
    },
    {
      id: 8,
      question: "How long to avoid straws after lip filler?",
      category: 'aftercare',
      priority: 'helpful',
      searchVolume: 1500,
      answer: `⏱️ **Avoid straws for 24-48 hours after lip filler treatment**

**Why avoid straws:**
• Pursing motion can shift filler
• Suction pressure may affect results
• Movement can increase swelling
• Risk of asymmetry if filler hasn't settled

**Safe drinking alternatives:**
• Drink directly from wide-mouth cups
• Use a spoon for liquids when possible
• Tilt head back slightly when drinking
• Keep lips relaxed during drinking`,
      tags: ['straws', 'drinking', 'aftercare', 'restrictions']
    },
    {
      id: 9,
      question: "Do lip fillers always look fake?",
      category: 'results',
      priority: 'essential',
      searchVolume: 3200,
      answer: `❌ **No, when done correctly by a skilled professional, lip fillers can provide natural-looking results**

**Why some fillers look fake:**
• Overfilling beyond natural proportions
• Poor technique or inexperienced injector
• Wrong filler type for desired outcome
• Not respecting natural lip anatomy

**Natural-looking results require:**
• Skilled, experienced practitioner
• Conservative approach with gradual building
• Proper filler selection for your lip type
• Enhancement of natural shape rather than dramatic change

**The truth about "natural" lips:**
• Many celebrities with ideal lips have subtle, undetectable fillers
• Goal is enhancement, not transformation
• Best results look like your lips, just better`,
      tags: ['natural', 'fake', 'results', 'myths', 'appearance']
    },
    {
      id: 10,
      question: "Are lip fillers permanent?",
      category: 'results',
      priority: 'essential',
      searchVolume: 2800,
      answer: `❌ **No, lip fillers are not permanent**

**Hyaluronic acid fillers are temporary:**
• Gradually absorbed by the body over time
• Results typically last 6-12 months
• Complete reversal to original appearance
• No permanent changes to lip structure

**Factors affecting duration:**
• Type of filler used
• Individual metabolism rate
• Lifestyle factors (exercise, sun exposure)
• Amount of filler injected
• Age and skin condition

**Maintenance requirements:**
• Regular touch-ups needed to maintain results
• Most clients return every 6-9 months
• Can choose to discontinue at any time
• Lips return to natural state when filler dissolves`,
      tags: ['permanent', 'temporary', 'duration', 'myths', 'maintenance']
    },
    {
      id: 11,
      question: "Are lip fillers only for young people?",
      category: 'safety',
      priority: 'important',
      searchVolume: 1200,
      answer: `❌ **No, lip fillers can benefit individuals of all ages**

**Benefits for different age groups:**

**Younger clients (18-30):**
• Enhanced volume and shape
• Better lip definition
• Correcting natural asymmetry
• Creating desired aesthetic

**Older clients (40+):**
• Addressing age-related volume loss
• Smoothing fine lines around mouth
• Restoring youthful lip appearance
• Combating natural thinning with age

**Age-related considerations:**
• Older skin may require different techniques
• Expectations may vary by age group
• Healing time can differ with age
• Results may last differently across age ranges`,
      tags: ['age', 'young', 'old', 'myths', 'benefits']
    },
    {
      id: 12,
      question: "Are lip fillers dangerous?",
      category: 'safety',
      priority: 'essential',
      searchVolume: 4500,
      answer: `✅ **Lip fillers are safe when administered by qualified, experienced practitioners**

**Safety of hyaluronic acid fillers:**
• FDA-approved and biocompatible
• Reversible with hyaluronidase if needed
• Extensively studied and tested
• Used safely for decades in medicine

**Rare but possible complications:**
• Infection (with proper sterile technique)
• Asymmetry (correctable with technique)
• Vascular complications (extremely rare with proper training)
• Allergic reactions (very uncommon with HA fillers)

**Risk minimization:**
• Choose certified, experienced practitioners
• Verify medical credentials and training
• Ensure sterile, medical-grade facility
• Follow all aftercare instructions
• Report any concerning symptoms immediately`,
      tags: ['safety', 'dangerous', 'risks', 'complications', 'myths']
    },
    {
      id: 13,
      question: "Are all lip fillers the same?",
      category: 'procedure',
      priority: 'important',
      searchVolume: 1800,
      answer: `❌ **No, there are various types of lip fillers designed for specific purposes**

**Popular hyaluronic acid fillers:**

**Juvederm family:**
• Ultra XC: Medium consistency, natural volume
• Volbella XC: Smooth, subtle enhancement
• Vollure XC: Longer-lasting, natural feel

**Restylane family:**
• Kysse: Flexible, natural movement
• Silk: Smooth, precise lip definition
• Defyne: Structured support with flexibility

**Key differences:**
• Particle size and cross-linking technology
• Viscosity and gel consistency
• Duration of results (6-18 months)
• Best suited areas and techniques
• Price points and availability

**Choosing the right filler:**
• Based on desired results and lip anatomy
• Practitioner expertise with specific products
• Your lifestyle and maintenance preferences`,
      tags: ['types', 'brands', 'differences', 'juvederm', 'restylane', 'selection']
    },
    {
      id: 14,
      question: "Do lip fillers stretch out your lips permanently?",
      category: 'safety',
      priority: 'important',
      searchVolume: 2200,
      answer: `❌ **No, lip fillers do not stretch the lips permanently**

**What actually happens:**
• Lips return to natural shape as filler dissolves
• No permanent structural changes occur
• Skin elasticity is not permanently affected
• Original lip size restored when filler metabolizes

**Potential positive effects:**
• May stimulate natural collagen production
• Can lead to subtle improvements in lip texture
• Possible minor enhancement even after filler dissolves
• Better hydration and plumpness from increased blood flow

**Addressing the myth:**
• Confusion often comes from seeing overfilled examples
• Proper technique respects natural lip anatomy
• Conservative approach prevents overstretching
• Multiple sessions build results gradually and safely`,
      tags: ['stretching', 'permanent', 'myths', 'collagen', 'effects']
    },
    {
      id: 15,
      question: "Can you remove lip fillers once they're in?",
      category: 'safety',
      priority: 'essential',
      searchVolume: 3600,
      answer: `✅ **Yes, hyaluronic acid fillers can be dissolved with hyaluronidase**

**Filler removal process:**
• Hyaluronidase enzyme breaks down hyaluronic acid
• Usually takes 24-48 hours to see full dissolution
• Can be done partially or completely
• Allows for corrections or complete removal

**When removal might be needed:**
• Unsatisfactory results or overcorrection
• Asymmetry or uneven distribution
• Complications or adverse reactions
• Change in aesthetic preferences
• Preparation for different treatment

**Important considerations:**
• Only hyaluronic acid fillers can be dissolved
• Other filler types (like Sculptra) cannot be reversed
• Removal should be done by experienced practitioner
• Some swelling normal after dissolution
• Can typically get new filler after healing**

**This reversibility makes HA fillers a safer choice for first-time patients**`,
      tags: ['removal', 'hyaluronidase', 'reversible', 'dissolution', 'correction']
    },
    {
      id: 16,
      question: "Do only people with thin lips get lip fillers?",
      category: 'procedure',
      priority: 'helpful',
      searchVolume: 900,
      answer: `❌ **No, people with all types of lips get fillers for various reasons**

**Reasons people get lip fillers:**

**Thin lips:**
• Adding volume and fullness
• Creating more defined shape
• Balancing facial proportions

**Full lips:**
• Enhancing definition and shape
• Correcting asymmetry
• Refining the cupid's bow
• Adding subtle volume in specific areas

**Aging lips:**
• Restoring lost volume
• Smoothing vertical lip lines
• Recreating youthful definition
• Improving lip border clarity

**Common goals across all lip types:**
• Better symmetry and balance
• Enhanced natural shape
• Smoother texture and appearance
• Increased confidence in appearance
• Correction of natural irregularities`,
      tags: ['thin lips', 'full lips', 'reasons', 'enhancement', 'goals']
    },
    {
      id: 17,
      question: "What is Juvederm and how does it work for lips?",
      category: 'procedure',
      priority: 'essential',
      searchVolume: 8900,
      answer: `**Juvederm is the most popular lip filler brand in the world** 🏆

**What is Juvederm:**
• Made from hyaluronic acid (a natural substance in your body)
• Feels smooth like honey when injected
• FDA approved and very safe
• Made by a company called Allergan

**How it works:**
• Doctor injects it into your lips with a tiny needle
• It adds volume and shape to your lips
• Your body slowly absorbs it over time
• No surgery needed - just a quick appointment

**Different types of Juvederm for lips:**
• **Juvederm Ultra:** Good for most people, lasts 9-12 months
• **Juvederm Volbella:** Very smooth and natural, lasts 12-18 months  
• **Juvederm Ultra Plus:** For people who want more volume, lasts 9-12 months

**Why people choose Juvederm:**
• Most doctors are trained to use it
• Lots of research shows it's safe
• Results look very natural
• Can be removed if you don't like it

**What to expect:**
• Takes about 15-30 minutes
• Some swelling for 2-3 days
• Final results visible in 2 weeks
• Most people are very happy with results`,
      tags: ['juvederm', 'hyaluronic acid', 'ultra', 'volbella', 'allergan', 'popular']
    },
    {
      id: 18,
      question: "What is Restylane and how long does it last?",
      category: 'procedure',
      priority: 'essential',
      searchVolume: 6700,
      answer: `**Restylane is another very popular lip filler brand** 💎

**What is Restylane:**
• Also made from hyaluronic acid (safe and natural)
• Feels bouncy and flexible in your lips
• FDA approved for many years
• Made by a company called Galderma

**How long it lasts:**
• **Restylane Kysse:** 6-12 months (made just for lips)
• **Restylane Silk:** 6-9 months (very smooth texture)
• **Regular Restylane:** 6-9 months

**What makes Restylane special:**
• Moves naturally when you talk and smile
• Feels very soft and flexible
• Good for people with active lifestyles
• Less likely to feel stiff or hard

**Best for:**
• People who want natural movement
• Active people who exercise a lot
• First-time filler patients
• People who want subtle changes

**What to expect:**
• Quick 20-30 minute appointment
• Some bruising possible (normal)
• Swelling goes down in 3-5 days
• Touch-ups available if needed

**Why doctors like Restylane:**
• Very predictable results
• Easy to inject smoothly
• Patients are usually very satisfied
• Good safety record`,
      tags: ['restylane', 'kysse', 'silk', 'galderma', 'flexible', 'movement']
    },
    {
      id: 19,
      question: "What are RHA fillers and why are they different?",
      category: 'procedure',
      priority: 'important',
      searchVolume: 2800,
      answer: `**RHA fillers are the newest type of lip filler** 🆕

**What does RHA mean:**
• Stands for "Resilient Hyaluronic Acid"
• Made to stretch and move like real skin
• Newest technology in lip fillers
• FDA approved in recent years

**How they're different:**
• Stretch more than other fillers
• Move naturally with your facial expressions
• Feel more like your natural lip tissue
• Made with special cross-linking technology

**Types of RHA for lips:**
• **RHA 2:** For subtle lip enhancement
• **RHA 3:** For more volume
• **RHA Redensity:** For lip lines and texture

**How long they last:**
• Usually 12-15 months
• Some people see results for up to 18 months
• Longer lasting than many other fillers

**Best for:**
• People with very expressive faces
• People who talk a lot (teachers, speakers)
• People who want the most natural feel
• People who exercise frequently

**What to expect:**
• Similar injection process to other fillers
• May cost slightly more than older fillers
• Results look very natural
• Less stiffness than older filler types

**Why they're popular:**
• Latest technology
• Most natural feeling
• Great for active lifestyles`,
      tags: ['RHA', 'resilient', 'newest', 'technology', 'natural', 'expressive']
    },
    {
      id: 20,
      question: "What is Revanesse Versa and is it good for lips?",
      category: 'procedure',
      priority: 'helpful',
      searchVolume: 1900,
      answer: `**Revanesse Versa is a newer lip filler that's growing in popularity** 💧

**What is Revanesse Versa:**
• Made from very pure hyaluronic acid
• Manufactured in Canada with strict quality control
• FDA approved and safe
• Known for being very clean and smooth

**What makes it special:**
• Very pure - fewer impurities than some other brands
• Smooth texture that spreads evenly
• Good for people with sensitive skin
• Less swelling than some other fillers

**How long it lasts:**
• Usually 8-12 months for lips
• Some people see results up to 14 months
• Depends on your body and lifestyle

**Best for:**
• People with sensitive skin
• People who want less swelling
• First-time filler patients
• People who want smooth, even results

**What to expect:**
• Quick and comfortable treatment
• Usually less bruising and swelling
• Natural-looking results
• Good value for the money

**Why some doctors like it:**
• Smooth and easy to inject
• Consistent results
• Patients report less discomfort
• Good safety profile

**Things to know:**
• Newer brand, so fewer doctors may offer it
• Ask your doctor if they use this brand
• Results are similar to other HA fillers`,
      tags: ['revanesse', 'versa', 'pure', 'canada', 'sensitive skin', 'smooth']
    },
    {
      id: 21,
      question: "What is Belotero Balance and when is it used?",
      category: 'procedure',
      priority: 'helpful',
      searchVolume: 1200,
      answer: `**Belotero Balance is a gentle lip filler that's great for beginners** 🎯

**What is Belotero Balance:**
• Made from hyaluronic acid like other fillers
• Very soft and integrates well with your natural tissue
• FDA approved and safe
• Made by a company called Merz

**What makes it special:**
• Blends really well with your natural lip tissue
• Very soft and smooth feeling
• Good for small changes and touch-ups
• Less likely to create lumps or bumps

**How long it lasts:**
• Usually 6-9 months
• Shorter than some other fillers
• Good for people who want to try fillers first

**Best for:**
• First-time filler patients
• People who want very subtle changes
• Touch-ups and small corrections
• People who want to "test drive" lip fillers
• Smoothing small lip lines

**What to expect:**
• Very gentle injection process
• Minimal swelling and bruising
• Natural-looking subtle results
• Can build up over multiple appointments

**Why doctors choose it:**
• Very forgiving and easy to work with
• Great for detailed work
• Low risk of complications
• Patients like the gentle results

**Available with lidocaine:**
• Some versions have numbing medicine mixed in
• Makes the injection more comfortable
• Ask your doctor about this option`,
      tags: ['belotero', 'balance', 'gentle', 'beginner', 'subtle', 'merz', 'lidocaine']
    },
    {
      id: 22,
      question: "What different lip shapes can I get with fillers?",
      category: 'results',
      priority: 'important',
      searchVolume: 4100,
      answer: `**There are many different lip shapes you can create with fillers!** 💋

**Popular lip shape categories:**

**Natural Enhancement:**
• Classic lips - keeps your natural shape, just fuller
• Subtle volume - adds gentle fullness all around
• Perfect for first-time filler patients

**Defined Shapes:**
• Cupid's bow - makes the top lip peaks more pointed
• Heart-shaped lips - creates a cute heart look
• Border definition - makes lip edges sharper

**Volume-Focused:**
• Plump lips - adds lots of fullness top and bottom
• Russian lips - creates a lifted, heart-shaped look
• Doll lips - round, full, and pouty

**Corrective Shapes:**
• Asymmetry correction - makes uneven lips match
• Lip flip effect - makes upper lip look bigger
• Smoker's lines - smooths wrinkles around lips

**How your doctor chooses the right shape:**
• Looks at your natural lip shape
• Listens to what you want
• Considers your face shape
• Thinks about what will look best on you

**Important to know:**
• Not every shape works for every person
• Your natural lips affect what's possible
• Good doctors will suggest what looks most natural
• You can always start small and add more later

**Want to see all the options?** 
Check out our complete [Lip Filler Shapes Guide](/lip-filler-shapes) with detailed descriptions and examples of all 14 popular lip shapes!`,
      tags: ['shapes', 'styles', 'natural', 'dramatic', 'cupid bow', 'russian lips', 'classic', 'guide']
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesPriority = selectedPriority === 'all' || faq.priority === selectedPriority;
    
    return matchesSearch && matchesCategory && matchesPriority;
  });

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'essential': return '#dc3545';
      case 'important': return '#ffc107';
      case 'helpful': return '#28a745';
      default: return '#6c757d';
    }
  };

  const getPriorityLabel = (priority) => {
    switch(priority) {
      case 'essential': return 'Must-Know';
      case 'important': return 'Important';
      case 'helpful': return 'Good to Know';
      default: return '';
    }
  };

  const formatAnswer = (answer) => {
    return answer.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h4 key={index} style={{ color: '#495057', margin: '15px 0 8px 0' }}>{line.slice(2, -2)}</h4>;
      }
      if (line.startsWith('• ')) {
        return <li key={index} style={{ marginBottom: '4px' }}>{line.slice(2)}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} style={{ marginBottom: '8px' }}>{line}</p>;
    });
  };

  return (
    <Layout title="Lip Filler FAQ - Colorado Lip Fillers Directory">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#333' }}>
            Lip Filler Educational Guide
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Educational information about common lip filler questions. This content is for informational purposes only and does not constitute medical advice.
          </p>
        </div>

        {/* Important Disclaimer */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h3 style={{ color: '#856404', margin: '0 0 10px 0' }}>Important Educational Disclaimer</h3>
          <p style={{ color: '#856404', margin: 0, lineHeight: '1.5' }}>
            <strong>This information is for educational purposes only.</strong> It does not constitute medical advice, treatment recommendations, or guarantees about outcomes. Always consult with qualified healthcare providers for personalized medical guidance and treatment decisions.
          </p>
        </div>

        {/* Emergency Warning */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '15px'
        }}>
          <AlertTriangleIcon color="#856404" size={24} />
          <div>
            <h3 style={{ color: '#856404', margin: '0 0 10px 0' }}>Emergency Warning Signs</h3>
            <p style={{ margin: '0 0 10px 0', color: '#856404' }}>
              <strong>Seek immediate medical attention if you experience:</strong>
            </p>
            <ul style={{ color: '#856404', margin: 0, paddingLeft: '20px' }}>
              <li>Severe pain or sudden color changes (blue, white, purple)</li>
              <li>Signs of infection (fever, pus, red streaking)</li>
              <li>Vision changes or severe headaches</li>
              <li>Persistent numbness or tingling</li>
            </ul>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '25px',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '1px solid #e9ecef'
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <div style={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#6c757d'
            }}>
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search questions, answers, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 45px',
                border: '2px solid #dee2e6',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: showFilters ? '#007bff' : 'white',
              color: showFilters ? 'white' : '#007bff',
              border: '2px solid #007bff',
              borderRadius: '6px',
              cursor: 'pointer',
              marginBottom: showFilters ? '20px' : '0',
              transition: 'all 0.2s'
            }}
          >
            <FilterIcon size={16} />
            Filters
            {showFilters ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
          </button>

          {/* Filters */}
          {showFilters && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {/* Category Filter */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#495057' }}>
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '6px',
                    backgroundColor: 'white'
                  }}
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Priority Filter */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#495057' }}>
                  Priority Level
                </label>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '6px',
                    backgroundColor: 'white'
                  }}
                >
                  {priorities.map(priority => (
                    <option key={priority.id} value={priority.id}>
                      {priority.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Active Filters Display */}
          {(selectedCategory !== 'all' || selectedPriority !== 'all' || searchTerm) && (
            <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {searchTerm && (
                <span style={{
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}>
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span style={{
                  backgroundColor: '#f3e5f5',
                  color: '#7b1fa2',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}>
                  {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
              {selectedPriority !== 'all' && (
                <span style={{
                  backgroundColor: '#e8f5e8',
                  color: '#2e7d32',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}>
                  {priorities.find(p => p.id === selectedPriority)?.name}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '20px', color: '#6c757d' }}>
          Showing {filteredFAQs.length} of {faqData.length} questions
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredFAQs.map(faq => (
            <div
              key={faq.id}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e9ecef',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.2s'
              }}
            >
              {/* Question Header */}
              <div
                onClick={() => toggleExpanded(faq.id)}
                style={{
                  padding: '20px',
                  cursor: 'pointer',
                  borderBottom: expandedItems.has(faq.id) ? '1px solid #e9ecef' : 'none',
                  backgroundColor: expandedItems.has(faq.id) ? '#f8f9fa' : 'white',
                  transition: 'background-color 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{
                        backgroundColor: getPriorityColor(faq.priority),
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        {getPriorityLabel(faq.priority)}
                      </span>
                      <span style={{
                        backgroundColor: categories.find(c => c.id === faq.category)?.color + '20',
                        color: categories.find(c => c.id === faq.category)?.color,
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '12px'
                      }}>
                        {categories.find(c => c.id === faq.category)?.icon} {categories.find(c => c.id === faq.category)?.name}
                      </span>
                      {faq.searchVolume && (
                        <span style={{ fontSize: '12px', color: '#6c757d' }}>
                          {faq.searchVolume.toLocaleString()} searches/month
                        </span>
                      )}
                    </div>
                    <h3 style={{
                      margin: 0,
                      fontSize: '1.25rem',
                      color: '#333',
                      lineHeight: '1.4'
                    }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div style={{ color: '#6c757d', transition: 'transform 0.2s', transform: expandedItems.has(faq.id) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDownIcon size={24} />
                  </div>
                </div>
              </div>

              {/* Answer Content */}
              {expandedItems.has(faq.id) && (
                <div style={{ padding: '20px', lineHeight: '1.6', color: '#495057' }}>
                  {formatAnswer(faq.answer)}
                  
                  {/* Tags */}
                  {faq.tags && (
                    <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #e9ecef' }}>
                      <div style={{ fontSize: '14px', color: '#6c757d', marginBottom: '8px' }}>Related topics:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {faq.tags.map(tag => (
                          <span
                            key={tag}
                            style={{
                              backgroundColor: '#e9ecef',
                              color: '#495057',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '12px'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#6c757d'
          }}>
            <div style={{ marginBottom: '20px', opacity: 0.5 }}>
              <SearchIcon />
            </div>
            <h3>No questions found</h3>
            <p>Try adjusting your search terms or filters to find what you're looking for.</p>
          </div>
        )}

        {/* CTA Section */}
        <div style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          margin: '40px 0'
        }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.8rem' }}>Ready to Find a Qualified Provider?</h3>
          <p style={{ fontSize: '1.1rem', margin: '0 0 25px 0', opacity: 0.9 }}>
            Browse our directory of licensed medical professionals offering lip filler treatments throughout Colorado.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/providers"
              style={{
                backgroundColor: 'white',
                color: '#007bff',
                padding: '12px 30px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'transform 0.2s'
              }}
            >
              Find Providers Near Me
            </a>
            <a
              href="/pricing"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '12px 30px',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '2px solid white',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'transform 0.2s'
              }}
            >
              View Pricing Guide
            </a>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          fontSize: '14px',
          color: '#6c757d',
          fontStyle: 'italic',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0 }}>
            <strong>Medical Disclaimer:</strong> This information is for educational purposes only and 
            does not constitute medical advice. Always consult with a qualified healthcare provider 
            for personalized treatment recommendations and medical guidance.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ImprovedFAQPage;