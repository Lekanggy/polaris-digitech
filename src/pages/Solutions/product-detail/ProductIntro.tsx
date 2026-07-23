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
          gap: isMobile ? '32px' : 'clamp(40px, 6vw, 80px)',
          alignItems: 'stretch', // Changed to stretch so text container matches image height
        }}
      >
        {/* Left — image box, fills edge-to-edge with rounded corners */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            order: isMobile ? 2 : 1, // Moves image to the bottom on mobile
            background: boxBg,
            borderRadius: '24px',
            overflow: 'hidden',
            width: '100%',
            aspectRatio: '1 / 1',
          }}
        >
          {boxImage && (
            <img
              src={boxImage}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          )}
        </motion.div>

        {/* Right — title + description */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            order: isMobile ? 1 : 2, // Moves text to the top on mobile
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Vertically centers text relative to the image
            gap: '20px',
          }}
        >
          <h1
            style={{
              fontFamily: satoshi,
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: '115%',
              letterSpacing: '-0.02em',
              color: '#283172',
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: isMobile ? '15px' : '16px',
              lineHeight: '170%',
              color: '#46485F',
              margin: 0,
            }}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}