
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, BookOpen, Users, Award, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { featuredPosts, recentPosts } from '@/data/blogPosts';

const Index = () => {
  const stats = [
    { icon: Scale, label: 'Years of Experience', value: '15+' },
    { icon: Users, label: 'Cases Won', value: '500+' },
    { icon: Award, label: 'Client Satisfaction', value: '98%' },
    { icon: BookOpen, label: 'Articles Published', value: '50+' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <Scale className="h-12 w-12 text-gold-500" />
                <Badge variant="secondary" className="bg-gold-500 text-navy-900 font-sans font-semibold">
                  Attorney at Law
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-sans mb-6 leading-tight">
                Justice Through 
                <span className="text-gold-500"> Legal Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over 15 years of experience in criminal defense, civil rights, and corporate law, 
                I provide dedicated legal representation with unwavering commitment to your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-sans font-semibold">
                  <Link to="/contact" className="flex items-center space-x-2">
                    <span>Schedule Consultation</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 font-sans">
                  <Link to="/blog">View Legal Insights</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold font-sans mb-6">Professional Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-8 w-8 text-gold-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold font-sans">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-sans text-navy-900 mb-4">
                Featured Legal Insight
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stay informed with the latest legal analysis and professional insights 
                from years of courtroom experience.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <BlogCard post={featuredPosts[0]} featured={true} />
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Alexandra Mitchell"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <Badge variant="outline" className="mb-4 border-gold-300 text-gold-600 font-sans">
                About the Attorney
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold font-sans text-navy-900 mb-6">
                Alexandra Mitchell
              </h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                With a distinguished career spanning over 15 years, I have dedicated my practice 
                to defending the rights of individuals and businesses. My commitment to justice 
                and legal excellence has resulted in numerous successful outcomes for my clients.
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-sans font-semibold text-navy-900 mb-2">Education</h4>
                  <p className="text-gray-800">J.D., Harvard Law School • B.A., Yale University</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-navy-900 mb-2">Bar Admissions</h4>
                  <p className="text-gray-800">New York • California • Federal Courts</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-navy-900 mb-2">Specializations</h4>
                  <p className="text-gray-800">Criminal Defense • Civil Rights • Corporate Law • Family Law</p>
                </div>
              </div>

              <Button className="bg-navy-900 hover:bg-navy-800 font-sans">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Learn More About My Practice</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-sans text-navy-900 mb-4">
              Latest Legal Insights
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay updated with the latest legal developments, case studies, and professional analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.slice(1, 4).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-sans">
              <Link to="/blog" className="flex items-center space-x-2">
                <span>View All Articles</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 text-gold-500 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold font-sans mb-6">
            Need Legal Representation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't face legal challenges alone. Schedule a consultation today to discuss 
            your case and explore your options with experienced legal counsel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-sans font-semibold">
              <Link to="/contact" className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule Consultation</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 font-sans">
              <Link to="/about" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Learn About My Practice</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
