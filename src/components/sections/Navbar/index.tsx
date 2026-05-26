import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../../utils/constants';
import type { NavServiceItem, NavProductItem, NavProjectItem } from '../../../utils/constants';
import whitelogo from '../../../assets/whitelogo.png';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

// Sub-components (modularized)
import CenteredDropdownWrapper from './CenteredDropdownWrapper';
import ProjectsMegaMenu from './ProjectsMegaMenu';
import ProductsMegaMenu from './ProductsMegaMenu';
import ServicesMegaMenu from './ServicesMegaMenu';

// ── Main Navbar Component ─────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const activeLink = NAV_LINKS.find((l) => l.label === activeDropdown);

  // Mark a link active if the current pathname matches or starts with the link's href
  const isLinkActive = (href: string) =>
    href.startsWith('/') && location.pathname.startsWith(href);

  // Scroll lock + clear expanded when mobile menu closes
  useEffect(() => {
    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      setExpanded(null);
    }
  }, [mobileOpen]);

  const closeMobileNav = () => {
    setMobileOpen(false);
    setExpanded(null);
  };

  return (
    <>
      <header 
        className="fixed left-0 right-0 z-50 flex justify-center"
        style={{ 
          top: isMobile ? '8px' : '40px',
          paddingTop: isMobile ? '4px' : '32px',
          paddingLeft: isMobile ? '0' : '24px',
          paddingRight: isMobile ? '0' : '24px'
        }}
      >
      <nav
        className="w-full rounded-2xl shadow-xl transition-all duration-300"
        onMouseLeave={() => setActiveDropdown(null)}
        style={{
          width: isMobile ? 'min(92vw, 320px)' : '100%',
          maxWidth: isMobile ? '320px' : '920px',
          height: isMobile ? '52px' : '72px',
          backdropFilter: 'blur(8px)',
          background:
            'linear-gradient(0deg, rgba(4,10,61,0.8), rgba(4,10,61,0.8)), linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))',
          position: 'relative',
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ 
            paddingTop: isMobile ? '6px' : '12px', 
            paddingBottom: isMobile ? '6px' : '12px', 
            paddingLeft: isMobile ? '12px' : '20px', 
            paddingRight: isMobile ? '16px' : '28px' 
          }}
        >
          {/* Logo — navigates home */}
          <button
            onClick={() => navigate('/')}
            className="shrink-0 bg-transparent border-0 p-0 cursor-pointer"
          >
            <img 
              src={whitelogo} 
              alt="Polaris Digitech" 
              style={{ height: isMobile ? '26px' : '36px', width: 'auto', objectFit: 'contain' }} 
            />
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
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center text-primary-2 opacity-80 text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-85 shrink-0"
            style={{
              backgroundColor: '#EBECF6',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '20px',
              paddingRight: '20px',
              textDecoration: 'none',
            }}
            onClick={() => setActiveDropdown(null)}
          >
            Contact Us
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white"
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
                  width: 'min(220px, 70vw)',
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

      </nav>
    </header>

    {/* Full-screen mobile nav overlay — slides in from right */}
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-60 flex flex-col lg:hidden"
          style={{ backgroundColor: '#0a0e27' }}
        >
          {/* Top bar: logo + close */}
          <div className="flex items-center justify-between px-5! py-8!">
            <button
              onClick={() => {
                navigate('/');
                closeMobileNav();
              }}
              className="shrink-0 bg-transparent border-0 p-2 cursor-pointer"
            >
              <img 
                src={whitelogo} 
                alt="Polaris Digitech" 
                style={{ height: '24px', width: 'auto', objectFit: 'contain' }} 
              />
            </button>
            <button
              onClick={closeMobileNav}
              aria-label="Close menu"
              className="p-4 text-white/90 active:text-white"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Thin divider */}
          <div className="h-px bg-white/10"/>

          {/* Nav items — centered, generous spacing, scrollable if needed */}
          <div className="flex-1 overflow-y-auto  flex flex-col items-center gap-8 text-center pt-5!">
            {NAV_LINKS.map((link) => {
              const hasDropdown = !!(link.products || link.services || link.projects);
              const isExpanded = expanded === link.label;

              return (
                <div key={link.label} className="w-full">
                  <div className="flex items-center justify-center gap-3 py-5">
                    {hasDropdown ? (
                      <>
                        <Link
                          to={link.href}
                          onClick={closeMobileNav}
                          className="text-[17px] font-medium text-white"
                          style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}
                        >
                          {link.label}
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpanded(isExpanded ? null : link.label);
                          }}
                          aria-label={`Toggle ${link.label} submenu`}
                          className="p-2 -mr-2 text-white/75 active:text-white"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          >
                            <path d="M2 4l4 4 4-4" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={closeMobileNav}
                        className="text-[17px] font-medium text-white py-1"
                        style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>

                  {/* Submenu items (centered, lighter) */}
                  {hasDropdown && isExpanded && (
                    <div className="pb-4 text-center">
                      {link.products &&
                        link.products.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href || '#'}
                            onClick={closeMobileNav}
                            className="block py-2.5 text-[15px] text-white/70 active:text-white active:bg-white/5 rounded transition-colors"
                            style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}
                          >
                            {item.title}
                          </Link>
                        ))}
                      {link.services &&
                        link.services.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={closeMobileNav}
                            className="block py-2.5 text-[15px] text-white/70 active:text-white active:bg-white/5 rounded transition-colors"
                            style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}
                          >
                            {item.title}
                          </Link>
                        ))}
                      {link.projects &&
                        link.projects.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={closeMobileNav}
                            className="block py-2.5 text-[15px] text-white/70 active:text-white active:bg-white/5 rounded transition-colors"
                            style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}
                          >
                            {item.title}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Contact Us — exact dimensions, centered, white 12% opacity bg, closer to items */}
            <div className="w-full flex justify-center mt-6 mb-1">
              <Link
                to="/contact"
                onClick={closeMobileNav}
                className="flex items-center justify-center text-sm font-semibold text-white active:opacity-90 transition-opacity"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.12)', 
                  fontFamily: 'Satoshi, Inter, sans-serif', 
                  textDecoration: 'none',
                  width: 'min(358px, 92vw)',
                  height: 48,
                  borderRadius: '10px',
                  paddingTop: 12,
                  paddingRight: 24,
                  paddingBottom: 12,
                  paddingLeft: 24
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}
