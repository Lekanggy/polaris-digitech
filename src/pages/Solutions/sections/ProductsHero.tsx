import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useGraphQLQuery } from '../../../hooks/useGraphQLQuery';
import { productQuery } from '../../../services/queries/productQuery';
import type { ProductsData } from '../../../services/queries/productQuery';
import { strapiUrl } from '../../../services/queries/productQuery';
import { gql } from '../../../services/apolloClient';
import pdcl1 from '../../../assets/pdcl1.png';
import pdcl2 from '../../../assets/pdcl2.png';
import pdcl3 from '../../../assets/pdcl3.png';

const PRODUCTS_QUERY = gql(productQuery);
const satoshi = 'Satoshi, Inter, sans-serif';

// ── Card background palette (cycles if CMS has more products) ─────────────
const BG_PALETTE = ['#F0E2FF', '#DAE4FF', '#CCECFF', '#FFF2D7', '#D4EDDA'];
const BOX_PALETTE = ['#9B6FD8', '#6B9FD8', '#5AAFCC', '#D4A84B', '#5AAF7A'];

// ── Fallback products (hardcoded) — PDC → Risk Geo → AMP ─────────────────
const FALLBACK_PRODUCTS = [
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
    overlayImage: pdcl1,
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
    route: '/solutions/risk-geo-platform',
    overlayImage: pdcl3,
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
    overlayImage: pdcl2,
  },
];

const FALLBACK_IMAGES = [pdcl1, pdcl3, pdcl2];

// ── Normalise a CMS product into display shape ─────────────────────────────
interface DisplayProduct {
  title: string;
  description: string;
  features: string[];
  bg: string;
  boxBg: string;
  boxPosition: 'left' | 'right';
  route: string;
  overlayImage: string;
}

// ── Slug sort order: PDC → Risk Geo → AMP ─────────────────────────────────
const SLUG_ORDER = ['pdc', 'risk-geo', 'amp'];

function sortProducts<T extends { slug?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const ai = SLUG_ORDER.indexOf(a.slug ?? '');
    const bi = SLUG_ORDER.indexOf(b.slug ?? '');
    const an = ai === -1 ? 999 : ai;
    const bn = bi === -1 ? 999 : bi;
    return an - bn;
  });
}

function normaliseProducts(cmsProducts: ProductsData['products']): DisplayProduct[] {
  if (!cmsProducts || cmsProducts.length === 0) return FALLBACK_PRODUCTS;

  // Sort CMS products into the desired order before normalising
  const sorted = sortProducts(cmsProducts);

  return sorted.map((p, i) => {
    const fallback = FALLBACK_PRODUCTS[i];
    const features = (p.features ?? [])
      .map((f) => f.text ?? '')
      .filter((text): text is string => Boolean(text));

    return {
      title:       p.title        ?? fallback?.title        ?? '',
      description: p.shortDescription ?? fallback?.description ?? '',
      features:    features.length > 0 ? features : fallback?.features ?? [],
      bg:          BG_PALETTE[i % BG_PALETTE.length],
      boxBg:       BOX_PALETTE[i % BOX_PALETTE.length],
      boxPosition: p.boxPosition === 'right' ? 'right' : 'left',
      route:       p.route ? `/solutions/${p.route}` : fallback?.route ?? `/solutions/${p.slug ?? ''}`,
      overlayImage: strapiUrl(p.overlayImage?.url) ?? fallback?.overlayImage ?? FALLBACK_IMAGES[i % FALLBACK_IMAGES.length],
    };
  });
}

// ── Bullet icon ────────────────────────────────────────────────────────────
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
      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a1a3e' }} />
    </span>
  );
}

// ── Product card ───────────────────────────────────────────────────────────
interface ProductCardProps extends DisplayProduct {
  stickyTop: number;
  zIndex: number;
  isMobile: boolean;
}

function ProductCard({
  title, description, features, bg, boxBg, boxPosition, route,
  stickyTop, zIndex, isMobile, overlayImage,
}: ProductCardProps) {
  return (
    <div
      style={{
        position: isMobile ? 'static' : 'sticky',
        top: isMobile ? 'auto' : `${stickyTop}px`,
        zIndex,
        marginBottom: '24px',
      }}
    >
      <div
        style={{
          background: bg,
          borderRadius: '24px',
          padding: isMobile ? '24px' : '40px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : (boxPosition === 'left' ? '1fr 1.2fr' : '1.2fr 1fr'),
          gap: isMobile ? '20px' : '32px',
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}
      >
        {/* Colored box with product image */}
        <div
          style={{
            background: boxBg,
            borderRadius: '20px',
            aspectRatio: isMobile ? '16 / 9' : '1',
            width: '100%',
            order: isMobile ? 0 : (boxPosition === 'left' ? 0 : 1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            boxSizing: 'border-box',
          }}
        >
          {overlayImage && (
            <img
              src={overlayImage}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                borderRadius: '12px',
              }}
            />
          )}
        </div>

        {/* Text content */}
        <div style={{ order: boxPosition === 'left' ? 1 : 0 }}>
          <h3
            style={{
              fontFamily: satoshi, fontWeight: 600, fontSize: '26px',
              lineHeight: '130%', color: '#283172', marginBottom: '12px',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: satoshi, fontWeight: 400, fontSize: '15px',
              lineHeight: '160%', color: '#46485F', marginBottom: '20px',
            }}
          >
            {description}
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {features.map((feat, fi) => (
              <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <BulletDot cardBg={boxBg} />
                <span style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '15px', lineHeight: '150%', color: '#46485F' }}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          <Link
            to={route}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '28px', padding: '10px 20px', borderRadius: '8px',
              background: '#283172', color: '#fff', fontFamily: satoshi,
              fontWeight: 600, fontSize: '14px', textDecoration: 'none',
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
      </div>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function ProductsHero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { data, loading, error } = useGraphQLQuery<ProductsData>(PRODUCTS_QUERY);

  if (loading) console.log('[Products] Loading CMS data...');
  if (error)   console.error('[Products] GraphQL error:', error);

  const products = normaliseProducts(data?.products as ProductsData['products']);

  const NAVBAR_H = 100;
  const PEEK     = 20;

  return (
    <section style={{ background: '#fff', paddingTop: '160px', paddingBottom: '80px' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: satoshi, fontWeight: 600,
              fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '120%',
              letterSpacing: '-0.02em', color: '#010527', marginBottom: '20px',
            }}
          >
            Solutions You Can Rely On
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: satoshi, fontWeight: 400, fontSize: '18px',
              lineHeight: '160%', color: '#46485F',
              maxWidth: '720px', margin: '0 auto 32px',
            }}
          >
            Discover our in-house products that enable quick data collection, precise address management, and effective geographical risk assessment. We also integrate smoothly with Google Workspace to boost your operations.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '12px 32px', borderRadius: '8px', background: '#283172',
              color: '#fff', fontFamily: satoshi, fontWeight: 600, fontSize: '15px',
              textDecoration: 'none', transition: 'opacity 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a meeting
          </motion.a>
        </div>

        {/* ── Sticky-stacking product cards ── */}
        <div>
          {products.map((product, i) => (
            <ProductCard
              key={product.title}
              {...product}
              stickyTop={NAVBAR_H + i * PEEK}
              zIndex={i + 1}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
