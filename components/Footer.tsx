import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { COLLEGE_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-veda-950 text-veda-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-serif font-bold text-white">Veda</span>
            </div>
            <p className="text-sm leading-relaxed text-veda-200">
              {COLLEGE_INFO.tagline}. Dedicated to academic excellence and holistic development since {COLLEGE_INFO.established}.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-gold-500 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-gold-500 transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Departments</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/courses" className="hover:text-gold-500 transition-colors">Computer Science</Link></li>
              <li><Link to="/courses" className="hover:text-gold-500 transition-colors">Commerce & Finance</Link></li>
              <li><Link to="/courses" className="hover:text-gold-500 transition-colors">Mathematics</Link></li>
              <li><Link to="/courses" className="hover:text-gold-500 transition-colors">Arts & Literature</Link></li>
              <li><Link to="/courses" className="hover:text-gold-500 transition-colors">Physical Education</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{COLLEGE_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{COLLEGE_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{COLLEGE_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-veda-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-veda-400">
          <p>&copy; {new Date().getFullYear()} Veda Degree College. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
