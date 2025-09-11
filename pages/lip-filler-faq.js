import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
const CANONICAL = `${SITE}/lip-filler-faq`;
const OG_IMAGE = `${SITE}/images/og/faq.jpg`;

/* ------------------------ Utilities & Schema Helpers ----------------------- */

const stripMd = (s) =>
  s
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/^[•\-\*\s]+/gm, '')
    .replace(/[_#`>]/g, '')
    .replace(/:[^:\s]*(?:::[^:\s]*)*:/g, '')
    .replace(/[^\S\r\n]+/g, ' ')
    .trim();

const faqJsonLd = (faqArray) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqArray.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: stripMd(f.answer),
    },
  })),
});

const contentUpdates = {
  lastModified: new Date().toISOString(),
  factCheckDate: new Date().toISOString(),
};

const breadcrumbsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Lip Filler FAQ', item: CANONICAL },
  ],
};

const webpageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lip Filler FAQ',
  description:
    'Plain-language answers to common lip filler questions: safety, pain, cost, recovery, results, and more.',
  url: CANONICAL,
  isPartOf: { '@type': 'WebSite', name: 'Colorado Lip Enhancement Directory', url: SITE },
  about: {
    '@type': 'MedicalProcedure',
    name: 'Lip Enhancement',
    bodyLocation: 'Lip',
  },
  audience: {
    '@type': 'Audience',
    geographicArea: {
      '@type': 'State',
      name: 'Colorado',
    },
  },
  dateModified: contentUpdates.lastModified,
  mainContentOfPage: {
    '@type': 'WebPageElement',
    lastReviewed: contentUpdates.factCheckDate,
  },
};

/** Choose a tight set of Q&As for FAQPage JSON-LD (Google prefers smaller sets). */
const pickFaqsForSchema = (all) => {
  // Prefer essential/important, then cap to ~12
  const priorityOrder = { essential: 0, important: 1, helpful: 2 };
  return [...all]
    .sort((a, b) => (priorityOrder[a.priority] ?? 9) - (priorityOrder[b.priority] ?? 9))
    .slice(0, 12);
};

/* --------------------------------- Icons ---------------------------------- */

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

/* --------------------------- Small UI Helpers ----------------------------- */

const ContentFreshness = ({ lastUpdated, sourcesVerified, factChecked }) => (
  <div
    style={{
      fontSize: '12px',
      color: '#6c757d',
      borderTop: '1px solid #e9ecef',
      paddingTop: '10px',
      marginTop: '15px',
    }}
  >
    <span>Updated: {new Date(lastUpdated).toLocaleDateString()}</span>
    {sourcesVerified && <span style={{ marginLeft: '15px' }}>✓ Sources verified</span>}
    {factChecked && <span style={{ marginLeft: '15px' }}>✓ Fact-checked</span>}
  </div>
);

const getAnswerStats = (answer) => {
  const words = (answer || '').trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(words / 200));
  return { wordCount: words, readTime };
};

const getWarningStyle = (level) => {
  const styles = {
    high: { background: '#fff5f5', border: '2px solid #f56565' },
    medium: { background: '#fffbf0', border: '2px solid #ed8936' },
    low: { background: '#f0fff4', border: '2px solid #68d391' },
  };
  return {
    ...(styles[level] || {}),
    borderRadius: '8px',
    padding: '12px',
    margin: '10px 0',
  };
};

const getWarningText = (level) =>
  ({ high: 'Important Safety Warning', medium: 'Safety Consideration', low: 'Helpful Tip' }[level] || '');

const WarningBanner = ({ warningLevel, children }) => {
  if (!warningLevel || warningLevel === 'none') return null;
  return (
    <div style={getWarningStyle(warningLevel)}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontWeight: 600, fontSize: 14 }}>
        <span>{warningLevel === 'high' ? '⚠️' : warningLevel === 'medium' ? '⚡' : 'ℹ️'}</span>
        <span>{getWarningText(warningLevel)}</span>
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.4 }}>{children}</div>
    </div>
  );
};

