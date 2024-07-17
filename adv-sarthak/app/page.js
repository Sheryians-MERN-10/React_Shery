"use client";

import React from 'react'
import _01_FetchAPI from '@/Components/_01_FetchAPI'
import Context from '@/LearnContext/Context';
import Faltu from '@/Components/Faltu';
import Header from '@/Components/Header';

const page = () => {
  
  return (
    <>
      <Header />

      <h2>Fetch API</h2>
      {/* <_01_FetchAPI /> */}
            
      <Faltu/>  
    </>

  )
}

export default page