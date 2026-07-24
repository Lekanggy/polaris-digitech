import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../../utils/constants';
import type { NavProductItem, NavProjectItem } from '../../../utils/constants';
import whitelogo from '../../../assets/whitelogo.png';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useGraphQLQuery } from '../../../hooks/useGraphQLQuery';
import { productQuery } from '../../../services/queries/productQuery';
import type { ProductsData } from '../../../services/queries/productQuery';
import { useProjectsQuery } from '../../../hooks/useProjectsQuery';
import { useServicesQuery } from '../../../hooks/useServicesQuery';
import { strapiUrl } from '../../../services/queries/projectQuery';
import { gql } from '../../../services/apolloClient';

// Sub-components (modularized)
import CenteredDropdownWrapper from './CenteredDropdownWrapper';
import ProjectsMegaMenu from './ProjectsMegaMenu';
import ProductsMegaMenu from './ProductsMegaMenu';
import ServicesMegaMenu from './ServicesMegaMenu';

const PRODUCTS_QUERY = gql(productQuery);

// ── Icon mapping: CMS Icons string → NavProductItem icon key ──────────────
const STATIC_PRODUCTS = NAV_LINKS.find((l) => l.label === 'Products')?.products ?? [];

function cmsIconToNavIcon(icon?: string): string {
  if (!icon) return 'database';
  return icon.toLowerCase();
}

// ── Slug sort order for the mega menu ────────────────────────────────────
const SLUG_ORDER = ['pdc', 'risk-geo', 'amp'];

function sortBySlug<T extends { slug?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const ai = SLUG_ORDER.indexOf(a.slug ?? '');
    const bi = SLUG_ORDER.indexOf(b.slug ?? '');
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}

// ── BG palette to assign card backgrounds in the mega menu ────────────────
const BG_PALETTE = ['#F0E2FF', '#DAE4FF', '#CCECFF', '#FFF2D7'];

