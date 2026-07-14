import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import { useProjectData } from './useProjectData';
import asm1 from '../../../assets/asm1.png';
import asm2 from '../../../assets/asm2.png';
import asm3 from '../../../assets/asm3.png';
import asm4 from '../../../assets/asm4.png';

const HREF = '/projects/asset-mapping';
const FB_FIELDS = [{ label: 'Industry', value: 'Energy / Utilities' }, { label: 'Service', value: 'Asset Mapping & Customer Enumeration' }, { label: 'Year', value: '2020' }, { label: 'Website', value: '-' }];

export default function AssetMappingPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;

  return (
    <div className="min-h-screen">
      <ProjectHero
        bgImage={cms.heroBgImage ?? asm1}
        title={cms.heroTitle ?? 'Asset Mapping and Customer Enumeration'}
        subtitle={cms.heroSubtitle ?? 'A comprehensive geospatial data collection and field enumeration project conducted for Eko Disco in Lagos.'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage ?? asm3} showcaseAlt="Asset mapping project on laptop" />
      <ProjectDescription
        description={cms.descText ?? 'A comprehensive geospatial data collection and field enumeration project conducted for Eko Disco in Lagos. The project involves identifying, locating, and mapping physical electrical assets (such as transformers and poles) and linking them directly to the customers they serve.'}
        imageLeft={cms.descImageLeft ?? asm2} imageRight={cms.descImageRight ?? asm4}
        imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>ascertain the exact number of customers connected to each specific asset within the Eko Disco network, serving as a critical prerequisite for the deployment of their SCADA project.</span></>) : undefined}
        image={cms.objectiveImage}
      />
      <Footer />
    </div>
  );
}
