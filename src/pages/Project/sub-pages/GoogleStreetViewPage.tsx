import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import { useProjectData } from './useProjectData';

const HREF = '/projects/google-street-view';

const FB_FIELDS = [{ label: 'Industry', value: 'Technology' }, { label: 'Service', value: 'Street View Data Collection' }, { label: 'Year', value: '2016 - 2022' }, { label: 'Website', value: '-' }];

export default function GoogleStreetViewPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;

  return (
    <div className="min-h-screen">
      <ProjectHero
        bgImage={cms.heroBgImage!}
        title={cms.heroTitle ?? 'Google Street View'}
        subtitle={cms.heroSubtitle ?? 'Collection of street names, environmental features, and building/house/structure details to aid remote view of locations'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage} showcaseAlt="Google Street View laptop showcase" />
      <ProjectDescription
        description={cms.descText ?? 'A large-scale geospatial data acquisition project where Polaris Digitech Limited serves as a technical partner for Google in Nigeria, deploying specialized vehicles and cameras to capture 360-degree panoramic imagery across Southern Nigeria.'}
        imageLeft={cms.descImageLeft} imageRight={cms.descImageRight} imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>provide Google Maps users with a "remote view" of locations, allowing for an immersive and interactive experience that aids navigation and improves location visibility for businesses.</span></>) : undefined}
        image={cms.objectiveImage}
      />
      <Footer />
    </div>
  );
}

