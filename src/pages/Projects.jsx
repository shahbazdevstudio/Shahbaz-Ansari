import { useState } from "react";
import ProjectsHeroSection from "../components/projects/HeroSection";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ContactSection from "../components/home/Contact";
import ProjectsFAQ from "../components/projects/ProjectsFAQ";
import SEO from "../components/seo/SEO";
import { useProjects } from "../lib/useRemoteData";

const ProjectsPage = () => {
  const projects = useProjects([]);
  const [filter, setFilter] = useState("All");
  const schema = projects.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Web development projects by Shahbaz Ansari",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            description: p.description,
            image: p.image,
            url: p.demo || undefined,
            author: { "@type": "Person", name: "Shahbaz Ansari" },
          },
        })),
      }
    : null;
  return (
    <>
      <SEO
        title="Projects | Shahbaz Ansari | Web Developer"
        description="Explore Shahbaz Ansari's web development projects, including custom web applications built with React, Next.js, Node.js, and modern web technologies."
        keywords="Shahbaz Ansari Projects, Web Development Portfolio, Full-Stack Web Developer, React Projects, Next.js Projects, Web Developer Pakistan"
        path="/projects"
        schema={schema}
      />
      <Navbar />
      <ProjectsHeroSection activeFilter={filter} onFilterChange={setFilter} />
      <ProjectsGrid activeFilter={filter} />
      <ContactSection />
      <ProjectsFAQ />
      <Footer />
    </>
  );
};

export default ProjectsPage;
