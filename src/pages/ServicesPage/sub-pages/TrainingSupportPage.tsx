import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import { useServiceData } from './useServiceData';
import type { IconName } from '../../Project/sub-pages/ProjectKeyFeatures';
import bgpro from '../../../assets/bgpro.png';
import ft2 from '../../../assets/ft2.png';
import fb2 from '../../../assets/fb2.png';

const satoshi = 'Satoshi, Inter, sans-serif';
const HREF = '/services/training-support';

// TrainingSupport has NO stats — only 3 key features
const FB_FEATURES = [
  { icon: 'geo' as const,     title: 'Software Training',         description: 'This involves training on Polaris Data Collector App.' },
  { icon: 'globe' as const,   title: 'Bespoke Solutions Training', description: 'These consist of; EGIS & Coverage Locator Application.' },
  { icon: 'monitor' as const, title: 'Hardware Training',          description: 'ArcGIS, Survey Equipment/Surveying.' },
];

const ICON_COLOR = '#D7B56D';
const ICON_SIZE = { width: 30, height: 30 };
const SW = '1.5';

function GeoIcon()     { return <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>; }
function GlobeIcon()   { return <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>; }
function MonitorIcon() { return <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>; }

const ICON_NODES: Record<string, React.ReactNode> = { geo: <GeoIcon />, globe: <GlobeIcon />, monitor: <MonitorIcon /> };

function KeyFeaturesSection({ features }: { features: Array<{ icon: IconName; title: string; description: string }> }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section ref={ref} style={{ backgroundImage: `url(${bgpro})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', paddingTop: isMobile ? '48px' : '80px', paddingBottom: isMobile ? '48px' : '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontFamily: satoshi, fontWeight: 400, fontSize: isMobile ? 'clamp(28px,8vw,40px)' : '64px', lineHeight: '120%', letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: isMobile ? '28px' : '48px' }}
        >Key Features</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '16px' : '24px' }}>
          {features.map((feat, i) => (
            <motion.div key={feat.title} initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.08 + i * 0.08 }}
              style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: isMobile ? 'auto' : '216px' }}
            >
              <div style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {ICON_NODES[feat.icon] ?? <GlobeIcon />}
              </div>
              <h3 style={{ fontFamily: satoshi, fontWeight: 500, fontSize: '16px', lineHeight: '140%', color: '#FFFFFF', margin: 0 }}>{feat.title}</h3>
              <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '150%', color: '#CCCCCC', margin: 0 }}>{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection({ image }: { image: string }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const imageHeight = isMobile ? '240px' : isTablet ? '380px' : 'clamp(560px, 70vh, 860px)';
  return (
    <section ref={ref} style={{ background: '#FFFFFF', paddingTop: isMobile ? '48px' : '80px', paddingBottom: isMobile ? '48px' : '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ width: '100%', height: imageHeight, borderRadius: isMobile ? '16px' : '24px', overflow: 'hidden', background: '#EBECF6' }}
        >
          <img src={image} alt="Training and Technical Support showcase" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
        </motion.div>
      </div>
    </section>
  );
}

export default function TrainingSupportPage() {
  const svc = useServiceData(HREF);
  // Training has no stats — use features only (fallback if CMS empty)
  const features = svc.features.length > 0 ? svc.features : FB_FEATURES;
  const showcaseImg = svc.showcaseImages[0] ?? fb2;

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServiceSubHero
        title={svc.title ?? 'Training and Technical Support'}
        description={svc.description ?? "Polaris Digitech Limited offers a comprehensive range of training services to help individuals, businesses and organisations enhance their productivity, efficiency, and profitability."}
        image={svc.heroImage ?? ft2}
        imageAlt="Training and Technical Support"
        bottomText={svc.bottomText}
      />
      <KeyFeaturesSection features={features} />
      <ShowcaseSection image={showcaseImg} />
      <Footer />
    </div>
  );
}
