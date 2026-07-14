import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import { useProjectData } from './useProjectData';
import alBeach from '../../../assets/al-beach.png';

const HREF = '/projects/alma-beach';
const FB_FIELDS = [{ label: 'Industry', value: 'Real Estate' }, { label: 'Service', value: 'Land Surveying' }, { label: 'Client', value: 'ALMA Beach Estate' }, { label: 'Website', value: '-' }];

export default function AlmaBeachPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;

  return (
    <div className="min-h-screen">
      <ProjectHero
        bgImage={cms.heroBgImage ?? alBeach}
        title={cms.heroTitle ?? 'Alma Beach'}
        subtitle={cms.heroSubtitle ?? 'Evaluate survey plan and set out the proposed coastal road right of way'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage ?? alBeach} showcaseAlt="Alma Beach Estate coastal road survey" />
      <ProjectDescription
        description={cms.descText ?? 'Alma Beach Estate is a high-end beachfront development in the Elegushi area of Lagos. Polaris Digitech Limited was engaged to evaluate the survey plan and set out the proposed coastal road right of way using advanced surveying techniques.'}
        imageLeft={cms.descImageLeft ?? alBeach} imageRight={cms.descImageRight ?? alBeach}
        imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>evaluate the survey plan and set out the proposed coastal road right of way, accurately measuring and marking out the boundaries to ensure the road is located in the correct position and is of the required width.</span></>) : undefined}
        image={cms.objectiveImage ?? alBeach}
      />
      <Footer />
    </div>
  );
}
