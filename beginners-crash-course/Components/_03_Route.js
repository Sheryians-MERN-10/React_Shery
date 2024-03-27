import React from 'react'
import Link from 'next/link'

export default () => {
    return (
        <>
            {/* <div id='link-container' className='bg-amber-300' >
                <a href="/">Home</a>
                <a href="/Nav-Links/About">About</a>
                <a href="/Nav-Links/Login">Login</a>
                <a href="/Nav-Links/Register">Register</a>
            </div> */}


            <div id='link-container' className='bg-amber-300' >
                <Link href="/">Home</Link>
                <Link href="/Nav-Links/About">About</Link>
                <Link href="/Nav-Links/Login">Login</Link>
                <Link href="/Nav-Links/Register">Register</Link>
            </div>
        </>
    )
}

