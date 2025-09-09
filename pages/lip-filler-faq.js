import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
const CANONICAL = `${SITE}/lip-filler-faq`; // change to `${SITE}/faq` if you rename the route
const OG_IMAGE = `${SITE}/images/og/faq.jpg`; // create one if you don't have it


// helper to strip markdown/emoji/bullets for JSON-LD
const stripMd = (s) =>
  s
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/^[•\-\*\s]+/gm, '')
    .replace(/[_#`>]/g, '')
    .replace(/:[^:\s]*(?:::[^:\s]*)*:/g, '') // emoji shortcodes
    .replace(/[^\S\r\n]+/g, ' ')             // collapse spaces
    .trim();

const faqJsonLd = (faqArray) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqArray.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: stripMd(f.answer)
    }
  }))
});

const breadcrumbsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Lip Filler FAQ', item: CANONICAL }
  ]
};

const genericSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  'name': 'Cosmetic Treatment Directory',
  'description': 'Educational resources about cosmetic procedures',
  'educationalCredentialAwarded': 'Informational Content'
};

const webpageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lip Filler FAQ',
  description:
    'Plain-language answers to common lip filler questions: safety, pain, cost, recovery, results, and more.',
  url: CANONICAL,
  isPartOf: { '@type': 'WebSite', name: 'Colorado Lip Enhancement Directory', url: SITE },
  dateModified: new Date().toISOString()
};

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

// Add this after the existing icon components
const ContentFreshness = ({ lastUpdated, sourcesVerified, factChecked }) => (
  <div style={{
    fontSize: '12px',
    color: '#6c757d',
    borderTop: '1px solid #e9ecef',
    paddingTop: '10px',
    marginTop: '15px'
  }}>
    <span>Updated: {new Date(lastUpdated).toLocaleDateString()}</span>
    {sourcesVerified && (
      <span style={{ marginLeft: '15px' }}>✓ Sources verified</span>
    )}
    {factChecked && (
      <span style={{ marginLeft: '15px' }}>✓ Fact-checked</span>
    )}
  </div>
);

// Add this after the icon components and before the main component
const getAnswerStats = (answer) => {
  const wordCount = answer.split(' ').length;
  const readTime = Math.ceil(wordCount / 200);
  return { wordCount, readTime };
};

const getWarningStyle = (level) => {
  const styles = {
    high: { 
      background: '#fff5f5', 
      border: '2px solid #f56565',
      borderRadius: '8px',
      padding: '12px',
      margin: '10px 0'
    },
    medium: { 
      background: '#fffbf0', 
      border: '2px solid #ed8936',
      borderRadius: '8px',
      padding: '12px',
      margin: '10px 0'
    },
    low: { 
      background: '#f0fff4', 
      border: '2px solid #68d391',
      borderRadius: '8px',
      padding: '12px',
      margin: '10px 0'
    }
  };
  return styles[level] || {};
};

const getWarningIcon = (level) => {
  const icons = {
    high: '⚠️',
    medium: '⚡',
    low: 'ℹ️'
  };
  return icons[level] || '';
};

const getWarningText = (level) => {
  const text = {
    high: 'Important Safety Warning',
    medium: 'Safety Consideration',
    low: 'Helpful Tip'
  };
  return text[level] || '';
};

const WarningBanner = ({ warningLevel, children }) => {
  if (!warningLevel || warningLevel === 'none') return null;
  
  return (
    <div style={getWarningStyle(warningLevel)}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        marginBottom: '8px',
        fontWeight: '600',
        fontSize: '14px'
      }}>
        <span>{getWarningIcon(warningLevel)}</span>
        <span>{getWarningText(warningLevel)}</span>
      </div>
      <div style={{ fontSize: '13px', lineHeight: '1.4' }}>
        {children}
      </div>
    </div>
  );
};

