import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
          <nav className='bg-slate-600 text-white font-bold text-2xl p-4 '>
              <div className='container mx-auto flex justify-center space-x-4 items-center'>
                  <NavLink className={(navData)=> `${navData.isActive ? "underline text-blue-500": ""}` } to="/">Home</NavLink>
                  <NavLink className={(navData)=> `${navData.isActive ? "underline text-blue-500": ""}` } to="/users">Users</NavLink>
              </div>
        </nav>
      </>
  )
}

export default Navbar