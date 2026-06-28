import React from "react";
import AboutHeroSection from "../components/about/HeroSection";
import Navbar from "../components/navbar/Navbar";
import AboutStory from "../components/about/AboutStory";
import AboutCTA from "../components/about/AboutCTA";
import AboutFAQSection from "../components/about/AboutFAQ";
import Footer from "../components/footer/Footer";
import ContactSection from "../components/home/Contact";
import SEO from "../components/seo/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About | Full Stack Web Developer"
        description="Learn more about Shahbaz Ansari, a Full Stack Web Developer from Pakistan specializing in React, Next.js, MERN Stack, and scalable web applications."
        keywords="About Shahbaz Ansari, Shahbaz Ansari, Full Stack Web Developer, React Developer, Next.js Developer, MERN Stack Developer, JavaScript Developer, Node.js Developer, MongoDB Developer, Web Developer Pakistan"
        path="/about-me"
      />
      <Navbar />
      <AboutHeroSection />
      <AboutStory />
      <AboutCTA />
      <ContactSection />
      <AboutFAQSection />
      <Footer />
    </>
  );
};

export default AboutPage;
