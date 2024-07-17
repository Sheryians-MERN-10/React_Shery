"use client"; // This line seems unnecessary and might be a placeholder or comment. It doesn't affect the code.

import React, { createContext, useState } from 'react'; // Import necessary modules

export const MyContext = createContext(); // Create a context named MyContext

const Context = ({ children }) => { // Define a component named Context, which takes children as props
    const username = 'Ayush- MERN Stack Developer'; // Define a variable username
    const roll = 49; // Define a variable roll

    const [user, setUser] = useState('Ayush - MERN Stack Developer'); // Define state variables user and setUser using useState hook

    return (
        <>
            {/* <MyContext.Provider value={username} > */}
            {/* <MyContext.Provider value={[username, roll]} > */}

            <MyContext.Provider value={{ user, setUser }} > {/* Provide the context with value of user and setUser */}
                {children} // Render children components within the context provider
            </MyContext.Provider>
        </>
    )
}

export default Context; // Export the Context component as default
