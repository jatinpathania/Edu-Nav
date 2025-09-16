import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">EduNav</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop personalized career and education advisor. We guide you to make the right choices for a successful future.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/features" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 pb-2">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/blog" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors duration-200">FAQs</a></li>
              <li><a href="/support" className="hover:text-white transition-colors duration-200">Support</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 pb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl">
                <FaFacebook /> 
                <span className="sr-only">Facebook</span>
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl">
                <FaTwitter />
                <span className="sr-only">Twitter</span>
            
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl">
                {/* <FaLinkedin /> */}
                <span className="sr-only">LinkedIn</span>
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl">
                <FaInstagram />
                <span className="sr-only">Instagram</span>
                
              </a>
            </div>
          </div>
          
        </div>
        
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EduNav. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;