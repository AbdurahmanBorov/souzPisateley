import React from 'react'
import WritersCard from '../Cards/WritersCard/WritersCard'
import './AboutWriters.scss'

export const AboutWriters = () => {
  return (
    <div className='about-writers container'>
      <h2 className='about-writers__title'>Писатели</h2>
      <div className="about-writers__items">
        <WritersCard />
        <WritersCard />
        <WritersCard />
        <WritersCard />
        <WritersCard />
        <WritersCard />
        <WritersCard />
        <WritersCard />
      </div>
    </div>
  )
}

export default AboutWriters