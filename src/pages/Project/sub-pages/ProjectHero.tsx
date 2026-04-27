/**
 * ProjectHero — Section 1
 * Full-viewport hero with a background image, dark gradient overlay,
 * and centred title + subtitle text with entrance animations.
 *
 * Reusable across all project sub-pages.
 */
import { motion } from 'framer-motion';
import Navbar from '../../../components/sections/Navbar';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface ProjectHeroProps {
  /** Background image URL */
  bgImage: string;
  /** Large heading (e.g. "Lag Ferry") */
  title: string;
  /** Subtitle / tagline below the heading */
  subtitle: string;
}

export default function ProjectHero({ bgImage, title, subtitle }: ProjectHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      {/* Navbar sits on top */}
      <Navbar />

      {/* Dark gradient overlay — animates in with the page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)',
          zIndex: 1,
        }}
      />

      {/* Centred text */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 clamp(24px, 4vw, 80px)',
          width: '100%',
        }}
      >
        {/* Title — fades up first */}
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: satoshi,
            fontWeight: 900,
            fontSize: '80px',
            lineHeight: '110%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: '20px',
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle — follows with a short stagger delay */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: satoshi,
            fontWeight: 500,
            fontSize: '36px',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.88)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
