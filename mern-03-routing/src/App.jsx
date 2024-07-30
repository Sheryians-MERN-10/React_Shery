import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import NavbarActive from './components/NavbarActive';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import UsernameForm from './components/form/UsernameForm'
import ShowUsername from './components/form/ShowUsername'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarActive />
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/createUsername' element={<UsernameForm />} />

        {/* the Outlet component is used to render child routes within a parent route. */}
        <Route path='/display/' element={<UsernameForm />} >
          <Route path='/display/:username' element={<ShowUsername />} />
        </Route>

        <Route path='*' element={<h1 className='text-9xl text-center text-red-600 font-extrabold'>Page Not Found</h1>} />
      </Routes >
      <Footer />
    </>
  )
}

export default App