/**
 * ThematicMappingPage — Project sub-page (Thematic Mapping of Restricted Areas for Mining)
 */
import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectDescription from './ProjectDescription';
import ProjectObjective from './ProjectObjective';

// ── Assets ────────────────────────────────────────────────────────────────
import project3 from '../../../assets/project3.png';
import geo2 from '../../../assets/geo2.png';
import geo4 from '../../../assets/geo4.png';
import geo6 from '../../../assets/geo6.png';
import geo7 from '../../../assets/geo7.png';

export default function ThematicMappingPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <ProjectHero
        bgImage={project3}
        title="Thematic Mapping of Restricted Areas for Mining"
        subtitle="Production of Thematic Mapping of Areas Restricted (Protected) From Mining Activities in Nigeria for Integration into the Nigeria Mining Cadastre Digital Database"
      />

      {/* Section 2 — Metadata */}
      <ProjectMeta
        fields={[
          { label: 'Industry', value: 'Mining & Natural Resources' },
          { label: 'Service', value: 'Geospatial Data Acquisition' },
          { label: 'Client', value: 'Nigeria Mining Cadastre Office' },
          { label: 'Website', value: '-' },
        ]}
        showcaseImage={geo2}
        showcaseAlt="Thematic mapping showcase"
      />

      {/* Section 3 — Description */}
      <ProjectDescription
        description="Polaris Digitech Limited was engaged to produce comprehensive thematic maps of areas restricted and protected from mining activities across Nigeria. The deliverables were designed for seamless integration into the Nigeria Mining Cadastre Digital Database, providing regulators and stakeholders with accurate spatial data on protected zones."
        imageLeft={geo4}
        imageRight={geo6}
        imageLeftAlt="Thematic map of restricted mining area"
        imageRightAlt="Field data collection for mining cadastre"
      />

      {/* Section 4 — Objective */}
      <ProjectObjective
        objectiveNode={
          <>
            <span style={{ color: '#8A93B2' }}>The objective of the project is to </span>
            <span style={{ color: '#283172' }}>
              delineate and document all areas restricted from mining activities in Nigeria, producing accurate thematic maps that support regulatory compliance, environmental protection, and the modernisation of the Nigeria Mining Cadastre Digital Database.
            </span>
          </>
        }
        image={geo7}
        imageAlt="Nigeria mining cadastre digital database"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
