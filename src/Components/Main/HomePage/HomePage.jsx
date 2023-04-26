import React from 'react';
import writers from '../../../img/Main/writers.png'
import Card from './Card/Card';
import Slider from './Slider/Slider'
import './HomePage.scss'

const HomePage = () => {
  return (
    <section className='homePage'>
      {/* <div className='home'>
        <div className="container">
          <h1 className="home_title">
            Amet minim mollit est 
            sit aliqua dolor
          </h1>
          <p className="home_description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div> */}
      <div className="container">
        {/* <div className='aboutUnionWriters'>
          <div className="text-block">
            <h2 className="section-title section-title_aboutUnionWriters">О союзе писателей</h2>
            <p className='text'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <span className='read-more'>Читать еще...</span>
            </p>
          </div>
          <div className="img-block">
            <img src={writers} alt="writers" />
          </div>
        </div>
        <div className='prizes'>
          <h2 className="section-title">Премии</h2>
          <div className="prizes-blocks">
            <Card />
            <Card />
            <Card />
          </div>
        </div> */}
        <div className='gallery'>
          <h2 className="section-title">Галерея</h2>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default HomePage;