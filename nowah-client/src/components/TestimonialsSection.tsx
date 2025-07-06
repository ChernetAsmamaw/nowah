import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  serviceUsed: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Mukamana',
      role: 'Marketing Director',
      company: 'Tech Startup',
      content: 'Nowah has completely transformed how I manage my work-life balance. The cleaning service is impeccable, and the meal delivery saves me hours every week. I can finally focus on what matters most.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      serviceUsed: 'Full Package'
    },
    {
      name: 'James Patterson',
      role: 'Expat Family Father',
      company: 'International NGO',
      content: 'Moving to Kigali was stressful until we found Nowah. The authentic Rwandan meals help our kids experience local culture, and the reliable cleaning service gives us peace of mind.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      serviceUsed: 'Meals + Cleaning'
    },
    {
      name: 'Grace Uwimana',
      role: 'Young Mother',
      company: 'Healthcare Professional',
      content: 'As a new mother working full-time, Nowah is a lifesaver. The laundry service handles everything perfectly, and knowing my home is professionally cleaned gives me one less thing to worry about.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      serviceUsed: 'Cleaning + Laundry'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Join hundreds of satisfied customers across Kigali</p>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 text-center mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-3">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {testimonials[currentTestimonial].serviceUsed}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;