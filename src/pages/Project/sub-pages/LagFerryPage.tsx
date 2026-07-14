import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';
import { useProjectData } from './useProjectData';
import lag1 from '../../../assets/lag1.png';
import lag2 from '../../../assets/lag2.png';
import lag3 from '../../../assets/lag3.png';
import lag4 from '../../../assets/lag4.png';
import lag5 from '../../../assets/lag5.png';
import lag6 from '../../../assets/lag6.png';
import lag7 from '../../../assets/lag7.png';
import lag8 from '../../../assets/lag8.png';
import lag9 from '../../../assets/lag9.png';

const HREF = '/projects/lag-ferry';

const FB_FIELDS   = [{ label: 'Industry', value: 'Government' }, { label: 'Service', value: 'Geo-enabled ICT Surveillance Centre' }, { label: 'Year', value: '2023' }, { label: 'Website', value: '-' }];
const FB_FEATURES = [
  { icon: 'geo' as const,           title: 'Geo-Enabled',             description: 'LAGFerry has a location-based system that allows it to collect and analyse data from various sources and present it on a map.' },
  { icon: 'video' as const,         title: 'Video Surveillance',       description: 'A network of video cameras strategically placed in different areas to monitor activities and alert authorities.' },
  { icon: 'emergency' as const,     title: 'Emergency Response',       description: 'The surveillance center can quickly send alerts to relevant authorities, including police, fire department, and ambulance services.' },
  { icon: 'realtime' as const,      title: 'Real-Time Data Collection',description: 'LAGFerry collects and analyses real-time data from various sources to provide timely and accurate information.' },
  { icon: 'collaboration' as const, title: 'Collaboration',            description: 'LAGFerry promotes collaboration among different agencies to enhance security and emergency response.' },
  { icon: 'mobile' as const,        title: 'Mobile App',               description: 'The centre has a mobile app that allows citizens to report suspicious activities and receive alerts.' },
];

export default function LagFerryPage() {
  const cms = useProjectData(HREF);
  const metaFields = cms.metaFields.length > 0 ? cms.metaFields : FB_FIELDS;
  const features   = cms.features.length   > 0 ? cms.features   : FB_FEATURES;

  return (
    <div className="min-h-screen">
      <ProjectHero bgImage={cms.heroBgImage ?? lag1} title={cms.heroTitle ?? 'Lag Ferry'} subtitle={cms.heroSubtitle ?? 'Deployment of Geo-enabled ICT Surveillance Centre for Boats, Ships in Lagos state.'} />
      <ProjectMeta fields={metaFields} showcaseImage={cms.metaImage ?? lag7} showcaseAlt="LagFerry platform showcase" />
      <ProjectDescription
        description={cms.descText ?? 'A collaboration between the Lagos State Ferry Service and Polaris Digitech Limited to deploy a geo-enabled ICT surveillance center integrating CCTV, AIS, and geo-fencing to oversee boat and ship operations across Lagos State waters.'}
        imageLeft={cms.descImageLeft ?? lag4} imageRight={cms.descImageRight ?? lag6} imageFull={cms.descImageFull ?? lag5}
      />
      <ProjectObjective
        objectivePlain={cms.objectiveText}
        objectiveNode={!cms.objectiveText ? (<><span style={{ color: '#8A93B2' }}>The objective of the project is to </span><span style={{ color: '#283172' }}>modernize the water transport sector by enhancing the safety and security of passengers and crew, while providing a real-time data pipeline for maritime stakeholders.</span></>) : undefined}
        image={cms.objectiveImage ?? lag9}
      />
      <ProjectKeyFeatures features={features} heading="Key Features" />
      <ProjectGallery imageLarge={cms.galleryLarge ?? lag2} imageBottomLeft={cms.galleryLeft ?? lag8} imageBottomRight={cms.galleryRight ?? lag3} />
      <Footer />
    </div>
  );
}
