/**
 * GoogleWorkspaceEducationPage
 * Sections: Navbar → IntroSection → QuoteSection → PricingSection → KeyFeatures → ProductShowcase → Footer
 */
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import ProductQuote from './product-detail/ProductQuote';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import gen6 from '../../assets/gen6.png';
import top3 from '../../assets/top3.png';
import bot3 from '../../assets/bot3.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Key features ───────────────────────────────────────────────────────────
const GWE_FEATURES = [
  {
    title: 'Communication Tools',
    description:
      'Google Workspace for Education provides communication tools such as Gmail, Google Meet, and Google Chat that can be used to facilitate communication between students, teachers, and administrators.',
  },
  {
    title: 'Cloud Storage',
    description:
      'Google Drive offers unlimited cloud storage for educational institutions, allowing students and teachers to store, share, and collaborate on files from anywhere.',
  },
  {
    title: 'Classroom Management',
    description:
      'Google Classroom provides a centralised hub for teachers to manage assignments, distribute materials, and track student progress in a streamlined environment.',
  },
  {
    title: 'Security and Privacy',
    description:
      'Google Workspace for Education includes robust security features to protect student data and ensure compliance with educational privacy regulations such as FERPA and COPPA.',
  },
  {
    title: 'Collaboration',
    description:
      'Google Workspace facilitates collaboration by providing tools like Docs, Sheets, and Slides that allow multiple users to work on the same document simultaneously.',
  },
  {
    title: 'Accessibility',
    description:
      'Google Workspace for Education includes accessibility features such as screen readers, voice typing, and high contrast mode to ensure all students can participate fully.',
  },
];

// ── Section 1: Intro (wider placeholder box) ──────────────────────────────
function IntroSection({ isMobile }: { isMobile: boolean }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section
      ref={ref}
      style={{ background: '#fff', paddingTop: '160px', paddingBottom: '80px' }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr',
          gap: isMobile ? '32px' : 'clamp(40px, 6vw, 80px)',
          alignItems: 'stretch',
        }}
      >
        {/* Left — top image, square-ish, no cropping */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: '#E8F5E9',
            borderRadius: '24px',
            overflow: 'hidden',
            width: '100%',
            aspectRatio: '1 / 1',
          }}
        >
          <img
            src={top3}
            alt="Google Workspace for Education"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Right — title + description */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1
            style={{
              fontFamily: satoshi,
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: '115%',
              letterSpacing: '-0.02em',
              color: '#283172',
              marginBottom: '24px',
            }}
          >
            Google Workspace for Education
          </h1>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '170%',
              color: '#46485F',
            }}
          >
            Google Workspace for Education is a platform that provides educational tools and services
            to students, teachers, and schools. It integrates with Google's suite of apps to enhance
            learning experiences, improve collaboration, and streamline administrative tasks. From
            Gmail and Google Meet to Classroom and Drive, every tool is designed to support modern
            education — whether in the classroom or remotely. Schools benefit from centralised
            management, robust security, and compliance with educational privacy regulations, making
            it the trusted choice for institutions worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 2: Quote ─────────────────────────────────────────────────────

// ── Section 3: Pricing ────────────────────────────────────────────────────
interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  delay: number;
  isVisible: boolean;
}

function PlanCard({
  name,
  price,
  period,
  features,
  highlighted = false,
  delay,
  isVisible,
}: PlanCardProps) {
  const circleBg   = highlighted ? '#010527' : '#C2D0F6';
  const checkColor = highlighted ? '#FFFFFF' : '#283172';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      style={{
        background: highlighted ? '#D7B56D' : '#FFFFFF',
        borderRadius: '20px',
        padding: '40px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        boxShadow: highlighted
          ? '0 8px 32px rgba(215,181,109,0.35)'
          : '0 2px 16px rgba(0,0,0,0.07)',
        flex: 1,
        minHeight: '560px',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
    >
      {/* Top block: plan name + price + CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Plan name */}
        <p
          style={{
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: '15px',
            color: highlighted ? '#010527' : '#283172',
            margin: 0,
          }}
        >
          {name}
        </p>

        {/* Price row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <span
            style={{
              fontFamily: satoshi,
              fontWeight: 700,
              fontSize: '52px',
              lineHeight: '100%',
              color: highlighted ? '#010527' : '#283172',
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '15px',
              color: highlighted ? '#010527' : '#46485F',
            }}
          >
            {period}
          </span>
        </div>

        {/* CTA button */}
        <button
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '8px',
            border: highlighted ? 'none' : '1.5px solid #283172',
            background: highlighted ? '#010527' : 'transparent',
            color: highlighted ? '#FFFFFF' : '#283172',
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: '15px',
            cursor: 'pointer',
            transition: 'opacity 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Get Started Now
        </button>
      </div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: highlighted
            ? 'rgba(1,5,39,0.2)'
            : 'rgba(40,49,114,0.15)',
        }}
      />

      {/* Feature list */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {features.map(feat => (
          <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: circleBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '1px',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6l3 3 5-5"
                  stroke={checkColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              style={{
                fontFamily: satoshi,
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '155%',
                color: highlighted ? '#010527' : '#46485F',
              }}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PricingSection({ isMobile }: { isMobile: boolean }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const plans = [
    {
      name: 'Education Fundamentals',
      price: '$3',
      period: '/Month',
      highlighted: false,
      features: [
        'Custom and secure business email',
        '100 participant video meetings',
        'Pooled storage per user*',
        'Security and management controls',
        'Standard Support',
      ],
    },
    {
      name: 'Education Standard',
      price: '$4',
      period: '/Month',
      highlighted: true,
      features: [
        'Custom and secure business email',
        '150 participant video meetings + recording',
        '100 TB pooled storage',
        'Security and management controls',
        'Standard Support (paid upgrade to Enhanced Support)',
      ],
    },
    {
      name: 'Education Plus',
      price: '$5',
      period: '/Month',
      highlighted: false,
      features: [
        'Custom and secure business email + eDiscovery, retention',
        '500 participant video meetings + recording, attendance tracking',
        '5 TB pooled storage per user*',
        'Enhanced security and management controls, including Vault',
        'Standard Support (paid upgrade to Enhanced Support)',
      ],
    },
  ];

  return (
    <section
      ref={ref}
      style={{ background: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <h2
            style={{
              fontFamily: satoshi,
              fontWeight: 600,
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#283172',
              marginBottom: '16px',
            }}
          >
            Choose the right Google Workspace for Education edition
          </h2>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '160%',
              color: '#46485F',
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            Use flexible, secure tools at no cost with Google Workspace for Education. Each edition
            is designed to meet the needs of different educational institutions.
          </p>
        </motion.div>

        {/* Plan cards — single row, no wrapping */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              highlighted={plan.highlighted}
              delay={0.1 + i * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function GoogleWorkspaceEducationPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro */}
      <IntroSection isMobile={isMobile} />

      {/* Section 2 — Quote */}
      <ProductQuote
        image={gen6}
        quote="A platform that provides educational tools and services to students, teachers, and schools."
      />

      {/* Section 3 — Pricing */}
      <PricingSection isMobile={isMobile} />

      {/* Section 4 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of Google Workspace for Education"
        sectionDescription="Google Workspace for Education is a platform that provides educational tools and services to students, teachers, and schools. It integrates with Google's suite of apps to enhance learning experiences, improve collaboration, and streamline administrative tasks."
        features={GWE_FEATURES}
      />

      {/* Section 5 — Showcase */}
      <ProductShowcase image={bot3} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
