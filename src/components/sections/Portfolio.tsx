'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'before-after',
      title: 'Red Sports Car Restoration',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop',
      label: 'Before & After',
    },
    {
      id: 2,
      category: 'paint',
      title: 'Premium Paint Finish',
      image: 'https://images.unsplash.com/photo-1487754180144-351b8e2b786d?w=500&h=500&fit=crop',
      label: 'Paint Work',
    },
    {
      id: 3,
      category: 'collision',
      title: 'Collision Repair',
      image: 'https://images.unsplash.com/photo-1581274455760-c31e238e3054?w=500&h=500&fit=crop',
      label: 'Collision Repairs',
    },
    {
      id: 4,
      category: 'before-after',
      title: 'Full Body Restoration',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=500&fit=crop',
      label: 'Before & After',
    },
    {
      id: 5,
      category: 'paint',
      title: 'Metallic Paint Application',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=500&fit=crop',
      label: 'Paint Work',
    },
    {
      id: 6,
      category: 'collision',
      title: 'Impact Damage Repair',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=500&fit=crop',
      label: 'Collision Repairs',
    },
  ];

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'before-after', label: 'Before & After' },
    { value: 'paint', label: 'Paint Work' },
    { value: 'collision', label: 'Collision Repairs' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            OUR WORK <span className="text-gradient-red">SPEAKS FOR ITSELF</span>
          </h2>
          <p className="text-muted font-inter max-w-2xl mx-auto">
            Browse our portfolio of premium collision repairs and restorations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-inter font-semibold transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'glass text-text glass-hover'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold font-inter mb-2">{item.title}</h3>
                <span className="inline-block w-fit px-3 py-1 bg-primary text-white rounded text-sm font-inter">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
