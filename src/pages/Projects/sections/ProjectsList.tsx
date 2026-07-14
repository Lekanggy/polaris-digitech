import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useProjectsQuery } from '../../../hooks/useProjectsQuery';
import { strapiUrl } from '../../../services/queries/projectQuery';

// ── Fallback logo + card image assets ─────────────────────────────────────
import image23Logo  from '../../../assets/image 23.png';
import partner7Logo from '../../../assets/partner7.png';
import mtnLogo      from '../../../assets/mtn.png';
import image27Logo  from '../../../assets/image 27.png';
import partner6Logo from '../../../assets/partner6.png';
import almLogo      from '../../../assets/alm.png';
import googLogo     from '../../../assets/goog.png';
import pol2Logo     from '../../../assets/pol2.png';
import project1     from '../../../assets/project1.png';
import project2     from '../../../assets/project2.png';
import project3     from '../../../assets/project3.png';
import alBeach      from '../../../assets/al-beach.png';
import assetMap     from '../../../assets/asset-map.png';
import tMap         from '../../../assets/t-map.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Hardcoded fallback projects ────────────────────────────────────────────
const FALLBACK_PROJECTS = [
  { logo: image23Logo,  title: 'Geo-enabled ICT Surveillance Centre', description: 'Deployment of Geo-enabled ICT Surveillance centre for Boats, Ships in Lagos state.', bg: '#4A90D9', image: project1, href: '/projects/lag-ferry' },
  { logo: partner7Logo, title: 'Risk Geo-Platform',                   description: 'Polaris Digitech Limited has developed a platform that helps AXA Mansard assess insured assets.', bg: '#00008E', image: project2, href: '/projects/risk-geo-platform' },
  { logo: mtnLogo,      title: 'MTN Coverage Locator',                description: 'Providing MTNN staff and users with a web application to check signal strength, report poor coverage.', bg: '#F5C518', image: project3, href: '/projects/mtn-coverage-locator' },
  { logo: image27Logo,  title: 'Asset Mapping and Customer Enumeration', description: 'To ascertain the number of customers per asset of Eko electric in readiness for their SCADA project.', bg: '#2B295B', image: project1, href: '/projects/asset-mapping' },
  { logo: partner6Logo, title: 'OLIS – Osun Land Information System', description: 'An application to effectively manage the day-to-day activities of the Osun state ministry of lands.', bg: '#2E7D32', image: project2, href: '/projects/land-parcel' },
  { logo: almLogo,      title: 'Alma Beach',                          description: 'Evaluate survey plan and set out the proposed coastal road right of way.', bg: '#B0E4FE', image: alBeach, href: '/projects/alma-beach' },
  { logo: googLogo,     title: 'Google Street View',                  description: 'Collect street names, environmental features, and building details to aid remote view of locations.', bg: '#4A90D9', image: assetMap, href: '/projects/googl-street-view' },
  { logo: pol2Logo,     title: 'Thematic Mapping of restricted area for mining.', description: 'Production Of Thematic Mapping of Areas Restricted From Mining Activities in Nigeria.', bg: '#2B295B', image: tMap, href: '/projects/thematic-mapping' },
];

const FALLBACK_LOGOS   = [image23Logo, partner7Logo, mtnLogo, image27Logo, partner6Logo, almLogo, googLogo, pol2Logo];
const FALLBACK_IMAGES  = [project1, project2, project3, project1, project2, alBeach, assetMap, tMap];
const FALLBACK_BGS     = ['#4A90D9','#00008E','#F5C518','#2B295B','#2E7D32','#B0E4FE','#4A90D9','#2B295B'];

interface DisplayProject { logo: string; title: string; description: string; bg: string; image: string; href: string; }

// ── Arrow helper ──────────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,2 10,7 4,12" />
    </svg>
  );
}

// ── Single card ───────────────────────────────────────────────────────────
function ProjectCard({ logo, title, description, bg, image, href, index, isVisible, isMobile }: DisplayProject & { index: number; isVisible: boolean; isMobile: boolean }) {
  const isDark = ['#00008E','#2B295B','#2E7D32','#4A90D9'].includes(bg);
  const textColor = isDark ? '#FFFFFF' : '#010527';
  const descColor = isDark ? 'rgba(255,255,255,0.85)' : 'rgba(1,5,39,0.75)';
  const btnBg     = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(1,5,39,0.12)';
  const btnColor  = isDark ? '#FFFFFF' : '#010527';

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
        <Link to={href} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: isMobile ? '8px 20px' : '10px 24px', borderRadius: '10px', background: btnBg, color: btnColor, fontFamily: satoshi, fontWeight: 600, fontSize: '14px', textDecoration: 'none', width: 'fit-content', transition: 'opacity 200ms', marginTop: '8px' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >Read More <ChevronRight /></Link>
      </div>

      {/* Desktop image */}
      {!isMobile && (
        <div style={{ width: 'clamp(280px,38vw,520px)', position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'flex-end', paddingRight: '80px', marginBottom: '-80px' }}>
          <div style={{ width: '100%', height: '90%', borderRadius: '16px 16px 0 0', overflow: 'hidden', border: '10px solid rgba(0,0,0,0.88)', borderBottom: 'none', boxSizing: 'border-box' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
      )}

      {/* Mobile image */}
      {isMobile && (
        <div style={{ width: '100%', height: '220px', position: 'relative' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.35))' }} />
        </div>
      )}
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────
export default function ProjectsList() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { projects: cmsProjects } = useProjectsQuery();

  // Build display list from CMS, falling back per slot
  const displayProjects: DisplayProject[] = (() => {
    if (!cmsProjects || cmsProjects.length === 0) return FALLBACK_PROJECTS;
    return cmsProjects.map((entry, i) => {
      const p  = entry.project_item;
      const fb = FALLBACK_PROJECTS[i];
      return {
        logo:        p?.cardLogo?.url ? (strapiUrl(p.cardLogo.url) ?? FALLBACK_LOGOS[i]) : FALLBACK_LOGOS[i],
        title:       p?.title       ?? fb?.title       ?? '',
        description: p?.description ?? fb?.description ?? '',
        bg:          FALLBACK_BGS[i % FALLBACK_BGS.length],
        image:       p?.image?.url ? (strapiUrl(p.image.url) ?? FALLBACK_IMAGES[i]) : FALLBACK_IMAGES[i],
        href:        p?.href        ?? fb?.href        ?? '#',
      };
    });
  })();

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
