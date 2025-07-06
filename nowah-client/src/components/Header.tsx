import React from 'react';
import { Zap } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Nowah</span>
              <div className="text-xs text-gray-500 font-medium">Simplified Living</div>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Reviews</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <button className="hidden sm:block text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;