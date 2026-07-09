import Hero from '../../components/sections/Hero';
import ClientLogos from '../../components/sections/ClientLogos';
import Services from '../../components/sections/Services';
import AboutStatsWhy from '../../components/sections/AboutStatsWhy';
import Products from '../../components/sections/Products';
import Projects from '../../components/sections/Projects';
import Clients from '../../components/sections/Clients';
import Contact from '../../components/sections/Contact';
import Testimonials from '../../components/sections/Testimonials';
import Footer from '../../components/sections/Footer';
import Navbar from '../../components/sections/Navbar';
import { useGraphQLQuery } from '../../hooks/useGraphQLQuery';
import { useGraphQLSubscription } from '../../hooks/useGraphQLSubscription';
import { homeQuery, homeSubscription } from '../../services/queries/homeQuery';
import type { HomeData } from '../../services/queries/homeQuery';
import { gql } from '../../services/apolloClient';

const HOME_QUERY = gql(homeQuery);
const HOME_SUBSCRIPTION = gql(homeSubscription);

const wsEnabled = import.meta.env.VITE_GRAPHQL_WS_ENABLED === 'true';

export default function HomePage() {
  // Initial data fetch
  const { data, loading, error } = useGraphQLQuery<HomeData>(HOME_QUERY);

  // Real-time subscription — only active when WS is enabled on the Strapi server.
  // Set VITE_GRAPHQL_WS_ENABLED=true in .env once the graphql-ws Strapi plugin
  // is installed and the WS endpoint returns a successful handshake.
  useGraphQLSubscription<HomeData>(HOME_SUBSCRIPTION, {
    skip: !wsEnabled,
    onData: ({ client, data: subData }) => {
      if (!subData.data) return;
      client.writeQuery<HomeData>({
        query: HOME_QUERY,
        data: subData.data,
      });
    },
  });

  const home = data?.home;

  if (loading) console.log('[Home] Loading CMS data...');
  if (error) console.error('[Home] GraphQL error:', error);


  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero data={home?.heroSection} />
      <ClientLogos data={home?.client} />
      <Services data={home?.service} />
      <AboutStatsWhy data={home?.aboutState} />
      <Products data={home?.product} />
      <Projects data={home?.product?.projectItem} />
      <Clients />
      <Contact data={home?.Contacts} />
      <Testimonials data={home?.testimonial} />
      <Footer />
    </div>
  );
}
