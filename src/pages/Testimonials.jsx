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
        title="Client Testimonials | Shahbaz Ansari | Web Developer"
        description="Read feedback from clients who have worked with Shahbaz Ansari on websites, web applications, and custom web development projects."
        keywords="Client Testimonials, Shahbaz Ansari Reviews, Web Developer Reviews, Full-Stack Web Developer, Freelance Web Developer, Web Development"
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
