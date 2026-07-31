/**
 * ProjectGallery — Section 6
 * Layout:
 *   • One large horizontally-centred image (lag2) inside a light-bg container
 *   • Two equal images side-by-side below (lag8, lag3)
 *
 * Reusable across all project sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ProjectGalleryProps {
  /** Large top image — omit to hide */
  imageLarge?: string;
  imageLargeAlt?: string;
  /** Two bottom images — omit to hide */
  imageBottomLeft?: string;
  imageBottomRight?: string;
  imageBottomLeftAlt?: string;
  imageBottomRightAlt?: string;
  /** Optional section heading */
  heading?: string;
  /** Background colour (default white) */
  bg?: string;
}

export default function ProjectGallery({
  imageLarge,
  imageLargeAlt = 'Project gallery',
  imageBottomLeft,
  imageBottomRight,
  imageBottomLeftAlt = 'Project image',
  imageBottomRightAlt = 'Project image',
  heading,
  bg = '#FFFFFF',
}: ProjectGalleryProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        background: bg,
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* ── Container aligned to 80vw like other sections ── */}
      <div
        style={{
          width: '80vw',
          margin: '0 auto',
        }}
      >
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: '115%',
              letterSpacing: '-0.02em',
              color: '#010527',
              marginBottom: '40px',
            }}
          >
            {heading}
          </motion.h2>
        )}

        {/* ── Large centred image — only rendered when URL is provided ── */}
        {imageLarge && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              marginBottom: '24px',
              padding: '24px',
            }}
          >
            <img
              src={imageLarge}
              alt={imageLargeAlt}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: isMobile ? '300px' : '560px',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '16px',
              }}
            />
          </motion.div>
        )}

        {/* ── Two bottom images — only rendered when URLs are provided ── */}
        {(imageBottomLeft || imageBottomRight) && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '24px',
            }}
          >
            {[
              { src: imageBottomLeft, alt: imageBottomLeftAlt },
              { src: imageBottomRight, alt: imageBottomRightAlt },
            ].map((img, i) =>
              img.src ? (
                <motion.div
                  key={(img.alt ?? '') + i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.12 + i * 0.1 }}
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: '100%',
                      height: isMobile ? '220px' : '480px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </motion.div>
              ) : null
            )}
          </div>
        )}
      </div>
    </section>
  );
}

