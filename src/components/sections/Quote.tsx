'use client';

import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Quote = () => {
  return (
    <section id="quote" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              Need a <span className="text-primary">Quote?</span>
            </h2>
            <p className="text-muted font-inter text-lg mb-6 leading-relaxed">
              Send us details and photos of your vehicle damage and we'll respond with a quotation within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-inter font-semibold transition-all duration-300 btn-ripple w-full"
            >
              Request a Quote
            </motion.button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20request%20a%20quotation%20for%20my%20vehicle%20repair."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-lg glass-hover block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-success/20 rounded-lg">
                  <FaWhatsapp size={24} className="text-success" />
                </div>
                <h3 className="text-xl font-semibold font-inter">Chat With Us Directly</h3>
              </div>
              <p className="text-muted font-inter">
                Send photos through WhatsApp for a quick response
              </p>
            </motion.a>

            {/* Call Card */}
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-lg glass-hover block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <HiPhone size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-inter">Call Us</h3>
              </div>
              <p className="text-muted font-inter">
                Speak directly with our team
              </p>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:info@cmorgz.com"
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-lg glass-hover block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-muted/20 rounded-lg">
                  <HiMail size={24} className="text-muted" />
                </div>
                <h3 className="text-xl font-semibold font-inter">Email Us</h3>
              </div>
              <p className="text-muted font-inter">
                Send us an email with your details
              </p>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
