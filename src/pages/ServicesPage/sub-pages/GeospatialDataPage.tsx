/**
 * GeospatialDataPage — Service sub-page #3
 * Geo-Spatial Data Acquisition Management
 * 3 sections + Footer — same structure as Land Surveying.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import ServiceSubStatsFeatures from './ServiceSubStatsFeatures';

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

// ── Section 3: standalone full-width placeholder card ─────────────────────
function PlaceholderSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      style={{ background: '#FFFFFF', paddingTop: '0', paddingBottom: '80px' }}
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
            minHeight: '360px',
            borderRadius: '24px',
            background: '#EBECF6',
          }}
        />
      </div>
    </section>
  );
}

export default function GeospatialDataPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Hero with bottom paragraph */}
      <ServiceSubHero
        title="Geo-Spatial Data Acquisition Management"
        description="Our Mapping services involves the creation of digital maps that accurately represent a particular area's features, including its topography, contours, and elevations. These maps are created using aerial photography, satellite imagery, and GIS technology. Our Surveying services, on the other hand, utilizes the measurement and analysis of land, buildings, and infrastructure using specialized equipment and technology."
        bottomText="These services are used to create topographical maps, determine property boundaries, and survey construction sites. Similarly, our drone services are becoming increasingly popular in the mapping and surveying industry because of our willingness to incorporate drones as unmanned aerial vehicles that can capture high-quality aerial imagery and video footage. They are used in various applications, including land mapping, 3D modelling, building inspections, and surveying. Overall, Our mapping, survey, and drone services are essential in various industries, providing accurate data, and imagery that aids in decision-making processes, planning, and analysis."
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
