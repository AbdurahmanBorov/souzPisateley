import React from 'react'
import './ButtonLink.scss'
import { NavLink } from 'react-router-dom'

export const Button = ({to}) => {
  return (
    <NavLink to={to} className='btn'>Смотреть еще</NavLink>
  )
}

export default Button