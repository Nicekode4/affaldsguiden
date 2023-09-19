import React from 'react'
import { StationCardStyle } from './StationCard.style'

function StationCard({data}) {
    console.log(data);

    const iframeLink = `https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${data.latitude},${data.longtitude}&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
  return (
    <StationCardStyle>
            <div className="gmap_canvas">
            <iframe title='googlemap' src={`https://maps.google.com/maps?q=${data.longtitude},${data.latitude}&z=14&output=embed`} 
></iframe>
        </div>
    
    <p className='title'>Lokation</p>
    <p className='text'>Beskrivelse</p>


    <div className='rating'>
        <div className='stars'></div>
        <p>23 andmeldelser</p>
    </div>
    </StationCardStyle>
  )
}

export default StationCard