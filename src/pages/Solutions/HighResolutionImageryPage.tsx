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
import gen4 from '../../assets/gen4.png';
import top1 from '../../assets/top1.png';
import bot1 from '../../assets/bot1.png';

const PARTNERS_QUERY = gql(partnersProductQuery);
const satoshi = 'Satoshi, Inter, sans-serif';

const FALLBACK_FEATURES = [
  { title: 'High Resolution', description: 'Polaris Digitech provides satellite and aerial imagery at very high spatial resolutions of up to 30 cm, meaning the smallest details can be detected.' },
  { title: 'Varieties of Imaging Sensors', description: 'Varieties of imaging sensors are available, including optical, multispectral, hyperspectral, and SAR/Radar platforms.' },
  { title: 'Rapid Delivery', description: 'Current and accurate file imagery of the required location is delivered within the range of one to two working days of the order being placed.' },
  { title: 'Wide Area Coverage', description: 'Polaris Digitech High-Resolution Imagery covers a wide area in a single pass, making it cost-effective to capture and analyse large territories.' },
  { title: 'Customisation', description: 'The imagery can be customised to meet the specific needs of the user, including the selection of area of interest, resolution, and timing of data collection.' },
  { title: 'High Accuracy', description: 'The imagery is geo-referenced to achieve very high accuracy, making it suitable for precise measurements across a greater range of applications.' },
];
const FALLBACK_INTRO_DESC = 'Polaris Digitech Limited provides a variety of high-resolution imagery products and services to meet the needs of clients across multiple industries. We offer both commercial and government clients access to the latest satellite and aerial imagery technology.';
const FALLBACK_KF_TITLE   = 'Key Features of High-Resolution Imagery';
const FALLBACK_KF_DESC    = 'Polaris Digitech provides satellite and aerial imagery solutions with the accuracy, timeliness, and resolution that industry demands for mapping, monitoring, and analysis purposes.';
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
          <img src={introImage} alt="High-Resolution Imagery" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 32 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 style={{ fontFamily: satoshi, fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '115%', letterSpacing: '-0.02em', color: '#283172', marginBottom: '24px' }}>
            High-Resolution Imagery
          </h1>
          <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '170%', color: '#46485F' }}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function HighResolutionImageryPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { data } = useGraphQLQuery<PartnersProductsData>(PARTNERS_QUERY);

  const cms = (data?.partnersProducts ?? []).find(
    p => p.route === 'solutions/high-resolution-imagery' || p.route === '/solutions/high-resolution-imagery'
  );

  const introImage  = strapiUrl(cms?.introsection?.leftImage?.url) ?? top1;
  const introDesc   = cms?.description ?? FALLBACK_INTRO_DESC;
  const quoteText   = cms?.quote?.quote ?? FALLBACK_QUOTE;
  const quoteImage  = strapiUrl(cms?.quote?.image?.url) ?? gen4;
  const kfTitle     = cms?.features?.sectionTitle ?? FALLBACK_KF_TITLE;
  const kfDesc      = cms?.features?.sectionDescription ?? FALLBACK_KF_DESC;
  const kfFeatures  = (cms?.features?.features ?? []).length > 0
    ? (cms!.features!.features!).map(f => ({ title: f.title ?? '', description: f.description ?? '' }))
    : FALLBACK_FEATURES;
  const showcaseImg = strapiUrl(cms?.showcase?.image?.url) ?? bot1;

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
