import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600)'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <motion.div 
        className="text-center z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1.0]
        }}
      >
        <motion.p 
          className="text-white font-body tracking-[0.3em] text-sm md:text-base mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          WE ARE GETTING MARRIED
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Olivia & William
        </motion.h1>
        
        <motion.div 
          className="divider bg-white mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 0.9 }}
        ></motion.div>
        
        <motion.p 
          className="text-white font-heading italic text-xl md:text-2xl mt-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          June 15, 2025
        </motion.p>
        
        <motion.a 
          href="#details"
          className="button-outline text-white border-white hover:bg-white hover:text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          Our Story
        </motion.a>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="float-animation">
          <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="28" height="46" rx="14" stroke="white" strokeWidth="2"/>
            <circle className="scroll-dot" cx="15" cy="15" r="5" fill="white">
              <animate attributeName="cy" values="15;25;15" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;