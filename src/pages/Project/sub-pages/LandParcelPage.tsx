/**
 * LandParcelPage — Project sub-page #6 (Land Parcel Information System / OLIS)
 * Full 6-section structure. Images are not available — placeholder cards used.
 * Only the hero bg image (lad.png) is available.
 */
import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectGallery from './ProjectGallery';

// ── Assets ────────────────────────────────────────────────────────────────
import lad from '../../../assets/lad.png';

// ── Key Features data (5 cards matching design) ───────────────────────────
const LAND_FEATURES = [
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
    icon: 'globe' as const,
    title: 'Collaboration Tools',
    description:
      'The portal enriches address data with additional information such as demographic data, property information, and building footprints, allowing businesses to gain deeper insights into their customers and locations.',
  },
];

export default function LandParcelPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero (lad.png available) */}
      <ProjectHero
        bgImage={lad}
        title="Land Parcel Information System"
        subtitle="A state-of-the-art, automated land management and physical planning system developed for the Osun State Ministry of Land and Physical Planning"
      />

      {/* Section 2 — Metadata + placeholder card (no image) */}
      <ProjectMeta
        fields={[
          { label: 'Industry', value: 'Insurance' },
          { label: 'Service', value: 'Risk Geoplaform' },
          { label: 'Year', value: '2020' },
          { label: 'Website', value: '-' },
        ]}
        showcaseCardBg="#EBECF6"
        showcaseCardHeight={480}
      />

      {/* Section 3 — Description + two placeholder cards + large placeholder card */}
      <ProjectDescription
        description="A state-of-the-art, automated land management and physical planning system developed for the Osun State Ministry of Land and Physical Planning by Polaris Digitech Limited. The system serves as a digital repository and operational hub for managing state land resources."
        /* No images available — placeholder cards rendered */
        imageFullPlaceholder
      />

      {/* Section 4 — Objective + placeholder card */}
      <ProjectObjective
        objectiveNode={
          <>
            <span style={{ color: '#8A93B2' }}>The objective of the project is to </span>
            <span style={{ color: '#283172' }}>
              provide a user-friendly application that automates the Ministry's daily activities, enhances operational efficiency, and ensures the availability of accurate, up-to-date data regarding land ownership and physical planning.
            </span>
          </>
        }
        /* No image available — placeholder card rendered */
        placeholderHeight={400}
      />

      {/* Section 5 — Key Features (5 cards) */}
      <ProjectKeyFeatures features={LAND_FEATURES} heading="Key Features" />

      {/* Section 6 — Gallery with all placeholder cards */}
      <ProjectGallery
        /* No images available — all placeholder cards */
        placeholderBg="#EBECF6"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
