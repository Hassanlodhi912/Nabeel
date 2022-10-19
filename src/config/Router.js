import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from '../components/Signin'
import Signup from '../components/Signup'


const Router = () => {
  return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path="/dashboard" element={<Signin/>}/>
</Routes>
</BrowserRouter>      
  )
}

export default Router
