/**
 * ProjectDescription — Section 3
 * Layout:
 *   • "Description" heading + body text
 *   • Two side-by-side image cards (equal height, consistent across all pages)
 *     left card: imageLeft (bg #8BD4FF), right card: imageRight (bg #fff)
 *     spec: w:656 h:502 gap:10 border-radius:40 padding:48px 10px
 *   • One large full-width image below
 *
 * Width aligned with ProjectMeta (80vw centred).
 * Section background: #EBECF6
 */


import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ProjectDescriptionProps {
  description: string;
  imageLeft?: string;
  imageRight?: string;
  imageFull?: string;
  imageLeftAlt?: string;
  imageRightAlt?: string;
  imageFullAlt?: string;
  cardBg?: string;
  imageFullPlaceholder?: boolean;
}

export default function ProjectDescription({
  description,
  imageLeft,
  imageRight,
  imageFull,
  imageLeftAlt = 'Project image',
  imageRightAlt = 'Project image',
  imageFullAlt = 'Project image',
  imageFullPlaceholder = false,
}: ProjectDescriptionProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        background: '#EBECF6',
        paddingTop: isMobile ? '48px' : '80px',
        paddingBottom: isMobile ? '48px' : '80px',
      }}
    >
      <div style={{ width: isMobile ? '92vw' : '80vw', margin: '0 auto' }}>

        {/* ── Heading + description ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: isMobile ? '32px' : '48px' }}
        >
          <h2
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: isMobile ? 'clamp(28px, 7vw, 40px)' : 'clamp(40px, 5vw, 72px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#010527',
              marginBottom: '24px',
            }}
          >
            Description
          </h2>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: isMobile ? '15px' : '24px',
              lineHeight: '150%',
              letterSpacing: '-0.02em',
              color: '#46485F',
              maxWidth: '900px',
            }}
          >
            {description}
          </p>
        </motion.div>

        {/* ── Two side-by-side image cards — equal fixed height ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          {/* Left card — bg #8BD4FF */}
          <div
            style={{
              //background: '#8BD4FF',
              borderRadius: isMobile ? '24px' : '40px',
              padding: isMobile ? '16px' : '48px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}
          >
            {imageLeft ? (
              <img
                src={imageLeft}
                alt={imageLeftAlt}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: isMobile ? '16px' : '28px',
                  display: 'block',
                }}
              />
            ) : (
              <div style={{ width: '100%', aspectRatio: '4/3', background: 'rgba(255,255,255,0.2)', borderRadius: isMobile ? '16px' : '28px' }} />
            )}
          </div>

          {/* Right card — bg #fff */}
          <div
            style={{
              //  background: '#FFFFFF',
              borderRadius: isMobile ? '24px' : '40px',
              padding: isMobile ? '16px' : '48px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}
          >
            {imageRight ? (
              <img
                src={imageRight}
                alt={imageRightAlt}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: isMobile ? '16px' : '28px',
                  display: 'block',
                }}
              />
            ) : (
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#EBECF6', borderRadius: isMobile ? '16px' : '28px' }} />
            )}
          </div>
        </motion.div>

        {/* ── Large full-width image ── */}
        {(imageFull || imageFullPlaceholder) && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: '#EBECF6',
              borderRadius: isMobile ? '24px' : '40px',
              overflow: 'hidden',
              padding: imageFull ? '10px' : '0',
              minHeight: imageFull ? undefined : (isMobile ? '200px' : '400px'),
            }}
          >
            {imageFull && (
              <img
                src={imageFull}
                alt={imageFullAlt}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: isMobile ? '16px' : '32px',
                  objectFit: 'cover',
                }}
              />
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}