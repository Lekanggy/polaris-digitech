import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SolutionsPage from './pages/Solutions';
import PDCPage from './pages/Solutions/PDCPage';
import AMPPage from './pages/Solutions/AMPPage';
import ProjectsPage from './pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/pdc" element={<PDCPage />} />
        <Route path="/solutions/amp" element={<AMPPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
