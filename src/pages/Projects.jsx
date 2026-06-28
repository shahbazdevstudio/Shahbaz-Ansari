import React from "react";
import ProjectsHeroSection from "../components/projects/HeroSection";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ContactSection from "../components/home/Contact";
import ProjectsFAQ from "../components/projects/ProjectsFAQ";
import SEO from "../components/seo/SEO";

const ProjectsPage = () => {
  return (
    <>
      <SEO
        title="Web Development Portfolio"
        description="Explore the web development portfolio of Shahbaz Ansari, showcasing React, Next.js, MERN Stack, responsive websites, and custom web applications."
        keywords="Shahbaz Ansari Portfolio, Web Development Portfolio, Full Stack Web Developer, React Developer, Next.js Developer, MERN Stack Developer, JavaScript Projects, Responsive Websites, Custom Web Applications, Web Developer Pakistan"
        path="/projects"
      />
      <Navbar />
      <ProjectsHeroSection />
      <ProjectsGrid />
      <ContactSection />
      <ProjectsFAQ />
      <Footer />
    </>
  );
};

export default ProjectsPage;
