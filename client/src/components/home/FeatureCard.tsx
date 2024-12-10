import React from 'react';
import { LucideIcon } from 'lucide-react';
import useThemeStore from '../../store/themeStore';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
    </div>
  );
};

export default FeatureCard;