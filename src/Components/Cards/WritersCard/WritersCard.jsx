import React from 'react'
import './WritersCard.scss'
import ProjectImg from "../../../img/project-img.png";

export const WritersCard = () => {
    return (
        <div className='writers-card'>
            <div className="writers-card__img">
                <img src={ProjectImg} alt="img" />
            </div>
            <div className="writers-card__content">
                <h4 className="writers-card__title">Совещания в регионах</h4>
                <p className="writers-card__text">Организация и поддержка региональных молодежных совещаний <span><a href='#'>Читать еще...</a></span></p>
            </div>
        </div>
    )
}

export default WritersCard