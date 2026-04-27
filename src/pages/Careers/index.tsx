import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import CareersHero from './sections/CareersHero';
import OpenPositions from './sections/OpenPositions';

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CareersHero />
      <OpenPositions />
      <Footer />
    </div>
  );
}
