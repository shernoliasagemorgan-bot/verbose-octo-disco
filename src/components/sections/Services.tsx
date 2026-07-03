'use client';

import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineRectangleStack, HiOutlinePaintBrush, HiOutlineShieldExclamation, HiOutlineDocumentText, HiOutlineClipboardList } from 'react-icons/hi2';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Accident Repairs',
      icon: HiOutlineSparkles,
      description: 'Comprehensive collision damage repair',
    },
    {
      id: 2,
      title: 'Panel Beating',
      icon: HiOutlineRectangleStack,
      description: 'Expert dent removal and reshaping',
    },
    {
      id: 3,
      title: 'Spray Painting',
      icon: HiOutlinePaintBrush,
      description: 'Premium custom paint finishes',
    },
    {
      id: 4,
      title: 'Bumper Repairs',
      icon: HiOutlineShieldExclamation,
      description: 'Bumper restoration services',
    },
    {
      id: 5,
      title: 'Insurance Claims',
      icon: HiOutlineDocumentText,
      description: 'Direct insurance claim handling',
    },
    {
      id: 6,
      title: 'Vehicle Assessment',
      icon: HiOutlineClipboardList,
      description: 'Professional damage evaluation',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            OUR <span className="text-gradient-red">SERVICES</span>
          </h2>
          <p className="text-muted font-inter max-w-2xl mx-auto">
            Comprehensive auto body repair solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-lg glass-hover border-l-4 border-primary group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 p-4 rounded-lg bg-primary/10 w-fit"
                >
                  <Icon size={40} className="text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold font-inter mb-3">{service.title}</h3>
                <p className="text-muted font-inter text-sm leading-relaxed">
                  {service.description}
                </p>
                <motion.div
                  className="mt-4 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
