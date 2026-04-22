import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ProductIntro from './product-detail/ProductIntro';
import ProductQuote from './product-detail/ProductQuote';
import KeyFeatures from './product-detail/KeyFeatures';
import ProductShowcase from './product-detail/ProductShowcase';
import pdc from '../../assets/pdc.png';

const PDC_FEATURES = [
  { title: 'Fast and Accurate Data Collection',  description: 'Polaris data collector is capable of collecting data from a wide range of sources including websites, databases, social media platforms and more, quickly and accurately.' },
  { title: 'Customizable Data Collection',        description: 'The tool allows users to customize the data collection process in order to extract only the most relevant data from specific sources.' },
  { title: 'Automated Data Analysis',             description: 'Polaris data collector is designed to perform automated data analysis to identify trends, patterns, and anomalies in the data collected, reducing the need for manual analysis.' },
  { title: 'Real-time Monitoring',                description: 'The tool provides real-time monitoring of data sources to ensure that data is collected and analysed as soon as it becomes available.' },
  { title: 'Multiple Export Options',             description: 'Polaris data collector allows users to export collected data in multiple formats including PDF, Excel, CSV, XML and more.' },
  { title: 'Secure Data Storage',                 description: 'Polaris data collector provides secure data storage to ensure that collected data is protected from unauthorized access.' },
];

export default function PDCPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Intro */}
      <ProductIntro
        title="Polaris Data Collector"
        description="The Polaris Data Collector (PDC) is a data collection tool that enables real-time data gathering using custom-designed forms. Our Data Collector is a geo-digital system that collects and stores qualitative and quantitative data in an electronic form. The benefits of using our data collection system are that it is able to fully eliminate the use of paper surveys and allow data to be quickly exported for data analysis and reporting. Additionally, for those who may require assistance with academic writing, our system can efficiently handle large data sets, making it easier for researchers to focus on analysis rather than manual data entry."
        boxBg="#F0E2FF"
      />

      {/* Section 2 — Quote with pdc.png */}
      <ProductQuote
        image={pdc}
        quote="Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals."
      />

      {/* Section 3 — Key Features */}
      <KeyFeatures
        sectionTitle="Key Features of Polaris Data Collector"
        sectionDescription="The Polaris Data Collector (PDC) is a tool for gathering real-time data through customized forms. It's a geo-digital system, storing both qualitative and quantitative data electronically. Benefits include eliminating paper surveys and quick data export for analysis. It efficiently manages large datasets, ideal for researchers focusing on analysis over manual entry."
        features={PDC_FEATURES}
      />

      {/* Section 4 — Showcase */}
      <ProductShowcase />

      <Footer />
    </div>
  );
}
