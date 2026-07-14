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
import gen5 from '../../assets/gen5.png';
import top2 from '../../assets/top2.png';
import bot2 from '../../assets/bot2.png';

const PARTNERS_QUERY = gql(partnersProductQuery);
const satoshi = 'Satoshi, Inter, sans-serif';

const FALLBACK_FEATURES = [
  { title: 'Comprehensive Visualisation', description: 'With MapInfo, PDL can convert virtually any spatial data into rich, interactive maps and charts, displayed at any scale across different data layers.' },
  { title: 'Accelerated Time-to-value', description: 'MapInfo Pro is versatile, does not slow down, and enables clients to make data-driven decisions faster, reducing the overall time-to-value of every engagement.' },
  { title: 'Seamless Integration', description: 'MapInfo Pro is extremely customisable and can be integrated with other mapping software, enabling distribution of the final output in the most useful format.' },
  { title: 'Trusted Solution', description: 'MapInfo Pro has a long history of trusted use across government and private sector bodies. Polaris Digitech leverages this proven and dependable platform.' },
];
const FALLBACK_INTRO_DESC = 'MapInfo Pro is a powerful and feature-rich GIS software that provides advanced data visualisation, analysis, and mapping capabilities for businesses and organisations.';
const FALLBACK_KF_TITLE   = 'Key Features of Map Info';
const FALLBACK_KF_DESC    = 'Geospatial information is an essential component of making well-informed decisions. PDL depends on GIS tools such as MapInfo to deliver the most accurate and relevant results.';
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
          <img src={introImage} alt="MapInfo" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 32 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 style={{ fontFamily: satoshi, fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '115%', letterSpacing: '-0.02em', color: '#283172', marginBottom: '24px' }}>
            Map Info
          </h1>
          <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '170%', color: '#46485F' }}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function MapInfoPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { data } = useGraphQLQuery<PartnersProductsData>(PARTNERS_QUERY);

  const cms = (data?.partnersProducts ?? []).find(p => p.route === 'solutions/mapinfo' || p.route === '/solutions/mapinfo');

  const introImage  = strapiUrl(cms?.introsection?.leftImage?.url) ?? top2;
  const introDesc   = cms?.description ?? FALLBACK_INTRO_DESC;
  const quoteText   = cms?.quote?.quote ?? FALLBACK_QUOTE;
  const quoteImage  = strapiUrl(cms?.quote?.image?.url) ?? gen5;
  const kfTitle     = cms?.features?.sectionTitle ?? FALLBACK_KF_TITLE;
  const kfDesc      = cms?.features?.sectionDescription ?? FALLBACK_KF_DESC;
  const kfFeatures  = (cms?.features?.features ?? []).length > 0
    ? (cms!.features!.features!).map(f => ({ title: f.title ?? '', description: f.description ?? '' }))
    : FALLBACK_FEATURES;
  const showcaseImg = strapiUrl(cms?.showcase?.image?.url) ?? bot2;

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
