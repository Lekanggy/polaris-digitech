import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

interface ProductIntroProps {
  title: string;
  description: string;
  boxBg: string;
  boxImage?: string;
}

export default function ProductIntro({ title, description, boxBg, boxImage }: ProductIntroProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        paddingTop: '160px',
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
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '32px' : 'clamp(40px, 6vw, 100px)',
          alignItems: 'stretch',
        }}
      >
        {/* Left — colored box / image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: boxBg,
            borderRadius: '24px',
            overflow: 'hidden',
            minHeight: '300px',
          }}
        >
          {boxImage && (
            <img
              src={boxImage}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </motion.div>

        {/* Right — title + description */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1
            style={{
              fontFamily: satoshi,
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: '115%',
              letterSpacing: '-0.02em',
              color: '#283172',
              marginBottom: '24px',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: '-0.02em',
              color: '#46485F',
            }}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
