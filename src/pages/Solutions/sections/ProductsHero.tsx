import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Product data with routes ───────────────────────────────────────────────
const PRODUCTS = [
  {
    title: 'Polaris Data Collector (PDC)',
    description: 'PDC is a digital tool for real-time data gathering using custom forms, enabling efficient electronic data collection and storage.',
    features: [
      'See how much you can afford with our calculator',
      'Get help with your down payment',
      'Start saving towards your future home today',
    ],
    bg: '#F0E2FF',
    boxBg: '#9B6FD8',
    boxPosition: 'left' as const,
    route: '/solutions/pdc',
  },
  {
    title: 'Risk Geo-Platform',
    description: 'This is an advanced tool that analyzes and visualizes geospatial data to help organizations manage risks proactively and support business growth.',
    features: [
      'Elevating living with eco-friendly spaces',
      'Expertly manage properties, ensuring asset value growth',
      'Stay ahead with insights on property and market forecasts',
    ],
    bg: '#DAE4FF',
    boxBg: '#6B9FD8',
    boxPosition: 'right' as const,
    route: '/solutions/risk-geo',
  },
  {
    title: 'Address Management Portal (AMP)',
    description: 'AMP is a user-friendly platform that streamlines address verification and management, improving data accuracy and customer experience.',
    features: [
      'Meets and Inspect goals, all before repairs',
      'Prioritize repairs we placed centralize home ins',
      'Hues and blend down, we diagram and. Meta',
    ],
    bg: '#CCECFF',
    boxBg: '#5AAFCC',
    boxPosition: 'left' as const,
    route: '/solutions/amp',
  },
];

// ── Bullet icon — large circle in card bg color with dark inner dot ────────
function BulletDot({ cardBg }: { cardBg: string }) {
  return (
    <span
      style={{
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        backgroundColor: cardBg,
        border: '3px solid rgba(0,0,0,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#1a1a3e',
        }}
      />
    </span>
  );
}

// ── Product card ───────────────────────────────────────────────────────────
interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  bg: string;
  boxBg: string;
  boxPosition: 'left' | 'right';
  route: string;
  index: number;
  isVisible: boolean;
}

function ProductCard({ title, description, features, bg, boxBg, boxPosition, route, index, isVisible }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.12 }}
      style={{
        background: bg,
        borderRadius: '24px',
        padding: '40px',
        display: 'grid',
        gridTemplateColumns: boxPosition === 'left' ? '1fr 1.2fr' : '1.2fr 1fr',
        gap: '32px',
        alignItems: 'center',
      }}
    >
      {/* Colored box */}
      <div
        style={{
          background: boxBg,
          borderRadius: '20px',
          aspectRatio: '1',
          width: '100%',
          order: boxPosition === 'left' ? 0 : 1,
        }}
      />

      {/* Text content */}
      <div style={{ order: boxPosition === 'left' ? 1 : 0 }}>
        <h3
          style={{
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: '26px',
            lineHeight: '130%',
            color: '#283172',
            marginBottom: '12px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '160%',
            color: '#46485F',
            marginBottom: '20px',
          }}
        >
          {description}
        </p>

        {/* Feature list — circular bullet matching card bg */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {features.map((feat) => (
            <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <BulletDot cardBg={boxBg} />
              <span
                style={{
                  fontFamily: satoshi,
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '150%',
                  color: '#46485F',
                }}
              >
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* Read More button */}
        <Link
          to={route}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '28px',
            padding: '10px 20px',
            borderRadius: '8px',
            background: '#283172',
            color: '#fff',
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'opacity 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Read More
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4,2 10,7 4,12" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function ProductsHero() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
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
        {/* ── Header: title + desc + button ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 600,
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#010527',
              marginBottom: '20px',
            }}
          >
            Solutions You Can Rely On
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '160%',
              color: '#46485F',
              maxWidth: '720px',
              margin: '0 auto 32px',
            }}
          >
            Discover our in-house products that enable quick data collection, precise address management, and effective geographical risk assessment. We also integrate smoothly with Google Workspace to boost your operations.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 32px',
              borderRadius: '8px',
              background: '#283172',
              color: '#fff',
              fontFamily: satoshi,
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a meeting
          </motion.a>
        </div>

        {/* ── Product cards ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              features={product.features}
              bg={product.bg}
              boxBg={product.boxBg}
              boxPosition={product.boxPosition}
              route={product.route}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
