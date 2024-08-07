import React from 'react'

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">MyApp</div>
                <ul className='navbar-links'>
                    {/* <li>
                        <NavLink to='/createUsername' className={`${(navData)=> navData.isActive ? "active-link": "bg-black"} navbar-link`}>Create</NavLink> 
                    </li> */}

                    <NavLink
                        to='/'
                        className={(navData) =>
                            `${navData.isActive ? 'active-link' : ''} navbar-link`
                            // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                        }
                    >
                        Home
                    </NavLink>

                    <li>
                        <NavLink
                            to='/about'
                            className={(navData) =>
                                `${navData.isActive ? 'active-link' : ''} navbar-link`
                            }>About</NavLink>
                    </li>
                </ul>
                <ul className="navbar-links">
                    <li>
                        <NavLink
                            to="/gallery"
                            className={(navData) =>
                                `${navData.isActive ? 'active-link' : ''} navbar-link`
                            }>Gallery</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar