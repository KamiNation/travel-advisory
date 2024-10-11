import React from 'react'
import { NavLink } from 'react-router-dom'
import './icon.css'

const Icon = ({link,icon,onClick,text}) => {
  return (<>
    <NavLink to={link} onClick={onClick} id='iccon'>
        <span id='span2'>{icon}<p>{text}</p></span>
    </NavLink></>
  )
}

export default Icon
