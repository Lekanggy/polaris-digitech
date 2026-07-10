/**
 * CareersHero — Section 1
 * Centred title + description, then a 2-column image layout:
 *   Left:  images[1] (car2) — tall card
 *   Right: images[0] (car1, top) + images[2] (car3, bottom)
 *
 * The API returns images in order: car1, car2, car3.
 * Layout uses: car2 on the left, car1 top-right, car3 bottom-right.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import car1 from '../../../assets/car1.png';
import car2 from '../../../assets/car2.png';
import car3 from '../../../assets/car3.png';
import type { CareerImage } from '../../../services/queries/careerQuery';
import { strapiUrl } from '../../../services/queries/careerQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Fallbacks ──────────────────────────────────────────────────────────────
const FALLBACK_HEADER = 'Join Our PDL Team';
const FALLBACK_DESCRIPTION =
  "At Polaris Digitech, we're redefining how businesses and governments use geospatial and cloud technology in Nigeria. If you're driven by innovation, problem-solving, and purpose, we want you on our team.";

interface CareersHeroProps {
  header?: string;
  headerDescription?: string;
  images?: CareerImage[];
}

export default function CareersHero({ header, headerDescription, images }: CareersHeroProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const title       = header            ?? FALLBACK_HEADER;
  const description = headerDescription ?? FALLBACK_DESCRIPTION;

  // API order: [0]=car1, [1]=car2, [2]=car3
  // Layout: left=car2, top-right=car1, bottom-right=car3
  const imgLeft        = strapiUrl(images?.[1]?.url) ?? car2;
  const imgTopRight    = strapiUrl(images?.[0]?.url) ?? car1;
  const imgBottomRight = strapiUrl(images?.[2]?.url) ?? car3;

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        paddingTop: '160px',
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
        {/* ── Centred heading + description ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <h1
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: isMobile ? 'clamp(32px, 7vw, 56px)' : '72px',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#283172',
              marginBottom: '24px',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: isMobile ? 'clamp(16px, 4vw, 20px)' : '20px',
              lineHeight: '150%',
              letterSpacing: '0',
              color: '#46485F',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            {description}
          </p>
        </motion.div>

        {/* ── Image grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '16px',
            alignItems: 'start',
          }}
        >
          {/* Left — tall image (car2) */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: isMobile ? '320px' : '584px',
            }}
          >
            <img
              src={imgLeft}
              alt="Polaris team field work"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Right — two stacked images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                height: isMobile ? '180px' : '280px',
              }}
            >
              <img
                src={imgTopRight}
                alt="Polaris team collaboration"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                height: isMobile ? '180px' : '280px',
              }}
            >
              <img
                src={imgBottomRight}
                alt="Polaris team geospatial work"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
