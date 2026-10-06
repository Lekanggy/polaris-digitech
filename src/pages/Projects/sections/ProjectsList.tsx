import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useProjectsQuery } from '../../../hooks/useProjectsQuery';
import { strapiUrl } from '../../../services/queries/projectQuery';
import { getLinkPath } from '../../../utils/getLink';

// ── Fallback logos (shown when CMS cardLogo is absent) ─────────────────────
import image23Logo  from '../../../assets/image 23.png';
import partner7Logo from '../../../assets/partner7.png';
import mtnLogo      from '../../../assets/mtn.png';
import partner6Logo from '../../../assets/partner6.png';
import image27Logo  from '../../../assets/image 27.png';
import googLogo     from '../../../assets/goog.png';
import pol2Logo     from '../../../assets/pol2.png';
import almLogo      from '../../../assets/alm.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Slot config — keyed by href (stable CMS identifier) ───────────────────
// bg and textColor are always enforced from here regardless of CMS.
// logo is a fallback only if CMS cardLogo is absent.
// Order in this array = render order.
const SLOTS = [
  { href: '/projects/lag-ferry',              bg: '#0093DD', textColor: '#FFFFFF', logo: image23Logo  },
  { href: '/projects/risk-geo-platform',      bg: '#00008E', textColor: '#FFFFFF', logo: partner7Logo },
  { href: '/projects/mtn-coverage-locator',   bg: '#FFC403', textColor: '#000000', logo: mtnLogo      },
  { href: '/projects/land-parcel',            bg: '#24613D', textColor: '#FFFFFF', logo: partner6Logo },
  { href: '/projects/asset-mapping',          bg: '#2B295B', textColor: '#FFFFFF', logo: image27Logo  },
  { href: '/projects/google-street-view',     bg: '#F8CE08', textColor: '#000000', logo: googLogo     },
  { href: '/projects/thematic-mapping',       bg: '#033705', textColor: '#FFFFFF', logo: pol2Logo     },
  { href: '/projects/alma-beach',             bg: '#B0E4FE', textColor: '#000000', logo: almLogo      },
] as const;

interface DisplayProject {
  logo: string;
  title: string;
  description: string;
  bg: string;
  textColor: string;
  image: string;
  href: string;
}

// ── Arrow ─────────────────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,2 10,7 4,12" />
    </svg>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────
function ProjectCard({ logo, title, description, bg, textColor, image, href, index, isVisible, isMobile }: DisplayProject & { index: number; isVisible: boolean; isMobile: boolean }) {
  const isLight   = textColor === '#000000';
  const descColor = isLight ? 'rgba(0,0,0,0.75)'  : 'rgba(255,255,255,0.85)';
  const btnBg     = isLight ? 'rgba(0,0,0,0.12)'  : 'rgba(255,255,255,0.18)';
  const linkPath  = getLinkPath(href);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.1 }}
      style={{ background: bg, borderRadius: '24px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden', minHeight: isMobile ? 'auto' : '450px', position: 'relative' }}
    >
      {/* Content */}
      <div style={{ padding: isMobile ? '24px 20px' : '40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '16px', zIndex: 1, flex: isMobile ? 'none' : 1 }}>
        <img src={logo} alt={title} style={{ height: isMobile ? '32px' : '40px', width: 'auto', objectFit: 'contain', objectPosition: 'left', maxWidth: '120px' }} />
        <h3 style={{ fontFamily: satoshi, fontWeight: 700, fontSize: isMobile ? 'clamp(18px,5vw,24px)' : 'clamp(20px,2.5vw,28px)', lineHeight: '130%', color: textColor, margin: 0, maxWidth: isMobile ? '100%' : '400px' }}>{title}</h3>
        <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: isMobile ? '14px' : '15px', lineHeight: '160%', color: descColor, margin: 0, maxWidth: isMobile ? '100%' : '380px' }}>{description}</p>
        <Link
          to={linkPath}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: isMobile ? '8px 20px' : '10px 24px', borderRadius: '10px', background: btnBg, color: textColor, fontFamily: satoshi, fontWeight: 600, fontSize: '14px', textDecoration: 'none', width: 'fit-content', transition: 'opacity 200ms', marginTop: '8px' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >Read More <ChevronRight /></Link>
      </div>

      {/* Desktop image */}
      {!isMobile && (
        <div style={{ width: 'clamp(380px, 48vw, 640px)', position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'flex-end', paddingRight: '40px', marginBottom: '-40px' }}>
          <div style={{ width: '100%', height: '85%', borderRadius: '20px 20px 0 0', overflow: 'hidden', border: '14px solid #000', borderBottom: 'none', boxSizing: 'border-box' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
      )}

      {/* Mobile image */}
      {isMobile && (
        <div style={{ position: 'relative', width: '100%', marginTop: '16px', display: 'flex', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
          <div style={{ width: '100%', height: '240px', overflow: 'hidden', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderLeft: '16px solid #000000', borderTop: '16px solid #000000', borderRight: '16px solid #000000', borderBottom: 'none', boxSizing: 'border-box', position: 'relative', marginBottom: '-24px' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────
export default function ProjectsList() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { projects: cmsProjects } = useProjectsQuery();

  // Build display list in SLOTS order.
  // Each slot is matched to its CMS entry by href — the only stable unique key.
  // project_item.image.url is used directly with no fallback override.
  // bg and textColor always come from SLOTS, never from CMS.
  const displayProjects: DisplayProject[] = SLOTS.map(slot => {
    const entry = cmsProjects.find(e => e.project_item?.href === slot.href);
    const p = entry?.project_item;

    return {
      href:        slot.href,
      bg:          slot.bg,
      textColor:   slot.textColor,
      logo:        p?.cardLogo?.url ? strapiUrl(p.cardLogo.url)! : slot.logo,
      title:       p?.title        ?? '',
      description: p?.description  ?? '',
      image:       p?.image?.url   ? strapiUrl(p.image.url)!    : '',
    };
  }).filter(p => p.title); // drop slots with no CMS data yet

  return (
    <section ref={ref} style={{ background: '#fff', paddingTop: '140px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '40px', alignItems: 'start', marginBottom: isMobile ? '40px' : '56px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ fontFamily: satoshi, fontWeight: 700, fontSize: 'clamp(32px,5vw,52px)', lineHeight: '115%', letterSpacing: '-0.02em', color: '#010527', margin: 0 }}
          >Explore Our Major Projects</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '16px', lineHeight: '165%', color: '#46485F', margin: 0, paddingTop: '8px' }}
          >Browse through our flagship projects that showcase our geospatial expertise, delivering real-world solutions for government agencies, telecoms, and private enterprises across Nigeria.</motion.p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {displayProjects.map((project, i) => (
            <ProjectCard key={project.title + i} {...project} index={i} isVisible={isVisible} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}