import React, { useState } from 'react'
import { FrontpageStyle } from './Frontpage.style'
import slide3 from '../../Images/Slideshow/affald-skov-1.jpg'
import slide2 from '../../Images/Slideshow/affald-strand-2.jpg'
import slide1 from '../../Images/Slideshow/malerspande.jpg'

function Frontpage() {
  const imgArray = [
    slide1,
    slide2,
    slide3
  ]
  const [slideNum, setSlideNum] = useState(0)
  if (slideNum > imgArray.length - 1) {
    setSlideNum(0)
  }
  return (
    <FrontpageStyle>
      <section style={{backgroundImage: `url(${imgArray[slideNum]})`}} className='sliderSec'>
      <button onClick={() => setSlideNum(prev => prev + 1)}>Next</button>
      <div></div>
      <button onClick={() => setSlideNum(slideNum + 1)}>Prev</button>
      </section>
      <section className='CTASec'>
<h1>Find og anmeld genbrugsstationer</h1>
<article>
  <button>Find station</button>
  <button>Login</button>
</article>
      </section>

      
            <section className='textSec'>              
              <img className='mobileImg' src={require('../../Images/frontpageImg1.png')} alt="Image of trashcan" />
              <article>
                <h2>Din <strong>guide</strong> <strong>til</strong> <strong>sortering</strong></h2>
                <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.</p>
                <button>Se affaldsguide</button>
              </article>
              <img className='desktopImg' src={require('../../Images/frontpageImg1.png')} alt="Image of trashcan" />
            </section>

            <section className='textSec'>              
              <img src={require('../../Images/FrontpageImg2.png')} alt="Image of trashcan" />
              <article>
                <h2>Bestil <strong>din</strong> <strong>nye</strong> <strong>affaldsbeholder</strong></h2>
                <p>when an unknown printer took a galley of type and scramble it to make a type specimen book. It has survived not only</p>
                <button>Bestil nu</button>
              </article>

            </section>
            <img className='desktopImg' src={require('../../Images/Layout/bg-wave-3.svg')} alt="Wave" />
    </FrontpageStyle>
  )
}

export default Frontpage