/**
 * ServiceSubClients — Section 4
 * White bg:
 *   • "We've Provided Solutions To These Clients" heading + sub-text
 *   • Logo grid (same partner images as landing page Clients section)
 *   • Full-width placeholder/image card below
 *
 * Reusable across all service sub-pages.
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

import partner1 from '../../../assets/partner1.png';
import partner2 from '../../../assets/partner2.png';
import partner3 from '../../../assets/partner3.png';
import partner4 from '../../../assets/partner4.png';
import partner5 from '../../../assets/partner5.png';
import partner6 from '../../../assets/partner6.png';
import partner7 from '../../../assets/partner7.png';
import partner8 from '../../../assets/partner8.png';
import partner9 from '../../../assets/partner9.png';

const satoshi = 'Satoshi, Inter, sans-serif';

const ROW1 = [
  { src: partner1, alt: 'Google' },
  { src: partner2, alt: 'Partner 2' },
  { src: partner3, alt: 'Partner 3' },
  { src: partner4, alt: 'MTN' },
  { src: partner5, alt: 'AXA' },
  { src: partner6, alt: 'GTBank' },
];

const ROW2 = [
  { src: partner7, alt: 'OPay' },
  { src: partner8, alt: 'UPDC' },
  { src: partner9, alt: 'Mercy Corps' },
];

function LogoCard({ src, alt, delay, isVisible }: { src: string; alt: string; delay: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      style={{
        background: '#FFFFFF',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 40px 0px rgba(2, 10, 71, 0.10)',
        width: '146px',
        height: '100px',
        flexShrink: 0,
      }}
    >
      <img src={src} alt={alt} style={{ height: '36px', width: 'auto', objectFit: 'contain' }} loading="lazy" />
    </motion.div>
  );
}

export interface ServiceSubClientsProps {
  /** Optional bottom image — renders a placeholder card when omitted */
  bottomImage?: string;
  bottomImageAlt?: string;
}

export default function ServiceSubClients({
  bottomImage,
  bottomImageAlt = 'Service showcase',
}: ServiceSubClientsProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        paddingTop: '80px',
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h2
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: 'clamp(24px, 3.5vw, 40px)',
              lineHeight: '130%',
              letterSpacing: '-0.02em',
              color: '#010527',
              marginBottom: '12px',
            }}
          >
            We've Provided Solutions To These Clients
          </h2>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#6B7280',
            }}
          >
            We are proud to contribute to the success of these great brands
          </p>
        </motion.div>

        {/* Row 1 — 6 logos */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {ROW1.map((logo, i) => (
            <LogoCard key={logo.alt} src={logo.src} alt={logo.alt} delay={0.1 + i * 0.06} isVisible={isVisible} />
          ))}
        </div>

        {/* Row 2 — 3 logos */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {ROW2.map((logo, i) => (
            <LogoCard key={logo.alt} src={logo.src} alt={logo.alt} delay={0.46 + i * 0.06} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom image or placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            width: '100%',
            minHeight: '360px',
            borderRadius: '24px',
            overflow: 'hidden',
            background: bottomImage ? 'transparent' : '#EBECF6',
          }}
        >
          {bottomImage && (
            <img
              src={bottomImage}
              alt={bottomImageAlt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
