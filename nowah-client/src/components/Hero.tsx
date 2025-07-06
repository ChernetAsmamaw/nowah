import React from 'react';
import { Zap, ArrowRight, Play } from 'lucide-react';
import StatsSection from './StatsSection';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className={`relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16 overflow-hidden ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-200 to-green-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-200 px-6 py-3 rounded-full text-sm font-medium text-green-700 border border-green-300 mb-8 shadow-lg backdrop-blur-sm">
            <Zap className="w-4 h-4 animate-pulse" />
            <span>Launching in Kigali - Join the waitlist!</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Your Life,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-800 block animate-pulse">
              Simplified
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of busy professionals, families, and expats who've reclaimed their time 
            with Nowah's premium home services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('services')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center space-x-3 shadow-lg hover:shadow-xl">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        
        <StatsSection />
      </div>
    </section>
  );
};

export default Hero;