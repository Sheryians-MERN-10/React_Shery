import React, { useEffect, useState } from 'react'

const Home = () => {
  const [flag, setFlag] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleClick = () => {
    console.log("Flag is Toggled.");
    setFlag(!flag);
  }
  const handleAdmin = () => {
    console.log("Admin is Toggled.");
    setAdmin(!admin);
  }

  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Unmounted");
    }
  }, [])

  return (
    <div className='flex justify-around'>
      <div>
        <button onClick={handleClick} className='px-3 py-1 bg-blue-500 font-semibold text-white'>
          Toggle Flag
        </button>

        <div>
          <h1 className='text-2xl font-bold text-purple-500' >Flag - {flag.toString()} </h1>;
        </div>
      </div>
      <div>
        <button onClick={handleAdmin} className='px-3 py-1 bg-amber-500 font-semibold text-white'>
          Toggle Admin
        </button>

        <div>
          <h1 className='text-2xl font-bold text-purple-500' >Flag - {admin.toString()} </h1>;
        </div>
      </div>

    </div>
  )
}

export default Home