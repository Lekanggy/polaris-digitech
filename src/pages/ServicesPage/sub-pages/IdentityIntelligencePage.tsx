/**
 * IdentityIntelligencePage — Service sub-page #4
 * Identity Intelligence Management
 * 3 sections + Footer:
 *   S1 — Hero: red bg (#FF0000), title + description + placeholder card + bottom text
 *   S2 — Stats + Key Features (5 cards)
 *   S3 — Full-width placeholder card on red bg (#FF0000)
 *   Footer
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import ServiceSubStatsFeatures from './ServiceSubStatsFeatures';
import ft1 from '../../../assets/ft1.png';
import fb1 from '../../../assets/fb1.png';

const STATS = [
  { value: '20+', label: 'No of Corporate Clients' },
  { value: '10+', label: 'Products shipped' },
  { value: '50+', label: 'Projects completed for this service' },
];

const FEATURES = [
  {
    icon: 'geo' as const,
    title: 'Drone Surveillance',
    description:
      'Polaris uses advanced drone technology to gather high-quality aerial data for surveillance, monitoring, and inspection across various sectors including infrastructure, agriculture, and security.',
  },
  {
    icon: 'globe' as const,
    title: 'Data Collection',
    description:
      'Polaris gathers data from multiple sources including satellite imagery, field surveys, and IoT sensors to build comprehensive geospatial datasets for analysis and decision-making.',
  },
  {
    icon: 'monitor' as const,
    title: 'Data Processing and Mapping',
    description:
      'Polaris conducts drone data processing and mapping services which comprises of the following; Orthophoto (mapping), Contour / Elevation, Digital surface model and digital, Terrain model, Point cloud, Slope, Detailed 2D and 3D models.',
  },
  {
    icon: 'geo' as const,
    title: 'Drone Survey',
    description:
      'Our drone services consist of; Topographic survey, Cadastral survey, Engineering survey, Route survey, Hydrography survey, Land survey.',
  },
  {
    icon: 'globe' as const,
    title: 'GIS Systems and Services',
    description:
      'Polaris uses geographic information systems to capture, store, analyse, and present spatial data, enabling organisations to make informed location-based decisions.',
  },
];

// ── Section 3: placeholder card on red bg ────────────────────────────────
function RedPlaceholderSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const containerWidth = isMobile ? '94%' : '90%';
  const imageHeight = isMobile ? '240px' : isTablet ? '380px' : 'clamp(560px, 70vh, 860px)';

  return (
    <section
      ref={ref}
      style={{  background: '#FFFFFF', paddingTop: isMobile ? '48px' : '80px', paddingBottom: isMobile ? '48px' : '80px' }}
    >
      <div
        style={{
          width: containerWidth,
          maxWidth: '1600px',
          margin: '0 auto',
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
            src={fb1}
            alt="Identity Intelligence Management showcase"
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function IdentityIntelligencePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Hero on red background */}
      <ServiceSubHero
        title="Identity Intelligence Management"
        description="Our Identity Intelligence Management service leverages advanced geospatial and data analytics technologies to help organisations verify, track, and manage identities with precision. We integrate location-based intelligence with identity data to provide comprehensive insights that support security, compliance, and operational efficiency."
        bottomText="Polaris Digitech Limited works closely with clients to understand their specific identity management challenges and deliver customised solutions that meet their goals. Our team of experts uses the latest technologies to provide accurate and reliable identity intelligence services that help organisations make informed decisions and achieve long-term success."
        //bg="#FF0000"
        // titleColor="#FFFFFF"
        // textColor="rgba(255,255,255,0.88)"
        image={ft1}
        imageAlt="Identity Intelligence Management"
      />

      {/* Section 2 — Stats + Key Features */}
      <ServiceSubStatsFeatures
        stats={STATS}
        features={FEATURES}
        featuresHeading="Key Features"
      />

      {/* Section 3 — Placeholder card on red bg */}
      <RedPlaceholderSection />

      <Footer />
    </div>
  );
}
