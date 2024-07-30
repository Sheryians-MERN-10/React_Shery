import React from 'react'
import Nav from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='my-heading' >Home</div>
            <Link to={'/about'} className='my-link' >Know More About Us : </Link>
            <br />
            <Link to={'/contact'} className='my-link' >Connect with us </Link>
        </>
    )
}

export default Home