import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import type { Product } from '../../services/queries/homeQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Icons ──────────────────────────────────────────────────────────────────
const icons: Record<string, React.ReactNode> = {
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27252F" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  address: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27252F" strokeWidth="2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  google: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27252F" strokeWidth="2">
      <path d="M21 12.5c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57C21.08 18.7 21 15.7 21 12.5z" />
      <path d="M12 22c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 22 12 22z" />
      <path d="M5.84 13.1c-.22-.66-.35-1.36-.35-2.1s.13-1.43.35-2.09V6.07H2.18C1.43 7.55 1 9.22 1 11s.43 3.45 1.18 4.93l3.66-2.83z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  ),
  risk: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27252F" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

// ── Plain arrow link ───────────────────────────────────────────────────────
const ArrowBtn = ({ route }: { route?: string }) => (
  <a href={route} style={{ display: 'inline-flex', alignItems: 'center', color: '#393B50', transition: 'opacity 0.2s' }}
    onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#393B50" strokeWidth="1.8">
      <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </a>
);

// ── Product card ───────────────────────────────────────────────────────────
interface CardProps {
  bg: string;
  icon: string;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
  offsetTop?: boolean;
  route?: string;
}

function ProductCard({ bg, icon, title, description, delay, isVisible, offsetTop, route }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="products-card"
      style={{
        backgroundColor: bg,
        borderRadius: '24px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        maxWidth: '351px',
        minHeight: '268px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        marginTop: offsetTop ? '40px' : '0',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        boxSizing: 'border-box',
      }}
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
    >
      {/* Icon + Title row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ flexShrink: 0 }}>{icons[icon]}</div>
        <h3 style={{ fontFamily: satoshi, fontWeight: 500, fontSize: '18px', lineHeight: '150%', letterSpacing: '0', color: '#010527' }}>
          {title}
        </h3>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: satoshi,
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0',
        color: '#4b5563',
        flex: 1,
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {description}
      </p>

      {/* Arrow */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
        <ArrowBtn route={route} />
      </div>
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function Products({ data }: { data?: Product }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Card background colours — cycled for CMS items that don't supply one
  const bgCycle = ['#F0E2FF', '#CCECFF', '#FFF2D7', '#DAE4FF'];

  // Hardcoded fallback products — preserved
  const fallbackProducts = [
    { id: 1, bg: '#F0E2FF', icon: 'database', title: 'Polaris Data Collector (PDC)', description: 'A digital tool for real-time data gathering using custom forms, enabling efficient electronic data collection and storage.', col: 'left' as const, route: '/products/polaris-data-collector' },
    { id: 2, bg: '#CCECFF', icon: 'address', title: 'Address Management Portal', description: 'A user-friendly platform that streamlines address verification and management, improving data accuracy and customer experience.', col: 'right' as const, route: '/products/address-management-portal' },
    { id: 3, bg: '#FFF2D7', icon: 'google', title: 'Google Workspace', description: 'Polaris Digitech offers seamless integration of Google Workspace apps and Google Cloud Platform to enhance client productivity and experience.', col: 'left' as const, route: '/products/google-workspace' },
    { id: 4, bg: '#DAE4FF', icon: 'risk', title: 'Risk Geo-Platform', description: 'An advanced tool that analyzes and visualizes geospatial data to help organizations manage risks proactively and support business growth.', col: 'right' as const, route: '/products/risk-geo-platform' },
  ];

  const products =
    data?.item && data.item.length > 0
      ? data.item.map((item, idx) => ({
          id: idx + 1,
          bg: bgCycle[idx % bgCycle.length],
          icon: item.icon ?? item.icons ?? 'database',
          title: item.title ?? '',
          description: item.description ?? '',
          col: idx % 2 === 0 ? ('left' as const) : ('right' as const),
          route: item.href ?? '',
        }))
      : fallbackProducts;

  const sectionTitle = data?.title ?? 'Solutions You Can Rely On.';
  const sectionDescription =
    data?.description ??
    'Discover our in-house products—designed and developed to help you collect data faster, manage addresses accurately, and assess geographical risk effectively. We also support seamless integration with platforms like Google Workspace to streamline your operations.';

  const leftCards = products.filter(p => p.col === 'left');
  const rightCards = products.filter(p => p.col === 'right');

  return (
    <section id="products" ref={ref} style={{ backgroundColor: '#FFF', paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        <div className="products-main-grid" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '40% 60%', gap: isMobile ? '32px' : '64px', alignItems: 'start' }}>

          {/* ── Left: badge, title, description, CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="products-sticky-panel"
            style={{ position: isMobile ? 'static' : 'sticky', top: '112px' }}
          >
            {/* Badge */}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              paddingTop: '5px', paddingBottom: '5px',
              paddingLeft: '16px', paddingRight: '16px',
              borderRadius: '100px',
              border: '1px solid #D7B56D',
              color: '#D7B56D',
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '13px',
              marginBottom: '20px',
            }}>
              Our Products
            </span>

            {/* Title */}
            <h2 style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#010527',
              marginBottom: '20px',
              maxWidth: '380px',
            }}>
              {sectionTitle}
            </h2>

            {/* Description */}
            <p style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: '0',
              color: '#4b5563',
              marginBottom: '36px',
            }}>
              {sectionDescription}
            </p>

            {/* CTA button */}
            <a
              href="/solutions"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#010527',
                color: '#FFFFFF',
                fontFamily: satoshi,
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0',
                width: '218px',
                height: '48px',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '36px',
                paddingRight: '36px',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              See All Products
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* ── Right: staggered 2-col grid — single col on mobile ── */}
          <div className="products-cards-grid" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', alignItems: 'start' }}>

            {/* Left column — offset down on desktop only */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: isMobile ? '0' : '48px' }}>
              {leftCards.map((p, i) => (
                <ProductCard
                  key={p.id}
                  bg={p.bg}
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                  delay={i * 0.1}
                  isVisible={isVisible}
                  route={p.route}
                />
              ))}
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {rightCards.map((p, i) => (
                <ProductCard
                  key={p.id}
                  bg={p.bg}
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                  delay={0.15 + i * 0.1}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
