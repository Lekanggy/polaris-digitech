import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import BlogHero from './sections/BlogHero';
import BlogGrid from './sections/BlogGrid';
import { normaliseBlog } from './blogData';
import { useGraphQLQuery } from '../../hooks/useGraphQLQuery';
import { blogsQuery } from '../../services/queries/blogQuery';
import type { BlogsData } from '../../services/queries/blogQuery';
import type { BlogArticle } from './blogData';
import { gql } from '../../services/apolloClient';

const BLOGS_QUERY = gql(blogsQuery);

export default function BlogPage() {
  const { data, loading, error } = useGraphQLQuery<BlogsData>(BLOGS_QUERY);

  if (loading) console.log('[Blog] Loading CMS data...');
  if (error)   console.error('[Blog] GraphQL error:', error);

  // Normalise CMS posts into BlogArticle shape
  const cmsPosts = (data?.blogs ?? []).map(normaliseBlog);

  // Use the CMS data only. When only one post is available, show it as both the featured article and the sole grid article.
  const featuredArticle: BlogArticle | undefined = cmsPosts[0];
  const gridArticles: BlogArticle[] = cmsPosts.length > 1 ? cmsPosts.slice(1) : cmsPosts;

  if (!featuredArticle && gridArticles.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
          <p style={{ fontFamily: 'Satoshi, Inter, sans-serif', color: '#46485F' }}>No blog posts available.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      {featuredArticle ? <BlogHero article={featuredArticle} /> : null}
      <BlogGrid articles={gridArticles} />
      <Footer />
    </div>
  );
}
