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
import gen7 from '../../assets/gen7.png';
import top5 from '../../assets/top5.png';
import bot5 from '../../assets/bot5.png';

const PARTNERS_QUERY = gql(partnersProductQuery);
const satoshi = 'Satoshi, Inter, sans-serif';

const FALLBACK_FEATURES = [
  { title: 'Customisation', description: "Polaris Digitech's Google Maps capabilities allow businesses to customise the platform to their specific needs and design." },
  { title: 'Geocoding and Address Validation', description: 'The solution provides accurate geocoding and address validation with every use.' },
  { title: 'Route Optimisation', description: 'Customers can access the imagery of the location in a spatial view — the range and variety of routes for planning purposes.' },
  { title: 'Real-time Location Tracking', description: 'The solution allows clients to track the movement of their assets, vehicles, or people in real time.' },
  { title: 'Custom Markers and Overlays', description: "Polaris Digitech's Google Maps solution allows businesses to add custom markers and overlays to the map." },
  { title: 'Street View Integration', description: "Polaris Digitech's Google Maps solution provides a seamless integration with Google's Street View." },
];
const FALLBACK_INTRO_DESC = 'At Polaris Digitech Limited, we create software to analyse geospatial data and interpret spatial patterns for mapping, monitoring, and analysis purposes.';
const FALLBACK_KF_TITLE   = 'Key Features of Google Maps';
const FALLBACK_KF_DESC    = 'Polaris Digitech uses the Google Maps Platform to build location-based applications that help businesses manage assets, track vehicles, and deliver products and services more efficiently.';
const FALLBACK_QUOTE      = 'Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals.';

function IntroSection({ isMobile, introImage, description }: { isMobile: boolean; introImage: string; description: string }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} style={{ background: '#fff', paddingTop: '160px', paddingBottom: '80px' }}>
      <div
        style={{
          maxWidth: '1280px', margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr',
          gap: isMobile ? '32px' : 'clamp(40px, 6vw, 80px)', alignItems: 'stretch',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -32 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ background: '#E8EAF6', borderRadius: '24px', overflow: 'hidden', width: '100%', aspectRatio: '1 / 1' }}
        >
          <img src={introImage} alt="Google Maps" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 32 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 style={{ fontFamily: satoshi, fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '115%', letterSpacing: '-0.02em', color: '#283172', marginBottom: '24px' }}>
            Google Maps
          </h1>
          <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '170%', color: '#46485F' }}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function GoogleMapsPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { data } = useGraphQLQuery<PartnersProductsData>(PARTNERS_QUERY);

  const cms = (data?.partnersProducts ?? []).find(p => p.route === 'solutions/google-maps' || p.route === '/solutions/google-maps');

  const introImage  = strapiUrl(cms?.introsection?.leftImage?.url) ?? top5;
  const introDesc   = cms?.description ?? FALLBACK_INTRO_DESC;
  const quoteText   = cms?.quote?.quote ?? FALLBACK_QUOTE;
  const quoteImage  = strapiUrl(cms?.quote?.image?.url) ?? gen7;
  const kfTitle     = cms?.features?.sectionTitle ?? FALLBACK_KF_TITLE;
  const kfDesc      = cms?.features?.sectionDescription ?? FALLBACK_KF_DESC;
  const kfFeatures  = (cms?.features?.features ?? []).length > 0
    ? (cms!.features!.features!).map(f => ({ title: f.title ?? '', description: f.description ?? '' }))
    : FALLBACK_FEATURES;
  const showcaseImg = strapiUrl(cms?.showcase?.image?.url) ?? bot5;

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
