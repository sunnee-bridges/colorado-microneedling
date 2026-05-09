import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './LipShapeQuiz.module.css';

const quizQuestions = [
  {
    id: 'faceShape',
    question: 'What\'s your face shape?',
    options: [
      { value: 'oval', label: 'Oval / Balanced' },
      { value: 'round', label: 'Round' },
      { value: 'square', label: 'Square / Angular' },
      { value: 'heart', label: 'Heart / Pear' }
    ]
  },
  {
    id: 'cupidsBow',
    question: 'How prominent is your Cupid\'s bow?',
    options: [
      { value: 'subtle', label: 'Subtle / Undefined' },
      { value: 'moderate', label: 'Moderate' },
      { value: 'pronounced', label: 'Very Pronounced' }
    ]
  },
  {
    id: 'lipBalance',
    question: 'What\'s your natural upper-to-lower lip ratio?',
    options: [
      { value: 'thin-bottom', label: 'Thin lower lip' },
      { value: 'balanced', label: 'Well-balanced' },
      { value: 'full-bottom', label: 'Fuller lower lip' }
    ]
  },
  {
    id: 'lipSymmetry',
    question: 'How symmetrical are your lips currently?',
    options: [
      { value: 'very-asymmetrical', label: 'One side is noticeably fuller' },
      { value: 'slightly-asymmetrical', label: 'Slightly uneven' },
      { value: 'symmetrical', label: 'Pretty symmetrical' }
    ]
  },
  {
    id: 'cornerDrop',
    question: 'What\'s your lip corner definition like?',
    options: [
      { value: 'downturned', label: 'Corners droop slightly' },
      { value: 'neutral', label: 'Corners are level' },
      { value: 'upturned', label: 'Naturally lifted corners' }
    ]
  },
  {
    id: 'vibe',
    question: 'What\'s your overall style vibe?',
    options: [
      { value: 'natural', label: '✨ Natural & Subtle' },
      { value: 'balanced', label: '💄 Balanced & Defined' },
      { value: 'glam', label: '🔥 Bold & Glamorous' }
    ]
  },
  {
    id: 'experience',
    question: 'Is this your first lip filler experience?',
    options: [
      { value: 'first-time', label: 'Yes, first time!' },
      { value: 'experienced', label: 'I\'ve had fillers before' },
      { value: 'very-experienced', label: 'I\'ve had multiple rounds' }
    ]
  },
  {
    id: 'maintenance',
    question: 'How often are you willing to get touch-ups?',
    options: [
      { value: 'minimal', label: 'Once or twice a year' },
      { value: 'moderate', label: 'Every 6-9 months' },
      { value: 'frequent', label: 'Every 3-6 months' }
    ]
  },
  {
    id: 'goal',
    question: 'What\'s your main goal?',
    options: [
      { value: 'definition', label: 'Better definition & shape' },
      { value: 'fullness', label: 'More fullness & volume' },
      { value: 'balance', label: 'Fix asymmetry' },
      { value: 'natural-glow', label: 'Hydration & youthful glow' }
    ]
  }
];

// Style headline — driven by vibe + Cupid's bow (9 distinct combinations)
const styleHeadlines = {
  'natural-subtle':    { primary: 'Natural Hydration',    secondary: 'Gentle Enhancement' },
  'natural-moderate':  { primary: 'Natural Definition',   secondary: 'Soft Fullness' },
  'natural-pronounced':{ primary: 'Enhanced Definition',  secondary: "Cupid's Bow Focus" },
  'balanced-subtle':   { primary: 'Subtle Refinement',    secondary: 'Gentle Definition' },
  'balanced-moderate': { primary: 'Balanced Volume',      secondary: 'Sculptural Definition' },
  'balanced-pronounced':{ primary: 'Sculpted Definition', secondary: "Cupid's Bow Emphasis" },
  'glam-subtle':       { primary: 'Refined Glamour',      secondary: 'Understated Drama' },
  'glam-moderate':     { primary: 'Modern Glamour',       secondary: 'Polished Definition' },
  'glam-pronounced':   { primary: 'Sculpted Glamour',     secondary: "Cupid's Bow Statement" },
};

