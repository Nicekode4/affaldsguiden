import React from 'react'
import Frontpage from '../Pages/Frontpage/Frontpage'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Review from '../Pages/Review/Review'
import Ticket from '../Pages/Ticket/Ticket'
import Trashguide from '../Pages/Trashguide/Trashguide'

function Approuter() {
  return (
    <Routes>
        <Route index element={<Frontpage />}/>
        <Route path='/sortering' element={<Trashguide />}/>
        <Route path='/review' element={<Review />}/>
        <Route path='/ticket' element={<Ticket />}/>
    </Routes>
  )
}

export default Approuter