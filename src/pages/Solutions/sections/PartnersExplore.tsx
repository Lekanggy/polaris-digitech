import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import sol1 from '../../../assets/sol1.jpg';
import sol2 from '../../../assets/sol2.jpg';
import sol3 from '../../../assets/sol3.jpg';
import sol4 from '../../../assets/sol4.jpg';
import sol5 from '../../../assets/sol5.jpg';
import sol6 from '../../../assets/sol6.png';

const satoshi = 'Satoshi, Inter, sans-serif';

const PARTNERS = [
  { image: sol1, title: 'Google Workspace for Business',  description: 'Polaris Digitech Limited offers a platform for integrating cloud-native apps with Google Worksp...', route: '/solutions/google-workspace-business' },
  { image: sol2, title: 'Google Workspace for Education', description: 'Google Workspace for Education is a platform that provides educational tools and services to studen...', route: '/solutions/google-workspace-education' },
  { image: sol3, title: 'Google Cloud Platform',          description: 'Cloud computing provides on-demand resources like hardware and software accessible via the int...', route: '' },
  { image: sol4, title: 'Google Maps',                    description: 'At Polaris Digitech Limited, we create software to analyze geospatial data and interpret spatial patterns for mapp...', route: '/solutions/google-maps' },
  { image: sol5, title: 'MapInfo',                        description: 'At PDL, our experts leverage MapInfo for effective mapping and location analysis.', route: '/solutions/mapinfo' },
  { image: sol6, title: 'High Resolution Imagery',        description: 'We offer satellite imagery and geospatial analytics for decision-makers needing precise remote views of our...', route: '/solutions/high-resolution-imagery' },
];

// ── Partner card — no background, sits on section bg ──────────────────────
interface PartnerCardProps {
  image: string;
  title: string;
  description: string;
  route: string;
  index: number;
  isVisible: boolean;
  isMobile: boolean;
}

function PartnerCard({ image, title, description, route, index, isVisible, isMobile }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.08 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        borderRadius: '24px',
        overflow: 'hidden',
      }}
    >
      {/* Image — fills its box, rounded corners */}
        <div
          style={{
            width: '100%',
            height: isMobile ? '200px' : '250px',
            borderRadius: '24px',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Text content — no background */}
      <div style={{ padding: isMobile ? '6px 4px 0' : '8px 4px 0' }}>
        <h3
          style={{
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: isMobile ? 'clamp(17px, 4.5vw, 20px)' : '20px',
            lineHeight: '130%',
            color: '#283172',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: isMobile ? '13px' : '14px',
            lineHeight: '160%',
            color: '#46485F',
            marginBottom: '16px',
          }}
        >
          {description}
        </p>

        {/* Pill Read More button — routes if available */}
        {route ? (
          <Link
            to={route}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: isMobile ? '8px 16px' : '10px 20px',
              borderRadius: '100px',
              background: '#EEF0F8',
              color: '#283172',
              fontFamily: satoshi,
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'background 200ms, color 200ms',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#283172';
              el.style.color = '#fff';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#EEF0F8';
              el.style.color = '#283172';
            }}
          >
            Read More
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="6" x2="10" y2="6" />
              <polyline points="7,3 10,6 7,9" />
            </svg>
          </Link>
        ) : (
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: isMobile ? '8px 16px' : '10px 20px',
              borderRadius: '100px',
              background: '#EEF0F8',
              color: '#283172',
              fontFamily: satoshi,
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'background 200ms, color 200ms',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#283172';
              el.style.color = '#fff';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#EEF0F8';
              el.style.color = '#283172';
            }}
          >
            Read More
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="6" x2="10" y2="6" />
              <polyline points="7,3 10,6 7,9" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function PartnersExplore() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
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
        }}
      >
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#283172',
            marginBottom: '48px',
          }}
        >
          Explore Our Partners' Products
        </motion.h2>

        {/* 3-column grid — increased gap on both axes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            columnGap: isMobile ? '20px' : '40px',
            rowGap: isMobile ? '40px' : '56px',
          }}
        >
          {PARTNERS.map((partner, i) => (
            <PartnerCard
              key={partner.title}
              image={partner.image}
              title={partner.title}
              description={partner.description}
              route={partner.route}
              index={i}
              isVisible={isVisible}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
