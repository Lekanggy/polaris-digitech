/**
 * ServiceSubAbout — Section 3
 * Light bg (#EBECF6): left image/placeholder card + right mixed-weight text.
 * The text has a muted lead-in and a bold dark-blue emphasis portion.
 *
 * Reusable across all service sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ServiceSubAboutProps {
  /** Optional image — renders a white placeholder card when omitted */
  image?: string;
  imageAlt?: string;
  /** Plain lead-in text (muted colour) */
  leadText: string;
  /** Bold emphasis text (dark blue) */
  emphasisText: string;
}

export default function ServiceSubAbout({
  image,
  imageAlt = 'Service about',
  leadText,
  emphasisText,
}: ServiceSubAboutProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      style={{
        background: '#EBECF6',
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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 100px)',
          alignItems: 'center',
        }}
      >
        {/* Left — image or white placeholder card */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            background: image ? 'transparent' : '#FFFFFF',
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {image && (
            <img
              src={image}
              alt={imageAlt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          )}
        </motion.div>

        {/* Right — mixed-weight text */}
        <motion.p
          initial={{ opacity: 0, x: 32 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: 'clamp(18px, 2vw, 26px)',
            lineHeight: '160%',
            color: '#8A93B2',
            margin: 0,
          }}
        >
          {leadText}{' '}
          <strong style={{ color: '#283172', fontWeight: 700 }}>
            {emphasisText}
          </strong>
        </motion.p>
      </div>
    </section>
  );
}
