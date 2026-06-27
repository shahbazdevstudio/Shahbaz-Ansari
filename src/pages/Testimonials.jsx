import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/home/Footer'
import TestimonialsHeroSection from '../components/testimonials/HeroSection'
import TestimonialSwiper from '../components/testimonials/TestimonialSwiper'
import TestimonialsGrid from '../components/testimonials/TestimonialsGrid'
import VideoTestimonials from '../components/testimonials/VideoTestimonials'
import ContactHeroSection from '../components/contact/HeroSection'
import ContactSection from '../components/home/Contact'
import TestimonialFAQ from '../components/testimonials/TestimonialFAQ'

const TestimonialsPage = () => {
  return (
    <>
      <Navbar/>
      <TestimonialsHeroSection />
      <TestimonialSwiper/>
      <ContactSection />
      <TestimonialFAQ/>
      <Footer />
    </>
  )
}

export default TestimonialsPage
