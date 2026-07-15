import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import ServiceSubStatsFeatures from './ServiceSubStatsFeatures';
import { useServiceData } from './useServiceData';
import car2 from '../../../assets/ft4.png';
import fb4 from '../../../assets/fb4.png';

const HREF = '/services/land-surveying';

const FB_STATS = [
  { value: '20+', label: 'No of Corporate Clients' },
  { value: '10+', label: 'Products shipped' },
  { value: '50+', label: 'Projects completed for this service' },
];
const FB_FEATURES = [
  { icon: 'geo' as const,     title: 'Centimeter Resolution Mapping', description: 'At PDL, we use bespoke algorithms to capture every detail up to 0.1cm map products, providing unrivalled access to data-led spatial decision support systems.' },
  { icon: 'globe' as const,   title: 'Drone Mapping',                 description: 'Equipped with vast experience in satellite image acquisition, our drones capture the best geo-rectified and colour-corrected images with no cloud cover.' },
  { icon: 'monitor' as const, title: 'Drone Data Processing and Mapping', description: 'We conduct drone data processing including Orthophoto, Contour/Elevation, Digital surface model, Point cloud, Slope, and Detailed 2D and 3D models.' },
  { icon: 'geo' as const,     title: 'Drone Survey',                  description: 'Our drone services consist of Topographic survey, Cadastral survey, Engineering survey, Route survey, Hydrography survey, and Land survey.' },
  { icon: 'globe' as const,   title: 'Drone Inspection',              description: 'Our drone inspection services cover Construction (roads, buildings) and quick on-site inspection systems.' },
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
          <img src={image} alt="Land Surveying showcase" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
        </motion.div>
      </div>
    </section>
  );
}

export default function LandSurveyingPage() {
  const svc = useServiceData(HREF);
  const stats    = svc.stats.length    > 0 ? svc.stats    : FB_STATS;
  const features = svc.features.length > 0 ? svc.features : FB_FEATURES;
  const showcaseImg = svc.showcaseImages[0] ?? fb4;

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServiceSubHero
        title={svc.title ?? 'Land Surveying'}
        description={svc.description ?? 'Our Mapping services involves the creation of digital maps that accurately represent a particular area\'s features, including its topography, contours, and elevations using aerial photography, satellite imagery, and GIS technology.'}
        image={svc.heroImage ?? car2}
        imageAlt="Land Surveying"
        bottomText={svc.bottomText}
      />
      <ServiceSubStatsFeatures stats={stats} features={features} featuresHeading="Key Features" />
      <ShowcaseSection image={showcaseImg} />
      <Footer />
    </div>
  );
}
