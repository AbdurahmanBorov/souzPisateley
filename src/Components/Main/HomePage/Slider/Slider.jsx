import React from 'react';
import magas from '../../../../img/Main/magas.png'
import './Slider.scss'

const Slider = () => {
  let count = 0
  let slider = React.useRef()

  let scrollRigth = () => {
    count++
    let imgs = slider.current.querySelectorAll('.slider-line img')
    let sliderLine = slider.current.querySelector('.slider-line')
    let width = imgs[0].offsetWidth
    let imgCount = imgs.length

    if (count-1 == (imgCount - Math.ceil(slider.current.offsetWidth / (width+27)))) {
      count = 0
      sliderLine.style.left = `0px`
      return
    }
    
    sliderLine.style.left = `-${count * width + (27*count)}px`
  }

  let scrollLeft = () => {
    count--
    let imgs = slider.current.querySelectorAll('.slider-line img')
    let sliderLine = slider.current.querySelector('.slider-line')
    let width = imgs[0].offsetWidth
    let imgCount = imgs.length

    if (count+1 == 0) {
      count = (imgCount - Math.ceil(slider.current.offsetWidth / (width+27)))
      
      sliderLine.style.left = `-${(imgCount - Math.ceil(slider.current.offsetWidth / (width+27))) * (width)+27*(imgCount - Math.ceil(slider.current.offsetWidth / (width+27)))}px`
      return
    }

    sliderLine.style.left = `-${count * width + (27*count)}px`
  }
  
  return (
    <>
    <div onClick={scrollLeft} className="arrow arrow-left">&lt;</div>
      <div ref={slider} className="slider">
        <div className="slider-line">
          <div className="card">
            <img src={magas} alt="magas" />
          </div>
          <div className="card">
            <img src={magas} alt="magas" />
          </div>
          <div className="card">
            <img src={magas} alt="magas" />
          </div>
          <div className="card">
            <img src={magas} alt="magas" />
          </div>
          <div className="card">
            <img src={magas} alt="magas" />
          </div>
          <div className="card">
            <img src={magas} alt="magas" />
          </div>
        </div>
      </div>
    <div onClick={scrollRigth} className="arrow arrow-rigth">&gt;</div>
    </>
  );
};

export default Slider;