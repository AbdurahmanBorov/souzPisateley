import React from 'react';
import WorkCard from '../AboutUs/WorkCard/WorkCard';
import './Creation.scss'

const Creation = () => {
  return (
    <div className='creation container'>
      <h2 className='section-title'>Творчество</h2>
      <div className="creation__items">
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
  );
};

export default Creation;