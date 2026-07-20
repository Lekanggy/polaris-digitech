import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import starlogo from '../../assets/starlogo.png';
import type { ProjectItem } from '../../services/queries/homeQuery';
import { strapiUrl } from '../../services/queries/homeQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Hardcoded fallback projects — preserved ────────────────────────────────
const fallbackProjects = [
  {
    id: 1,
    bg: '#2196D3',
    logo: 'LagFerry',
    title: 'Geo-enabled ICT Surveillance Centre',
    description: 'Smart surveillance for safer, more efficient water transport in Lagos.',
    btnBg: 'rgba(255,255,255,0.2)',
    btnColor: '#fff',
    btnBorder: '1px solid rgba(255,255,255,0.4)',
    textColor: '#fff',
    image: project2,
  },
  {
    id: 2,
    bg: '#1B2A6B',
    logo: 'AXA',
    title: 'Risk Geo-Platform',
    description: 'Enabling AXA Mansard to evaluate assets and optimize insurance coverage efficiently.',
    btnBg: 'rgba(255,255,255,0.15)',
    btnColor: '#fff',
    btnBorder: '1px solid rgba(255,255,255,0.3)',
    textColor: '#fff',
    image: project1,
  },
  {
    id: 3,
    bg: '#FFCC00',
    logo: 'MTN',
    title: 'MTN Coverage Locator',
    description: 'Providing MTN Nigeria customers with accurate network coverage and store locations for improved service.',
    btnBg: 'rgba(0,0,0,0.15)',
    btnColor: '#1a1a1a',
    btnBorder: '1px solid rgba(0,0,0,0.2)',
    textColor: '#1a1a1a',
    image: project3,
  },
];

// Card colour & style defaults cycled for CMS items
const cardStyles = [
  { bg: '#2196D3', btnBg: 'rgba(255,255,255,0.2)', btnColor: '#fff', textColor: '#fff', image: project2 },
  { bg: '#1B2A6B', btnBg: 'rgba(255,255,255,0.15)', btnColor: '#fff', textColor: '#fff', image: project1 },
  { bg: '#FFCC00', btnBg: 'rgba(0,0,0,0.15)', btnColor: '#1a1a1a', textColor: '#1a1a1a', image: project3 },
];

interface ProjectsProps {
  data?: ProjectItem[];
}

// ── Shared card shape ──────────────────────────────────────────────────────
interface ProjectCardData {
  id: number;
  bg: string;
  logo: string;
  title: string;
  description: string;
  btnBg: string;
  btnColor: string;
  btnBorder: string;
  textColor: string;
  image: string;
}

// ── Logo badge ─────────────────────────────────────────────────────────────
function LogoBadge({ name, dark }: { name: string; dark?: boolean }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6px 12px',
      borderRadius: '8px',
      background: dark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)',
      marginBottom: '16px',
    }}>
      <span style={{
        fontFamily: satoshi,
        fontWeight: 700,
        fontSize: '13px',
        color: dark ? '#1a1a1a' : '#fff',
        letterSpacing: '0.05em',
      }}>
        {name}
      </span>
    </div>
  );
}

