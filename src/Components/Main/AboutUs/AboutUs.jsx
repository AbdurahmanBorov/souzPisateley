import React from 'react';
import ButtonLink from '../../UI/ButtonLink/ButtonLink'
import ProjectCard from './ProjectCard/ProjectCard';
import './AboutUs.scss'
import WritersCard from './WritersCard/WritersCard';
import WorkCard from './WorkCard/WorkCard';

const AboutUs = () => {
  return (
    <section className='aboutUs'>
      <div className="projects container">
        <h2 className="section-title section-title_aboutUs">О нас</h2>
        <h3 className="aboutUs__subtitle">Проекты</h3>
        <div className="projects__items">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
        <div className='aboutUs-button'><ButtonLink to='../projects' /></div>
      </div>

      <div className="writers container">
        <h3 className="aboutUs__subtitle">Писатели</h3>
        <div className="writers__items">
          <WritersCard />
          <WritersCard />
          <WritersCard />
        </div>
        <div className='aboutUs-button'><ButtonLink to='../writers' /></div>
      </div>

      <div className="works container">
        <h3 className="aboutUs__subtitle">Творчество</h3>
        <div className="works__items">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
        <div className='aboutUs-button'><ButtonLink to='../creation' /></div>
      </div> 
    </section>
  );
};

export default AboutUs;