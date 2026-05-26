/**
 * BlogGrid — Section 2
 * "Latest News" heading + sort button, then a 3-column article grid.
 * Each article: image → date → title → description → "Read More >" (underlined).
 * Background: #EBECF6
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { ARTICLES, CATEGORIES } from '../blogData';
import type { BlogArticle } from '../blogData';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Single article item ───────────────────────────────────────────────────
function ArticleItem({ article, index, isVisible, isMobile }: { article: BlogArticle; index: number; isVisible: boolean; isMobile: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.06 + index * 0.07 }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <div
        style={{
          width: '100%',
          height: isMobile ? '180px' : '250px',
          borderRadius: '24px',
          overflow: 'hidden',
          background: article.image ? 'transparent' : '#D0D5E8',
          marginBottom: '12px',
          flexShrink: 0,
          padding: '0',
        }}
      >
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '24px' }}
          />
        )}
      </div>

      {/* Date */}
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 400,
          fontSize: '13px',
          color: '#8A93B2',
          marginBottom: '8px',
        }}
      >
        {article.date}
      </p>

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

      {/* Read More — underlined, with chevron */}
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
          textDecoration: 'none',
          borderBottom: '1.5px solid #010527',
          paddingBottom: '2px',
          width: 'fit-content',
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
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4,2 10,7 4,12" />
        </svg>
      </Link>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────
export default function BlogGrid() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  return (
    <section
      ref={ref}
      style={{
        background: '#EBECF6',
        paddingTop: isMobile ? '48px' : '80px',
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
        {/* Header row: title + sort button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'flex-start',
            justifyContent: 'space-between',
            gap: isMobile ? '12px' : '24px',
            marginBottom: '8px',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: satoshi,
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 44px)',
                lineHeight: '120%',
                letterSpacing: '-0.02em',
                color: '#010527',
                marginBottom: '8px',
              }}
            >
              Latest News
            </h2>
            <p
              style={{
                fontFamily: satoshi,
                fontWeight: 400,
                fontSize: '15px',
                color: '#46485F',
              }}
            >
              Stay updated with the latest news, announcements, and developments
            </p>
          </div>

          {/* Sort By button */}
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid #B0B8D0',
              background: 'transparent',
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '14px',
              color: '#46485F',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'border-color 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#010527')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#B0B8D0')}
          >
            Sort By
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="6" y1="12" x2="18" y2="12" />
              <line x1="9" y1="18" x2="15" y2="18" />
            </svg>
          </button>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: isMobile ? '24px' : '40px',
          }}
        >
          {CATEGORIES.map(cat => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: `1px solid ${active ? '#010527' : '#B0B8D0'}`,
                  background: active ? '#010527' : 'transparent',
                  color: active ? '#FFFFFF' : '#46485F',
                  fontFamily: satoshi,
                  fontWeight: 500,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* 3-column article grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '32px 24px',
          }}
        >
          {filtered.map((article, i) => (
            <ArticleItem
              key={article.id}
              article={article}
              index={i}
              isVisible={isVisible}
              isMobile={isMobile}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ fontFamily: satoshi, fontSize: '15px', color: '#46485F', textAlign: 'center', paddingTop: '40px' }}>
            No articles in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
