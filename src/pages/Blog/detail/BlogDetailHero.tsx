/**
 * BlogDetailHero — Section 1 of the Blog Detail Page
 *
 * Layout (matches design):
 *   • "< Back to Blogs" link
 *   • Large article title (full width, no cap)
 *   • Meta row — four labeled columns:
 *       "Post By"    → author avatar + name
 *       "Published"  → date
 *       "Read time"  → "X min"
 *       "Follow us"  → gold social icons (LinkedIn, Facebook, Twitter, Instagram)
 *   • Full-width hero image with rounded corners
 */
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import type { BlogArticle } from '../blogData';

const satoshi = 'Satoshi, Inter, sans-serif';

interface BlogDetailHeroProps {
  article: BlogArticle;
  readTime?: string;
}

// ── Gold social icon link ─────────────────────────────────────────────────
function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#D7B56D',
        transition: 'opacity 200ms',
        flexShrink: 0,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {children}
    </a>
  );
}

// ── Meta column: label on top, value below ────────────────────────────────
function MetaColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <span
        style={{
          fontFamily: satoshi,
          fontWeight: 400,
          fontSize: '12px',
          color: '#8A93B2',
          letterSpacing: '0.01em',
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

export default function BlogDetailHero({
  article,
  readTime = '10 min',
}: BlogDetailHeroProps) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      style={{
        background: '#FFFFFF',
        paddingTop: isMobile ? '80px' : '120px',
        paddingBottom: isMobile ? '32px' : '48px',
      }}
    >
      <div
        style={{
          width: isMobile ? '92%' : '80%',
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        {/* ── Back link ── */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          onClick={() => navigate('/blog')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '13px',
            color: '#46485F',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: isMobile ? '16px' : '24px',
            transition: 'color 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#010527')}
          onMouseLeave={e => (e.currentTarget.style.color = '#46485F')}
        >
          {/* Chevron left */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9,2 4,7 9,12" />
          </svg>
          Back to Blogs
        </motion.button>

        {/* ── Article title ── */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 700,
            fontSize: 'clamp(30px, 4.5vw, 56px)',
            lineHeight: '115%',
            letterSpacing: '-0.02em',
            color: '#010527',
            marginBottom: '24px',
          }}
        >
          {article.title}
        </motion.h1>

        {/* ── Meta row ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: isMobile ? '24px' : '48px',
            flexWrap: 'wrap',
            marginBottom: isMobile ? '20px' : '28px',
          }}
        >
          {/* Post By */}
          <MetaColumn label="Post By">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Author avatar */}
              <div
                style={{
                  width: '28px',
                  height: '28px',
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
              </div>
              <span
                style={{
                  fontFamily: satoshi,
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#010527',
                }}
              >
                {article.author ?? 'Polaris Team'}
              </span>
            </div>
          </MetaColumn>

          {/* Published */}
          <MetaColumn label="Published">
            <span
              style={{
                fontFamily: satoshi,
                fontWeight: 600,
                fontSize: '14px',
                color: '#010527',
              }}
            >
              {article.date}
            </span>
          </MetaColumn>

          {/* Read time */}
          <MetaColumn label="Read time">
            <span
              style={{
                fontFamily: satoshi,
                fontWeight: 600,
                fontSize: '14px',
                color: '#010527',
              }}
            >
              {readTime}
            </span>
          </MetaColumn>

          {/* Follow us — pushed to the right */}
          <div style={{ marginLeft: 'auto' }}>
            <MetaColumn label="Follow us">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {/* LinkedIn */}
                <SocialLink href="#">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialLink>

                {/* Facebook */}
                <SocialLink href="#">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </SocialLink>

                {/* Twitter / X */}
                <SocialLink href="#">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </SocialLink>

                {/* Instagram */}
                <SocialLink href="#">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </SocialLink>
              </div>
            </MetaColumn>
          </div>
        </motion.div>

        {/* ── Hero image ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          style={{
            width: '100%',
            height: isMobile ? '380px' : 'clamp(600px, 70vh, 860px)',
            borderRadius: '20px',
            overflow: 'hidden',
            background: '#D0D5E8',
          }}
        >
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
