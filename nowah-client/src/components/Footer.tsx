import React from 'react';
import { Heart, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Nowah</span>
                <div className="text-gray-400 text-sm">Simplified Living Platform</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed max-w-md text-sm">
              Transforming how busy professionals, families, and expats experience home life in Kigali. 
              Premium services, trusted professionals, seamless experience.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">Proudly serving Kigali, Rwanda</span>
            </div>
            
            <div className="flex space-x-3">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
                <button key={index} className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center justify-center">
                  <span className="text-xs">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'House Cleaning',
                'Meal Delivery', 
                'Laundry & Ironing',
                'Service Areas',
                'Pricing'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 text-sm">
                    <ChevronRight className="w-3 h-3" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                'About Nowah',
                'Careers',
                'Press Kit',
                'Privacy Policy',
                'Terms of Service'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 text-sm">
                    <ChevronRight className="w-3 h-3" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Contact Support</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">+250 788 123 456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">hello@nowah.rw</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">Kigali City, Rwanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 text-sm">
              &copy; 2025 Nowah. All rights reserved. Made with ❤️ in Rwanda.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="hover:text-white transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;