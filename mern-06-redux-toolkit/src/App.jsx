import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
      </Routes>  
      
    <h1 className="text-3xl font-bold underline bg-teal-500">
      App.jsx
    </h1>
    </>
  )
}

export default App