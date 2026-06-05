import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

interface ProductShowcaseProps {
  image?: string;
}

export default function ProductShowcase({ image }: ProductShowcaseProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        paddingTop: '60px',
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
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            width: '100%',
            padding: '20px',
            boxSizing: 'border-box',
            boxShadow: '0 2px 24px rgba(0,0,0,0.07)',
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Product showcase"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
                borderRadius: '16px',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 7',
                background: '#EEF0F8',
                borderRadius: '16px',
              }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
