/**
 * ProjectMeta — Section 2
 * A two-part section:
 *   • Top row: borderless 4-column metadata (label above, bold value below)
 *   • Bottom: either a full-width showcase image OR a plain coloured card
 *             (when showcaseImage is omitted, showcaseCardBg is used instead)
 *
 * Reusable across all project sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ProjectMetaField {
  label: string;
  value: string;
}

export interface ProjectMetaProps {
  fields: ProjectMetaField[];
  /** When provided, renders an <img> in the showcase area */
  showcaseImage?: string;
  showcaseAlt?: string;
  /**
   * When showcaseImage is omitted, renders a plain coloured card instead.
   * Defaults to #EBECF6.
   */
  showcaseCardBg?: string;
  /** Height of the plain card (default 480px) */
  showcaseCardHeight?: number;
}

export default function ProjectMeta({
  fields,
  showcaseImage,
  showcaseAlt = 'Project showcase',
  showcaseCardBg = '#EBECF6',
  showcaseCardHeight = 480,
}: ProjectMetaProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);

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
            gridTemplateColumns: `repeat(${fields.length}, 1fr)`,
            width: '100%',
            marginBottom: '48px',
          }}
        >
          {fields.map((field) => (
            <div key={field.label}>
              <p
                style={{
                  fontFamily: satoshi,
                  fontWeight: 400,
                  fontSize: '20px',
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
                  fontSize: '20px',
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

        {/* ── Showcase: image OR plain coloured card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            background: showcaseImage ? 'transparent' : showcaseCardBg,
            minHeight: showcaseImage ? undefined : `${showcaseCardHeight}px`,
          }}
        >
          {showcaseImage ? (
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
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
