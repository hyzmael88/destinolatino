import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inicio from './components/Inicio'
import Celebracion from './components/Celebracion'
import Historia from './components/Historia'
import Tradicion from './components/Tradicion'
import Fin from './components/Fin'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div >
      <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/celebracion' element={<Celebracion/>}/>
      <Route path='/historia' element={<Historia/>}/>
      <Route path='/tradicion' element={<Tradicion/>}/>
      <Route path='/fin' element={<Fin />}/>
      </Routes>
    </div>
  )
}

export default App
