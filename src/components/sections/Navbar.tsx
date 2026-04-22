import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../utils/constants';
import type { NavServiceItem, NavProductItem, NavProjectItem } from '../../utils/constants';
import whitelogo from '../../assets/whitelogo.png';
import servicebg from '../../assets/servicebg.png';
import productbg from '../../assets/productbg.png';
import prbg from '../../assets/prbg.jpg';

// ── Project logo imports ──────────────────────────────────────────────────────
import mtnLogo     from '../../assets/mtn.png';
import image23Logo from '../../assets/image 23.png';
import partner7Logo from '../../assets/partner7.png';
import partner6Logo from '../../assets/partner6.png';
import googLogo    from '../../assets/goog.png';
import almLogo     from '../../assets/alm.png';
import image27Logo from '../../assets/image 27.png';
import image28Logo from '../../assets/image 28.png';

const PROJECT_LOGOS: Record<string, string> = {
  mtn: mtnLogo,
  image23: image23Logo,
  partner7: partner7Logo,
  partner6: partner6Logo,
  goog: googLogo,
  alm: almLogo,
  image27: image27Logo,
  image28: image28Logo,
};

// ── Wrapper that centers any dropdown relative to the nav ────────────────────
function CenteredDropdownWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        paddingTop: '14px',
        zIndex: 100,
      }}
    >
      {children}
    </div>
  );
}

