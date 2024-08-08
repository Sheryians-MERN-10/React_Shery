import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addData, removeData, fetchByAmountAsync } from '../store/actions/yourAction';

const Home = () => {
  const count = useSelector((state) => state.NameOfStoreSlice.yourValue);  
  const dispatch = useDispatch();
  
  return (
    <>
      <div className='container my-32 text-center flex justify-center gap-5'>
        <button onClick={() => dispatch(decrement(3))} className='px-6 py-2 bg-red-500 font-extrabold text-white text-3xl' > - </button>
        <span className='px-3 mx-6 font-extrabold text-2xl' >{count}</span>
        <button onClick={() => dispatch(increment(10))} className='px-6 py-2 bg-blue-500 font-extrabold text-white text-3xl' > + </button>
        {/* <button onClick={() => dispatch(calculateByAmount(110))} className='px-6 py-2 bg-blue-500 font-extrabold text-white text-3xl' > Calculate By Amount </button> */}
        <button onClick={() => dispatch(fetchByAmountAsync(110))} className='px-6 py-2 bg-blue-500 font-extrabold text-white text-3xl' > Calculate By Amount </button>
      </div>

    </>
  )
}

export default Home