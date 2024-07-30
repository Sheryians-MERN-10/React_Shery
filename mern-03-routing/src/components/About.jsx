import React from 'react'
import Nav from './Navbar'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='my-heading' >About</div>
      <Link to={'/'} className='my-link'>Back to Home</Link>
    </>
  )
}

export default About