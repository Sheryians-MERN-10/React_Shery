import React from 'react'
import Nav from './Navbar'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className='my-heading' >Contact</div>
      <Link to={'/'} className='my-link'>Back to Home</Link>
    </>
  )
}

export default Contact