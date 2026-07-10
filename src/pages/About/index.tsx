import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import AboutHero from './sections/AboutHero';
import VisionMission from './sections/VisionMission';
import WhatSetsUsApart from './sections/WhatSetsUsApart';
import KeyAchievements from './sections/KeyAchievements';
import { useGraphQLQuery } from '../../hooks/useGraphQLQuery';
import { aboutusQuery } from '../../services/queries/aboutusQuery';
import type { AboutUsData, KeyAchievement, VisionItem, AboutSection, SetusApart } from '../../services/queries/aboutusQuery';
import { gql } from '../../services/apolloClient';

const ABOUT_QUERY = gql(aboutusQuery);

export default function AboutPage() {
  const { data, loading, error } = useGraphQLQuery<AboutUsData>(ABOUT_QUERY);

  if (loading) console.log('[About] Loading CMS data...');
  if (error) console.error('[About] GraphQL error:', error);

  const aboutUs = data?.aboutUs;

  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero data={aboutUs?.about as AboutSection | undefined} />
      <VisionMission vision={aboutUs?.vision as VisionItem[] | undefined} cultureImage={aboutUs?.cultureImage} />
      <WhatSetsUsApart data={aboutUs?.setusApart as SetusApart | undefined} />
      <KeyAchievements data={aboutUs?.keyAchievement as KeyAchievement[] | undefined} />
      <Footer />
    </div>
  );
}
