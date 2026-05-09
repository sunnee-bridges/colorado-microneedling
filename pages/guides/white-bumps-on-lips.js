import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Head from 'next/head';
import ShareButtons from '../../components/ShareButtons';

export default function WhiteBumpsOnLips() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const BASE = SITE_URL.replace(/\/$/, '');
  const CANONICAL = `${BASE}/guides/white-bumps-on-lips`;
  const OG_IMG = `${BASE}/images/lip-filler-cold-sores-1200x630.jpg`;

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "White Bumps on Your Lips: What They Usually Are (and When to Get Them Checked)",
              "description": "Small white or yellowish bumps on the lips are extremely common and usually harmless. Learn what causes them, what Fordyce spots are, and whether they affect lip filler.",
              "mainEntityOfPage": { "@type": "WebPage", "@id": CANONICAL },
              "image": [OG_IMG],
              "author": { "@type": "Organization", "name": "Find Lip Filler Directory" },
              "publisher": {
                "@type": "Organization",
                "name": "Find Lip Filler Directory",
                "logo": { "@type": "ImageObject", "url": `${BASE}/images/logo-600x60.png` }
              },
              "datePublished": "2026-05-09",
              "dateModified": "2026-05-09",
              "articleSection": "Guides"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
                { "@type": "ListItem", "position": 2, "name": "Guides", "item": `${BASE}/guides` },
                { "@type": "ListItem", "position": 3, "name": "White Bumps on Lips", "item": CANONICAL }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the small white bumps on my lips?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The most common cause of small white or yellowish bumps on the lips is Fordyce spots — visible oil glands that are completely normal and harmless. They are not contagious, not an STI, and not a sign of illness. That said, any new or changing spot on your lips is worth showing to a doctor or dermatologist, who can give you a proper diagnosis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are white bumps on my lips an STI?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Small white bumps that look like tiny dots clustered along the lip line or inside the lips are most commonly Fordyce spots, which are not an STI and are not contagious. However, if you have sores, blisters, or ulcers on or around your lips, particularly if they are new or painful, those are worth discussing with a doctor. When in doubt, get it checked — that is always the right call."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I still get lip filler if I have white bumps on my lips?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your bumps are Fordyce spots, they are typically not a barrier to getting lip filler. However, any skin condition on or near the treatment area is something your provider should know about. Mention them at your consultation and let your provider assess whether any additional steps are needed before treatment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will lip filler make the bumps worse?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fordyce spots are not known to worsen from lip filler. However, this is worth raising with your provider directly. They can assess the specific situation and let you know if there is anything to be aware of based on the placement and type of treatment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I tell my provider about the bumps before booking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Any skin condition on or near the treatment area is relevant information for your provider. A good provider will ask about your skin health during your consultation. Being upfront about anything you have noticed helps them make the right call for your specific situation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are Fordyce spots?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fordyce spots are small, visible sebaceous glands — oil glands — that appear on the lips and inner cheeks. They are completely normal, extremely common, and present in the majority of adults. They look like tiny white or pale yellow dots, often clustered along the lip border or on the inner lip. They are not contagious, not caused by any virus or bacteria, and not linked to any STI."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <Layout
        title="White Bumps on Your Lips: What They Usually Are"
        metaDescription="Small white or yellowish bumps on your lips are extremely common and usually harmless. Learn what causes them, what Fordyce spots are, and how they relate to lip filler."
        canonical={CANONICAL}
        ogTitle="White Bumps on Your Lips: What They Usually Are"
        ogDescription="Tiny white bumps on the lips are almost always harmless Fordyce spots — visible oil glands. Here is what they are, what else they could be, and when to get them checked."
        ogImage={OG_IMG}
      >
        <nav style={{ margin: '20px 0', fontSize: '14px', color: '#6c757d' }}>
          <Link href="/" style={{ color: '#667eea', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/guides" style={{ color: '#667eea', textDecoration: 'none' }}>Guides</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>White Bumps on Lips</span>
        </nav>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Hero */}
          <section style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white', padding: '50px 30px', textAlign: 'center',
            borderRadius: '16px', margin: '0 0 40px 0',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
          }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>
                White Bumps on Your Lips
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: '0.95', marginBottom: '0', lineHeight: '1.6' }}>
                Take a breath. Tiny white or yellowish bumps on the lips are one of the most common things people quietly google — and they are almost always completely harmless. Here is what they usually are and what to know if you are thinking about lip filler.
              </p>
            </div>
          </section>

          <ShareButtons url={CANONICAL} title="White Bumps on Your Lips: What They Usually Are" />

          {/* Reassurance notice */}
          <div style={{
            backgroundColor: '#d1ecf1', border: '2px solid #17a2b8',
            borderRadius: '12px', padding: '25px', marginBottom: '30px'
          }}>
            <h3 style={{ color: '#0c5460', marginBottom: '12px', fontSize: '1.2rem' }}>
              First, the most likely thing
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#0c5460', lineHeight: '1.7' }}>
              Small white or pale yellow bumps clustered along the lip border or on the inside of the lips are most commonly <strong>Fordyce spots</strong> — visible oil glands that the majority of adults have. They are not an STI, not contagious, not caused by a virus, and not a sign that anything is wrong. They are just a normal part of how skin works. That said, this page is not a diagnosis. If something is new, changing, painful, or worrying you, get it looked at by a doctor.
            </p>
          </div>

          {/* Article Info */}
          <div style={{
            backgroundColor: '#f8f9fa', border: '1px solid #dee2e6',
            borderRadius: '8px', padding: '20px', marginBottom: '30px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center', fontSize: '14px' }}>
              <div><strong>Last Updated:</strong><br />2026</div>
              <div><strong>Reading Time:</strong><br />6 to 8 minutes</div>
              <div><strong>Purpose:</strong><br />General Education Only</div>
            </div>
          </div>

          {/* What Are They */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px', fontSize: '1.8rem', marginBottom: '25px' }}>
              What Are Those Bumps, Actually?
            </h2>
            <div style={{ backgroundColor: '#f8f9ff', border: '2px solid #667eea', borderRadius: '12px', padding: '30px' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 20px 0', color: '#333' }}>
                When people notice small bumps on their lips, they tend to spiral into worst-case scenarios. The reality is much more boring. Here are the most common causes, in order of how likely they are.
              </p>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  {
                    label: 'Most common',
                    title: 'Fordyce spots',
                    color: '#28a745',
                    desc: 'Tiny white or pale yellow dots, usually clustered along the lip border or the inside of the lip. These are just oil glands that happen to be visible through the skin. Most adults have them. They have been there your whole life — you may have only just noticed them. Not contagious, not linked to any infection, completely harmless.'
                  },
                  {
                    label: 'Also common',
                    title: 'Milia',
                    color: '#667eea',
                    desc: 'Small white cysts that form when dead skin gets trapped just under the surface. They look a bit like whiteheads but are firmer and do not pop. Common around the lips, especially the upper lip area. Harmless, though a dermatologist can remove them if they bother you.'
                  },
                  {
                    label: 'Less common',
                    title: 'Mucocele',
                    color: '#667eea',
                    desc: 'A small fluid-filled bump that forms when a salivary gland gets blocked, usually from minor lip trauma like biting the inside of your lip. Usually smooth, soft, and bluish or clear. Harmless but worth showing to a doctor, as some go away on their own and others need a small in-office procedure.'
                  },
                  {
                    label: 'See a doctor',
                    title: 'Cold sores or other sores',
                    color: '#dc3545',
                    desc: 'Cold sores caused by HSV-1 look different — they start as a tingling or burning sensation, then form blisters that crust over. If what you have is painful, blistered, crusty, or appeared after symptoms, that is different from the bumps described above and worth getting checked by a doctor promptly.'
                  },
                ].map((item, index) => (
                  <div key={index} style={{
                    backgroundColor: 'white', padding: '20px', borderRadius: '8px',
                    border: '1px solid #e9ecef', borderLeft: `4px solid ${item.color}`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: item.color, letterSpacing: '0.05em' }}>{item.label}</span>
                      <h4 style={{ color: '#333', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{item.title}</h4>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Fordyce spots explained */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px', fontSize: '1.8rem', marginBottom: '25px' }}>
              Fordyce Spots: The Full Picture
            </h2>
            <div style={{ backgroundColor: '#f8f9ff', border: '2px solid #667eea', borderRadius: '12px', padding: '30px' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 20px 0', color: '#333' }}>
                Fordyce spots are named after a dermatologist from the 1890s. They are sebaceous glands — oil glands — that appear in places where they are visible rather than hidden under hair follicles. On the lips, they show up as small white or yellowish dots, often in clusters along the vermillion border (the edge of the lip) or on the inside of the lips and cheeks.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 20px 0', color: '#333' }}>
                They are not caused by anything you did. They are not the result of poor hygiene, diet, or any lifestyle factor. They typically become more visible during puberty due to hormonal changes affecting the oil glands. Most people have them without ever noticing.
              </p>
              <div style={{ backgroundColor: '#e8f4f8', border: '1px solid #17a2b8', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
                <h4 style={{ color: '#17a2b8', marginBottom: '12px' }}>What Fordyce spots are not</h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {[
                    'Not herpes or any other STI',
                    'Not contagious in any way',
                    'Not caused by a virus or bacteria',
                    'Not a sign of illness or poor health',
                    'Not something you can pass to a partner',
                  ].map((point, i) => (
                    <p key={i} style={{ margin: 0, fontSize: '0.95rem', color: '#333', lineHeight: '1.5' }}>✓ {point}</p>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: 0, color: '#333' }}>
                Because they can look alarming to someone who has not seen them before — or who suddenly notices theirs — they are one of the most searched skin concerns on the internet. If you found this page by frantically googling at midnight, you are in very good company.
              </p>
            </div>
          </section>

          {/* When to get checked */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px', fontSize: '1.8rem', marginBottom: '25px' }}>
              When to Actually Get Them Checked
            </h2>
            <div style={{ backgroundColor: '#f8f9ff', border: '2px solid #667eea', borderRadius: '12px', padding: '30px', marginBottom: '20px' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 20px 0', color: '#333' }}>
                Fordyce spots do not need treatment and do not require a doctor visit unless you want one. But there are situations where getting a professional look is the right call. Go see a doctor or dermatologist if:
              </p>
              <div style={{ display: 'grid', gap: '12px' }}>
                {[
                  'The bumps are new and appeared suddenly',
                  'They are painful, itchy, or have any kind of sensation',
                  'They are blistered, weeping, or crusting over',
                  'They are growing or changing in appearance',
                  'You have any doubt at all about what they are',
                ].map((point, i) => (
                  <div key={i} style={{ backgroundColor: '#fff3cd', padding: '12px 15px', borderRadius: '6px', borderLeft: '4px solid #ffc107' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: '#f8d7da', border: '2px solid #dc3545', borderRadius: '12px', padding: '25px' }}>
              <h3 style={{ color: '#721c24', marginBottom: '12px', fontSize: '1.1rem' }}>This page is not a diagnosis</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#721c24', lineHeight: '1.6' }}>
                Nothing here should replace a look from an actual doctor or dermatologist. If something on your face is worrying you, the right move is always to get it checked. A brief in-person assessment takes minutes and gives you a real answer.
              </p>
            </div>
          </section>

          {/* Lip filler connection */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px', fontSize: '1.8rem', marginBottom: '25px' }}>
              What This Has to Do With Lip Filler
            </h2>
            <div style={{ backgroundColor: '#f8f9ff', border: '2px solid #667eea', borderRadius: '12px', padding: '30px' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 20px 0', color: '#333' }}>
                If you have Fordyce spots and are thinking about lip filler, the good news is that they are generally not a barrier. They are part of your normal lip anatomy, and qualified injectors are very familiar with them.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 20px 0', color: '#333' }}>
                A few things worth knowing:
              </p>
              <div style={{ display: 'grid', gap: '14px', marginBottom: '20px' }}>
                {[
                  {
                    title: 'Fordyce spots do not prevent lip filler',
                    desc: 'They are a normal variation in lip anatomy. Most providers have worked with patients who have them and will not treat them as a problem.'
                  },
                  {
                    title: 'Lip filler does not typically make them worse',
                    desc: 'Adding volume to the lips does not cause Fordyce spots to multiply or become more visible. That said, raising any skin concern at your consultation is always a good idea so your provider can assess your specific situation.'
                  },
                  {
                    title: 'Lip filler will not remove them',
                    desc: 'If you were hoping filler might cover or eliminate the bumps, it is unlikely to do that. The spots sit in the skin tissue itself, not below the surface where filler is placed.'
                  },
                  {
                    title: 'Your provider should know about any skin conditions on the treatment area',
                    desc: 'Even if you are confident the bumps are harmless Fordyce spots, mention them at your consultation. A qualified provider will take note and advise you if there is anything to factor in.'
                  },
                ].map((item, index) => (
                  <div key={index} style={{
                    backgroundColor: 'white', padding: '20px', borderRadius: '8px',
                    border: '1px solid #e9ecef', borderLeft: '4px solid #667eea'
                  }}>
                    <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '1rem', fontWeight: '600' }}>{item.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: '#e8f4f8', border: '1px solid #17a2b8', borderRadius: '8px', padding: '15px' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#333', lineHeight: '1.6' }}>
                  <strong>If you are dealing with something other than Fordyce spots</strong> — such as an active cold sore, skin infection, or condition you are not sure about — get that assessed by a doctor before booking any cosmetic treatment. Most providers will ask you to reschedule if there is an active skin concern on the treatment area.
                </p>
              </div>
            </div>
          </section>

          {/* Questions to ask */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px', fontSize: '1.8rem', marginBottom: '25px' }}>
              Questions Worth Raising at Your Consultation
            </h2>
            <div style={{ backgroundColor: '#f8f9ff', border: '2px solid #667eea', borderRadius: '12px', padding: '30px' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 20px 0', color: '#333' }}>
                If you are planning to get lip filler and want to bring up your skin concerns, here are some questions that can help the conversation go smoothly:
              </p>
              <div style={{ display: 'grid', gap: '12px' }}>
                {[
                  'I have some small white bumps along my lip line — can you take a look and let me know if that changes anything for treatment?',
                  'Are there any skin conditions on the treatment area I should be aware of before we proceed?',
                  'Is there anything about the condition of my lips that might affect placement or results?',
                  'What should I do if I notice anything unexpected on my lips in the days after treatment?',
                ].map((q, index) => (
                  <div key={index} style={{ backgroundColor: 'white', padding: '14px 18px', borderRadius: '8px', border: '1px solid #dee2e6', borderLeft: '4px solid #667eea' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#333', borderBottom: '3px solid #667eea', paddingBottom: '10px', fontSize: '1.8rem', marginBottom: '25px' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                {
                  question: 'What are the small white bumps on my lips?',
                  answer: 'The most common cause of small white or yellowish bumps on the lips is Fordyce spots — visible oil glands that are completely normal and harmless. They are not contagious, not an STI, and not a sign of illness. That said, any new or changing spot on your lips is worth showing to a doctor or dermatologist, who can give you a proper diagnosis.'
                },
                {
                  question: 'Are white bumps on my lips an STI?',
                  answer: 'Small white bumps that look like tiny dots clustered along the lip line or inside the lips are most commonly Fordyce spots, which are not an STI and are not contagious. However, if you have sores, blisters, or ulcers on or around your lips — particularly if they are new or painful — those are worth discussing with a doctor. When in doubt, get it checked.'
                },
                {
                  question: 'Can I still get lip filler if I have white bumps on my lips?',
                  answer: 'If your bumps are Fordyce spots, they are typically not a barrier to getting lip filler. However, any skin condition on or near the treatment area is something your provider should know about. Mention them at your consultation and let your provider assess whether any additional steps are needed before treatment.'
                },
                {
                  question: 'Will lip filler make the bumps worse?',
                  answer: 'Fordyce spots are not known to worsen from lip filler. However, this is worth raising with your provider directly. They can assess the specific situation and let you know if there is anything to be aware of based on the placement and type of treatment.'
                },
                {
                  question: 'Should I tell my provider about the bumps before booking?',
                  answer: 'Yes. Any skin condition on or near the treatment area is relevant information for your provider. A good provider will ask about your skin health during your consultation. Being upfront about anything you have noticed helps them make the right call for your specific situation.'
                },
                {
                  question: 'What are Fordyce spots?',
                  answer: 'Fordyce spots are small, visible sebaceous glands — oil glands — that appear on the lips and inner cheeks. They are completely normal, extremely common, and present in the majority of adults. They look like tiny white or pale yellow dots, often clustered along the lip border or on the inner lip. They are not contagious, not caused by any virus or bacteria, and not linked to any STI.'
                },
                {
                  question: 'Why do I suddenly notice bumps I never saw before?',
                  answer: 'Fordyce spots typically become visible during puberty when hormonal changes affect the oil glands. People often notice them suddenly after looking closely in a magnifying mirror or in a photo. They have not appeared overnight — you are just seeing something that has been there for a while.'
                },
                {
                  question: 'Can Fordyce spots be removed?',
                  answer: 'Some dermatologists offer treatments for Fordyce spots if they bother you aesthetically, but most dermatologists advise against treating something that is completely benign. If this is something you want to explore, a dermatologist is the right person to consult — not a cosmetic injector.'
                },
              ].map((faq, index) => (
                <div key={index} style={{ backgroundColor: '#fff', border: '1px solid #dee2e6', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: '#667eea', marginBottom: '10px', fontSize: '1rem', fontWeight: '600' }}>{faq.question}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#555' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#333', fontSize: '1.4rem', marginBottom: '20px' }}>Related Guides</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              {[
                { href: '/guides/lip-filler-cold-sores', label: 'Lip Filler and Cold Sores' },
                { href: '/guides/lip-filler-101', label: 'Lip Filler 101: Complete Guide' },
                { href: '/guides/lip-filler-dissolution', label: 'How to Dissolve Lip Filler' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  backgroundColor: '#f8f9ff', border: '1px solid #667eea', borderRadius: '8px',
                  padding: '15px', textDecoration: 'none', color: '#667eea',
                  fontWeight: '600', textAlign: 'center', display: 'block'
                }}>
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white', padding: '40px', borderRadius: '16px',
            textAlign: 'center', marginBottom: '30px'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '15px' }}>
              Ready to Find a Provider in Colorado?
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '25px', opacity: '0.95' }}>
              Browse our directory of lip filler providers across Colorado. Find someone who will take your questions seriously from the first conversation.
            </p>
            <Link href="/#find-providers" style={{
              backgroundColor: 'white', color: '#667eea', padding: '15px 35px',
              textDecoration: 'none', borderRadius: '8px', fontWeight: '600',
              fontSize: '1.1rem', display: 'inline-block'
            }}>
              Browse Colorado Providers
            </Link>
          </div>

          {/* Disclaimer */}
          <div style={{ backgroundColor: '#f8f9fa', border: '2px solid #6c757d', borderRadius: '8px', padding: '30px' }}>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', fontWeight: '600', color: '#495057' }}>
              Important Disclaimer
            </h4>
            <div style={{ textAlign: 'left', fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 15px 0' }}>
                <strong>Educational Content Only:</strong> This guide provides general educational information about common lip skin variations and does not constitute medical or dermatological advice. It does not address any individual{"'"}s specific health situation and should not be used as the basis for any medical decision.
              </p>
              <p style={{ margin: '0 0 15px 0' }}>
                <strong>See a Doctor for Diagnosis:</strong> Only a licensed physician or dermatologist can diagnose what is on your skin. If you have any concern about a spot, bump, or sore on your lips, the right step is to get it looked at in person.
              </p>
              <p style={{ margin: '0 0 15px 0' }}>
                <strong>Verify Provider Credentials:</strong> Check all provider credentials independently through the Colorado DORA database before scheduling any procedure.
              </p>
              <p style={{ margin: 0 }}>
                <strong>No Guarantees:</strong> Treatment outcomes and suitability vary by individual. Always review informed consent documentation carefully before proceeding with any cosmetic treatment.
              </p>
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
}
