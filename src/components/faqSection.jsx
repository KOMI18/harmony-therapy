import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quels sont les bénéfices scientifiquement prouvés de vos cabines ?",
      answer: "Nos cabines intègrent une technologie brevetée de stimulation multisensorielle montrée dans des études cliniques pour réduire le cortisol de 37% et augmenter les ondes alpha cérébrales associées à la relaxation profonde. L'environnement contrôlé optimise l'efficacité des thérapies cognitives et comportementales."
    },
    {
      question: "Comment garantissez-vous la confidentialité des séances ?",
      answer: "Nous utilisons un système d'isolation phonique de classe professionnelle (certification STC 55) et un protocole de nettoyage des données numériques entre chaque client. Aucun enregistrement n'est conservé sans consentement écrit."
    },
    {
      question: "Votre technologie est-elle adaptée aux séances de réalité virtuelle ?",
      answer: "Nos cabines Premium sont équipées pour des expériences VR thérapeutiques avec suivi oculaire et biofeedback. Le système s'interface avec les principales plateformes médicales de réalité virtuelle pour des protocoles personnalisés."
    },
    {
      question: "Proposez-vous des solutions pour les entreprises ?",
      answer: "Nous développons des programmes sur mesure pour les espaces corporate, incluant des modules de gestion du stress en entreprise, des analyses d'impact sur la productivité et des solutions discrètes pour les espaces de travail partagés."
    },
    {
      question: "Quelle est votre approche en matière d'accessibilité ?",
      answer: "Nos cabines sont conçues selon les normes ADA avec options d'adaptation pour différents besoins : commandes vocales, interfaces haptiques, et programmes spécifiques pour les patients neuro-atypiques ou à mobilité réduite."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1]
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f5f9fc]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-2 text-xs font-semibold tracking-wider rounded-full mb-5 uppercase"
            style={{ backgroundColor: '#e1f0fa', color: '#3a7ca5' }}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Questions Fréquentes
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Expertise Thérapeutique <br className="hidden lg:block"/><span style={{ color: '#3a7ca5' }}>Réponses Claires</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre technologie brevetée transforme l'expérience thérapeutique
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              viewport={{ once: true, margin: "-50px" }}
              className="overflow-hidden"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(58, 124, 165, 0.1)"
                }}
                whileTap={{ scale: 0.99 }}
                className={`w-full flex justify-between items-center p-7 text-left rounded-xl transition-all ${activeIndex === index ? 'shadow-md' : 'shadow-sm hover:shadow-md'}`}
                style={{ 
                  backgroundColor: activeIndex === index ? '#3a7ca5' : 'white',
                  border: activeIndex === index ? 'none' : '1px solid #e5e7eb'
                }}
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg md:text-xl font-medium pr-6 ${activeIndex === index ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 p-2 rounded-full ${activeIndex === index ? 'bg-white/20' : 'bg-gray-100'}`}
                >
                  <ChevronDown className="h-5 w-5" style={{ color: activeIndex === index ? 'white' : '#3a7ca5' }} />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={answerVariants}
                    className="overflow-hidden"
                  >
                    <div 
                      className="px-7 pb-7 pt-5 rounded-b-xl"
                      style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid #3a7ca5' }}
                    >
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-700 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-6">Votre question ne figure pas dans la liste ?</p>
          <a
            href="#contact"
            whileHover={{ 
              y: -2,
              boxShadow: "0 10px 25px -5px rgba(58, 124, 165, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl font-medium text-lg transition-all"
            style={{ 
              backgroundColor: '#3a7ca5', 
              color: 'white',
              boxShadow: '0 4px 20px -5px rgba(58, 124, 165, 0.4)'
            }}
          >
            Contacter nous
            <span className="ml-2 inline-block">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;