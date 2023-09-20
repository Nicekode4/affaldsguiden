import React from 'react'
import { HeaderStyle } from './Header.style'
import Navbar from '../Navbar/Navbar'
import logo from '../../Images/Layout/logo.svg'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <HeaderStyle>
      <div onClick={() => navigate('/') } className='logoDiv'>
           <img src={logo} alt="Logo" />  
           <p>Affaldsguiden</p> 
      </div>

      <Navbar />
    </HeaderStyle>
  )
}

export default Header