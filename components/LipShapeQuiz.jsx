import { useState, useEffect } from 'react';
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
    id: 'skinTone',
    question: 'What\'s your skin tone?',
    options: [
      { value: 'fair', label: 'Fair' },
      { value: 'light-medium', label: 'Light to Medium' },
      { value: 'medium', label: 'Medium' },
      { value: 'medium-deep', label: 'Medium to Deep' },
      { value: 'deep', label: 'Deep' }
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

const lipStyleResults = {
  'natural-subtle-balanced': {
    primaryStyle: 'Natural Hydration',
    secondaryStyle: 'Subtle Enhancement',
    description: 'Light enhancement to add moisture and subtle fullness while maintaining your natural lip appearance. Focus on hydration and definition rather than dramatic volume.',
    characteristics: ['Barely noticeable change', 'Hydrated & soft appearance', 'Natural lip line preserved', 'Enhanced texture'],
    talkingPoints: [
      'I want my lips to look naturally fuller, not obviously enhanced',
      'Focus on hydration and definition',
      'Keep my natural lip shape and identity',
      'I prefer a subtle, undetectable enhancement',
      'I\'d like my lips to feel softer and more hydrated'
    ]
  },
  'natural-subtle-thin-bottom': {
    primaryStyle: 'Subtle Balance',
    secondaryStyle: 'Lower Lip Definition',
    description: 'Gently enhance the lower lip to create better proportion with your upper lip. This is about balance and symmetry, not volume.',
    characteristics: ['Lower lip focused', 'Better lip proportion', 'Subtle definition', 'Natural correction'],
    talkingPoints: [
      'My lower lip is thinner - I want better balance',
      'Focus on correcting proportion without obvious change',
      'Keep it looking natural, like my own evolved lips',
      'I want a subtle but noticeable improvement',
      'What technique works best for evening out lips naturally?'
    ]
  },
  'natural-moderate-balanced': {
    primaryStyle: 'Natural Definition',
    secondaryStyle: 'Soft Fullness',
    description: 'Enhance definition and subtle fullness while maintaining a naturally beautiful appearance. The goal is to look like an improved version of yourself.',
    characteristics: ['Naturally fuller appearance', 'Enhanced lip definition', 'Balanced proportions', 'Youthful but authentic'],
    talkingPoints: [
      'I want fuller lips but still look like me',
      'Enhance my natural shape, don\'t change it',
      'Focus on lip line definition for structure',
      'I like a natural, hydrated finish',
      'Show me how much enhancement will look proportionate'
    ]
  },
  'natural-pronounced-balanced': {
    primaryStyle: 'Enhanced Definition',
    secondaryStyle: 'Cupid\'s Bow Focus',
    description: 'With your pronounced cupid\'s bow, enhancement focuses on definition and emphasizing that beautiful natural feature while adding subtle fullness.',
    characteristics: ['Cupid\'s bow enhanced', 'Strong definition', 'Natural proportions', 'Feature-flattering'],
    talkingPoints: [
      'I love my cupid\'s bow - I want to emphasize it',
      'Focus on definition and subtle enhancement',
      'Keep my natural lip character and identity',
      'I want a polished, defined look',
      'How do you enhance pronounced lips naturally?'
    ]
  },
  'balanced-subtle-balanced': {
    primaryStyle: 'Subtle Balanced',
    secondaryStyle: 'Gentle Definition',
    description: 'A subtle approach that brings gentle definition to both lips. Creates a refined appearance with understated enhancement.',
    characteristics: ['Subtle both lips', 'Gentle definition', 'Refined appearance', 'Polished not obvious'],
    talkingPoints: [
      'I want subtle enhancement to both lips equally',
      'Create gentle definition and shape',
      'I prefer understated, refined results',
      'What\'s a subtle amount for natural-looking lips?',
      'I\'d like gradual, conservative improvement'
    ]
  },
  'balanced-moderate-balanced': {
    primaryStyle: 'Balanced Volume',
    secondaryStyle: 'Sculptural Definition',
    description: 'Fuller lips with clean definition for a polished, curated look. More noticeable than natural but still harmonious with your features.',
    characteristics: ['Noticeably fuller', 'Defined lip line', 'Balanced both lips', 'Intentional appearance'],
    talkingPoints: [
      'I want people to notice my lips are fuller',
      'Create clean lip lines and definition',
      'Balance and enhance both lips equally',
      'I want a polished, intentional look',
      'Can we build this gradually over time?'
    ]
  },
  'balanced-pronounced-balanced': {
    primaryStyle: 'Sculpted Definition',
    secondaryStyle: 'Cupid\'s Bow Emphasis',
    description: 'With a prominent cupid\'s bow, enhancement focuses on strategic definition to create sculpted, fashionable lips. Noticeable but intentional.',
    characteristics: ['Cupid\'s bow emphasized', 'Sculpted definition', 'Strong lip line', 'Fashion-forward'],
    talkingPoints: [
      'I want to enhance my natural cupid\'s bow',
      'Create a sculpted, defined lip line',
      'Make my lips more of a statement',
      'I want my lips to photograph beautifully',
      'What technique best emphasizes the cupid\'s bow?'
    ]
  },
  'glam-subtle-balanced': {
    primaryStyle: 'Refined Glamour',
    secondaryStyle: 'Subtle Definition',
    description: 'A glamorous vibe with subtle enhancement - creates definition and structure while keeping a refined, sophisticated appearance.',
    characteristics: ['Refined glamour', 'Subtle definition', 'Sophisticated appearance', 'Elegant look'],
    talkingPoints: [
      'I like glamour but want to keep it subtle',
      'Create clean lines and definition',
      'Keep a sophisticated, refined appearance',
      'I want intentional but understated results',
      'Show me elegant, glamorous looks'
    ]
  },
  'glam-moderate-balanced': {
    primaryStyle: 'Modern Glamour',
    secondaryStyle: 'Polished Definition',
    description: 'Well-defined lips with a polished glamorous appearance. Noticeable and intentional enhancement that makes a statement.',
    characteristics: ['Polished definition', 'Glamorous appearance', 'Intentional enhancement', 'Photogenic'],
    talkingPoints: [
      'I love a glamorous aesthetic',
      'Create strong definition and clean lines',
      'Make my lips a statement feature',
      'Perfect for photos and special occasions',
      'I want a high-fashion, curated look'
    ]
  },
  'glam-moderate-full': {
    primaryStyle: 'Bold Glamour',
    secondaryStyle: 'Maximum Fullness',
    description: 'Fuller, well-defined lips with dramatic definition. A curated, high-impact lip look that\'s unmistakably enhanced and fashionable.',
    characteristics: ['Maximum fullness emphasis', 'Strong definition', 'Sculpted appearance', 'High-impact'],
    talkingPoints: [
      'I want bold, glamorous lips',
      'Create that sculpted, defined look',
      'Fuller lips are important to me',
      'I\'m confident with obvious enhancement',
      'Show me your most glamorous full-lip results'
    ]
  },
  'glam-pronounced-balanced': {
    primaryStyle: 'Sculpted Glamour',
    secondaryStyle: 'Cupid\'s Bow Emphasis',
    description: 'Enhanced definition of your pronounced cupid\'s bow with sculpted glamour. A bold, fashion-forward statement look.',
    characteristics: ['Bold cupid\'s bow', 'Sculpted edges', 'Glamorous definition', 'Statement-making'],
    talkingPoints: [
      'I want to maximize my cupid\'s bow',
      'Create a sculpted, bold lip line',
      'Make a glamorous statement',
      'I prefer obvious, intentional enhancement',
      'What\'s your most dramatic sculpting technique?'
    ]
  },
  'glam-pronounced-full': {
    primaryStyle: 'Maximum Glamour',
    secondaryStyle: 'Bold Sculpting',
    description: 'Maximum impact with dramatic enhancement and definition. A high-fashion lip look that\'s unmistakably curated, bold, and glamorous.',
    characteristics: ['Maximum fullness', 'Dramatic definition', 'Pronounced cupid\'s bow', 'Show-stopping'],
    talkingPoints: [
      'I want bold, dramatic lips',
      'Create maximum definition and emphasis',
      'I love the sculpted lip trend',
      'I\'m very confident with obvious enhancement',
      'Show me your most dramatic results'
    ]
  }
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
    const vibe = answers.vibe || 'balanced';
    const bowShape = answers.cupidsBow || 'moderate';
    const balance = answers.lipBalance || 'balanced';
    const experience = answers.experience || 'first-time';
    const goal = answers.goal || 'definition';
    const maintenance = answers.maintenance || 'moderate';
    const symmetry = answers.lipSymmetry || 'symmetrical';
    const cornerDrop = answers.cornerDrop || 'neutral';

    // Build result key: `${vibe}-${bowShape}-${balance}`
    let resultKey = `${vibe}-${bowShape}-${balance}`;

    // 1. VERY EXPERIENCED users - escalate results
    if (experience === 'very-experienced') {
      if (vibe === 'glam') {
        resultKey = 'glam-pronounced-full';
      } else if (vibe === 'balanced') {
        resultKey = 'balanced-pronounced-balanced';
      } else if (vibe === 'natural') {
        resultKey = 'balanced-moderate-balanced';
      }
    }

    // 2. FULLNESS GOAL - shift towards fuller
    if (goal === 'fullness') {
      if (vibe === 'glam') {
        resultKey = 'glam-moderate-full';
      } else if (vibe === 'balanced') {
        resultKey = 'balanced-moderate-balanced';
      } else if (vibe === 'natural' && balance !== 'thin-bottom') {
        resultKey = 'natural-moderate-balanced';
      }
    }

    // 3. BALANCE GOAL with ASYMMETRY - fix lower lip
    if (goal === 'balance' && symmetry === 'very-asymmetrical') {
      resultKey = 'natural-subtle-thin-bottom';
    }

    // 4. NATURAL GLOW GOAL - hydration focus
    if (goal === 'natural-glow') {
      if (vibe === 'natural') {
        resultKey = 'natural-subtle-balanced';
      } else if (vibe === 'balanced') {
        resultKey = 'natural-moderate-balanced';
      }
    }

    // 5. DOWNTURNED CORNERS (non-natural vibe) - need uplift
    if (cornerDrop === 'downturned' && vibe !== 'natural') {
      if (vibe === 'glam') {
        resultKey = 'glam-pronounced-balanced';
      } else if (vibe === 'balanced') {
        resultKey = 'balanced-pronounced-balanced';
      }
    }

    // 6. PRONOUNCED BOW + GLAM - emphasize it
    if (bowShape === 'pronounced' && vibe === 'glam') {
      if (balance === 'full-bottom') {
        resultKey = 'glam-pronounced-full';
      } else {
        resultKey = 'glam-pronounced-balanced';
      }
    }

    // 7. FIRST TIME + NATURAL - conservative
    if (experience === 'first-time' && vibe === 'natural') {
      resultKey = 'natural-subtle-balanced';
    }

    // 8. MINIMAL MAINTENANCE + FULLNESS - dial back
    if (maintenance === 'minimal' && goal === 'fullness') {
      if (vibe === 'glam') {
        resultKey = 'balanced-moderate-balanced';
      } else if (vibe === 'balanced') {
        resultKey = 'natural-moderate-balanced';
      }
    }

    return lipStyleResults[resultKey] || lipStyleResults['natural-subtle-balanced'];
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

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const result = getResults();
  const TOTAL_QUESTIONS = 10;

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
              <p>Browse Colorado providers and discuss your "{result.primaryStyle}" style preferences</p>
              <a href="/providers" className={styles.btnPrimary}>
                Browse Providers
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}