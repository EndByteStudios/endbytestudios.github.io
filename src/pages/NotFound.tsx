import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-purple-500">404</h1>
        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The resource you're looking for doesn't exist or has been moved. 
          Don't worry, there are plenty of other free resources to discover!
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;