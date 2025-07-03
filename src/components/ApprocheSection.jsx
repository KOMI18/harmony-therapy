import { motion } from "framer-motion";

export const ApproachSection = () => {
  const approaches = [
    {
      title: "Écoute active",
      description: "Une écoute bienveillante et sans jugement pour comprendre vos besoins profonds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 ">
          <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
          <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
        </svg>
      )
    },
    {
      title: "Thérapie cognitive",
      description: "Identification et modification des schémas de pensée négatifs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 ">
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873.75.75 0 0 1-.472-1.367 11.577 11.577 0 0 0 5.9-1.756H3.375a.75.75 0 0 1-.75-.75ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.36-1.18.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>
      )
    },
    {
      title: "Approche holistique",
      description: "Considération de l'individu dans sa globalité (corps-esprit-environnement).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 ">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 1-1.06-1.06 3.75 3.75 0 0 1 5.304 0 .75.75 0 1 1-1.06 1.06 2.25 2.25 0 0 0-3.182 0 2.25 2.25 0 0 0 0 3.182.75.75 0 0 1-1.06 1.06 3.75 3.75 0 0 1 0-5.304ZM12 12a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 12 12Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Confidentialité absolue",
      description: "Un espace sûr où tout ce qui est partagé reste strictement confidentiel.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 ">
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id="approach" className="py-20 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-2 bg-[#3a7ca5]/10 text-[#3a7ca5] rounded-full mb-6">
            <span className="font-semibold">Notre Méthode</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4">
            Une approche <span className="text-[#3a7ca5]">humaine</span> et professionnelle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous combinons expertise clinique et bienveillance pour un accompagnement sur mesure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Fond décoratif */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#3a7ca5]"></div>
              
              {/* Contenu */}
              <div className="relative z-10">
                <div className="bg-[#3a7ca5]/10 p-3 rounded-full w-16 h-16 flex text-[#3a7ca5] items-center justify-center mb-6 group-hover:bg-[#3a7ca5] group-hover:text-white transition-colors">
                  {approach.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-3 group-hover:text-[#3a7ca5] transition-colors">
                  {approach.title}
                </h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>

              {/* Effet hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-[#f8f9fa] group-hover:opacity-0 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA supplémentaire */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-[#3a7ca5] hover:bg-[#2a5a7a] text-white font-medium rounded-lg shadow-lg transition-all"
          >
            Prendre rendez-vous
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};