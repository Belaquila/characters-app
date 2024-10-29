import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Notfound from './components/Notfound'

function App() {
  
  return (
    <>
      
      <h1>React Characters app</h1>

      <Routes>
        <Route path="/" element={<Homepage />} ></Route>
        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
      
    </>
  )
}

export default App
