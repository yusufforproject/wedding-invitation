import React, { useEffect, useState } from 'react';
import { Clock, MapPin, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Wedding date: June 15, 2025
    const weddingDate = new Date('2025-06-15T16:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const timeBoxes = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-6 my-8">
      {timeBoxes.map((box, index) => (
        <motion.div 
          key={box.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <div className="bg-white shadow-md border border-primary-light px-4 py-3 md:px-6 md:py-4 rounded">
            <span className="text-2xl md:text-4xl font-heading text-primary">
              {box.value.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs md:text-sm mt-2 font-body tracking-wider text-gray-600">
            {box.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const Details: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="details" className="section bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={introRef}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading mb-6">Our Special Day</h2>
          <div className="divider"></div>
          <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 mt-6">
            We invite you to join us in celebrating our love as we begin our journey together. 
            Your presence will make our special day complete as we exchange vows and 
            commit our lives to each other.
          </p>
        </motion.div>

        <CountdownTimer />

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md text-center"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-4">
              <CalendarDays size={48} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading mb-3">When</h3>
            <div className="divider-sm"></div>
            <p className="font-body text-gray-700">Saturday, June 15, 2025</p>
            <p className="font-body text-gray-700 mt-1">4:00 PM - 11:00 PM</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md text-center"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-4">
              <MapPin size={48} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading mb-3">Where</h3>
            <div className="divider-sm"></div>
            <p className="font-body text-gray-700">The Rosewood Estate</p>
            <p className="font-body text-gray-700 mt-1">123 Blossom Way</p>
            <p className="font-body text-gray-700">Lakeside, CA 92040</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md text-center"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-4">
              <Clock size={48} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading mb-3">Schedule</h3>
            <div className="divider-sm"></div>
            <p className="font-body text-gray-700">Ceremony: 4:00 PM</p>
            <p className="font-body text-gray-700 mt-1">Cocktail Hour: 5:00 PM</p>
            <p className="font-body text-gray-700 mt-1">Reception: 6:00 PM</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-24 max-w-4xl mx-auto text-center p-8 md:p-12 bg-white shadow-lg rounded-lg border border-primary-light relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-24 h-24 opacity-10">
            <img 
              src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Floral decoration" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 transform rotate-180">
            <img 
              src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Floral decoration" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <h3 className="text-3xl font-heading mb-6 gold-text">With great joy</h3>
          <p className="font-body text-gray-700 leading-relaxed mb-4">
            <span className="font-heading text-xl">Mr. & Mrs. Johnson</span>
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-4">
            request the honor of your presence at the marriage of their daughter
          </p>
          <h2 className="text-4xl font-display my-3 text-primary">Olivia Marie</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-4">to</p>
          <h2 className="text-4xl font-display my-3 text-primary">William James</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-4">
            <span className="font-heading text-xl">son of Mr. & Mrs. Anderson</span>
          </p>
          
          <div className="divider"></div>
          
          <p className="font-body italic text-gray-700">
            "Love is patient, love is kind. It always protects, always trusts, 
            always hopes, always perseveres. Love never fails."
          </p>
          <p className="font-body text-gray-500 mt-2">— 1 Corinthians 13:4-8</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;