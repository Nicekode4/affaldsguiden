import React from 'react'
import { HeaderStyle } from './Header.style'
import Navbar from '../Navbar/Navbar'
import logo from '../../Images/Layout/logo.svg'
import { useNavigate } from 'react-router-dom'

function Header() {
  // Navigate hooket
  const navigate = useNavigate()
  return (
    <HeaderStyle>
      {/* navigate funktionen bruges til at navigere forskellige routes */}
      <div onClick={() => navigate('/') } className='logoDiv'>
           <img src={logo} alt="Logo" />  
           <p>Affaldsguiden</p> 
      </div>

      <Navbar />
    </HeaderStyle>
  )
}

export default Header