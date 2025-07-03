import { motion } from "framer-motion";
import { Phone, Calendar,MapPin,Mail, Menu, X } from 'lucide-react';

export const ContactSection = () => {
    return (
      <section id="contact" className="py-20 px-6 sm:px-8 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
              Prendre <span className="text-[#3a7ca5]">rendez-vous</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contactez-moi pour une première consultation ou pour toute question
            </p>
          </motion.div>
  
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-[#2c3e50] mb-6">Formulaire de contact</h3>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Nom complet</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3a7ca5] focus:border-transparent"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3a7ca5] focus:border-transparent"
                    placeholder="Votre email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3a7ca5] focus:border-transparent"
                    placeholder="Votre numéro"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3a7ca5] focus:border-transparent"
                    placeholder="Décrivez brièvement votre demande..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#3a7ca5] hover:bg-[#2a5a7a] text-white py-3 rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer la demande
                </motion.button>
              </form>
            </motion.div>
  
            {/* Informations de contact */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#2c3e50] mb-6">Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#3a7ca5] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Adresse</h4>
                      <p className="text-gray-600">15 Rue de la Sérénité, 75015 Paris</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#3a7ca5] mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Téléphone</h4>
                      <a href="tel:+33123456789" className="text-gray-600 hover:text-[#3a7ca5]">01 23 45 67 89</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#3a7ca5] mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <a href="mailto:contact@harmonytherapie.fr" className="text-gray-600 hover:text-[#3a7ca5]">contact@harmonytherapie.fr</a>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#2c3e50] mb-6">Horaires</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Lundi - Vendredi</span>
                    <span className="text-gray-600">9h - 19h</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Samedi</span>
                    <span className="text-gray-600">10h - 15h</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="font-medium text-gray-700">Dimanche</span>
                    <span className="text-gray-600">Fermé</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };