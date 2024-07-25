import React from 'react'

//todo 1. एक Basic Functional Component बनाएं:

const MyComponent = ({name, age}) => {
    return (
        <>
            <h1>Hello, {name || 'user'} </h1>
            <h1>Age: {age || 'NA'} </h1>
        </>
    )
}

export default MyComponent