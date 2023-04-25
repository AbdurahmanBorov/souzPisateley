import React from 'react'
import './About.scss'
import ProjectCard from '../Cards/ProjectCard/ProjectCard'
import WritersCard from '../Cards/WritersCard/WritersCard'
import WorkCard from '../Cards/WorkCard/WorkCard'
import Button from '../UI/Button/Button'

export const About = () => {
    return (
        <main className='about'>
            <section className="projects container">
                <h2 className="projects__title">О нас</h2>
                <h3 className="projects__subtitle">Проекты</h3>
                <div className="projects__items">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className='projects__button about-button'><Button /></div>
            </section>
            <section className="writers container">
                <h3 className="writers__subtitle">Писатели</h3>
                <div className="writers__items">
                    <WritersCard />
                    <WritersCard />
                    <WritersCard />
                </div>
                <div className='writers__button about-button'><Button /></div>
            </section>
            <section className="works container">
                <h3 className="works__subtitle">Творчество</h3>
                <div className="works__items">
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                </div>
                <div className='works__button about-button'><Button /></div>
            </section>
        </main>
    )
}

export default About