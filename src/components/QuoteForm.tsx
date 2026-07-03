'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm = ({ isOpen, onClose }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleModel: '',
    damageDescription: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleModel: '',
        damageDescription: '',
      });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-secondary rounded-lg p-8 max-w-md w-full glass"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-montserrat">
                Request a <span className="text-primary">Quote</span>
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary/20 rounded-lg transition-all duration-300"
              >
                <HiX size={24} className="text-primary" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-4xl text-primary mb-4">✓</div>
                <h3 className="text-xl font-semibold font-inter mb-2">Thank You!</h3>
                <p className="text-muted font-inter">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-inter font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary transition-colors duration-300 font-inter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-inter font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary transition-colors duration-300 font-inter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-inter font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8900"
                    required
                    className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary transition-colors duration-300 font-inter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-inter font-semibold mb-2">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    placeholder="2020 Honda Civic"
                    required
                    className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary transition-colors duration-300 font-inter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-inter font-semibold mb-2">
                    Damage Description
                  </label>
                  <textarea
                    name="damageDescription"
                    value={formData.damageDescription}
                    onChange={handleChange}
                    placeholder="Describe the damage..."
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary transition-colors duration-300 font-inter resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-inter font-semibold transition-all duration-300 btn-ripple"
                >
                  Send Request
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteForm;
