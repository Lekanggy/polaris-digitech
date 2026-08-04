import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';
import { useProjectData } from './useProjectData';

const HREF = '/projects/lag-ferry';

const FB_FIELDS   = [{ label: 'Industry', value: 'Government' }, { label: 'Service', value: 'Geo-enabled ICT Surveillance Centre' }, { label: 'Year', value: '2023' }, { label: 'Website', value: '-' }];

export default function LagFerryPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;
  const features   = cms.features;

  return (
    <div className="min-h-screen">
      <ProjectHero
        bgImage={cms.heroBgImage}
        title={cms.heroTitle ?? 'Lag Ferry'}
        subtitle={cms.heroSubtitle ?? 'Deployment of Geo-enabled ICT Surveillance Centre for Boats, Ships in Lagos state.'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage} showcaseAlt="LagFerry platform showcase" />
      <ProjectDescription
        description={cms.descText ?? 'A collaboration between the Lagos State Ferry Service and Polaris Digitech Limited to deploy a geo-enabled ICT surveillance center integrating CCTV, AIS, and geo-fencing to oversee boat and ship operations across Lagos State waters.'}
        imageLeft={cms.descImageLeft} imageRight={cms.descImageRight} imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>modernize the water transport sector by enhancing the safety and security of passengers and crew, while providing a real-time data pipeline for maritime stakeholders.</span></>) : undefined}
        image={cms.objectiveImage}
      />
      {features.length > 0 ? <ProjectKeyFeatures features={features} heading="Key Features" /> : null}
      <ProjectGallery imageLarge={cms.galleryLarge} imageBottomLeft={cms.galleryLeft} imageBottomRight={cms.galleryRight} />
      <Footer />
    </div>
  );
}

