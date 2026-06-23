import React from 'react'
import ProjectsHeroSection from '../components/projects/HeroSection'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/home/Footer'
import ProjectsGrid from '../components/projects/ProjectsGrid'

const ProjectsPage = () => {
  return (
    <>
    <Navbar/>
      <ProjectsHeroSection/>
      <ProjectsGrid />
      <Footer/>
    </>
  )
}

export default ProjectsPage
