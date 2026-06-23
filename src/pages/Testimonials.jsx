import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/home/Footer'
import TestimonialsHeroSection from '../components/testimonials/HeroSection'
import TestimonialSwiper from '../components/testimonials/TestimonialSwiper'
import TestimonialsGrid from '../components/testimonials/TestimonialsGrid'
import VideoTestimonials from '../components/testimonials/VideoTestimonials'
import ContactHeroSection from '../components/contact/HeroSection'
import ContactSection from '../components/home/Contact'

const TestimonialsPage = () => {
  return (
    <>
      <Navbar/>
      <TestimonialsHeroSection />
      <TestimonialSwiper/>
      <TestimonialsGrid />
      <ContactSection />
      <Footer />
    </>
  )
}

export default TestimonialsPage
