/**
 * SoftwareDevelopmentPage — Service sub-page #1
 * Assembles all 4 sections using the shared service sub-page components.
 */
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import ServiceSubStatsFeatures from './ServiceSubStatsFeatures';
import ServiceSubAbout from './ServiceSubAbout';
import ServiceSubClients from './ServiceSubClients';

const STATS = [
  { value: '20+', label: 'No of Corporate Clients' },
  { value: '10+', label: 'Products shipped' },
  { value: '20+', label: 'Projects completed for this service' },
];

const FEATURES = [
  {
    icon: 'geo' as const,
    title: 'Geospatial & Mapping Solutions',
    description:
      'Design and development of GIS-powered applications that visualize location-based data on interactive maps for planning, monitoring, and decision-making.',
  },
  {
    icon: 'globe' as const,
    title: 'Custom Software Development',
    description:
      'Bespoke web and mobile applications built to meet specific business, operational, and regulatory needs across industries.',
  },
  {
    icon: 'monitor' as const,
    title: 'Real-Time Data Integration',
    description:
      'Integration of live data sources such as GPS, sensors, IoT devices, and APIs to enable real-time tracking, monitoring, and analytics.',
  },
  {
    icon: 'geo' as const,
    title: 'Enterprise & Government Systems',
    description:
      'Development of secure, scalable software solutions tailored for enterprise and public-sector use, supporting complex workflows and large datasets.',
  },
  {
    icon: 'globe' as const,
    title: 'System Integration & APIs',
    description:
      'Seamless integration of third-party platforms, partner solutions, and existing systems through robust APIs and middleware.',
  },
  {
    icon: 'monitor' as const,
    title: 'Deployment, Support & Maintenance',
    description:
      'End-to-end support covering deployment, monitoring, optimization, and ongoing system maintenance to ensure long-term reliability and scalability.',
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1 — Hero */}
      <ServiceSubHero
        title="Software Development"
        description="We offer end-to-end software development solutions that help businesses manage their operations and improve their productivity. Our services cover a wide range of technologies including web development, mobile app development, cloud computing, artificial intelligence, machine learning, data analytics, and much more. We help businesses automate their processes, reduce costs, increase efficiency, and enhance their overall performance."
        /* No image available — placeholder card rendered */
      />

      {/* Section 2 — Stats + Key Features */}
      <ServiceSubStatsFeatures
        stats={STATS}
        features={FEATURES}
        featuresHeading="Key Features"
      />

      {/* Section 3 — About / image + text */}
      <ServiceSubAbout
        /* No image available — white placeholder card rendered */
        leadText="We are a software development company offering services like design, development, testing, deployment, and maintenance."
        emphasisText="Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals."
      />

      {/* Section 4 — Clients logos + bottom placeholder */}
      <ServiceSubClients
        /* No bottom image available — placeholder card rendered */
      />

      <Footer />
    </div>
  );
}
