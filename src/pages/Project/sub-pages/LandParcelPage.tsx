import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';
import { useProjectData } from './useProjectData';
import lad from '../../../assets/lad.png';

const HREF = '/projects/land-parcel';
const FB_FIELDS   = [{ label: 'Industry', value: 'Government' }, { label: 'Service', value: 'Land Information System' }, { label: 'Year', value: '2020' }, { label: 'Website', value: '-' }];
const FB_FEATURES = [
  { icon: 'database' as const, title: 'Centralized Repository',  description: 'The portal uses high-quality address data to validate addresses in real-time, ensuring accuracy and completeness.' },
  { icon: 'globe' as const,    title: 'Geospatial Analysis',     description: 'The portal standardizes address data to ensure it conforms to globally recognized formats.' },
  { icon: 'monitor' as const,  title: 'Real-time Monitoring',    description: 'Geocoding technology assigns coordinates to each address, allowing businesses to plot locations on a map.' },
  { icon: 'geo' as const,      title: 'Customizable Alerts',     description: 'The portal cleanses address data by removing duplicates, incorrect data, and incomplete records.' },
  { icon: 'globe' as const,    title: 'Collaboration Tools',     description: 'The portal enriches address data with demographic and property information for deeper insights.' },
];

export default function LandParcelPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;
  const features   = cms.features.length   > 0 ? cms.features   : FB_FEATURES;

  return (
    <div className="min-h-screen">
      <ProjectHero
        bgImage={cms.heroBgImage ?? lad}
        title={cms.heroTitle ?? 'Land Parcel Information System'}
        subtitle={cms.heroSubtitle ?? 'A state-of-the-art, automated land management and physical planning system for the Osun State Ministry of Land.'}
      />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage} showcaseCardBg="#EBECF6" showcaseCardHeight={480} />
      <ProjectDescription
        description={cms.descText ?? 'A state-of-the-art, automated land management and physical planning system developed for the Osun State Ministry of Land and Physical Planning by Polaris Digitech Limited.'}
        imageLeft={cms.descImageLeft} imageRight={cms.descImageRight} imageFull={cms.descImageFull}
        imageFullPlaceholder={!cms.descImageFull}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>provide a user-friendly application that automates the Ministry's daily activities, enhances operational efficiency, and ensures accurate, up-to-date land ownership and physical planning data.</span></>) : undefined}
        image={cms.objectiveImage}
        placeholderHeight={400}
      />
      <ProjectKeyFeatures features={features} heading="Key Features" />
      <ProjectGallery imageLarge={cms.galleryLarge} imageBottomLeft={cms.galleryLeft} imageBottomRight={cms.galleryRight} placeholderBg="#EBECF6" />
      <Footer />
    </div>
  );
}
