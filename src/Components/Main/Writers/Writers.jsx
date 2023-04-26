import React from 'react';
import WritersCard from '../AboutUs/WritersCard/WritersCard';
import './Writers.scss'

const Writers = () => {
  return (
    <div className='about-writers container'>
      <h2 className='section-title'>Писатели</h2>
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
  );
};

export default Writers;