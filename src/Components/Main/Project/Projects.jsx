import React from 'react';
import ProjectCard from '../AboutUs/ProjectCard/ProjectCard';
import './Projects.scss'

const Projects = () => {
  return (
    <div className='about-projects container'>
      <h2 className='section-title'>Проекты</h2>
      <div className="about-projects__items">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;