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
        title="Projects | Shahbaz Ansari | Web Developer"
        description="Explore Shahbaz Ansari's web development projects, including custom web applications built with React, Next.js, Node.js, and modern web technologies."
        keywords="Shahbaz Ansari Projects, Web Development Portfolio, Full-Stack Web Developer, React Projects, Next.js Projects, Web Developer Pakistan"
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
