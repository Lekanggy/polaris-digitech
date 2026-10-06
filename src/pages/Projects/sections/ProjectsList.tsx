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
import { getLinkPath } from '../../../utils/getLink';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Ordered project style config ───────────────────────────────────────────
// Order and colours are fixed regardless of CMS sort order.
// `key` matches a substring of the project title (case-insensitive).
const PROJECT_ORDER: { key: string; bg: string; textColor: string; logo: string; image: string; href: string }[] = [
  { key: 'lag ferry',      bg: '#0093DD', textColor: '#FFFFFF', logo: image23Logo,  image: project2,  href: '/projects/lag-ferry' },
  { key: 'axa',            bg: '#00008E', textColor: '#FFFFFF', logo: partner7Logo, image: project1,  href: '/projects/risk-geo-platform' },
  { key: 'mtn',            bg: '#FFC403', textColor: '#000000', logo: mtnLogo,      image: project3,  href: '/projects/mtn-coverage-locator' },
  { key: 'olis',           bg: '#24613D', textColor: '#FFFFFF', logo: partner6Logo, image: project2,  href: '/projects/land-parcel' },
  { key: 'ekedc',          bg: '#2B295B', textColor: '#FFFFFF', logo: image27Logo,  image: project1,  href: '/projects/asset-mapping' },
  { key: 'google street',  bg: '#F8CE08', textColor: '#000000', logo: googLogo,     image: assetMap,  href: '/projects/google-street-view' },
  { key: 'thematic',       bg: '#033705', textColor: '#FFFFFF', logo: pol2Logo,     image: tMap,      href: '/projects/thematic-mapping' },
  { key: 'alma beach',     bg: '#B0E4FE', textColor: '#000000', logo: almLogo,      image: alBeach,   href: '/projects/alma-beach' },
];

// ── Hardcoded fallback projects (matches PROJECT_ORDER exactly) ────────────
const FALLBACK_PROJECTS = [
  { logo: image23Logo,  title: 'Geo-enabled ICT Surveillance Centre (Lag Ferry)',  description: 'Deployment of Geo-enabled ICT Surveillance centre for Boats, Ships in Lagos state.',                      bg: '#0093DD', textColor: '#FFFFFF', image: project2, href: '/projects/lag-ferry' },
  { logo: partner7Logo, title: 'AXA Risk Geo-Platform',                            description: 'Polaris Digitech Limited has developed a platform that helps AXA Mansard assess insured assets.',           bg: '#00008E', textColor: '#FFFFFF', image: project1, href: '/projects/risk-geo-platform' },
  { logo: mtnLogo,      title: 'MTN Coverage Locator',                             description: 'Providing MTNN staff and users with a web application to check signal strength and report poor coverage.',   bg: '#FFC403', textColor: '#000000', image: project3, href: '/projects/mtn-coverage-locator' },
  { logo: partner6Logo, title: 'OLIS – Osun Land Information System',              description: 'An application to effectively manage the day-to-day activities of the Osun state ministry of lands.',        bg: '#24613D', textColor: '#FFFFFF', image: project2, href: '/projects/land-parcel' },
  { logo: image27Logo,  title: 'EKEDC Asset Mapping and Customer Enumeration',     description: 'To ascertain the number of customers per asset of Eko electric in readiness for their SCADA project.',     bg: '#2B295B', textColor: '#FFFFFF', image: project1, href: '/projects/asset-mapping' },
  { logo: googLogo,     title: 'Google Street View',                               description: 'Collect street names, environmental features, and building details to aid remote view of locations.',        bg: '#F8CE08', textColor: '#000000', image: assetMap, href: '/projects/google-street-view' },
  { logo: pol2Logo,     title: 'Thematic Mapping of restricted area for mining.',  description: 'Production Of Thematic Mapping of Areas Restricted From Mining Activities in Nigeria.',                    bg: '#033705', textColor: '#FFFFFF', image: tMap,     href: '/projects/thematic-mapping' },
  { logo: almLogo,      title: 'Alma Beach',                                       description: 'Evaluate survey plan and set out the proposed coastal road right of way.',                                   bg: '#B0E4FE', textColor: '#000000', image: alBeach,  href: '/projects/alma-beach' },
];


interface DisplayProject { logo: string; title: string; description: string; bg: string; textColor: string; image: string; href: string; }

