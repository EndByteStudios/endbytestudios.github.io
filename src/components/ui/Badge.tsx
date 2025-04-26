import React from 'react';

interface BadgeProps {
  text: string;
  type?: 'default' | 'open-source' | 'category';
}

const Badge: React.FC<BadgeProps> = ({ text, type = 'default' }) => {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  
  const typeClasses = {
    default: 'bg-gray-700 text-gray-200',
    'open-source': 'bg-emerald-900/80 text-emerald-200',
    category: 'bg-purple-900/80 text-purple-200'
  };
  
  return (
    <span className={`${baseClasses} ${typeClasses[type]}`}>
      {text}
    </span>
  );
};

export default Badge;