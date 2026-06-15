/**
 * RiskGeoPage — Project sub-page #2 (Risk Geo-Platform / AXA Mansard)
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
import geo1 from '../../../assets/geo1.jpg';
import geo2 from '../../../assets/geo2.png';
import geo3 from '../../../assets/geo3.jpg';
import geo4 from '../../../assets/geo4.png';
import geo5 from '../../../assets/geo5.jpg';

import prk1 from '../../../assets/prk1.png';
import prk2 from '../../../assets/prk2.png';
import prk3 from '../../../assets/prk3.png';
import prk4 from '../../../assets/prk4.png';

// ── Key Features data (5 cards) ───────────────────────────────────────────
const GEO_FEATURES = [
  {
    icon: 'database' as const,
    title: 'Centralized Repository',
    description:
      'The portal uses high-quality address data to validate addresses in real-time, ensuring that they are accurate and complete.',
  },
  {
    icon: 'globe' as const,
    title: 'Geospatial analysis',
    description:
      'The portal standardizes address data to ensure it conforms to globally recognized formats, increasing accuracy and efficiency.',
  },
  {
    icon: 'monitor' as const,
    title: 'Real-time Monitoring',
    description:
      'The portal uses geocoding technology to assign latitude and longitude coordinates to each address, allowing businesses to plot locations on a map.',
  },
  {
    icon: 'geo' as const,
    title: 'Customizable Alerts',
    description:
      'The portal cleanses address data by removing duplicates, incorrect data, and incomplete data, improving data quality.',
  },
  {
    icon: 'collaboration' as const,
    title: 'Collaboration Tools',
    description:
      'The portal enriches address data with additional information such as demographic data, property information, and building footprints, allowing businesses to gain deeper insights into their customers and locations.',
  },
];

export default function RiskGeoPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <ProjectHero
        bgImage={geo1}
        title="The Risk Geo-Platform"
        subtitle="A tool for AXA Mansard to assess assets for insurance by current and potential customers, ensuring they have the right policies."
      />

      {/* Section 2 — Metadata + showcase image prk3 */}
      <ProjectMeta
        fields={[
          { label: 'Industry', value: 'Insurance' },
          { label: 'Service', value: 'Risk Geoplaform' },
          { label: 'Year', value: '2016 - 2022' },
          { label: 'Website', value: '-' },
        ]}
        showcaseImage={prk3}
        showcaseAlt="Risk Geo-Platform showcase"
      />

      {/* Section 3 — Description + prk images */}
      <ProjectDescription
        description="The GEO-Risk Platform is a specialized geospatial tool developed and deployed for AXA Mansard in Lagos by Polaris Digitech Limited. It is designed to evaluate and analyze assets within a geographic context to assist in insurance underwriting and risk assessment."
        imageLeft={prk4}
        imageRight={prk2}
        imageLeftAlt="Risk assessment presentation"
        imageRightAlt="GEO-Risk dashboard"
        imageFull={prk1}
        imageFullAlt="GEO-Risk map platform"
        cardBg="#E8E8F4"
      />

      {/* Section 4 — Objective + image */}
      <ProjectObjective
        objectiveNode={
          <>
            <span style={{ color: '#8A93B2' }}>The objective of the project is to </span>
            <span style={{ color: '#283172' }}>
              build a platform that enables AXA Mansard to accurately evaluate both prospective and existing assets, ensuring customers are placed on the correct policies and that premiums are commensurate with the actual risk levels of the asset's location.
            </span>
          </>
        }
        image={geo4}
        imageAlt="AXA Mansard insurance consultation"
      />

      {/* Section 5 — Key Features (5 cards) */}
      <ProjectKeyFeatures features={GEO_FEATURES} heading="Key Features" />

      {/* Section 6 — Gallery */}
      <ProjectGallery
        imageLarge={geo2}
        imageLargeAlt="GEO-Risk platform map view"
        imageBottomLeft={geo5}
        imageBottomRight={geo3}
        imageBottomLeftAlt="Insurance client meeting"
        imageBottomRightAlt="Nigerian naira currency"
      />

      {/* Section 7 — Footer */}
      <Footer />
    </div>
  );
}
