
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold font-sans text-navy-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const shareUrl = `${window.location.origin}/blog/${post.id}`;
  const shareTitle = `${post.title} by Alexandra Mitchell`;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6 -ml-4">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-navy-900 text-white font-sans">
              {post.category.replace('-', ' ').toUpperCase()}
            </Badge>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground font-sans">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold font-sans text-navy-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="font-sans">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            style={{ whiteSpace: 'pre-line' }}
          >
            {post.content}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-sans text-navy-900">
              Share this article
            </h3>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank')}
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`I thought you might find this article interesting: ${shareUrl}`)}`, '_blank')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mt-12">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Alexandra Mitchell"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold font-sans text-navy-900 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-600 mb-4">
                  Alexandra Mitchell is a seasoned attorney with over 15 years of experience in criminal defense, 
                  civil rights, and corporate law. She is committed to providing exceptional legal representation 
                  and sharing insights through her writing to help others understand complex legal matters.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-sans text-navy-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
