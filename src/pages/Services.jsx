import React from 'react'
import ServicesHeroSection from '../components/services/HeroSection'
import Navbar from '../components/navbar/Navbar'
import ServicesList from '../components/services/ServicesList'
import ServicesProcess from '../components/services/ServicesProcess'
import ContactSection from '../components/home/Contact'
import Footer from '../components/home/Footer'
import ServicesFAQ from '../components/services/ServicesFAQ'

const ServicesPage = () => {
  return (
    <>
    <Navbar />
  <ServicesHeroSection />
  <ServicesList/>
  <ServicesProcess/>
  <ContactSection />
  <ServicesFAQ />
  <Footer />
    </>
  )
}

export default ServicesPage
