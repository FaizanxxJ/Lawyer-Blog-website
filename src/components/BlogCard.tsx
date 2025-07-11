
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const cardClass = featured 
    ? "group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-navy-50 to-white"
    : "group hover:shadow-lg transition-all duration-300";

  return (
    <Card className={cardClass}>
      {post.image && (
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              featured ? 'h-64' : 'h-48'
            }`}
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-navy-900 text-white font-sans text-xs">
              {post.category.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>
        </div>
      )}
      
      <CardContent className={featured ? 'p-8' : 'p-6'}>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 font-sans">
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

        <h3 className={`font-sans font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-tight ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>

        <p className={`text-gray-600 leading-relaxed mb-4 ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-sans">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className={featured ? 'px-8 pb-8' : 'px-6 pb-6'}>
        <Link 
          to={`/blog/${post.id}`}
          className="inline-flex items-center space-x-2 text-navy-900 hover:text-gold-600 font-sans font-medium transition-colors group/link"
        >
          <span>Read More</span>
          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
