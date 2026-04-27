/**
 * AssetMappingPage — Project sub-page #5
 * (Asset Mapping and Customer Enumeration / Eko Disco)
 * 3 sections + Footer:
 *   S1 — Hero (asm1)
 *   S2 — Meta + showcase image (asm3)
 *   S3 — Description with two images (asm2, asm4) + inline objective text below
 *   Footer
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import Footer from '../../../components/sections/Footer';
import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';

// ── Assets ────────────────────────────────────────────────────────────────
import asm1 from '../../../assets/asm1.png';
import asm2 from '../../../assets/asm2.png';
import asm3 from '../../../assets/asm3.png';
import asm4 from '../../../assets/asm4.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Section 3: Description + two images + objective text ──────────────────
function DescriptionSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      style={{
        background: '#EBECF6',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div style={{ width: '80vw', margin: '0 auto' }}>

        {/* Heading + description text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <h2
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '72px',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#010527',
              marginBottom: '24px',
            }}
          >
            Description
          </h2>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '150%',
              letterSpacing: '-0.02em',
              color: '#46485F',
              maxWidth: '900px',
            }}
          >
            A comprehensive geospatial data collection and field enumeration project conducted for Eko Disco in Lagos. The project involves identifying, locating, and mapping physical electrical assets (such as transformers and poles) and linking them directly to the customers they serve.
          </p>
        </motion.div>

        {/* Two side-by-side images */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginBottom: '56px',
          }}
        >
          {/* Left card — white bg */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '40px',
              paddingTop: '48px',
              paddingBottom: '48px',
              paddingLeft: '10px',
              paddingRight: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '502px',
            }}
          >
            <img
              src={asm2}
              alt="Electrical transformer asset"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '28px',
                display: 'block',
              }}
            />
          </div>

          {/* Right card — white bg */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '40px',
              paddingTop: '48px',
              paddingBottom: '48px',
              paddingLeft: '10px',
              paddingRight: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '502px',
            }}
          >
            <img
              src={asm4}
              alt="Field engineers on site"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '28px',
                display: 'block',
              }}
            />
          </div>
        </motion.div>

        {/* Objective text below the images */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
            color: '#46485F',
            maxWidth: '900px',
          }}
        >
          The objective of the project is to ascertain the exact number of customers connected to each specific asset within the Eko Disco network. This data serves as a critical prerequisite for the deployment and success of their SCADA (Supervisory Control and Data Acquisition) project.
        </motion.p>

      </div>
    </section>
  );
}

// ── Page assembly ─────────────────────────────────────────────────────────
export default function AssetMappingPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <ProjectHero
        bgImage={asm1}
        title="Asset Mapping and Customer Enumeration"
        subtitle="A comprehensive geospatial data collection and field enumeration project conducted for Eko Disco in Lagos."
      />

      {/* Section 2 — Metadata + showcase image (asm3) */}
      <ProjectMeta
        fields={[
          { label: 'Industry', value: 'Insurance' },
          { label: 'Service', value: 'Risk Geoplaform' },
          { label: 'Year', value: '2020' },
          { label: 'Website', value: '-' },
        ]}
        showcaseImage={asm3}
        showcaseAlt="Asset mapping project on laptop"
      />

      {/* Section 3 — Description + images + objective */}
      <DescriptionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
