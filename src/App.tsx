import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SolutionsPage from './pages/Solutions';
import PDCPage from './pages/Solutions/PDCPage';
import AMPPage from './pages/Solutions/AMPPage';
import GoogleWorkspaceBusinessPage from './pages/Solutions/GoogleWorkspaceBusinessPage';
import GoogleWorkspaceEducationPage from './pages/Solutions/GoogleWorkspaceEducationPage';
import HighResolutionImageryPage from './pages/Solutions/HighResolutionImageryPage';
import GoogleMapsPage from './pages/Solutions/GoogleMapsPage';
import MapInfoPage from './pages/Solutions/MapInfoPage';
import ProjectsPage from './pages/Projects';
import LagFerryPage from './pages/Project/sub-pages/LagFerryPage';
import RiskGeoPage from './pages/Project/sub-pages/RiskGeoPage';
import MTNCoveragePage from './pages/Project/sub-pages/MTNCoveragePage';
import GoogleStreetViewPage from './pages/Project/sub-pages/GoogleStreetViewPage';
import AssetMappingPage from './pages/Project/sub-pages/AssetMappingPage';
import ThematicMappingPage from './pages/Project/sub-pages/ThematicMappingPage';
import AlmaBeachPage from './pages/Project/sub-pages/AlmaBeachPage';
import LandParcelPage from './pages/Project/sub-pages/LandParcelPage';
import CareersPage from './pages/Careers';
import JobDetailPage from './pages/Careers/JobDetailPage';
import ServicesPage from './pages/ServicesPage';
import SoftwareDevelopmentPage from './pages/ServicesPage/sub-pages/SoftwareDevelopmentPage';
import LandSurveyingPage from './pages/ServicesPage/sub-pages/LandSurveyingPage';
import GeospatialDataPage from './pages/ServicesPage/sub-pages/GeospatialDataPage';
import TrainingSupportPage from './pages/ServicesPage/sub-pages/TrainingSupportPage';
import IdentityIntelligencePage from './pages/ServicesPage/sub-pages/IdentityIntelligencePage';
import BlogPage from './pages/Blog';
import BlogDetailPage from './pages/Blog/detail/BlogDetailPage';
import ContactUsPage from './pages/ContactUs';
import ScheduleMeetingPage from './pages/ScheduleMeeting';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/pdc" element={<PDCPage />} />
        <Route path="/solutions/amp" element={<AMPPage />} />
        <Route path="/solutions/google-workspace-business" element={<GoogleWorkspaceBusinessPage />} />
        <Route path="/solutions/google-workspace-education" element={<GoogleWorkspaceEducationPage />} />
        <Route path="/solutions/high-resolution-imagery" element={<HighResolutionImageryPage />} />
        <Route path="/solutions/google-maps" element={<GoogleMapsPage />} />
        <Route path="/solutions/mapinfo" element={<MapInfoPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/lag-ferry" element={<LagFerryPage />} />
        <Route path="/projects/risk-geo-platform" element={<RiskGeoPage />} />
        <Route path="/projects/mtn-coverage-locator" element={<MTNCoveragePage />} />
        <Route path="/projects/google-street-view" element={<GoogleStreetViewPage />} />
        <Route path="/projects/googl-street-view" element={<GoogleStreetViewPage />} />
        <Route path="/projects/asset-mapping" element={<AssetMappingPage />} />
        <Route path="/projects/thematic-mapping" element={<ThematicMappingPage />} />
        <Route path="/projects/alma-beach" element={<AlmaBeachPage />} />
        <Route path="/projects/land-parcel" element={<LandParcelPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:id" element={<JobDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/services/land-surveying" element={<LandSurveyingPage />} />
        <Route path="/services/geospatial-data-acquisition" element={<GeospatialDataPage />} />
        <Route path="/services/training-support" element={<TrainingSupportPage />} />
        <Route path="/services/identity-intelligence" element={<IdentityIntelligencePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/schedule" element={<ScheduleMeetingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
