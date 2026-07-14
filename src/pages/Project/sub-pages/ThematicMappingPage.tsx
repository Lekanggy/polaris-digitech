import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import { useProjectData } from './useProjectData';
import project3 from '../../../assets/project3.png';
import geo2 from '../../../assets/geo2.png';
import geo4 from '../../../assets/geo4.png';
import geo6 from '../../../assets/geo6.png';
import geo7 from '../../../assets/geo7.png';

const HREF = '/projects/thematic-mapping';
const FB_FIELDS = [{ label: 'Industry', value: 'Mining & Natural Resources' }, { label: 'Service', value: 'Geospatial Data Acquisition' }, { label: 'Client', value: 'Nigeria Mining Cadastre Office' }, { label: 'Website', value: '-' }];

export default function ThematicMappingPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;

  return (
    <div className="min-h-screen">
      <ProjectHero
        bgImage={cms.heroBgImage ?? project3}
        title={cms.heroTitle ?? 'Thematic Mapping of Restricted Areas for Mining'}
        subtitle={cms.heroSubtitle ?? 'Production of Thematic Mapping of Areas Restricted From Mining Activities in Nigeria for Integration into the Nigeria Mining Cadastre Digital Database'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage ?? geo2} showcaseAlt="Thematic mapping showcase" />
      <ProjectDescription
        description={cms.descText ?? 'Polaris Digitech Limited was engaged to produce comprehensive thematic maps of areas restricted and protected from mining activities across Nigeria, designed for seamless integration into the Nigeria Mining Cadastre Digital Database.'}
        imageLeft={cms.descImageLeft ?? geo4} imageRight={cms.descImageRight ?? geo6}
        imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>delineate and document all areas restricted from mining activities in Nigeria, producing accurate thematic maps that support regulatory compliance, environmental protection, and the modernisation of the Nigeria Mining Cadastre Digital Database.</span></>) : undefined}
        image={cms.objectiveImage ?? geo7}
      />
      <Footer />
    </div>
  );
}
