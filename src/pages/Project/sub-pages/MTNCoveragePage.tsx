/**
 * MTNCoveragePage — Project sub-page #3 (MTN Coverage Locator)
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
import mtn1 from '../../../assets/mtn1.png';
import mtn2 from '../../../assets/mtn2.png';
import mtn3 from '../../../assets/mtn3.png';
import mtn4 from '../../../assets/mtn4.png';
import mtn5 from '../../../assets/mtn5.png';
import mtn6 from '../../../assets/mtn6.png';
import mtn7 from '../../../assets/mtn7.png';
import mtn8 from '../../../assets/mtn8.png';
import mtn9 from '../../../assets/mtn9.png';

// ── Key Features data (6 cards) ───────────────────────────────────────────
const MTN_FEATURES = [
  {
    icon: 'geo' as const,
    title: 'Location-based Intelligence',
    description:
      'MTNN coverage locator uses GPS to pinpoint the customer\'s location and show the coverage in that area.',
  },
  {
    icon: 'globe' as const,
    title: 'Map View',
    description:
      'The application provides a map view showing the signal strength of all MTNN base stations in your area.',
  },
  {
    icon: 'monitor' as const,
    title: 'Network Strength',
    description:
      'The application provides information about the strength of the network signal in the customer\'s area.',
  },
  {
    icon: 'geo' as const,
    title: 'Coverage Status',
    description:
      'The application shows the current status of the network coverage in the customer\'s area.',
  },
  {
    icon: 'globe' as const,
    title: 'Report a Problem',
    description:
      'The application allows customers to report any network issues they encounter in their area.',
  },
  {
    icon: 'globe' as const,
    title: 'Walk-in Stores',
    description:
      'The web-application shows all the various MTN walk-in stores available in the country based on the user\'s location.',
  },
];

export default function MTNCoveragePage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <ProjectHero
        bgImage={mtn1}
        title="MTN Coverage Locator"
        subtitle="The MTNN Coverage Locator helps users find network coverage and report weak areas, boosting 5G sales and adoption."
      />

      {/* Section 2 — Metadata + showcase image (mtn8) */}
      <ProjectMeta
        fields={[
          { label: 'Industry', value: 'Telecommunication' },
          { label: 'Service', value: 'EGIS & Coverage Locator' },
          { label: 'Year', value: '2023 (v3.0)' },
          { label: 'Website', value: 'coverage.mtn.ng' },
        ]}
        showcaseImage={mtn8}
        showcaseAlt="MTN Coverage Locator platform"
      />

      {/* Section 3 — Description + images (mtn4 left, mtn3 right, mtn6 full) */}
      <ProjectDescription
        description="The Coverage Locator Application developed by Polaris Digitech Limited (PDL) for MTN Nigeria serves as a web-based map interface that provides real-time visibility into network signal strength and availability across Nigeria for both subscribers and retail staff."
        imageLeft={mtn4}
        imageRight={mtn3}
        imageLeftAlt="MTN user with phone"
        imageRightAlt="MTN Coverage Locator mobile app"
        imageFull={mtn6}
        imageFullAlt="MTN Coverage Locator map dashboard"
        cardBg="#FFF8E1"
      />

      {/* Section 4 — Objective + image (mtn5) */}
      <ProjectObjective
        objectiveNode={
          <>
            <span style={{ color: '#8A93B2' }}>The objective of the project is to </span>
            <span style={{ color: '#283172' }}>
              enhance customer satisfaction and service delivery by providing transparent network information, driving 5G adoption, and assisting the network planning team in identifying high-value clusters for broadband expansion.
            </span>
          </>
        }
        image={mtn5}
        imageAlt="MTN 5G network coverage map"
      />

      {/* Section 5 — Key Features (6 cards) */}
      <ProjectKeyFeatures features={MTN_FEATURES} heading="Key Features" />

      {/* Section 6 — Gallery (mtn7 large, mtn2 + mtn9 bottom) */}
      <ProjectGallery
        imageLarge={mtn7}
        imageLargeAlt="MTN Coverage Locator Nigeria map"
        imageBottomLeft={mtn2}
        imageBottomRight={mtn9}
        imageBottomLeftAlt="MTN Store"
        imageBottomRightAlt="MTN user checking coverage"
      />

      {/* Section 7 — Footer */}
      <Footer />
    </div>
  );
}