export default function LipShapeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResults = () => {
    const vibe      = answers.vibe        || 'balanced';
    const bowShape  = answers.cupidsBow   || 'moderate';
    const balance   = answers.lipBalance  || 'balanced';
    const experience = answers.experience || 'first-time';
    const goal      = answers.goal        || 'definition';
    const maintenance = answers.maintenance || 'moderate';
    const symmetry  = answers.lipSymmetry || 'symmetrical';
    const cornerDrop = answers.cornerDrop || 'neutral';
    const faceShape = answers.faceShape   || 'oval';

    // --- HEADLINE (vibe × Cupid's bow) ---
    const headline = styleHeadlines[`${vibe}-${bowShape}`] || styleHeadlines['balanced-moderate'];

    // --- DESCRIPTION ---
    // Opener from vibe
    const vibeOpener = {
      natural:  'A naturally-focused enhancement designed to let your own beauty shine through.',
      balanced: 'A polished, intentional enhancement that makes a curated statement without going over the top.',
      glam:     'A bold, high-impact look that turns your lips into a genuine standout feature.',
    }[vibe];

    // Goal sentence
    const goalSentence = {
      definition:   ' The main focus is clean structure and lip line definition.',
      fullness:     ' Volume and fullness are the priority — more is the point.',
      balance:      ' Correcting asymmetry and evening out proportion comes first.',
      'natural-glow': ' Hydration and a youthful, healthy appearance take center stage.',
    }[goal];

    // Experience framing
    const experienceSentence = {
      'first-time':       ' Starting conservatively is the right call — results can always be built on.',
      experienced:        ' Your familiarity with fillers means we can dial in exactly what works for you.',
      'very-experienced': ' With your experience, you know your aesthetic — this look leans fully into it.',
    }[experience];

    // Lip balance note
    const balanceSentence = {
      'thin-bottom': ' Lower lip proportion will be a key consideration throughout.',
      balanced:      '',
      'full-bottom': ' Your naturally fuller lower lip gives you a great foundation to build on.',
    }[balance];

    // Corner note (only if relevant)
    const cornerSentence = cornerDrop === 'downturned'
      ? ' A corner-lift technique may also be worth discussing.'
      : cornerDrop === 'upturned'
      ? ' Your naturally lifted corners are an asset — we\'ll work to preserve them.'
      : '';

    const description = vibeOpener + goalSentence + experienceSentence + balanceSentence + cornerSentence;

    // --- CHARACTERISTICS (built from 5 answers) ---
    const characteristics = [];

    // Vibe
    const vibeChar = { natural: 'Naturally enhanced', balanced: 'Intentionally polished', glam: 'Bold & statement-making' }[vibe];
    characteristics.push(vibeChar);

    // Goal
    const goalChar = {
      definition:     'Shape & structure focused',
      fullness:       'Volume & fullness focused',
      balance:        'Proportion & symmetry focused',
      'natural-glow': 'Hydration & glow focused',
    }[goal];
    characteristics.push(goalChar);

    // Cupid's bow
    const bowChar = {
      subtle:     'Soft lip line, relaxed bow',
      moderate:   'Natural bow gently enhanced',
      pronounced: "Cupid's bow emphasized",
    }[bowShape];
    characteristics.push(bowChar);

    // Lip balance
    const balanceChar = {
      'thin-bottom': 'Lower lip proportion corrected',
      balanced:      'Symmetrical volume distribution',
      'full-bottom': 'Lower lip fullness preserved',
    }[balance];
    characteristics.push(balanceChar);

    // Experience
    const experienceChar = {
      'first-time':       'Conservative starting point',
      experienced:        'Refined & dialled-in',
      'very-experienced': 'Full aesthetic confidence',
    }[experience];
    characteristics.push(experienceChar);

    // --- TALKING POINTS (one per answer — all 9 used) ---
    const talkingPoints = [];

    // Goal
    talkingPoints.push({
      definition:     "My main goal is better lip definition and shape — clean, structured lines matter most to me",
      fullness:       "More fullness and volume is my priority — I want noticeably fuller lips",
      balance:        "I'd like to correct the asymmetry in my lips — that's my main focus",
      'natural-glow': "I'm more focused on hydration and a youthful glow than dramatic volume",
    }[goal]);

    // Vibe
    talkingPoints.push({
      natural:  "I want results that look like my own lips, just better — nothing that screams 'filler'",
      balanced: "I want people to notice my lips look great — intentionally enhanced but not overdone",
      glam:     "I love a bold, glamorous aesthetic — I'm fully comfortable with an obvious, curated look",
    }[vibe]);

    // Face shape
    talkingPoints.push({
      oval:   "My face is oval-shaped — I understand most styles work, but I'd love your specific recommendation",
      round:  "I have a round face — I'd prefer styles that add vertical definition rather than horizontal width",
      square: "I have a square, angular face — softer, rounder lip shapes tend to flatter me most",
      heart:  "I have a heart-shaped face — I want balanced upper and lower volume so my lips don't look top-heavy",
    }[faceShape]);

    // Cupid's bow
    talkingPoints.push({
      subtle:     "My Cupid's bow is pretty subtle — I'm open to softly defining it, or keeping it relaxed",
      moderate:   "I have a natural Cupid's bow — I'd like to enhance it without making it look artificial",
      pronounced: "I have a very pronounced Cupid's bow and I love it — any work should honor and emphasize it",
    }[bowShape]);

    // Lip balance
    talkingPoints.push({
      'thin-bottom': "My lower lip is thinner than my upper — better proportion between the two is important to me",
      balanced:      "My upper and lower lips are fairly balanced — I'd like to keep that symmetry while we enhance",
      'full-bottom': "My lower lip is naturally fuller — I want to work with that, not fight it",
    }[balance]);

    // Symmetry
    talkingPoints.push({
      'very-asymmetrical':    "One side of my lips is noticeably fuller — correcting that asymmetry matters a lot to me",
      'slightly-asymmetrical': "My lips are slightly uneven — I'd appreciate any correction you can make without overdoing it",
      symmetrical:             "My lips are fairly symmetrical — I want to maintain that while we enhance",
    }[symmetry]);

    // Corner drop
    talkingPoints.push({
      downturned: "My lip corners droop slightly — if there's a technique to give them a subtle lift, I'm interested",
      neutral:    "My lip corners sit at a neutral level — I'd like to keep that balanced look",
      upturned:   "My corners naturally lift a little — I'd love to preserve and even enhance that",
    }[cornerDrop]);

    // Experience
    talkingPoints.push({
      'first-time':       "This is my first time — I'd like to start conservatively and build from there if I love it",
      experienced:        "I've had fillers before and know what I like — I want to refine, not start over",
      'very-experienced': "I've had multiple rounds and have a clear sense of my aesthetic — let's build on what's worked",
    }[experience]);

    // Maintenance
    talkingPoints.push({
      minimal:  "I only want to come in once or twice a year — I'd like a result that holds up with minimal upkeep",
      moderate: "Every 6–9 months feels right for me — I want results that look great over that window",
      frequent: "I'm happy to come in every 3–6 months to keep things looking fresh and refined",
    }[maintenance]);

    return {
      primaryStyle:   headline.primary,
      secondaryStyle: headline.secondary,
      description,
      characteristics,
      talkingPoints,
    };
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleShare = () => {
    const result = getResults();
    const text = `I got "${result.primaryStyle}" on the Lip Shape Finder! Check out your personalized lip style:`;
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({ text, url });
    } else {
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      window.open(tweetUrl, '_blank');
    }
  };

  if (!isClient) {
    return null;
  }

  const TOTAL_QUESTIONS = quizQuestions.length;
  const progress = ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;
  const result = getResults();

  return (
    <div className={styles.container}>
      {!showResults ? (
        <div className={styles.quizContainer}>
          {/* Progress Bar */}
          <div className={styles.progressSection}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className={styles.progressText}>
              Question {currentQuestion + 1} of {TOTAL_QUESTIONS}
            </p>
          </div>

          {/* Question */}
          <div className={styles.questionSection}>
            <h2 className={styles.question}>
              {quizQuestions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className={styles.optionsGrid}>
              {quizQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={styles.optionButton}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.resultsContainer}>
          {/* Results Card */}
          <div className={styles.resultsCard}>
            <div className={styles.resultHeader}>
              <h2 className={styles.resultTitle}>Your Lip Style</h2>
              <p className={styles.resultSubtitle}>{result.primaryStyle}</p>
              <p className={styles.resultSecondary}>+ {result.secondaryStyle}</p>
            </div>

            <div className={styles.resultDescription}>
              <p>{result.description}</p>
            </div>

            {/* Characteristics */}
            <div className={styles.characteristicsBox}>
              <h3>Your Style</h3>
              <ul className={styles.characteristicsList}>
                {result.characteristics.map((char, idx) => (
                  <li key={idx}>✨ {char}</li>
                ))}
              </ul>
            </div>

            {/* Talking Points */}
            <div className={styles.talkingPointsBox}>
              <h3>💬 Consultation Talking Points</h3>
              <p className={styles.talkingPointsSubtext}>
                Bring these to your consultation to help your provider understand your goals:
              </p>
              <ul className={styles.talkingPointsList}>
                {result.talkingPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <button onClick={handleShare} className={`${styles.btn} ${styles.btnShare}`}>
                Share Results
              </button>
              <button onClick={handleReset} className={`${styles.btn} ${styles.btnRetake}`}>
                Retake Quiz
              </button>
            </div>

            {/* Provider CTA */}
            <div className={styles.providerCTA}>
              <h3>Ready to Find Your Provider?</h3>
              <p>Browse Colorado providers and discuss your &quot;{result.primaryStyle}&quot; style preferences</p>
              <Link href="/providers" className={styles.btnPrimary}>
                Browse Providers
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}