import React from 'react'
import './Header.scss'
import HeaderLogo from "../../img/icons/logo.svg";

export const Header = () => {
  function NavActive() {
    let iconHeader = document.querySelector('.header__icon')
    let navMenu = document.querySelector('.header__nav')

    iconHeader.classList.toggle('_active')
    navMenu.classList.toggle('_active')
    document.body.classList.toggle("_lock")
  }

  return (
    <header className='header'>
      <div className="header__shell container">
        <a href='#' className="header__logo">
          <img src={HeaderLogo} alt="" />
          <span>Союз <br /> Писателей </span>
        </a>
        <div className="header__phone">
          <a href="tel:+7 (906) 488 87-74">+7 (906) 488 87-74</a>
        </div>
        <div onClick={NavActive} className="header__icon">
          <span></span>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-link">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Главная</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Документы</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">О нас</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header