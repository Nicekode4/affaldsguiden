import React from 'react'
import { TrashCardStyle } from './TrashCard.style'

function TrashCard({color, title, img}) {
  return (
    <TrashCardStyle color={color || 'gray'}>
        <img src={require(`../../Images/Guide/Categories/${img || 'asbest.jpg'}`)} alt="category image" />
        <h2>{title || 'Asbest'}</h2>
    </TrashCardStyle>
  )
}

export default TrashCard