import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import soft from '../../assets/soft.png';
import soft1 from '../../assets/soft1.png';
import soft2 from '../../assets/soft2.png';
import soft3 from '../../assets/soft3.png';

const satoshi = 'Satoshi, Inter, sans-serif';

const services = [
  { title: 'Software\nDevelopment', image: soft },
  { title: 'Land\nSurveying', image: soft1 },
  { title: 'Geospatial Data\nAcquisition Management', image: soft2 },
  { title: 'Identity Intelligence\nManagement', image: soft3 },
];

// Long straight arrow SVG
const LongArrow = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="28" height="12" viewBox="0 0 28 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {dir === 'right' ? (
      <>
        <line x1="0" y1="6" x2="24" y2="6" />
        <polyline points="18,1 24,6 18,11" />
      </>
    ) : (
      <>
        <line x1="28" y1="6" x2="4" y2="6" />
        <polyline points="10,1 4,6 10,11" />
      </>
    )}
  </svg>
);

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' });
  };

  const navBtnStyle: React.CSSProperties = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: '1.5px solid #283172',
    color: '#283172',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 200ms',
    flexShrink: 0,
  };

  return (
    <section id="services" style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }} ref={ref}>

      {/* ── Header ── */}
      <div
        style={{
          maxWidth: '1536px',
          margin: '0 auto',
          paddingLeft: 'clamp(30px, 6.5vw, 100px)',
          paddingRight: 'clamp(30px, 6.5vw, 100px)',
          paddingBottom: '48px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px' }}>

          {/* Left: badge + title + description */}
          <div style={{ maxWidth: '720px' }}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px 16px',
                borderRadius: '100px',
                border: '1px solid #D7B56D',
                color: '#D7B56D',
                fontFamily: satoshi,
                fontWeight: 500,
                fontSize: '13px',
                marginBottom: '16px',
              }}
            >
              Services
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: satoshi,
                fontWeight: 500,
                fontSize: 'clamp(36px, 5vw, 72px)',
                lineHeight: '120%',
                letterSpacing: '-0.02em',
                color: '#010527',
                marginBottom: '20px',
              }}
            >
              Expert Geospatial and<br />Mapping Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: satoshi,
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '150%',
                letterSpacing: '0',
                color: '#46485F',
              }}
            >
              We provide geospatial solutions that help businesses and governments make informed decisions, improve operations, and deliver results. From GIS and land surveying to cloud-based mapping and location intelligence, we offer services that bring clarity to complex challenges.
            </motion.p>
          </div>

          {/* Right: long straight arrow nav buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '20px', flexShrink: 0 }}
          >
            {(['left', 'right'] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                aria-label={`Scroll ${dir}`}
                style={navBtnStyle}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.backgroundColor = '#D7B56D';
                  b.style.borderColor = '#D7B56D';
                  b.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.backgroundColor = 'transparent';
                  b.style.borderColor = '#283172';
                  b.style.color = '#283172';
                }}
              >
                <LongArrow dir={dir} />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Cards row — flush left & right, gaps only between cards ── */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          width: '100%',
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              position: 'relative',
              flexShrink: 0,
              overflow: 'hidden',
              cursor: 'pointer',
              width: 'calc(25% - 6px)',
              minWidth: '220px',
              height: '500px',
              marginRight: i < services.length - 1 ? '8px' : '0',
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image with zoom on hover */}
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: hovered === i ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 500ms ease',
              }}
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
              }}
            />

            {/* Read more button — slides down from top on hover */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                right: '16px',
                transform: hovered === i ? 'translateY(0)' : 'translateY(-80px)',
                opacity: hovered === i ? 1 : 0,
                transition: 'transform 350ms ease, opacity 350ms ease',
              }}
            >
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#D7B56D',
                  color: '#010527',
                  fontFamily: satoshi,
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Read more
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 6.5h9M7 2l4.5 4.5L7 11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Bottom title — always visible */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
              <h3
                style={{
                  fontFamily: satoshi,
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '150%',
                  letterSpacing: '0',
                  color: '#FFFFFF',
                  whiteSpace: 'pre-line',
                }}
              >
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
