import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Mail, User, X } from 'lucide-react';

const RSVP: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('yes');
  const [guests, setGuests] = useState('0');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to your server
    console.log({
      name,
      email,
      attending,
      guests,
      message
    });
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setName('');
      setEmail('');
      setAttending('yes');
      setGuests('0');
      setMessage('');
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section 
      id="rsvp" 
      className="section parallax"
      style={{
        backgroundImage: 
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600)'
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="max-w-2xl mx-auto bg-white bg-opacity-95 p-8 md:p-12 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-heading">Join Us</h2>
            <div className="divider"></div>
            <p className="font-body text-gray-700 mt-4">
              We look forward to celebrating with you! Please let us know if you will be attending.
            </p>
          </div>
          
          {submitted ? (
            <motion.div 
              className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Check size={24} className="text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-heading text-green-800 mb-2">Thank You!</h3>
              <p className="font-body text-green-700">
                Your RSVP has been submitted successfully. We can't wait to celebrate with you!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="font-body text-gray-700 block mb-2">Your Name*</label>
                <div className="relative flex items-center">
                  <User size={18} className="absolute left-3 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 w-full rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="font-body text-gray-700 block mb-2">Email Address*</label>
                <div className="relative flex items-center">
                  <Mail size={18} className="absolute left-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="font-body text-gray-700 block mb-2">Will you attend?*</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={attending === 'yes'}
                      onChange={() => setAttending('yes')}
                      className="mr-2"
                    />
                    <span className="font-body">Joyfully Accept</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={attending === 'no'}
                      onChange={() => setAttending('no')}
                      className="mr-2"
                    />
                    <span className="font-body">Regretfully Decline</span>
                  </label>
                </div>
              </div>
              
              {attending === 'yes' && (
                <div className="mb-6">
                  <label htmlFor="guests" className="font-body text-gray-700 block mb-2">Number of Guests</label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full rounded-md"
                  >
                    <option value="0">Just me</option>
                    <option value="1">Me + 1 guest</option>
                    <option value="2">Me + 2 guests</option>
                    <option value="3">Me + 3 guests</option>
                  </select>
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="message" className="font-body text-gray-700 block mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-md h-24"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="button-primary w-full rounded-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send RSVP
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;