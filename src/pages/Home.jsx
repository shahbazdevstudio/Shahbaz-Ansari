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
        title="Shahbaz Ansari | Full-Stack Web Developer"
        description="Full-Stack Web Developer from Pakistan specializing in React, Next.js, Node.js, responsive websites, and custom web applications."
        keywords="Shahbaz Ansari, Full-Stack Web Developer, React Developer, Next.js Developer, MERN Stack Developer, Web Developer Pakistan"
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