// ── Projects mega-dropdown ────────────────────────────────────────────────────
function ProjectsMegaMenu({ items }: { items: NavProjectItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      style={{
        width: '780px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        display: 'flex',
        background: '#fff',
      }}
    >
      {/* Left panel — prbg image + overlay + CTA */}
      <div
        style={{
          width: '220px',
          flexShrink: 0,
          position: 'relative',
          backgroundImage: `url(${prbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '28px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(4,10,61,0.88) 0%, rgba(4,10,61,0.65) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '130%', color: '#fff', marginBottom: '14px' }}>
            Projects
          </h3>
          <p style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: '160%', color: 'rgba(255,255,255,0.82)' }}>
            Curious about how our products can help you get things done? Reach out and let's show you.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <a
            href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#fff', fontFamily: 'Satoshi, Inter, sans-serif', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
          >
            <span>Request Demo</span>
            <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#D7B56D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff' }}>
              <ShortArrow />
            </span>
          </a>
        </div>
      </div>

      {/* Right panel — 2-column project cards grid */}
      <div
        style={{
          flex: 1,
          padding: '16px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          alignContent: 'start',
          overflowY: 'auto',
          maxHeight: '420px',
        }}
      >
        {items.map((item) => (
          <a
            key={item.title}
            href="#projects"
            style={{
              display: 'block',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #E8EAF0',
              textDecoration: 'none',
              transition: 'border-color 200ms, box-shadow 200ms',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = '#D7B56D';
              el.style.boxShadow = '0 2px 12px rgba(215,181,109,0.15)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = '#E8EAF0';
              el.style.boxShadow = 'none';
            }}
          >
            {/* Logo + title row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <img
                src={PROJECT_LOGOS[item.logo]}
                alt={item.title}
                style={{ width: '28px', height: '28px', objectFit: 'contain', flexShrink: 0, borderRadius: '4px' }}
              />
              <span style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 600, fontSize: '12.5px', color: '#010527', lineHeight: '140%' }}>
                {item.title}
              </span>
            </div>
            {/* Description */}
            <p style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 400, fontSize: '11.5px', color: '#6B7280', lineHeight: '155%', margin: 0 }}>
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

// ── Product icon map ──────────────────────────────────────────────────────────
function ProductIcon({ name }: { name: string }) {
  const s = { width: 18, height: 18, flexShrink: 0 as const };
  switch (name) {
    case 'database':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'risk':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
    case 'address':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
  }
}

// ── Products mega-dropdown ────────────────────────────────────────────────────
function ProductsMegaMenu({ items, partnerProducts }: { items: NavProductItem[]; partnerProducts: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      style={{
        width: '780px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        display: 'flex',
        background: '#fff',
      }}
    >
      {/* Panel 1 — background image + overlay + CTA */}
      <div
        style={{
          width: '220px',
          flexShrink: 0,
          position: 'relative',
          backgroundImage: `url(${productbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '28px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(4,10,61,0.85) 0%, rgba(4,10,61,0.70) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '130%', color: '#fff', marginBottom: '14px' }}>
            Our Products
          </h3>
          <p style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: '160%', color: 'rgba(255,255,255,0.82)' }}>
            Curious about how our products can help you get things done? Reach out and let's show you.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <a
            href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#fff', fontFamily: 'Satoshi, Inter, sans-serif', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
          >
            <span>Get in touch</span>
            <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#D7B56D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff' }}>
              <ShortArrow />
            </span>
          </a>
        </div>
      </div>

      {/* Panel 2 — product cards (single column, colored bg) */}
      <div
        style={{
          width: '300px',
          flexShrink: 0,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRight: '1px solid #F0F1F5',
        }}
      >
        {items.map((item) => (
          <a
            key={item.title}
            href="#products"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '14px',
              borderRadius: '10px',
              backgroundColor: item.bg,
              textDecoration: 'none',
              transition: 'opacity 200ms, box-shadow 200ms',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ color: '#010527', display: 'flex', alignItems: 'center' }}>
                <ProductIcon name={item.icon} />
              </span>
              <span style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 600, fontSize: '12.5px', color: '#010527', lineHeight: '140%' }}>
                {item.title}
              </span>
            </div>
            <p style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 400, fontSize: '11.5px', color: '#46485F', lineHeight: '155%', margin: 0 }}>
              {item.description}
            </p>
          </a>
        ))}
      </div>

      {/* Panel 3 — partners list */}
      <div style={{ flex: 1, padding: '20px 22px' }}>
        <h4
          style={{
            fontFamily: 'Satoshi, Inter, sans-serif',
            fontWeight: 700,
            fontSize: '13.5px',
            color: '#010527',
            marginBottom: '16px',
            letterSpacing: '0',
          }}
        >
          Our Partners' Product
        </h4>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {partnerProducts.map((name) => (
            <li key={name}>
              <a
                href="#"
                style={{
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#46485F',
                  textDecoration: 'none',
                  transition: 'color 150ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#010527'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#46485F'; }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ── Service icon map ──────────────────────────────────────────────────────────
function ServiceIcon({ name }: { name: string }) {
  const s = { width: 18, height: 18, flexShrink: 0 as const };
  switch (name) {
    case 'monitor':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case 'survey':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'bulb':
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" />
          <path d="M9 17h6" />
        </svg>
      );
    case 'globe':
    default:
      return (
        <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}

// ── Short straight arrow for CTA button ──────────────────────────────────────
function ShortArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="8" x2="13" y2="8" />
      <polyline points="9,4 13,8 9,12" />
    </svg>
  );
}

// ── Services mega-dropdown ────────────────────────────────────────────────────
function ServicesMegaMenu({ items }: { items: NavServiceItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      style={{
        width: '680px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        display: 'flex',
        background: '#fff',
      }}
    >
      {/* Left panel — background image + text overlay + CTA */}
      <div
        style={{
          width: '220px',
          flexShrink: 0,
          position: 'relative',
          backgroundImage: `url(${servicebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '28px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, rgba(4,10,61,0.82) 0%, rgba(4,10,61,0.72) 100%)',
          }}
        />

        {/* Text content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '130%',
              color: '#fff',
              marginBottom: '14px',
            }}
          >
            Our Services
          </h3>
          <p
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: '160%',
              color: 'rgba(255,255,255,0.82)',
            }}
          >
            Curious about how our products can help you get things done? Reach out and let's show you.
          </p>
        </div>

        {/* CTA */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#fff',
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span>Get in touch</span>
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#D7B56D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#fff',
              }}
            >
              <ShortArrow />
            </span>
          </a>
        </div>
      </div>

      {/* Right panel — service cards grid */}
      <div
        style={{
          flex: 1,
          padding: '16px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          alignContent: 'start',
          background: '#fff',
        }}
      >
        {items.map((item) => (
          <a
            key={item.title}
            href="#services"
            style={{
              display: 'block',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #E8EAF0',
              textDecoration: 'none',
              transition: 'border-color 200ms, box-shadow 200ms',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = '#D7B56D';
              el.style.boxShadow = '0 2px 12px rgba(215,181,109,0.15)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = '#E8EAF0';
              el.style.boxShadow = 'none';
            }}
          >
            {/* Icon + title row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ color: '#010527', display: 'flex', alignItems: 'center' }}>
                <ServiceIcon name={item.icon} />
              </span>
              <span
                style={{
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '12.5px',
                  color: '#010527',
                  lineHeight: '140%',
                }}
              >
                {item.title}
              </span>
            </div>
            {/* Description */}
            <p
              style={{
                fontFamily: 'Satoshi, Inter, sans-serif',
                fontWeight: 400,
                fontSize: '11.5px',
                color: '#6B7280',
                lineHeight: '155%',
                margin: 0,
              }}
            >
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const activeLink = NAV_LINKS.find((l) => l.label === activeDropdown);

  // Only mark a link active if it's a real route path (starts with /) and matches current pathname
  const isLinkActive = (href: string) =>
    href.startsWith('/') && location.pathname === href;

  return (
    <header className="fixed top-10 left-0 right-0 z-50 flex justify-center pt-8 px-4">
      <nav
        className="w-full rounded-2xl shadow-xl transition-all duration-300"
        onMouseLeave={() => setActiveDropdown(null)}
        style={{
          maxWidth: '1000px',
          height: '72px',
          backdropFilter: 'blur(8px)',
          background:
            'linear-gradient(0deg, rgba(4,10,61,0.8), rgba(4,10,61,0.8)), linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))',
          position: 'relative',
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '20px', paddingRight: '16px' }}
        >
          {/* Logo — navigates home */}
          <button
            onClick={() => navigate('/')}
            className="shrink-0 bg-transparent border-0 p-0 cursor-pointer"
          >
            <img src={whitelogo} alt="Polaris Digitech" className="h-9 w-auto object-contain" />
          </button>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-7 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => (link.dropdown || link.services || link.products || link.projects) && setActiveDropdown(link.label)}
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors duration-200"
                    style={{
                      fontFamily: 'Satoshi, Inter, sans-serif',
                      color: active ? '#D7B56D' : 'rgba(255,255,255,0.9)',
                      textDecoration: 'none',
                      borderBottom: active ? '2px solid #D7B56D' : '2px solid transparent',
                      paddingBottom: '2px',
                    }}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {link.label}
                    {(link.dropdown || link.services || link.products || link.projects) && (
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Us */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center text-primary-2 opacity-80 text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-85 shrink-0"
            style={{
              backgroundColor: '#EBECF6',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            Contact Us
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                : <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
              }
            </svg>
          </button>
        </div>

        {/* ── Centralised mega-dropdowns — rendered relative to nav, not the li ── */}
        <AnimatePresence>
          {activeLink?.projects && (
            <CenteredDropdownWrapper key="projects">
              <ProjectsMegaMenu items={activeLink.projects} />
            </CenteredDropdownWrapper>
          )}
          {activeLink?.products && (
            <CenteredDropdownWrapper key="products">
              <ProductsMegaMenu items={activeLink.products} partnerProducts={activeLink.partnerProducts ?? []} />
            </CenteredDropdownWrapper>
          )}
          {activeLink?.services && (
            <CenteredDropdownWrapper key="services">
              <ServicesMegaMenu items={activeLink.services} />
            </CenteredDropdownWrapper>
          )}
          {activeLink?.dropdown && (
            <CenteredDropdownWrapper key="dropdown">
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                style={{
                  width: '220px',
                  borderRadius: '12px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  background: 'rgba(4,10,61,0.98)',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                }}
              >
                {activeLink.dropdown.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            </CenteredDropdownWrapper>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-white/10 overflow-hidden rounded-b-2xl"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-sm font-medium transition-colors py-1"
                      style={{
                        color: active ? '#D7B56D' : 'rgba(255,255,255,0.85)',
                        textDecoration: 'none',
                        borderBottom: active ? '1px solid #D7B56D' : 'none',
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-primary-2 text-sm font-semibold rounded-xl mt-1"
                  style={{ backgroundColor: '#EBECF6' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
