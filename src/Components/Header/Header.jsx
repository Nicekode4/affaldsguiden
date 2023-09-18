import React from 'react'
import { HeaderStyle } from './Header.style'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <HeaderStyle>
      <div>
           <img src={require('../../Images/logo.png')} alt="Logo" />  
           <p>Affaldsguiden</p> 
      </div>

      <Navbar />
    </HeaderStyle>
  )
}

export default Header