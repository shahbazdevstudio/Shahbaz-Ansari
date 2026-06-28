import React from "react";
import ServicesHeroSection from "../components/services/HeroSection";
import Navbar from "../components/navbar/Navbar";
import ServicesList from "../components/services/ServicesList";
import ServicesProcess from "../components/services/ServicesProcess";
import ContactSection from "../components/home/Contact";
import Footer from "../components/footer/Footer";
import ServicesFAQ from "../components/services/ServicesFAQ";
import SEO from "../components/seo/SEO";

const ServicesPage = () => {
  return (
    <>
<SEO
  title="Web Development Services"
  description="Explore professional web development services by Shahbaz Ansari, specializing in React, Next.js, MERN Stack, and custom web applications."
  keywords="Web Development Services, Shahbaz Ansari, React Developer, Next.js Developer, MERN Stack Developer, Full Stack Web Developer, Custom Web Applications, Responsive Website Development, Freelance Web Developer, Web Developer Pakistan"
  path="/services"
/>
      <Navbar />
      <ServicesHeroSection />
      <ServicesList />
      <ServicesProcess />
      <ContactSection />
      <ServicesFAQ />
      <Footer />
    </>
  );
};

export default ServicesPage;
