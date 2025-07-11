
import { Scale, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-gold-500" />
              <div className="font-sans">
                <div className="text-xl font-bold">Alexandra Mitchell</div>
                <div className="text-sm text-gray-300">Attorney at Law</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Dedicated to providing exceptional legal representation with integrity, 
              expertise, and unwavering commitment to justice. Serving clients with 
              personalized attention and strategic legal solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog?category=criminal-law" className="text-gray-300 hover:text-gold-500 transition-colors">Criminal Law</Link></li>
              <li><Link to="/blog?category=civil-rights" className="text-gray-300 hover:text-gold-500 transition-colors">Civil Rights</Link></li>
              <li><Link to="/blog?category=corporate-law" className="text-gray-300 hover:text-gold-500 transition-colors">Corporate Law</Link></li>
              <li><Link to="/blog?category=family-law" className="text-gray-300 hover:text-gold-500 transition-colors">Family Law</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>alex@mitchelllaw.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Legal District<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © 2024 Alexandra Mitchell Law. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
