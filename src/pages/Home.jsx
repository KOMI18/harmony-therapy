import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { ApproachSection } from "../components/ApprocheSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutTherapist } from "../components/Apropos";
import { ContactSection } from "../components/ContactSection";
import { TherapistFooter } from "../components/Footer";
import { TestimonialsSection } from "../components/TestimonialSection";
import { FAQSection } from "../components/faqSection";
export const Home = () => {
    return (
        <div className="min-h-screen">
            <Header/>

            <Hero/>
            <ApproachSection/>
            <ServicesSection/>
            <AboutTherapist/>
            <TestimonialsSection/>
            <FAQSection/>
            <ContactSection/>
            <TherapistFooter/>
        </div>
    );

}