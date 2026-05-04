/**
 * BlogDetailPage
 *
 * Assembled from four sections:
 *   1. BlogDetailHero  — back link, title, meta row, hero image
 *   2. BlogArticleBody — article content (left) + sticky TOC (right)
 *   3. MoreArticles    — related articles grid
 *
 * Route: /blog/:id
 */
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import BlogDetailHero from './BlogDetailHero';
import BlogArticleBody from './BlogArticleBody';
import MoreArticles from './MoreArticles';
import { FEATURED_ARTICLE, ARTICLES } from '../blogData';

const satoshi = 'Satoshi, Inter, sans-serif';

// Combine all articles into one lookup pool
const ALL_ARTICLES = [FEATURED_ARTICLE, ...ARTICLES];

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = ALL_ARTICLES.find(a => a.id === id);

  // ── 404 state ──
  if (!article) {
    return (
      <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
        <Navbar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            gap: '16px',
            padding: '160px 80px 80px',
          }}
        >
          <p
            style={{
              fontFamily: satoshi,
              fontSize: '20px',
              color: '#46485F',
              textAlign: 'center',
            }}
          >
            Article not found.
          </p>
          <button
            onClick={() => navigate('/blog')}
            style={{
              padding: '10px 28px',
              borderRadius: '8px',
              background: '#010527',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '14px',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <Navbar />

      {/* Section 1: Hero */}
      <BlogDetailHero article={article} readTime="10 min" />

      {/* Section 2 + 3: Article body with sticky TOC */}
      <BlogArticleBody article={article} />

      {/* Section 4: More articles */}
      <MoreArticles currentId={article.id} />

      <Footer />
    </div>
  );
}
