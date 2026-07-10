import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import BlogHero from './sections/BlogHero';
import BlogGrid from './sections/BlogGrid';
import { FEATURED_ARTICLE, ARTICLES, normaliseBlog } from './blogData';
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

  // First CMS post becomes the featured article; rest go to the grid.
  // Fall back to static data when CMS is empty.
  const featuredArticle: BlogArticle =
    cmsPosts.length > 0 ? cmsPosts[0] : FEATURED_ARTICLE;

  const gridArticles: BlogArticle[] =
    cmsPosts.length > 1 ? cmsPosts.slice(1) : ARTICLES;

  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogHero article={featuredArticle} />
      <BlogGrid articles={gridArticles} />
      <Footer />
    </div>
  );
}
