import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';
import { useProjectData } from './useProjectData';

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
      <ProjectHero
        bgImage={cms.heroBgImage}
        title={cms.heroTitle ?? 'The Risk Geo-Platform'}
        subtitle={cms.heroSubtitle ?? 'A tool for AXA Mansard to assess assets for insurance by current and potential customers.'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage} showcaseAlt="Risk Geo-Platform showcase" />
      <ProjectDescription
        description={cms.descText ?? 'The GEO-Risk Platform is a specialized geospatial tool developed for AXA Mansard in Lagos by Polaris Digitech Limited to evaluate and analyze assets within a geographic context to assist in insurance underwriting and risk assessment.'}
        imageLeft={cms.descImageLeft} imageRight={cms.descImageRight} imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>build a platform that enables AXA Mansard to accurately evaluate both prospective and existing assets, ensuring customers are placed on the correct policies.</span></>) : undefined}
        image={cms.objectiveImage}
      />
      <ProjectKeyFeatures features={features} heading="Key Features" />
      <ProjectGallery imageLarge={cms.galleryLarge} imageBottomLeft={cms.galleryLeft} imageBottomRight={cms.galleryRight} />
      <Footer />
    </div>
  );
}

