/**
 * BlogHero — Section 1
 * Contained hero image (not full-width) with rounded corners,
 * horizontal padding matching the rest of the page.
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
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    /* Outer section — white bg with top padding to clear the navbar */
    <section
      style={{
        background: '#FFFFFF',
        paddingTop: isMobile ? '80px' : '120px',
        paddingBottom: isMobile ? '48px' : '80px',
      }}
    >
      <div
        style={{
          width: isMobile ? '92%' : '80%',
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        {/* ── Contained image card with rounded corners ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: isMobile ? '380px' : 'clamp(600px, 70vh, 860px)',
            borderRadius: '40px',
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
                'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              paddingTop: isMobile ? '32px' : '64px',
              paddingBottom: isMobile ? '32px' : '64px',
              paddingLeft: isMobile ? '24px' : '96px',
              paddingRight: isMobile ? '24px' : '96px',
              width: '100%',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: satoshi,
                fontWeight: 700,
                fontSize: 'clamp(22px, 3vw, 40px)',
                lineHeight: '120%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: '14px',
                maxWidth: '620px',
              }}
            >
              {article.title}
            </motion.h1>

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

            {/* Author row + Read More */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Avatar */}
                <div
                  style={{
                    width: '30px',
                    height: '30px',
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>

                <span style={{ fontFamily: satoshi, fontWeight: 500, fontSize: '13px', color: '#FFFFFF' }}>
                  {article.author}
                </span>

                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>|</span>

                <span style={{ fontFamily: satoshi, fontWeight: 400, fontSize: '13px', color: '#D7B56D' }}>
                  {article.date}
                </span>
              </div>

              {/* Read More link */}
              <Link
                to={`/blog/${article.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: satoshi,
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  backdropFilter: 'blur(4px)',
                  transition: 'background 200ms, border-color 200ms',
                  flexShrink: 0,
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
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
