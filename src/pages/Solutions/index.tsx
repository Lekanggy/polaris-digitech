import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ProductsHero from './sections/ProductsHero';
import PartnersExplore from './sections/PartnersExplore';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductsHero />
      <PartnersExplore />
      <Footer />
    </div>
  );
}
