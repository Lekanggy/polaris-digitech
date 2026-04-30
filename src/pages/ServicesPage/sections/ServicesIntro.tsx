/**
 * ServicesIntro — Section 1
 * Centred title, description paragraph, "Schedule a meeting" CTA button.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

export default function ServicesIntro() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        paddingTop: '160px',
        paddingBottom: '64px',
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          textAlign: 'center',
        }}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: satoshi,
            fontWeight: 500,
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#283172',
            marginBottom: '20px',
          }}
        >
          Explore Our Services
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '160%',
            letterSpacing: '0',
            color: '#46485F',
            marginBottom: '36px',
          }}
        >
          We offer geospatial solutions that empower businesses and governments to make informed decisions
          and enhance operations. Our services, including GIS, land surveying, and cloud-based mapping,
          simplify complex challenges.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
        >
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 28px',
              borderRadius: '10px',
              background: '#0B1353',
              color: '#FFFFFF',
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a meeting
          </a>
        </motion.div>
      </div>
    </section>
  );
}
