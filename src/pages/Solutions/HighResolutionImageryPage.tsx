/**
 * HighResolutionImageryPage
 * Sections: Navbar → IntroSection → QuoteSection → KeyFeatures → ProductShowcase → Footer
 */
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Key features ───────────────────────────────────────────────────────────
const HRI_FEATURES = [
  {
    title: 'High Resolution',
    description:
      'Polaris Digitech provides satellite and aerial imagery at very high spatial resolutions of up to 30 cm, which means the smallest details can be detected.',
  },
  {
    title: 'Varieties of Imaging Sensors',
    description:
      'Varieties of imaging sensors are available, including optical, multispectral, hyperspectral, and SAR/Radar platforms, allowing us to select the best sensor for every application.',
  },
  {
    title: 'Rapid Delivery',
    description:
      'Current and accurate file imagery of the required location is delivered within the range of one to two working days of the order being placed.',
  },
  {
    title: 'Wide Area Coverage',
    description:
      'Polaris Digitech High-Resolution Imagery covers a wide area in a single pass, making it cost-effective to capture and analyse large territories.',
  },
  {
    title: 'Customisation',
    description:
      'The imagery can be customised to meet the specific needs of the user, including the selection of the area of interest, resolution, and the timing of data collection.',
  },
  {
    title: 'High Accuracy',
    description:
      'The imagery is geo-referenced to achieve very high accuracy, which means it can be used for precise measurements and is suitable for a greater range of applications.',
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
        {/* Left — placeholder box */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: '#E8EAF6',
            borderRadius: '24px',
            minHeight: isMobile ? '280px' : '380px',
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
            High-Resolution Imagery
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
            Polaris Digitech Limited provides a variety of high-resolution imagery products and
            services to meet the needs of clients across multiple industries. We offer both
            commercial and government clients access to the latest satellite and aerial imagery
            technology. The accuracy, timeliness, and resolution of our imagery satisfy industry
            demands for mapping, monitoring, and analysis purposes. Polaris Digitech collaborates
            closely with information providers to ensure clients have access to the most current
            imagery data. We collaborate with the top imagery service providers to deliver high
            quality and reliable accurate data services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 2: Quote ───────────────────────────────────────────────────────
function QuoteSection() {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(180deg, rgba(102,102,102,0.6) 0%, rgba(0,0,0,0.6) 62.5%)',
        backgroundColor: '#0d1b3e',
      }}
    >
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 500,
          fontSize: 'clamp(22px, 3vw, 40px)',
          lineHeight: '150%',
          letterSpacing: '-0.01em',
          textAlign: 'center',
          color: '#FFFFFF',
          maxWidth: '1200px',
          padding: '100px clamp(24px, 5vw, 80px)',
          margin: 0,
        }}
      >
        Our skilled team collaborates with clients to understand their needs and deliver tailored
        software solutions that meet their goals.
      </p>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function HighResolutionImageryPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro */}
      <IntroSection isMobile={isMobile} />

      {/* Section 2 — Quote */}
      <QuoteSection />

      {/* Section 3 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of High-Resolution Imagery"
        sectionDescription="Polaris Digitech provides satellite and aerial imagery solutions with the accuracy, timeliness, and resolution that industry demands for mapping, monitoring, and analysis purposes."
        features={HRI_FEATURES}
      />

      {/* Section 4 — Showcase */}
      <ProductShowcase />

      {/* Footer */}
      <Footer />
    </div>
  );
}
