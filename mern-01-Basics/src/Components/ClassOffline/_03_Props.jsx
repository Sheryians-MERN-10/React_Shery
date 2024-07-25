import React, { useState } from 'react'
import _03_PropsChild from './_03_PropsChild'
const _03_Props = () => {

    const [val, setVal] = useState(54);

    return (
        <>
            <h1> Parent Component</h1>
            <p>Parent Value : {val}</p>
            
            <_03_PropsChild val={val} setVal={setVal} />

        </>

    )
}

export default _03_Props