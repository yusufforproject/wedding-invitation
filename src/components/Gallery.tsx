import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  {
    src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Couple on beach"
  },
  {
    src: "https://images.pexels.com/photos/1391580/pexels-photo-1391580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Couple holding hands"
  },
  {
    src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Couple at sunset"
  },
  {
    src: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Couple embracing"
  },
  {
    src: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Couple walking"
  },
  {
    src: "https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Outdoor portrait"
  }
];

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading">Our Journey</h2>
          <div className="divider"></div>
          <p className="font-body text-gray-700 max-w-3xl mx-auto mt-6">
            A glimpse into our story and the moments we've shared together.
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md h-64 md:h-80"
              variants={itemVariants}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover gallery-img"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-heading italic text-2xl text-gray-700">
            "From the moment we met, I knew our story was just beginning."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;