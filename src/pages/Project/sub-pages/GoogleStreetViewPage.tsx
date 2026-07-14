import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import { useProjectData } from './useProjectData';
import gv1 from '../../../assets/gv1.png';
import gv2 from '../../../assets/gv2.png';
import gv3 from '../../../assets/gv3.png';
import gv4 from '../../../assets/gv4.png';
import gv5 from '../../../assets/gv5.png';

const HREF = '/projects/googl-street-view';

const FB_FIELDS = [{ label: 'Industry', value: 'Technology' }, { label: 'Service', value: 'Street View Data Collection' }, { label: 'Year', value: '2016 - 2022' }, { label: 'Website', value: '-' }];

export default function GoogleStreetViewPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;

  return (
    <div className="min-h-screen">
      <ProjectHero bgImage={cms.heroBgImage ?? gv1} title={cms.heroTitle ?? 'Google Street View'} subtitle={cms.heroSubtitle ?? 'Collection of street names, environmental features, and building/house/structure details to aid remote view of locations'} />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage ?? gv2} showcaseAlt="Google Street View laptop showcase" />
      <ProjectDescription
        description={cms.descText ?? 'A large-scale geospatial data acquisition project where Polaris Digitech Limited serves as a technical partner for Google in Nigeria, deploying specialized vehicles and cameras to capture 360-degree panoramic imagery across Southern Nigeria.'}
        imageLeft={cms.descImageLeft ?? gv3} imageRight={cms.descImageRight ?? gv4} imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>provide Google Maps users with a "remote view" of locations, allowing for an immersive and interactive experience that aids navigation and improves location visibility for businesses.</span></>) : undefined}
        image={cms.objectiveImage ?? gv5}
      />
      <Footer />
    </div>
  );
}
