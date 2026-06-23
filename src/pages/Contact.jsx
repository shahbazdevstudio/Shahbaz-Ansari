import React from 'react'
import ContactHeroSection from '../components/contact/HeroSection'
import Navbar from '../components/navbar/Navbar'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/home/Footer'

const ContactPage = () => {
  return (
    <>
    <Navbar/>
      <ContactHeroSection />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default ContactPage