// ── Main Navbar Component ─────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Fetch CMS products for the mega menu
  const { data: productsData } = useGraphQLQuery<ProductsData>(PRODUCTS_QUERY);

  // Fetch CMS projects for the mega menu
  const { projects: cmsProjectsArr } = useProjectsQuery();

  // Fetch CMS services for the mega menu
  const { services: cmsServicesArr } = useServicesQuery();

  // Build NavServiceItem[] from CMS, falling back to static data per item
  const STATIC_SERVICES = NAV_LINKS.find((l) => l.label === 'Services')?.services ?? [];
  const cmsNavServices: typeof STATIC_SERVICES = (() => {
    if (!cmsServicesArr || cmsServicesArr.length === 0) return STATIC_SERVICES;
    return cmsServicesArr.map((entry, i) => {
      const intro = entry.intro;
      const fb = STATIC_SERVICES[i];
      return {
        icon: intro?.icons ?? fb?.icon ?? 'monitor',
        title: intro?.title ?? fb?.title ?? '',
        description: intro?.description ?? fb?.description ?? '',
        href: intro?.href ?? fb?.href ?? '#',
      };
    });
  })();

  // Build NavProjectItem[] — one entry per project, using project_item card data
  const STATIC_PROJECTS = NAV_LINKS.find((l) => l.label === 'Projects')?.projects ?? [];
  const cmsNavProjects: NavProjectItem[] = (() => {
    if (!cmsProjectsArr || cmsProjectsArr.length === 0) return STATIC_PROJECTS;
    return cmsProjectsArr.map((entry, i) => {
      const p = entry.project_item;
      const fb = STATIC_PROJECTS[i];
      return {
        logo: p?.cardLogo?.url ? (strapiUrl(p.cardLogo.url) ?? fb?.logo ?? '') : (fb?.logo ?? ''),
        title: p?.title ?? fb?.title ?? '',
        description: p?.description ?? fb?.description ?? '',
        href: p?.href ?? fb?.href ?? '#',
      };
    });
  })();

  // Build NavProductItem[] from CMS, falling back to static data per item
  const cmsNavProducts: NavProductItem[] = (() => {
    const cms = productsData?.products;
    if (!cms || cms.length === 0) return STATIC_PRODUCTS;

    const sorted = sortBySlug(cms as Array<{ slug?: string } & (typeof cms)[0]>);

    return sorted.map((p, i) => {
      const staticFallback = STATIC_PRODUCTS[i];
      return {
        icon: cmsIconToNavIcon(p.Icons) ?? staticFallback?.icon ?? 'database',
        title: p.title ?? staticFallback?.title ?? '',
        description: p.shortDescription ?? staticFallback?.description ?? '',
        bg: BG_PALETTE[i % BG_PALETTE.length],
        href: p.route ? `/solutions/${p.route}` : staticFallback?.href ?? `/solutions/${p.slug ?? ''}`,
      };
    });
  })();

  // Mark a link active if the current pathname matches or starts with the link's href
  const isLinkActive = (href: string) => href.startsWith('/') && location.pathname.startsWith(href);

  // Helper to check if any child of a link is active
  const isParentActive = (link: typeof NAV_LINKS[number]) => {
    if (isLinkActive(link.href)) return true;
    const subs = link.products ? cmsNavProducts : link.services ? cmsNavServices : link.projects ? cmsNavProjects : [];
    return subs.some(s => s.href && s.href !== '#' && location.pathname.startsWith(s.href));
  };

  // Scroll lock + auto-expand active parent ONLY when the menu opens/closes
  useEffect(() => {
    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Auto-expand the parent menu if we are currently on one of its child pages
      const activeParent = NAV_LINKS.find(link => isParentActive(link));
      if (activeParent) {
        setExpanded(activeParent.label);
      }

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      setExpanded(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileOpen]); // Only run when mobileOpen changes so user can manually toggle freely

  const closeMobileNav = () => {
    setMobileOpen(false);
    setExpanded(null);
  };

  const activeLink = NAV_LINKS.find((l) => l.label === activeDropdown);

  return (
    <>
      <header
        className="fixed left-0 right-0 z-50 flex justify-center"
        style={{
          top: isMobile ? '8px' : '15px',
          paddingTop: isMobile ? '4px' : '20px',
          paddingLeft: isMobile ? '0' : '24px',
          paddingRight: isMobile ? '0' : '24px',
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
              paddingRight: isMobile ? '16px' : '28px',
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
                    onMouseEnter={() =>
                      (link.dropdown || link.services || link.products || link.projects) &&
                      setActiveDropdown(link.label)
                    }
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
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
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
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>

          {/* ── Centralised mega-dropdowns — rendered relative to nav, not the li ── */}
          <AnimatePresence>
            {activeLink?.projects && (
              <CenteredDropdownWrapper key="projects">
                <ProjectsMegaMenu items={cmsNavProjects} />
              </CenteredDropdownWrapper>
            )}
            {activeLink?.products && (
              <CenteredDropdownWrapper key="products">
                <ProductsMegaMenu items={cmsNavProducts} partnerProducts={activeLink.partnerProducts ?? []} />
              </CenteredDropdownWrapper>
            )}
            {activeLink?.services && (
              <CenteredDropdownWrapper key="services">
                <ServicesMegaMenu items={cmsNavServices} />
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
            {/* Scoped CSS to invert scrollbar colors (Blue track, White thumb) */}
            <style>{`
              .polaris-mobile-scroll::-webkit-scrollbar {
                width: 6px;
              }
              .polaris-mobile-scroll::-webkit-scrollbar-track {
                background: #0a0e27; /* Blue background */
              }
              .polaris-mobile-scroll::-webkit-scrollbar-thumb {
                background: #ffffff; /* White scroll bar */
                border-radius: 3px;
              }
              .polaris-mobile-scroll {
                scrollbar-width: thin;
                scrollbar-color: #ffffff #0a0e27; /* Firefox support */
              }
            `}</style>

            {/* Top bar: logo + close */}
            <div className="flex items-center justify-between px-5! py-6!">
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
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Thin divider under header */}
            <div className="h-px bg-white/10 mx-5" />

            {/* Nav items — left-aligned list, each row with bottom border divider */}
            {/* Added custom scrollbar class 'polaris-mobile-scroll' */}
            <div className="polaris-mobile-scroll flex-1 overflow-y-auto flex flex-col px-5! pt-3! pb-24!">
              {NAV_LINKS.map((link) => {
                const hasDropdown = !!(link.products || link.services || link.projects);
                const isExpanded = expanded === link.label;
                const parentActive = isParentActive(link);

                // Build the flat sub-item list for this link (Products / Services / Projects)
                const subItems = link.products
                  ? cmsNavProducts
                  : link.services
                  ? cmsNavServices
                  : link.projects
                  ? cmsNavProjects
                  : [];

                return (
                  <div key={link.label} className="w-full border-b border-white/10">
                    <div className="flex items-center justify-between py-6">
                      <Link
                        to={link.href}
                        onClick={hasDropdown ? undefined : closeMobileNav}
                        className="text-[16px] font-semibold tracking-wide uppercase transition-colors"
                        style={{ 
                          fontFamily: 'Satoshi, Inter, sans-serif',
                          color: isExpanded || parentActive ? '#D7B56D' : '#fff' 
                        }}
                      >
                        {link.label}
                      </Link>

                      {hasDropdown && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpanded(isExpanded ? null : link.label);
                          }}
                          aria-label={`Toggle ${link.label} submenu`}
                          className="p-2 -mr-2 text-white/75 active:text-white"
                          style={{ color: isExpanded || parentActive ? '#D7B56D' : undefined }}
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
                      )}
                    </div>

                    {/* Submenu block — individual borders for each child item */}
                    {hasDropdown && (
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                          >
                            {/* Added custom scrollbar class 'polaris-mobile-scroll' */}
                            <div
                              className="polaris-mobile-scroll mb-6 flex flex-col gap-3"
                              style={{
                                paddingLeft: '16px',
                                maxHeight: '300px',
                                overflowY: 'auto',
                                paddingRight: '8px',
                                marginTop: '4px',
                              }}
                            >
                              {subItems.map((item, i) => {
                                const childActive = item.href && item.href !== '#' && location.pathname.startsWith(item.href);
                                
                                return (
                                  <Link
                                    key={item.title ?? i}
                                    to={item.href || '#'}
                                    onClick={closeMobileNav}
                                    className="text-[14px] leading-snug transition-colors"
                                    style={{ 
                                      fontFamily: 'Satoshi, Inter, sans-serif',
                                      color: childActive ? '#D7B56D' : 'rgba(255,255,255,0.7)',
                                      borderLeft: `2px solid ${childActive ? '#D7B56D' : 'rgba(255,255,255,0.1)'}`,
                                      paddingLeft: '12px',
                                      paddingTop: '8px',
                                      paddingBottom: '8px',
                                    }}
                                  >
                                    {item.title}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA — full-width pill button with arrow, fixed near bottom */}
            <div className="w-full flex justify-center px-5! py-6! bg-[#0a0e27] border-t border-white/10">
              <Link
                to="/contact"
                onClick={closeMobileNav}
                className="flex items-center justify-center gap-2 text-sm font-semibold active:opacity-90 transition-opacity"
                style={{
                  backgroundColor: '#D7B56D',
                  color: '#0a0e27',
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  textDecoration: 'none',
                  width: '100%',
                  height: 52,
                  borderRadius: '999px',
                }}
              >
                Contact Us
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}