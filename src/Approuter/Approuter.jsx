import React from 'react'
import Frontpage from '../Pages/Frontpage/Frontpage'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Review from '../Pages/Review/Review'
import Ticket from '../Pages/Ticket/Ticket'

function Approuter() {
  return (
    <Routes>
        <Route index element={<Frontpage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/review' element={<Review />}/>
        <Route path='/ticket' element={<Ticket />}/>
    </Routes>
  )
}

export default Approuter