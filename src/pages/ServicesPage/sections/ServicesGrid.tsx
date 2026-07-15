import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useServicesQuery } from '../../../hooks/useServicesQuery';
import { strapiUrl } from '../../../services/queries/serviceQuery';
import soft  from '../../../assets/soft.png';
import soft1 from '../../../assets/soft1.png';
import soft2 from '../../../assets/soft2.png';
import soft3 from '../../../assets/soft3.png';
import soft4 from '../../../assets/soft4.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Hardcoded fallback ────────────────────────────────────────────────────
const FALLBACK_SERVICES = [
  { title: 'Software Development',                    image: soft,  href: '/services/software-development' },
  { title: 'Land Surveying',                          image: soft1, href: '/services/land-surveying' },
  { title: 'Geospatial Data Acquisition Management',  image: soft2, href: '/services/geospatial-data-acquisition' },
  { title: 'Identity Intelligence Management',        image: soft3, href: '/services/identity-intelligence' },
  { title: 'Training and Technical Support Services', image: soft4, href: '/services/training-support' },
];
const FALLBACK_IMAGES = [soft, soft1, soft2, soft3, soft4];

interface DisplayService { title: string; image: string; href: string; }

function ServiceCard({ service, index, isVisible, height = 500 }: { service: DisplayService; index: number; isVisible: boolean; height?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={service.href} style={{ textDecoration: 'none', display: 'block' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.06 + index * 0.08 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', height: `${height}px`, cursor: 'pointer' }}
      >
        <img
          src={service.image}
          alt={service.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 500ms ease' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px' }}>
          <h3 style={{ fontFamily: satoshi, fontWeight: 500, fontSize: 'clamp(18px, 4.5vw, 22px)', lineHeight: '140%', color: '#FFFFFF', margin: 0 }}>
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ServicesGrid() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { services: cmsServices } = useServicesQuery();

  const displayServices: DisplayService[] = (() => {
    if (!cmsServices || cmsServices.length === 0) return FALLBACK_SERVICES;
    return cmsServices.map((entry, i) => {
      const fb = FALLBACK_SERVICES[i];
      const href = entry.intro?.href ?? fb?.href ?? '#';
      const normalizedHref = href === '/services/intelligence-management'
        ? '/services/identity-intelligence'
        : href;
      return {
        title: entry.intro?.title ?? fb?.title ?? '',
        image: strapiUrl(entry.intro?.image?.url) ?? FALLBACK_IMAGES[i % FALLBACK_IMAGES.length],
        href: normalizedHref,
      };
    });
  })();

  const cardH = isMobile ? 340 : 500;

  return (
    <section ref={ref} style={{ background: '#FFFFFF', paddingTop: '0', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '12px' }}>
          {displayServices[0] && <ServiceCard service={displayServices[0]} index={0} isVisible={isVisible} height={cardH} />}
          {displayServices[1] && <ServiceCard service={displayServices[1]} index={1} isVisible={isVisible} height={cardH} />}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '12px' }}>
          {displayServices[2] && <ServiceCard service={displayServices[2]} index={2} isVisible={isVisible} height={cardH} />}
          {displayServices[3] && <ServiceCard service={displayServices[3]} index={3} isVisible={isVisible} height={cardH} />}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '12px' }}>
          {displayServices[4] && <ServiceCard service={displayServices[4]} index={4} isVisible={isVisible} height={cardH} />}
          {!isMobile && <div />}
        </div>
      </div>
    </section>
  );
}
