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
        title="Web Development Services | Shahbaz Ansari | Web Developer"
        description="Explore Web development services by Shahbaz Ansari, including React, Next.js, Node.js, responsive websites, custom web applications, and website redesign."
        keywords="Web Development Services, Shahbaz Ansari, Full-Stack Web Developer, React Developer, Next.js Developer, Node.js Developer, Website Development, Web Developer Pakistan"
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
