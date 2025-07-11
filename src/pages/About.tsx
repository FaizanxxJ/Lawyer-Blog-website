
import { Award, BookOpen, Scale, Users, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    { icon: Scale, title: 'Years of Experience', value: '15+', description: 'Dedicated legal practice' },
    { icon: Users, title: 'Cases Won', value: '500+', description: 'Successful outcomes' },
    { icon: Award, title: 'Client Satisfaction', value: '98%', description: 'Positive feedback rate' },
    { icon: BookOpen, title: 'Articles Published', value: '50+', description: 'Legal insights shared' },
  ];

  const practiceAreas = [
    {
      title: 'Criminal Defense',
      description: 'Comprehensive defense strategies for all types of criminal charges, from misdemeanors to serious felonies.',
      cases: ['DUI/DWI Defense', 'Drug Crimes', 'White Collar Crimes', 'Assault & Battery', 'Theft & Fraud']
    },
    {
      title: 'Civil Rights',
      description: 'Protecting individual rights and fighting discrimination in workplace, housing, and public accommodations.',
      cases: ['Employment Discrimination', 'Police Misconduct', 'Civil Rights Violations', 'Constitutional Rights', 'Class Action Suits']
    },
    {
      title: 'Corporate Law',
      description: 'Business formation, contracts, compliance, and representation for companies of all sizes.',
      cases: ['Business Formation', 'Contract Negotiation', 'Regulatory Compliance', 'Mergers & Acquisitions', 'Employment Law']
    },
    {
      title: 'Family Law',
      description: 'Compassionate representation in family matters with focus on achieving favorable outcomes.',
      cases: ['Divorce & Separation', 'Child Custody', 'Adoption', 'Domestic Violence', 'Property Division']
    }
  ];

  const education = [
    {
      degree: 'Juris Doctor (J.D.)',
      school: 'Harvard Law School',
      year: '2009',
      honors: 'Magna Cum Laude, Law Review Editor'
    },
    {
      degree: 'Bachelor of Arts',
      school: 'Yale University',
      year: '2006',
      honors: 'Summa Cum Laude, Phi Beta Kappa'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="bg-gold-500 text-navy-900 font-sans font-semibold mb-4">
                Attorney Profile
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold font-sans mb-6">
                Alexandra Mitchell
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Dedicated to justice, committed to excellence. With over 15 years of legal experience, 
                I provide strategic representation and unwavering advocacy for my clients.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-sans font-semibold" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 font-sans" asChild>
                  <Link to="/blog">Read Legal Insights</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Alexandra Mitchell"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-sans text-navy-900 mb-4">
              Professional Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A track record of excellence in legal representation and client advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <achievement.icon className="h-12 w-12 text-navy-900 mx-auto mb-4" />
                  <div className="text-3xl font-bold font-sans text-navy-900 mb-2">
                    {achievement.value}
                  </div>
                  <div className="font-semibold font-sans text-navy-900 mb-2">
                    {achievement.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-sans text-navy-900 mb-4">
              Education & Credentials
            </h2>
            <p className="text-xl text-gray-600">
              Academic excellence and professional qualifications that form the foundation of exceptional legal practice.
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <GraduationCap className="h-12 w-12 text-navy-900 mt-2" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-sans text-navy-900 mb-2">
                        {edu.degree}
                      </h3>
                      <div className="text-lg text-gray-700 mb-2">
                        {edu.school} • Class of {edu.year}
                      </div>
                      <Badge variant="outline" className="border-gold-300 text-gold-600">
                        {edu.honors}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-navy-50 px-6 py-4 rounded-lg">
              <Scale className="h-6 w-6 text-navy-900" />
              <div className="text-left">
                <div className="font-semibold font-sans text-navy-900">Bar Admissions</div>
                <div className="text-sm text-gray-600">New York • California • Federal Courts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-sans text-navy-900 mb-4">
              Areas of Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas with specialized expertise and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-sans text-navy-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div>
                    <h4 className="font-semibold font-sans text-navy-900 mb-3">
                      Key Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.cases.map((caseType) => (
                        <Badge key={caseType} variant="outline" className="text-xs">
                          {caseType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-sans text-navy-900 mb-8">
            My Legal Philosophy
          </h2>
          <div className="text-xl text-gray-600 leading-relaxed space-y-6">
            <p>
              "I believe that every client deserves not just legal representation, but a dedicated advocate 
              who understands the human impact of legal challenges. My approach combines rigorous legal analysis 
              with compassionate client service."
            </p>
            <p>
              "Excellence in legal practice requires continuous learning, strategic thinking, and unwavering 
              commitment to justice. I am dedicated to achieving the best possible outcomes for my clients 
              through thorough preparation and aggressive advocacy."
            </p>
          </div>
          <div className="mt-8">
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-sans mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact me today for a confidential consultation to discuss your legal needs and explore your options.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-gold-500" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-gold-500" />
              <span>alex@mitchelllaw.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-gold-500" />
              <span>New York, NY</span>
            </div>
          </div>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-sans font-semibold" asChild>
            <Link to="/contact">Schedule Your Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
