import React, { useEffect, useState } from 'react'
import { HeaderStyle } from './Header.style'
import Navbar from '../Navbar/Navbar'
import logo from '../../Images/Layout/logo.svg'
import { useNavigate } from 'react-router-dom'
import NavbarMobile from '../Navbar/NavbarMobile'
console.log(window.innerWidth);
function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  // Lytter efter ændringer i skærm størrelsen
useEffect(() => {
const updateWidth = () => {
  setWindowWidth(window.innerWidth)
}

window.addEventListener('resize', updateWidth);

return () => {
  window.removeEventListener('resize', updateWidth);
}
}, [])

  // Navigate hooket
  const navigate = useNavigate()
  return (
    <HeaderStyle>
      {/* navigate funktionen bruges til at navigere forskellige routes */}
      <div onClick={() => navigate('/') } className='logoDiv'>
           <img src={logo} alt="Logo" />  
           <p>Affaldsguiden</p> 
      </div>
      {windowWidth > 768 ? <Navbar /> : <NavbarMobile />}
    </HeaderStyle>
  )
}

export default Header