// ── Project card ───────────────────────────────────────────────────────────
function ProjectCard({ project, delay, isVisible, height = '408px', showBorder = false }: {
  project: ProjectCardData;
  delay: number;
  isVisible: boolean;
  height?: string;
  showBorder?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDark = project?.bg === '#FFCC00';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: project?.bg,
        borderRadius: '24px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
        height,
        cursor: 'pointer',
        border: showBorder ? '1px solid rgba(0,0,0,0.12)' : 'none',
      }}
    >
      {/* Left content */}
      <div style={{
        flex: isMobile ? '0 0 65%' : '0 0 55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 2,
        position: 'relative',
      }}>
        <div>
          <LogoBadge name={project?.logo} dark={isDark} />
          <h3 style={{
            fontFamily: satoshi,
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '130%',
            color: project.textColor,
            marginBottom: '10px',
          }}>
            {project?.title}
          </h3>
          <p style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            letterSpacing: '0',
            color: project.textColor,
            opacity: 0.85,
            marginBottom: '20px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {project?.description}
          </p>
        </div>

        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: project?.btnBg,
            border: 'none',
            color: project?.btnColor,
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: '13px',
            width: '137px',
            height: '34px',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '24px',
            paddingRight: '24px',
            borderRadius: '10px',
            textDecoration: 'none',
            alignSelf: 'flex-start',
          }}
        >
          Read More
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6.5h9M7 2l4.5 4.5L7 11" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Right image — slides in from right on hover */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '15%',
          bottom: '-20px',
          width: '48%',
          transform: hovered || isMobile ? 'translateX(0) rotate(0deg)' : 'translateX(40%) rotate(0deg)',
          transition: 'transform 0.4s ease',
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '24px',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          borderLeft: '16px solid #000000',
          borderTop: '16px solid #000000',
          borderRight: 'none',
          borderBottom: 'none',
          boxSizing: 'border-box',
        }}>
          <img
            src={project?.image}
            alt={project?.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left center',
              transform: 'rotate(0deg)',
            }}
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function Projects({ data }: ProjectsProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Map CMS projectItems to the card shape, cycling style defaults
  const projects =
    data && data.length > 0
      ? data.map((item, idx) => {
          const style = cardStyles[idx % cardStyles.length];
          const cmsImage = strapiUrl(item.image?.url);
          return {
            id: idx + 1,
            bg: style.bg,
            logo: item.logo ?? '',
            title: item.title ?? '',
            description: item.description ?? '',
            btnBg: style.btnBg,
            btnColor: style.btnColor,
            btnBorder: '1px solid rgba(255,255,255,0.3)',
            textColor: style.textColor,
            image: cmsImage ?? style.image,
          };
        })
      : fallbackProjects;

  // Always ensure exactly 3 slots, filling missing positions with fallbacks
  const p0 = projects[0] ?? fallbackProjects[0];
  const p1 = projects[1] ?? fallbackProjects[1];
  const p2 = projects[2] ?? fallbackProjects[2];

  return (
    <section id="projects" ref={ref} style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: 'clamp(24px, 5vw, 80px)',
        paddingRight: 'clamp(24px, 5vw, 80px)',
      }}>

        {/* ── Header ── */}
        <div className="projects-header-grid" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '656px 656px', gap: '20px', justifyContent: 'center', alignItems: 'start', paddingBottom: '40px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              color: '#010527',
            }}
          >
            Explore Our Major Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: '0',
              color: '#6b7280',
              paddingTop: '8px',
            }}
          >
            Browse through how organizations use our geospatial solutions to solve real challenges, improve efficiency, and make smarter decisions.
          </motion.p>
        </div>

        {/* ── Row 1: two equal cards ── */}
        <div className="projects-row1" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '656px 656px', gap: '20px', justifyContent: 'center' }}>
          <ProjectCard project={p0} delay={0.1} isVisible={isVisible} height={isMobile ? '320px' : '408px'} showBorder />
          <ProjectCard project={p1} delay={0.2} isVisible={isVisible} height={isMobile ? '320px' : '408px'} showBorder />
        </div>

        {/* ── Row 2: third card + See All ── */}
        <div className="projects-row2" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '791px 521px', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          <ProjectCard project={p2} delay={0.3} isVisible={isVisible} height={isMobile ? '320px' : '408px'} />

          {/* See All Projects card */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="projects-see-all"
            style={{
              backgroundColor: '#C8CCDF',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              position: 'relative',
              overflow: 'hidden',
              width: isMobile ? '100%' : '521px',
              height: isMobile ? '200px' : '408px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <p style={{
                fontFamily: satoshi,
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '130%',
                color: '#010527',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                See All Projects
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#010527" strokeWidth="2">
                  <path d="M4 11h14M12 5l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
            </div>

            <img
              src={starlogo}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-10px',
                width: '180px',
                opacity: 0.35,
                pointerEvents: 'none',
              }}
              loading="lazy"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
