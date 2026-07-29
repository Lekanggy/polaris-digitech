import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import soft from '../../assets/soft.png';
import soft1 from '../../assets/soft1.png';
import soft2 from '../../assets/soft2.png';
import soft3 from '../../assets/soft3.png';
import type { Service } from '../../services/queries/homeQuery';
import { strapiUrl } from '../../services/queries/homeQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

// Hardcoded fallback services — preserved
const fallbackServices = [
  { title: 'Software\nDevelopment', image: soft, route: '/services/software-development' },
  { title: 'Land\nSurveying', image: soft1, route: '/services/land-surveying' },
  { title: 'Geospatial Data\nAcquisition Management', image: soft2, route: '/services/geospatial-data-acquisition' },
  { title: 'Identity Intelligence\nManagement', image: soft3, route: '/services/identity-intelligence' },
  { title: 'Software\nDevelopment', image: soft, route: '/services/software-development' },
];

interface ServicesProps {
  data?: Service;
}

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

export default function Services({ data }: ServicesProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [hovered, setHovered] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Memoize the services array so it doesn't get recreated on every render
  const services = useMemo(() => {
    return data?.serviceItem && data.serviceItem.length > 0
      ? data.serviceItem.map((item) => ({
          title: item.title ?? '',
          image: strapiUrl(item.bgImage?.[0]?.url) ?? soft,
          route: item.href ?? '',
        }))
      : fallbackServices;
  }, [data]);

  const sectionTitle = data?.title ?? 'Expert Geospatial and Mapping Services';
  const sectionDescription =
    data?.description ??
    'We provide geospatial solutions that help businesses and governments make informed decisions, improve operations, and deliver results. From GIS and land surveying to cloud-based mapping and location intelligence, we offer services that bring clarity to complex challenges.';

  // --- Infinite Carousel State & Logic ---
  const transitionDuration = 500; // ms
  const gap = 4; // px gap between cards

  // Helper to calculate exact card width in pixels based on viewport
  const getCardWidthPx = () => {
    if (typeof window === 'undefined') return 300;
    if (isMobile) return Math.max(window.innerWidth * 0.85, 280);
    return Math.max(window.innerWidth * 0.25, 240);
  };

  const [cardWidthPx, setCardWidthPx] = useState(getCardWidthPx());
  // Start in the 3rd block (index 2N) to allow max scroll in both directions
  const [activeIndex, setActiveIndex] = useState(services.length * 2); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  // ✅ FIX: Duplicate array 5 times to create a massive buffer. 
  // This prevents fast clickers from ever reaching the end (white space) before the silent reset fires.
  const extendedServices = useMemo(
    () => [...services, ...services, ...services, ...services, ...services], 
    [services]
  );

  // Recalculate card width on window resize or mobile toggle
  useEffect(() => {
    const calculateWidth = () => {
      setCardWidthPx(getCardWidthPx());
    };
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, [isMobile]);

  // Reset to 3rd block silently when services array changes
  useEffect(() => {
    setActiveIndex(services.length * 2);
    setIsTransitioning(false);
  }, [services]);

  // Infinite loop trigger logic
  useEffect(() => {
    // If user scrolls past the 4th block, jump back by N seamlessly
    if (activeIndex >= services.length * 3) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(prev => prev - services.length);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
    // If user scrolls before the 2nd block, jump forward by N seamlessly
    else if (activeIndex < services.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(prev => prev + services.length);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, services.length]);

  // Re-enable transition after silent jump
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleScroll = (dir: 'left' | 'right') => {
    setIsTransitioning(true);
    setActiveIndex(prev => dir === 'right' ? prev + 1 : prev - 1);
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

        {/* Title + description */}
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
            {sectionTitle}
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
            {sectionDescription}
          </motion.p>
        </div>
      </div>

      {/* ── Cards row with overlaid arrow buttons ── */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>

        {/* Left arrow */}
        <button
          onClick={() => handleScroll('left')}
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
          onClick={() => handleScroll('right')}
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

        {/* Infinite Scroll Track */}
        <div
          style={{
            display: 'flex',
            gap: `${gap}px`,
            transform: `translateX(${-activeIndex * (cardWidthPx + gap)}px)`,
            transition: isTransitioning ? `transform ${transitionDuration}ms ease` : 'none',
          }}
        >
          {extendedServices.map((service, i) => (
            <motion.div
              key={service.title + i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (i % services.length) * 0.08 }}
              style={{
                position: 'relative',
                flexShrink: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                width: `${cardWidthPx}px`,
                height: isMobile ? '400px' : '520px',
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
                  href={service.route}
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