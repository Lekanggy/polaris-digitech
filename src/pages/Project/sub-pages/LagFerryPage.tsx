/**
 * LagFerryPage — Project sub-page #1
 * Assembles all 7 sections using the shared project sub-page components.
 */
import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';

// ── Assets ────────────────────────────────────────────────────────────────
import lag1 from '../../../assets/lag1.png';
import lag2 from '../../../assets/lag2.png';
import lag3 from '../../../assets/lag3.png';
import lag4 from '../../../assets/lag4.png';
import lag5 from '../../../assets/lag5.png';
import lag6 from '../../../assets/lag6.png';
import lag7 from '../../../assets/lag7.png';
import lag8 from '../../../assets/lag8.png';
import lag9 from '../../../assets/lag9.png';

// ── Key Features data ─────────────────────────────────────────────────────
const LAG_FEATURES = [
  {
    icon: 'geo' as const,
    title: 'Geo-Enabled',
    description:
      'LAGFerry has a location-based system that allows it to collect and analyse data from various sources and present it on a map for easy interpretation.',
  },
  {
    icon: 'video' as const,
    title: 'Video Surveillance',
    description:
      'The centre has a network of video cameras strategically placed in different areas of the city to monitor activities and alert authorities of any suspicious behaviour.',
  },
  {
    icon: 'emergency' as const,
    title: 'Emergency Response',
    description:
      'In case of any emergency, the surveillance center can quickly send alerts to the relevant authorities, including the police, fire department, and ambulance services.',
  },
  {
    icon: 'realtime' as const,
    title: 'Real-Time Data Collection',
    description:
      'LAGFerry collects and analyses real-time data from various sources, including social media, weather stations, and traffic sensors, to provide timely and accurate information for safe boat sailing.',
  },
  {
    icon: 'collaboration' as const,
    title: 'Collaboration',
    description:
      'LAGFerry promotes collaboration among different agencies, including the police, emergency response teams, and the public, to enhance security and emergency response efforts.',
  },
  {
    icon: 'mobile' as const,
    title: 'Mobile App',
    description:
      'The centre has a mobile app that allows citizens to report suspicious activities, accidents, and emergencies, and receive alerts on their smartphones.',
  },
];

export default function LagFerryPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <ProjectHero
        bgImage={lag1}
        title="Lag Ferry"
        subtitle="Deployment of Geo-enabled ICT Surveillance Centre for Boats, Ships in Lagos state."
      />

      {/* Section 2 — Metadata + showcase image */}
      <ProjectMeta
        fields={[
          { label: 'Industry', value: 'Government' },
          { label: 'Service', value: 'Geo-enabled ICT Surveillance Centre' },
          { label: 'Year', value: '2023' },
          { label: 'Website', value: '-' },
        ]}
        showcaseImage={lag7}
        showcaseAlt="LagFerry platform showcase"
      />

      {/* Section 3 — Description + images */}
      <ProjectDescription
        description="A collaboration between the Lagos State Ferry Service and Polaris Digitech Limited to deploy a geo-enabled ICT surveillance center. This advanced hub integrates modern monitoring technologies which includes CCTV, Automatic Identification Systems (AIS), and geo-fencing to oversee boat and ship operations across Lagos State waters."
        imageLeft={lag4}
        imageRight={lag6}
        imageLeftAlt="LagFerry dashboard"
        imageRightAlt="LagFerry mobile app"
        imageFull={lag5}
        imageFullAlt="LagFerry map view"
        cardBg="#D6E8F8"
      />

      {/* Section 4 — Objective + image */}
      <ProjectObjective
        objectiveNode={
          <>
            <span style={{ color: '#8A93B2' }}>The objective of the project is to </span>
            <span style={{ color: '#283172' }}>
              modernize the water transport sector by enhancing the safety and security of passengers and crew, while providing a real-time data pipeline for maritime stakeholders.
            </span>
          </>
        }
        image={lag9}
        imageAlt="Lagos ferry terminal"
      />

      {/* Section 5 — Key Features */}
      <ProjectKeyFeatures features={LAG_FEATURES} heading="Key Features" />

      {/* Section 6 — Gallery */}
      <ProjectGallery
        imageLarge={lag2}
        imageLargeAlt="LagFerry terminal management"
        imageBottomLeft={lag8}
        imageBottomRight={lag3}
        imageBottomLeftAlt="Ferry operator at controls"
        imageBottomRightAlt="AKRAN ferry vessel"
      />

      {/* Section 7 — Footer */}
      <Footer />
    </div>
  );
}
