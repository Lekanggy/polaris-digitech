import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import bgpro from '../../../assets/bgpro.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Shared description style ───────────────────────────────────────────────
const descStyle: React.CSSProperties = {
  fontFamily: satoshi,
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '150%',
  letterSpacing: '-0.02em',
};

interface Feature {
  title: string;
  description: string;
}

interface KeyFeaturesProps {
  sectionTitle: string;
  sectionDescription: string;
  features: Feature[];
}

// ── Small pin icon ─────────────────────────────────────────────────────────
function PinIcon() {
  return (
    <div
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginBottom: '12px',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    </div>
  );
}

export default function KeyFeatures({ sectionTitle, sectionDescription, features }: KeyFeaturesProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `url(${bgpro})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 'clamp(40px, 6vw, 100px)',
          alignItems: 'start',
        }}
      >
        {/* Left — section title + description */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: satoshi,
              fontWeight: 600,
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '24px',
            }}
          >
            {sectionTitle}
          </h2>
          <p style={{ ...descStyle, color: 'rgba(255,255,255,0.7)' }}>
            {sectionDescription}
          </p>
        </motion.div>

        {/* Right — feature list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '520px',
            overflowY: 'auto',
            paddingRight: '8px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.25) transparent',
          }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <PinIcon />
              <h3
                style={{
                  fontFamily: satoshi,
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '130%',
                  color: '#FFFFFF',
                  marginBottom: '8px',
                }}
              >
                {feat.title}
              </h3>
              <p style={{ ...descStyle, fontSize: '15px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                {feat.description}
              </p>
              {i < features.length - 1 && (
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)', margin: '20px 0' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
