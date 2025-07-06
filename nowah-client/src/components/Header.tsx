import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-lg transition-transform hover:scale-105">
                <span className="text-white font-bold text-sm">N</span>
              </div>
            </div>
            <div>
              <span className={`text-lg font-bold transition-colors ${
                scrolled ? 'text-gray-900' : 'text-gray-900'
              }`}>Nowah</span>
              <div className={`text-xs font-medium transition-colors ${
                scrolled ? 'text-gray-500' : 'text-gray-600'
              }`}>Simplified Living</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {[
              { label: 'Services', id: 'services' },
              { label: 'How it Works', id: 'how-it-works' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'Reviews', id: 'testimonials' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium text-sm transition-colors hover:scale-105 transform ${
                  scrolled 
                    ? 'text-gray-600 hover:text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <button className={`hidden sm:block font-medium text-sm transition-colors ${
              scrolled 
                ? 'text-gray-600 hover:text-green-600' 
                : 'text-gray-700 hover:text-green-600'
            }`}>
              Sign In
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
              Get Started
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:text-green-600 hover:bg-gray-100' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 space-y-3">
            {[
              { label: 'Services', id: 'services' },
              { label: 'How it Works', id: 'how-it-works' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'Reviews', id: 'testimonials' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;