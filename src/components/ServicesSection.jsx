import { motion } from "framer-motion";

export const ServicesSection = () => {
  const services = [
    {
      title: "Thérapie individuelle",
      duration: "50 min",
      price: "90€",
      description: "Un espace dédié à votre développement personnel et à la résolution de problèmes spécifiques.",
      features: [
        "Séance personnalisée",
        "Approche sur mesure",
        "Suivi régulier",
        "Confidentialité absolue"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Thérapie de couple",
      duration: "1h15",
      price: "120€",
      description: "Amélioration de la communication et résolution des conflits dans un cadre neutre.",
      features: [
        "Médiation professionnelle",
        "Exercices pratiques",
        "Analyse des dynamiques",
        "Outils concrets"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      )
    },
    {
      title: "Consultation en ligne",
      duration: "50 min",
      price: "80€",
      description: "Thérapie à distance via une plateforme sécurisée pour plus de flexibilité.",
      features: [
        "Plateforme sécurisée",
        "Flexibilité horaire",
        "Même efficacité",
        "Depuis votre domicile"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 px-6 sm:px-8 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center bg-[#3a7ca5]/10 text-[#3a7ca5] rounded-full px-6 py-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
              <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
            </svg>
            <span className="font-semibold">Nos Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4">
            Services <span className="text-[#3a7ca5]">thérapeutiques</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement sur mesure pour chaque étape de votre parcours
          </p>
        </motion.div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Bandeau coloré */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3a7ca5] to-[#2a5a7a]"></div>

              {/* Contenu principal */}
              <div className="p-8">
                <div className="bg-[#3a7ca5]/10 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-[#3a7ca5] group-hover:text-white transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#2c3e50] mb-3 group-hover:text-[#3a7ca5] transition-colors">
                  {service.title}
                </h3>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>
                    {service.duration}
                  </span>
                  <span className="text-[#3a7ca5] font-bold text-lg">{service.price}</span>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Liste des caractéristiques */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#3a7ca5] mt-0.5 mr-2 flex-shrink-0">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bouton */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-[#3a7ca5] hover:bg-[#2a5a7a] text-white font-medium rounded-lg transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Choisir ce service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Effet hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-[#f8f9fa] group-hover:opacity-0 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Note supplémentaire */}
        <motion.div
          className="text-center mt-16 bg-[#3a7ca5]/5 p-6 rounded-xl border border-[#3a7ca5]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">
            <strong className="text-[#3a7ca5]">Première séance offerte</strong> - Certaines mutuelles remboursent tout ou partie des séances. N'hésitez pas à nous consulter pour plus d'informations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};