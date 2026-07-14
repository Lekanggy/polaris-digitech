/**
 * TrainingSupportPage — Service sub-page #5
 * Training and Technical Support
 * 3 sections + Footer:
 *   S1 — Hero: title + description + placeholder card + bottom paragraph
 *   S2 — Key Features only (3 cards, NO stats row)
 *   S3 — Full-width placeholder card (white bg)
 *   Footer
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import bgpro from '../../../assets/bgpro.png';
import ft2 from '../../../assets/ft2.png';
import fb2 from '../../../assets/fb2.png';

const satoshi = 'Satoshi, Inter, sans-serif';

const ICON_COLOR = '#D7B56D';
const ICON_SIZE = { width: 30, height: 30 };
const SW = '1.5';

// ── Icons ─────────────────────────────────────────────────────────────────
function GeoIcon() {
  return (
    <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: <GeoIcon />,
    title: 'Software Training',
    description: 'This involves training on Polaris Data Collector App.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Bespoke Solutions Training',
    description: 'These consists of; EGIS & Coverage Locator Application.',
  },
  {
    icon: <MonitorIcon />,
    title: 'Hardware Training',
    description: 'ArcGIS, Survey Equipment/Surveying.',
  },
];

// ── Section 2: Key Features (no stats) ───────────────────────────────────
function KeyFeaturesSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `url(${bgpro})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: isMobile ? '48px' : '80px',
        paddingBottom: isMobile ? '48px' : '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: isMobile ? 'clamp(28px, 8vw, 40px)' : '64px',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: isMobile ? '28px' : '48px',
          }}
        >
          Key Features
        </motion.h2>

        {/* card grid — 1 col on mobile, 3 on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '24px',
          }}
        >
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.08 }}
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                minHeight: isMobile ? 'auto' : '216px',
              }}
            >
              <div style={{ width: '30px', height: '30px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {feat.icon}
              </div>
              <h3 style={{ fontFamily: satoshi, fontWeight: 500, fontSize: '16px', lineHeight: '140%', color: '#FFFFFF', margin: 0 }}>
                {feat.title}
              </h3>
              <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '150%', color: '#CCCCCC', margin: 0 }}>
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 3: standalone placeholder card ────────────────────────────────
function PlaceholderSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const containerWidth = isMobile ? '94%' : '90%';
  const imageHeight = isMobile ? '240px' : isTablet ? '380px' : 'clamp(560px, 70vh, 860px)';

  return (
    <section
      ref={ref}
      style={{ background: '#FFFFFF', paddingTop: isMobile ? '48px' : '80px', paddingBottom: isMobile ? '48px' : '80px' }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            width: '100%',
            height: imageHeight,
            borderRadius: isMobile ? '16px' : '24px',
            overflow: 'hidden',
            background: '#EBECF6',
          }}
        >
          <img
            src={fb2}
            alt="Training and Technical Support showcase"
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function TrainingSupportPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Hero with bottom paragraph */}
      <ServiceSubHero
        title="Training and Technical Support"
        description="Polaris Digitech Limited offers a comprehensive range of training services to help individuals, businesses and organisations enhance their productivity, efficiency, and profitability. With years of experience in the industry, Polaris Digitech Limited has developed a reputation for providing high-quality and effective training solutions that cater to the unique needs of each client. Our training services cover a wide range of areas, including technical training, software training, solutions training, business analysis, and many more. We work closely with our clients to understand their specific needs and deliver customised training programs that help them achieve their goals. One of the key benefits of training services offered by Polaris Digitech Limited is our ability to provide on-site as well as online training programs."
        bottomText="This flexibility allows clients to choose the best training option that fits their schedule and budget. Our team of expert trainers and industry professionals use the latest training techniques and technologies to provide engaging and interactive training sessions that keep learners motivated and informed. Moreover, we provide post-training support to ensure that learners can apply their newly acquired skills and knowledge to their job roles effectively. Overall, Polaris Digitech Limited's training services are an excellent choice for businesses and individuals looking to improve their workforce's skills and knowledge and achieve long-term success."
        image={ft2}
        imageAlt="Training and Technical Support"
      />

      {/* Section 2 — Key Features (3 cards, no stats) */}
      <KeyFeaturesSection />

      {/* Section 3 — Placeholder card */}
      <PlaceholderSection />

      <Footer />
    </div>
  );
}
