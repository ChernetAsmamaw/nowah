import React, { useState } from 'react';
import { Sparkles, Shield, Timer, Camera, Utensils, Heart, Globe, Truck, Shirt, Clock, ChevronRight } from 'lucide-react';

interface ServiceFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  pricing: { basic: number; premium: number; luxury: number };
  image: string;
}

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cleaning');

  const services: Service[] = [
    {
      id: 'cleaning',
      icon: '🧼',
      title: 'Expert Cleaning Services',
      subtitle: 'Professional deep cleaning for your peace of mind',
      description: 'Our certified cleaning professionals use eco-friendly products and advanced techniques to keep your home spotless. From regular maintenance to deep cleaning sessions, we handle it all.',
      features: [
        { icon: Sparkles, title: 'Deep Sanitization', desc: 'Medical-grade cleaning protocols' },
        { icon: Shield, title: 'Eco-Friendly Products', desc: 'Safe for family and pets' },
        { icon: Timer, title: 'Flexible Scheduling', desc: 'Weekly, bi-weekly, or monthly' },
        { icon: Camera, title: 'Quality Assurance', desc: 'Photo reports after each clean' }
      ],
      pricing: { basic: 15000, premium: 25000, luxury: 40000 },
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop'
    },
    {
      id: 'meals',
      icon: '🍱',
      title: 'Gourmet Meal Delivery',
      subtitle: 'Fresh, nutritious meals crafted by local chefs',
      description: 'Experience the rich flavors of Rwanda with our chef-prepared meals. From traditional dishes to international cuisine, every meal is made with fresh, locally-sourced ingredients.',
      features: [
        { icon: Utensils, title: 'Chef-Prepared', desc: 'Local culinary experts' },
        { icon: Heart, title: 'Nutritious Options', desc: 'Balanced, healthy meals' },
        { icon: Globe, title: 'Diverse Cuisine', desc: 'Rwandan and international' },
        { icon: Truck, title: 'Fresh Delivery', desc: 'Same-day preparation' }
      ],
      pricing: { basic: 8000, premium: 12000, luxury: 18000 },
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop'
    },
    {
      id: 'laundry',
      icon: '👕',
      title: 'Premium Laundry Care',
      subtitle: 'Complete garment care with pickup & delivery',
      description: 'Professional laundry and dry cleaning services with convenient pickup and delivery. We treat your clothes with the care they deserve, using premium detergents and techniques.',
      features: [
        { icon: Shirt, title: 'Professional Care', desc: 'Specialized treatment for all fabrics' },
        { icon: Truck, title: 'Pickup & Delivery', desc: 'Convenient door-to-door service' },
        { icon: Clock, title: '48-Hour Turnaround', desc: 'Quick and reliable service' },
        { icon: Shield, title: 'Damage Protection', desc: 'Insured against loss or damage' }
      ],
      pricing: { basic: 5000, premium: 8000, luxury: 12000 },
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how Nowah transforms your daily life with our comprehensive suite of home services, 
            designed specifically for the modern lifestyle in Kigali.
          </p>
        </div>
        
        {/* Service Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-xl">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  activeTab === service.id
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Details */}
        {services.map((service) => (
          activeTab === service.id && (
            <div key={service.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-lg text-green-600 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-xs">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all flex items-center space-x-2 text-sm">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="text-sm text-gray-500">
                    Starting from <span className="font-semibold text-green-600">RWF {service.pricing.basic.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;