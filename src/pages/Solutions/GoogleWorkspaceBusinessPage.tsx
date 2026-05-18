/**
 * GoogleWorkspaceBusinessPage
 * Sections: Navbar → ProductIntro → ProductQuote → Pricing → KeyFeatures → ProductShowcase → Footer
 */
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Key features ───────────────────────────────────────────────────────────
const GWB_FEATURES = [
  {
    title: 'Custom Business Email',
    description: 'Get a professional email address using your company domain (e.g. you@yourcompany.com) powered by Gmail — trusted, secure, and easy to manage.',
  },
  {
    title: 'Video Meetings & Conferencing',
    description: 'Host HD video meetings with up to 150 participants using Google Meet, with recording, noise cancellation, and live captions built in.',
  },
  {
    title: 'Cloud Storage',
    description: 'Store, access, and share files securely from anywhere with Google Drive. Pooled storage shared across your organisation keeps everyone connected.',
  },
  {
    title: 'Collaborative Productivity Tools',
    description: 'Work together in real time on Docs, Sheets, and Slides — no version conflicts, no email attachments, just seamless collaboration.',
  },
  {
    title: 'Security & Management Controls',
    description: 'Centralised admin console gives IT teams full visibility and control over users, devices, and data — with advanced security policies built in.',
  },
  {
    title: 'Google Chat & Spaces',
    description: 'Communicate instantly with direct messages and group spaces. Integrate tasks, files, and meetings directly into your conversations.',
  },
  {
    title: 'AppSheet & App Integration',
    description: 'Build no-code apps on top of your data with AppSheet, and connect Google Workspace to thousands of third-party tools via APIs and Marketplace.',
  },
  {
    title: 'Standard Support',
    description: 'Access 24/7 support from Google specialists, with the option to upgrade to Enhanced Support for faster response times and dedicated assistance.',
  },
];

// ── Section 1: Intro (custom — wider placeholder box) ─────────────────────
function IntroSection() {
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
          // Wider left column for the placeholder box
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'stretch',
        }}
      >
        {/* Left — larger placeholder box */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: '#E8EAF6',
            borderRadius: '24px',
            minHeight: '380px',
          }}
        />

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
            Google Workspace for Business
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
            This is an efficient platform that handles the address verification and management needs of clients with large customer datasets. Combining both web and mobile interfaces aligns the activities of back-office administrators and the field workers who conduct the physical verification of the addresses. Our address management portal was designed particularly for the Nigerian address landscape as the centre of attraction and hence, it is capable of leveraging geospatial technology that can be used to eliminate traditional issues of inaccurate and inappropriate addressing in the country. Our portal serves as an avenue for where exchange of requests and verified reports that exist between the Client and service provider so as to minimise the level of human interaction and dependency, thereby reducing the errors that are associated with data entry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 2: Quote (pure gradient background, no image) ─────────────────
function QuoteSection() {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(102,102,102,0.6) 0%, rgba(0,0,0,0.6) 62.5%)',
        // Solid dark base so the gradient reads correctly
        backgroundColor: '#0d1b3e',
      }}
    >
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 500,
          fontSize: 'clamp(22px, 3vw, 40px)',
          lineHeight: '150%',
          letterSpacing: '-0.01em',
          textAlign: 'center',
          color: '#FFFFFF',
          maxWidth: '1200px',
          padding: '100px clamp(24px, 5vw, 80px)',
          margin: 0,
        }}
      >
        A one-stop shop tool for everything your business needs in today's Digital world.
      </p>
    </section>
  );
}

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

function PlanCard({ name, price, period, features, highlighted = false, delay, isVisible }: PlanCardProps) {
  // Bullet styles per design spec
  // Outer cards: circle bg #C2D0F6, blue checkmark
  // Middle (highlighted) card: circle bg #010527, white checkmark
  const circleBg  = highlighted ? '#010527' : '#C2D0F6';
  const checkColor = highlighted ? '#FFFFFF' : '#283172';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      style={{
        background: highlighted ? '#D7B56D' : '#FFFFFF',
        borderRadius: '20px',
        // Design spec: padding 40px top/bottom, 24px left/right, gap 40px
        padding: '40px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        boxShadow: highlighted
          ? '0 8px 32px rgba(215,181,109,0.35)'
          : '0 2px 16px rgba(0,0,0,0.07)',
        // Flex: 1 so all 3 cards share the row equally — no fixed width
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
      <div style={{ height: '1px', background: highlighted ? 'rgba(1,5,39,0.2)' : 'rgba(40,49,114,0.15)' }} />

      {/* Feature list */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {features.map((feat) => (
          <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            {/* Bullet circle with checkmark */}
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

function PricingSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const plans = [
    {
      name: 'Business Starter',
      price: '$6',
      period: '/ Month',
      highlighted: false,
      features: [
        'Custom and secure business email',
        '100 participant video meetings',
        '30 GB pooled storage per user*',
        'Security and management controls',
        'Standard Support',
      ],
    },
    {
      name: 'Business Standard',
      price: '$18',
      period: '/ Month',
      highlighted: true,
      features: [
        'Custom and secure business email',
        '150 participant video meetings + recording',
        '2 TB pooled storage per user*',
        'Security and management controls',
        'Standard Support (paid upgrade to Enhanced Support)',
      ],
    },
    {
      name: 'Education Plus',
      price: '$5',
      period: '/ Month',
      highlighted: false,
      features: [
        'Custom and secure business email + eDiscovery, retention',
        '500 participant video meetings + recording, attendance tracking',
        '5 TB pooled storage per user*',
        'Enhanced security and management controls, including Vault and advanced endpoint management',
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
            Choose your Google Workspace pricing plan.
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
            Use flexible, secure tools at no cost with Google Workspace. Google Workspace provides flexible pooled storage per user that is shared across the organisation.
          </p>
        </motion.div>

        {/* Plan cards — single row, no wrapping */}
        <div
          style={{
            display: 'flex',
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
export default function GoogleWorkspaceBusinessPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro (wider placeholder box) */}
      <IntroSection />

      {/* Section 2 — Quote (pure gradient, no image) */}
      <QuoteSection />

      {/* Section 3 — Pricing */}
      <PricingSection />

      {/* Section 4 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of Google Workspace for Business"
        sectionDescription="The Polaris Data Collector (PDC) is a tool for gathering real-time data through customised forms. It's a geo-digital system, storing both qualitative and quantitative data electronically. Benefits include eliminating paper surveys and quick data export for analysis. It efficiently manages large datasets, ideal for researchers focusing on analysis over manual entry."
        features={GWB_FEATURES}
      />

      {/* Section 5 — Showcase */}
      <ProductShowcase />

      {/* Footer */}
      <Footer />
    </div>
  );
}
