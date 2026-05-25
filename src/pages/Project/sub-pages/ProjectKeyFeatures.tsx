/**
 * ProjectKeyFeatures — Section 5
 * Dark starfield background, "Key Features" heading, 3-column × 2-row card grid.
 * Width aligned to 80vw matching other sections.
 *
 * Card spec:  w:440  h:216  gap:24  border-radius:16  padding:24  bg white@12%
 * Icon spec:  w:30   h:30   border:1.5px  color:#D7B56D  no background
 *
 * Reusable across all project sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import bgpro from '../../../assets/bgpro.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Icon colour & size constants ──────────────────────────────────────────
const ICON_COLOR = '#D7B56D';
const ICON_SIZE = { width: 30, height: 30 };
const SW = '1.5';

// ── Built-in icon set ─────────────────────────────────────────────────────
export type IconName =
  | 'geo'
  | 'video'
  | 'emergency'
  | 'realtime'
  | 'collaboration'
  | 'mobile'
  | 'map'
  | 'shield'
  | 'chart'
  | 'database'
  | 'globe'
  | 'monitor';

function FeatureIcon({ name }: { name: IconName }) {
  switch (name) {
    case 'geo':
    case 'realtime':
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case 'video':
    case 'collaboration':
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'emergency':
    case 'mobile':
    case 'monitor':
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case 'map':
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'database':
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'globe':
    default:
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}

export interface ProjectFeature {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProjectKeyFeaturesProps {
  features: ProjectFeature[];
  heading?: string;
}

export default function ProjectKeyFeatures({
  features,
  heading = 'Key Features',
}: ProjectKeyFeaturesProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `url(${bgpro})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* ── Container aligned to 80vw like other sections ── */}
      <div
        style={{
          width: '80vw',
          margin: '0 auto',
        }}
      >
        {/* ── Section heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: isMobile ? 'clamp(28px, 7vw, 48px)' : 'clamp(40px, 5vw, 64px)',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: isMobile ? '32px' : '48px',
          }}
        >
          {heading}
        </motion.h2>

        {/* ── 3-column card grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '24px',
          }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.07 }}
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '16px',
                padding: isMobile ? '20px' : '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                minHeight: '216px',
              }}
            >
              {/* ── Icon — no background, just the stroked SVG ── */}
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  top: '3px',
                  left: '3px',
                }}
              >
                <FeatureIcon name={feat.icon} />
              </div>

              {/* ── Card title ── */}
              <h3
                style={{
                  fontFamily: satoshi,
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '140%',
                  letterSpacing: '0',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                {feat.title}
              </h3>

              {/* ── Card description ── */}
              <p
                style={{
                  fontFamily: satoshi,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '0',
                  color: '#CCCCCC',
                  margin: 0,
                }}
              >
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
