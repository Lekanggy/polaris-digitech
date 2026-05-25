import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
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
  { title: 'Software\nDevelopment', image: soft },
];

// Arrow SVG
const ArrowIcon = ({ dir }: { dir: 'left' | 'right' }) => (
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
  const isMobile = useMediaQuery('(max-width: 768px)');

  // On mobile show 1 card per view; on desktop 4
  const cardWidth = isMobile ? '85vw' : '25vw';
  const minCardWidth = isMobile ? '280px' : '240px';

  const scroll = (dir: 'left' | 'right') => {
    const w = isMobile ? window.innerWidth * 0.85 : window.innerWidth * 0.25;
    scrollRef.current?.scrollBy({ left: dir === 'right' ? w : -w, behavior: 'smooth' });
  };

  const arrowBtnStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1.5px solid rgba(255,255,255,0.7)',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 200ms',
    backdropFilter: 'blur(4px)',
  };

  return (
    <section id="services" style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }} ref={ref}>

      {/* ── Header: full-width two-column layout ── */}
      <div
        style={{
          width: '100%',
          paddingLeft: 'clamp(30px, 6.5vw, 100px)',
          paddingRight: 'clamp(30px, 6.5vw, 100px)',
          paddingBottom: '48px',
          boxSizing: 'border-box',
        }}
      >
        {/* Badge */}
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
            marginBottom: '20px',
          }}
        >
          Services
        </motion.span>

        {/* Title + description — two equal columns spanning full width, stacks on mobile */}
        <div className="services-header-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: 'clamp(32px, 4vw, 60px)',
              lineHeight: '115%',
              letterSpacing: '-0.02em',
              color: '#010527',
              margin: 0,
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
              fontSize: '18px',
              lineHeight: '160%',
              color: '#46485F',
              margin: 0,
              paddingTop: '4px',
            }}
          >
            We provide geospatial solutions that help businesses and governments make informed decisions, improve operations, and deliver results. From GIS and land surveying to cloud-based mapping and location intelligence, we offer services that bring clarity to complex challenges.
          </motion.p>
        </div>
      </div>

      {/* ── Cards row with overlaid arrow buttons ── */}
      <div style={{ position: 'relative', width: '100%' }}>

        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          style={{ ...arrowBtnStyle, left: '16px' }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#D7B56D';
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#D7B56D';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.35)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.7)';
          }}
        >
          <ArrowIcon dir="left" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          style={{ ...arrowBtnStyle, right: '16px' }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#D7B56D';
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#D7B56D';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.35)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.7)';
          }}
        >
          <ArrowIcon dir="right" />
        </button>

        {/* Scrollable cards strip */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: '100%',
            scrollSnapType: 'x mandatory',
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title + i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                width: cardWidth,
                minWidth: minCardWidth,
                height: isMobile ? '400px' : '520px',
                marginRight: i < services.length - 1 ? '4px' : '0',
                scrollSnapAlign: 'start',
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

              {/* Bottom title */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                <h3
                  style={{
                    fontFamily: satoshi,
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '150%',
                    color: '#FFFFFF',
                    whiteSpace: 'pre-line',
                    margin: 0,
                  }}
                >
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
