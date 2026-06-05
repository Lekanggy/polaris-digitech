import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

interface ProductShowcaseProps {
  image?: string;
  borderColor?: string;
}

export default function ProductShowcase({ image, borderColor = '#E2E5F0' }: ProductShowcaseProps) {
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
            background: '#EEF0F8',
            borderRadius: '24px',
            width: '100%',
            aspectRatio: '2 / 1',
            border: `2px solid ${borderColor}`,
            boxSizing: 'border-box',
            ...(image
              ? {
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }
              : {}),
          }}
        />
      </div>
    </section>
  );
}
