/**
 * GoogleCloudPage
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
import gcc1 from '../../assets/gcc1.png';
import gcc2 from '../../assets/gcc2.png';
import gen8 from '../../assets/gen8.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Key features ───────────────────────────────────────────────────────────
const GCP_FEATURES = [
  {
    title: 'Scalable Infrastructure',
    description:
      'Google Cloud Platform provides on-demand, scalable infrastructure that grows with your business, eliminating the need for costly on-premises hardware and enabling rapid deployment.',
  },
  {
    title: 'Data Analytics & BigQuery',
    description:
      'Leverage Google\'s powerful BigQuery data warehouse to analyse massive datasets in seconds, turning raw data into actionable business intelligence without complex infrastructure management.',
  },
  {
    title: 'Machine Learning & AI',
    description:
      'Access industry-leading AI and machine learning tools including Vertex AI, enabling organizations to build, train, and deploy intelligent models at scale with minimal effort.',
  },
  {
    title: 'Cloud Storage & Databases',
    description:
      'Reliable, durable, and highly available cloud storage solutions with a range of managed database services — relational, NoSQL, and in-memory — to match any workload requirement.',
  },
  {
    title: 'Security & Compliance',
    description:
      'Built-in security controls, identity management, and compliance certifications ensure your data and workloads are protected to the highest global standards across all regions.',
  },
  {
    title: 'Networking & CDN',
    description:
      'Google\'s global private fibre network and Cloud CDN deliver ultra-low latency connections worldwide, ensuring fast and reliable access to applications for users everywhere.',
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
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '32px' : 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        {/* Left — image only, no placeholder box */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ width: '100%' }}
        >
          <img
            src={gcc1}
            alt="Google Cloud Platform"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '24px',
              objectFit: 'cover',
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
            Google Cloud Platform
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
            Cloud computing provides on-demand resources like hardware and software accessible via
            the internet. Polaris Digitech Limited is a certified Google Cloud Platform reseller and
            implementation partner, helping businesses and institutions across Nigeria migrate,
            build, and scale on Google Cloud. We provide end-to-end support — from cloud strategy
            and architecture design to deployment and ongoing management — ensuring organizations
            unlock the full value of Google's infrastructure, data, and AI capabilities. As the
            first certified GCP reseller in Nigeria, we combine deep local knowledge with global
            cloud expertise to deliver solutions that are secure, cost-effective, and tailored to
            your operational needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 2: Quote ─────────────────────────────────────────────────────

// ── Page ───────────────────────────────────────────────────────────────────
export default function GoogleCloudPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro */}
      <IntroSection isMobile={isMobile} />

      {/* Section 2 — Quote */}
      <ProductQuote
        image={gen8}
        quote="Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals."
      />

      {/* Section 3 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of Google Cloud Platform"
        sectionDescription="Polaris Digitech helps businesses harness the full power of Google Cloud — from scalable infrastructure and data analytics to AI tools and enterprise-grade security — enabling smarter, faster, and more cost-effective operations."
        features={GCP_FEATURES}
      />

      {/* Section 4 — Showcase */}
      <ProductShowcase image={gcc2} />

      <Footer />
    </div>
  );
}
