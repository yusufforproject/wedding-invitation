import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        <nav className="flex gap-6 md:gap-10">
          <a
            href="#hero"
            className={`text-sm md:text-base font-body tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-primary`}
          >
            HOME
          </a>
          <a
            href="#details"
            className={`text-sm md:text-base font-body tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-primary`}
          >
            DETAILS
          </a>
          <Heart
            size={scrolled ? 24 : 30}
            className={`mx-2 transition-all duration-300 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          />
          <a
            href="#rsvp"
            className={`text-sm md:text-base font-body tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-primary`}
          >
            RSVP
          </a>
          <a
            href="#registry"
            className={`text-sm md:text-base font-body tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-primary`}
          >
            REGISTRY
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;