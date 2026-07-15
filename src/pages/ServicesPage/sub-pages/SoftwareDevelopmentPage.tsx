import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ServiceSubHero from './ServiceSubHero';
import ServiceSubStatsFeatures from './ServiceSubStatsFeatures';
import ServiceSubAbout from './ServiceSubAbout';
import ServiceSubClients from './ServiceSubClients';
import { useServiceData } from './useServiceData';

const HREF = '/services/software-development';

const FB_STATS = [
  { value: '20+', label: 'No of Corporate Clients' },
  { value: '10+', label: 'Products shipped' },
  { value: '20+', label: 'Projects completed for this service' },
];
const FB_FEATURES = [
  { icon: 'geo' as const,     title: 'Geospatial & Mapping Solutions',    description: 'Design and development of GIS-powered applications that visualize location-based data on interactive maps for planning, monitoring, and decision-making.' },
  { icon: 'globe' as const,   title: 'Custom Software Development',       description: 'Bespoke web and mobile applications built to meet specific business, operational, and regulatory needs across industries.' },
  { icon: 'monitor' as const, title: 'Real-Time Data Integration',        description: 'Integration of live data sources such as GPS, sensors, IoT devices, and APIs to enable real-time tracking, monitoring, and analytics.' },
  { icon: 'geo' as const,     title: 'Enterprise & Government Systems',   description: 'Development of secure, scalable software solutions tailored for enterprise and public-sector use, supporting complex workflows and large datasets.' },
  { icon: 'globe' as const,   title: 'System Integration & APIs',         description: 'Seamless integration of third-party platforms, partner solutions, and existing systems through robust APIs and middleware.' },
  { icon: 'monitor' as const, title: 'Deployment, Support & Maintenance', description: 'End-to-end support covering deployment, monitoring, optimization, and ongoing system maintenance to ensure long-term reliability and scalability.' },
];

export default function SoftwareDevelopmentPage() {
  const svc = useServiceData(HREF);
  const stats    = svc.stats.length    > 0 ? svc.stats    : FB_STATS;
  const features = svc.features.length > 0 ? svc.features : FB_FEATURES;

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServiceSubHero
        title={svc.title ?? 'Software Development'}
        description={svc.description ?? 'We offer end-to-end software development solutions that help businesses manage their operations and improve their productivity. Our services cover web development, mobile app development, cloud computing, AI, machine learning, and data analytics.'}
        image={svc.heroImage}
        bottomText={svc.bottomText}
      />
      <ServiceSubStatsFeatures stats={stats} features={features} featuresHeading="Key Features" />
      <ServiceSubAbout
        image={svc.showcaseImages[1]}
        leadText="We are a software development company offering services like design, development, testing, deployment, and maintenance."
        emphasisText={svc.quoteText ?? 'Our skilled team collaborates with clients to understand their needs and deliver tailored software solutions that meet their goals.'}
      />
      <ServiceSubClients bottomImage={svc.showcaseImages[0]} />
      <Footer />
    </div>
  );
}
