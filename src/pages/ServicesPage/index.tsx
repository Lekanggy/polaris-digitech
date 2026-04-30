import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ServicesIntro from './sections/ServicesIntro';
import ServicesGrid from './sections/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesIntro />
      <ServicesGrid />
      <Footer />
    </div>
  );
}
