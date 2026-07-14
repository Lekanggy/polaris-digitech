import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import ProductQuote from './product-detail/ProductQuote';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useGraphQLQuery } from '../../hooks/useGraphQLQuery';
import { partnersProductQuery } from '../../services/queries/partnerProduct';
import type { PartnersProductsData } from '../../services/queries/partnerProduct';
import { strapiUrl } from '../../services/queries/partnerProduct';
import { gql } from '../../services/apolloClient';
import gcc1 from '../../assets/gcc1.png';
import gcc2 from '../../assets/gcc2.png';
import gen8 from '../../assets/gen8.png';

const PARTNERS_QUERY = gql(partnersProductQuery);
const satoshi = 'Satoshi, Inter, sans-serif';

const FALLBACK_FEATURES = [
  { title: 'Scalable Infrastructure', description: 'Google Cloud Platform provides on-demand, scalable infrastructure that grows with your business, eliminating the need for costly on-premises hardware and enabling rapid deployment.' },
  { title: 'Data Analytics & BigQuery', description: "Leverage Google's powerful BigQuery data warehouse to analyse massive datasets in seconds, turning raw data into actionable business intelligence without complex infrastructure management." },
  { title: 'Machine Learning & AI', description: 'Access industry-leading AI and machine learning tools including Vertex AI, enabling organizations to build, train, and deploy intelligent models at scale with minimal effort.' },
  { title: 'Cloud Storage & Databases', description: 'Reliable, durable, and highly available cloud storage solutions with a range of managed database services — relational, NoSQL, and in-memory — to match any workload requirement.' },
  { title: 'Security & Compliance', description: 'Built-in security controls, identity management, and compliance certifications ensure your data and workloads are protected to the highest global standards across all regions.' },
  { title: 'Networking & CDN', description: "Google's global private fibre network and Cloud CDN deliver ultra-low latency connections worldwide, ensuring fast and reliable access to applications for users everywhere." },
];
const FALLBACK_INTRO_DESC = "Cloud computing provides on-demand resources like hardware and software accessible via the internet. Polaris Digitech Limited is a certified Google Cloud Platform reseller and implementation partner, helping businesses and institutions across Nigeria migrate, build, and scale on Google Cloud.";
const FALLBACK_KF_TITLE   = 'Key Features of Google Cloud Platform';
const FALLBACK_KF_DESC    = 'Polaris Digitech helps businesses harness the full power of Google Cloud — from scalable infrastructure and data analytics to AI tools and enterprise-grade security — enabling smarter, faster, and more cost-effective operations.';
const FALLBACK_QUOTE      = 'Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals.';

function IntroSection({ isMobile, introImage, description }: { isMobile: boolean; introImage: string; description: string }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} style={{ background: '#fff', paddingTop: '160px', paddingBottom: '80px' }}>
      <div
        style={{
          maxWidth: '1280px', margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '32px' : 'clamp(40px, 6vw, 80px)', alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -32 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ width: '100%' }}
        >
          <img src={introImage} alt="Google Cloud Platform" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '24px', objectFit: 'cover' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 32 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 style={{ fontFamily: satoshi, fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '115%', letterSpacing: '-0.02em', color: '#283172', marginBottom: '24px' }}>
            Google Cloud Platform
          </h1>
          <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '170%', color: '#46485F' }}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function GoogleCloudPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { data } = useGraphQLQuery<PartnersProductsData>(PARTNERS_QUERY);

  const cms = (data?.partnersProducts ?? []).find(p => p.route === 'solutions/google-cloud' || p.route === '/solutions/google-cloud');

  const introImage  = strapiUrl(cms?.introsection?.leftImage?.url) ?? gcc1;
  const introDesc   = cms?.description ?? FALLBACK_INTRO_DESC;
  const quoteText   = cms?.quote?.quote ?? FALLBACK_QUOTE;
  const quoteImage  = strapiUrl(cms?.quote?.image?.url) ?? gen8;
  const kfTitle     = cms?.features?.sectionTitle ?? FALLBACK_KF_TITLE;
  const kfDesc      = cms?.features?.sectionDescription ?? FALLBACK_KF_DESC;
  const kfFeatures  = (cms?.features?.features ?? []).length > 0
    ? (cms!.features!.features!).map(f => ({ title: f.title ?? '', description: f.description ?? '' }))
    : FALLBACK_FEATURES;
  const showcaseImg = strapiUrl(cms?.showcase?.image?.url) ?? gcc2;

  return (
    <div className="min-h-screen">
      <Navbar />
      <IntroSection isMobile={isMobile} introImage={introImage} description={introDesc} />
      <ProductQuote image={quoteImage} quote={quoteText} />
      <KeyFeatures sectionTitle={kfTitle} sectionDescription={kfDesc} features={kfFeatures} />
      <ProductShowcase image={showcaseImg} />
      <Footer />
    </div>
  );
}
