import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';
import { useProjectData } from './useProjectData';

const HREF = '/projects/mtn-coverage-locator';

const FB_FIELDS   = [{ label: 'Industry', value: 'Telecommunication' }, { label: 'Service', value: 'EGIS & Coverage Locator' }, { label: 'Year', value: '2023 (v3.0)' }, { label: 'Website', value: 'coverage.mtn.ng' }];
const FB_FEATURES = [
  { icon: 'geo' as const,   title: 'Location-based Intelligence', description: "MTNN coverage locator uses GPS to pinpoint the customer's location and show the coverage in that area." },
  { icon: 'globe' as const, title: 'Map View',              description: 'The application provides a map view showing the signal strength of all MTNN base stations in your area.' },
  { icon: 'monitor' as const, title: 'Network Strength',    description: "The application provides information about the strength of the network signal in the customer's area." },
  { icon: 'geo' as const,   title: 'Coverage Status',       description: "The application shows the current status of the network coverage in the customer's area." },
  { icon: 'globe' as const, title: 'Report a Problem',      description: 'The application allows customers to report any network issues they encounter in their area.' },
  { icon: 'globe' as const, title: 'Walk-in Stores',        description: "Shows all the various MTN walk-in stores available in the country based on the user's location." },
];

export default function MTNCoveragePage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;
  const features   = cms.features.length   > 0 ? cms.features   : FB_FEATURES;

  return (
    <div className="min-h-screen">
      <ProjectHero
        bgImage={cms.heroBgImage}
        title={cms.heroTitle ?? 'MTN Coverage Locator'}
        subtitle={cms.heroSubtitle ?? 'The MTNN Coverage Locator helps users find network coverage and report weak areas, boosting 5G sales and adoption.'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage} showcaseAlt="MTN Coverage Locator platform" />
      <ProjectDescription
        description={cms.descText ?? 'The Coverage Locator Application developed by PDL for MTN Nigeria serves as a web-based map interface providing real-time visibility into network signal strength and availability across Nigeria.'}
        imageLeft={cms.descImageLeft} imageRight={cms.descImageRight} imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>enhance customer satisfaction and service delivery by providing transparent network information, driving 5G adoption, and assisting the network planning team in identifying high-value clusters for broadband expansion.</span></>) : undefined}
        image={cms.objectiveImage}
      />
      <ProjectKeyFeatures features={features} heading="Key Features" />
      <ProjectGallery imageLarge={cms.galleryLarge} imageBottomLeft={cms.galleryLeft} imageBottomRight={cms.galleryRight} />
      <Footer />
    </div>
  );
}

