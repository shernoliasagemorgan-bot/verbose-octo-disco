'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle, HiShieldCheck, HiSparkles, HiLightningBolt } from 'react-icons/hi';

const Trust = () => {
  const badges = [
    { icon: HiCheckCircle, title: '100% Satisfaction', subtitle: 'Guaranteed' },
    { icon: HiShieldCheck, title: 'Qualified', subtitle: 'Technicians' },
    { icon: HiSparkles, title: 'Quality', subtitle: 'Materials Used' },
    { icon: HiLightningBolt, title: 'Fast &', subtitle: 'Reliable Service' },
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16"
        >
          WHY CHOOSE <span className="text-primary">CMORGZ</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-lg text-center glass-hover group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl text-primary mb-4 inline-block"
                >
                  <Icon />
                </motion.div>
                <h3 className="text-lg font-semibold font-inter mb-2">{badge.title}</h3>
                <p className="text-muted font-inter text-sm">{badge.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trust;
