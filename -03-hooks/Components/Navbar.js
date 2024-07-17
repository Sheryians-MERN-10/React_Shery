import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
      <>
        <nav className="bg-orange-500 py-4 px-6">
          <ul className="flex font-bold text-4xl gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Nav-Links/About/">About</Link>
            </li>
            <li>
              <Link href="/Nav-Links/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navbar