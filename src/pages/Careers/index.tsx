import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import CareersHero from './sections/CareersHero';
import OpenPositions from './sections/OpenPositions';
import { useGraphQLQuery } from '../../hooks/useGraphQLQuery';
import { careerQuery } from '../../services/queries/careerQuery';
import type { CareerData } from '../../services/queries/careerQuery';
import { gql } from '../../services/apolloClient';

const CAREER_QUERY = gql(careerQuery);

export default function CareersPage() {
  const { data, loading, error } = useGraphQLQuery<CareerData>(CAREER_QUERY);

  if (loading) console.log('[Careers] Loading CMS data...');
  if (error) console.error('[Careers] GraphQL error:', error);

  const career = data?.career;

  return (
    <div className="min-h-screen">
      <Navbar />
      <CareersHero
        header={career?.header}
        headerDescription={career?.headerDescription}
        images={career?.images}
      />
      <OpenPositions
        categories={career?.Category}
        jobs={career?.jobs}
      />
      <Footer />
    </div>
  );
}
