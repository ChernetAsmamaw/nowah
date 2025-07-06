import React, { useState } from 'react';
import { Gift, Lock, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async () => {
    if (email && !isLoading) {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setIsLoading(false);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Stay in the Loop
          </h2>
          
          <p className="text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">
            Get exclusive updates, early access to new services, and special offers just for subscribers. 
            Plus, receive our weekly "Life Simplified" newsletter with tips for better living in Kigali.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white rounded-xl border-0 focus:ring-4 focus:ring-white/30 outline-none text-gray-900 placeholder-gray-500 font-medium"
            />
            <button
              onClick={handleNewsletterSubmit}
              disabled={!email || isLoading || isSubmitted}
              className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap overflow-hidden ${
                isSubmitted 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              } ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isLoading && (
                <div className="absolute inset-0 bg-orange-600 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {isSubmitted ? (
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Subscribed!</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>Subscribe Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">No spam, ever</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Weekly insights</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Exclusive offers</span>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-green-100/80">
          Join 500+ professionals who've simplified their lives with Nowah
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;