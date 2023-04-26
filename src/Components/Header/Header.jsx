import React from 'react';
import './Header.scss'
import logo from '../../img/Header/logo.svg'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {

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
        <NavLink to='/' className="header__logo">
          <img src={logo} alt="logo" />
          <span>Союз <br /> Писателей </span>
        </NavLink>
        <div className="header__phone">
          <a href="tel:+7 (906) 488 87-74">+7 (906) 488 87-74</a>
        </div>

        <div onClick={NavActive} className="header__icon">
          <span></span>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-link">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link">Главная</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/documents" className="header__nav-link">Документы</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/about-us" className="header__nav-link">
                О нас
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.5L8 6.5L15 0.5" stroke="white" strokeWidth="1.3"/>
                </svg>
              </NavLink>
              <ul className='submenu'>
                <li><NavLink to="/projects">Проекты</NavLink></li>
                <li><NavLink to="/writers">Писатели</NavLink></li>
                <li><NavLink to="/creation">Творчество</NavLink></li>
              </ul>
            </li>
            <li className="header__nav-item">
              <NavLink to="/contacts" className="header__nav-link">Контакты</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;