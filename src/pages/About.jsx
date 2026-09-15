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
        title="About Me | Shahbaz Ansari | Web Developer"
        description="A Full-Stack Web Developer from Pakistan specializing in React, Next.js, Node.js, responsive websites, and modern web applications."
        keywords="About Shahbaz Ansari, Shahbaz Ansari, Full-Stack Web Developer, React Developer, Next.js Developer, Node.js Developer, Web Developer Pakistan"
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
