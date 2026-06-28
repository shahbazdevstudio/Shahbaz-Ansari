import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/home/HeroSection'
import TechMarquee from '../components/home/TechMarquee'
import AboutMe from '../components/home/AboutMe'
import MySkills from '../components/home/MySkills'
import MyProjects from '../components/home/MyProjects'
import TestimonialsSection from '../components/home/Testimonials'
import ContactSection from '../components/home/Contact'
import FAQSection from '../components/home/FAQSection'
import Footer from '../components/footer/Footer'
import SEO from '../components/seo/SEO'

const HomePage = () => {
  return (
    <>
      <SEO
        title="Full Stack Web Developer"
        description="Professional Full Stack Web Developer from Pakistan specializing in React, Next.js, MERN Stack, responsive websites, and custom web applications."
        keywords="Shahbaz Ansari, Full Stack Web Developer, React Developer, MERN Stack Developer, Portfolio"
        path="/"
      />
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default HomePage
