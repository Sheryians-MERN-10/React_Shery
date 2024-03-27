import React from 'react'

const Header = (props) => {
    return (
        <React.Fragment>
            <nav className='text-2xl font-bold flex justify-between px-8 py-4 bg-teal-500 text-white' >
                <h2>LOGO, Hi {props.userName} </h2>
                <div className='flex gap-6 cursor-pointer'>
                    <h2>{props.edit}</h2>
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Login</h2>
                    <h2>Register</h2>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header