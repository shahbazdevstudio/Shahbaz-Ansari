import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TestimonialsHeroSection from "../components/testimonials/HeroSection";
import TestimonialSwiper from "../components/testimonials/TestimonialSwiper";
import ContactSection from "../components/home/Contact";
import TestimonialFAQ from "../components/testimonials/TestimonialFAQ";
import SEO from "../components/seo/SEO";
import { useTestimonials } from "../lib/useRemoteData";

const TestimonialsPage = () => {
  const reviews = useTestimonials([]);
  const schema = reviews.length
    ? {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Shahbaz Ansari — Web Development",
        url: "https://www.shahbazansari.pro",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: (reviews.reduce((s, r) => s + (r.rating || 5), 0) / reviews.length).toFixed(1),
          reviewCount: reviews.length,
          bestRating: 5,
        },
        review: reviews.slice(0, 10).map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewBody: r.message,
          reviewRating: { "@type": "Rating", ratingValue: r.rating || 5, bestRating: 5 },
        })),
      }
    : null;
  return (
    <>
      <SEO
        title="Client Testimonials | Shahbaz Ansari | Web Developer"
        description="Read feedback from clients who have worked with Shahbaz Ansari on websites, web applications, and custom web development projects."
        keywords="Client Testimonials, Shahbaz Ansari Reviews, Web Developer Reviews, Full-Stack Web Developer, Freelance Web Developer, Web Development"
        path="/testimonials"
        schema={schema}
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
