import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Technology from './components/Navbar/Technology'
import  Future from './components/Navbar/Future'
import Navbar from './components/Navbar/Navbar'
import BeforeModernSociety from './components/Navbar/BeforeModernSociety'
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
          <Routes>
            <Route path='/'element ={<Home/>}></Route>
            <Route path ='/technology'element  ={<Technology/>}></Route>
            <Route path='/future'element ={<Future/>}></Route>
            <Route path ='/before'element ={<BeforeModernSociety/>}></Route>
          </Routes>
    </div>
  )
}

export default App
