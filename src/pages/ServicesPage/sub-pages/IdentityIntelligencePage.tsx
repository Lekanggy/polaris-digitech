import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import ServiceSubStatsFeatures from './ServiceSubStatsFeatures';
import { useServiceData } from './useServiceData';
import ft1 from '../../../assets/ft1.png';
import fb1 from '../../../assets/fb1.png';

const HREF = '/services/identity-intelligence';

function normalizeServiceHref(href?: string) {
  if (href === '/services/intelligence-management') {
    return HREF;
  }
  return href ?? HREF;
}

const FB_STATS = [
  { value: '20+', label: 'No of Corporate Clients' },
  { value: '10+', label: 'Products shipped' },
  { value: '50+', label: 'Projects completed for this service' },
];
const FB_FEATURES = [
  { icon: 'geo' as const,     title: 'Drone Surveillance',          description: 'Polaris uses advanced drone technology to gather high-quality aerial data for surveillance, monitoring, and inspection across various sectors.' },
  { icon: 'globe' as const,   title: 'Data Collection',             description: 'Polaris gathers data from multiple sources including satellite imagery, field surveys, and IoT sensors to build comprehensive geospatial datasets.' },
  { icon: 'monitor' as const, title: 'Data Processing and Mapping', description: 'We conduct drone data processing including Orthophoto, Contour/Elevation, Digital surface model, Point cloud, Slope, and 2D/3D models.' },
  { icon: 'geo' as const,     title: 'Drone Survey',                description: 'Our drone services consist of Topographic, Cadastral, Engineering, Route, Hydrography, and Land surveys.' },
  { icon: 'globe' as const,   title: 'GIS Systems and Services',    description: 'Polaris uses geographic information systems to capture, store, analyse, and present spatial data for informed location-based decisions.' },
];

function ShowcaseSection({ image }: { image: string }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const imageHeight = isMobile ? '240px' : isTablet ? '380px' : 'clamp(560px, 70vh, 860px)';
  return (
    <section ref={ref} style={{ background: '#FFFFFF', paddingTop: isMobile ? '48px' : '80px', paddingBottom: isMobile ? '48px' : '80px' }}>
      <div style={{ width: isMobile ? '94%' : '90%', maxWidth: '1600px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ width: '100%', height: imageHeight, borderRadius: isMobile ? '16px' : '24px', overflow: 'hidden', background: '#EBECF6' }}
        >
          <img src={image} alt="Identity Intelligence showcase" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
        </motion.div>
      </div>
    </section>
  );
}

export default function IdentityIntelligencePage() {
  const svc = useServiceData(normalizeServiceHref(HREF));
  const stats    = svc.stats.length    > 0 ? svc.stats    : FB_STATS;
  const features = svc.features.length > 0 ? svc.features : FB_FEATURES;
  const showcaseImg = svc.showcaseImages[0] ?? fb1;

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServiceSubHero
        title={svc.title ?? 'Identity Intelligence Management'}
        description={svc.description ?? 'Our Identity Intelligence Management service leverages advanced geospatial and data analytics technologies to help organisations verify, track, and manage identities with precision.'}
        image={svc.heroImage ?? ft1}
        imageAlt="Identity Intelligence Management"
        bottomText={svc.bottomText}
      />
      <ServiceSubStatsFeatures stats={stats} features={features} featuresHeading="Key Features" />
      <ShowcaseSection image={showcaseImg} />
      <Footer />
    </div>
  );
}
