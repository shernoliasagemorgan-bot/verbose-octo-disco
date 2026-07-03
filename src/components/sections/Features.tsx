'use client';

import { motion } from 'framer-motion';
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiHeart, HiUser } from 'react-icons/hi';

const Features = () => {
  const features = [
    { icon: HiSparkles, title: 'Quality Repairs', description: 'Premium workmanship' },
    { icon: HiLightningBolt, title: 'Fast Turnaround', description: 'Quick service' },
    { icon: HiShieldCheck, title: 'Insurance Assistance', description: 'Claims support' },
    { icon: HiHeart, title: 'Customer Satisfaction', description: 'Guaranteed' },
    { icon: HiUser, title: 'Qualified Technicians', description: 'Expert team' },
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center glass p-6 rounded-lg glass-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-primary mb-4 p-3 rounded-full bg-primary/10"
                >
                  <Icon size={32} />
                </motion.div>
                <h3 className="text-lg font-semibold font-inter mb-2">{feature.title}</h3>
                <p className="text-muted text-sm font-inter">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
