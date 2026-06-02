import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCounter } from '../../hooks/useCounter';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { WHY_CHOOSE_US } from '../../utils/constants';
import bgpro from '../../assets/bgpro.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Animated counter ───────────────────────────────────────────────────────
function StatItem({ value, label, start }: { value: number; label: string; start: boolean }) {
  const count = useCounter(value, 2000, start);
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{
        fontFamily: satoshi,
        fontWeight: 400,
        fontSize: 'clamp(56px, 7vw, 96px)',
        lineHeight: '100%',
        letterSpacing: '0',
        color: '#D7B56D',
        textAlign: 'center',
      }}>
        {count}+
      </p>
      <p style={{
        fontFamily: satoshi,
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '150%',
        letterSpacing: '0',
        color: '#FFFFFF',
        marginTop: '12px',
        textAlign: 'center',
      }}>
        {label}
      </p>
    </div>
  );
}

// ── Icons — gold color ─────────────────────────────────────────────────────
const icons: Record<string, React.ReactNode> = {
  location: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" strokeWidth="1.8">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  laptop: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
};

// ── Main component ─────────────────────────────────────────────────────────
export default function AboutStatsWhy() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      id="about"
      ref={ref}
      style={{
        backgroundImage: `url(${bgpro})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* ── Part 1: About — centered ── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '96px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
        }}>

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '6px',
              paddingBottom: '6px',
              paddingLeft: '20px',
              paddingRight: '20px',
              borderRadius: '100px',
              border: '1px solid #D7B56D',
              color: '#D7B56D',
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '14px',
              marginBottom: '32px',
            }}
          >
            About Polaris Digitech Limited
          </motion.span>

          {/* Main statement — Task 1: 48px, weight 400, 3 lines */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '150%',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              maxWidth: '900px',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            We help organizations make smarter decisions with geospatial technology, trusted expertise, and solutions built for impact.
          </motion.h2>

          {/* CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '15px',
              color: '#FFFFFF',
              background: 'rgba(255,255,255,0.25)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              paddingTop: '12px',
              paddingBottom: '12px',
              paddingLeft: '24px',
              paddingRight: '24px',
              transition: 'opacity 300ms',
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a meeting
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>

        {/* ── Part 2: Stats — Task 2: 96px numbers, 18px labels ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            paddingTop: isMobile ? '32px' : '56px',
            paddingBottom: isMobile ? '60px' : '120px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            gap: isMobile ? '40px' : '0',
          }}
        >
          {[
            { value: 40, label: 'No of Corporate Clients' },
            { value: 300, label: 'Full-time & Field Employees' },
            { value: 85, label: 'Projects, Products, Services' },
          ].map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} start={isVisible} />
          ))}
        </motion.div>

        {/* ── Part 3: Why Choose Us — Task 3–5 ── */}
        <div
          className="why-choose-section"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
            paddingBottom: isMobile ? '60px' : '140px',
          }}
        >
          <div className="why-choose-row" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '24px' : '40px', width: '100%' }}>

            {/* Left — "Why You Should Choose Us" — Task 3: 40px, weight 500, 2 lines */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="why-choose-title"
              style={{ flexShrink: 0, width: isMobile ? '100%' : '220px' }}
            >
              <h2 style={{
                fontFamily: satoshi,
                fontWeight: 500,
                fontSize: 'clamp(28px, 3vw, 40px)',
                lineHeight: '150%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}>
                Why You Should<br />Choose Us
              </h2>
            </motion.div>

            {/* Right — 3 cards — fill remaining width equally */}
            <div className="why-cards-row" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px', flex: 1, minWidth: 0 }}>
              {WHY_CHOOSE_US.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="why-card"
                  style={{
                    flex: isMobile ? 'unset' : '1 1 0',
                    width: isMobile ? '100%' : undefined,
                    minHeight: isMobile ? 'auto' : '291px',
                    borderRadius: '16px',
                    padding: '24px',
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ marginBottom: '16px' }}>{icons[item.icon]}</div>

                  {/* Card title — Task 4: 18px, weight 500 */}
                  <h3 style={{
                    fontFamily: satoshi,
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '140%',
                    letterSpacing: '0',
                    color: '#FFFFFF',
                    marginBottom: '12px',
                  }}>
                    {item.title}
                  </h3>

                  {/* Card description — Task 4: 16px, weight 400 */}
                  <p style={{
                    fontFamily: satoshi,
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0',
                    color: '#DEDEDE',
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
