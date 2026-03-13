import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LoanTypesSection from "../components/LoanTypesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import LoanCalculatorSection from "../components/LoanCalculatorSection";
import ApplyLoanSection from "../components/ApplyLoanSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Contact from "../components/Contact";
import Eligibility from "../components/Eligibility";
import Footer from "../components/Footer";

function Index() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <LoanTypesSection />
            <HowItWorksSection />
            <LoanCalculatorSection />
            <Eligibility />
            <ApplyLoanSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <Contact />
            <Footer />
        </div>
    );
}

export default Index;