import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';
import { useProjectData } from './useProjectData';
import geo1 from '../../../assets/geo1.jpg';
import geo2 from '../../../assets/geo2.png';
import geo3 from '../../../assets/geo3.jpg';
import geo4 from '../../../assets/geo4.png';
import geo5 from '../../../assets/geo5.jpg';
import prk1 from '../../../assets/prk1.png';
import prk2 from '../../../assets/prk2.png';
import prk3 from '../../../assets/prk3.png';
import prk4 from '../../../assets/prk4.png';

const HREF = '/projects/risk-geo-platform';

const FB_FIELDS   = [{ label: 'Industry', value: 'Insurance' }, { label: 'Service', value: 'Risk Geoplatform' }, { label: 'Year', value: '2016 - 2022' }, { label: 'Website', value: '-' }];
const FB_FEATURES = [
  { icon: 'database' as const,      title: 'Centralized Repository',  description: 'High-quality address data validates addresses in real-time, ensuring they are accurate and complete.' },
  { icon: 'globe' as const,         title: 'Geospatial analysis',     description: 'The portal standardizes address data to conform to globally recognized formats.' },
  { icon: 'monitor' as const,       title: 'Real-time Monitoring',    description: 'Geocoding technology assigns coordinates to each address, allowing businesses to plot locations on a map.' },
  { icon: 'geo' as const,           title: 'Customizable Alerts',     description: 'The portal cleanses address data by removing duplicates, incorrect data, and incomplete records.' },
  { icon: 'collaboration' as const, title: 'Collaboration Tools',     description: 'The portal enriches address data with additional information such as demographic and property data.' },
];

export default function RiskGeoPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;
  const features   = cms.features.length   > 0 ? cms.features   : FB_FEATURES;

  return (
    <div className="min-h-screen">
      <ProjectHero bgImage={cms.heroBgImage ?? geo1} title={cms.heroTitle ?? 'The Risk Geo-Platform'} subtitle={cms.heroSubtitle ?? 'A tool for AXA Mansard to assess assets for insurance by current and potential customers.'} />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage ?? prk3} showcaseAlt="Risk Geo-Platform showcase" />
      <ProjectDescription
        description={cms.descText ?? 'The GEO-Risk Platform is a specialized geospatial tool developed for AXA Mansard in Lagos by Polaris Digitech Limited to evaluate and analyze assets within a geographic context to assist in insurance underwriting and risk assessment.'}
        imageLeft={cms.descImageLeft ?? prk4} imageRight={cms.descImageRight ?? prk2} imageFull={cms.descImageFull ?? prk1}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>build a platform that enables AXA Mansard to accurately evaluate both prospective and existing assets, ensuring customers are placed on the correct policies.</span></>) : undefined}
        image={cms.objectiveImage ?? geo4}
      />
      <ProjectKeyFeatures features={features} heading="Key Features" />
      <ProjectGallery imageLarge={cms.galleryLarge ?? geo2} imageBottomLeft={cms.galleryLeft ?? geo5} imageBottomRight={cms.galleryRight ?? geo3} />
      <Footer />
    </div>
  );
}
