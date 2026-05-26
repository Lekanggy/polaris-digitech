/**
 * ContactInfo — Section 2 of Contact Us Page
 *
 * Two-column layout:
 *   Left: "We're always here to help" + contact items (email, phone, address)
 *   Right: Embedded Google Map with location marker
 */
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

const contactItems = [
  {
    label: 'You can email us here',
    value: 'info@polarisdigitech.net',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Give us a call',
    value: '+2348061515162, +2348074438880',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Get directions to our location',
    value: 'Suite C17, MKO Abiola Gardens Shopping Complex, Alausa Ikeja, Lagos, Nigeria.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 11L11 3M11 3H5M11 3V9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      ref={ref}
      style={{
        background: '#EBECF6',
        paddingTop: isMobile ? '48px' : '80px',
        paddingBottom: isMobile ? '48px' : '80px',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '40px' : '64px',
            alignItems: 'center',
          }}
        >
          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: satoshi,
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                lineHeight: '120%',
                letterSpacing: '-0.02em',
                color: '#010527',
                marginBottom: '16px',
              }}
            >
              We're always here to help.
            </h2>
            <p
              style={{
                fontFamily: satoshi,
                fontSize: '15px',
                lineHeight: '165%',
                color: '#46485F',
                marginBottom: '32px',
                maxWidth: '480px',
              }}
            >
              Our team is ready to connect. Reach out today and discover how Polaris Digitech can help you solve complex challenges with data-driven precision.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '14px' }}>
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    background: '#EBECF6',
                    border: '1px solid #D1D3E7',
                    borderRadius: '12px',
                    padding: '16px',
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: '48px',
                      height: '48px',
                      background: '#F0F2F8',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#46485F',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: satoshi, fontSize: '12px', color: '#8A93B2', marginBottom: '4px' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: satoshi, fontSize: '14px', fontWeight: 500, color: '#010527', lineHeight: '1.4' }}>
                      {item.value}
                    </p>
                  </div>

                  {/* Arrow button */}
                  <button
                    aria-label="Open"
                    style={{
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1px solid #E0E6EF',
                      background: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      cursor: 'pointer',
                      transition: 'border-color 200ms, color 200ms',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#283172';
                      e.currentTarget.style.color = '#283172';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#E0E6EF';
                      e.currentTarget.style.color = '#9ca3af';
                    }}
                  >
                    <ArrowIcon />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Map with address card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: '100%',
              height: isMobile ? '320px' : 'clamp(420px, 48vw, 540px)',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '3px solid #283172',
              position: 'relative',
              boxShadow: '0 8px 24px rgba(40,49,114,0.12)',
            }}
          >
            {/* Google Maps iframe — fills the container minus the card at bottom */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.352255893948!2d3.3480!3d6.6018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b5b5b5b5b5%3A0x0!2sPolaris+Digitech+Limited!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Polaris Digitech Location"
            />

            {/* Address card — overlaid at the bottom with padding from edges */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px 22px 22px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              }}
            >
              {/* Top row: name + directions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '6px',
                }}
              >
                <h4
                  style={{
                    fontFamily: satoshi,
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#010527',
                    margin: 0,
                    lineHeight: '130%',
                  }}
                >
                  Polaris Digitech Limited
                </h4>

                {/* Directions button */}
                <a
                  href="https://maps.google.com/?q=Polaris+Digitech+Limited,+Suite+C17,+MKO+Abiola+Gardens+Shopping+Complex,+Alausa+Ikeja,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: '#283172',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    {/* Navigation / directions icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: satoshi,
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#46485F',
                    }}
                  >
                    Directions
                  </span>
                </a>
              </div>

              {/* Address */}
              <p
                style={{
                  fontFamily: satoshi,
                  fontSize: '13px',
                  color: '#46485F',
                  lineHeight: '155%',
                  margin: '0 0 12px 0',
                  maxWidth: '320px',
                }}
              >
                Suite C17, MKO Abiola Gardens Shopping Complex,<br />
                Alausa Ikeja, Lagos, Nigeria.
              </p>

              {/* Rating row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: satoshi,
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#010527',
                  }}
                >
                  4.2
                </span>

                {/* Stars: 4 filled + 1 half */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  {[1, 2, 3, 4].map(n => (
                    <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  {/* Half star */}
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stopColor="#F5A623" />
                        <stop offset="50%" stopColor="#D1D5DB" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)" />
                  </svg>
                </div>

                <span
                  style={{
                    fontFamily: satoshi,
                    fontSize: '13px',
                    color: '#6B7280',
                  }}
                >
                  75 reviews
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
