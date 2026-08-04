import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';
import { useProjectData } from './useProjectData';

const HREF = '/projects/land-parcel';
const FB_FIELDS   = [{ label: 'Industry', value: 'Government' }, { label: 'Service', value: 'Land Information System' }, { label: 'Year', value: '2020' }, { label: 'Website', value: '-' }];

export default function LandParcelPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;
  const features   = cms.features;

  return (
    <div className="min-h-screen">
      <ProjectHero
        bgImage={cms.heroBgImage}
        title={cms.heroTitle ?? 'Land Parcel Information System'}
        subtitle={cms.heroSubtitle ?? 'A state-of-the-art, automated land management and physical planning system for the Osun State Ministry of Land.'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage} />
      <ProjectDescription
        description={cms.descText ?? 'A state-of-the-art, automated land management and physical planning system developed for the Osun State Ministry of Land and Physical Planning by Polaris Digitech Limited.'}
        imageLeft={cms.descImageLeft} imageRight={cms.descImageRight} imageFull={cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>provide a user-friendly application that automates the Ministry's daily activities, enhances operational efficiency, and ensures accurate, up-to-date land ownership and physical planning data.</span></>) : undefined}
        image={cms.objectiveImage}
      />
      {features.length > 0 ? <ProjectKeyFeatures features={features} heading="Key Features" /> : null}
      <ProjectGallery imageLarge={cms.galleryLarge} imageBottomLeft={cms.galleryLeft} imageBottomRight={cms.galleryRight} />
      <Footer />
    </div>
  );
}

