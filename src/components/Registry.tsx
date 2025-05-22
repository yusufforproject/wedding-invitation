import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GiftIcon, Wallet } from 'lucide-react';

const Registry: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const eWallets = [
    {
      name: "DANA",
      accountName: "Olivia Marie",
      accountNumber: "081234567890"
    },
    {
      name: "OVO",
      accountName: "William James",
      accountNumber: "081234567891"
    },
    {
      name: "SHOPEEPAY",
      accountName: "Olivia Marie",
      accountNumber: "081234567892"
    },
    {
      name: "GOPAY",
      accountName: "William James",
      accountNumber: "081234567893"
    }
  ];

  return (
    <section id="registry" className="section bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading">Wedding Gift</h2>
          <div className="divider"></div>
          <p className="font-body text-gray-700 max-w-3xl mx-auto mt-6">
            Your presence at our wedding is the greatest gift. However, if you wish to honor us with a gift, 
            you may send it through these digital payment methods.
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary-light p-4 rounded-full">
              <Wallet size={32} className="text-primary" />
            </div>
          </div>
          
          <h3 className="text-2xl font-heading mb-4">Digital Wallet</h3>
          <p className="font-body text-gray-700 mb-8">
            Send your wishes through these e-wallet platforms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eWallets.map((wallet, index) => (
              <motion.div 
                key={index}
                className="border border-primary-light p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="font-heading text-xl mb-3 text-primary">{wallet.name}</h4>
                <p className="font-body text-gray-700">
                  {wallet.accountName}<br />
                  <span className="font-semibold">{wallet.accountNumber}</span>
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-8 p-6 bg-primary-light bg-opacity-20 rounded-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="font-body italic text-gray-600">
              Thank you for your generosity and for being part of our special day.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;