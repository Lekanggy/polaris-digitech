/**
 * ProjectDescription — Section 3
 * Layout:
 *   • "Description" heading + body text
 *   • Two side-by-side image cards (left bg: #8BD4FF, right bg: #fff)
 *     spec: w:656 h:502 gap:10 border-radius:40 padding:48px 10px
 *   • One large full-width image below (bg: #fff)
 *
 * Width aligned with ProjectMeta (80vw centred).
 * Section background: #EBECF6
 *
 * Reusable across all project sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ProjectDescriptionProps {
  description: string;
  /** Left image — omit to show a placeholder card */
  imageLeft?: string;
  /** Right image — omit to show a placeholder card */
  imageRight?: string;
  /** Large image below the card row — optional, omit to hide or show placeholder */
  imageFull?: string;
  imageLeftAlt?: string;
  imageRightAlt?: string;
  imageFullAlt?: string;
  /** Unused — kept for API compatibility; section bg is always #EBECF6 */
  cardBg?: string;
  /** Show a placeholder card for imageFull when true (no image available) */
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
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* ── Container aligned to 80vw like ProjectMeta ── */}
      <div
        style={{
          width: '80vw',
          margin: '0 auto',
        }}
      >
        {/* ── Heading + description ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <h2
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: isMobile ? 'clamp(28px, 7vw, 48px)' : 'clamp(40px, 5vw, 72px)',
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
              fontSize: '24px',
              lineHeight: '150%',
              letterSpacing: '-0.02em',
              color: '#46485F',
              maxWidth: '900px',
            }}
          >
            {description}
          </p>
        </motion.div>

        {/* ── Two side-by-side image cards ── */}
        {/* Images are swapped: imageRight renders on the left, imageLeft on the right */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginBottom: '24px',
          }}
        >
          {/* Left card — bg: #8BD4FF — shows imageRight or placeholder */}
          <div
            style={{
              background: imageRight ? '#8BD4FF' : '#FFFFFF',
              borderRadius: '40px',
              paddingTop: '48px',
              paddingBottom: '48px',
              paddingLeft: '10px',
              paddingRight: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '502px',
            }}
          >
            {imageRight && (
              <img
                src={imageRight}
                alt={imageRightAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '28px',
                  display: 'block',
                }}
              />
            )}
          </div>

          {/* Right card — bg: #fff — shows imageLeft or placeholder */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
            {imageLeft && (
              <img
                src={imageLeft}
                alt={imageLeftAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '28px',
                  display: 'block',
                }}
              />
            )}
          </div>
        </motion.div>

        {/* ── Large full-width image — bg: #fff — only rendered when imageFull is provided or placeholder requested ── */}
        {(imageFull || imageFullPlaceholder) && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: '#EBECF6',
              borderRadius: '40px',
              overflow: 'hidden',
              padding: imageFull ? '10px' : '0',
              minHeight: imageFull ? undefined : '400px',
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
                  borderRadius: '32px',
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
