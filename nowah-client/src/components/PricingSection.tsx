import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

const PricingSection: React.FC = () => {
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Essential',
      price: 45000,
      period: 'month',
      description: 'Perfect for individuals getting started',
      features: [
        'Choose 2 services',
        'Weekly scheduling',
        'Basic support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 85000,
      period: 'month',
      description: 'Most popular for busy professionals',
      features: [
        'All 3 services included',
        'Flexible scheduling',
        'Priority support',
        'Quality guarantees',
        'Same-day service'
      ],
      popular: true
    },
    {
      id: 'luxury',
      name: 'Luxury',
      price: 150000,
      period: 'month',
      description: 'Premium experience for discerning clients',
      features: [
        'All services + premium options',
        'Dedicated account manager',
        '24/7 concierge support',
        'Custom scheduling',
        'Premium products',
        'Monthly home consultation'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible subscription plans designed to fit your lifestyle and budget. All plans include our quality guarantee.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
              plan.popular ? 'border-orange-500 scale-105' : 'border-gray-200'
            }`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 font-semibold text-sm">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{plan.description}</p>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    RWF {plan.price.toLocaleString()}
                    <span className="text-base font-normal text-gray-500">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all text-sm ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-3 text-sm">Need a custom solution?</p>
          <button className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2 mx-auto text-sm">
            <span>Contact our team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;