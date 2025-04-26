import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, Laptop, Book, Code } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Best Free Dev Resources You Never Knew Existed
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A curated collection of high-quality resources for developers, 
              completely free and open source. Built by the community, for the community.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                to="/resources" 
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Browse Resources <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured categories section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What You'll Find</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard 
              title="Learning Resources" 
              description="Free tutorials, courses, and educational content to expand your knowledge."
              icon={<Book className="h-10 w-10 text-blue-400" />}
            />
            <CategoryCard 
              title="Developer Tools" 
              description="Powerful tools and utilities to boost your productivity and workflow."
              icon={<Laptop className="h-10 w-10 text-purple-400" />}
            />
            <CategoryCard 
              title="Open Source" 
              description="Amazing open-source projects that you can use and contribute to."
              icon={<Code className="h-10 w-10 text-green-400" />}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/resources" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
            >
              Explore All Categories <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default Home;