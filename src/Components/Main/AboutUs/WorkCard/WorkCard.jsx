import React from 'react';
import WorkImg from '../../../../img/Main/work-img.png'
import './WorkCard.scss'

const WorkCard = () => {
  return (
    <div className='work-card'>
      <div className="work-card__img">
        <img src={WorkImg} alt="work-img" />
      </div>
      <div className="work-card__content">
        <h4 className="work-card__title">Название</h4>
        <p className="work-card__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
        <span className="work-card__reading"><a href="/">Читать еще...</a></span>
      </div>
    </div>
  );
};

export default WorkCard;