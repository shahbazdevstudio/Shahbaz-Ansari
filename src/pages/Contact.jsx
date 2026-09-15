import React from "react";
import ContactHeroSection from "../components/contact/HeroSection";
import Navbar from "../components/navbar/Navbar";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import PricingSection from "../components/services/PricingSection";
import SEO from "../components/seo/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact | Shahbaz Ansari | Web Developer"
        description="Get in touch with Shahbaz Ansari, a Full-Stack Web Developer from Pakistan for websites, web applications, and custom development projects."
        keywords="Contact Shahbaz Ansari, Hire Full-Stack Web Developer, React Developer, Next.js Developer, Freelance Web Developer, Web Developer Pakistan"
        path="/contact"
      />
      <Navbar />
      <ContactHeroSection />
      <PricingSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
