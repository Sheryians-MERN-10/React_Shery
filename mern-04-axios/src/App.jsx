import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Users from './components/Users'
import { Route, Routes } from 'react-router-dom'



const App = () => {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />

      </Routes>
    </>
  )
}

export default App