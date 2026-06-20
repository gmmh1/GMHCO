import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyGMHCO from "@/components/WhyGMHCO";
import Process from "@/components/Process";
import Certifications from "@/components/Certifications";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyGMHCO />
        <Process />
        <Certifications />
        <Portfolio />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <Contact />
        <BookingSection />
      </main>
      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </>
  );
}
