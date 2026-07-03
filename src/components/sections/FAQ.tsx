'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'How long does a typical repair take?',
      answer: 'Repair time depends on the damage severity. Minor repairs can take 1-2 days, while major repairs may take 1-2 weeks. We\'ll provide an accurate timeline during the assessment.',
    },
    {
      question: 'Do you work with insurance companies?',
      answer: 'Yes, we work directly with all major insurance companies and handle claims on your behalf. This makes the process seamless for you.',
    },
    {
      question: 'What is your warranty?',
      answer: 'We offer a 3-year warranty on all repairs, ensuring complete peace of mind and confidence in our work quality.',
    },
    {
      question: 'Do you provide a loaner vehicle?',
      answer: 'Yes, we provide complimentary loaner vehicles for major repairs lasting more than one day. Subject to availability.',
    },
    {
      question: 'Can I get an estimate online?',
      answer: 'We recommend sending us photos of the damage for a preliminary estimate. However, an in-person inspection provides the most accurate quote.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            FREQUENTLY ASKED <span className="text-gradient-red">QUESTIONS</span>
          </h2>
          <p className="text-muted font-inter">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-lg overflow-hidden glass-hover"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left group"
              >
                <h3 className="text-lg font-semibold font-inter group-hover:text-primary transition-colors">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary flex-shrink-0 ml-4"
                >
                  <HiChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6 border-t border-primary/20"
                  >
                    <p className="text-muted font-inter leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
