import React, { useState } from 'react'
import { FrontpageStyle } from './Frontpage.style'
import slide3 from '../../Images/Slideshow/affald-skov-1.jpg'
import slide2 from '../../Images/Slideshow/affald-strand-2.jpg'
import slide1 from '../../Images/Slideshow/malerspande.jpg'
import { useNavigate } from 'react-router-dom'
import leftArrow from '../../Images/Layout/icon-arrow-left.svg'
import rightArrow from '../../Images/Layout/icon-arrow-right.svg'

function Frontpage() {
  const navigate = useNavigate()

  //Array med alle slider billederne
  const imgArray = [
    slide1,
    slide2,
    slide3
  ]

  const [slideNum, setSlideNum] = useState(0)

  //Hvis slideNum er større end der er billeder i listen, nulstilles slideNum hooket til 0
  if (slideNum > imgArray.length - 1) {
    setSlideNum(0)
  }

  if (slideNum < 0) {
    setSlideNum(2)
  }

  
  return (
    <FrontpageStyle>
      <section style={{backgroundImage: `url(${imgArray[slideNum]})`}} className='sliderSec'>
        {/* Trækker 1 fra hvordan slideNum statet er pt */}
      <button onClick={() => setSlideNum(slideNum - 1)}><img src={leftArrow} alt="left arrow" /></button>
      <div></div>      
              {/* ligger 1 til hvordan slideNum statet var før */}
      <button onClick={() => setSlideNum(prev => prev + 1)}><img src={rightArrow} alt="right arrow" /></button>
      </section>
      <section className='CTASec'>
<h1>Find og anmeld genbrugsstationer</h1>
<article>
  <button onClick={() => navigate('/stations')}>Find station</button>
  <button onClick={() => navigate('/login')}>Login</button>
</article>
      </section>

      
            <section className='textSec'>              
              <img className='mobileImg' src={require('../../Images/frontpageImg1.png')} alt="Image of trashcan" />
              <article>
                <h2>Din <strong>guide</strong> <strong>til</strong> <strong>sortering</strong></h2>
                <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.</p>
                <button onClick={() => navigate('/sorting')}>Se affaldsguide</button>
              </article>
              <img className='desktopImg' src={require('../../Images/frontpageImg1.png')} alt="Image of trashcan" />
            </section>

            <section className='textSec'>              
              <img src={require('../../Images/FrontpageImg2.png')} alt="Image of trashcan" />
              <article>
                <h2>Bestil <strong>din</strong> <strong>nye</strong> <strong>affaldsbeholder</strong></h2>
                <p>De nye affaldsbeholdere er designet med både funktionalitet og æstetik for øje, hvilket gør den til den perfekte tilføjelse til dit hjem. Med dens robuste konstruktion og stilfulde udseende kan du nu håndtere affaldet på en praktisk og elegant måde.</p>
                <button onClick={() => navigate('/order')}>Bestil nu</button>
              </article>

            </section>
    </FrontpageStyle>
  )
}

export default Frontpage