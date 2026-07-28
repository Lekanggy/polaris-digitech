/**
 * ProjectMeta — Section 2
 * A two-part section:
 *   • Top row: borderless 4-column metadata (label above, bold value below)
 *   • Bottom: full-width showcase image (hidden when omitted)
 *
 * Reusable across all project sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ProjectMetaField {
  label: string;
  value: string;
}

export interface ProjectMetaProps {
  fields: ProjectMetaField[];
  /** When provided, renders an <img> in the showcase area; omit to hide the showcase entirely */
  showcaseImage?: string;
  showcaseAlt?: string;
}

export default function ProjectMeta({
  fields,
  showcaseImage,
  showcaseAlt = 'Project showcase',
}: ProjectMetaProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        paddingTop: '60px',
        paddingBottom: '80px',
      }}
    >
      <div
        style={{
          width: '80vw',
          margin: '0 auto',
        }}
      >
        {/* ── Metadata columns — no borders, just text ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : `repeat(${fields.length}, 1fr)`,
            width: '100%',
            marginBottom: isMobile ? '32px' : '48px',
          }}
        >
          {fields.map((field) => (
            <div key={field.label}>
              <p
                style={{
                  fontFamily: satoshi,
                  fontWeight: 400,
                  fontSize: isMobile ? '16px' : '20px',
                  lineHeight: '120%',
                  letterSpacing: '-0.02em',
                  color: '#7177A3',
                  marginBottom: '10px',
                }}
              >
                {field.label}:
              </p>
              <p
                style={{
                  fontFamily: satoshi,
                  fontWeight: 500,
                  fontSize: isMobile ? '16px' : '20px',
                  lineHeight: '120%',
                  letterSpacing: '-0.02em',
                  color: '#283172',
                  margin: 0,
                }}
              >
                {field.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Showcase: image only — hidden when no URL is provided ── */}
        {showcaseImage && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            <img
              src={showcaseImage}
              alt={showcaseAlt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
