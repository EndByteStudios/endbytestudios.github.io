import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import resourcesData from '../data/resources.json';
import { Resource, Category } from '../types';
import ResourceCard from '../components/resources/ResourceCard';
import CategoryFilter from '../components/resources/CategoryFilter';
import SearchInput from '../components/resources/SearchInput';

const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extract unique categories
  const allCategories: Category[] = ['All', ...new Set(resourcesData.resources.map(resource => resource.category))] as Category[];
  
  useEffect(() => {
    // Load resources from JSON file
    setResources(resourcesData.resources);
    setFilteredResources(resourcesData.resources);
  }, []);
  
  useEffect(() => {
    // Filter resources based on category and search term
    let result = [...resources];
    
    if (selectedCategory !== 'All') {
      result = result.filter(resource => resource.category === selectedCategory);
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(resource => 
        resource.name.toLowerCase().includes(searchLower) ||
        resource.description.toLowerCase().includes(searchLower) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    setFilteredResources(result);
  }, [selectedCategory, searchTerm, resources]);
  
  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };
  
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Developer Resources</h1>
        <p className="text-gray-300 mb-8">
          Browse our curated collection of free tools, libraries, and learning materials
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <SearchInput onSearch={handleSearch} />
          
          <div className="flex items-center text-sm text-gray-400">
            <span>{filteredResources.length} resources found</span>
          </div>
        </div>
        
        <CategoryFilter 
          categories={allCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No resources found matching your criteria</p>
            <button 
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 text-purple-400 hover:text-purple-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Resources;