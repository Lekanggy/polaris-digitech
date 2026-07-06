/**
 * MoreArticles — Section 4 of the Blog Detail Page
 *
 * Shows up to 3 related articles (excluding the current one).
 * Card design matches the BlogGrid article cards:
 *   image → date → title → description → "Read More >"
 *
 * Background: #EBECF6 (same as BlogGrid)
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { ARTICLES, FEATURED_ARTICLE } from '../blogData';
import type { BlogArticle } from '../blogData';

const satoshi = 'Satoshi, Inter, sans-serif';

interface MoreArticlesProps {
  currentId: string;
}

// ── Single article card ───────────────────────────────────────────────────
function ArticleCard({
  article,
  index,
  isVisible,
  isMobile,
}: {
  article: BlogArticle;
  index: number;
  isVisible: boolean;
  isMobile: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.08 }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <div
        style={{
          width: '100%',
          height: isMobile ? '160px' : '220px',
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#D0D5E8',
          marginBottom: '14px',
          flexShrink: 0,
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
      </div>

      {/* Category badge */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '3px 10px',
          borderRadius: '20px',
          background: '#FFFFFF',
          fontFamily: satoshi,
          fontWeight: 500,
          fontSize: '11px',
          color: '#010527',
          marginBottom: '8px',
          width: 'fit-content',
        }}
      >
        {article.category}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: satoshi,
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '140%',
          color: '#010527',
          marginBottom: '8px',
        }}
      >
        {article.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '155%',
          color: '#46485F',
          marginBottom: '16px',
          flex: 1,
        }}
      >
        {article.description}
      </p>

      {/* Read More */}
      <Link
        to={`/blog/${article.id}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontFamily: satoshi,
          fontWeight: 500,
          fontSize: '14px',
          color: '#010527',
          background: 'none',
          border: 'none',
          borderBottom: '1.5px solid #010527',
          paddingBottom: '2px',
          paddingLeft: 0,
          paddingRight: 0,
          width: 'fit-content',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'color 200ms, border-color 200ms',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.color = '#D7B56D';
          (e.currentTarget as HTMLAnchorElement).style.borderColor = '#D7B56D';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.color = '#010527';
          (e.currentTarget as HTMLAnchorElement).style.borderColor = '#010527';
        }}
      >
        Read More
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
          <polyline points="4,2 10,7 4,12" />
        </svg>
      </Link>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────
export default function MoreArticles({ currentId }: MoreArticlesProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Pool: FEATURED + ARTICLES, exclude current
  const pool = [FEATURED_ARTICLE, ...ARTICLES].filter(a => a.id !== currentId);
  const displayed = pool.slice(0, 3);

  if (displayed.length === 0) return null;

  return (
    <section
      ref={ref}
      style={{
        background: '#EBECF6',
        paddingTop: isMobile ? '48px' : '72px',
        paddingBottom: isMobile ? '48px' : '80px',
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
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#010527',
            marginBottom: isMobile ? '24px' : '36px',
          }}
        >
          More Articles
        </motion.h2>

        {/* 3-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '32px 24px',
          }}
        >
          {displayed.map((article, i) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={i}
              isVisible={isVisible}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
