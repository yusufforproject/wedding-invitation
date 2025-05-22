import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl text-primary mb-4">Olivia & William</h2>
          <div className="flex justify-center items-center">
            <div className="w-12 h-px bg-primary"></div>
            <Heart className="mx-4 text-primary" size={20} />
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <p className="font-body text-gray-700 mt-6">
            June 15, 2025 • The Rosewood Estate • Lakeside, CA
          </p>
          
          <p className="font-body text-gray-500 mt-8">
            With love and appreciation, <br />
            Olivia & William
          </p>
          
          <div className="mt-8 text-gray-500 text-sm">
            <p>For questions, please contact: <span className="text-primary">info@oliviaandwilliam.com</span></p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;