// ── Arrow helper ──────────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,2 10,7 4,12" />
    </svg>
  );
}


// ── Single card ───────────────────────────────────────────────────────────
function ProjectCard({ logo, title, description, bg, textColor, image, href, index, isVisible, isMobile }: DisplayProject & { index: number; isVisible: boolean; isMobile: boolean }) {
  const isLight = textColor === '#000000' || textColor === '#1a1a1a';
  const descColor  = isLight ? 'rgba(0,0,0,0.75)'   : 'rgba(255,255,255,0.85)';
  const btnBg      = isLight ? 'rgba(0,0,0,0.12)'   : 'rgba(255,255,255,0.18)';
  const btnColor   = textColor;
  const linkPath = getLinkPath(href);

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
        <h3 style={{ fontFamily: satoshi, fontWeight: 700, fontSize: isMobile ? 'clamp(18px,5vw,24px)' : 'clamp(20px,2.5vw,28px)', lineHeight: '130%', color: textColor, margin: 0, maxWidth: isMobile ? '100%' : '400px' }}>{title}</h3>        <p style={{ fontFamily: satoshi, fontWeight: 400, fontSize: isMobile ? '14px' : '15px', lineHeight: '160%', color: descColor, margin: 0, maxWidth: isMobile ? '100%' : '380px' }}>{description}</p>
        <Link to={linkPath} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: isMobile ? '8px 20px' : '10px 24px', borderRadius: '10px', background: btnBg, color: btnColor, fontFamily: satoshi, fontWeight: 600, fontSize: '14px', textDecoration: 'none', width: 'fit-content', transition: 'opacity 200ms', marginTop: '8px' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >Read More <ChevronRight /></Link>
      </div>

      {/* Desktop image - Increased width & thicker black bezel */}
      {!isMobile && (
        <div style={{ width: 'clamp(380px, 48vw, 640px)', position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'flex-end', paddingRight: '40px', marginBottom: '-40px' }}>
          <div style={{ width: '100%', height: '85%', borderRadius: '20px 20px 0 0', overflow: 'hidden', border: '14px solid #000', borderBottom: 'none', boxSizing: 'border-box' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
      )}

      {/* Mobile image - Fills the border box perfectly */}
      {isMobile && (
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          marginTop: '16px', 
          display: 'flex', 
          justifyContent: 'center',
          paddingLeft: '20px',  
          paddingRight: '20px', 
          boxSizing: 'border-box',
        }}>
          <div style={{
            width: '100%',
            height: '240px', // Fixed height ensures the box is large enough for the image to fill
            overflow: 'hidden',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
            borderLeft: '16px solid #000000',
            borderTop: '16px solid #000000',
            borderRight: '16px solid #000000',
            borderBottom: 'none',
            boxSizing: 'border-box',
            position: 'relative',
            marginBottom: '-24px', // Bleeds perfectly into the card's bottom edge
          }}>
            <img 
              src={image} 
              alt={title} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'center top', 
                display: 'block' 
              }} 
            />
          </div>
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

  // Build display list: sort CMS entries by PROJECT_ORDER, apply fixed colours
  const displayProjects: DisplayProject[] = (() => {
    if (!cmsProjects || cmsProjects.length === 0) return FALLBACK_PROJECTS;

    // Sort CMS entries to match PROJECT_ORDER
    const sorted: DisplayProject[] = [];
    PROJECT_ORDER.forEach((slot, slotIdx) => {
      const fb = FALLBACK_PROJECTS[slotIdx];
      // Try to find a matching CMS entry for this slot
      const match = cmsProjects.find(entry => {
        const t = (entry.project_item?.title ?? '').toLowerCase();
        return t.includes(slot.key);
      });
      if (match) {
        const p = match.project_item;
        sorted.push({
          logo:        p?.cardLogo?.url ? (strapiUrl(p.cardLogo.url) ?? slot.logo) : slot.logo,
          title:       p?.title?.trim() || fb.title,
          description: p?.description?.trim() || fb.description,
          bg:          slot.bg,
          textColor:   slot.textColor,
          image:       p?.image?.url ? (strapiUrl(p.image.url) ?? slot.image) : slot.image,
          href:        p?.href?.trim() || slot.href,
        });
      } else {
        // No CMS match — use fallback for this slot
        sorted.push(fb);
      }
    });
    return sorted;
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