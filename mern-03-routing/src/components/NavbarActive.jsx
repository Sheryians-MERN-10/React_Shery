import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    console.log(location);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">MyApp</div>
                <ul className='navbar-links'>
                    {/* <li>
                        <NavLink to='/createUsername' className={`${(navData)=> navData.isActive ? "active-link": "bg-black"} navbar-link`}>Create</NavLink> 
                    </li> */}

                    <NavLink
                        to='/createUsername'
                        className={(navData) =>
                            `${navData.isActive ? 'active-link' : ''} navbar-link`
                            // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                        }
                    >
                        Create
                    </NavLink>

                    <li>
                        <NavLink
                            to='/display'
                            className={(navData) =>
                                `${navData.isActive ? 'active-link' : ''} navbar-link`
                            }>Show Usernames</NavLink>
                    </li>
                </ul>
                <ul className="navbar-links">
                    <li>
                        <NavLink
                            to="/"
                            className={(navData) =>
                                `${navData.isActive ? 'active-link' : ''} navbar-link`
                            }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={(navData) =>
                                `${navData.isActive ? 'active-link' : ''} navbar-link`
                            }>About</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={(navData) =>
                                `${navData.isActive ? 'active-link' : ''} navbar-link`
                            }>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav