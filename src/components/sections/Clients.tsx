import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.png';
import partner7 from '../../assets/partner7.png';
import partner8 from '../../assets/partner8.png';
import partner9 from '../../assets/partner9.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// Combine all logos into a single array to ensure continuous flow
const allLogos = [
  { src: partner1, alt: 'Google' },
  { src: partner2, alt: 'Partner 2' },
  { src: partner3, alt: 'Partner 3' },
  { src: partner4, alt: 'MTN' },
  { src: partner5, alt: 'AXA' },
  { src: partner6, alt: 'GTBank' },
  { src: partner7, alt: 'OPay' },
  { src: partner8, alt: 'UPDC' },
  { src: partner9, alt: 'Mercy Corps' },
];

// ── Single logo card ───────────────────────────────────────────────────────
function LogoCard({ src, alt, delay, isVisible, isMobile }: { src: string; alt: string; delay: number; isVisible: boolean; isMobile: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="clients-logo-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 40px 0px rgba(2, 10, 71, 0.10)',
        // On mobile: strictly takes up 50% minus half the gap. 
        // On desktop: stays fixed at 200px.
        width: isMobile ? 'calc((100% - 16px) / 2)' : '200px',
        height: '140px',
        boxSizing: 'border-box',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="clients-logo-img"
        style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
        loading="lazy"
      />
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function Clients() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    /* Shares white bg with Products & Projects */
    <section
      id="clients"
      ref={ref}
      style={{ backgroundColor: '#fff', paddingTop: '60px', paddingBottom: '80px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{
            fontFamily: satoshi,
            fontWeight: 500,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: '140%',
            letterSpacing: '-0.02em',
            color: '#010527',
            marginBottom: '12px',
            textAlign: 'center',
          }}>
            Meet Our Amazing Clients
          </h2>
          <p style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: isMobile ? '16px' : '20px',
            lineHeight: '150%',
            letterSpacing: '0',
            color: '#6b7280',
            textAlign: 'center',
            padding: isMobile ? '0 8px' : '0',
          }}>
            We are proud to contribute to the success of these great brands
          </p>
        </motion.div>

        {/* Unified Flex Container for all logos */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '16px' 
        }}>
          {allLogos.map((logo, i) => (
            <LogoCard 
              key={logo.alt} 
              src={logo.src} 
              alt={logo.alt} 
              delay={0.1 + i * 0.06} 
              isVisible={isVisible} 
              isMobile={isMobile} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}