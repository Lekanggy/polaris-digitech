import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import ProductQuote from './product-detail/ProductQuote';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useGraphQLQuery } from '../../hooks/useGraphQLQuery';
import { partnersProductQuery } from '../../services/queries/partnerProduct';
import type { PartnersProductsData } from '../../services/queries/partnerProduct';
import { strapiUrl } from '../../services/queries/partnerProduct';
import { gql } from '../../services/apolloClient';
import gen6 from '../../assets/gen6.png';
import top3 from '../../assets/top3.png';
import bot3 from '../../assets/bot3.png';

const PARTNERS_QUERY = gql(partnersProductQuery);
const satoshi = 'Satoshi, Inter, sans-serif';

// ── Fallbacks ──────────────────────────────────────────────────────────────
const FALLBACK_FEATURES = [
  { title: 'Communication Tools', description: 'Google Workspace for Education provides communication tools such as Gmail, Google Meet, and Google Chat for students, teachers, and administrators.' },
  { title: 'Cloud Storage', description: 'Google Drive offers unlimited cloud storage for educational institutions, allowing students and teachers to store, share, and collaborate on files from anywhere.' },
  { title: 'Classroom Management', description: 'Google Classroom provides a centralised hub for teachers to manage assignments, distribute materials, and track student progress.' },
  { title: 'Security and Privacy', description: 'Google Workspace for Education includes robust security features to protect student data and ensure compliance with educational privacy regulations.' },
  { title: 'Collaboration', description: 'Google Workspace facilitates collaboration by providing tools like Docs, Sheets, and Slides that allow multiple users to work simultaneously.' },
  { title: 'Accessibility', description: 'Google Workspace for Education includes accessibility features such as screen readers, voice typing, and high contrast mode.' },
];
const FALLBACK_PLANS = [
  {
    name: 'Education Fundamentals', price: '$3', period: '/Month', highlighted: false,
    features: ['Custom and secure business email', '100 participant video meetings', 'Pooled storage per user*', 'Security and management controls', 'Standard Support'],
  },
  {
    name: 'Education Standard', price: '$4', period: '/Month', highlighted: true,
    features: ['Custom and secure business email', '150 participant video meetings + recording', '100 TB pooled storage', 'Security and management controls', 'Standard Support (paid upgrade to Enhanced Support)'],
  },
  {
    name: 'Education Plus', price: '$5', period: '/Month', highlighted: false,
    features: ['Custom and secure business email + eDiscovery, retention', '500 participant video meetings + recording, attendance tracking', '5 TB pooled storage per user*', 'Enhanced security and management controls, including Vault', 'Standard Support (paid upgrade to Enhanced Support)'],
  },
];
const FALLBACK_INTRO_DESC = "Google Workspace for Education is a platform that provides educational tools and services to students, teachers, and schools. It integrates with Google's suite of apps to enhance learning experiences, improve collaboration, and streamline administrative tasks.";
const FALLBACK_KF_TITLE   = 'Key Features of Google Workspace for Education';
const FALLBACK_KF_DESC    = "Google Workspace for Education is a platform that provides educational tools and services to students, teachers, and schools. It integrates with Google's suite of apps to enhance learning experiences.";
const FALLBACK_QUOTE      = 'A platform that provides educational tools and services to students, teachers, and schools.';
const FALLBACK_PRICING_TITLE = 'Choose the right Google Workspace for Education edition';
const FALLBACK_PRICING_DESC  = 'Use flexible, secure tools at no cost with Google Workspace for Education. Each edition is designed to meet the needs of different educational institutions.';

// ── Shared plan card ───────────────────────────────────────────────────────
interface PlanCardProps {
  name: string; price: string; period: string;
  features: string[]; highlighted?: boolean;
  delay: number; isVisible: boolean;
}

