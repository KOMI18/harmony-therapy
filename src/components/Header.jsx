import React, { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Approche', href: '#approach' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="text-2xl font-bold text-[#3a7ca5]"
          whileHover={{ scale: 1.05 }}
        >
          HarmonyThérapie
        </motion.a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 hover:text-[#3a7ca5] font-medium transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3a7ca5] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Bouton RDV Desktop */}
        <motion.a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-[#3a7ca5] text-white px-4 py-2 rounded-lg hover:bg-[#2a5a7a] transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <Calendar className="w-4 h-4" />
          <span>Prendre RDV</span>
        </motion.a>

        {/* Menu Mobile */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-[#3a7ca5] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#3a7ca5] text-white px-4 py-2 rounded-lg hover:bg-[#2a5a7a] transition-colors mt-4"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre RDV</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};