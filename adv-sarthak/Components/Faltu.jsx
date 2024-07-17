import { MyContext } from '@/LearnContext/Context'; // Import the MyContext context from Context.js
import React, { useContext } from 'react'; // Import necessary modules

const Faltu = () => { // Define a component named Faltu
    // const user1 = useContext(MyContext); // Use useContext hook to access the context and assign it to user1

    // const [user2, roll2] = useContext(MyContext); // Use useContext hook to access the context and destructure user2 and roll2 from it

    const { user, setUser } = useContext(MyContext); // Use useContext hook to access the context and destructure user and setUser from it

    return (
        <>
            {/* <p>Faltu Page: {user1}</p> Display user1 obtained from context */}

            {/* <p>Faltu Page: {user2}, and roll: {roll2} </p> Display user2 and roll2 obtained from context */}

            <p>Faltu Page: {user} </p> {/* Display user obtained from context */}
        </>
    )
}

export default Faltu; // Export the Faltu component as default