function PlanCard({ name, price, period, features, highlighted = false, delay, isVisible }: PlanCardProps) {
  const circleBg   = highlighted ? '#010527' : '#C2D0F6';
  const checkColor = highlighted ? '#FFFFFF' : '#283172';
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }}
      style={{
        background: highlighted ? '#D7B56D' : '#FFFFFF', borderRadius: '20px',
        padding: '40px 24px', display: 'flex', flexDirection: 'column', gap: '40px',
        boxShadow: highlighted ? '0 8px 32px rgba(215,181,109,0.35)' : '0 2px 16px rgba(0,0,0,0.07)',
        flex: 1, minHeight: '560px', boxSizing: 'border-box', flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ fontFamily: satoshi, fontWeight: 600, fontSize: '15px', color: highlighted ? '#010527' : '#283172', margin: 0 }}>{name}</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <span style={{ fontFamily: satoshi, fontWeight: 700, fontSize: '52px', lineHeight: '100%', color: highlighted ? '#010527' : '#283172' }}>{price}</span>
          <span style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', color: highlighted ? '#010527' : '#46485F' }}>{period}</span>
        </div>
        <button
          style={{ width: '100%', padding: '14px', borderRadius: '8px', border: highlighted ? 'none' : '1.5px solid #283172', background: highlighted ? '#010527' : 'transparent', color: highlighted ? '#FFFFFF' : '#283172', fontFamily: satoshi, fontWeight: 600, fontSize: '15px', cursor: 'pointer', transition: 'opacity 200ms' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >Get Started Now</button>
      </div>
      <div style={{ height: '1px', background: highlighted ? 'rgba(1,5,39,0.2)' : 'rgba(40,49,114,0.15)' }} />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {features.map((feat, fi) => (
          <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: circleBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={checkColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '14px', lineHeight: '155%', color: highlighted ? '#010527' : '#46485F' }}>{feat}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ── Intro section ──────────────────────────────────────────────────────────
function IntroSection({ isMobile, introImage, description }: { isMobile: boolean; introImage: string; description: string }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} style={{ background: '#fff', paddingTop: '160px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: isMobile ? '32px' : 'clamp(40px, 6vw, 80px)', alignItems: 'stretch' }}>
        <motion.div initial={{ opacity: 0, x: -32 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} style={{ background: '#E8F5E9', borderRadius: '24px', overflow: 'hidden', width: '100%', aspectRatio: '1 / 1' }}>
          <img src={introImage} alt="Google Workspace for Education" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 32 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 style={{ fontFamily: satoshi, fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '115%', letterSpacing: '-0.02em', color: '#283172', marginBottom: '24px' }}>Google Workspace for Education</h1>
          <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '170%', color: '#46485F' }}>{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Pricing section ────────────────────────────────────────────────────────
interface PricingSectionProps {
  isMobile: boolean; title: string; description: string;
  plans: { name: string; price: string; period: string; highlighted: boolean; features: string[] }[];
}

function PricingSection({ isMobile, title, description, plans }: PricingSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section ref={ref} style={{ background: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontFamily: satoshi, fontWeight: 600, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '120%', letterSpacing: '-0.02em', color: '#283172', marginBottom: '16px' }}>{title}</h2>
          <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '16px', lineHeight: '160%', color: '#46485F', maxWidth: '620px', margin: '0 auto' }}>{description}</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px', alignItems: 'flex-start' }}>
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} name={plan.name} price={plan.price} period={plan.period} features={plan.features} highlighted={plan.highlighted} delay={0.1 + i * 0.1} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function GoogleWorkspaceEducationPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { data } = useGraphQLQuery<PartnersProductsData>(PARTNERS_QUERY);

  const cms = (data?.partnersProducts ?? []).find(
    p => p.route === 'solutions/google-workspace-education' || p.route === '/solutions/google-workspace-education'
  );

  const introImage  = strapiUrl(cms?.introsection?.leftImage?.url) ?? top3;
  const introDesc   = cms?.description ?? FALLBACK_INTRO_DESC;
  const quoteText   = cms?.quote?.quote ?? FALLBACK_QUOTE;
  const quoteImage  = strapiUrl(cms?.quote?.image?.url) ?? gen6;
  const kfTitle     = cms?.features?.sectionTitle ?? FALLBACK_KF_TITLE;
  const kfDesc      = cms?.features?.sectionDescription ?? FALLBACK_KF_DESC;
  const kfFeatures  = (cms?.features?.features ?? []).length > 0
    ? (cms!.features!.features!).map(f => ({ title: f.title ?? '', description: f.description ?? '' }))
    : FALLBACK_FEATURES;
  const showcaseImg = strapiUrl(cms?.showcase?.image?.url) ?? bot3;

  // Pricing — CMS plans when available, fallback to hardcoded
  const pricingTitle = cms?.pricing?.title ?? FALLBACK_PRICING_TITLE;
  const pricingDesc  = cms?.pricing?.description ?? FALLBACK_PRICING_DESC;
  const pricingPlans = (cms?.pricing?.plans ?? []).length > 0
    ? (cms!.pricing!.plans!).map(p => ({
        name:        p.name        ?? '',
        price:       p.price       ?? '',
        period:      p.period      ?? '',
        highlighted: p.highlighted ?? false,
        features:    (p.features ?? []).map(f => f.text ?? '').filter(Boolean),
      }))
    : FALLBACK_PLANS;

  return (
    <div className="min-h-screen">
      <Navbar />
      <IntroSection isMobile={isMobile} introImage={introImage} description={introDesc} />
      <ProductQuote image={quoteImage} quote={quoteText} />
      <PricingSection isMobile={isMobile} title={pricingTitle} description={pricingDesc} plans={pricingPlans} />
      <KeyFeatures sectionTitle={kfTitle} sectionDescription={kfDesc} features={kfFeatures} />
      <ProductShowcase image={showcaseImg} />
      <Footer />
    </div>
  );
}
