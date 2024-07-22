import React, { useEffect, useState } from 'react'

const LearnHooks = () => {
  // 1. useState hook
  const [count, setCount] = useState(12)
  
  // 2. useEffect hook
  useEffect(() => {
    document.title = `Clicked ${count} times`
  
    return () => {
      0
    }
  }, [count])
  
  
  return (
    <>
      <h1>LearnHooks</h1>
      <h2>1. use State hooks : </h2>

      <button className='bg-amber-500 hover:bg-amber-600 text-xl font-semibold px-3 py-1' type="submit" onClick={() => setCount(count + 1)}>Increment : {count} </button>
      
    </>
  )
}

export default LearnHooks