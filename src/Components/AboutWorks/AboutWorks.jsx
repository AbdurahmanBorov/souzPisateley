import React from 'react'
import WorkCard from '../Cards/WorkCard/WorkCard'
import './AboutWorks.scss'

export const AboutWorks = () => {
  return (
    <div className='about-works container'>
      <h2 className='about-works__title'>Проекты</h2>
      <div className="about-works__items">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  )
}

export default AboutWorks