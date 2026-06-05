/**
 * LandSurveyingPage — Service sub-page #2
 * 3 sections + Footer:
 *   S1 — Hero: title + description + placeholder card + bottom paragraph
 *   S2 — Stats + Key Features (5 cards, 3+2 layout)
 *   S3 — Full-width placeholder card (white bg)
 *   Footer
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import ServiceSubStatsFeatures from './ServiceSubStatsFeatures';
import car2 from '../../../assets/ft4.png';
import fb4 from '../../../assets/fb4.png';

const STATS = [
  { value: '20+', label: 'No of Corporate Clients' },
  { value: '10+', label: 'Products shipped' },
  { value: '50+', label: 'Projects completed for this service' },
];

const FEATURES = [
  {
    icon: 'geo' as const,
    title: 'Centimeter Resolution Mapping',
    description:
      'At PDL, we always lays emphasis on the use of bespoke algorithms to capture every bit of information or details up to 0.1cm map products. Our mapping experts always provide vast and robust imagery that can be used for planning, negotiation, and assessments thereby paving the way for unrivalled access to data-led spatial decision support systems.',
  },
  {
    icon: 'globe' as const,
    title: 'Drone Mapping',
    description:
      'At Polaris Digitech Limited we equipped with vast experience in satellite image acquisition, with the simple use of remote sources, our drones are equipped with high-resolution Unmanned Aerial Vehicle (UAV) cameras that are capable of collecting the very best geo-rectified and colour-corrected images that are available with no cloud cover.',
  },
  {
    icon: 'monitor' as const,
    title: 'Drone Data Processing and Mapping',
    description:
      'At PDL, we conduct drone data processing and mapping services with comprises of the following; Orthophoto (mapping), Contour / Elevation, Digital surface model and digital, Terrain model, Point cloud, Slope, Detailed 2D and 3D models.',
  },
  {
    icon: 'geo' as const,
    title: 'Drone Survey',
    description:
      'Our drone services consist of; Topographic survey, Cadastral survey, Engineering survey, Route survey, Hydrography survey, Land survey.',
  },
  {
    icon: 'globe' as const,
    title: 'Drone Inspection',
    description:
      'Our drone inspection services consists of; Construction (roads, buildings) Quick on-site of the drone inspection system.',
  },
];

// ── Section 3: standalone full-width placeholder card ─────────────────────
function PlaceholderSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
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
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            width: '100%',
            height: isMobile ? '220px' : '500px',
            borderRadius: isMobile ? '16px' : '24px',
            overflow: 'hidden',
            background: '#EBECF6',
          }}
        >
          <img
            src={fb4}
            alt="Land Surveying showcase"
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function LandSurveyingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Hero with bottom paragraph */}
      <ServiceSubHero
        title="Land Surveying"
        description="Our Mapping services involves the creation of digital maps that accurately represent a particular area's features, including its topography, contours, and elevations. These maps are created using aerial photography, satellite imagery, and GIS technology. Our Surveying services, on the other hand, utilizes the measurement and analysis of land, buildings, and infrastructure using specialized equipment and technology. These services are used to create topographical maps, determine property boundaries, and survey construction sites."
        bottomText="Similarly, our drone services are becoming increasingly popular in the mapping and surveying industry because of our willingness to incorporate drones as unmanned aerial vehicles that can capture high-quality aerial imagery and video footage. They are used in various applications, including land mapping, 3D modelling, building inspections, and surveying. Overall, Our mapping, survey, and drone services are essential in various industries, providing accurate data, and imagery that aids in decision-making processes, planning, and analysis."
        image={car2}
        imageAlt="Land Surveying"
      />

      {/* Section 2 — Stats + Key Features (5 cards) */}
      <ServiceSubStatsFeatures
        stats={STATS}
        features={FEATURES}
        featuresHeading="Key Features"
      />

      {/* Section 3 — Placeholder card */}
      <PlaceholderSection />

      <Footer />
    </div>
  );
}
