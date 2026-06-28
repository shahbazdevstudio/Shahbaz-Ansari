import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TestimonialsHeroSection from "../components/testimonials/HeroSection";
import TestimonialSwiper from "../components/testimonials/TestimonialSwiper";
import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";
import VideoTestimonials from "../components/testimonials/VideoTestimonials";
import ContactHeroSection from "../components/contact/HeroSection";
import ContactSection from "../components/home/Contact";
import TestimonialFAQ from "../components/testimonials/TestimonialFAQ";
import SEO from "../components/seo/SEO";

const TestimonialsPage = () => {
  return (
    <>
      <SEO
        title="Client Testimonials | Full Stack Web Developer"
        description="Read client testimonials about Shahbaz Ansari, a Full Stack Web Developer trusted for React, Next.js, MERN Stack, and custom web application development."
        keywords="Client Testimonials, Shahbaz Ansari Reviews, Full Stack Web Developer, React Developer, Next.js Developer, MERN Stack Developer, Web Development Reviews, Freelance Web Developer, Web Developer Pakistan"
        path="/testimonials"
      />
      <Navbar />
      <TestimonialsHeroSection />
      <TestimonialSwiper />
      <ContactSection />
      <TestimonialFAQ />
      <Footer />
    </>
  );
};

export default TestimonialsPage;
