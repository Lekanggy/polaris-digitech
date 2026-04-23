import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ProjectsList from './sections/ProjectsList';
import ProjectsFAQ from './sections/ProjectsFAQ';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectsList />
      <ProjectsFAQ />
      <Footer />
    </div>
  );
}
