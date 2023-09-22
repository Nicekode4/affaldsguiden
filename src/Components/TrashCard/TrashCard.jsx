import React from 'react'
import { TrashCardStyle } from './TrashCard.style'

function TrashCard({color, title, img}) {
  return (
    <TrashCardStyle color={color || '#000000'}>
                      {/* 
                      require funktionen bruges til at finde image filen via en relativ path.
                       hvis img propen ikke er tom bruges den, ellers prøver den at finde asbest.jpg i Categories mappen
                      */}
        <img src={require(`../../Images/Guide/Categories/${img || 'asbest.jpg'}`)} alt="category image" />
        <h2>{title || 'Asbest'}</h2>
    </TrashCardStyle>
  )
}

export default TrashCard