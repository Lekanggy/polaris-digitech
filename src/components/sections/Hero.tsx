import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hero2 from '../../assets/hero2.png';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import type { HeroSection } from '../../services/queries/homeQuery';
import { strapiUrl } from '../../services/queries/homeQuery';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const satoshi = 'Satoshi, Inter, sans-serif';

// Hardcoded fallbacks — preserved as-is
const FALLBACK_BADGE = '22+ years of excellence';
const FALLBACK_HEADING = 'Enhancing Business Solutions with Geo-Spatial Technology';
const FALLBACK_DESCRIPTION =
  'We deliver innovative cloud and on-premise solutions using advanced location intelligence, GIS, and mapping technologies across Nigeria.';

interface HeroProps {
  data?: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const badge = data?.badage ?? FALLBACK_BADGE;
  const heading = data?.mainDescription ?? FALLBACK_HEADING;
  const description = data?.bottomDescription ?? FALLBACK_DESCRIPTION;
  const bgImage = strapiUrl(data?.bgImage?.url) ?? hero2;
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
     
      {/* Main content — vertically and horizontally centered */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '6px',
              paddingBottom: '6px',
              paddingLeft: '24px',
              paddingRight: '24px',
              borderRadius: '100px',
              border: '1px solid #D7B56D',
              color: '#D7B56D',
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '120%',
              marginBottom: '24px',
            }}
          >
            {badge}
          </motion.span>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: 'clamp(40px, 6vw, 72px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              maxWidth: '1000px',
              margin: '0 auto 24px',
              textAlign: 'center',
            }}
          >
            {heading}
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: 'clamp(16px, 2.5vw, 24px)',
              lineHeight: '150%',
              letterSpacing: '-0.01em',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '760px',
              margin: '0 auto 40px',
              textAlign: 'center',
            }}
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
            }}
          >
            {/* Schedule a meeting — muted glass button */}
            <Link
              to="/schedule"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: satoshi,
                fontSize: isMobile ? '15px' : '16px',
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '0',
                width: isMobile ? '100%' : '240px',
                maxWidth: isMobile ? '320px' : 'none',
                height: '48px',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: isMobile ? '24px' : '36px',
                paddingRight: isMobile ? '24px' : '36px',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.26)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '10px',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'opacity 200ms',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Schedule a meeting
            </Link>

            {/* View All Projects — gold */}
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: satoshi,
                fontSize: isMobile ? '15px' : '16px',
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '0',
                width: isMobile ? '100%' : '240px',
                maxWidth: isMobile ? '320px' : 'none',
                height: '48px',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: isMobile ? '24px' : '36px',
                paddingRight: isMobile ? '24px' : '36px',
                gap: '8px',
                backgroundColor: '#D7B56D',
                color: '#010527',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'opacity 200ms',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View All Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Double-chevron scroll indicator */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: '32px',
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.7">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.35"
          style={{ marginTop: '-8px' }}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
