import React from 'react';
import { Target, Calendar, Heart } from 'lucide-react';

interface Step {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      step: '01',
      title: 'Choose Your Services',
      description: 'Select from our premium cleaning, meal delivery, and laundry services. Customize your package based on your needs and schedule.',
      icon: Target,
      color: 'from-green-400 to-green-600'
    },
    {
      step: '02',
      title: 'Schedule & Customize',
      description: 'Pick convenient times that work with your lifestyle. Set preferences, special instructions, and let us handle the rest.',
      icon: Calendar,
      color: 'from-green-500 to-green-700'
    },
    {
      step: '03',
      title: 'Enjoy Your Freedom',
      description: 'Relax while our trusted professionals take care of everything. Track progress through our mobile app and rate your experience.',
      icon: Heart,
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Nowah Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with Nowah is simple. Our streamlined process ensures you're up and running in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100 z-20">
                <span className="text-xs font-bold text-gray-600">{step.step}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;