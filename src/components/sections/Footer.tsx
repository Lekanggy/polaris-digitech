import whitelogo from '../../assets/whitelogo.png';
import { FOOTER_LINKS } from '../../utils/constants';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

const socialIcons = [
  {
    label: 'LinkedIn',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const containerStyle: React.CSSProperties = {
  maxWidth: '1280px',
  margin: '0 auto',
  paddingLeft: 'clamp(24px, 5vw, 80px)',
  paddingRight: 'clamp(24px, 5vw, 80px)',
};

export default function Footer() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: '#010527' }}>

      {/* ── CTA Bar ── */}
      <div style={{ ...containerStyle, paddingTop: '40px', paddingBottom: '40px' }}>
        <div
          className="footer-cta-row"
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: 'clamp(20px, 2.5vw, 32px)',
              lineHeight: '140%',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              maxWidth: '520px',
            }}
          >
            Interested in our products, services, or a potential partnership?
          </p>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              fontFamily: satoshi,
              fontWeight: 600,
              fontSize: '16px',
              color: '#FFFFFF',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            Get in touch
            <span
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#D7B56D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#010527',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div style={{ ...containerStyle }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
      </div>

      {/* ── Main Footer ── */}
      <div style={{ ...containerStyle, paddingTop: '56px', paddingBottom: '56px' }}>
        <div
          className="footer-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr 1fr',
            gap: isMobile ? '32px' : '60px',
            alignItems: 'start',
          }}
        >
          {/* Column 1 — Logo + address + socials */}
          <div>
            <img
              src={whitelogo}
              alt="Polaris Digitech"
              style={{ height: '48px', marginBottom: '20px', objectFit: 'contain' }}
            />
            <p
              style={{
                fontFamily: satoshi,
                fontSize: '13px',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '24px',
                maxWidth: '220px',
              }}
            >
              Suite C17, MKO Abiola Gardens Shopping Complex, Alausa Ikeja, Lagos, Nigeria.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialIcons.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(215,181,109,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D7B56D',
                    textDecoration: 'none',
                    transition: 'background 200ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#D7B56D')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(215,181,109,0.15)')}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2–5 — Link groups */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: satoshi,
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '0',
                  color: '#FFFFFF',
                  marginBottom: '20px',
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: satoshi,
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        transition: 'color 200ms',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#D7B56D')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ ...containerStyle }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="footer-bottom-bar"
        style={{
          ...containerStyle,
          paddingTop: '24px',
          paddingBottom: '24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <p
          style={{
            fontFamily: satoshi,
            fontSize: '13px',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Copyright © 2025 Polaris Digitech Limited | Powered by Polaris
        </p>

        <button
          onClick={scrollToTop}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: satoshi,
            fontSize: '13px',
            color: 'rgba(255,255,255,0.4)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#D7B56D')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
        >
          Back to top
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 11V3M3 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </footer>
  );
}
