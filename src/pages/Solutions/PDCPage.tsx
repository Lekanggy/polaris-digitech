import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ProductIntro from './product-detail/ProductIntro';
import ProductQuote from './product-detail/ProductQuote';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import { useGraphQLQuery } from '../../hooks/useGraphQLQuery';
import { productQuery } from '../../services/queries/productQuery';
import type { ProductsData } from '../../services/queries/productQuery';
import { strapiUrl } from '../../services/queries/productQuery';
import { gql } from '../../services/apolloClient';
import pdc from '../../assets/pdc.png';
import gen1 from '../../assets/gen1.png';
import pdcm1 from '../../assets/pdcm1.png';
import pdcm3 from '../../assets/pdcm3.png';

const PRODUCTS_QUERY = gql(productQuery);

// ── Hardcoded fallbacks ───────────────────────────────────────────────────
const FALLBACK_INTRO_TITLE = 'Polaris Data Collector';
const FALLBACK_INTRO_DESC  = "The Polaris Data Collector (PDC) is a data collection tool that enables real-time data gathering using custom-designed forms. Our Data Collector is a geo-digital system that collects and stores qualitative and quantitative data in an electronic form. The benefits of using our data collection system are that it is able to fully eliminate the use of paper surveys and allow data to be quickly exported for data analysis and reporting. Additionally, for those who may require assistance with academic writing, our system can efficiently handle large data sets, making it easier for researchers to focus on analysis rather than manual data entry.";
const FALLBACK_QUOTE       = "Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals.";
const FALLBACK_KF_TITLE    = 'Key Features of Polaris Data Collector';
const FALLBACK_KF_DESC     = "The Polaris Data Collector (PDC) is a tool for gathering real-time data through customized forms. It's a geo-digital system, storing both qualitative and quantitative data electronically. Benefits include eliminating paper surveys and quick data export for analysis. It efficiently manages large datasets, ideal for researchers focusing on analysis over manual entry.";

const FALLBACK_FEATURES = [
  { title: 'Fast and Accurate Data Collection',  description: 'Polaris data collector is capable of collecting data from a wide range of sources including websites, databases, social media platforms and more, quickly and accurately.' },
  { title: 'Customizable Data Collection',        description: 'The tool allows users to customize the data collection process in order to extract only the most relevant data from specific sources.' },
  { title: 'Automated Data Analysis',             description: 'Polaris data collector is designed to perform automated data analysis to identify trends, patterns, and anomalies in the data collected, reducing the need for manual analysis.' },
  { title: 'Real-time Monitoring',                description: 'The tool provides real-time monitoring of data sources to ensure that data is collected and analysed as soon as it becomes available.' },
  { title: 'Multiple Export Options',             description: 'Polaris data collector allows users to export collected data in multiple formats including PDF, Excel, CSV, XML and more.' },
  { title: 'Secure Data Storage',                 description: 'Polaris data collector provides secure data storage to ensure that collected data is protected from unauthorized access.' },
];

export default function PDCPage() {
  const { data } = useGraphQLQuery<ProductsData>(PRODUCTS_QUERY);

  // Find the PDC product by slug
  const cmsProduct = (data?.products ?? []).find(p => p.slug === 'pdc');

  // ── Derive values with CMS-first, fallback-second logic ──────────────────
  const introTitle  = cmsProduct?.intro?.title        ?? FALLBACK_INTRO_TITLE;
  const introDesc   = cmsProduct?.intro?.description  ?? FALLBACK_INTRO_DESC;
  const introImage  = strapiUrl(cmsProduct?.intro?.leftImage?.url) ?? pdcm1;

  const quoteText   = cmsProduct?.quote?.quote        ?? FALLBACK_QUOTE;
  const quoteImage  = strapiUrl(cmsProduct?.quote?.image?.url) ?? gen1;

  const kfTitle     = cmsProduct?.KeyFeatures?.sectionTitle       ?? FALLBACK_KF_TITLE;
  const kfDesc      = cmsProduct?.KeyFeatures?.sectionDescription ?? FALLBACK_KF_DESC;
  const kfFeatures  = (cmsProduct?.KeyFeatures?.features ?? []).length > 0
    ? (cmsProduct!.KeyFeatures!.features!).map(f => ({
        title:       f.title       ?? '',
        description: f.description ?? '',
      }))
    : FALLBACK_FEATURES;

  const showcaseImg = strapiUrl(cmsProduct?.showcase?.image?.url) ?? pdcm3;

  return (
    <div className="min-h-screen">
      <Navbar />

      <ProductIntro
        title={introTitle}
        description={introDesc}
        boxBg="#F0E2FF"
        boxImage={introImage}
      />

      <ProductQuote
        image={quoteImage}
        quote={quoteText}
      />

      <KeyFeatures
        sectionTitle={kfTitle}
        sectionDescription={kfDesc}
        features={kfFeatures}
      />

      <ProductShowcase image={showcaseImg} />

      <Footer />
    </div>
  );
}
