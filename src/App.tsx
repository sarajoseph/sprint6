import React from 'react'
import { Calculator } from './pages/Calculator'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { BudgetUrl } from './pages/BudgetUrl'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="budget/:params" element={<BudgetUrl />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
