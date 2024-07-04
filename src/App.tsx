import React from 'react'
import { Calculator } from './pages/Calculator'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />      
    </Routes>
    </>
  )
}

export default App
