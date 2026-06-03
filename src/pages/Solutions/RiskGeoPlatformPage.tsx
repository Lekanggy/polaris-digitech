/**
 * RiskGeoPlatformPage
 * Sections: Navbar → ProductIntro → ProductQuote → KeyFeatures → ProductShowcase → Footer
 */
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ProductIntro from './product-detail/ProductIntro';
import ProductQuote from './product-detail/ProductQuote';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import pdc from '../../assets/pdc.png';
import pdcm4 from '../../assets/pdcm4.png';
import geo2 from '../../assets/geo2.png';

const RGP_FEATURES = [
  {
    title: 'Address Validation',
    description:
      'The platform provides complete validation of address inputs, helping organizations increase and streamline address quality and accuracy across large geographic datasets.',
  },
  {
    title: 'Address Normalization',
    description:
      'The tool normalizes and formats addresses to ensure proper standardization, making it easier to manage and build a cleaner, more reliable spatial database.',
  },
  {
    title: 'Geocoding',
    description:
      'The platform converts addresses into precise geographic coordinates, allowing users to pinpoint locations on a map and integrate location data into risk workflows.',
  },
  {
    title: 'Data Cleaning',
    description:
      'The tool automatically identifies and removes duplicate, incomplete, or inaccurate data, keeping your geospatial database clean and analysis-ready.',
  },
  {
    title: 'Address Enrichment',
    description:
      'The platform enriches addresses with additional data points to identify, map, improve, and gain deeper insights into locations and risk-exposed communities.',
  },
  {
    title: 'Address Verification',
    description:
      'The tool verifies the legitimacy of addresses in real time to reduce errors, improve deliverability, and increase the confidence of risk assessments.',
  },
  {
    title: 'API Integration',
    description:
      'A fully flexible RESTful API allows for easy integration into any existing platform or running risk workflows such as insurance underwriting and claims management.',
  },
  {
    title: 'Web-based Interface',
    description:
      'The tool provides a web-based interface that allows users to access the platform from any device with an internet connection, enabling remote risk monitoring.',
  },
  {
    title: 'Dashboard and Reporting',
    description:
      'The tool provides a dashboard that allows users to view and analyze risk data, and generate reports that can be used to make informed business decisions.',
  },
];

export default function RiskGeoPlatformPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro */}
      <ProductIntro
        title="Risk Geo-Platform"
        description="The Risk Geo-Platform is an advanced tool that analyzes and visualizes geospatial data to help organizations manage risks proactively and support business growth. It provides a product that visualizes and assesses asset risk exposure using geospatial intelligence, real-time threat monitoring, and predictive analytics. Built for insurers, financial institutions, and government bodies, it enables smarter decision-making through location-aware risk models and comprehensive spatial dashboards."
        boxBg="#DAE4FF"
        boxImage={pdcm4}
      />

      {/* Section 2 — Quote */}
      <ProductQuote
        image={pdc}
        quote="A product that visualizes and assesses asset risk exposure using geospatial intelligence, real-time threat monitoring, and predictive analytics."
      />

      {/* Section 3 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of Risk Geoplatform"
        sectionDescription="The Risk Geo-Platform combines geospatial intelligence with real-time threat monitoring and predictive analytics to help organizations visualize, assess, and manage asset risk exposure across any geography."
        features={RGP_FEATURES}
      />

      {/* Section 4 — Showcase */}
      <ProductShowcase image={geo2} />

      <Footer />
    </div>
  );
}
