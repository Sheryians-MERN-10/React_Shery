import React from 'react'

// const _03_PropsChild = (props) => {
const _03_PropsChild = (props) => {
    const val1 = props.val;
    const setVal1 = props.setVal;


    return (
        <>
            <h1>Child Component</h1>

            <p>Value is : {val} </p>

            <button onClick={()=> setVal(59)}>Change Value</button>
        </>
    )
}

export default _03_PropsChild