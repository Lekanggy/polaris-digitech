import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import StatItem from '../../../components/shared/StatItem';
import herob from '../../../assets/herob.png';
import pol2 from '../../../assets/pol2.png';

const satoshi = 'Satoshi, Inter, sans-serif';

const STATS = [
  { value: 40,  label: 'No of Corporate Clients' },
  { value: 300, label: 'Full-time & Field Employees' },
  { value: 85,  label: 'Projects, Products, Services' },
];

export default function AboutHero() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `url(${herob})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(1,5,39,0.72)' }} />

      <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* ── Part A: Label + Gold headline ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '180px',
            paddingBottom: '100px',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Small spaced label — no border/badge */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '13px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '20px',
            }}
          >
            Polaris Digitech Limited
          </motion.p>

          {/* Gold headline — 40px, weight 400, line-height 120% */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: '120%',
              letterSpacing: '0',
              textAlign: 'center',
              color: '#D7B56D',
              maxWidth: '860px',
            }}
          >
            We use geospatial technology and smart solutions to drive meaningful development across Nigeria.
          </motion.h1>
        </div>

        {/* ── Part B: Image left + text right ── */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            paddingBottom: '100px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '32px' : 'clamp(48px, 8vw, 120px)',
            alignItems: 'center',
          }}
        >
          {/* Left — pol2 image */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -32 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: '50%',
              overflow: 'hidden',
              maxWidth: isMobile ? '260px' : '420px',
              justifySelf: 'center',
            }}
          >
            <img
              src={pol2}
              alt="Polaris Digitech"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Right — two paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 32 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <p
              style={{
                fontFamily: satoshi,
                fontWeight: 400,
                fontSize: isMobile ? '16px' : '20px',
                lineHeight: '175%',
                letterSpacing: '-0.01em',
                color: '#DBDBDB',
              }}
            >
              Polaris Digitech Limited (PDL) is a Nigerian company specializing in Geographic Information Systems (GIS), land surveying, and geospatial consulting, offering innovative solutions like location intelligence, mapping services, and Google Cloud onboarding for both businesses and educational institutions.
            </p>
            <p
              style={{
                fontFamily: satoshi,
                fontWeight: 400,
                fontSize: isMobile ? '16px' : '20px',
                lineHeight: '175%',
                letterSpacing: '-0.01em',
                color: '#DBDBDB',
              }}
            >
              With a team of over 40 professionals and 250 project personnel, PDL delivers high-quality, scalable mapping and decision-support systems across Nigeria. The company supports rural and urban development projects, ensuring timely execution for both government and commercial clients.
            </p>
          </motion.div>
        </div>

        {/* ── Part C: Stats — no divider ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            paddingTop: isMobile ? '32px' : '64px',
            paddingBottom: isMobile ? '60px' : '100px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '40px' : '0',
          }}
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} start={isVisible} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
