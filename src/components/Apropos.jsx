import { motion } from "framer-motion";
export const AboutTherapist = () => {
    return (
      <section id="about" className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="relative h-80 lg:h-full rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/doctors2.jpg"
              alt="Portrait du thérapeute"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-bold">Marie Dupont</h3>
              <p className="text-white/80">Psychologue clinicienne</p>
            </div>
          </motion.div>
  
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6">
              Un accompagnement <span className="text-[#3a7ca5]">professionnel</span> et bienveillant
            </h2>
            
            <div className="space-y-6 text-gray-600 mb-8">
              <p>
                Diplômée en psychologie clinique de l'Université de Paris avec plus de 10 ans d'expérience, 
                je me suis spécialisée dans les thérapies cognitivo-comportementales (TCC) et les approches centrées sur la personne.
              </p>
              <p>
                Mon parcours m'a permis d'accompagner des centaines de patients à travers des défis variés : 
                gestion du stress, troubles anxieux, dépression, difficultés relationnelles et bien d'autres.
              </p>
              <p>
                Je suis membre agréée de la Fédération Française des Psychologues et respecte strictement 
                le code de déontologie de la profession.
              </p>
            </div>
  
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#f8f9fa] p-4 rounded-lg">
                <h4 className="font-bold text-[#2c3e50] mb-1">Formations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Master en Psychologie Clinique</li>
                  <li>• Certificat en TCC</li>
                  <li>• Formation en psychotraumatologie</li>
                </ul>
              </div>
              <div className="bg-[#f8f9fa] p-4 rounded-lg">
                <h4 className="font-bold text-[#2c3e50] mb-1">Approches</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Thérapie cognitive</li>
                  <li>• Approche humaniste</li>
                  <li>• Pleine conscience</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };