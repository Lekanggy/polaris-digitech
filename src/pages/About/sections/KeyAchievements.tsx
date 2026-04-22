import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import herob from '../../../assets/herob.png';
import gonew from '../../../assets/gonew.png';

const satoshi = 'Satoshi, Inter, sans-serif';

const ACHIEVEMENTS = [
  {
    year: '2021',
    title: 'The first Certified Google Cloud Platform (GCP) reseller in Nigeria',
    body: 'Polaris Digitech Limited holds the distinction of being the first Certified Google Cloud Platform (GCP) reseller in Nigeria. As a leading provider of cloud-based solutions, Polaris Digitech Limited has demonstrated its expertise and competence in delivering cutting-edge GCP services to businesses and organizations across Nigeria. With a team of skilled professionals and a commitment to delivering innovative solutions, Polaris Digitech Limited is well-positioned to help companies transform their IT operations and achieve greater efficiency, scalability, and security on the cloud.',
    logo: gonew,
  },
  {
    year: '2019',
    title: 'Pioneering GIS Solutions Across West Africa',
    body: 'Polaris Digitech expanded its geospatial footprint across West Africa, delivering landmark GIS projects for government agencies and private enterprises. Our work in land management, infrastructure mapping, and location intelligence set new standards for the region.',
    logo: gonew,
  },
  {
    year: '2017',
    title: 'Launch of the Polaris Data Collector Platform',
    body: 'We launched the Polaris Data Collector (PDC), a proprietary digital tool for real-time field data gathering. The platform transformed how organizations collect, manage, and analyze ground-level data — replacing paper-based processes with efficient digital workflows.',
    logo: gonew,
  },
];

// ── Arrow button — sits outside the card ──────────────────────────────────
interface ArrowBtnProps {
  dir: 'left' | 'right';
  onClick: () => void;
}

function ArrowBtn({ dir, onClick }: ArrowBtnProps) {
  return (
    <button
      onClick={onClick}
      aria-label={`${dir === 'left' ? 'Previous' : 'Next'} achievement`}
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: 'none',
        background: 'rgba(255,255,255,0.2)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background 200ms',
        zIndex: 2,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.35)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
    >
      {dir === 'left' ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="14" y1="9" x2="4" y2="9" />
          <polyline points="8,5 4,9 8,13" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="9" x2="14" y2="9" />
          <polyline points="10,5 14,9 10,13" />
        </svg>
      )}
    </button>
  );
}

export default function KeyAchievements() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
  const next = () => setCurrent((c) => (c + 1) % ACHIEVEMENTS.length);

  const achievement = ACHIEVEMENTS[current];

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* ── Section title ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#010527',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          Our Key Achievements and Success
        </motion.h2>

        {/* ── Carousel — card with arrows inside at both ends ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Achievement card — fixed dimensions, arrows inside */}
          <div
            style={{
              borderRadius: '30px',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: `url(${herob})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '480px',
            }}
          >
            {/* Dark overlay */}
            {/* <div style={{ position: 'absolute', inset: 0, background: 'rgba(1,5,39,0.88)' }} /> */}

            {/* Left arrow — pinned to left edge, vertically centered */}
            <div
              style={{
                position: 'absolute',
                left: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
              }}
            >
              <ArrowBtn dir="left" onClick={prev} />
            </div>

            {/* Right arrow — pinned to right edge, vertically centered */}
            <div
              style={{
                position: 'absolute',
                right: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
              }}
            >
              <ArrowBtn dir="right" onClick={next} />
            </div>

            {/* Sliding content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateColumns: '1.3fr 1fr',
                  alignItems: 'center',
                  padding: '56px 88px',
                  gap: '40px',
                }}
              >
                {/* ── Left: title + description ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <h3
                    style={{
                      fontFamily: satoshi,
                      fontWeight: 500,
                      fontSize: '32px',
                      lineHeight: '150%',
                      letterSpacing: '0',
                      color: '#D7B56D',
                      textDecoration: 'underline',
                      textDecorationStyle: 'solid',
                      textUnderlineOffset: '4px',
                      margin: 0,
                    }}
                  >
                    {achievement.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: satoshi,
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '150%',
                      letterSpacing: '0',
                      color: '#DBDBDB',
                      margin: 0,
                    }}
                  >
                    {achievement.body}
                  </p>
                </div>

                {/* ── Right: large year + logo overlay ── */}
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  {/* Large year — outlined with white 30% opacity border, transparent fill */}
                  <span
                    style={{
                      fontFamily: satoshi,
                      fontWeight: 900,
                      fontSize: 'clamp(100px, 12vw, 160px)',
                      lineHeight: '150%',
                      letterSpacing: '0',
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                      userSelect: 'none',
                      whiteSpace: 'nowrap',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -60%)',
                      zIndex: 1,
                    }}
                  >
                    {achievement.year}
                  </span>

                  {/* Logo — overlaps year from below */}
                  {/* Logo — sits below the year, overlapping it from below */}
                  <img
                    src={achievement.logo}
                    alt="Achievement logo"
                    style={{
                      position: 'absolute',
                      zIndex: 2,
                      width: 'clamp(140px, 16vw, 220px)',
                      height: 'auto',
                      objectFit: 'contain',
                      top: '50%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Dot indicators ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
          {ACHIEVEMENTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to achievement ${i + 1}`}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === current ? '#D7B56D' : '#D1D5DB',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 300ms',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
