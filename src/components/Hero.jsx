import { motion } from 'framer-motion';
export const Hero = () => {
    return (
      <section 
        id="home"
        className="relative min-h-screen flex items-center justify-start bg-gradient-to-r from-[#f8f9fa] to-[#e2f0f9] pt-24 px-6 sm:px-12"
      >
        <div className="max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-6 leading-tight">
              Votre bien-être <span className="text-[#3a7ca5]">psychologique</span> commence ici
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Accompagnement personnalisé pour retrouver équilibre et sérénité dans un cadre bienveillant et confidentiel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="bg-[#3a7ca5] hover:bg-[#2a5a7a] text-white px-8 py-3 rounded-lg font-medium text-center transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Prendre rendez-vous
              </motion.a>
              <motion.a
                href="#services"
                className="border-2 border-[#3a7ca5] text-[#3a7ca5] hover:bg-[#3a7ca5]/10 px-8 py-3 rounded-lg font-medium text-center transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Nos services
              </motion.a>
            </div>
          </motion.div>
        </div>
  
        {/* Illustration ou image optionnelle */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-full bg-[url('/hero.jpg')] bg-cover bg-center" />
      </section>
    );
  };