const ExpertQuote = ({ expertQuote }) => {
  if (!expertQuote) return null;
  return (
    <blockquote
      style={{
        borderLeft: '4px solid #007bff',
        paddingLeft: 15,
        fontStyle: 'italic',
        margin: '15px 0',
        backgroundColor: '#f8f9fa',
        borderRadius: '0 8px 8px 0',
        padding: 15,
      }}
    >
      <p style={{ margin: '0 0 8px 0', fontSize: 14, lineHeight: 1.5 }}>&ldquo;{expertQuote.text}&rdquo;</p>
      <cite style={{ fontSize: 12, color: '#6c757d', fontStyle: 'normal', fontWeight: 600 }}>— {expertQuote.source}</cite>
    </blockquote>
  );
};

const Sources = ({ sources }) => {
  if (!sources || sources.length === 0) return null;
  return (
    <details style={{ marginTop: 15, border: '1px solid #e9ecef', borderRadius: 8, padding: 10 }}>
      <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 14, color: '#495057' }}>
        📚 View Medical Sources ({sources.length})
      </summary>
      <ul style={{ marginTop: 10, paddingLeft: 20, fontSize: 13 }}>
        {sources.map((s, i) => (
          <li key={i} style={{ marginBottom: 5 }}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

const RelatedQuestions = ({ relatedQuestions, faqData }) => {
  if (!relatedQuestions || relatedQuestions.length === 0) return null;
  return (
    <div style={{ marginTop: 15, background: '#f8f9fa', padding: 15, borderRadius: 8, border: '1px solid #e9ecef' }}>
      <h4 style={{ margin: '0 0 10px 0', fontSize: 14, color: '#495057' }}>Related Questions:</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {relatedQuestions.map((id) => {
          const rq = faqData.find((f) => f.id === id);
          return rq ? (
            <a
              key={id}
              href={`#faq-${id}`}
              style={{
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: 4,
                padding: '8px 12px',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: 13,
                color: '#007bff',
                textDecoration: 'none',
              }}
            >
              {rq.question}
            </a>
          ) : null;
        })}
      </div>
    </div>
  );
};

/* ------------------------------ Data Model -------------------------------- */

// Categories & priorities
const categories = [
  { id: 'all', name: 'All Categories', icon: '📋', color: '#6c757d' },
  { id: 'pain-comfort', name: 'Pain & Comfort', icon: '💉', color: '#dc3545' },
  { id: 'safety', name: 'Safety & Health', icon: '🛡️', color: '#28a745' },
  { id: 'results', name: 'Results & Duration', icon: '⏰', color: '#007bff' },
  { id: 'aftercare', name: 'Aftercare & Recovery', icon: '🩹', color: '#ffc107' },
  { id: 'cost', name: 'Cost & Planning', icon: '💰', color: '#17a2b8' },
  { id: 'procedure', name: 'Procedure Details', icon: '🔬', color: '#6f42c1' },
];

const priorities = [
  { id: 'all', name: 'All Questions' },
  { id: 'essential', name: 'Must-Know', color: '#dc3545' },
  { id: 'important', name: 'Important', color: '#ffc107' },
  { id: 'helpful', name: 'Good to Know', color: '#28a745' },
];

// NOTE: This is your original FAQ dataset (trim/expand as you like).
// I kept the structure; you can keep all 20+ items. JSON-LD will only include the top 12.
const faqData = [
  {
    id: 1,
    question: 'Do lip fillers hurt during injection and recovery?',
    category: 'pain-comfort',
    priority: 'essential',
    searchVolume: 4900,
    lastUpdated: '2025-08-15',
    sourcesVerified: true,
    factChecked: true,
    relatedQuestions: [4, 7, 9],
    warningLevel: 'low',
    expertQuote: {
      text: 'Most patients tolerate lip filler injections well with appropriate pain management techniques including topical anesthetics',
      source: 'American Society for Dermatologic Surgery',
    },
    sources: [
      {
        title: 'Pain Management in Aesthetic Procedures - ASDS Guidelines',
        url: 'https://www.asds.net/skin-experts/skin-treatments/injectables/dermal-fillers',
      },
      {
        title: 'FDA Patient Information on Dermal Fillers',
        url: 'https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-consumers',
      },
    ],
    answer: `Most patients experience mild to moderate discomfort during lip filler injections in Colorado, similar to a pinch or bee sting. The pain level varies by individual tolerance, but most describe it as very manageable.

**What to expect:**
• Before injection: Topical numbing cream applied 15-20 minutes prior
• During injection: Brief sharp sensation, followed by pressure  
• Pain level: Most rate it 3-4 out of 10 on pain scale
• Duration: Each injection takes 2-3 seconds, total procedure under 30 minutes

**Colorado providers typically offer:**
• Topical numbing cream (lidocaine)
• Dental blocks for sensitive patients
• Ice therapy before and after treatment
• Lidocaine-infused fillers (e.g., Juvederm Ultra XC, Restylane Kysse)`,
    tags: ['pain', 'numbing', 'comfort', 'procedure'],
  },
  {
    id: 2,
    question: 'How long do Juvederm and Restylane lip fillers last?',
    category: 'results',
    priority: 'essential',
    searchVolume: 21900,
    lastUpdated: '2024-12-10',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    expertQuote: {
      text: 'Hyaluronic acid fillers typically provide results lasting 6-18 months depending on the product and individual metabolic factors',
      source: 'FDA Guidance on Dermal Fillers',
    },
    sources: [
      {
        title: 'FDA Approved Dermal Fillers - Duration Data',
        url: 'https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-approved-center-devices-and-radiological-health',
      },
    ],
    relatedQuestions: [9, 10, 22],
    answer: `**Juvederm options:**
• Ultra XC: 9–12 months  
• Volbella XC: 12–18 months  

**Restylane options:**
• Kysse: 6–12 months  
• Silk: 6–9 months

**Longevity factors:**
• Metabolism, amount injected, lifestyle (sun, smoking), age

**Typical timeline:**
• 2 weeks: Final results after swelling  
• 6–9 months: Gradual volume loss begins  
• 9–18 months: Touch-up often needed`,
    tags: ['duration', 'longevity', 'results', 'timeline'],
  },
  {
    id: 3,
    question: 'Can pregnant or breastfeeding women get lip fillers in Colorado?',
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
        title: 'FDA Safety Information for Consumers',
        url: 'https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-consumers',
      },
    ],
    expertQuote: {
      text: 'We recommend avoiding elective cosmetic procedures during pregnancy due to lack of safety data',
      source: 'American College of Obstetricians and Gynecologists',
    },
    answer: `❌ **Not recommended during pregnancy or breastfeeding**

**Why:**
• No safety studies on pregnant/breastfeeding patients  
• Unknown effects on baby  
• Hormonal changes can affect healing/results

**Practical guidance:**
• Wait until breastfeeding is complete  
• Existing HA filler is generally safe; discuss concerns with your OB/GYN`,
    tags: ['pregnancy', 'breastfeeding', 'safety', 'contraindications'],
  },
  {
    id: 4,
    question: 'Can I put lip balm on after lip fillers?',
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
        title: 'American Academy of Dermatology: Dermal Fillers',
        url: 'https://www.aad.org/public/cosmetic/injectables/dermal-fillers',
      },
    ],
    expertQuote: {
      text: 'Gentle lip care products without active ingredients can be used after the initial healing period',
      source: 'American Academy of Dermatology',
    },
    answer: `✅ **Yes, after 4–6 hours**

**Use:**
• First 24h: Only gentle, fragrance-free balm / petroleum jelly  
**Avoid (first week):**
• Menthol/camphor, strong fragrance, retinol/actives, exfoliants`,
    tags: ['aftercare', 'lip balm', 'products', 'healing'],
  },
  {
    id: 5,
    question: 'What factors affect lip filler costs in Colorado cities?',
    category: 'cost',
    priority: 'essential',
    searchVolume: 8100,
    lastUpdated: '2024-12-14',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [2],
    sources: [
      { title: 'ASPS Cosmetic Surgery Statistics', url: 'https://www.plasticsurgery.org/news/plastic-surgery-statistics' },
    ],
    expertQuote: {
      text: 'Cost varies based on provider expertise, product, and location',
      source: 'American Society of Plastic Surgeons',
    },
    answer: `**Typical 2024 ranges (per syringe):**
• Denver/Cherry Creek: $700–$1,100  
• Suburbs / Springs / Fort Collins: $550–$950  
• Boulder: $700–$1,100

**Drivers:** experience, brand, amount, clinic overhead`,
    tags: ['cost', 'price', 'budget', 'planning'],
  },
  {
    id: 6,
    question: 'Can you get lip filler at 18?',
    category: 'safety',
    priority: 'important',
    searchVolume: 370,
    lastUpdated: '2024-12-11',
    sourcesVerified: true,
    factChecked: false,
    warningLevel: 'medium',
    relatedQuestions: [3, 11, 12],
    sources: [],
    expertQuote: {
      text: 'Legally permissible at 18; use conservative dosing and informed consent',
      source: 'American Society of Plastic Surgeons Ethics Committee',
    },
    answer: `✅ **Yes (age 18+)**

**Considerations:** facial development, conservative dosing (≤0.5 ml), long-term maintenance planning`,
    tags: ['age', 'legal', 'young adults', 'considerations'],
  },
  {
    id: 7,
    question: 'Day-by-day swelling timeline after lip filler injections',
    category: 'aftercare',
    priority: 'important',
    searchVolume: 3000,
    lastUpdated: '2024-12-09',
    sourcesVerified: false,
    factChecked: true,
    warningLevel: 'low',
    relatedQuestions: [1, 4, 8],
    sources: [],
    expertQuote: {
      text: 'Peak swelling within 24–48h; most resolves by 10–14 days',
      source: 'Clinical Aesthetic Dermatology',
    },
    answer: `**Day 1–2:** peak swelling 🔴  
**Day 3–5:** decreasing 🟡  
**Day 6–10:** mostly resolved 🔵  
**Day 11–14:** near final 🟢  
**Week 3–4:** final result ✅`,
    tags: ['swelling', 'recovery', 'timeline', 'healing'],
  },
  {
    id: 8,
    question: 'How long to avoid straws after lip filler?',
    category: 'aftercare',
    priority: 'helpful',
    searchVolume: 1500,
    lastUpdated: '2024-12-13',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'low',
    relatedQuestions: [1, 4, 7],
    sources: [],
    expertQuote: {
      text: 'Avoid pursing motions 24–48h to allow optimal integration',
      source: 'IAPAM',
    },
    answer: `⏱️ **Avoid for 24–48h** (pursing/suction can shift filler)  
Use wide-mouth cups; keep lips relaxed.`,
    tags: ['straws', 'drinking', 'aftercare', 'restrictions'],
  },
  {
    id: 9,
    question: 'Do lip fillers always look fake?',
    category: 'results',
    priority: 'essential',
    searchVolume: 3200,
    lastUpdated: '2024-12-07',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [2, 22],
    sources: [],
    expertQuote: {
      text: 'Natural results require conservative volumes and proper technique',
      source: 'Aesthetic Surgery Journal',
    },
    answer: `❌ **No**

**Why it looks fake (sometimes):** overfilling, wrong product, poor technique  
**Natural results:** skilled injector, conservative build, match anatomy`,
    tags: ['natural', 'fake', 'results', 'myths', 'appearance'],
  },
  {
    id: 10,
    question: 'Are lip fillers permanent?',
    category: 'results',
    priority: 'essential',
    searchVolume: 2800,
    lastUpdated: '2024-12-06',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [2, 14, 15],
    sources: [],
    expertQuote: {
      text: 'HA fillers are temporary and metabolized by the body',
      source: 'FDA CDRH',
    },
    answer: `❌ **No**

**HA fillers:** 6–12 months typical; maintained via periodic touch-ups`,
    tags: ['permanent', 'temporary', 'duration', 'myths', 'maintenance'],
  },
  {
    id: 12,
    question: 'Are lip fillers safe when done by licensed providers?',
    category: 'safety',
    priority: 'essential',
    searchVolume: 4500,
    lastUpdated: '2024-12-14',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'high',
    relatedQuestions: [3, 6, 15],
    sources: [],
    expertQuote: {
      text: 'Qualified practitioners + FDA-approved products = strong safety profile',
      source: 'ASPS',
    },
    answer: `✅ **Generally safe with qualified providers**

**Risks (rare):** infection, asymmetry, vascular events  
**Mitigation:** credentials, sterile setting, proper aftercare`,
    tags: ['safety', 'risks', 'complications'],
  },
  {
    id: 13,
    question: "What's the difference between Juvederm and Restylane lip fillers?",
    category: 'procedure',
    priority: 'important',
    searchVolume: 1800,
    lastUpdated: '2024-12-10',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [17, 18, 19],
    sources: [],
    expertQuote: {
      text: 'Different rheology/cross-linking → different feel, movement, duration',
      source: 'Dermatologic Surgery Research',
    },
    answer: `**Juvederm (Ultra, Volbella, etc.):** smooth, natural volume  
**Restylane (Kysse, Silk, etc.):** flexible, natural movement  
**Pick by:** goals, anatomy, injector experience`,
    tags: ['types', 'brands', 'differences', 'juvederm', 'restylane'],
  },
  {
    id: 14,
    question: 'Do lip fillers stretch out your lips permanently?',
    category: 'safety',
    priority: 'important',
    searchVolume: 2200,
    lastUpdated: '2024-12-08',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'medium',
    relatedQuestions: [10, 12, 15],
    sources: [],
    expertQuote: {
      text: 'Evidence shows no permanent structural changes from temporary HA fillers',
      source: 'Int. Journal of Cosmetic Science',
    },
    answer: `❌ **No**

Lips return to baseline as HA dissolves; overstretching occurs mainly with chronic overfilling—avoid by staying conservative.`,
    tags: ['stretching', 'permanent', 'myths'],
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
    sources: [],
    expertQuote: {
      text: 'Hyaluronidase can dissolve HA fillers fully or partially',
      source: 'ASAPS',
    },
    answer: `✅ **Yes (HA fillers)**

Hyaluronidase dissolves HA in 24–48h; reserve for corrections/complications. Non-HA fillers are not reversible.`,
    tags: ['removal', 'hyaluronidase', 'reversible'],
  },
  {
    id: 22,
    question: 'What different lip shapes can I get with fillers?',
    category: 'results',
    priority: 'important',
    searchVolume: 4100,
    lastUpdated: '2024-12-15',
    sourcesVerified: true,
    factChecked: true,
    warningLevel: 'none',
    relatedQuestions: [2, 9, 16],
    sources: [],
    expertQuote: {
      text: 'Harmonious results follow facial proportion principles',
      source: 'ISAPS',
    },
    answer: `**Natural Enhancement:** classic, subtle volume  
**Defined:** cupid’s bow, border definition  
**Volume:** plump, Russian, doll  
**Corrective:** asymmetry, lip-flip effect, smoker’s lines

**Want details?** Check our <Link href="/shapes" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 600 }}>Lip Filler Shapes Guide</Link>.`,
    tags: ['shapes', 'styles', 'guide'],
  },
];

