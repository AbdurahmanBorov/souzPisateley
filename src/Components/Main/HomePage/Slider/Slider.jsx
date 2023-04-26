import React from 'react';
import magas from '../../../../img/Main/magas.png'
import './Slider.scss'

const Slider = () => {
  let count = 0
  let slider = React.useRef()
  let sliderLine = React.useRef()
  console.log(slider);
  function scrollLeft() {
    // // console.log(slider.current.querySelector('.slider-line'));
    // count -= 427
    // sliderLine.current.style.left = `${count}px`
  }
  
  function scrollRight() {
    let imgArr = slider.current.querySelectorAll('.slider-line img')
    let cardCount = imgArr.length
    let width = imgArr[0].offsetWidth
    console.log(width);
    // console.log(slider.current.querySelectorAll('.slider-line img').length);
    count++
    console.log(count);
    if (count == cardCount) {
      count = 0
      sliderLine.current.style.left = `-${count * width}px`
      // sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
    sliderLine.current.style.left = `-${count * width}px`
  }



  return (
    <>
      <div onClick={scrollRight} className="arrow arrow-left">{'<'}</div>
      <div ref={slider} className="slider">
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
        </div>
      </div>
      <div onClick={scrollLeft} className="arrow arrow-rigth">{'>'}</div>
    </>
  );
};

export default Slider;

// ======

// import React from 'react';
// import magas from '../../../../img/Main/magas.png'
// import './Slider.scss'

// const Slider = () => {
//   let images;
//   let sliderLine;
//   let count = 0;
//   let width;
  
//   function init() {
//     console.log('resize');
//     width = document.querySelector('.slider').offsetWidth;
//     sliderLine.style.width = width * images.length + 'px';
//     images.forEach(item => {
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     });
//     rollSlider();
//   }

//   React.useEffect(() => {
//     console.log(34);
//     images = document.querySelectorAll('.slider .slider-line img');
//     sliderLine = document.querySelector('.slider .slider-line');
//     // window.addEventListener('resize', init())

//     init()
//     // return () => {
//     //   window.removeEventListener('resize', init())
//     // }
//   })

//   function rollSlider() {
//     sliderLine.style.transform = 'translate(-' + count * width + 'px)';
//   }

//   return (
//     <>
//       <div className="slider">
//           <div className="slider-line">
//             <img src={magas} alt="magas"/>
//             <img src={magas} alt="magas"/>
//             <img src={magas} alt="magas"/>
//             <img src={magas} alt="magas"/>
//             <img src={magas} alt="magas"/>
//           </div>
//       </div>
//       <div onClick={() => {
//         count++;
//         if (count >= images.length) {
//             count = 0;
//         }
//         rollSlider();
//       }} className="arrow arrow-left">&lt;</div>
//       <div onClick={() => {
//         count--;
//         if (count < 0) {
//             count = images.length - 1;
//         }
//         rollSlider();
//       }} className="arrow arrow-rigth">&gt;</div>
//       {/* <div className="slider">
//         <div ref={sliderLine} className="slider-line">
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//           <div className="card">
//             <img src={magas} alt="magas"/>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Slider;