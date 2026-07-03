'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiPhone, HiMail, HiMapPin, HiClock } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Accident Repairs', href: '#services' },
        { label: 'Panel Beating', href: '#services' },
        { label: 'Spray Painting', href: '#services' },
        { label: 'Insurance Claims', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Work', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const contactInfo = [
    { icon: HiPhone, label: 'Phone', value: '+1 (234) 567-8900', href: 'tel:+12345678900' },
    { icon: HiMail, label: 'Email', value: 'info@cmorgz.com', href: 'mailto:info@cmorgz.com' },
    { icon: HiMapPin, label: 'Address', value: '123 Auto Body Street, City, State 12345', href: '#' },
    { icon: HiClock, label: 'Hours', value: 'Mon-Fri: 8am-6pm | Sat: 9am-4pm', href: '#' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="bg-secondary pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="#" className="text-2xl font-bold font-montserrat mb-4 inline-block">
              <span className="text-primary">CMORGZ</span>
              <span className="text-text ml-2">Auto</span>
            </Link>
            <p className="text-muted font-inter text-sm leading-relaxed">
              Premium auto body repair services with quality workmanship and customer satisfaction guaranteed.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold font-inter mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-primary transition-colors duration-300 font-inter text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 pb-12 border-b border-primary/20"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                whileHover={{ x: 5 }}
                className="glass p-6 rounded-lg glass-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-muted text-sm font-inter mb-1">{info.label}</p>
                    <p className="text-text font-inter text-sm font-semibold">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <p className="text-muted text-sm font-inter mb-6 md:mb-0">
            © {currentYear} CMORGZ Auto Body Repairs. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#D71920' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
