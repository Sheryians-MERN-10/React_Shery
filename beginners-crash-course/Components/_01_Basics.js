import React, { useState } from 'react'

export default () => {

    // 1. -----------------------
    // let a = 55;  // ⛔
    let [marks, setMarks] = useState(55);
    let updateVal = () => {
        console.log('updating value');
        // marks = 66;  // ⛔
        setMarks(66);
    }
    
    return (
        <>
            <div>_01_Basics</div>

            <div className='text-4xl'>
                <p>{marks}</p>
                <div >Hello to React App</div>
            </div>
            <button onClick={updateVal} type="button" className='px-6 py-2 my-6 mx-8 bg-teal-600 rounded-full text-white font-bold' >Update</button>
        </>
    )
}

