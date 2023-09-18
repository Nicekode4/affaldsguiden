import React from 'react'
import { FrontpageStyle } from './Frontpage.style'

function Frontpage() {
  return (
    <FrontpageStyle>
      <section className='CTASec'>
<h1>Find og anmeld genbrugsstationer</h1>
<article>
  <button>Find station</button>
  <button>Login</button>
</article>
      </section>

      
            <section className='textSec'>              
              <img src={require('../../Images/frontpageImg1.png')} alt="Image of trashcan" />
              <article>
                <h2>Din guide til sortering</h2>
                <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.</p>
                <button>Se affaldsguide</button>
              </article>

            </section>

            <section className='textSec'>              
              <img src={require('../../Images/FrontpageImg2.png')} alt="Image of trashcan" />
              <article>
                <h2>Bestil din nye affaldsbeholder</h2>
                <p>when an unknown printer took a galley of type and scramble it to make a type specimen book. It has survived not only</p>
                <button>Bestil nu</button>
              </article>

            </section>
            <img src={require('../../Images/Layout/bg-wave-3.svg')} alt="Wave" />
    </FrontpageStyle>
  )
}

export default Frontpage