import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Patiente depuis 2 ans",
      content: "Mon expérience avec ce thérapeute a changé ma vie. Son approche bienveillante et ses conseils pratiques m'ont aidée à surmonter mon anxiété chronique. Je recommande vivement ses services à quiconque cherche un accompagnement de qualité.",
      rating: 5
    },
    {
      id: 2,
      name: "Thomas Leroy",
      role: "Patient en thérapie de couple",
      content: "Nous avons consulté pour des problèmes de communication dans notre couple. Après seulement quelques séances, nous avons appris à mieux nous écouter et à exprimer nos besoins. Un professionnel à l'écoute et très compétent.",
      rating: 4
    },
    {
      id: 3,
      name: "Émilie Dubois",
      role: "Patiente en ligne",
      content: "Les séances en ligne sont tout aussi efficaces qu'en présentiel. La flexibilité des horaires m'a permis de continuer ma thérapie malgré mon emploi du temps chargé. Je me sens écoutée et comprise à chaque session.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 pour droite, -1 pour gauche

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextTestimonial(),
    onSwipedRight: () => prevTestimonial(),
    trackMouse: true
  });

  return (
    <section id="testimonials" className="py-20 px-6 sm:px-8 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
            Témoignages <span className="text-[#3a7ca5]">de patients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ce que disent ceux qui ont suivi une thérapie
          </p>
        </motion.div>

        <div className="relative" {...handlers}>
          {/* Contrôles */}
          <button 
            onClick={prevTestimonial}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-md hover:bg-[#3a7ca5] hover:text-white transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-md hover:bg-[#3a7ca5] hover:text-white transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carrousel */}
          <div className="overflow-hidden relative h-[500px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ 
                  x: direction > 0 ? 1000 : -1000, 
                  opacity: 0 
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1 
                }}
                exit={{ 
                  x: direction < 0 ? 1000 : -1000, 
                  opacity: 0 
                }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className=" p-8 md:p-10 rounded-xl bg-[#3a7ca5] shadow-sm h-full flex flex-col">
                  <Quote className="w-10 h-10 text-white  opacity-20 mb-6" />
                  
                  <p className="text-lg md:text-xl text-white italic mb-8 flex-grow">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-white">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#3a7ca5] w-6' : 'bg-gray-300'}`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};