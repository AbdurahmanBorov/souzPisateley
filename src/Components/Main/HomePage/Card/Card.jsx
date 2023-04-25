import React from 'react';
import prizesImg from '../../../../img/Main/prizes-img.png'

const Card = () => {
  return (
    <div className="prizes-block">
      <div className="prizes-block_img-block">
        <img src={prizesImg} alt="prizesImg" />
      </div>
      <div className="prizes-block_title">
        <p>Название награды/премии</p>
        <span className='date'>Год: 2003</span>
      </div>
    </div>
  );
};

export default Card;