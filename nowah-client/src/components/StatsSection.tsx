import React, { useState, useEffect } from 'react';
import { Users, CheckCircle, Star, Headphones } from 'lucide-react';

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const useCounter = (end: number, duration: number = 2000): number => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return count;
};

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    { number: useCounter(500), label: "Happy Customers", icon: Users },
    { number: useCounter(10000), label: "Services Completed", icon: CheckCircle },
    { number: useCounter(98), label: "Satisfaction Rate", suffix: "%", icon: Star },
    { number: useCounter(24), label: "Hours Support", suffix: "/7", icon: Headphones }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
          <div className="flex justify-center mb-3">
            <stat.icon className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {stat.number}{stat.suffix}
          </div>
          <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;