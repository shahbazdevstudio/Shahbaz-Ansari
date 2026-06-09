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
import Footer from '../components/home/Footer'

const HomePage = () => {
  return (
<>
      <Navbar/>
      <HeroSection/>
      <TechMarquee/>
      <AboutMe/>  
      <MySkills/>
      <MyProjects/>
      <TestimonialsSection/>
      <ContactSection/>
      <FAQSection/>
      <Footer/>
</>
  )
}

export default HomePage
