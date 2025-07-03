
import { Icon , Facebook, Twitter, Instagram, Linkedin ,Calendar,MapPin,Mail, Menu, X } from 'lucide-react';

export const TherapistFooter = () => {
    return (
      <footer className="bg-[#2c3e50] text-white py-12 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">HarmonyThérapie</h3>
            <p className="text-gray-300 mb-4">
              Accompagnement psychologique personnalisé pour votre bien-être mental et émotionnel.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
  
          <div>
            <h4 className="font-bold mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              {['Mentions légales', 'Politique de confidentialité', 'CGV', 'Plan du site'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Abonnez-vous pour recevoir des conseils bien-être et des actualités.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email"
                className="px-4 py-2 rounded-l text-gray-800 w-full focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-[#3a7ca5] hover:bg-[#2a5a7a] px-4 py-2 rounded-r transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
  
        <div className="max-w-5xl mx-auto pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} HarmonyThérapie - Tous droits réservés</p>
          <p className="mt-1">Site créé avec passion pour votre bien-être</p>
        </div>
      </footer>
    );
  };