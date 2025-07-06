import React, { useState } from 'react';
import { Gift, Lock, Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="mb-6">
          <Gift className="w-12 h-12 text-white/80 mx-auto mb-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-lg text-green-100 leading-relaxed">
            Get exclusive updates, early access to new services, and special offers just for subscribers. 
            Plus, receive our weekly "Life Simplified" newsletter with tips for better living in Kigali.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-4 focus:ring-white/20 outline-none text-gray-900 placeholder-gray-500"
          />
          <button
            onClick={handleNewsletterSubmit}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
          >
            {isSubmitted ? '✓ Subscribed!' : 'Subscribe Now'}
          </button>
        </div>
        
        <div className="flex items-center justify-center space-x-6 text-white/80">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4" />
            <span className="text-sm">No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Weekly insights</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gift className="w-4 h-4" />
            <span className="text-sm">Exclusive offers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;