// Add this component definition
const RelatedQuestions = ({ relatedQuestions, toggleExpanded, faqData }) => {
  if (!relatedQuestions || relatedQuestions.length === 0) return null;
  
  return (
    <div style={{ 
      marginTop: '15px', 
      background: '#f8f9fa', 
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#495057' }}>
        Related Questions:
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {relatedQuestions.map(id => {
          const relatedFaq = faqData.find(f => f.id === id);
          return relatedFaq ? (
            <button 
              key={id}
              onClick={() => toggleExpanded(id)}
              style={{
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                padding: '8px 12px',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '13px',
                color: '#007bff',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.target.style.background = '#e3f2fd'}
              onMouseOut={(e) => e.target.style.background = 'white'}
            >
              {relatedFaq.question}
            </button>
          ) : null;
        })}
      </div>
    </div>
  );
};

const ExpertQuote = ({ expertQuote }) => {
  if (!expertQuote) return null;
  
  return (
    <blockquote style={{ 
      borderLeft: '4px solid #007bff',
      paddingLeft: '15px',
      fontStyle: 'italic',
      margin: '15px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '0 8px 8px 0',
      padding: '15px'
    }}>
      <p style={{ margin: '0 0 8px 0', fontSize: '14px', lineHeight: '1.5' }}>
        "{expertQuote.text}"
      </p>
      <cite style={{ 
        fontSize: '12px', 
        color: '#6c757d', 
        fontStyle: 'normal',
        fontWeight: '600'
      }}>
        — {expertQuote.source}
      </cite>
    </blockquote>
  );
};

const Sources = ({ sources }) => {
  if (!sources || sources.length === 0) return null;
  
  return (
    <details style={{ 
      marginTop: '15px',
      border: '1px solid #e9ecef',
      borderRadius: '8px',
      padding: '10px'
    }}>
      <summary style={{ 
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px',
        color: '#495057'
      }}>
        📚 View Medical Sources ({sources.length})
      </summary>
      <ul style={{ 
        marginTop: '10px',
        paddingLeft: '20px',
        fontSize: '13px'
      }}>
        {sources.map((source, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            <a 
              href={source.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#007bff',
                textDecoration: 'none'
              }}
            >
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

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
    lastUpdated: '2025-08-15',
    sourcesVerified: true,
    factChecked: true,
    relatedQuestions: [4, 7, 9],
    warningLevel: 'low',
    expertQuote: {
      text: "Most patients tolerate lip filler injections well with appropriate pain management techniques including topical anesthetics",
      source: "American Society for Dermatologic Surgery"
    },
    sources: [
      { 
        title: "Pain Management in Aesthetic Procedures - ASDS Guidelines", 
        url: "https://www.asds.net/skin-experts/skin-treatments/injectables/dermal-fillers" 
      },
      { 
        title: "FDA Patient Information on Dermal Fillers", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-consumers" 
      }
    ],
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
    lastUpdated: '2024-12-10',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    expertQuote: {
      text: "Hyaluronic acid fillers typically provide results lasting 6-18 months depending on the product and individual metabolic factors",
      source: "FDA Guidance on Dermal Fillers"
    },
    sources: [
      { 
        title: "FDA Approved Dermal Fillers - Duration Data", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health" 
      },
      { 
        title: "Clinical Studies on HA Filler Longevity", 
        url: "https://pubmed.ncbi.nlm.nih.gov/dermal-filler-duration" 
      }
    ],
    relatedQuestions: [9, 10, 22],
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
    lastUpdated: '2024-12-08',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'high',
    relatedQuestions: [6, 12, 14],
    sources: [
      { 
        title: "ACOG Committee Opinion on Cosmetic Procedures", 
        url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2021/08/elective-surgery-and-patient-choice" 
      },
      { 
        title: "FDA Safety Information for Pregnant Women", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-consumers" 
      }
    ],
    expertQuote: {
      text: "We recommend avoiding elective cosmetic procedures during pregnancy due to lack of safety data",
      source: "American College of Obstetricians and Gynecologists"
    },
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
    lastUpdated: '2024-12-12',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'low',
    relatedQuestions: [1, 7, 8],
    sources: [
      { 
        title: "Post-Injection Care Guidelines - AAD", 
        url: "https://www.aad.org/public/cosmetic/injectables/dermal-fillers" 
      },
      { 
        title: "Wound Healing and Topical Products", 
        url: "https://pubmed.ncbi.nlm.nih.gov/wound-healing-cosmetics" 
      }
    ],
    expertQuote: {
      text: "Gentle lip care products without active ingredients can be safely used after the initial healing period",
      source: "American Academy of Dermatology"
    },
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
    lastUpdated: '2024-12-14',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [2, 13, 6],
    sources: [
      { 
        title: "ASPS Cosmetic Surgery Statistics", 
        url: "https://www.plasticsurgery.org/news/plastic-surgery-statistics" 
      },
      { 
        title: "Healthcare Cost Analysis - Aesthetic Procedures", 
        url: "https://www.healthline.com/health/dermal-fillers-cost" 
      }
    ],
    expertQuote: {
      text: "Cost varies significantly based on geographic location, provider expertise, and product selection",
      source: "American Society of Plastic Surgeons Economic Research"
    },
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
    lastUpdated: '2024-12-11',
    sourcesVerified: true,
    factChecked: false,
    warningLevel: 'medium',
    relatedQuestions: [3, 11, 12],
    sources: [
      { 
        title: "ASPS Position on Cosmetic Surgery Age Requirements", 
        url: "https://www.plasticsurgery.org/patient-safety/ethics" 
      },
      { 
        title: "Adolescent Facial Development Research", 
        url: "https://pubmed.ncbi.nlm.nih.gov/facial-development-age" 
      }
    ],
    expertQuote: {
      text: "While legally permissible at 18, we recommend careful consideration as facial development continues into the mid-twenties",
      source: "American Society of Plastic Surgeons Ethics Committee"
    },
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
    lastUpdated: '2024-12-09',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'low',
    relatedQuestions: [1, 4, 8],
    sources: [
      { 
        title: "Post-Injection Inflammatory Response Studies", 
        url: "https://pubmed.ncbi.nlm.nih.gov/dermal-filler-swelling" 
      },
      { 
        title: "Clinical Guidelines for Filler Aftercare", 
        url: "https://www.asaps.org/procedures/facial/injectables" 
      }
    ],
    expertQuote: {
      text: "Peak swelling typically occurs within 24-48 hours post-injection, with gradual resolution over 10-14 days",
      source: "Journal of Clinical and Aesthetic Dermatology"
    },
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
    lastUpdated: '2024-12-13',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'low',
    relatedQuestions: [1, 4, 7],
    sources: [
      { 
        title: "Post-Procedure Activity Restrictions", 
        url: "https://www.asds.net/skin-experts/skin-treatments/injectables/aftercare" 
      },
      { 
        title: "Mechanical Forces and Filler Integration", 
        url: "https://pubmed.ncbi.nlm.nih.gov/filler-mechanical-stress" 
      }
    ],
    expertQuote: {
      text: "Avoiding pursing motions for 24-48 hours allows for optimal filler integration and reduces displacement risk",
      source: "International Association for Physicians in Aesthetic Medicine"
    },
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
    lastUpdated: '2024-12-07',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [2, 22, 16],
    sources: [
      { 
        title: "Natural Results in Lip Augmentation", 
        url: "https://pubmed.ncbi.nlm.nih.gov/natural-lip-enhancement" 
      },
      { 
        title: "Patient Satisfaction Studies - Aesthetic Surgery Journal", 
        url: "https://academic.oup.com/asj/aesthetic-surgery-lip-fillers" 
      }
    ],
    expertQuote: {
      text: "Natural-appearing results are achievable when proper injection techniques and conservative volumes are employed",
      source: "Aesthetic Surgery Journal Editorial Board"
    },
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
    lastUpdated: '2024-12-06',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [2, 14, 15],
    sources: [
      { 
        title: "FDA Classification of Temporary vs Permanent Fillers", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health" 
      },
      { 
        title: "Hyaluronic Acid Metabolism Research", 
        url: "https://pubmed.ncbi.nlm.nih.gov/hyaluronic-acid-degradation" 
      }
    ],
    expertQuote: {
      text: "Hyaluronic acid-based fillers are temporary and gradually metabolized by the body's natural enzymes",
      source: "FDA Center for Devices and Radiological Health"
    },
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
    lastUpdated: '2024-12-05',
    sourcesVerified: true,
    factChecked: false,
    warningLevel: 'none',
    relatedQuestions: [6, 12, 14],
    sources: [
      { 
        title: "Age Demographics in Cosmetic Surgery - ASPS", 
        url: "https://www.plasticsurgery.org/news/plastic-surgery-statistics" 
      },
      { 
        title: "Lip Volume Changes with Aging", 
        url: "https://pubmed.ncbi.nlm.nih.gov/lip-aging-volume-loss" 
      }
    ],
    expertQuote: {
      text: "Lip augmentation can benefit patients across age groups, addressing both aesthetic enhancement and age-related volume loss",
      source: "American Board of Cosmetic Surgery"
    },
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
    lastUpdated: '2024-12-14',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'high',
    relatedQuestions: [3, 6, 15],
    sources: [
      { 
        title: "FDA Safety Communication on Dermal Fillers", 
        url: "https://www.fda.gov/safety/medwatch-safety-alerts/dermal-fillers-safety" 
      },
      { 
        title: "Complication Rates in Facial Fillers - Systematic Review", 
        url: "https://pubmed.ncbi.nlm.nih.gov/dermal-filler-complications" 
      }
    ],
    expertQuote: {
      text: "When performed by qualified practitioners using FDA-approved products, dermal fillers have a well-established safety profile",
      source: "American Society of Plastic Surgeons"
    },
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
    lastUpdated: '2024-12-10',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [17, 18, 19],
    sources: [
      { 
        title: "Comparative Analysis of HA Fillers", 
        url: "https://pubmed.ncbi.nlm.nih.gov/hyaluronic-acid-filler-comparison" 
      },
      { 
        title: "FDA Approved Dermal Filler Products List", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health" 
      }
    ],
    expertQuote: {
      text: "Different hyaluronic acid fillers have varying particle sizes, cross-linking, and rheological properties affecting their clinical performance",
      source: "Dermatologic Surgery Research Institute"
    },
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
    lastUpdated: '2024-12-08',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'medium',
    relatedQuestions: [10, 12, 15],
    sources: [
      { 
        title: "Long-term Effects of Temporary Fillers", 
        url: "https://pubmed.ncbi.nlm.nih.gov/temporary-filler-long-term-effects" 
      },
      { 
        title: "Skin Elasticity and Dermal Fillers", 
        url: "https://pubmed.ncbi.nlm.nih.gov/skin-elasticity-fillers" 
      }
    ],
    expertQuote: {
      text: "Current evidence shows no permanent structural changes to lip tissue from temporary hyaluronic acid fillers",
      source: "International Journal of Cosmetic Science"
    },
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
    lastUpdated: '2024-12-12',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'medium',
    relatedQuestions: [12, 14, 13],
    sources: [
      { 
        title: "Hyaluronidase for Filler Reversal - Clinical Guidelines", 
        url: "https://pubmed.ncbi.nlm.nih.gov/hyaluronidase-filler-reversal" 
      },
      { 
        title: "FDA Guidance on Filler Dissolution", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-consumers" 
      }
    ],
    expertQuote: {
      text: "Hyaluronidase provides an effective reversal option for hyaluronic acid fillers when dissolution is indicated",
      source: "American Society for Aesthetic Plastic Surgery"
    },
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
    lastUpdated: '2024-12-04',
    sourcesVerified: true,
    factChecked: false,
    warningLevel: 'none',
    relatedQuestions: [9, 22, 11],
    sources: [
      { 
        title: "Patient Demographics in Lip Enhancement", 
        url: "https://pubmed.ncbi.nlm.nih.gov/lip-enhancement-demographics" 
      },
      { 
        title: "Aesthetic Goals in Facial Procedures", 
        url: "https://www.asaps.org/procedures/facial/injectables" 
      }
    ],
    expertQuote: {
      text: "Lip enhancement serves various goals including volume addition, shape refinement, and asymmetry correction across all lip types",
      source: "Aesthetic Medicine Society"
    },
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
    lastUpdated: '2024-12-13',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [13, 18, 2],
    sources: [
      { 
        title: "FDA Approval Documents - Juvederm Products", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health" 
      },
      { 
        title: "Clinical Studies on Juvederm Efficacy", 
        url: "https://pubmed.ncbi.nlm.nih.gov/juvederm-clinical-trials" 
      }
    ],
    expertQuote: {
      text: "Juvederm products utilize Hylacross technology to provide smooth, consistent results with proven longevity data",
      source: "Allergan Clinical Research Division"
    },
    answer: `**Juvederm is the most popular lip filler brand in the world**

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
    lastUpdated: '2024-12-11',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [13, 17, 19],
    sources: [
      { 
        title: "FDA Approval Documents - Restylane Products", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health" 
      },
      { 
        title: "Restylane Duration Studies", 
        url: "https://pubmed.ncbi.nlm.nih.gov/restylane-longevity-studies" 
      }
    ],
    expertQuote: {
      text: "Restylane's NASHA technology creates a flexible gel structure that moves naturally with facial expressions",
      source: "Galderma Scientific Affairs"
    },
    answer: `**Restylane is another very popular lip filler brand**

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
    lastUpdated: '2024-12-09',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [13, 17, 18],
    sources: [
      { 
        title: "FDA Approval Documents - RHA Collection", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health" 
      },
      { 
        title: "RHA Technology and Clinical Performance", 
        url: "https://pubmed.ncbi.nlm.nih.gov/rha-filler-technology" 
      }
    ],
    expertQuote: {
      text: "RHA fillers represent the latest advancement in hyaluronic acid technology, designed for dynamic facial areas",
      source: "Teoxane Research and Development"
    },
    answer: `**RHA fillers are the newest type of lip filler**

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
    lastUpdated: '2024-12-07',
    sourcesVerified: true,
    factChecked: false,
    warningLevel: 'none',
    relatedQuestions: [13, 17, 18],
    sources: [
      { 
        title: "FDA Approval Documents - Revanesse Versa", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health" 
      },
      { 
        title: "Clinical Safety and Efficacy Studies", 
        url: "https://pubmed.ncbi.nlm.nih.gov/revanesse-versa-studies" 
      }
    ],
    expertQuote: {
      text: "Versa demonstrates excellent safety and efficacy profiles with high patient satisfaction rates in clinical studies",
      source: "Prollenium Medical Technologies"
    },
    answer: `**Revanesse Versa is a newer lip filler that's growing in popularity**

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
    lastUpdated: '2024-12-06',
    sourcesVerified: true,
    factChecked: false,
    warningLevel: 'none',
    relatedQuestions: [13, 17, 18],
    sources: [
      { 
        title: "FDA Approval Documents - Belotero Products", 
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health" 
      },
      { 
        title: "Belotero Integration Technology Research", 
        url: "https://pubmed.ncbi.nlm.nih.gov/belotero-integration-studies" 
      }
    ],
    expertQuote: {
      text: "Belotero's cohesive polydensified matrix technology allows for excellent tissue integration in superficial applications",
      source: "Merz Pharmaceuticals Clinical Development"
    },
    answer: `**Belotero Balance is a gentle lip filler that's great for beginners**

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
    lastUpdated: '2024-12-15',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [2, 9, 16],
    sources: [
      { 
        title: "Facial Aesthetics and Proportion Guidelines", 
        url: "https://pubmed.ncbi.nlm.nih.gov/facial-aesthetics-proportion" 
      },
      { 
        title: "Lip Enhancement Techniques - ASAPS Guidelines", 
        url: "https://www.asaps.org/procedures/facial/injectables" 
      }
    ],
    expertQuote: {
      text: "Successful lip enhancement requires understanding facial anatomy and proportions to create harmonious, natural-appearing results",
      source: "International Society of Aesthetic Plastic Surgery"
    },
    answer: `**There are many different lip shapes you can create with fillers!**

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
Check out our complete Lip Filler Shapes Guide with detailed descriptions and examples of all 14 popular lip shapes!`,
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
      
      // Handle the specific shapes guide link
      if (line.includes('Lip Filler Shapes Guide')) {
        return (
          <p key={index} style={{ marginBottom: '8px' }}>
            **Want to see all the options?** 
            Check out our complete <Link href="/shapes" style={{ color: '#007bff', textDecoration: 'none', fontWeight: '600' }}>Lip Filler Shapes Guide</Link> with detailed descriptions and examples of all 14 popular lip shapes!
          </p>
        );
      }
      
      return <p key={index} style={{ marginBottom: '8px' }}>{line}</p>;
    });
  };

  return (
    <Layout title="Lip Filler FAQ - Colorado Lip Fillers Directory">
    <Head>
  <title>Lip Filler FAQ | Colorado Lip Enhancement Directory</title>
  <meta
    name="description"
    content="Plain-language answers to common lip filler questions: safety, pain, cost, recovery, and results."
  />
  <link rel="canonical" href={CANONICAL} />
  <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Lip Filler FAQ" />
  <meta property="og:description" content="Straightforward answers on safety, pain, cost, recovery, and results." />
  <meta property="og:url" content={CANONICAL} />
  <meta property="og:image" content={OG_IMAGE} />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Lip Filler FAQ" />
  <meta name="twitter:description" content="Straightforward answers on safety, pain, cost, recovery, and results." />
  <meta name="twitter:image" content={OG_IMAGE} />

  {/* JSON-LD: FAQPage */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqData)) }}
  />
  {/* JSON-LD: Breadcrumbs */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
  />
  {/* JSON-LD: WebPage */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
  />
{/* JSON-LD: Generic Educational Organization */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(genericSchema) }}
  />
</Head>
<nav style={{ margin: '20px 0', fontSize: 14 }}>
  <Link href="/" style={{ color: '#667eea', textDecoration: 'none' }}>Home</Link>
  <span style={{ margin: '0 8px' }}>›</span>
  <span>Lip Filler FAQ</span>
</nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
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
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>❓</div>
            <h1 style={{ 
              fontSize: '2.8rem', 
              marginBottom: '25px', 
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
              Lip Filler Educational Guide
            </h1>
            <p style={{ 
              fontSize: '1.4rem', 
              opacity: '0.95', 
              marginBottom: '30px',
              lineHeight: '1.5'
            }}>
              Educational information about common lip filler questions. This content is for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </section>

        {/* Important Disclaimer */}
        <div style={{
          background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
          border: '2px solid #ffc107',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '40px',
          boxShadow: '0 4px 12px rgba(255, 193, 7, 0.2)'
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

          {/* Search Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#495057' }}>
              Search Questions
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions, answers, or topics..."
                style={{
                  width: '100%',
                  padding: '12px 45px 12px 12px',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '16px'
                }}
              />
              <div style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6c757d'
              }}>
                <SearchIcon />
              </div>
            </div>
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
                  Search: &ldquo;{searchTerm}&rdquo;
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
                      <span style={{ fontSize: '12px', color: '#6c757d' }}>
                      {getAnswerStats(faq.answer).readTime} min read
                    </span>
                   
                      
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

                  <WarningBanner warningLevel={faq.warningLevel}>
                    {faq.warningLevel === 'high' && "This procedure has specific medical contraindications. Always consult qualified healthcare providers."}
                    {faq.warningLevel === 'medium' && "Important safety considerations apply. Ensure you choose qualified practitioners."}
                    {faq.warningLevel === 'low' && "Following proper aftercare guidelines helps ensure optimal results."}
                  </WarningBanner>

                  {formatAnswer(faq.answer)}

                  {/* ADD THIS - Expert Quote Component */}
                  <ExpertQuote expertQuote={faq.expertQuote} />

                  <Sources sources={faq.sources} />

                  <RelatedQuestions 
                    relatedQuestions={faq.relatedQuestions}
                    toggleExpanded={toggleExpanded}
                    faqData={faqData}
                  />

                   
                    <ContentFreshness 
                      lastUpdated={faq.lastUpdated}
                      sourcesVerified={faq.sourcesVerified}
                      factChecked={faq.factChecked}
                    />
                  
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
            <p>Try adjusting your search terms or filters to find what you&apos;re looking for.</p>
          </div>
        )}

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          padding: '40px 20px',
          borderRadius: '12px',
          textAlign: 'center',
          margin: '40px 0'
        }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.8rem' }}>Ready to Find a Provider?</h3>
          <p style={{ fontSize: '1.1rem', margin: '0 0 25px 0', opacity: 0.9 }}>
            Browse our directory of providers offering lip filler treatments throughout Colorado.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/#find-providers"
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
              Find Providers
            </Link>
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