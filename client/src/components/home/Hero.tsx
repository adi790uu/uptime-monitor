import React from 'react';
import { ArrowRight } from 'lucide-react';
import useThemeStore from '../../store/themeStore';

const Hero = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-indigo-50 to-white'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Monitor Your Services with
            <span className="text-indigo-600"> Confidence</span>
          </h1>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Get instant notifications when your services go down. Keep your applications running smoothly with our advanced uptime monitoring system.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className={`border ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} px-8 py-3 rounded-md`}>
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="Dashboard Preview"
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;