/**
 * MapInfoPage
 * Sections: Navbar → IntroSection → QuoteSection → KeyFeatures → ProductShowcase → Footer
 */
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import ProductQuote from './product-detail/ProductQuote';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import gen5 from '../../assets/gen5.png';
import top2 from '../../assets/top2.png';
import bot2 from '../../assets/bot2.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Key features ───────────────────────────────────────────────────────────
const MI_FEATURES = [
  {
    title: 'Comprehensive Visualisation',
    description:
      'With MapInfo, PDL can convert virtually any spatial data into rich, interactive maps and charts. The platform provides the ability to display data at any scale, so that they can be shown within different layers of data.',
  },
  {
    title: 'Accelerated Time-to-value',
    description:
      'MapInfo Pro has been praised as one of the best GIS mapping tools on the market. It is versatile, it does not slow down, and it enables clients to make data-driven decisions faster, reducing the overall time-to-value of every engagement.',
  },
  {
    title: 'Seamless Integration',
    description:
      'MapInfo Pro is extremely customisable, and it can be integrated with other mapping software, which enables you to distribute the final output to users in the way that is most useful to them.',
  },
  {
    title: 'Trusted Solution',
    description:
      'MapInfo Pro has a long history of being trusted by widely used by academics and practitioners of varying fields. It is used across a large number of industries, from government to private sector bodies. Polaris Digitech leverages this proven and dependable platform, making it the right choice for clients who require the highest standards of data quality and power.',
  },
];

// ── Section 1: Intro ───────────────────────────────────────────────────────
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
            background: '#E8EAF6',
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '1 / 1',
            width: '100%',
            boxSizing: 'border-box',
            backgroundImage: `url(${top2})`,
            backgroundSize: '96%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
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
            Map Info
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
            MapInfo Pro is a powerful and feature-rich GIS software that provides advanced
            data visualisation, analysis, and mapping capabilities for businesses and
            organisations. MapInfo Pro enables users to create, manage, and analyse geospatial
            data, as well as to perform spatial analysis and create detailed maps. The software
            delivers advanced tools for data management, geocoding, routing, and spatial analysis,
            making it an ideal solution for businesses and organisations that need to manage and
            analyse large amounts of geospatial data, such as demographic information. MapInfo
            delivers advanced tools for data management, geocoding, routing, and spatial analysis,
            making it an ideal solution for governments, businesses, and organisations of all sizes.
            At PDL, our experts leverage MapInfo for effective mapping and location analysis,
            delivering Polaris Digitech's clients the most accurate and reliable results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 2: Quote ─────────────────────────────────────────────────────

// ── Page ───────────────────────────────────────────────────────────────────
export default function MapInfoPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro */}
      <IntroSection isMobile={isMobile} />

      {/* Section 2 — Quote */}
      <ProductQuote
        image={gen5}
        quote="Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals."
      />

      {/* Section 3 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of Map Info"
        sectionDescription="Geospatial information is an essential component of making well-informed decisions. For this reason, the way data is collected, processed, and visualised plays a critical role in helping organisations understand their environment and make better decisions. To understand how data from different locations can be combined to create a comprehensive picture, there is full dependence on GIS tools such as MapInfo to deliver the most accurate and relevant results."
        features={MI_FEATURES}
      />

      {/* Section 4 — Showcase */}
      <ProductShowcase image={bot2} borderColor="#C8D0E8" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
