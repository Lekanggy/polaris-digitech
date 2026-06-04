import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ProductIntro from './product-detail/ProductIntro';
import ProductQuote from './product-detail/ProductQuote';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import pdc from '../../assets/pdc.png';
import gen2 from '../../assets/gen2.png';
import pdcm2 from '../../assets/pdcm2.png';
import pdcl3 from '../../assets/pdcl3.png';

const AMP_FEATURES = [
  {
    title: 'Address Validation',
    description: 'The platform provides complete validation of a wide range of inputs, helping to increase and streamline address validation quality and accuracy.',
  },
  {
    title: 'Address Normalization',
    description: 'The tool normalizes and formats addresses to ensure proper standardization, making it easier to manage, building a cleaner, more reliable database.',
  },
  {
    title: 'Geocoding',
    description: 'The platform is designed to convert addresses into geographic coordinates, allowing users to pinpoint locations on a map and integrate location data into their workflows.',
  },
  {
    title: 'Data Cleaning',
    description: 'The tool automatically identifies and removes duplicate, incomplete, or inaccurate data, keeping your database clean.',
  },
  {
    title: 'Address Enrichment',
    description: 'The platform is designed to enrich addresses with additional data points to identify, map, improve, and gain more insights into locations and communities.',
  },
  {
    title: 'Address Verification',
    description: 'The tool verifies the legitimacy of addresses in real-time to reduce errors, improve deliverability, and increase customer satisfaction.',
  },
  {
    title: 'API Integration',
    description: 'It is a fully flexible RESTful API, allowing for easy integration into any existing platform or running workflows such as.',
  },
  {
    title: 'Web-based Interface',
    description: 'The tool provides users with a web-based interface that allows them to access the platform from any device with an internet connection.',
  },
  {
    title: 'Dashboard and Reporting',
    description: 'The tool provides a dashboard that allows users to view and analyze data, and generate reports that can be used to make informed business decisions.',
  },
];

export default function AMPPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro */}
      <ProductIntro
        title="Address Management Portal"
        description="The Address Management Portal (AMP) is a user-friendly platform that streamlines address verification and management, improving data accuracy and customer experience. AMP is a geo-digital system that collects, validates, and manages address data in real time. The benefits of using our address management system include eliminating manual address entry errors, improving delivery success rates, and enabling businesses to maintain clean, accurate customer databases. Our system efficiently handles large volumes of address data, making it easier for organizations to focus on operations rather than data quality issues."
        boxBg="#CCECFF"
        boxImage={pdcm2}
      />

      {/* Section 2 — Quote with pdc.png */}
      <ProductQuote
        image={gen2}
        quote="Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals."
      />

      {/* Section 3 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of AMP"
        sectionDescription="The Address Management Portal (AMP) is a tool for gathering real-time address data through customized forms. It's a geo-digital system, storing both qualitative and quantitative data electronically. Benefits include eliminating paper surveys and quick data export for analysis. It efficiently manages large datasets, ideal for researchers focusing on analysis over manual entry."
        features={AMP_FEATURES}
      />

      {/* Section 4 — Showcase */}
      <ProductShowcase image={pdcl3} />

      <Footer />
    </div>
  );
}
