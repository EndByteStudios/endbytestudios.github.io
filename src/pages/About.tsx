import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Gift, Github, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-6">About Endbyte</h1>

        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            Built for developers, by developers. 100% free and open knowledge.
          </p>
          <p className="text-gray-300 mb-6">
            Endbyte was created with a simple mission: to collect and curate the
            best free resources for developers in one place. We believe that
            knowledge should be accessible to everyone, regardless of their
            financial situation or background.
          </p>
          <p className="text-gray-300">
            Whether you're a seasoned developer or just starting your journey,
            we hope you find something valuable here that helps you learn,
            create, and grow.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Suggest a Resource
          </h2>
          <p className="text-gray-300 mb-6">
            Know of an amazing free resource that's not listed here? We'd love
            to hear about it!
          </p>
          <a
            href="https://forms.gle/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Suggest a Resource <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-white mb-4">Open Source</h2>
          <p className="text-gray-300 mb-6">
            This project is open source. Contributions are welcome!
          </p>
          <div className="flex items-center">
            <a
              href="https://github.com/EndByteStudios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-400 hover:text-purple-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
