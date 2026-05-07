/**
 * ContactUs Page
 *
 * Sections:
 *   1. ContactHero  — heading + background image with form card overlay
 *   2. ContactInfo  — contact details (left) + embedded map (right)
 *   3. FAQAccordion — frequently asked questions
 */
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ContactHero from './sections/ContactHero';
import ContactInfo from './sections/ContactInfo';
import FAQAccordion from '../../components/shared/FAQAccordion';
import type { FAQItem } from '../../components/shared/FAQAccordion';

const CONTACT_FAQS: FAQItem[] = [
  {
    question: "How do Polaris Digitech's products solve business problems?",
    answer: "Our products are built around real business challenges. The Polaris Data Collector streamlines field data gathering, the Risk Geo-Platform helps organizations visualize and manage risk spatially, and the Address Management Portal ensures accurate customer location data. Each product is designed to reduce manual effort, improve data quality, and support better decision-making.",
  },
  {
    question: 'What land surveying and consulting services do you offer?',
    answer: 'We offer a comprehensive range of land surveying services including topographic surveys, boundary surveys, cadastral mapping, and GIS-based land information systems. Our consulting services cover geospatial strategy, data acquisition planning, and spatial analysis for government and private sector clients.',
  },
  {
    question: 'Do you provide support and maintenance?',
    answer: 'Yes. All our solutions come with post-deployment support packages. We offer technical helpdesk support, system updates, user training, and ongoing maintenance to ensure your solution remains reliable and up to date.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across a wide range of industries including telecommunications, insurance, government, utilities, real estate, agriculture, and financial services. Any organization that needs to understand, manage, or act on location-based data can benefit from our services.',
  },
  {
    question: 'Do you offer customized solutions?',
    answer: 'Absolutely. While we have proven off-the-shelf products, we specialize in building custom geospatial solutions tailored to your specific workflows, data requirements, and business objectives. Contact us to discuss your needs and we will design a solution that fits.',
  },
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <Navbar />

      {/* Section 1: Hero with form overlay */}
      <ContactHero />

      {/* Section 2: Contact info + map */}
      <ContactInfo />

      {/* Section 3: FAQ */}
      <FAQAccordion
        faqs={CONTACT_FAQS}
        description="At PDL, we understand the challenges of finding the perfect solution, so we built a platform that simplifies the process. Our platform is designed to be user-friendly."
      />

      <Footer />
    </div>
  );
}
