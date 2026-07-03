'use client';

import { motion } from 'framer-motion';
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiHeart, HiUser } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 parallax bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(7, 7, 7, 0.8) 0%, rgba(23, 23, 23, 0.9) 100%), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight"
        >
          WE RESTORE
          <br />
          <span className="text-gradient-red">MORE THAN JUST</span>
          <br />
          <span className="text-gradient-red">YOUR VEHICLE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted mb-8 font-inter max-w-2xl mx-auto"
        >
          Professional auto body repairs. Quality workmanship. Customer satisfaction guaranteed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-inter font-semibold transition-all duration-300 btn-ripple"
          >
            Request a Quote
          </motion.button>
          <motion.a
            href="https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20request%20a%20quotation%20for%20my%20vehicle%20repair."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-success hover:bg-green-700 text-white rounded-lg font-inter font-semibold transition-all duration-300"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="text-primary text-center">
          <p className="text-sm font-inter mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
