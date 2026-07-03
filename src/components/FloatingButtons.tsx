'use client';

import { motion } from 'framer-motion';
import { HiPhone, HiMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
  const whatsappNumber = '1234567890'; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    'Hello, I\'d like to request a quotation for my vehicle repair.'
  );

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-4 bg-success hover:bg-green-700 text-white rounded-full shadow-lg z-40 transition-all duration-300 animate-glow"
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Floating Call Button */}
      <motion.a
        href="tel:+1234567890"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-6 p-4 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg z-40 transition-all duration-300 hidden sm:flex items-center justify-center"
      >
        <HiPhone size={24} />
      </motion.a>
    </>
  );
};

export default FloatingButtons;
