import React from 'react'
import AboutHeroSection from '../components/about/HeroSection'
import Navbar from '../components/navbar/Navbar'
import AboutStory from '../components/about/AboutStory'
import AboutCTA from '../components/about/AboutCTA'
import AboutFAQSection from '../components/about/AboutFAQ'
import Footer from '../components/home/Footer'
import ContactSection from '../components/home/Contact'

const AboutPage = () => {
  return (
  <>
  <Navbar/>
  <AboutHeroSection/>
  <AboutStory/>
  <AboutCTA/>
  <ContactSection/>
  <AboutFAQSection/>
  <Footer/>
  </>
  )
}

export default AboutPage
