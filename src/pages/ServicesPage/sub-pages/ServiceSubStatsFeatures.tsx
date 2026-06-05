/**
 * ServiceSubStatsFeatures — Section 2
 * Dark starfield bg (bgpro):
 *   • Top: 3-column stats row (number + label)
 *   • Below: "Key Features" heading + 3×2 card grid
 *
 * Reuses the same bgpro background and card style as ProjectKeyFeatures.
 * Reusable across all service sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import bgpro from '../../../assets/bgpro.png';
import type { IconName } from '../../Project/sub-pages/ProjectKeyFeatures';

const satoshi = 'Satoshi, Inter, sans-serif';

const ICON_COLOR = '#D7B56D';
const ICON_SIZE = { width: 30, height: 30 };
const SW = '1.5';

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
    case 'globe':
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
    case 'map':
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
    default:
      return (
        <svg {...ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFeature {
  icon: IconName;
  title: string;
  description: string;
}

export interface ServiceSubStatsFeaturesProps {
  stats: ServiceStat[];
  features: ServiceFeature[];
  featuresHeading?: string;
}

export default function ServiceSubStatsFeatures({
  stats,
  features,
  featuresHeading = 'Key Features',
}: ServiceSubStatsFeaturesProps) {
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
        paddingTop: isMobile ? '48px' : '80px',
        paddingBottom: isMobile ? '48px' : '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : `repeat(${stats.length}, 1fr)`,
            gap: isMobile ? '32px' : '40px',
            marginBottom: isMobile ? '48px' : '72px',
          }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label + i} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: satoshi,
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  lineHeight: '110%',
                  color: '#D7B56D',
                  margin: '0 0 8px 0',
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: satoshi,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '150%',
                  color: 'rgba(255,255,255,0.75)',
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Key Features heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: isMobile ? 'clamp(28px, 8vw, 40px)' : '64px',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: isMobile ? '28px' : '48px',
          }}
        >
          {featuresHeading}
        </motion.h2>

        {/* ── Feature card grid ── */}
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
              transition={{ duration: 0.55, delay: 0.12 + i * 0.07 }}
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                minHeight: isMobile ? 'auto' : '216px',
              }}
            >
              <div style={{ width: '30px', height: '30px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FeatureIcon name={feat.icon} />
              </div>
              <h3 style={{ fontFamily: satoshi, fontWeight: 500, fontSize: '16px', lineHeight: '140%', color: '#FFFFFF', margin: 0 }}>
                {feat.title}
              </h3>
              <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '150%', color: '#CCCCCC', margin: 0 }}>
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
