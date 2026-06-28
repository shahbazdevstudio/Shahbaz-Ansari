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
        title="Contact | Hire Full Stack Web Developer"
        description="Contact Shahbaz Ansari, a Full Stack Web Developer from Pakistan specializing in React, Next.js, MERN Stack, custom web applications."
        keywords="Contact Shahbaz Ansari, Hire Full Stack Web Developer, React Developer, Next.js Developer, MERN Stack Developer, Freelance Web Developer, Web Developer Pakistan, Custom Web Applications, Responsive Website Development"
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
