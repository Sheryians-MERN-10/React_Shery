import React, { useEffect, useState } from 'react'

const _02_useEffectAdv = () => {

  const [counter, setCounter] = useState(0);
  const [temp, setTemp] = useState(0);

  // 1. Basic Usage:
  // Description: The simplest form of useEffect takes a callback function and runs it after every render.
  useEffect(() => {
    console.log(counter, 'Increment - Runs after every render')
  })
  useEffect(() => {
    console.log(counter, 'Decrement - Runs after every render')
  })

  // 2. Usage with Dependency Array: 
  // Description: useEffect can take a dependency array as the second argument.This array contains variables that, when changed, trigger the effect to re - run.
  useEffect(() => {
    console.log('Counter value changed:', counter);
  }, [counter])

  // 3. Usage with Empty Dependency Array:
  // Description: Providing an empty dependency array ensures that the effect runs only once after the initial render.
  useEffect(() => {
    console.log('Component mounted: Only once after Initial Render');
  }, []);

  // 4. Cleanup Function:
  // Description:useEffect can return a cleanup function to perform any necessary cleanup when the component unmounts.
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    // Cleanup function
    return () => {
      console.log('Cleanup function  called!');
      clearInterval(intervalId); // Cleanup interval
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount


  const handleIncrement = () => {
    setCounter(counter + 1);
  }
  const handleDecrement = () => {
    setCounter(counter - 1);
  }
  const handleFaltu = () => {
    // do changes to temp
    setTemp(temp + 1);
    console.log('do changes to temp')
  }
  const handleTimer = () => {
    console.log('handle timer');
    const timer_ele = document.querySelector('#timer');
    // timer_ele.classList.toggle('hidden');
  }

  return (
    <>
      <div>_02_useEffectAdv</div>
      <h1 className='my-txt text-teal-500 ' >Count: {counter} </h1>
      <button onClick={handleDecrement} className={`my-btn bg-red-500`} type="button">Decrement</button>
      <button onClick={handleIncrement} className='my-btn' type="button">Increment</button>
      <button onClick={handleFaltu} className='my-btn bg-gray-600' type="button">Faltu Button</button>

      <h2 onClick={handleTimer} id='timer' className='my-txt'>Timer: {timer}</h2>
      <h3 className='my-txt '>{timer}</h3>
    </>
  )
}

export default _02_useEffectAdv;