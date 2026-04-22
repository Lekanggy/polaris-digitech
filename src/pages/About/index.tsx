import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import AboutHero from './sections/AboutHero';
import VisionMission from './sections/VisionMission';
import WhatSetsUsApart from './sections/WhatSetsUsApart';
import KeyAchievements from './sections/KeyAchievements';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <VisionMission />
      <WhatSetsUsApart />
      <KeyAchievements />
      <Footer />
    </div>
  );
}
