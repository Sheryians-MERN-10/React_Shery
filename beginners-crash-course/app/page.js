"use client"; // Resolve-Error: Event handlers cannot be passed to Client Component props. If you need interactivity, consider converting part of this to a Client Component.

import React, { useState } from 'react'
import _01_Basics from '@/Components/_01_Basics';
import _02_Prop from '@/Components/_02_Props'
import _03_Route from '@/Components/_03_Route';
import _04_Axios from '@/Components/_04_Axios';

const page = () => {
  return (
    <React.Fragment>
      {/* <_03_Route /> */}

      {/* <_02_Prop /> */}

      {/* <_01_Basics /> */}

      <_04_Axios />

    </React.Fragment>
  )
}

export default page
