import React from 'react';
import { Zap, ArrowRight, Play } from 'lucide-react';
import StatsSection from './StatsSection';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative bg-white pt-12 pb-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full text-sm font-medium text-green-700 border border-green-200 mb-6">
            <Zap className="w-4 h-4" />
            <span>Launching in Kigali - Join the waitlist!</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Life,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700 block">
              Simplified
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of busy professionals, families, and expats who've reclaimed their time 
            with Nowah's premium home services. Expert cleaning, gourmet meals, and complete laundry care 
            - all in one seamless platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2">
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
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