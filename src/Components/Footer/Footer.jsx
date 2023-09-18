import React from 'react'
import { FooterStyle } from './Footer.style'

function Footer() {
  return (
    <FooterStyle>
      <div className='logo'>
<img src={require('../../Images/whiteLogo.png')} alt="logo" />            
<p>Affaldsguiden</p>
      </div>

            <p className='text'>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p>
            <p className='copyright'>©2023 Affaldsguiden. </p>
            <p className='toTop'>Til toppen <img src="" alt="back to top" /></p>
    </FooterStyle>
  )
}

export default Footer