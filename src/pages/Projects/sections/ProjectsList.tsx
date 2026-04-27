import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

// ── Logo imports ───────────────────────────────────────────────────────────
import image23Logo  from '../../../assets/image 23.png';
import partner7Logo from '../../../assets/partner7.png';
import mtnLogo      from '../../../assets/mtn.png';
import image27Logo  from '../../../assets/image 27.png';
import partner6Logo from '../../../assets/partner6.png';
import almLogo      from '../../../assets/alm.png';

// ── Project card image imports ─────────────────────────────────────────────
import project1 from '../../../assets/project1.png';
import project2 from '../../../assets/project2.png';
import project3 from '../../../assets/project3.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Project data ───────────────────────────────────────────────────────────
const PROJECTS = [
  {
    logo: image23Logo,
    title: 'Geo-enabled ICT Surveillance Centre',
    description: 'Deployment of Geo-enabled ICT Surveillance centre for Boats, Ships in Lagos state. Effective maritime management for Lagos.',
    bg: '#4A90D9',
    image: project1,
    href: '/projects/lag-ferry',
  },
  {
    logo: partner7Logo,
    title: 'Risk Geo-Platform',
    description: 'Polaris Digitech Limited has developed a platform that helps AXA Mansard assess insured assets to match customers with the right products.',
    bg: '#00008E',
    image: project2,
    href: '/projects/risk-geo-platform',
  },
  {
    logo: mtnLogo,
    title: 'MTN Coverage Locator',
    description: 'Providing MTNN staff and users with a web application to check signal strength, report poor coverage, and find the best location for improved service.',
    bg: '#F5C518',
    image: project3,
    href: '/projects/mtn-coverage-locator',
  },
  {
    logo: image27Logo,
    title: 'Risk Geo-Platform',
    description: 'Polaris Digitech Limited has developed a platform that helps AXA Mansard assess insured assets to match customers with the right products.',
    bg: '#2B295B',
    image: project1,
    href: '#',
  },
  {
    logo: partner6Logo,
    title: 'OLIS – Osun Land Information System',
    description: 'An application to effectively manage the day-to-day activities of the Osun state ministry of lands, housing and urban development.',
    bg: '#2E7D32',
    image: project2,
    href: '#',
  },
  {
    logo: almLogo,
    title: 'Alma Beach',
    description: 'Providing MTNN staff and users with a web application to evaluate survey plan and set out the proposed coastal road right of way for improved service.',
    bg: '#B0E4FE',
    image: project3,
    href: '#',
  },
];

// ── Chevron arrow ──────────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,2 10,7 4,12" />
    </svg>
  );
}

// ── Single project card ────────────────────────────────────────────────────
interface ProjectCardProps {
  logo: string;
  title: string;
  description: string;
  bg: string;
  image: string;
  href: string;
  index: number;
  isVisible: boolean;
}

function ProjectCard({ logo, title, description, bg, image, href, index, isVisible }: ProjectCardProps) {
  // Determine text color based on bg brightness
  const isDark = ['#00008E', '#2B295B', '#2E7D32'].includes(bg);
  const textColor = isDark || bg === '#4A90D9' ? '#FFFFFF' : '#010527';
  const descColor = isDark || bg === '#4A90D9' ? 'rgba(255,255,255,0.85)' : 'rgba(1,5,39,0.75)';
  const btnBg = isDark || bg === '#4A90D9' ? 'rgba(255,255,255,0.15)' : 'rgba(1,5,39,0.12)';
  const btnColor = isDark || bg === '#4A90D9' ? '#FFFFFF' : '#010527';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.1 }}
      style={{
        background: bg,
        borderRadius: '24px',
        border: '1px solid rgba(0,0,0,0.08)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        overflow: 'hidden',
        minHeight: '450px',
        position: 'relative',
      }}
    >
      {/* Left content */}
      <div
        style={{
          padding: '40px 40px 40px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '16px',
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt={title}
          style={{
            height: '40px',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'left',
            maxWidth: '120px',
          }}
        />

        {/* Title */}
        <h3
          style={{
            fontFamily: satoshi,
            fontWeight: 700,
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            lineHeight: '130%',
            color: textColor,
            margin: 0,
            maxWidth: '400px',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '160%',
            color: descColor,
            margin: 0,
            maxWidth: '380px',
          }}
        >
          {description}
        </p>

        {/* Read More button */}
        <Link
          to={href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '10px 24px',
            borderRadius: '10px',
            background: btnBg,
            color: btnColor,
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: '14px',
            textDecoration: 'none',
            width: 'fit-content',
            transition: 'opacity 200ms',
            marginTop: '8px',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Read More
          <ChevronRight />
        </Link>
      </div>

      {/* Right — large image buried into card bottom */}
      <div
        style={{
          width: 'clamp(280px, 38vw, 520px)',
          position: 'relative',
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'flex-end',
          paddingRight: '80px',
          marginBottom: '-80px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '90%',
            borderRadius: '16px 16px 0 0',
            overflow: 'hidden',
            border: '10px solid rgba(0,0,0,0.88)',
            borderBottom: 'none',
            boxSizing: 'border-box', 
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function ProjectsList() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        paddingTop: '140px',
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
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '56px',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: '115%',
              letterSpacing: '-0.02em',
              color: '#010527',
              margin: 0,
            }}
          >
            Explore Our Major Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '165%',
              color: '#46485F',
              margin: 0,
              paddingTop: '8px',
            }}
          >
            Browse through our flagship projects that showcase our geospatial expertise, delivering real-world solutions for government agencies, telecoms, and private enterprises across Nigeria.
          </motion.p>
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title + i}
              logo={project.logo}
              title={project.title}
              description={project.description}
              bg={project.bg}
              image={project.image}
              href={project.href}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
