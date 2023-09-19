import React from 'react'
import { NotFoundStyle } from './NotFound.style'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <NotFoundStyle>
        <h1>Siden blev ikke fundet</h1>
        <h2>Vi er kommet til at smide siden du leder efter til genbrug, så den eksistere ikke længere. </h2>
        <NavLink to={'/'}>Gå til forsiden</NavLink>
    </NotFoundStyle>
  )
}

export default NotFound