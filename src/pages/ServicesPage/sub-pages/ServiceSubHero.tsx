/**
 * ServiceSubHero — Section 1
 * White bg: service title (left-aligned), description paragraph,
 * full-width image card, optional second paragraph below the card.
 *
 * Reusable across all service sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ServiceSubHeroProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  bottomText?: string;
  bg?: string;
  titleColor?: string;
  textColor?: string;
}

export default function ServiceSubHero({
  title,
  description,
  image,
  imageAlt = 'Service showcase',
  bottomText,
  bg = '#FFFFFF',
  titleColor = '#010527',
  textColor = '#46485F',
}: ServiceSubHeroProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const containerWidth = isMobile ? '94%' : '90%';
  const imageHeight = isMobile ? '240px' : isTablet ? '380px' : 'clamp(560px, 70vh, 860px)';

  return (
    <section
      ref={ref}
      style={{
        background: bg,
        paddingTop: isMobile ? '100px' : '140px',
        paddingBottom: isMobile ? '48px' : '80px',
      }}
    >
      <div
        style={{
          width: containerWidth,
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: satoshi,
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 64px)',
            lineHeight: '115%',
            letterSpacing: '-0.02em',
            color: titleColor,
            marginBottom: '20px',
          }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '170%',
            color: textColor,
            width: isMobile ? '100%' : 'min(100%, 86%)',
            maxWidth: '100%',
            marginBottom: isMobile ? '28px' : '48px',
          }}
        >
          {description}
        </motion.p>

        {/* Image or placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.18 }}
          style={{
            width: '100%',
            height: imageHeight,
            borderRadius: isMobile ? '16px' : '24px',
            overflow: 'hidden',
            background: image ? 'transparent' : '#EBECF6',
            marginBottom: bottomText ? (isMobile ? '28px' : '48px') : '0',
          }}
        >
          {image && (
            <img
              src={image}
              alt={imageAlt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          )}
        </motion.div>

        {/* Optional second paragraph below the card */}
        {bottomText && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '170%',
              color: textColor,
              width: '100%',
              maxWidth: '100%',
              marginTop: '0',
            }}
          >
            {bottomText}
          </motion.p>
        )}
      </div>
    </section>
  );
}
