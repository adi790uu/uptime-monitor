import React from 'react';
import { Bell, Clock, Shield, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';
import useThemeStore from '../../store/themeStore';

const Features = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  
  const features = [
    {
      title: 'Real-time Monitoring',
      description: 'Monitor your services 24/7 with real-time updates and instant notifications.',
      Icon: Clock
    },
    {
      title: 'Instant Alerts',
      description: 'Get notified immediately when your services experience downtime or issues.',
      Icon: Bell
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security to protect your monitoring data and settings.',
      Icon: Shield
    },
    {
      title: 'Quick Recovery',
      description: 'Automated recovery procedures to minimize downtime and service disruptions.',
      Icon: Zap
    }
  ];

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Everything you need to keep your services running
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Comprehensive monitoring solutions designed to give you peace of mind
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;