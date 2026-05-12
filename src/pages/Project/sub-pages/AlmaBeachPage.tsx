/**
 * AlmaBeachPage — Project sub-page (Alma Beach Estate)
 * Sections: Hero → Meta → Description → Objective → Footer
 */
import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';

// ── Assets ────────────────────────────────────────────────────────────────
import alBeach from '../../../assets/al-beach.png';

export default function AlmaBeachPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <ProjectHero
        bgImage={alBeach}
        title="Alma Beach"
        subtitle="Evaluate survey plan and set out the proposed coastal road right of way"
      />

      {/* Section 2 — Metadata + showcase image */}
      <ProjectMeta
        fields={[
          { label: 'Industry', value: 'Real Estate' },
          { label: 'Service', value: 'Land Surveying' },
          { label: 'Client', value: 'ALMA Beach Estate' },
          { label: 'Website', value: '-' },
        ]}
        showcaseImage={alBeach}
        showcaseAlt="Alma Beach Estate coastal road survey"
      />

      {/* Section 3 — Description */}
      <ProjectDescription
        description="Alma Beach Estate is a high-end beachfront development in the Elegushi area of Lagos. As part of the estate's development plan, Polaris Digitech Limited was engaged to evaluate the survey plan and set out the proposed coastal road right of way, using advanced surveying techniques to accurately measure and mark out the road boundaries to the required width and position."
        imageLeft={alBeach}
        imageRight={alBeach}
        imageLeftAlt="Alma Beach Estate coastal survey"
        imageRightAlt="Alma Beach Estate road right of way"
      />

      {/* Section 4 — Objective */}
      <ProjectObjective
        objectiveNode={
          <>
            <span style={{ color: '#8A93B2' }}>The objective of the project is to </span>
            <span style={{ color: '#283172' }}>
              evaluate the survey plan and set out the proposed coastal road right of way. This involves using advanced surveying techniques to accurately measure and mark out the boundaries of the right of way. The aim is to ensure that the road is located in the correct position and is of the required width. The client, ALMA Beach Estate, has chosen Polaris Digitech Limited as the contractor for the project.
            </span>
          </>
        }
        image={alBeach}
        imageAlt="Alma Beach Estate aerial view"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
