import React from 'react'
import { HeaderStyle } from './Header.style'
import Navbar from '../Navbar/Navbar'
import logo from '../../Images/Layout/logo.svg'

function Header() {
  return (
    <HeaderStyle>
      <div>
           <img src={logo} alt="Logo" />  
           <p>Affaldsguiden</p> 
      </div>

      <Navbar />
    </HeaderStyle>
  )
}

export default Header