/* ------------------------------- Components ------------------------------- */

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'essential':
      return '#dc3545';
    case 'important':
      return '#ffc107';
    case 'helpful':
      return '#28a745';
    default:
      return '#6c757d';
  }
};
const getPriorityLabel = (priority) => {
  switch (priority) {
    case 'essential':
      return 'Must-Know';
    case 'important':
      return 'Important';
    case 'helpful':
      return 'Good to Know';
    default:
      return '';
  }
};

const formatAnswer = (answer) => {
  return (answer || '').split('\n').map((line, index) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <h4 key={index} style={{ color: '#495057', margin: '15px 0 8px 0' }}>
          {line.slice(2, -2)}
        </h4>
      );
    }
    if (line.startsWith('• ')) {
      return <li key={index} style={{ marginBottom: 4 }}>{line.slice(2)}</li>;
    }
    if (line.trim() === '') return <br key={index} />;

    // Special inline link already included where needed
    return (
      <p key={index} style={{ marginBottom: 8 }}>
        {line}
      </p>
    );
  });
};

/* --------------------------------- Page ----------------------------------- */

export default function LipFillerFAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      !searchTerm ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (faq.tags || []).some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesPriority = selectedPriority === 'all' || faq.priority === selectedPriority;
    return matchesSearch && matchesCategory && matchesPriority;
  });

  const schemaFaqs = pickFaqsForSchema(faqData);

  return (
    <Layout>
      <Head>
        {/* If your Layout also sets <title>/<canonical>, remove duplicates there or here. */}
        <title>Lip Filler FAQ | Colorado Lip Enhancement Directory</title>
        <meta
          name="description"
          content="Plain-language answers to common lip filler questions: safety, pain, cost, recovery, and results."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lip Filler FAQ - Colorado Lip Fillers Directory" />
        <meta
          property="og:description"
          content="Straightforward answers on safety, pain, cost, recovery, and results."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lip Filler FAQ" />
        <meta
          name="twitter:description"
          content="Straightforward answers on safety, pain, cost, recovery, and results."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(schemaFaqs)) }}
        />
      </Head>

      <nav style={{ margin: '20px 0', fontSize: 14 }}>
        <Link href="/" style={{ color: '#667eea', textDecoration: 'none' }}>
          Home
        </Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>Lip Filler FAQ</span>
      </nav>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
        {/* Hero */}
        <section
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '60px 20px',
            textAlign: 'center',
            borderRadius: 16,
            margin: '0 0 40px 0',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ fontSize: '3rem', marginBottom: 20 }}>❓</div>
            <h1 style={{ fontSize: '2.6rem', marginBottom: 25, fontWeight: 'bold', lineHeight: 1.2 }}>
              Lip Filler Educational Guide
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.95, marginBottom: 30, lineHeight: 1.5 }}>
              Educational information about common lip filler questions. This content is for informational purposes only
              and does not constitute medical advice.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div
          style={{
            background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
            border: '2px solid #ffc107',
            borderRadius: 12,
            padding: 25,
            marginBottom: 30,
            boxShadow: '0 4px 12px rgba(255, 193, 7, 0.2)',
          }}
        >
          <h3 style={{ color: '#856404', margin: '0 0 10px 0' }}>Important Educational Disclaimer</h3>
          <p style={{ color: '#856404', margin: 0, lineHeight: 1.5 }}>
            <strong>This information is for educational purposes only.</strong> It does not constitute medical advice,
            treatment recommendations, or guarantees about outcomes. Always consult qualified healthcare providers for
            personalized guidance.
          </p>
        </div>

        {/* Emergency Warning */}
        <div
          style={{
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            borderRadius: 8,
            padding: 20,
            marginBottom: 30,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 15,
          }}
        >
          <AlertTriangleIcon color="#856404" size={24} />
          <div>
            <h3 style={{ color: '#856404', margin: '0 0 10px 0' }}>Emergency Warning Signs</h3>
            <p style={{ margin: '0 0 10px 0', color: '#856404' }}>
              <strong>Seek immediate medical attention if you experience:</strong>
            </p>
            <ul style={{ color: '#856404', margin: 0, paddingLeft: 20 }}>
              <li>Severe pain or sudden color changes (blue, white, purple)</li>
              <li>Signs of infection (fever, pus, red streaking)</li>
              <li>Vision changes or severe headaches</li>
              <li>Persistent numbness or tingling</li>
            </ul>
          </div>
        </div>

        {/* Search & Filters */}
        <div style={{ backgroundColor: '#f8f9fa', padding: 25, borderRadius: 12, marginBottom: 20, border: '1px solid #e9ecef' }}>
          {/* Search */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#495057' }}>Search Questions</label>
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
                  borderRadius: 6,
                  fontSize: 16,
                }}
              />
              <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}>
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setShowFilters((s) => !s)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              backgroundColor: showFilters ? '#007bff' : 'white',
              color: showFilters ? 'white' : '#007bff',
              border: '2px solid #007bff',
              borderRadius: 6,
              cursor: 'pointer',
              marginBottom: showFilters ? 20 : 0,
              transition: 'all 0.2s',
            }}
          >
            <FilterIcon size={16} />
            Filters
            {showFilters ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
          </button>

          {/* Filters */}
          {showFilters && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#495057' }}>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{ width: '100%', padding: 10, border: '1px solid #ced4da', borderRadius: 6, backgroundColor: 'white' }}
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#495057' }}>Priority</label>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  style={{ width: '100%', padding: 10, border: '1px solid #ced4da', borderRadius: 6, backgroundColor: 'white' }}
                >
                  {priorities.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Active filter chips */}
          {(selectedCategory !== 'all' || selectedPriority !== 'all' || searchTerm) && (
            <div style={{ marginTop: 15, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {searchTerm && (
                <span style={{ backgroundColor: '#e3f2fd', color: '#1976d2', padding: '4px 8px', borderRadius: 4, fontSize: 14 }}>
                  Search: “{searchTerm}”
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span style={{ backgroundColor: '#f3e5f5', color: '#7b1fa2', padding: '4px 8px', borderRadius: 4, fontSize: 14 }}>
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
              )}
              {selectedPriority !== 'all' && (
                <span style={{ backgroundColor: '#e8f5e8', color: '#2e7d32', padding: '4px 8px', borderRadius: 4, fontSize: 14 }}>
                  {priorities.find((p) => p.id === selectedPriority)?.name}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: 16, color: '#6c757d' }}>
          Showing {filteredFAQs.length} of {faqData.length} questions
        </div>

        {/* FAQ list: use <details> so answers are in the DOM (crawlable) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filteredFAQs.map((faq) => {
            const category = categories.find((c) => c.id === faq.category);
            const stats = getAnswerStats(faq.answer);
            return (
              <details
                id={`faq-${faq.id}`}
                key={faq.id}
                style={{
                  border: '1px solid #e9ecef',
                  borderRadius: 12,
                  background: '#fff',
                  padding: 16,
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    listStyle: 'none',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      background: getPriorityColor(faq.priority),
                      color: '#fff',
                      padding: '2px 8px',
                      borderRadius: 12,
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {getPriorityLabel(faq.priority)}
                  </span>
                  {category && (
                    <span
                      style={{
                        backgroundColor: `${category.color}20`,
                        color: category.color,
                        padding: '2px 8px',
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    >
                      {category.icon} {category.name}
                    </span>
                  )}
                  <span style={{ fontSize: 12, color: '#6c757d' }}>{stats.readTime} min read</span>
                  <span style={{ marginLeft: 'auto', color: '#6c757d' }}>
                    <ChevronDownIcon size={18} />
                  </span>
                </summary>

                <div style={{ paddingTop: 12, lineHeight: 1.6, color: '#495057' }}>
                  <WarningBanner warningLevel={faq.warningLevel}>
                    {faq.warningLevel === 'high' && 'This procedure has specific medical contraindications. Always consult qualified providers.'}
                    {faq.warningLevel === 'medium' && 'Important safety considerations apply. Choose qualified practitioners.'}
                    {faq.warningLevel === 'low' && 'Following proper aftercare helps ensure optimal results.'}
                  </WarningBanner>

                  {formatAnswer(faq.answer)}
                  <ExpertQuote expertQuote={faq.expertQuote} />
                  <Sources sources={faq.sources} />
                  <RelatedQuestions relatedQuestions={faq.relatedQuestions} faqData={faqData} />
                  <ContentFreshness
                    lastUpdated={faq.lastUpdated || contentUpdates.lastModified}
                    sourcesVerified={faq.sourcesVerified}
                    factChecked={faq.factChecked}
                  />

                  {faq.tags && (
                    <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #e9ecef' }}>
                      <div style={{ fontSize: 14, color: '#6c757d', marginBottom: 8 }}>Related topics:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              backgroundColor: '#e9ecef',
                              color: '#495057',
                              padding: '2px 8px',
                              borderRadius: 4,
                              fontSize: 12,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </details>
            );
          })}
        </div>

        {/* No results */}
        {filteredFAQs.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6c757d' }}>
            <div style={{ marginBottom: 20, opacity: 0.5 }}>
              <SearchIcon />
            </div>
            <h3>No questions found</h3>
            <p>Try adjusting your search terms or filters.</p>
          </div>
        )}

        {/* CTA */}
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '40px 20px',
            borderRadius: 12,
            textAlign: 'center',
            margin: '40px 0',
          }}
        >
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.8rem' }}>Ready to Find a Provider?</h3>
          <p style={{ fontSize: '1.1rem', margin: '0 0 25px 0', opacity: 0.9 }}>
            Browse our directory of providers offering lip filler treatments throughout Colorado.
          </p>
          <div style={{ display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/#find-providers"
              style={{
                backgroundColor: 'white',
                color: '#007bff',
                padding: '12px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 600,
                display: 'inline-block',
                transition: 'transform 0.2s',
              }}
            >
              Find Providers
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div
          style={{
            backgroundColor: '#f8f9fa',
            border: '2px solid #6c757d',
            borderRadius: 8,
            padding: 30,
            textAlign: 'center',
          }}
        >
          <h4 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', fontWeight: 600, color: '#495057' }}>
            Important Legal and Medical Disclaimer
          </h4>
          <div style={{ textAlign: 'left', fontSize: '0.9rem', color: '#6c757d', lineHeight: 1.6 }}>
            <p style={{ margin: '0 0 15px 0' }}>
              <strong>Educational Content Only:</strong> This guide provides general educational information about
              cosmetic procedures and should not be considered medical advice.
            </p>
            <p style={{ margin: '0 0 15px 0' }}>
              <strong>Professional Consultation Required:</strong> Always consult with board-certified healthcare
              providers. This content does not establish a doctor-patient relationship.
            </p>
            <p style={{ margin: 0 }}>
              <strong>No Guarantees:</strong> Outcomes cannot be guaranteed. All cosmetic procedures carry risks; review
              informed consent carefully.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
