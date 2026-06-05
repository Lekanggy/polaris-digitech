/**
 * GoogleMapsPage
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
import gen7 from '../../assets/gen7.png';
import top5 from '../../assets/top5.png';
import bot5 from '../../assets/bot5.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Key features ───────────────────────────────────────────────────────────
const GM_FEATURES = [
  {
    title: 'Customisation',
    description:
      'Polaris Digitech\'s Google Maps capabilities allow businesses to customise the platform to their specific needs and design. This means that the map fits seamlessly into the client\'s website and provides an intuitive user experience.',
  },
  {
    title: 'Geocoding and Address Validation',
    description:
      'The solution provides accurate geocoding and address validation with every use. This feature can help businesses confirm customer addresses and deliver products or services efficiently.',
  },
  {
    title: 'Route Optimisation',
    description:
      'Customers can access the imagery of the location in a spatial view — the range and variety of routes for planning purposes.',
  },
  {
    title: 'Real-time Location Tracking',
    description:
      'The solution allows clients to track the movement of their assets, vehicles, or people in real time. It ensures that the information is always available, accurate, and up to date, improving operational visibility.',
  },
  {
    title: 'Custom Markers and Overlays',
    description:
      'Polaris Digitech\'s Google Maps solution allows businesses to add custom markers and overlays to the map, making it easier for users to locate specific points of interest.',
  },
  {
    title: 'Street View Integration',
    description:
      'Polaris Digitech\'s Google Maps solution provides a seamless integration with Google\'s Street View, giving users a 360-degree view of any location on the map.',
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
            width: '100%',
            aspectRatio: '1 / 1',
          }}
        >
          <img
            src={top5}
            alt="Google Maps"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>

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
            Google Maps
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
            At Polaris Digitech Limited, we create software to analyse geospatial data and interpret
            spatial patterns for mapping, monitoring, and analysis purposes. We provide a category of
            geospatial solutions that leverage Google Maps to help businesses and organisations make
            better decisions. Our solutions are built on top of the Google Maps Platform, which
            provides a comprehensive set of APIs and SDKs for building location-based applications.
            We use Google Maps to help businesses and organisations manage their assets, track their
            vehicles, and deliver products and services more efficiently. Our solutions are designed
            to be scalable, reliable, and easy to use, making it simple for businesses to integrate
            location intelligence into their operations on the go.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 2: Quote ─────────────────────────────────────────────────────

// ── Page ───────────────────────────────────────────────────────────────────
export default function GoogleMapsPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro */}
      <IntroSection isMobile={isMobile} />

      {/* Section 2 — Quote */}
      <ProductQuote
        image={gen7}
        quote="Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals."
      />

      {/* Section 3 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of Google Maps"
        sectionDescription="Polaris Digitech uses the Google Maps Platform to build location-based applications that help businesses manage assets, track vehicles, and deliver products and services more efficiently."
        features={GM_FEATURES}
      />

      {/* Section 4 — Showcase */}
      <ProductShowcase image={bot5} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
