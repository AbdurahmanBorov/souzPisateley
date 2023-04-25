import React from 'react';
import magas from '../../../../img/Main/magas.png'
import './Slider.scss'

const Slider = () => {
  let leftCount = 0
  let sliderLine = React.useRef()

  function scrollLeft() {
    leftCount -= 427
    sliderLine.current.style.left = `${leftCount}px`
  }
  
  function scrollRight() {
    console.log(sliderLine.current.clientWidth);
    leftCount += 427
    sliderLine.current.style.left = `${leftCount}px`
  }

  return (
    <>
      <div onClick={scrollRight} className="arrow arrow-left">{'<'}</div>
      <div className="slider">
        <div ref={sliderLine} className="slider-line">
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
          <div className="card">
            <img src={magas} alt="magas"/>
          </div>
        </div>
      </div>
      <div onClick={scrollLeft} className="arrow arrow-rigth">{'>'}</div>
    </>
  );
};

export default Slider;