import React from 'react'
import { FooterStyle } from './Footer.style'
import arrowUp from '../../Images/Layout/icon-arrow-up.svg'


function Footer() {
  return (
    <FooterStyle>
      <div>
              <div className='logo'>
                {/* require funktionen bruges til at finde image filen via en relativ path */}
<img src={require('../../Images/whiteLogo.png')} alt="logo" />            
<p>Affaldsguiden</p>
      </div>

            <p className='text'>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p>
            <p className='copyright'>©2023 Affaldsguiden. </p>
      </div>
              {/* en div med en onclick event med en 'window.scrollTo(0, 0)' event der scroller browser vinduet til x og y kordinaten 0, 0 hvilket vil sige det øverste højre hjørne af skærmen */}
            <div onClick={() => window.scrollTo(0, 0)} className='toTop'><p>Til toppen</p><img src={arrowUp} alt="back to top" /></div>
    </FooterStyle>
  )
}

export default Footer