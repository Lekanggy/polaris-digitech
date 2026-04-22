import Navbar from '../../components/sections/Navbar';
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <AboutStatsWhy />
      <Products />
      <Projects />
      <Clients />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}
