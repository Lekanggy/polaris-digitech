import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import BlogHero from './sections/BlogHero';
import BlogGrid from './sections/BlogGrid';
import { FEATURED_ARTICLE } from './blogData';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogHero article={FEATURED_ARTICLE} />
      <BlogGrid />
      <Footer />
    </div>
  );
}
