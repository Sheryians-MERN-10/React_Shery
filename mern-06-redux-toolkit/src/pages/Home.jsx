import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decr, incr } from '../store/reducers/counterSlice';

const Home = () => {
  const count = useSelector((state) => state.counter.myValue);
  const dispatch = useDispatch();
  console.log(useSelector((state)=> console.log(state)));

  return (
    <>
      <div className='container my-32 text-center'>
        <button onClick={()=>dispatch(decr(3))} className='px-6 py-2 bg-red-500 font-extrabold text-white text-3xl' > - </button>
        <span className='px-3 mx-6 font-extrabold text-2xl' >{count}</span>
        <button onClick={()=> dispatch(incr(10))} className='px-6 py-2 bg-blue-500 font-extrabold text-white text-3xl' > + </button>
      </div>

    </>
  )
}

export default Home