import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SolutionsPage from './pages/Solutions';
import PDCPage from './pages/Solutions/PDCPage';
import AMPPage from './pages/Solutions/AMPPage';
import ProjectsPage from './pages/Projects';
import LagFerryPage from './pages/Project/sub-pages/LagFerryPage';
import RiskGeoPage from './pages/Project/sub-pages/RiskGeoPage';
import MTNCoveragePage from './pages/Project/sub-pages/MTNCoveragePage';
import GoogleStreetViewPage from './pages/Project/sub-pages/GoogleStreetViewPage';
import AssetMappingPage from './pages/Project/sub-pages/AssetMappingPage';
import LandParcelPage from './pages/Project/sub-pages/LandParcelPage';
import CareersPage from './pages/Careers';
import JobDetailPage from './pages/Careers/JobDetailPage';
import ServicesPage from './pages/ServicesPage';
import SoftwareDevelopmentPage from './pages/ServicesPage/sub-pages/SoftwareDevelopmentPage';
import LandSurveyingPage from './pages/ServicesPage/sub-pages/LandSurveyingPage';
import GeospatialDataPage from './pages/ServicesPage/sub-pages/GeospatialDataPage';
import TrainingSupportPage from './pages/ServicesPage/sub-pages/TrainingSupportPage';
import IdentityIntelligencePage from './pages/ServicesPage/sub-pages/IdentityIntelligencePage';

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
        <Route path="/projects/lag-ferry" element={<LagFerryPage />} />
        <Route path="/projects/risk-geo-platform" element={<RiskGeoPage />} />
        <Route path="/projects/mtn-coverage-locator" element={<MTNCoveragePage />} />
        <Route path="/projects/google-street-view" element={<GoogleStreetViewPage />} />
        <Route path="/projects/asset-mapping" element={<AssetMappingPage />} />
        <Route path="/projects/land-parcel" element={<LandParcelPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:jobId" element={<JobDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/services/land-surveying" element={<LandSurveyingPage />} />
        <Route path="/services/geospatial-data-acquisition" element={<GeospatialDataPage />} />
        <Route path="/services/training-support" element={<TrainingSupportPage />} />
        <Route path="/services/identity-intelligence" element={<IdentityIntelligencePage />} />
      </Routes>
    </BrowserRouter>
  );
}
