/**
 * BlogHero — Section 1
 * Contained hero image (not full-width) with rounded corners.
 * Dark gradient overlay with title, description, author + date.
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import type { BlogArticle } from '../blogData';

const satoshi = 'Satoshi, Inter, sans-serif';

interface BlogHeroProps {
  article: BlogArticle;
}

export default function BlogHero({ article }: BlogHeroProps) {
  const isMobile  = useMediaQuery('(max-width: 768px)');
  const isTablet  = useMediaQuery('(max-width: 1024px)');

  // Card height: shorter on phones, scales up through tablet → desktop
  const cardHeight = isMobile ? '300px' : isTablet ? '420px' : 'clamp(600px, 70vh, 860px)';
  // Container width: full on phone (with small side margin), 80% on desktop
  const containerWidth = isMobile ? '94%' : '80%';

  return (
    <section
      style={{
        background: '#FFFFFF',
        paddingTop: isMobile ? '72px' : '120px',
        paddingBottom: isMobile ? '32px' : '80px',
      }}
    >
      <div
        style={{
          width: containerWidth,
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        {/* ── Hero card ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: cardHeight,
            borderRadius: isMobile ? '20px' : '40px',
            overflow: 'hidden',
            background: article.image
              ? `url(${article.image}) center/cover no-repeat`
              : '#1a1f3c',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          {/* Dark gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              padding: isMobile ? '20px 20px 24px' : '64px 96px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: satoshi,
                fontWeight: 700,
                fontSize: isMobile ? 'clamp(16px, 4.5vw, 22px)' : 'clamp(24px, 3vw, 40px)',
                lineHeight: '130%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: isMobile ? '8px' : '14px',
                maxWidth: isMobile ? '100%' : '620px',
              }}
            >
              {article.title}
            </motion.h1>

            {/* Hide description on very small screens to avoid overflow */}
            {!isMobile && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                style={{
                  fontFamily: satoshi,
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: 'rgba(255,255,255,0.82)',
                  maxWidth: '560px',
                  marginBottom: '20px',
                }}
              >
                {article.description}
              </motion.p>
            )}

            {/* Author row + Read More */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                flexWrap: 'wrap',
                marginTop: isMobile ? '8px' : '0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '6px' : '10px', minWidth: 0 }}>
                {/* Avatar */}
                <div
                  style={{
                    width: isMobile ? '24px' : '30px',
                    height: isMobile ? '24px' : '30px',
                    borderRadius: '50%',
                    background: article.authorAvatar
                      ? `url(${article.authorAvatar}) center/cover`
                      : '#D7B56D',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {!article.authorAvatar && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>

                <span style={{ fontFamily: satoshi, fontWeight: 500, fontSize: isMobile ? '11px' : '13px', color: '#FFFFFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: isMobile ? '120px' : 'unset' }}>
                  {article.author}
                </span>

                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: isMobile ? '11px' : '13px', flexShrink: 0 }}>|</span>

                <span style={{ fontFamily: satoshi, fontWeight: 400, fontSize: isMobile ? '11px' : '13px', color: '#D7B56D', flexShrink: 0 }}>
                  {article.date}
                </span>
              </div>

              {/* Read More link */}
              <Link
                to={`/blog/${article.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontFamily: satoshi,
                  fontWeight: 600,
                  fontSize: isMobile ? '12px' : '13px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  padding: isMobile ? '6px 12px' : '8px 16px',
                  backdropFilter: 'blur(4px)',
                  transition: 'background 200ms, border-color 200ms',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(215,181,109,0.25)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#D7B56D';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.3)';
                }}
              >
                Read More
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4,2 10,7 4,12" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
