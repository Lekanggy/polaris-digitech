/**
 * GoogleStreetViewPage — Project sub-page #4 (Google Street View)
 * 4 sections only: Hero → Meta → Description (no full image) → Objective → Footer
 * No KeyFeatures or Gallery sections.
 */
import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';

// ── Assets ────────────────────────────────────────────────────────────────
import gv1 from '../../../assets/gv1.png';
import gv2 from '../../../assets/gv2.png';
import gv3 from '../../../assets/gv3.png';
import gv4 from '../../../assets/gv4.png';
import gv5 from '../../../assets/gv5.png';

export default function GoogleStreetViewPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <ProjectHero
        bgImage={gv1}
        title="Google Street View"
        subtitle="Collection of street names, environmental features, and building/house/structure details to aid remote view of locations"
      />

      {/* Section 2 — Metadata + showcase image (gv2) */}
      <ProjectMeta
        fields={[
          { label: 'Industry', value: 'Insurance' },
          { label: 'Service', value: 'Risk Geoplaform' },
          { label: 'Year', value: '2016 - 2022' },
          { label: 'Website', value: '-' },
        ]}
        showcaseImage={gv2}
        showcaseAlt="Google Street View laptop showcase"
      />

      {/* Section 3 — Description + two images only (no large bottom image) */}
      <ProjectDescription
        description="A large-scale geospatial data acquisition project where Polaris Digitech Limited serves as a technical partner for Google in Nigeria. The project involves deploying specialized vehicles and cameras to capture high-quality, 360-degree panoramic imagery, street names, and environmental features across Southern Nigeria and significant portions of the North."
        imageLeft={gv3}
        imageRight={gv4}
        imageLeftAlt="User with phone using Google Street View"
        imageRightAlt="Google Street View on mobile"
        /* imageFull intentionally omitted — only two images for this page */
      />

      {/* Section 4 — Objective + image (gv5) */}
      <ProjectObjective
        objectiveNode={
          <>
            <span style={{ color: '#8A93B2' }}>The objective of the project is to </span>
            <span style={{ color: '#283172' }}>
              provide Google Maps users with a "remote view" of locations, allowing for an immersive and interactive experience. The primary goal is to aid navigation, improve location visibility for businesses, and collect environmental statistics that make the Nigerian landscape digitally accessible.
            </span>
          </>
        }
        image={gv5}
        imageAlt="Google Maps navigation in vehicle"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
