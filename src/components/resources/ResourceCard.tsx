import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Resource } from '../../types';
import Badge from '../ui/Badge';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-5 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{resource.name}</h3>
          {resource.isOpenSource && (
            <Badge text="Open Source" type="open-source" />
          )}
        </div>
        <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          <Badge text={resource.category} type="category" />
          {resource.tags.map((tag) => (
            <Badge key={tag} text={tag} />
          ))}
        </div>
      </div>
      
      <div className="px-5 pb-5 flex justify-between items-center border-t border-gray-700 pt-3 mt-auto">
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
        >
          Visit Resource <ExternalLink className="ml-1 h-3.5 w-3.5" />
        </a>
        {resource.isOpenSource && (
          <div className="text-gray-400">
            <Github className="h-4 w-4" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ResourceCard;