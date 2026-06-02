import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import val1 from '../../../assets/val1.png';
import val2 from '../../../assets/val2.png';
import val3 from '../../../assets/val3.png';
import val4 from '../../../assets/val4.png';
import val5 from '../../../assets/val5.png';
import val6 from '../../../assets/val6.png';

const satoshi = 'Satoshi, Inter, sans-serif';

const VALUES = [
  {
    image: val1,
    title: 'Partnered Solutions',
    description: 'We co-create tailored GIS and business solutions through strategic industry partnerships.',
  },
  {
    image: val2,
    title: 'High Standards',
    description: 'Our solutions are efficient, flexible, and built on deep analysis and best practices.',
  },
  {
    image: val3,
    title: 'Best Value',
    description: 'We deliver results-driven services that exceed expectations and boost client success.',
  },
  {
    image: val4,
    title: 'Product Variety',
    description: 'We offer a broad range of trusted solutions and OEM products to meet diverse needs.',
  },
  {
    image: val5,
    title: 'Industry Experience',
    description: 'Our experts deliver tailored solutions with deep, cross-industry experience.',
  },
  {
    image: val6,
    title: 'Timely Delivery',
    description: 'We ensure fast, reliable delivery of solutions across all industries and locations.',
  },
];

// ── Single value item ──────────────────────────────────────────────────────
interface ValueItemProps {
  image: string;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
  isMobile: boolean;
  isLastInRow: boolean;
}

function ValueItem({ image, title, description, index, isVisible, isMobile, isLastInRow }: ValueItemProps) {
  const showRightDivider = !isMobile && !isLastInRow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.08 }}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: isMobile ? '32px 20px' : '40px 32px 48px',
        position: 'relative',
        borderRight: showRightDivider ? '1px solid rgba(40,49,114,0.15)' : 'none',
        borderBottom: isMobile ? '1px solid rgba(40,49,114,0.15)' : 'none',
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'contain',
          marginBottom: '24px',
        }}
      />

      {/* Title */}
      <h3
        style={{
          fontFamily: satoshi,
          fontWeight: 500,
          fontSize: '24px',
          lineHeight: '140%',
          letterSpacing: '0',
          color: '#283172',
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>

      {/* Description — 2 lines, centered */}
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '150%',
          letterSpacing: '0',
          textAlign: 'center',
          color: '#46485F',
          maxWidth: '260px',
          margin: '0 auto',
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function WhatSetsUsApart() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const topRow = VALUES.slice(0, 3);
  const bottomRow = VALUES.slice(3, 6);

  return (
    <section
      ref={ref}
      style={{
        background: '#EEF0F8',
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
        {/* ── Section header ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
              marginBottom: '16px',
            }}
          >
            What Sets Us Apart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '160%',
              color: '#46485F',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            From strategic partnerships to expert delivery, we offer tailored solutions, reliable execution, and deep industry expertise that drive measurable impact.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div>
          {/* Top row */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch' }}>
            {topRow.map((item, i) => (
              <ValueItem
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
                index={i}
                isVisible={isVisible}
                isMobile={isMobile}
                isLastInRow={i === topRow.length - 1}
              />
            ))}
          </div>

          {/* Horizontal divider between rows */}
          <div style={{ height: '1px', background: 'rgba(40,49,114,0.2)', margin: '0' }} />

          {/* Bottom row */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch' }}>
            {bottomRow.map((item, i) => (
              <ValueItem
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
                index={i + 3}
                isVisible={isVisible}
                isMobile={isMobile}
                isLastInRow={i === bottomRow.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
