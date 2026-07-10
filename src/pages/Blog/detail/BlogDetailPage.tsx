/**
 * BlogDetailPage
 *
 * Assembled from four sections:
 *   1. BlogDetailHero  — back link, title, meta row, hero image
 *   2. BlogArticleBody — article content (left) + sticky TOC (right)
 *   3. MoreArticles    — related articles grid
 *
 * Route: /blog/:id  (id = slug)
 *
 * Data: fetches the blogs query. Finds the article by slug (= :id param).
 * Falls back to static FEATURED_ARTICLE + ARTICLES when CMS is unavailable.
 */
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import BlogDetailHero from './BlogDetailHero';
import BlogArticleBody from './BlogArticleBody';
import MoreArticles from './MoreArticles';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { FEATURED_ARTICLE, ARTICLES, normaliseBlog } from '../blogData';
import type { BlogArticle } from '../blogData';
import { useGraphQLQuery } from '../../../hooks/useGraphQLQuery';
import { blogsQuery } from '../../../services/queries/blogQuery';
import type { BlogsData } from '../../../services/queries/blogQuery';
import { gql } from '../../../services/apolloClient';

const BLOGS_QUERY = gql(blogsQuery);
const satoshi = 'Satoshi, Inter, sans-serif';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { data } = useGraphQLQuery<BlogsData>(BLOGS_QUERY);

  // Normalise all CMS posts; Apollo cache means no extra network request
  const cmsPosts: BlogArticle[] = (data?.blogs ?? []).map(normaliseBlog);
  const allCms = cmsPosts.length > 0 ? cmsPosts : [FEATURED_ARTICLE, ...ARTICLES];

  // Find the article whose slug matches the URL param
  const article = allCms.find(a => a.id === id);

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
            padding: isMobile ? '100px 24px 60px' : '160px 80px 80px',
          }}
        >
          <p style={{ fontFamily: satoshi, fontSize: '20px', color: '#46485F', textAlign: 'center' }}>
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
      <BlogDetailHero article={article} readTime="10 min" />
      <BlogArticleBody article={article} />
      <MoreArticles currentId={article.id} allArticles={allCms} />
      <Footer />
    </div>
  );
}
