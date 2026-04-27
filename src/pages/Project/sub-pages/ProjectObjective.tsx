/**
 * ProjectObjective — Section 4
 * Layout:
 *   • Centred mixed-weight quote paragraph (80vw wide, matching other sections)
 *   • One large rounded image below
 *
 * Typography spec:
 *   font-family: Satoshi, font-weight: 500, font-size: 40px,
 *   line-height: 150%, letter-spacing: -2%, text-align: center
 *
 * Reusable across all project sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ProjectObjectiveProps {
  objectivePlain?: string;
  objectiveNode?: React.ReactNode;
  image: string;
  imageAlt?: string;
}

export default function ProjectObjective({
  objectivePlain,
  objectiveNode,
  image,
  imageAlt = 'Project objective',
}: ProjectObjectiveProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
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
        {/* ── Objective text ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 500,
            fontSize: '40px',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            color: '#8A93B2',
            margin: '0 auto 56px',
          }}
        >
          {objectiveNode ?? objectivePlain}
        </motion.p>

        {/* ── Image ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={imageAlt}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
