import React from 'react'
import {Routes , Route} from 'react-router-dom'
import ABOUT from '../views/about'
import Home from '../views/home'
const Index = () => {
  return (
   <Routes>
   <Route exact path='/' element={<Home/>}/>
   <Route exact path='/home' element={<Home/>}/>
   <Route exact path='/about' element={<ABOUT/>}/>
   </Routes>
  )
}

export default Index