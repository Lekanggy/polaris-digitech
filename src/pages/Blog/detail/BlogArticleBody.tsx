/**
 * BlogArticleBody — Section 2 of the Blog Detail Page
 *
 * Two-column layout matching the design:
 *   Left (~65%): Article content
 *     • Intro paragraph (no heading)
 *     • Each named section: bold h2 heading → paragraph(s) → optional inline image
 *   Right (~280px): Sticky dark TOC card
 *
 * Each section root div carries id="section-{id}" for the TOC scroll-spy.
 */
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import type { BlogArticle } from '../blogData';
import TableOfContents from './TableOfContents';

const satoshi = 'Satoshi, Inter, sans-serif';

interface BlogArticleBodyProps {
  article: BlogArticle;
}

// ── Single article section ────────────────────────────────────────────────
function ArticleSection({
  id,
  heading,
  paragraphs,
  image,
  index,
  isLast,
}: {
  id: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      id={`section-${id}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
      style={{ marginBottom: isLast ? 0 : '52px' }}
    >
      {/* Section heading — skip for the intro (empty heading) */}
      {heading && (
        <h2
          style={{
            fontFamily: satoshi,
            fontWeight: 700,
            fontSize: 'clamp(18px, 2.2vw, 24px)',
            lineHeight: '130%',
            letterSpacing: '-0.01em',
            color: '#010527',
            marginBottom: '14px',
          }}
        >
          {heading}
        </h2>
      )}

      {/* First paragraph */}
      {paragraphs[0] && (
        <p
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '180%',
            color: '#46485F',
            marginBottom: image || paragraphs.length > 1 ? '20px' : 0,
          }}
        >
          {paragraphs[0]}
        </p>
      )}

      {/* Optional inline image — shown between first and remaining paragraphs */}
      {image && (
        <div
          style={{
            width: '100%',
            borderRadius: '14px',
            overflow: 'hidden',
            marginBottom: paragraphs.length > 1 ? '20px' : 0,
            height: 'clamp(200px, 40vw, 560px)',
          }}
        >
          <img
            src={image}
            alt={heading || 'Article image'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      )}

      {/* Remaining paragraphs */}
      {paragraphs.slice(1).map((para, i) => (
        <p
          key={i}
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '180%',
            color: '#46485F',
            marginTop: i === 0 ? 0 : '16px',
          }}
        >
          {para}
        </p>
      ))}
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────
export default function BlogArticleBody({ article }: BlogArticleBodyProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const sections = article.sections ?? [];

  // On tablet show a narrower TOC; on mobile stack vertically
  const gridCols = isMobile ? '1fr' : isTablet ? '1fr 220px' : '1fr 260px';

  return (
    <section
      style={{
        background: '#FFFFFF',
        paddingTop: '0',
        paddingBottom: isMobile ? '40px' : '80px',
      }}
    >
      <div
        style={{
          width: isMobile ? '94%' : '80%',
          maxWidth: '1600px',
          margin: '0 auto',
          paddingTop: isMobile ? '28px' : '48px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: gridCols,
            gap: isMobile ? '0' : '48px',
            alignItems: 'start',
          }}
        >
          {/* ── LEFT: article content ── */}
          <div>
            {sections.map((section, index) => (
              <ArticleSection
                key={section.id}
                id={section.id}
                heading={section.heading}
                paragraphs={section.paragraphs}
                image={section.image}
                index={index}
                isLast={index === sections.length - 1}
              />
            ))}
          </div>

          {/* ── RIGHT / BOTTOM: TOC — top-border separator on mobile ── */}
          <div
            style={{
              marginTop: isMobile ? '36px' : '0',
              paddingTop: isMobile ? '36px' : '0',
              borderTop: isMobile ? '1px solid #E0E6EF' : 'none',
            }}
          >
            <TableOfContents sections={sections} />
          </div>
        </div>
      </div>
    </section>
  );
}
